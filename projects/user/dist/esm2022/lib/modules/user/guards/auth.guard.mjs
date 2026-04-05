import { Injectable, inject } from "@angular/core";
import { Router, } from "@angular/router";
import { map } from "rxjs/operators";
import { TaRoutes } from "@ta/menu";
import { TaPermissionsService } from "../services/permissions.service";
import * as i0 from "@angular/core";
export class AuthGuard {
    constructor() {
        this._permissionsService = inject(TaPermissionsService);
        this._router = inject(Router);
    }
    canActivate(next, state) {
        if (!this._permissionsService.received) {
            return this._permissionsService.updated$.pipe(map(() => {
                if (this._permissionsService.isAuthenticated) {
                    return true;
                }
                else {
                    this.setRedirect();
                    return false;
                }
            }));
        }
        if (this._permissionsService.isAuthenticated === false) {
            this.setRedirect();
            return false;
        }
        return this._permissionsService.isAuthenticated;
    }
    setRedirect() {
        this._router.navigateByUrl(TaRoutes.getLogin());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AuthGuard, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AuthGuard, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy91c2VyL2d1YXJkcy9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFFTCxNQUFNLEdBRVAsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFLdkUsTUFBTSxPQUFPLFNBQVM7SUFIdEI7UUFJa0Isd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFM0QsWUFBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQTJCbEM7SUExQkMsV0FBVyxDQUNULElBQTRCLEVBQzVCLEtBQTBCO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0MsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDUCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDN0MsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztxQkFBTSxDQUFDO29CQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsT0FBTyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUM7SUFDbEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQzsrR0E3QlUsU0FBUzttSEFBVCxTQUFTLGNBRlIsTUFBTTs7NEZBRVAsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVGFSb3V0ZXMgfSBmcm9tIFwiQHRhL21lbnVcIjtcblxuaW1wb3J0IHsgVGFQZXJtaXNzaW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGVybWlzc2lvbnMuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQge1xuICBwdWJsaWMgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChUYVBlcm1pc3Npb25zU2VydmljZSk7XG5cbiAgcHJpdmF0ZSBfcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG4gIGNhbkFjdGl2YXRlKFxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnJlY2VpdmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnVwZGF0ZWQkLnBpcGUoXG4gICAgICAgIG1hcCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFJlZGlyZWN0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFJlZGlyZWN0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuaXNBdXRoZW50aWNhdGVkO1xuICB9XG5cbiAgcHVibGljIHNldFJlZGlyZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKFRhUm91dGVzLmdldExvZ2luKCkpO1xuICB9XG59XG4iXX0=