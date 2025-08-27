import { Inject, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Logger } from '@ta/server';
import { CamConfigurationService } from '@ta/services';
import { isNonNullable, trigram } from '@ta/utils';
import { distinct, filter, tap } from 'rxjs';
import { CamAuthService } from '../../user/services/auth.service';
import { CamUserService } from '../../user/services/user.service';
import * as i0 from "@angular/core";
import * as i1 from "@auth0/auth0-angular";
import * as i2 from "../../user/services/user.service";
import * as i3 from "@ta/services";
const apiRoutes = {
    GetUserProfile: {
        type: 'GET',
        url: '{ApiUrl}/UserProfile',
    },
};
export class CamAuth0Service extends CamAuthService {
    get trigram() {
        return trigram(this.user$.value?.nickname);
    }
    get firstLetter() {
        const name = this.user$.value?.nickname;
        if (!name) {
            return '-';
        }
        return name[0].toUpperCase();
    }
    get userProfile$() {
        return this.userService.userProfile$;
    }
    constructor(auth, userService, configurationService) {
        super(apiRoutes);
        this.auth = auth;
        this.userService = userService;
        this.configurationService = configurationService;
        this.auth.user$
            .pipe(filter(isNonNullable), distinct(user => user?.sub), tap(user => this.user$.next(user || null)), tap(user => {
            Logger.LogInfo('user info', user);
            if (user) {
                this._permissionsService.set({
                    permissions: user['merlinsoftware/permissions'],
                    roles: user['merlinsoftware/roles'],
                    features: user['merlinsoftware/features'],
                }, true);
                configurationService.set(user);
                this.fetchUserProfile().subscribe();
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
    fetchUserProfile() {
        return this.userService.fetchUserProfile();
    }
    load() { }
    login() {
        this.auth.loginWithRedirect();
    }
    logout() {
        return new Promise(resolve => {
            this.auth.logout();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuth0Service, deps: [{ token: AuthService }, { token: CamUserService }, { token: CamConfigurationService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuth0Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamAuth0Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.AuthService, decorators: [{
                    type: Inject,
                    args: [AuthService]
                }] }, { type: i2.CamUserService, decorators: [{
                    type: Inject,
                    args: [CamUserService]
                }] }, { type: i3.CamConfigurationService, decorators: [{
                    type: Inject,
                    args: [CamConfigurationService]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9hdXRoMC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsTUFBTSxFQUFrQixNQUFNLFlBQVksQ0FBQztBQUNwRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRWxFLE1BQU0sU0FBUyxHQUFtQjtJQUNoQyxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLEdBQUcsRUFBRSxzQkFBc0I7S0FDNUI7Q0FDRixDQUFDO0FBS0YsTUFBTSxPQUFPLGVBQWdCLFNBQVEsY0FBb0I7SUFDdkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFDRCxP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QUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0ExRlUsZUFBZSxrQkFrQmhCLFdBQVcsYUFDWCxjQUFjLGFBQ2QsdUJBQXVCO21IQXBCdEIsZUFBZSxjQUZkLE1BQU07OzRGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFtQkksTUFBTTsyQkFBQyxXQUFXOzswQkFDbEIsTUFBTTsyQkFBQyxjQUFjOzswQkFDckIsTUFBTTsyQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFVzZXIgfSBmcm9tICdAYXV0aDAvYXV0aDAtYW5ndWxhcic7XG5pbXBvcnQgeyBMb2dnZXIsIE1hcHBpbmdBcGlUeXBlIH0gZnJvbSAnQHRhL3NlcnZlcic7XG5pbXBvcnQgeyBDYW1Db25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBpc05vbk51bGxhYmxlLCB0cmlncmFtIH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IGRpc3RpbmN0LCBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDYW1BdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL3VzZXIvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhbVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5jb25zdCBhcGlSb3V0ZXM6IE1hcHBpbmdBcGlUeXBlID0ge1xuICBHZXRVc2VyUHJvZmlsZToge1xuICAgIHR5cGU6ICdHRVQnLFxuICAgIHVybDogJ3tBcGlVcmx9L1VzZXJQcm9maWxlJyxcbiAgfSxcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1BdXRoMFNlcnZpY2UgZXh0ZW5kcyBDYW1BdXRoU2VydmljZTxVc2VyPiB7XG4gIGdldCB0cmlncmFtKCkge1xuICAgIHJldHVybiB0cmlncmFtKHRoaXMudXNlciQudmFsdWU/Lm5pY2tuYW1lKTtcbiAgfVxuXG4gIGdldCBmaXJzdExldHRlcigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy51c2VyJC52YWx1ZT8ubmlja25hbWU7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm4gJy0nO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZVswXS50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgZ2V0IHVzZXJQcm9maWxlJCgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS51c2VyUHJvZmlsZSQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEF1dGhTZXJ2aWNlKSBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgQEluamVjdChDYW1Vc2VyU2VydmljZSkgcHVibGljIHVzZXJTZXJ2aWNlOiBDYW1Vc2VyU2VydmljZSxcbiAgICBASW5qZWN0KENhbUNvbmZpZ3VyYXRpb25TZXJ2aWNlKVxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uU2VydmljZTogQ2FtQ29uZmlndXJhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoYXBpUm91dGVzKTtcblxuICAgIHRoaXMuYXV0aC51c2VyJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcbiAgICAgICAgZGlzdGluY3QodXNlciA9PiB1c2VyPy5zdWIpLFxuICAgICAgICB0YXAodXNlciA9PiB0aGlzLnVzZXIkLm5leHQodXNlciB8fCBudWxsKSksXG4gICAgICAgIHRhcCh1c2VyID0+IHtcbiAgICAgICAgICBMb2dnZXIuTG9nSW5mbygndXNlciBpbmZvJywgdXNlcik7XG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXQoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uczogdXNlclsnbWVybGluc29mdHdhcmUvcGVybWlzc2lvbnMnXSxcbiAgICAgICAgICAgICAgICByb2xlczogdXNlclsnbWVybGluc29mdHdhcmUvcm9sZXMnXSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogdXNlclsnbWVybGluc29mdHdhcmUvZmVhdHVyZXMnXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb25TZXJ2aWNlLnNldCh1c2VyKTtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hVc2VyUHJvZmlsZSgpLnN1YnNjcmliZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuYXV0aC5lcnJvciRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoZXJyb3JzID0+IHtcbiAgICAgICAgICBMb2dnZXIuTG9nRXJyb3IoJ1tVU0VSU0VSVklDRV0gZXJyb3Igb24gYXV0aGVudGljYXRpb24nLCBlcnJvcnMpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5hdXRoLmFwcFN0YXRlJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChzdGF0ZSA9PiB7XG4gICAgICAgICAgTG9nZ2VyLkxvZ0luZm8oJ1tVU0VSU0VSVklDRV0gc3RhdGUnLCBzdGF0ZSk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChpc0F1dGhlbnRpY2F0ZWQgPT4ge1xuICAgICAgICAgIHRoaXMuX3NlcnZlclNlcnZpY2UuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xuICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXRTaWxlbnRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGZldGNoVXNlclByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZmV0Y2hVc2VyUHJvZmlsZSgpO1xuICB9XG5cbiAgcHVibGljIGxvYWQoKSB7fVxuICBwdWJsaWMgbG9naW4oKSB7XG4gICAgdGhpcy5hdXRoLmxvZ2luV2l0aFJlZGlyZWN0KCk7XG4gIH1cbiAgcHVibGljIGxvZ291dCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVsbD4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==