import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { AuthClientConfig, AuthService, User } from '@auth0/auth0-angular';
import { Observable, distinct, filter, switchMap, take, tap } from 'rxjs';

import { Logger } from '@ta/server';
import { TaTranslationService } from '@ta/translation';
import { isNonNullable } from '@ta/utils';

import { TaAuthService } from '../../user/services/auth.service';
import { TA_USER_SERVICE } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class TaAuth0Service extends TaAuthService {
  get userProfile$() {
    return this._userService.userProfile.get$();
  }
  private _auth = inject(AuthService);
  private _userService = inject(TA_USER_SERVICE);
  private _translation = inject(TaTranslationService);
  private _http = inject(HttpClient);
  private _authClientConfig = inject(AuthClientConfig);

  constructor() {
    super();

    this._auth.user$
      .pipe(
        filter(isNonNullable),
        distinct(user => user?.sub),
        tap(user => this.user$.next(user || null)),
        tap(user => {
          Logger.LogInfo('user info', user);
          if (user) {
            this._permissionsService.set(null, true);
          }
        })
      )
      .subscribe();

    this._auth.error$
      .pipe(
        tap(errors => {
          this.isLoading$.next(false);

          Logger.LogError('[USERSERVICE] error on authentication', errors);
        })
      )
      .subscribe();

    this._auth.appState$
      .pipe(
        tap(state => {
          Logger.LogInfo('[USERSERVICE] state', state);
        })
      )
      .subscribe();

    this._auth.isAuthenticated$
      .pipe(
        tap(isAuthenticated => {
          this._serverService.isAuthenticated = isAuthenticated;
          if (isAuthenticated) {
            this._permissionsService.setSilentAuthenticated(isAuthenticated);
          } else {
            this._permissionsService.setAuthenticated(isAuthenticated);
            this.isLoading$.next(false);
          }
        })
      )
      .subscribe();
  }

  public fetchUserProfile$() {
    return this._userService.fetchUserProfile$().pipe(tap(() => this.isLoading$.next(false)));
  }

  public changePassword$(): Observable<string> {
    const config = this._authClientConfig.get();

    return this._auth.user$.pipe(
      filter(isNonNullable),
      take(1),
      switchMap((user: User) =>
        this._http.post(
          `https://${config.domain}/dbconnections/change_password`,
          {
            client_id: config.clientId,
            connection: 'Username-Password-Authentication',
            email: user.email,
          },
          { responseType: 'text' }
        )
      )
    );
  }

  public load() {}
  public login() {
    this._auth.loginWithRedirect({
      authorizationParams: {
        ui_locales: this._translation.getLanguage(),
      },
    });
  }
  public signin() {
    this._auth.loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        ui_locales: this._translation.getLanguage(),
      },
    });
  }
  public logout() {
    return new Promise<null>(resolve => {
      this._auth.logout();
    });
  }
}
