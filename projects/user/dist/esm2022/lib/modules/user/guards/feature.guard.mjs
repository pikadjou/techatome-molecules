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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9mZWF0dXJlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBDLE9BQU8sRUFBb0Msb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBU3pHLE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxCLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFFdEMsV0FBVyxDQUFDLEtBQTZCO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV0QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sa0JBQWtCLENBQUMsT0FBZSxFQUFFLEtBQWE7UUFDdkQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7K0dBN0JVLFlBQVk7bUhBQVosWUFBWSxjQUZYLE1BQU07OzRGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFSb3V0ZXMgfSBmcm9tICdAdGEvbWVudSc7XG5cbmltcG9ydCB7IERvbWFpbiwgTGV2ZWwsIFBlcm1pc3Npb25GZWF0dXJlLCBUYVBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVSb3V0ZURhdGEge1xuICBmZWF0dXJlOiBQZXJtaXNzaW9uRmVhdHVyZSB8IERvbWFpbjtcbiAgbGV2ZWw6IExldmVsO1xufVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVHdWFyZCB7XG4gIHB1YmxpYyByZWFkb25seSBfcGVybWlzc2lvbnNTZXJ2aWNlID0gaW5qZWN0KFRhUGVybWlzc2lvbnNTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxldmVsID0gcm91dGUuZGF0YVsnbGV2ZWwnXTtcbiAgICBjb25zdCBmZWF0dXJlID0gcm91dGUuZGF0YVsnZmVhdHVyZSddO1xuXG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5yZWNlaXZlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKGZlYXR1cmUsIGxldmVsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS51cGRhdGVkJC5waXBlKFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsaWRQZXJtaXNzaW9uKGZlYXR1cmUsIGxldmVsKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRSZWRpcmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKFRhUm91dGVzLmdldEhvbWUoKSk7XG4gIH1cblxuICBwcml2YXRlIF9pc1ZhbGlkUGVybWlzc2lvbihmZWF0dXJlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLmNhbkRpcmVjdEFjY2VzcyhmZWF0dXJlLCBsZXZlbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNldFJlZGlyZWN0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=