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
        return this._userService.userProfile.get$();
    }
    constructor() {
        super();
        this._auth = inject(AuthService);
        this._userService = inject(TA_USER_SERVICE);
        this._auth.user$
            .pipe(filter(isNonNullable), distinct(user => user?.sub), tap(user => this.user$.next(user || null)), tap(user => {
            Logger.LogInfo('user info', user);
            if (user) {
                this._permissionsService.set(null, true);
            }
        }))
            .subscribe();
        this._auth.error$
            .pipe(tap(errors => {
            this.isLoading$.next(false);
            Logger.LogError('[USERSERVICE] error on authentication', errors);
        }))
            .subscribe();
        this._auth.appState$
            .pipe(tap(state => {
            Logger.LogInfo('[USERSERVICE] state', state);
        }))
            .subscribe();
        this._auth.isAuthenticated$
            .pipe(tap(isAuthenticated => {
            this._serverService.isAuthenticated = isAuthenticated;
            if (isAuthenticated) {
                this._permissionsService.setSilentAuthenticated(isAuthenticated);
            }
            else {
                this._permissionsService.setAuthenticated(isAuthenticated);
                this.isLoading$.next(false);
            }
        }))
            .subscribe();
    }
    fetchUserProfile$() {
        return this._userService.fetchUserProfile$().pipe(tap(() => this.isLoading$.next(false)));
    }
    load() { }
    login() {
        this._auth.loginWithRedirect();
    }
    signin() {
        this._auth.loginWithRedirect({
            authorizationParams: {
                screen_hint: 'signup',
            },
        });
    }
    logout() {
        return new Promise(resolve => {
            this._auth.logout();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuth0Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuth0Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAuth0Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9hdXRoMC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBS25FLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUMvQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFJRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSkYsVUFBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QixpQkFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUs3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7YUFDYixJQUFJLENBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNULElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ2QsSUFBSSxDQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsdUNBQXVDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVmLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzthQUNqQixJQUFJLENBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO1FBRWYsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7YUFDeEIsSUFBSSxDQUNILEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7WUFDdEQsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ25FLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVNLElBQUksS0FBSSxDQUFDO0lBQ1QsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ00sTUFBTTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7WUFDM0IsbUJBQW1CLEVBQUU7Z0JBQ25CLFdBQVcsRUFBRSxRQUFRO2FBQ3RCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU07UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQTVFVSxjQUFjO21IQUFkLGNBQWMsY0FGYixNQUFNOzs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hdXRoMC1hbmd1bGFyJztcbmltcG9ydCB7IGRpc3RpbmN0LCBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVEFfVVNFUl9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFBdXRoMFNlcnZpY2UgZXh0ZW5kcyBUYUF1dGhTZXJ2aWNlIHtcbiAgZ2V0IHVzZXJQcm9maWxlJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclNlcnZpY2UudXNlclByb2ZpbGUuZ2V0JCgpO1xuICB9XG4gIHByaXZhdGUgX2F1dGggPSBpbmplY3QoQXV0aFNlcnZpY2UpO1xuICBwcml2YXRlIF91c2VyU2VydmljZSA9IGluamVjdChUQV9VU0VSX1NFUlZJQ0UpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9hdXRoLnVzZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxuICAgICAgICBkaXN0aW5jdCh1c2VyID0+IHVzZXI/LnN1YiksXG4gICAgICAgIHRhcCh1c2VyID0+IHRoaXMudXNlciQubmV4dCh1c2VyIHx8IG51bGwpKSxcbiAgICAgICAgdGFwKHVzZXIgPT4ge1xuICAgICAgICAgIExvZ2dlci5Mb2dJbmZvKCd1c2VyIGluZm8nLCB1c2VyKTtcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldChudWxsLCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLl9hdXRoLmVycm9yJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChlcnJvcnMgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nJC5uZXh0KGZhbHNlKTtcblxuICAgICAgICAgIExvZ2dlci5Mb2dFcnJvcignW1VTRVJTRVJWSUNFXSBlcnJvciBvbiBhdXRoZW50aWNhdGlvbicsIGVycm9ycyk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLl9hdXRoLmFwcFN0YXRlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChzdGF0ZSA9PiB7XG4gICAgICAgICAgTG9nZ2VyLkxvZ0luZm8oJ1tVU0VSU0VSVklDRV0gc3RhdGUnLCBzdGF0ZSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLl9hdXRoLmlzQXV0aGVudGljYXRlZCRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoaXNBdXRoZW50aWNhdGVkID0+IHtcbiAgICAgICAgICB0aGlzLl9zZXJ2ZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCA9IGlzQXV0aGVudGljYXRlZDtcbiAgICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2Uuc2V0U2lsZW50QXV0aGVudGljYXRlZChpc0F1dGhlbnRpY2F0ZWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2Uuc2V0QXV0aGVudGljYXRlZChpc0F1dGhlbnRpY2F0ZWQpO1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmckLm5leHQoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFVzZXJQcm9maWxlJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclNlcnZpY2UuZmV0Y2hVc2VyUHJvZmlsZSQoKS5waXBlKHRhcCgoKSA9PiB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKCkge31cbiAgcHVibGljIGxvZ2luKCkge1xuICAgIHRoaXMuX2F1dGgubG9naW5XaXRoUmVkaXJlY3QoKTtcbiAgfVxuICBwdWJsaWMgc2lnbmluKCkge1xuICAgIHRoaXMuX2F1dGgubG9naW5XaXRoUmVkaXJlY3Qoe1xuICAgICAgYXV0aG9yaXphdGlvblBhcmFtczoge1xuICAgICAgICBzY3JlZW5faGludDogJ3NpZ251cCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPG51bGw+KHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5fYXV0aC5sb2dvdXQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19