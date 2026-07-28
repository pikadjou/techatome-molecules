import { Injectable, inject } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { BehaviorSubject, Subject, filter, switchMap } from 'rxjs';
import { TaBaseService } from '@ta/server';
import { TaPermissionsService } from './permissions.service';
import * as i0 from "@angular/core";
export const TA_AUTH_TOKEN = new InjectionToken('TaAuthService');
export class TaAuthService extends TaBaseService {
    constructor(apiRoutes) {
        super(apiRoutes);
        this._permissionsService = inject(TaPermissionsService);
        this.isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');
        this.user$ = new BehaviorSubject(null);
        this.isLoading$ = new Subject();
        this.isLoading$.next(true);
        this.user$
            .pipe(filter(user => !!user), switchMap(() => this.fetchUserProfile$()))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvRSxPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUczRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFnQixlQUFlLENBQUMsQ0FBQztBQUtoRixNQUFNLE9BQWdCLGFBQWMsU0FBUSxhQUFhO0lBZ0J2RCxZQUFZLFNBQTBCO1FBQ3BDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQWhCSCx3QkFBbUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1RCxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVuRixVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFhM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUs7YUFDUCxJQUFJLENBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUN0QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FDMUM7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOytHQXpCbUIsYUFBYTttSEFBYixhQUFhLGNBRnJCLE1BQU07OzRGQUVFLGFBQWE7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE1hcHBpbmdBcGlUeXBlLCBUYUJhc2VTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IFVzZXJQcm9maWxlIH0gZnJvbSAnLi9kdG8vdXNlci1wcm9maWxlJztcbmltcG9ydCB7IFRhUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJtaXNzaW9ucy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFRBX0FVVEhfVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48VGFBdXRoU2VydmljZT4oJ1RhQXV0aFNlcnZpY2UnKTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQXV0aFNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgcHVibGljIHJlYWRvbmx5IF9wZXJtaXNzaW9uc1NlcnZpY2UgPSBpbmplY3QoVGFQZXJtaXNzaW9uc1NlcnZpY2UpO1xuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkJCA9IHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5jYW5BY2Nlc3MkKCcnLCAnYXV0aGVudGljYXRlZCcpO1xuXG4gIHVzZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDx1bmtub3duPihudWxsKTtcbiAgcmVhZG9ubHkgaXNMb2FkaW5nJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgYWJzdHJhY3QgZ2V0IHVzZXJQcm9maWxlJCgpOiBPYnNlcnZhYmxlPFVzZXJQcm9maWxlIHwgbnVsbD47XG5cbiAgYWJzdHJhY3QgY2hhbmdlUGFzc3dvcmQkKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgYWJzdHJhY3QgZmV0Y2hVc2VyUHJvZmlsZSQoKTogT2JzZXJ2YWJsZTxVc2VyUHJvZmlsZT47XG4gIGFic3RyYWN0IGxvYWQoKTogdm9pZDtcbiAgYWJzdHJhY3QgbG9naW4oKTogdm9pZDtcbiAgYWJzdHJhY3Qgc2lnbmluKCk6IHZvaWQ7XG4gIGFic3RyYWN0IGxvZ291dCgpOiBQcm9taXNlPG51bGw+O1xuXG4gIGNvbnN0cnVjdG9yKGFwaVJvdXRlcz86IE1hcHBpbmdBcGlUeXBlKSB7XG4gICAgc3VwZXIoYXBpUm91dGVzKTtcbiAgICB0aGlzLmlzTG9hZGluZyQubmV4dCh0cnVlKTtcbiAgICB0aGlzLnVzZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKHVzZXIgPT4gISF1c2VyKSxcbiAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuZmV0Y2hVc2VyUHJvZmlsZSQoKSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19