import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { TaRoutes } from '@ta/menu';
import { CamPermissionsService } from '../services/permissions.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class FeatureGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(CamPermissionsService);
    }
    canActivate(route) {
        const level = route.data['level'];
        const feature = route.data['feature'];
        if (this._permissionsService.received === true) {
            return this._isValidPermission(feature, level);
        }
        return this._permissionsService.updated$.pipe(map(() => {
            return this._isValidPermission(feature, level);
        }));
    }
    setRedirect() {
        this.router.navigateByUrl(TaRoutes.getHome());
    }
    _isValidPermission(feature, level) {
        if (this._permissionsService.canDirectAccess(feature, level)) {
            return true;
        }
        this.setRedirect();
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9mZWF0dXJlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxxQkFBcUIsRUFBb0MsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBUzFHLE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxCLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFFdEMsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sa0JBQWtCLENBQUMsT0FBZSxFQUFFLEtBQWE7UUFDdkQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7K0dBN0JVLFlBQVk7bUhBQVosWUFBWSxjQUZYLE1BQU07OzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFSb3V0ZXMgfSBmcm9tICdAdGEvbWVudSc7XG5cbmltcG9ydCB7IENhbVBlcm1pc3Npb25zU2VydmljZSwgRG9tYWluLCBMZXZlbCwgUGVybWlzc2lvbkZlYXR1cmUgfSBmcm9tICcuLi9zZXJ2aWNlcy9wZXJtaXNzaW9ucy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlUm91dGVEYXRhIHtcbiAgZmVhdHVyZTogUGVybWlzc2lvbkZlYXR1cmUgfCBEb21haW47XG4gIGxldmVsOiBMZXZlbDtcbn1cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlR3VhcmQge1xuICBwdWJsaWMgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChDYW1QZXJtaXNzaW9uc1NlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgY29uc3QgbGV2ZWwgPSByb3V0ZS5kYXRhWydsZXZlbCddO1xuICAgIGNvbnN0IGZlYXR1cmUgPSByb3V0ZS5kYXRhWydmZWF0dXJlJ107XG5cbiAgICBpZiAodGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnJlY2VpdmVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXNWYWxpZFBlcm1pc3Npb24oZmVhdHVyZSwgbGV2ZWwpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnVwZGF0ZWQkLnBpcGUoXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWYWxpZFBlcm1pc3Npb24oZmVhdHVyZSwgbGV2ZWwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNldFJlZGlyZWN0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoVGFSb3V0ZXMuZ2V0SG9tZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzVmFsaWRQZXJtaXNzaW9uKGZlYXR1cmU6IHN0cmluZywgbGV2ZWw6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuY2FuRGlyZWN0QWNjZXNzKGZlYXR1cmUsIGxldmVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UmVkaXJlY3QoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==