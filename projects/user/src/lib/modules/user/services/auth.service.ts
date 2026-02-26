import { Injectable, inject } from '@angular/core';
import { InjectionToken } from '@angular/core';

import { BehaviorSubject, Observable, Subject, filter, switchMap } from 'rxjs';

import { MappingApiType, TaBaseService } from '@ta/server';

import { UserProfile } from './dto/user-profile';
import { TaPermissionsService } from './permissions.service';

export const TA_AUTH_TOKEN = new InjectionToken<TaAuthService>('TaAuthService');

@Injectable({
  providedIn: 'root',
})
export abstract class TaAuthService extends TaBaseService {
  public readonly _permissionsService = inject(TaPermissionsService);
  public isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');

  user$ = new BehaviorSubject<unknown>(null);
  readonly isLoading$ = new Subject<boolean>();

  abstract get userProfile$(): Observable<UserProfile | null>;

  abstract fetchUserProfile$(): Observable<UserProfile>;
  abstract load(): void;
  abstract login(): void;
  abstract signin(): void;
  abstract logout(): Promise<null>;

  constructor(apiRoutes?: MappingApiType) {
    super(apiRoutes);
    this.isLoading$.next(true);
    this.user$
      .pipe(
        filter(user => !!user),
        switchMap(() => this.fetchUserProfile$())
      )
      .subscribe();
  }
}
