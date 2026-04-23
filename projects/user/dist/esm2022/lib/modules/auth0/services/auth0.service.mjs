import { Injectable, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { distinct, filter, tap } from 'rxjs';
import { Logger } from '@ta/server';
import { TaTranslationService } from '@ta/translation';
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
        this._translation = inject(TaTranslationService);
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
        this._auth.loginWithRedirect({
            authorizationParams: {
                ui_locales: this._translation.getLanguage(),
            },
        });
    }
    signin() {
        this._auth.loginWithRedirect({
            authorizationParams: {
                screen_hint: 'signup',
                ui_locales: this._translation.getLanguage(),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9hdXRoMC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBS25FLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUMvQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFLRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBTEYsVUFBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QixpQkFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBS2xELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzthQUNiLElBQUksQ0FDSCxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hdXRoMC1hbmd1bGFyJztcbmltcG9ydCB7IGRpc3RpbmN0LCBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAdGEvc2VydmVyJztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IGlzTm9uTnVsbGFibGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVEFfVVNFUl9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vdXNlci9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFBdXRoMFNlcnZpY2UgZXh0ZW5kcyBUYUF1dGhTZXJ2aWNlIHtcbiAgZ2V0IHVzZXJQcm9maWxlJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlclNlcnZpY2UudXNlclByb2ZpbGUuZ2V0JCgpO1xuICB9XG4gIHByaXZhdGUgX2F1dGggPSBpbmplY3QoQXV0aFNlcnZpY2UpO1xuICBwcml2YXRlIF91c2VyU2VydmljZSA9IGluamVjdChUQV9VU0VSX1NFUlZJQ0UpO1xuICBwcml2YXRlIF90cmFuc2xhdGlvbiA9IGluamVjdChUYVRyYW5zbGF0aW9uU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2F1dGgudXNlciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoaXNOb25OdWxsYWJsZSksXG4gICAgICAgIGRpc3RpbmN0KHVzZXIgPT4gdXNlcj8uc3ViKSxcbiAgICAgICAgdGFwKHVzZXIgPT4gdGhpcy51c2VyJC5uZXh0KHVzZXIgfHwgbnVsbCkpLFxuICAgICAgICB0YXAodXNlciA9PiB7XG4gICAgICAgICAgTG9nZ2VyLkxvZ0luZm8oJ3VzZXIgaW5mbycsIHVzZXIpO1xuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2Uuc2V0KG51bGwsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuX2F1dGguZXJyb3IkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGVycm9ycyA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmckLm5leHQoZmFsc2UpO1xuXG4gICAgICAgICAgTG9nZ2VyLkxvZ0Vycm9yKCdbVVNFUlNFUlZJQ0VdIGVycm9yIG9uIGF1dGhlbnRpY2F0aW9uJywgZXJyb3JzKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuX2F1dGguYXBwU3RhdGUkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHN0YXRlID0+IHtcbiAgICAgICAgICBMb2dnZXIuTG9nSW5mbygnW1VTRVJTRVJWSUNFXSBzdGF0ZScsIHN0YXRlKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuX2F1dGguaXNBdXRoZW50aWNhdGVkJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChpc0F1dGhlbnRpY2F0ZWQgPT4ge1xuICAgICAgICAgIHRoaXMuX3NlcnZlclNlcnZpY2UuaXNBdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xuICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXRTaWxlbnRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZCk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGZldGNoVXNlclByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS5mZXRjaFVzZXJQcm9maWxlJCgpLnBpcGUodGFwKCgpID0+IHRoaXMuaXNMb2FkaW5nJC5uZXh0KGZhbHNlKSkpO1xuICB9XG5cbiAgcHVibGljIGxvYWQoKSB7fVxuICBwdWJsaWMgbG9naW4oKSB7XG4gICAgdGhpcy5fYXV0aC5sb2dpbldpdGhSZWRpcmVjdCh7XG4gICAgICBhdXRob3JpemF0aW9uUGFyYW1zOiB7XG4gICAgICAgIHVpX2xvY2FsZXM6IHRoaXMuX3RyYW5zbGF0aW9uLmdldExhbmd1YWdlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBzaWduaW4oKSB7XG4gICAgdGhpcy5fYXV0aC5sb2dpbldpdGhSZWRpcmVjdCh7XG4gICAgICBhdXRob3JpemF0aW9uUGFyYW1zOiB7XG4gICAgICAgIHNjcmVlbl9oaW50OiAnc2lnbnVwJyxcbiAgICAgICAgdWlfbG9jYWxlczogdGhpcy5fdHJhbnNsYXRpb24uZ2V0TGFuZ3VhZ2UoKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGxvZ291dCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVsbD4ocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9hdXRoLmxvZ291dCgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=