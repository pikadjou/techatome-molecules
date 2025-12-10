import { Injectable, inject } from "@angular/core";
import { InjectionToken } from "@angular/core";
import { BehaviorSubject, filter, switchMap } from "rxjs";
import { TaBaseService } from "@ta/server";
import { TaPermissionsService } from "./permissions.service";
import * as i0 from "@angular/core";
export const TA_AUTH_TOKEN = new InjectionToken("TaAuthService");
export class TaAuthService extends TaBaseService {
    constructor(apiRoutes) {
        super(apiRoutes);
        this._permissionsService = inject(TaPermissionsService);
        this.isAuthenticated$ = this._permissionsService.canAccess$("", "authenticated");
        this.user$ = new BehaviorSubject(null);
        this.user$
            .pipe(filter((user) => !!user), switchMap(() => this.fetchUserProfile$()))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: undefined }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRFLE9BQU8sRUFBa0IsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU3RCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQWdCLGVBQWUsQ0FBQyxDQUFDO0FBS2hGLE1BQU0sT0FBZ0IsYUFBYyxTQUFRLGFBQWE7SUFpQnZELFlBQVksU0FBMEI7UUFDcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBakJILHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVELHFCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQzNELEVBQUUsRUFDRixlQUFlLENBQ2hCLENBQUM7UUFFRixVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLENBQUM7UUFZekMsSUFBSSxDQUFDLEtBQUs7YUFDUCxJQUFJLENBQ0gsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3hCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUMxQzthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7K0dBekJtQixhQUFhO21IQUFiLGFBQWEsY0FGckIsTUFBTTs7NEZBRUUsYUFBYTtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGZpbHRlciwgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgTWFwcGluZ0FwaVR5cGUsIFRhQmFzZVNlcnZpY2UgfSBmcm9tIFwiQHRhL3NlcnZlclwiO1xuXG5pbXBvcnQgeyBVc2VyUHJvZmlsZSB9IGZyb20gXCIuL2R0by91c2VyLXByb2ZpbGVcIjtcbmltcG9ydCB7IFRhUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vcGVybWlzc2lvbnMuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgVEFfQVVUSF9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxUYUF1dGhTZXJ2aWNlPihcIlRhQXV0aFNlcnZpY2VcIik7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQXV0aFNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgcHVibGljIHJlYWRvbmx5IF9wZXJtaXNzaW9uc1NlcnZpY2UgPSBpbmplY3QoVGFQZXJtaXNzaW9uc1NlcnZpY2UpO1xuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkJCA9IHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5jYW5BY2Nlc3MkKFxuICAgIFwiXCIsXG4gICAgXCJhdXRoZW50aWNhdGVkXCJcbiAgKTtcblxuICB1c2VyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8dW5rbm93bj4obnVsbCk7XG5cbiAgYWJzdHJhY3QgZ2V0IHVzZXJQcm9maWxlJCgpOiBPYnNlcnZhYmxlPFVzZXJQcm9maWxlIHwgbnVsbD47XG5cbiAgYWJzdHJhY3QgZmV0Y2hVc2VyUHJvZmlsZSQoKTogT2JzZXJ2YWJsZTxVc2VyUHJvZmlsZT47XG4gIGFic3RyYWN0IGxvYWQoKTogdm9pZDtcbiAgYWJzdHJhY3QgbG9naW4oKTogdm9pZDtcbiAgYWJzdHJhY3Qgc2lnbmluKCk6IHZvaWQ7XG4gIGFic3RyYWN0IGxvZ291dCgpOiBQcm9taXNlPG51bGw+O1xuXG4gIGNvbnN0cnVjdG9yKGFwaVJvdXRlcz86IE1hcHBpbmdBcGlUeXBlKSB7XG4gICAgc3VwZXIoYXBpUm91dGVzKTtcbiAgICB0aGlzLnVzZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh1c2VyKSA9PiAhIXVzZXIpLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5mZXRjaFVzZXJQcm9maWxlJCgpKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=