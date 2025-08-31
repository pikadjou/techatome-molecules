import { Inject, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { distinct, filter, tap } from 'rxjs';
import { Logger } from '@ta/server';
import { CamConfigurationService } from '@ta/services';
import { isNonNullable, trigram } from '@ta/utils';
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
                    permissions: user['g-lambert/permissions'],
                    roles: user['g-lambert/roles'],
                    features: user['g-lambert/features'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9hdXRoMC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBa0IsTUFBTSxZQUFZLENBQUM7QUFDcEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRWxFLE1BQU0sU0FBUyxHQUFtQjtJQUNoQyxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsS0FBSztRQUNYLEdBQUcsRUFBRSxzQkFBc0I7S0FDNUI7Q0FDRixDQUFDO0FBS0YsTUFBTSxPQUFPLGVBQWdCLFNBQVEsY0FBb0I7SUFDdkQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFDRCxP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QUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0ExRlUsZUFBZSxrQkFrQmhCLFdBQVcsYUFDWCxjQUFjLGFBQ2QsdUJBQXVCO21IQXBCdEIsZUFBZSxjQUZkLE1BQU07OzRGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFtQkksTUFBTTsyQkFBQyxXQUFXOzswQkFDbEIsTUFBTTsyQkFBQyxjQUFjOzswQkFDckIsTUFBTTsyQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFVzZXIgfSBmcm9tICdAYXV0aDAvYXV0aDAtYW5ndWxhcic7XG5pbXBvcnQgeyBkaXN0aW5jdCwgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9nZ2VyLCBNYXBwaW5nQXBpVHlwZSB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgQ2FtQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICdAdGEvc2VydmljZXMnO1xuaW1wb3J0IHsgaXNOb25OdWxsYWJsZSwgdHJpZ3JhbSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IENhbUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FtVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5cbmNvbnN0IGFwaVJvdXRlczogTWFwcGluZ0FwaVR5cGUgPSB7XG4gIEdldFVzZXJQcm9maWxlOiB7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiAne0FwaVVybH0vVXNlclByb2ZpbGUnLFxuICB9LFxufTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhbUF1dGgwU2VydmljZSBleHRlbmRzIENhbUF1dGhTZXJ2aWNlPFVzZXI+IHtcbiAgZ2V0IHRyaWdyYW0oKSB7XG4gICAgcmV0dXJuIHRyaWdyYW0odGhpcy51c2VyJC52YWx1ZT8ubmlja25hbWUpO1xuICB9XG5cbiAgZ2V0IGZpcnN0TGV0dGVyKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnVzZXIkLnZhbHVlPy5uaWNrbmFtZTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybiAnLSc7XG4gICAgfVxuICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICBnZXQgdXNlclByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnVzZXJQcm9maWxlJDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQXV0aFNlcnZpY2UpIHB1YmxpYyBhdXRoOiBBdXRoU2VydmljZSxcbiAgICBASW5qZWN0KENhbVVzZXJTZXJ2aWNlKSBwdWJsaWMgdXNlclNlcnZpY2U6IENhbVVzZXJTZXJ2aWNlLFxuICAgIEBJbmplY3QoQ2FtQ29uZmlndXJhdGlvblNlcnZpY2UpXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25TZXJ2aWNlOiBDYW1Db25maWd1cmF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcihhcGlSb3V0ZXMpO1xuXG4gICAgdGhpcy5hdXRoLnVzZXIkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxuICAgICAgICBkaXN0aW5jdCh1c2VyID0+IHVzZXI/LnN1YiksXG4gICAgICAgIHRhcCh1c2VyID0+IHRoaXMudXNlciQubmV4dCh1c2VyIHx8IG51bGwpKSxcbiAgICAgICAgdGFwKHVzZXIgPT4ge1xuICAgICAgICAgIExvZ2dlci5Mb2dJbmZvKCd1c2VyIGluZm8nLCB1c2VyKTtcbiAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zOiB1c2VyWydnLWxhbWJlcnQvcGVybWlzc2lvbnMnXSxcbiAgICAgICAgICAgICAgICByb2xlczogdXNlclsnZy1sYW1iZXJ0L3JvbGVzJ10sXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IHVzZXJbJ2ctbGFtYmVydC9mZWF0dXJlcyddLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uZmlndXJhdGlvblNlcnZpY2Uuc2V0KHVzZXIpO1xuICAgICAgICAgICAgdGhpcy5mZXRjaFVzZXJQcm9maWxlKCkuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuXG4gICAgdGhpcy5hdXRoLmVycm9yJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChlcnJvcnMgPT4ge1xuICAgICAgICAgIExvZ2dlci5Mb2dFcnJvcignW1VTRVJTRVJWSUNFXSBlcnJvciBvbiBhdXRoZW50aWNhdGlvbicsIGVycm9ycyk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICB0aGlzLmF1dGguYXBwU3RhdGUkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHN0YXRlID0+IHtcbiAgICAgICAgICBMb2dnZXIuTG9nSW5mbygnW1VTRVJTRVJWSUNFXSBzdGF0ZScsIHN0YXRlKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGlzQXV0aGVudGljYXRlZCA9PiB7XG4gICAgICAgICAgdGhpcy5fc2VydmVyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XG4gICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldFNpbGVudEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLnNldEF1dGhlbnRpY2F0ZWQoaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hVc2VyUHJvZmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5mZXRjaFVzZXJQcm9maWxlKCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZCgpIHt9XG4gIHB1YmxpYyBsb2dpbigpIHtcbiAgICB0aGlzLmF1dGgubG9naW5XaXRoUmVkaXJlY3QoKTtcbiAgfVxuICBwdWJsaWMgbG9nb3V0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxudWxsPihyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19