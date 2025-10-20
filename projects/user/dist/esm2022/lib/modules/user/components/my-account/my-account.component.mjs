import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { map } from 'rxjs';
import { FontIconComponent } from '@ta/icons';
import { Menu, MenuComponent, MenuIcon } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, EmptyComponent, ErrorComponent, LoaderComponent } from '@ta/ui';
import { InlineProfileDataComponent } from '@ta/ui';
import { StopPropagationDirective } from '@ta/utils';
import { TaBaseComponent } from '@ta/utils';
import { TA_AUTH_TOKEN } from '../../services/auth.service';
import { TA_USER_SERVICE } from '../../services/user.service';
import * as i0 from "@angular/core";
export class MyAccountComponent extends TaBaseComponent {
    constructor() {
        super();
        this.profileMenu = null;
        this.appVersion = null;
        this.isEditable = false;
        this.navigateEvent = new EventEmitter();
        this.navigateEditEvent = new EventEmitter();
        this._userService = inject(TA_USER_SERVICE);
        this._authService = inject(TA_AUTH_TOKEN);
        this.disconnectionMenu = signal(null);
        this.userLogo$ = signal(this._userService.userProfile.get$().pipe(map(up => {
            if (!up) {
                return null;
            }
            return {
                user: {
                    picture: up.picture,
                    lastname: up.lastname ?? '',
                    firstname: up.firstname ?? '',
                },
                size: 'lg',
            };
        })));
    }
    get profile$() {
        return this._userService.userProfile.get$().pipe(map(data => {
            return {
                title: {
                    second: data?.firstname || data?.lastname,
                },
                email: data?.email || '',
            };
        }));
    }
    ngOnInit() {
        this.disconnectionMenu.set(this.getDisconnectionMenu());
    }
    navigateToProfile() {
        this.navigateEvent.emit();
    }
    disconnect() {
        this._authService.logout().then(() => location.reload());
    }
    getDisconnectionMenu() {
        const menu = [
            new MenuIcon({
                key: 'logout',
                label: 'user.logout',
                order: 4,
                style: 'dark',
                icon: 'log-out',
                iconsColor: 'icon-color-icon-tertiary',
                callback: () => this.disconnect(),
            }),
        ];
        return new Menu({
            elements: menu.sort((a, b) => a.order - b.order),
            direction: 'vertical',
        });
    }
    navigateToEditProfile() {
        this.navigateEditEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MyAccountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MyAccountComponent, isStandalone: true, selector: "ta-my-account", inputs: { profileMenu: "profileMenu", appVersion: "appVersion", isEditable: "isEditable" }, outputs: { navigateEvent: "navigateEvent", navigateEditEvent: "navigateEditEvent" }, usesInheritance: true, ngImport: i0, template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n          <div class=\"p-space-sm bdp-b color-border-primary\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$() | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n  @if (this.profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"this.profileMenu\" [style]=\"'dark'\" [container]=\"'overflow'\"></ta-menu>\n    </div>\n  }\n@let disconnectionMenu = this.disconnectionMenu();\n  @if (disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: MenuComponent, selector: "ta-menu", inputs: ["menu", "container"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InlineProfileDataComponent, selector: "ta-inline-profile-data", inputs: ["profile", "userLogo"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MyAccountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-my-account', standalone: true, imports: [
                        AsyncPipe,
                        FontIconComponent,
                        StopPropagationDirective,
                        LoaderComponent,
                        ErrorComponent,
                        EmptyComponent,
                        ButtonComponent,
                        MenuComponent,
                        TranslatePipe,
                        InlineProfileDataComponent,
                        StopPropagationDirective,
                    ], template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n          <div class=\"p-space-sm bdp-b color-border-primary\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$() | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n  @if (this.profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"this.profileMenu\" [style]=\"'dark'\" [container]=\"'overflow'\"></ta-menu>\n    </div>\n  }\n@let disconnectionMenu = this.disconnectionMenu();\n  @if (disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"] }]
        }], ctorParameters: () => [], propDecorators: { profileMenu: [{
                type: Input
            }], appVersion: [{
                type: Input
            }], isEditable: [{
                type: Input
            }], navigateEvent: [{
                type: Output
            }], navigateEditEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBYyxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxRQUFRLENBQUM7QUFDeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBcUI5RCxNQUFNLE9B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Qy9CLDhyREEyQ0EsMlREcEJJLFNBQVMsOENBQ1QsaUJBQWlCLG1GQUNqQix3QkFBd0Isd0dBQ3hCLGVBQWUseUdBQ2YsY0FBYyxrRkFDZCxjQUFjLHdJQUNkLGVBQWUsOEpBQ2YsYUFBYSw4RUFDYixhQUFhLGtEQUNiLDBCQUEwQjs7NEZBSWpCLGtCQUFrQjtrQkFuQjlCLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUDt3QkFDUCxTQUFTO3dCQUNULGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYiwwQkFBMEI7d0JBQzFCLHdCQUF3QjtxQkFDekI7d0RBSUQsV0FBVztzQkFEVixLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixNQUFNO2dCQUlQLGlCQUFpQjtzQkFEaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBpbmplY3QsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgTWVudSwgTWVudUNvbXBvbmVudCwgTWVudUljb24gfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCwgRW1wdHlDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQsIFVzZXJMb2dvRGF0YSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBJbmxpbmVQcm9maWxlRGF0YUNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVEFfQVVUSF9UT0tFTiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBUQV9VU0VSX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1teS1hY2NvdW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL215LWFjY291bnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBBc3luY1BpcGUsXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBFbXB0eUNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIElubGluZVByb2ZpbGVEYXRhQ29tcG9uZW50LFxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTXlBY2NvdW50Q29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcHJvZmlsZU1lbnU6IE1lbnUgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBhcHBWZXJzaW9uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBpc0VkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIG5hdmlnYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIG5hdmlnYXRlRWRpdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgX3VzZXJTZXJ2aWNlID0gaW5qZWN0KFRBX1VTRVJfU0VSVklDRSk7XG4gIHByaXZhdGUgX2F1dGhTZXJ2aWNlID0gaW5qZWN0KFRBX0FVVEhfVE9LRU4pO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0aW9uTWVudSA9IHNpZ25hbDxNZW51IHwgbnVsbD4obnVsbCk7XG4gIHB1YmxpYyB1c2VyTG9nbyQgPSBzaWduYWw8XG4gICAgT2JzZXJ2YWJsZTx7XG4gICAgICB1c2VyOiBVc2VyTG9nb0RhdGE7XG4gICAgICBzaXplPzogVGFTaXplcztcbiAgICB9IHwgbnVsbD5cbiAgPihcbiAgICB0aGlzLl91c2VyU2VydmljZS51c2VyUHJvZmlsZS5nZXQkKCkucGlwZShcbiAgICAgIG1hcCh1cCA9PiB7XG4gICAgICAgIGlmICghdXApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgcGljdHVyZTogdXAucGljdHVyZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1cC5sYXN0bmFtZSA/PyAnJyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXAuZmlyc3RuYW1lID8/ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKVxuICApO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS51c2VyUHJvZmlsZS5nZXQkKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgc2Vjb25kOiBkYXRhPy5maXJzdG5hbWUgfHwgZGF0YT8ubGFzdG5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbWFpbDogZGF0YT8uZW1haWwgfHwgJycsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3Rpb25NZW51LnNldCh0aGlzLmdldERpc2Nvbm5lY3Rpb25NZW51KCkpO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9Qcm9maWxlKCkge1xuICAgIHRoaXMubmF2aWdhdGVFdmVudC5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREaXNjb25uZWN0aW9uTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gW1xuICAgICAgbmV3IE1lbnVJY29uKHtcbiAgICAgICAga2V5OiAnbG9nb3V0JyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLmxvZ291dCcsXG4gICAgICAgIG9yZGVyOiA0LFxuICAgICAgICBzdHlsZTogJ2RhcmsnLFxuICAgICAgICBpY29uOiAnbG9nLW91dCcsXG4gICAgICAgIGljb25zQ29sb3I6ICdpY29uLWNvbG9yLWljb24tdGVydGlhcnknLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5kaXNjb25uZWN0KCksXG4gICAgICB9KSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIG5ldyBNZW51KHtcbiAgICAgIGVsZW1lbnRzOiBtZW51LnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKSxcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvRWRpdFByb2ZpbGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZUVkaXRFdmVudC5lbWl0KCk7XG4gIH1cbn1cbiIsIkBsZXQgcHJvZmlsZSA9IHRoaXMucHJvZmlsZSQgfCBhc3luYztcbjxkaXYgY2xhc3M9XCJteC1zcGFjZS1zbVwiIGFwcFN0b3BQcm9wYWdhdGlvbj5cbiAgPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCI+XG4gICAgPHRhLWVycm9yIFttZXNzYWdlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yTWVzc2FnZSgpXCIgW2NvZGVdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JTdGF0dXMoKVwiPlxuICAgICAgPHRhLWVtcHR5IFtpc0VtcHR5XT1cIiFwcm9maWxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtc3BhY2Utc20gYmRwLWIgY29sb3ItYm9yZGVyLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDx0YS1pbmxpbmUtcHJvZmlsZS1kYXRhXG4gICAgICAgICAgICAgIFtwcm9maWxlXT1cInByb2ZpbGUgPz8ge31cIlxuICAgICAgICAgICAgICBbdXNlckxvZ29dPVwidGhpcy51c2VyTG9nbyQoKSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInRoaXMubmF2aWdhdGVUb1Byb2ZpbGUoKVwiXG4gICAgICAgICAgICA+PC90YS1pbmxpbmUtcHJvZmlsZS1kYXRhPlxuICAgICAgICAgICAgQGlmICh0aGlzLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LXNwYWNlLW1kXCI+XG4gICAgICAgICAgICAgICAgPHRhLWJ1dHRvbiAoYWN0aW9uKT1cInRoaXMubmF2aWdhdGVUb0VkaXRQcm9maWxlKClcIiBbc3R5bGVdPVwiJ3NlY29uZGFyeSdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGlnbi1jZW50ZXIgYnV0dG9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwibW9kaWZ5XCIgY2xhc3M9XCJtci1zcGFjZS14cyBtb2RpZnktaWNvblwiPjwvdGEtZm9udC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7ICd1c2VyLm1vZGlmeScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RhLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3RhLWVtcHR5PlxuICAgIDwvdGEtZXJyb3I+XG4gIDwvdGEtbG9hZGVyPlxuICBAaWYgKHRoaXMucHJvZmlsZU1lbnUpIHtcbiAgICA8ZGl2IGNsYXNzPVwiYmRwLWIgY29sb3ItYm9yZGVyLXByaW1hcnkgcHQtc3BhY2UteHNcIj5cbiAgICAgIDx0YS1tZW51IFttZW51XT1cInRoaXMucHJvZmlsZU1lbnVcIiBbc3R5bGVdPVwiJ2RhcmsnXCIgW2NvbnRhaW5lcl09XCInb3ZlcmZsb3cnXCI+PC90YS1tZW51PlxuICAgIDwvZGl2PlxuICB9XG5AbGV0IGRpc2Nvbm5lY3Rpb25NZW51ID0gdGhpcy5kaXNjb25uZWN0aW9uTWVudSgpO1xuICBAaWYgKGRpc2Nvbm5lY3Rpb25NZW51KSB7XG4gICAgPGRpdiBjbGFzcz1cImJkcC1iIHB0LXNwYWNlLXhzXCI+XG4gICAgICA8dGEtbWVudSBbbWVudV09XCJkaXNjb25uZWN0aW9uTWVudVwiIFtzdHlsZV09XCInZGFyaydcIj48L3RhLW1lbnU+XG4gICAgPC9kaXY+XG4gIH1cbiAgPGRpdiBjbGFzcz1cInRhLWNcIj5cbiAgICA8c21hbGw+e3sgdGhpcy5hcHBWZXJzaW9uIH19PC9zbWFsbD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuIl19