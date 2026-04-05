import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { TaRoutes } from "@ta/menu";
import { TaPermissionsService } from "../services/permissions.service";
import * as i0 from "@angular/core";
export class FeatureGuard {
    constructor() {
        this._permissionsService = inject(TaPermissionsService);
        this._router = inject(Router);
    }
    canActivate(route) {
        const level = route.data["level"];
        const feature = route.data["feature"];
        if (this._permissionsService.received === true) {
            return this._isValidPermission(feature, level);
        }
        return this._permissionsService.updated$.pipe(map(() => {
            return this._isValidPermission(feature, level);
        }));
    }
    setRedirect() {
        this._router.navigateByUrl(TaRoutes.getHome());
    }
    _isValidPermission(feature, level) {
        if (this._permissionsService.canDirectAccess(feature, level)) {
            return true;
        }
        this.setRedirect();
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGuard, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGuard, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9mZWF0dXJlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBMEIsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFTLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBUzlFLE1BQU0sT0FBTyxZQUFZO0lBSHpCO1FBSWtCLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTNELFlBQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0EyQmxDO0lBekJDLFdBQVcsQ0FBQyxLQUE2QjtRQUN2QyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQy9DLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE9BQWUsRUFBRSxLQUFZO1FBQ3RELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM3RCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOytHQTdCVSxZQUFZO21IQUFaLFlBQVksY0FGWCxNQUFNOzs0RkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVGFSb3V0ZXMgfSBmcm9tIFwiQHRhL21lbnVcIjtcblxuaW1wb3J0IHsgTGV2ZWwsIFRhUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlUm91dGVEYXRhIHtcbiAgZmVhdHVyZTogc3RyaW5nO1xuICBsZXZlbDogTGV2ZWw7XG59XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlR3VhcmQge1xuICBwdWJsaWMgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChUYVBlcm1pc3Npb25zU2VydmljZSk7XG5cbiAgcHJpdmF0ZSBfcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG5cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgY29uc3QgbGV2ZWwgPSByb3V0ZS5kYXRhW1wibGV2ZWxcIl07XG4gICAgY29uc3QgZmVhdHVyZSA9IHJvdXRlLmRhdGFbXCJmZWF0dXJlXCJdO1xuXG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5yZWNlaXZlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKGZlYXR1cmUsIGxldmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS51cGRhdGVkJC5waXBlKFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKGZlYXR1cmUsIGxldmVsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRSZWRpcmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChUYVJvdXRlcy5nZXRIb21lKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNWYWxpZFBlcm1pc3Npb24oZmVhdHVyZTogc3RyaW5nLCBsZXZlbDogTGV2ZWwpIHtcbiAgICBpZiAodGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLmNhbkRpcmVjdEFjY2VzcyhmZWF0dXJlLCBsZXZlbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNldFJlZGlyZWN0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=