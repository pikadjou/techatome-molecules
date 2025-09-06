import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { TaRoutes } from '@ta/menu';
import { TaPermissionsService } from '../services/permissions.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(TaPermissionsService);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFLdkUsTUFBTSxPQUFPLFNBQVM7SUFHcEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEIsd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUN0QyxXQUFXLENBQUMsSUFBNEIsRUFBRSxLQUEwQjtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQzdDLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7cUJBQU0sQ0FBQztvQkFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ25CLE9BQU8sS0FBSyxDQUFDO2dCQUNmLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUN2RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDO0lBQ2xELENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7K0dBMUJVLFNBQVM7bUhBQVQsU0FBUyxjQUZSLE1BQU07OzRGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFSb3V0ZXMgfSBmcm9tICdAdGEvbWVudSc7XG5cbmltcG9ydCB7IFRhUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGVybWlzc2lvbnMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQge1xuICBwdWJsaWMgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChUYVBlcm1pc3Npb25zU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbiAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UucmVjZWl2ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UudXBkYXRlZCQucGlwZShcbiAgICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVkaXJlY3QoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0UmVkaXJlY3QoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0UmVkaXJlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChUYVJvdXRlcy5nZXRMb2dpbigpKTtcbiAgfVxufVxuIl19