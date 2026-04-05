import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { TaRoutes } from "@ta/menu";
import { TaPermissionsService } from "../services/permissions.service";
import * as i0 from "@angular/core";
export class RoleGuard {
    constructor() {
        this._permissionsService = inject(TaPermissionsService);
        this._router = inject(Router);
    }
    canActivate(route) {
        const role = route.data["role"];
        if (this._permissionsService.received === true) {
            return this._isValidPermission(role);
        }
        return this._permissionsService.updated$.pipe(map(() => {
            return this._isValidPermission(role);
        }));
    }
    setRedirect() {
        this._router.navigateByUrl(TaRoutes.getHome());
    }
    _isValidPermission(role) {
        if (this._permissionsService.hasRole(role)) {
            return true;
        }
        this.setRedirect();
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RoleGuard, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RoleGuard, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RoleGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9yb2xlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBMEIsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXJDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBUXZFLE1BQU0sT0FBTyxTQUFTO0lBSHRCO1FBSWtCLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTNELFlBQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0EwQmxDO0lBeEJDLFdBQVcsQ0FBQyxLQUE2QjtRQUN2QyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sa0JBQWtCLENBQUMsSUFBWTtRQUNyQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOytHQTVCVSxTQUFTO21IQUFULFNBQVMsY0FGUixNQUFNOzs0RkFFUCxTQUFTO2tCQUhyQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVGFSb3V0ZXMgfSBmcm9tIFwiQHRhL21lbnVcIjtcblxuaW1wb3J0IHsgVGFQZXJtaXNzaW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGVybWlzc2lvbnMuc2VydmljZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvbGVSb3V0ZURhdGEge1xuICByb2xlOiBzdHJpbmc7XG59XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSb2xlR3VhcmQge1xuICBwdWJsaWMgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChUYVBlcm1pc3Npb25zU2VydmljZSk7XG5cbiAgcHJpdmF0ZSBfcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG5cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgY29uc3Qgcm9sZSA9IHJvdXRlLmRhdGFbXCJyb2xlXCJdO1xuXG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5yZWNlaXZlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKHJvbGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnVwZGF0ZWQkLnBpcGUoXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWYWxpZFBlcm1pc3Npb24ocm9sZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2V0UmVkaXJlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoVGFSb3V0ZXMuZ2V0SG9tZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX2lzVmFsaWRQZXJtaXNzaW9uKHJvbGU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuaGFzUm9sZShyb2xlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UmVkaXJlY3QoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==