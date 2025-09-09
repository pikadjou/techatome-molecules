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
                this._permissionsService.set({
                    permissions: [],
                    roles: [],
                    features: [],
                }, true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9hdXRoMC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBS25FLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUMvQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFLRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSkgsU0FBSSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUszQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7YUFDWixJQUFJLENBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQzFCO29CQUNFLFdBQVcsRUFBRSxFQUFFO29CQUNmLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiLEVBQ0QsSUFBSSxDQUNMLENBQUM7WUFDSixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTthQUNiLElBQUksQ0FDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLHVDQUF1QyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUNIO2FBQ0EsU0FBUyxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7YUFDaEIsSUFBSSxDQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3ZCLElBQUksQ0FDSCxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1lBQ3RELElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuRSxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBQ1QsS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBQ00sTUFBTTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDMUIsbUJBQW1CLEVBQUU7Z0JBQ25CLFdBQVcsRUFBRSxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU07UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQWpGVSxjQUFjO21IQUFkLGNBQWMsY0FGYixNQUFNOzs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hdXRoMC1hbmd1bGFyJztcbmltcG9ydCB7IGRpc3RpbmN0LCBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVEFfVVNFUl9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFBdXRoMFNlcnZpY2UgZXh0ZW5kcyBUYUF1dGhTZXJ2aWNlIHtcbiAgZ2V0IHVzZXJQcm9maWxlJCgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS51c2VyUHJvZmlsZS5nZXQkKCk7XG4gIH1cblxuICBwdWJsaWMgYXV0aCA9IGluamVjdChBdXRoU2VydmljZSk7XG4gIHB1YmxpYyB1c2VyU2VydmljZSA9IGluamVjdChUQV9VU0VSX1NFUlZJQ0UpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmF1dGgudXNlciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoaXNOb25OdWxsYWJsZSksXG4gICAgICAgIGRpc3RpbmN0KHVzZXIgPT4gdXNlcj8uc3ViKSxcbiAgICAgICAgdGFwKHVzZXIgPT4gdGhpcy51c2VyJC5uZXh0KHVzZXIgfHwgbnVsbCkpLFxuICAgICAgICB0YXAodXNlciA9PiB7XG4gICAgICAgICAgTG9nZ2VyLkxvZ0luZm8oJ3VzZXIgaW5mbycsIHVzZXIpO1xuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2Uuc2V0KFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IFtdLFxuICAgICAgICAgICAgICAgIHJvbGVzOiBbXSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogW10sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5hdXRoLmVycm9yJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChlcnJvcnMgPT4ge1xuICAgICAgICAgIExvZ2dlci5Mb2dFcnJvcignW1VTRVJTRVJWSUNFXSBlcnJvciBvbiBhdXRoZW50aWNhdGlvbicsIGVycm9ycyk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLmF1dGguYXBwU3RhdGUkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHN0YXRlID0+IHtcbiAgICAgICAgICBMb2dnZXIuTG9nSW5mbygnW1VTRVJTRVJWSUNFXSBzdGF0ZScsIHN0YXRlKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGlzQXV0aGVudGljYXRlZCA9PiB7XG4gICAgICAgICAgdGhpcy5fc2VydmVyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XG4gICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldFNpbGVudEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hVc2VyUHJvZmlsZSQoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZmV0Y2hVc2VyUHJvZmlsZSQoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKCkge31cbiAgcHVibGljIGxvZ2luKCkge1xuICAgIHRoaXMuYXV0aC5sb2dpbldpdGhSZWRpcmVjdCgpO1xuICB9XG4gIHB1YmxpYyBzaWduaW4oKSB7XG4gICAgdGhpcy5hdXRoLmxvZ2luV2l0aFJlZGlyZWN0KHtcbiAgICAgIGF1dGhvcml6YXRpb25QYXJhbXM6IHtcbiAgICAgICAgc2NyZWVuX2hpbnQ6ICdzaWdudXAnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgbG9nb3V0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxudWxsPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19