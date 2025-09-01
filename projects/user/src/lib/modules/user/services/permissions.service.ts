import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, filter, map } from 'rxjs';

import { Logger } from '@ta/server';
import { isNonNullable } from '@ta/utils';

export type Level = 'authenticated' | 'authorize' | 'reader' | 'contributor' | 'administrator' | 'read';

export type PermissionFeature = 'chift' | 'ticketing';
export type Domain =
  | 'automation'
  | 'invoice'
  | 'contact'
  | 'task'
  | 'project'
  | 'quotation'
  | 'maintenance'
  | 'conversation'
  | 'user'
  | 'document'
  | 'organization';

const accessLevels = ['reader', 'contributor', 'administrator'];

@Injectable({
  providedIn: 'root',
})
export class TaPermissionsService {
  private _updated$ = new BehaviorSubject<number | null>(null);
  private _isFill = { permissions: false, isAuthenticated: false };

  public features: (string | PermissionFeature)[] = [];
  public guards: { [index: string]: Level } = {};
  public roles: string[] = [];
  public isAuthenticated: boolean = false;

  public updated$ = this._updated$.pipe(filter(isNonNullable));

  get received() {
    return this._updated$.value !== null;
  }

  constructor() {}

  public set(
    info: {
      permissions: string[];
      roles: string[];
      features: PermissionFeature[];
    },
    isAuthenticated: boolean
  ) {
    Logger.LogInfo('[PERMISSIONS] List brut:', info.permissions);

    this.features = info.features ?? [];
    this.roles = info.roles ?? [];

    this.guards = this.roles.reduce<typeof this.guards>((acc, role) => {
      if (!role.includes('-')) {
        return acc;
      }
      const [domain, access] = role.split('-');

      const lastAccess = accessLevels.indexOf(access) > accessLevels.indexOf(acc[domain] || '') ? access : acc[domain];
      return {
        ...acc,
        [domain]: <Level>lastAccess,
      };
    }, {});
    Logger.LogInfo('[PERMISSIONS] Guard', this.guards);

    this._isFill.permissions = true;

    this.setSilentAuthenticated(isAuthenticated);

    this._canYouUpdate();
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

  public hasRole(role: string): boolean {
    return this.roles.some(x => x === role);
  }

  public canDirectAccess(feature: PermissionFeature | Domain | string, level: Level | string) {
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

    const featureGuard = this.guards[feature];
    if (!featureGuard) {
      return true;
    }

    return accessLevels.indexOf(featureGuard) >= accessLevels.indexOf(level);
  }

  public canAccess$(feature: string | PermissionFeature, level: Level | string): Observable<boolean> {
    return this._updated$.pipe(map(() => this.canDirectAccess(feature, level)));
  }

  private _canYouUpdate() {
    if (!this._isFill.isAuthenticated || !this._isFill.permissions) {
      return;
    }
    this._updated$.next(Date.now());
  }
}
