import { Injectable, inject } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { distinct, filter, tap } from 'rxjs';

import { Logger } from '@ta/server';
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

  public load() {}
  public login() {
    this._auth.loginWithRedirect();
  }
  public signin() {
    this._auth.loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }
  public logout() {
    return new Promise<null>(resolve => {
      this._auth.logout();
    });
  }
}
