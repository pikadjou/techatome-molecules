import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, filter, map } from 'rxjs';

import { isNonNullable } from '@ta/utils';

export type Level = 'authenticated' | 'unauthenticated' | 'authorize' | 'administrator';

export type GuardInfo = {
  guards?: string[];
  roles?: string[];
  features?: string[];
};

@Injectable({
  providedIn: 'root',
})
export class TaPermissionsService {
  private _updated$ = new BehaviorSubject<number | null>(null);
  private _isFill = { permissions: false, isAuthenticated: false };

  public features: string[] = [];
  public guards: string[] = [];
  public roles: string[] = [];
  public isAuthenticated: boolean = false;

  public updated$ = this._updated$.pipe(filter(isNonNullable));

  get received() {
    return this._updated$.value !== null;
  }

  constructor() {}

  public set(info: GuardInfo | null, isAuthenticated: boolean) {
    this.setGuard(info);

    this.setSilentAuthenticated(isAuthenticated);

    this._canYouUpdate();
  }

  public setGuard(info: GuardInfo | null) {
    if (info) {
      this.features = info.features ?? [];
      this.roles = info.roles ?? [];
      this.guards = info.guards ?? [];

      this._isFill.permissions = true;
      this._canYouUpdate();
    }
  }

  public setSilentAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
    this._isFill.isAuthenticated = true;

    this._canYouUpdate();
  }
  public setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;

    this._updated$.next(Date.now());
  }

  public hasRole$(role: string) {
    return this._updated$.pipe(map(() => this.hasRole(role)));
  }
  public hasRole(role: string) {
    return this.roles.some(x => x === role);
  }

  public canDirectAccess(feature: string, level: Level) {
    if (level === 'authenticated') {
      return this.isAuthenticated;
    }
    if (level === 'unauthenticated') {
      return !this.isAuthenticated;
    }

    if (level === 'authorize') {
      return this.features.includes(feature);
    }

    if (!feature) {
      return true;
    }

    return false;
    // const featureGuard = this.guards[feature];
    // if (!featureGuard) {
    //   return true;
    // }

    // return accessLevels.indexOf(featureGuard) >= accessLevels.indexOf(level);
  }

  public canAccess$(feature: string, level: Level): Observable<boolean> {
    return this._updated$.pipe(map(() => this.canDirectAccess(feature, level)));
  }

  private _canYouUpdate() {
    if (!this._isFill.isAuthenticated || !this._isFill.permissions) {
      return;
    }
    this._updated$.next(Date.now());
  }
}
