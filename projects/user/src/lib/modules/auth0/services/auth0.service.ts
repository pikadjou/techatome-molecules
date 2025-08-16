import { Inject, Injectable } from '@angular/core';

import { AuthService, User } from '@auth0/auth0-angular';
import { distinct, filter, tap } from 'rxjs';

import { Logger, MappingApiType } from '@camelot/server';
import { CamConfigurationService } from '@camelot/services';
import { isNonNullable, trigram } from '@camelot/utils';

import { CamAuthService } from '../../user/services/auth.service';
import { CamUserService } from '../../user/services/user.service';

const apiRoutes: MappingApiType = {
  GetUserProfile: {
    type: 'GET',
    url: '{ApiUrl}/UserProfile',
  },
};

@Injectable({
  providedIn: 'root',
})
export class CamAuth0Service extends CamAuthService<User> {
  get trigram() {
    return trigram(this.user$.value?.nickname);
  }

  get firstLetter() {
    const name = this.user$.value?.nickname;
    if (!name) {
      return '-';
    }
    return name[0].toUpperCase();
  }

  get userProfile$() {
    return this.userService.userProfile$;
  }

  constructor(
    @Inject(AuthService) public auth: AuthService,
    @Inject(CamUserService) public userService: CamUserService,
    @Inject(CamConfigurationService)
    public configurationService: CamConfigurationService
  ) {
    super(apiRoutes);

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
                permissions: user['merlinsoftware/permissions'],
                roles: user['merlinsoftware/roles'],
                features: user['merlinsoftware/features'],
              },
              true
            );
            configurationService.set(user);
            this.fetchUserProfile().subscribe();
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

  public fetchUserProfile() {
    return this.userService.fetchUserProfile();
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
