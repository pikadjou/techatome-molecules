import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { TaRoutes } from '@ta/menu';

import { CamPermissionsService, Domain, Level, PermissionFeature } from '../services/permissions.service';

export interface FeatureRouteData {
  feature: PermissionFeature | Domain;
  level: Level;
}
@Injectable({
  providedIn: 'root',
})
export class FeatureGuard {
  public readonly _permissionsService = inject(CamPermissionsService);

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    const level = route.data['level'];
    const feature = route.data['feature'];

    if (this._permissionsService.received === true) {
      return this._isValidPermission(feature, level);
    }
    return this._permissionsService.updated$.pipe(
      map(() => {
        return this._isValidPermission(feature, level);
      })
    );
  }

  public setRedirect(): void {
    this.router.navigateByUrl(TaRoutes.getHome());
  }

  private _isValidPermission(feature: string, level: string) {
    if (this._permissionsService.canDirectAccess(feature, level)) {
      return true;
    }
    this.setRedirect();
    return false;
  }
}
