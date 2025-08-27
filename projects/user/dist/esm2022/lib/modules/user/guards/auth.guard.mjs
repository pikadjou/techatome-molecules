import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { TaRoutes } from '@ta/menu';
import { CamPermissionsService } from '../services/permissions.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(CamPermissionsService);
    }
    canActivate(next, state) {
        if (!this._permissionsService.received) {
            return this._permissionsService.updated$.pipe(map(() => {
                if (this._permissionsService.isAuthenticated) {
                    return true;
                }
                else {
                    this.setRedirect();
                    return false;
                }
            }));
        }
        if (this._permissionsService.isAuthenticated === false) {
            this.setRedirect();
            return false;
        }
        return this._permissionsService.isAuthenticated;
    }
    setRedirect() {
        this.router.navigateByUrl(TaRoutes.getLogin());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFLeEUsTUFBTSxPQUFPLFNBQVM7SUFHcEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEIsd0JBQW1CLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFFL0IsQ0FBQztJQUN0QyxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzdDLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7cUJBQU0sQ0FBQztvQkFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE9BQU8sS0FBSyxDQUFDO2dCQUNmLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO0lBQ2xELENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7K0dBMUJVLFNBQVM7bUhBQVQsU0FBUyxjQUZSLE1BQU07OzRGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFSb3V0ZXMgfSBmcm9tICdAdGEvbWVudSc7XG5cbmltcG9ydCB7IENhbVBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIHtcbiAgcHVibGljIHJlYWRvbmx5IF9wZXJtaXNzaW9uc1NlcnZpY2UgPSBpbmplY3QoQ2FtUGVybWlzc2lvbnNTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5yZWNlaXZlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS51cGRhdGVkJC5waXBlKFxuICAgICAgICBtYXAoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRSZWRpcmVjdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuaXNBdXRoZW50aWNhdGVkID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRSZWRpcmVjdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLmlzQXV0aGVudGljYXRlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRSZWRpcmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFRhUm91dGVzLmdldExvZ2luKCkpO1xuICB9XG59XG4iXX0=