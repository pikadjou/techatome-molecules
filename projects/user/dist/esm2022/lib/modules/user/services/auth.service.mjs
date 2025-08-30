import { Injectable, inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { BehaviorSubject, filter, switchMap } from 'rxjs';
import { CamBaseService } from '@ta/server';
import { APPLICATION_CONFIG } from '@ta/utils';
import { CamPermissionsService } from './permissions.service';
import { TaUsersService } from './users.service';
import * as i0 from "@angular/core";
export const CAM_AUTH_TOKEN = new InjectionToken('CamAuthService');
export class CamAuthService extends CamBaseService {
    constructor(apiRoutes) {
        super(apiRoutes);
        this._permissionsService = inject(CamPermissionsService);
        this.isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');
        this.user$ = new BehaviorSubject(null);
        this._applicationConfig = inject(APPLICATION_CONFIG);
        this._userService = inject(TaUsersService);
        this.user$
            .pipe(filter(user => !!user), filter(() => this._applicationConfig.isCustomerApplication), switchMap(() => this.fetchUserContactIds()))
            .subscribe();
    }
    fetchUserContactIds() {
        return this._userService.fetchCurrentUserContactIds$();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuthService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxjQUFjLEVBQWtCLE1BQU0sWUFBWSxDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBc0IsTUFBTSxXQUFXLENBQUM7QUFHbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVqRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQXNCLGdCQUFnQixDQUFDLENBQUM7QUFLeEYsTUFBTSxPQUFnQixjQUFrQixTQUFRLGNBQWM7SUFrQjVELFlBQVksU0FBMEI7UUFDcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBbEJILHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzdELHFCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRW5GLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBVyxJQUFJLENBQUMsQ0FBQztRQVdwQyx1QkFBa0IsR0FBdUIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEUsaUJBQVksR0FBbUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBSTVELElBQUksQ0FBQyxLQUFLO2FBQ1AsSUFBSSxDQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDdEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxFQUMzRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FDNUM7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sbUJBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3pELENBQUM7K0dBL0JtQixjQUFjO21IQUFkLGNBQWMsY0FGdEIsTUFBTTs7NEZBRUUsY0FBYztrQkFIbkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgZmlsdGVyLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2FtQmFzZVNlcnZpY2UsIE1hcHBpbmdBcGlUeXBlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBBUFBMSUNBVElPTl9DT05GSUcsIElBcHBsaWNhdGlvbkNvbmZpZyB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFVzZXJQcm9maWxlIH0gZnJvbSAnLi9kdG8vdXNlci1wcm9maWxlJztcbmltcG9ydCB7IENhbVBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJy4vcGVybWlzc2lvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUYVVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBDQU1fQVVUSF9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxDYW1BdXRoU2VydmljZTxhbnk+PignQ2FtQXV0aFNlcnZpY2UnKTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbUF1dGhTZXJ2aWNlPFQ+IGV4dGVuZHMgQ2FtQmFzZVNlcnZpY2Uge1xuICBwdWJsaWMgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChDYW1QZXJtaXNzaW9uc1NlcnZpY2UpO1xuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkJCA9IHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5jYW5BY2Nlc3MkKCcnLCAnYXV0aGVudGljYXRlZCcpO1xuXG4gIHVzZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUIHwgbnVsbD4obnVsbCk7XG5cbiAgYWJzdHJhY3QgZ2V0IHVzZXJQcm9maWxlJCgpOiBCZWhhdmlvclN1YmplY3Q8VXNlclByb2ZpbGUgfCBudWxsPjtcbiAgYWJzdHJhY3QgZ2V0IHRyaWdyYW0oKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgYWJzdHJhY3QgZ2V0IGZpcnN0TGV0dGVyKCk6IHN0cmluZyB8IG51bGw7XG5cbiAgYWJzdHJhY3QgZmV0Y2hVc2VyUHJvZmlsZSgpOiBPYnNlcnZhYmxlPFVzZXJQcm9maWxlPjtcbiAgYWJzdHJhY3QgbG9hZCgpOiB2b2lkO1xuICBhYnN0cmFjdCBsb2dpbigpOiB2b2lkO1xuICBhYnN0cmFjdCBsb2dvdXQoKTogUHJvbWlzZTxudWxsPjtcblxuICBwcml2YXRlIF9hcHBsaWNhdGlvbkNvbmZpZzogSUFwcGxpY2F0aW9uQ29uZmlnID0gaW5qZWN0KEFQUExJQ0FUSU9OX0NPTkZJRyk7XG4gIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBUYVVzZXJzU2VydmljZSA9IGluamVjdChUYVVzZXJzU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoYXBpUm91dGVzPzogTWFwcGluZ0FwaVR5cGUpIHtcbiAgICBzdXBlcihhcGlSb3V0ZXMpO1xuICAgIHRoaXMudXNlciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIodXNlciA9PiAhIXVzZXIpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fYXBwbGljYXRpb25Db25maWcuaXNDdXN0b21lckFwcGxpY2F0aW9uKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuZmV0Y2hVc2VyQ29udGFjdElkcygpKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGZldGNoVXNlckNvbnRhY3RJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTZXJ2aWNlLmZldGNoQ3VycmVudFVzZXJDb250YWN0SWRzJCgpO1xuICB9XG59XG4iXX0=