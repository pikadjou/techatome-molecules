import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

import { map } from "rxjs/operators";

import { Observable } from "rxjs";

import { TaRoutes } from "@ta/menu";

import { TaPermissionsService } from "../services/permissions.service";

export interface RoleRouteData {
  role: string;
}
@Injectable({
  providedIn: "root",
})
export class RoleGuard {
  public readonly _permissionsService = inject(TaPermissionsService);

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    const role = route.data["role"];

    if (this._permissionsService.received === true) {
      return this._isValidPermission(role);
    }
    return this._permissionsService.updated$.pipe(
      map(() => {
        return this._isValidPermission(role);
      })
    );
  }

  public setRedirect(): void {
    this.router.navigateByUrl(TaRoutes.getHome());
  }

  private _isValidPermission(role: string) {
    if (this._permissionsService.hasRole(role)) {
      return true;
    }
    this.setRedirect();
    return false;
  }
}
