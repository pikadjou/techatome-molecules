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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvRSxPQUFPLEVBQWtCLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUczRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFN0QsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFnQixlQUFlLENBQUMsQ0FBQztBQUtoRixNQUFNLE9BQWdCLGFBQWMsU0FBUSxhQUFhO0lBZ0J2RCxZQUFZLFNBQTBCO1FBQ3BDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQWhCSCx3QkFBbUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM1RCxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUVuRixVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFDbEMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFhM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUs7YUFDUCxJQUFJLENBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUN0QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FDMUM7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDOytHQXpCbUIsYUFBYTttSEFBYixhQUFhLGNBRnJCLE1BQU07OzRGQUVFLGFBQWE7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNYXBwaW5nQXBpVHlwZSwgVGFCYXNlU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xyXG5cclxuaW1wb3J0IHsgVXNlclByb2ZpbGUgfSBmcm9tICcuL2R0by91c2VyLXByb2ZpbGUnO1xyXG5pbXBvcnQgeyBUYVBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJy4vcGVybWlzc2lvbnMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVEFfQVVUSF9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUYUF1dGhTZXJ2aWNlPignVGFBdXRoU2VydmljZScpO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQXV0aFNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChUYVBlcm1pc3Npb25zU2VydmljZSk7XHJcbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCQgPSB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuY2FuQWNjZXNzJCgnJywgJ2F1dGhlbnRpY2F0ZWQnKTtcclxuXHJcbiAgdXNlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHVua25vd24+KG51bGwpO1xyXG4gIHJlYWRvbmx5IGlzTG9hZGluZyQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICBhYnN0cmFjdCBnZXQgdXNlclByb2ZpbGUkKCk6IE9ic2VydmFibGU8VXNlclByb2ZpbGUgfCBudWxsPjtcclxuXHJcbiAgYWJzdHJhY3QgY2hhbmdlUGFzc3dvcmQkKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICBhYnN0cmFjdCBmZXRjaFVzZXJQcm9maWxlJCgpOiBPYnNlcnZhYmxlPFVzZXJQcm9maWxlPjtcclxuICBhYnN0cmFjdCBsb2FkKCk6IHZvaWQ7XHJcbiAgYWJzdHJhY3QgbG9naW4oKTogdm9pZDtcclxuICBhYnN0cmFjdCBzaWduaW4oKTogdm9pZDtcclxuICBhYnN0cmFjdCBsb2dvdXQoKTogUHJvbWlzZTxudWxsPjtcclxuXHJcbiAgY29uc3RydWN0b3IoYXBpUm91dGVzPzogTWFwcGluZ0FwaVR5cGUpIHtcclxuICAgIHN1cGVyKGFwaVJvdXRlcyk7XHJcbiAgICB0aGlzLmlzTG9hZGluZyQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMudXNlciRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKHVzZXIgPT4gISF1c2VyKSxcclxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5mZXRjaFVzZXJQcm9maWxlJCgpKVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19