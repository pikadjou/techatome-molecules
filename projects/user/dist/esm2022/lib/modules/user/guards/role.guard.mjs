import { Injectable, inject } from "@angular/core";
import { map } from "rxjs/operators";
import { TaRoutes } from "@ta/menu";
import { TaPermissionsService } from "../services/permissions.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class RoleGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(TaPermissionsService);
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
        this.router.navigateByUrl(TaRoutes.getHome());
    }
    _isValidPermission(role) {
        if (this._permissionsService.hasRole(role)) {
            return true;
        }
        this.setRedirect();
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RoleGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RoleGuard, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RoleGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9yb2xlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFRdkUsTUFBTSxPQUFPLFNBQVM7SUFHcEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEIsd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUV0QyxXQUFXLENBQUMsS0FBNkI7UUFDdkMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLGtCQUFrQixDQUFDLElBQVk7UUFDckMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzsrR0E1QlUsU0FBUzttSEFBVCxTQUFTLGNBRlIsTUFBTTs7NEZBRVAsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IFRhUm91dGVzIH0gZnJvbSBcIkB0YS9tZW51XCI7XG5cbmltcG9ydCB7IFRhUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBSb2xlUm91dGVEYXRhIHtcbiAgcm9sZTogc3RyaW5nO1xufVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgUm9sZUd1YXJkIHtcbiAgcHVibGljIHJlYWRvbmx5IF9wZXJtaXNzaW9uc1NlcnZpY2UgPSBpbmplY3QoVGFQZXJtaXNzaW9uc1NlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgY29uc3Qgcm9sZSA9IHJvdXRlLmRhdGFbXCJyb2xlXCJdO1xuXG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5yZWNlaXZlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKHJvbGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnVwZGF0ZWQkLnBpcGUoXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNWYWxpZFBlcm1pc3Npb24ocm9sZSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2V0UmVkaXJlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChUYVJvdXRlcy5nZXRIb21lKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNWYWxpZFBlcm1pc3Npb24ocm9sZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5oYXNSb2xlKHJvbGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRSZWRpcmVjdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19