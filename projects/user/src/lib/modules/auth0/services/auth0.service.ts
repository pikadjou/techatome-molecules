import { Inject, Injectable } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { distinct, filter, tap } from 'rxjs';

import { Logger } from '@ta/server';
import { isNonNullable } from '@ta/utils';

import { CamAuthService } from '../../user/services/auth.service';
import { TaUserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class CamAuth0Service extends CamAuthService {
  get userProfile$() {
    return this.userService.userProfile.get$();
  }

  constructor(
    @Inject(AuthService) public auth: AuthService,
    @Inject(TaUserService) public userService: TaUserService
  ) {
    super();

    this.auth.user$
      .pipe(
        filter(isNonNullable),
        distinct(user => user?.sub),
        tap(user => this.user$.next(user || null)),
        tap(user => {
          Logger.LogInfo('user info', user);
          if (user) {
            this._permissionsService.set(
              {
                permissions: [],
                roles: [],
                features: [],
              },
              true
            );
          }
        })
      )
      .subscribe();

    this.auth.error$
      .pipe(
        tap(errors => {
          Logger.LogError('[USERSERVICE] error on authentication', errors);
        })
      )
      .subscribe();

    this.auth.appState$
      .pipe(
        tap(state => {
          Logger.LogInfo('[USERSERVICE] state', state);
        })
      )
      .subscribe();

    this.auth.isAuthenticated$
      .pipe(
        tap(isAuthenticated => {
          this._serverService.isAuthenticated = isAuthenticated;
          if (isAuthenticated) {
            this._permissionsService.setSilentAuthenticated(isAuthenticated);
          } else {
            this._permissionsService.setAuthenticated(isAuthenticated);
          }
        })
      )
      .subscribe();
  }

  public fetchUserProfile$() {
    return this.userService.fetchUserProfile$();
  }

  public load() {}
  public login() {
    this.auth.loginWithRedirect();
  }
  public logout() {
    return new Promise<null>(resolve => {
      this.auth.logout();
    });
  }
}
