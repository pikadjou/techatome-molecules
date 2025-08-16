import { map } from 'rxjs/operators';

import { BehaviorSubject, Observable, filter } from 'rxjs';

import { Logger } from '@camelot/server';
import { isNonNullable } from '@camelot/utils';

/** @deprecated */
export class PermissionsCore {
  private _updated$ = new BehaviorSubject<number | null>(null);
  private _isFill = { permissions: false, isAuthenticated: false };

  public guards: { [index: string]: string[] } = {};
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
    },
    isAuthenticated: boolean
  ) {
    Logger.LogInfo('[PERMISSIONS] List brut:', info.permissions);

    this.guards = {};
    if (info.permissions) {
      for (let perm of info.permissions) {
        const access = perm.split(':');

        if (!this.guards[access[1]]) {
          this.guards[access[1]] = [];
        }
        this.guards[access[1]].push(access[0]);
      }
    }

    this.roles = info.roles || [];

    this._isFill.permissions = true;

    this.setSilentAuthenticated(isAuthenticated);

    this._canYouUpdate();
    Logger.LogInfo('[PERMISSIONS] List:', this.guards, this.roles);
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
    return this.roles.some(x => x.includes(role));
  }

  public canDirectAccess(feature: string, level: string): boolean {
    if (level === 'authenticated') {
      return this.isAuthenticated;
    }

    if (!feature) {
      return true;
    }

    const featureGuard = this.guards[feature];
    if (!featureGuard) {
      return false;
    }

    if (featureGuard.includes('all')) {
      return true;
    }

    if (!featureGuard.includes(level)) {
      return false;
    }

    return true;
  }

  public canAccess(feature: string, level: string | 'authenticated' | 'authorize'): Observable<boolean> {
    return this._updated$.pipe(map(() => this.canDirectAccess(feature, level)));
  }

  private _canYouUpdate() {
    if (!this._isFill.isAuthenticated || !this._isFill.permissions) {
      return;
    }
    this._updated$.next(Date.now());
  }
}

/** @deprecated */
export const Permissions = new PermissionsCore();
