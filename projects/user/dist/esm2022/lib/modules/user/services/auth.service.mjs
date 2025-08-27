import { Injectable, inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { CamBaseService } from '@ta/server';
import { APPLICATION_CONFIG } from '@ta/utils';
import { BehaviorSubject, filter, switchMap } from 'rxjs';
import { CamPermissionsService } from './permissions.service';
import { CamUsersService } from './users.service';
import * as i0 from "@angular/core";
export const CAM_AUTH_TOKEN = new InjectionToken('CamAuthService');
export class CamAuthService extends CamBaseService {
    constructor(apiRoutes) {
        super(apiRoutes);
        this._permissionsService = inject(CamPermissionsService);
        this.isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');
        this.user$ = new BehaviorSubject(null);
        this._applicationConfig = inject(APPLICATION_CONFIG);
        this._userService = inject(CamUsersService);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFzQixNQUFNLFdBQVcsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVsRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxjQUFjLENBQXNCLGdCQUFnQixDQUFDLENBQUM7QUFLeEYsTUFBTSxPQUFnQixjQUFrQixTQUFRLGNBQWM7SUFrQjVELFlBQVksU0FBMEI7UUFDcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBbEJILHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzdELHFCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRW5GLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBVyxJQUFJLENBQUMsQ0FBQztRQVdwQyx1QkFBa0IsR0FBdUIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEUsaUJBQVksR0FBb0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBSTlELElBQUksQ0FBQyxLQUFLO2FBQ1AsSUFBSSxDQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDdEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxFQUMzRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FDNUM7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sbUJBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3pELENBQUM7K0dBL0JtQixjQUFjO21IQUFkLGNBQWMsY0FGdEIsTUFBTTs7NEZBRUUsY0FBYztrQkFIbkMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbUJhc2VTZXJ2aWNlLCBNYXBwaW5nQXBpVHlwZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgQVBQTElDQVRJT05fQ09ORklHLCBJQXBwbGljYXRpb25Db25maWcgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBmaWx0ZXIsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gJy4vZHRvL3VzZXItcHJvZmlsZSc7XG5pbXBvcnQgeyBDYW1QZXJtaXNzaW9uc1NlcnZpY2UgfSBmcm9tICcuL3Blcm1pc3Npb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FtVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IENBTV9BVVRIX1RPS0VOID0gbmV3IEluamVjdGlvblRva2VuPENhbUF1dGhTZXJ2aWNlPGFueT4+KCdDYW1BdXRoU2VydmljZScpO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FtQXV0aFNlcnZpY2U8VD4gZXh0ZW5kcyBDYW1CYXNlU2VydmljZSB7XG4gIHB1YmxpYyByZWFkb25seSBfcGVybWlzc2lvbnNTZXJ2aWNlID0gaW5qZWN0KENhbVBlcm1pc3Npb25zU2VydmljZSk7XG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQkID0gdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLmNhbkFjY2VzcyQoJycsICdhdXRoZW50aWNhdGVkJyk7XG5cbiAgdXNlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFQgfCBudWxsPihudWxsKTtcblxuICBhYnN0cmFjdCBnZXQgdXNlclByb2ZpbGUkKCk6IEJlaGF2aW9yU3ViamVjdDxVc2VyUHJvZmlsZSB8IG51bGw+O1xuICBhYnN0cmFjdCBnZXQgdHJpZ3JhbSgpOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBhYnN0cmFjdCBnZXQgZmlyc3RMZXR0ZXIoKTogc3RyaW5nIHwgbnVsbDtcblxuICBhYnN0cmFjdCBmZXRjaFVzZXJQcm9maWxlKCk6IE9ic2VydmFibGU8VXNlclByb2ZpbGU+O1xuICBhYnN0cmFjdCBsb2FkKCk6IHZvaWQ7XG4gIGFic3RyYWN0IGxvZ2luKCk6IHZvaWQ7XG4gIGFic3RyYWN0IGxvZ291dCgpOiBQcm9taXNlPG51bGw+O1xuXG4gIHByaXZhdGUgX2FwcGxpY2F0aW9uQ29uZmlnOiBJQXBwbGljYXRpb25Db25maWcgPSBpbmplY3QoQVBQTElDQVRJT05fQ09ORklHKTtcbiAgcHJpdmF0ZSBfdXNlclNlcnZpY2U6IENhbVVzZXJzU2VydmljZSA9IGluamVjdChDYW1Vc2Vyc1NlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKGFwaVJvdXRlcz86IE1hcHBpbmdBcGlUeXBlKSB7XG4gICAgc3VwZXIoYXBpUm91dGVzKTtcbiAgICB0aGlzLnVzZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKHVzZXIgPT4gISF1c2VyKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2FwcGxpY2F0aW9uQ29uZmlnLmlzQ3VzdG9tZXJBcHBsaWNhdGlvbiksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLmZldGNoVXNlckNvbnRhY3RJZHMoKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFVzZXJDb250YWN0SWRzKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS5mZXRjaEN1cnJlbnRVc2VyQ29udGFjdElkcyQoKTtcbiAgfVxufVxuIl19