import { Injectable, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { distinct, filter, tap } from 'rxjs';
import { Logger } from '@ta/server';
import { isNonNullable } from '@ta/utils';
import { TaAuthService } from '../../user/services/auth.service';
import { TA_USER_SERVICE } from '../../user/services/user.service';
import * as i0 from "@angular/core";
export class TaAuth0Service extends TaAuthService {
    get userProfile$() {
        return this.userService.userProfile.get$();
    }
    constructor() {
        super();
        this.auth = inject(AuthService);
        this.userService = inject(TA_USER_SERVICE);
        this.auth.user$
            .pipe(filter(isNonNullable), distinct(user => user?.sub), tap(user => this.user$.next(user || null)), tap(user => {
            Logger.LogInfo('user info', user);
            if (user) {
                this._permissionsService.set(null, true);
            }
        }))
            .subscribe();
        this.auth.error$
            .pipe(tap(errors => {
            Logger.LogError('[USERSERVICE] error on authentication', errors);
        }))
            .subscribe();
        this.auth.appState$
            .pipe(tap(state => {
            Logger.LogInfo('[USERSERVICE] state', state);
        }))
            .subscribe();
        this.auth.isAuthenticated$
            .pipe(tap(isAuthenticated => {
            this._serverService.isAuthenticated = isAuthenticated;
            if (isAuthenticated) {
                this._permissionsService.setSilentAuthenticated(isAuthenticated);
            }
            else {
                this._permissionsService.setAuthenticated(isAuthenticated);
            }
        }))
            .subscribe();
    }
    fetchUserProfile$() {
        return this.userService.fetchUserProfile$();
    }
    load() { }
    login() {
        this.auth.loginWithRedirect();
    }
    signin() {
        this.auth.loginWithRedirect({
            authorizationParams: {
                screen_hint: 'signup',
            },
        });
    }
    logout() {
        return new Promise(resolve => {
            this.auth.logout();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuth0Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuth0Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuth0Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9hdXRoMC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBS25FLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUMvQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFLRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSkgsU0FBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUszQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7YUFDWixJQUFJLENBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQ2IsSUFBSSxDQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUNBQXVDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUzthQUNoQixJQUFJLENBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7YUFDdkIsSUFBSSxDQUNILEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7WUFDdEQsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ25FLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0QsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUNIO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRU0sSUFBSSxLQUFJLENBQUM7SUFDVCxLQUFLO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTSxNQUFNO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUMxQixtQkFBbUIsRUFBRTtnQkFDbkIsV0FBVyxFQUFFLFFBQVE7YUFDdEI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sT0FBTyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBMUVVLGNBQWM7bUhBQWQsY0FBYyxjQUZiLE1BQU07OzRGQUVQLGNBQWM7a0JBSDFCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2F1dGgwLWFuZ3VsYXInO1xuaW1wb3J0IHsgZGlzdGluY3QsIGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgaXNOb25OdWxsYWJsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBUQV9VU0VSX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi91c2VyL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYUF1dGgwU2VydmljZSBleHRlbmRzIFRhQXV0aFNlcnZpY2Uge1xuICBnZXQgdXNlclByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJQcm9maWxlLmdldCQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhdXRoID0gaW5qZWN0KEF1dGhTZXJ2aWNlKTtcbiAgcHVibGljIHVzZXJTZXJ2aWNlID0gaW5qZWN0KFRBX1VTRVJfU0VSVklDRSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXV0aC51c2VyJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcbiAgICAgICAgZGlzdGluY3QodXNlciA9PiB1c2VyPy5zdWIpLFxuICAgICAgICB0YXAodXNlciA9PiB0aGlzLnVzZXIkLm5leHQodXNlciB8fCBudWxsKSksXG4gICAgICAgIHRhcCh1c2VyID0+IHtcbiAgICAgICAgICBMb2dnZXIuTG9nSW5mbygndXNlciBpbmZvJywgdXNlcik7XG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXQobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5hdXRoLmVycm9yJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChlcnJvcnMgPT4ge1xuICAgICAgICAgIExvZ2dlci5Mb2dFcnJvcignW1VTRVJTRVJWSUNFXSBlcnJvciBvbiBhdXRoZW50aWNhdGlvbicsIGVycm9ycyk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLmF1dGguYXBwU3RhdGUkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHN0YXRlID0+IHtcbiAgICAgICAgICBMb2dnZXIuTG9nSW5mbygnW1VTRVJTRVJWSUNFXSBzdGF0ZScsIHN0YXRlKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGlzQXV0aGVudGljYXRlZCA9PiB7XG4gICAgICAgICAgdGhpcy5fc2VydmVyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XG4gICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldFNpbGVudEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hVc2VyUHJvZmlsZSQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZmV0Y2hVc2VyUHJvZmlsZSQoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKCkge31cbiAgcHVibGljIGxvZ2luKCkge1xuICAgIHRoaXMuYXV0aC5sb2dpbldpdGhSZWRpcmVjdCgpO1xuICB9XG4gIHB1YmxpYyBzaWduaW4oKSB7XG4gICAgdGhpcy5hdXRoLmxvZ2luV2l0aFJlZGlyZWN0KHtcbiAgICAgIGF1dGhvcml6YXRpb25QYXJhbXM6IHtcbiAgICAgICAgc2NyZWVuX2hpbnQ6ICdzaWdudXAnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgbG9nb3V0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxudWxsPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19