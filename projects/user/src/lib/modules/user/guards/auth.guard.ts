import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { map } from 'rxjs/operators';

import { CamRoutes } from '@ta/menu';
import { Observable } from 'rxjs';

import { CamPermissionsService } from '../services/permissions.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  public readonly _permissionsService = inject(CamPermissionsService);

  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!this._permissionsService.received) {
      return this._permissionsService.updated$.pipe(
        map(() => {
          if (this._permissionsService.isAuthenticated) {
            return true;
          } else {
            this.setRedirect();
            return false;
          }
        })
      );
    }
    if (this._permissionsService.isAuthenticated === false) {
      this.setRedirect();
      return false;
    }
    return this._permissionsService.isAuthenticated;
  }

  public setRedirect(): void {
    this.router.navigateByUrl(CamRoutes.getLogin());
  }
}
