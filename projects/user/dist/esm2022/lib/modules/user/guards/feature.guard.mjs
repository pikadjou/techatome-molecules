import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { TaRoutes } from '@ta/menu';
import { TaPermissionsService } from '../services/permissions.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class FeatureGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(TaPermissionsService);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9mZWF0dXJlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBUyxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFTOUUsTUFBTSxPQUFPLFlBQVk7SUFHdkIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFGbEIsd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUV0QyxXQUFXLENBQUMsS0FBNkI7UUFDdkMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMvQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxPQUFlLEVBQUUsS0FBWTtRQUN0RCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDN0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzsrR0E3QlUsWUFBWTttSEFBWixZQUFZLGNBRlgsTUFBTTs7NEZBRVAsWUFBWTtrQkFIeEIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUYVJvdXRlcyB9IGZyb20gJ0B0YS9tZW51JztcblxuaW1wb3J0IHsgTGV2ZWwsIFRhUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGVybWlzc2lvbnMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVJvdXRlRGF0YSB7XG4gIGZlYXR1cmU6IHN0cmluZztcbiAgbGV2ZWw6IExldmVsO1xufVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVHdWFyZCB7XG4gIHB1YmxpYyByZWFkb25seSBfcGVybWlzc2lvbnNTZXJ2aWNlID0gaW5qZWN0KFRhUGVybWlzc2lvbnNTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxldmVsID0gcm91dGUuZGF0YVsnbGV2ZWwnXTtcbiAgICBjb25zdCBmZWF0dXJlID0gcm91dGUuZGF0YVsnZmVhdHVyZSddO1xuXG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5yZWNlaXZlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKGZlYXR1cmUsIGxldmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS51cGRhdGVkJC5waXBlKFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKGZlYXR1cmUsIGxldmVsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRSZWRpcmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFRhUm91dGVzLmdldEhvbWUoKSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1ZhbGlkUGVybWlzc2lvbihmZWF0dXJlOiBzdHJpbmcsIGxldmVsOiBMZXZlbCkge1xuICAgIGlmICh0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuY2FuRGlyZWN0QWNjZXNzKGZlYXR1cmUsIGxldmVsKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0UmVkaXJlY3QoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==