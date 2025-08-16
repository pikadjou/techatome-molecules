import { Injectable, inject } from '@angular/core';
import { InjectionToken } from '@angular/core';

import { CamBaseService, MappingApiType } from '@ta/server';
import { APPLICATION_CONFIG, IApplicationConfig } from '@ta/utils';
import { BehaviorSubject, Observable, filter, switchMap } from 'rxjs';

import { UserProfile } from './dto/user-profile';
import { CamPermissionsService } from './permissions.service';
import { CamUsersService } from './users.service';

export const CAM_AUTH_TOKEN = new InjectionToken<CamAuthService<any>>('CamAuthService');

@Injectable({
  providedIn: 'root',
})
export abstract class CamAuthService<T> extends CamBaseService {
  public readonly _permissionsService = inject(CamPermissionsService);
  public isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');

  user$ = new BehaviorSubject<T | null>(null);

  abstract get userProfile$(): BehaviorSubject<UserProfile | null>;
  abstract get trigram(): string | null | undefined;
  abstract get firstLetter(): string | null;

  abstract fetchUserProfile(): Observable<UserProfile>;
  abstract load(): void;
  abstract login(): void;
  abstract logout(): Promise<null>;

  private _applicationConfig: IApplicationConfig = inject(APPLICATION_CONFIG);
  private _userService: CamUsersService = inject(CamUsersService);

  constructor(apiRoutes?: MappingApiType) {
    super(apiRoutes);
    this.user$
      .pipe(
        filter(user => !!user),
        filter(() => this._applicationConfig.isCustomerApplication),
        switchMap(() => this.fetchUserContactIds())
      )
      .subscribe();
  }

  public fetchUserContactIds() {
    return this._userService.fetchCurrentUserContactIds$();
  }
}
