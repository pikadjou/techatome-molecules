import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthClientConfig, AuthService } from '@auth0/auth0-angular';
import { distinct, filter, switchMap, take, tap } from 'rxjs';
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
        this._http = inject(HttpClient);
        this._authClientConfig = inject(AuthClientConfig);
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
    changePassword$() {
        const config = this._authClientConfig.get();
        return this._auth.user$.pipe(filter(isNonNullable), take(1), switchMap((user) => this._http.post(`https://${config.domain}/dbconnections/change_password`, {
            client_id: config.clientId,
            connection: 'Username-Password-Authentication',
            email: user.email,
        }, { responseType: 'text' })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aDAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9hdXRoMC9zZXJ2aWNlcy9hdXRoMC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFjLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFMUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0FBS25FLE1BQU0sT0FBTyxjQUFlLFNBQVEsYUFBYTtJQUMvQyxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFPRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBUEYsVUFBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QixpQkFBWSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2QyxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzVDLFVBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFD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LEVBQUUsQ0FDekIsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sSUFBSSxLQUFJLENBQUM7SUFDVCxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixtQkFBbUIsRUFBRTtnQkFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO2FBQzVDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQzNCLG1CQUFtQixFQUFFO2dCQUNuQixXQUFXLEVBQUUsUUFBUTtnQkFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO2FBQzVDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU07UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQXhHVSxjQUFjO21IQUFkLGNBQWMsY0FGYixNQUFNOzs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXV0aENsaWVudENvbmZpZywgQXV0aFNlcnZpY2UsIFVzZXIgfSBmcm9tICdAYXV0aDAvYXV0aDAtYW5ndWxhcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGRpc3RpbmN0LCBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAdGEvc2VydmVyJztcclxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSAnQHRhL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IFRhQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IFRBX1VTRVJfU0VSVklDRSB9IGZyb20gJy4uLy4uL3VzZXIvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYUF1dGgwU2VydmljZSBleHRlbmRzIFRhQXV0aFNlcnZpY2Uge1xyXG4gIGdldCB1c2VyUHJvZmlsZSQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlclNlcnZpY2UudXNlclByb2ZpbGUuZ2V0JCgpO1xyXG4gIH1cclxuICBwcml2YXRlIF9hdXRoID0gaW5qZWN0KEF1dGhTZXJ2aWNlKTtcclxuICBwcml2YXRlIF91c2VyU2VydmljZSA9IGluamVjdChUQV9VU0VSX1NFUlZJQ0UpO1xyXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uID0gaW5qZWN0KFRhVHJhbnNsYXRpb25TZXJ2aWNlKTtcclxuICBwcml2YXRlIF9odHRwID0gaW5qZWN0KEh0dHBDbGllbnQpO1xyXG4gIHByaXZhdGUgX2F1dGhDbGllbnRDb25maWcgPSBpbmplY3QoQXV0aENsaWVudENvbmZpZyk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLl9hdXRoLnVzZXIkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihpc05vbk51bGxhYmxlKSxcclxuICAgICAgICBkaXN0aW5jdCh1c2VyID0+IHVzZXI/LnN1YiksXHJcbiAgICAgICAgdGFwKHVzZXIgPT4gdGhpcy51c2VyJC5uZXh0KHVzZXIgfHwgbnVsbCkpLFxyXG4gICAgICAgIHRhcCh1c2VyID0+IHtcclxuICAgICAgICAgIExvZ2dlci5Mb2dJbmZvKCd1c2VyIGluZm8nLCB1c2VyKTtcclxuICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXQobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5fYXV0aC5lcnJvciRcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKGVycm9ycyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSk7XHJcblxyXG4gICAgICAgICAgTG9nZ2VyLkxvZ0Vycm9yKCdbVVNFUlNFUlZJQ0VdIGVycm9yIG9uIGF1dGhlbnRpY2F0aW9uJywgZXJyb3JzKTtcclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICB0aGlzLl9hdXRoLmFwcFN0YXRlJFxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgTG9nZ2VyLkxvZ0luZm8oJ1tVU0VSU0VSVklDRV0gc3RhdGUnLCBzdGF0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5fYXV0aC5pc0F1dGhlbnRpY2F0ZWQkXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChpc0F1dGhlbnRpY2F0ZWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fc2VydmVyU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQgPSBpc0F1dGhlbnRpY2F0ZWQ7XHJcbiAgICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5zZXRTaWxlbnRBdXRoZW50aWNhdGVkKGlzQXV0aGVudGljYXRlZCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2Uuc2V0QXV0aGVudGljYXRlZChpc0F1dGhlbnRpY2F0ZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmV0Y2hVc2VyUHJvZmlsZSQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlclNlcnZpY2UuZmV0Y2hVc2VyUHJvZmlsZSQoKS5waXBlKHRhcCgoKSA9PiB0aGlzLmlzTG9hZGluZyQubmV4dChmYWxzZSkpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VQYXNzd29yZCQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2F1dGhDbGllbnRDb25maWcuZ2V0KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2F1dGgudXNlciQucGlwZShcclxuICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxyXG4gICAgICB0YWtlKDEpLFxyXG4gICAgICBzd2l0Y2hNYXAoKHVzZXI6IFVzZXIpID0+XHJcbiAgICAgICAgdGhpcy5faHR0cC5wb3N0KFxyXG4gICAgICAgICAgYGh0dHBzOi8vJHtjb25maWcuZG9tYWlufS9kYmNvbm5lY3Rpb25zL2NoYW5nZV9wYXNzd29yZGAsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsaWVudF9pZDogY29uZmlnLmNsaWVudElkLFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uOiAnVXNlcm5hbWUtUGFzc3dvcmQtQXV0aGVudGljYXRpb24nLFxyXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH1cclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZCgpIHt9XHJcbiAgcHVibGljIGxvZ2luKCkge1xyXG4gICAgdGhpcy5fYXV0aC5sb2dpbldpdGhSZWRpcmVjdCh7XHJcbiAgICAgIGF1dGhvcml6YXRpb25QYXJhbXM6IHtcclxuICAgICAgICB1aV9sb2NhbGVzOiB0aGlzLl90cmFuc2xhdGlvbi5nZXRMYW5ndWFnZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzaWduaW4oKSB7XHJcbiAgICB0aGlzLl9hdXRoLmxvZ2luV2l0aFJlZGlyZWN0KHtcclxuICAgICAgYXV0aG9yaXphdGlvblBhcmFtczoge1xyXG4gICAgICAgIHNjcmVlbl9oaW50OiAnc2lnbnVwJyxcclxuICAgICAgICB1aV9sb2NhbGVzOiB0aGlzLl90cmFuc2xhdGlvbi5nZXRMYW5ndWFnZSgpLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVsbD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuX2F1dGgubG9nb3V0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19