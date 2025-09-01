import { Injectable, inject } from '@angular/core';
import { InjectionToken } from '@angular/core';

import { BehaviorSubject, Observable, filter, switchMap } from 'rxjs';

import { CamBaseService, MappingApiType } from '@ta/server';

import { UserProfile } from './dto/user-profile';
import { TaPermissionsService } from './permissions.service';

export const CAM_AUTH_TOKEN = new InjectionToken<CamAuthService>('CamAuthService');

@Injectable({
  providedIn: 'root',
})
export abstract class CamAuthService extends CamBaseService {
  public readonly _permissionsService = inject(TaPermissionsService);
  public isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');

  user$ = new BehaviorSubject<unknown>(null);

  abstract get userProfile$(): Observable<UserProfile | null>;

  abstract fetchUserProfile$(): Observable<UserProfile>;
  abstract load(): void;
  abstract login(): void;
  abstract logout(): Promise<null>;

  constructor(apiRoutes?: MappingApiType) {
    super(apiRoutes);
    this.user$
      .pipe(
        filter(user => !!user),
        switchMap(() => this.fetchUserProfile$())
      )
      .subscribe();
  }
}
