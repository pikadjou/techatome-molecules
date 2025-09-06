import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, inject, signal, } from '@angular/core';
import { map } from 'rxjs';
import { FontIconComponent } from '@ta/icons';
import { Menu, MenuComponent, MenuIcon, MenuPanel } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, EmptyComponent, ErrorComponent, LoaderComponent } from '@ta/ui';
import { InlineProfileDataComponent } from '@ta/ui';
import { StopPropagationDirective } from '@ta/utils';
import { TaBaseComponent } from '@ta/utils';
import { TA_AUTH_TOKEN } from '../../services/auth.service';
import { TA_USER_SERVICE } from '../../services/user.service';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';
import * as i0 from "@angular/core";
export class MyAccountComponent extends TaBaseComponent {
    constructor() {
        super();
        this.infosMenu = null;
        this.appVersion = null;
        this.isEditable = false;
        this.navigateEvent = new EventEmitter();
        this.navigateEditEvent = new EventEmitter();
        this._userService = inject(TA_USER_SERVICE);
        this._authService = inject(TA_AUTH_TOKEN);
        this.profileMenu = signal(null);
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
    ngAfterViewInit() {
        this.profileMenu.set(this.getProfileMenu(this.languageTemplate, this.infosTemplate));
        this.disconnectionMenu.set(this.getDisconnectionMenu());
    }
    navigateToProfile() {
        this.navigateEvent.emit();
    }
    disconnect() {
        this._authService.logout().then(() => location.reload());
    }
    getProfileMenu(languageTemplate, infosTemplate) {
        const menu = [
            new MenuPanel({
                key: 'language',
                label: 'user.language',
                order: 2,
                template: languageTemplate,
                style: 'dark',
                icon: 'language',
                iconsColor: 'icon-color-icon-tertiary',
                endingIcon: 'arrow-big-right',
            }),
            new MenuPanel({
                key: 'infos',
                label: 'user.infos',
                order: 3,
                template: infosTemplate,
                style: 'dark',
                icon: 'infos',
                iconsColor: 'icon-color-icon-tertiary',
                endingIcon: 'arrow-big-right',
            }),
            new MenuIcon({
                key: 'params',
                label: 'user.params',
                order: 4,
                disabled: true,
                style: 'dark',
                icon: 'label',
                iconsColor: 'icon-color-icon-tertiary',
            }),
        ];
        return new Menu({
            elements: menu.sort((a, b) => a.order - b.order),
            direction: 'vertical',
        });
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MyAccountComponent, isStandalone: true, selector: "ta-my-account", inputs: { infosMenu: "infosMenu", appVersion: "appVersion", isEditable: "isEditable" }, outputs: { navigateEvent: "navigateEvent", navigateEditEvent: "navigateEditEvent" }, viewQueries: [{ propertyName: "languageTemplate", first: true, predicate: ["languageTemplate"], descendants: true, static: true }, { propertyName: "infosTemplate", first: true, predicate: ["infosTemplate"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n          <div class=\"p-space-sm bdp-b color-border-primary\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$() | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n@let profileMenu = this.profileMenu();\n  @if (profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"profileMenu\" [style]=\"'dark'\" [container]=\"'overflow'\"></ta-menu>\n    </div>\n  }\n@let disconnectionMenu = this.disconnectionMenu();\n  @if (disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"m-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: MenuComponent, selector: "ta-menu", inputs: ["menu", "container"] }, { kind: "component", type: SwitchLanguageComponent, selector: "ta-switch-language" }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InlineProfileDataComponent, selector: "ta-inline-profile-data", inputs: ["profile", "userLogo"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, decorators: [{
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
                        SwitchLanguageComponent,
                        TranslatePipe,
                        InlineProfileDataComponent,
                        StopPropagationDirective,
                    ], template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n          <div class=\"p-space-sm bdp-b color-border-primary\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$() | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n@let profileMenu = this.profileMenu();\n  @if (profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"profileMenu\" [style]=\"'dark'\" [container]=\"'overflow'\"></ta-menu>\n    </div>\n  }\n@let disconnectionMenu = this.disconnectionMenu();\n  @if (disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"m-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"] }]
        }], ctorParameters: () => [], propDecorators: { infosMenu: [{
                type: Input
            }], appVersion: [{
                type: Input
            }], isEditable: [{
                type: Input
            }], navigateEvent: [{
                type: Output
            }], navigateEditEvent: [{
                type: Output
            }], languageTemplate: [{
                type: ViewChild,
                args: ['languageTemplate', { static: true }]
            }], infosTemplate: [{
                type: ViewChild,
                args: ['infosTemplate', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWMsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFnQixNQUFNLFFBQVEsQ0FBQztBQUN4RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIs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S0FBSyxDQUFDO1lBQ2hELFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxxQkFBcUI7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7K0dBM0lVLGtCQUFrQjttR0FBbEIsa0JBQWtCLGdnQkNoRC9CLHdnRUF1REEsMlREckJJLFNBQVMsOENBQ1QsaUJBQWlCLG1GQUNqQix3QkFBd0Isd0dBQ3hCLGVBQWUseUZBQ2YsY0FBYyxrRkFDZCxjQUFjLHdJQUNkLGVBQWUsOEpBQ2YsYUFBYSxtRkFDYix1QkFBdUIsMERBQ3ZCLGFBQWEsa0RBQ2IsMEJBQTBCOzs0RkFJakIsa0JBQWtCO2tCQXBCOUIsU0FBUzsrQkFDRSxlQUFlLGNBR2IsSUFBSSxXQUNQO3dCQUNQLFNBQVM7d0JBQ1QsaUJBQWlCO3dCQUNqQix3QkFBd0I7d0JBQ3hCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2IsMEJBQTBCO3dCQUMxQix3QkFBd0I7cUJBQ3pCO3dEQUlELFNBQVM7c0JBRFIsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosTUFBTTtnQkFJUCxpQkFBaUI7c0JBRGhCLE1BQU07Z0JBSVAsZ0JBQWdCO3NCQURmLFNBQVM7dUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUkvQyxhQUFhO3NCQURaLFNBQVM7dUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgaW5qZWN0LFxuICBzaWduYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgTWVudSwgTWVudUNvbXBvbmVudCwgTWVudUljb24sIE1lbnVQYW5lbCB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50LCBFbXB0eUNvbXBvbmVudCwgRXJyb3JDb21wb25lbnQsIExvYWRlckNvbXBvbmVudCwgVXNlckxvZ29EYXRhIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IElubGluZVByb2ZpbGVEYXRhQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ0B0YS91dGlscyc7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUQV9BVVRIX1RPS0VOIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFRBX1VTRVJfU0VSVklDRSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTd2l0Y2hMYW5ndWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3N3aXRjaC1sYW5ndWFnZS9zd2l0Y2gtbGFuZ3VhZ2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtbXktYWNjb3VudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1hY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQXN5bmNQaXBlLFxuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgU3dpdGNoTGFuZ3VhZ2VDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBJbmxpbmVQcm9maWxlRGF0YUNvbXBvbmVudCxcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE15QWNjb3VudENvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBpbmZvc01lbnU6IE1lbnUgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBhcHBWZXJzaW9uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBpc0VkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIG5hdmlnYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIG5hdmlnYXRlRWRpdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2xhbmd1YWdlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBsYW5ndWFnZVRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKCdpbmZvc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgaW5mb3NUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBfdXNlclNlcnZpY2UgPSBpbmplY3QoVEFfVVNFUl9TRVJWSUNFKTtcbiAgcHJpdmF0ZSBfYXV0aFNlcnZpY2UgPSBpbmplY3QoVEFfQVVUSF9UT0tFTik7XG5cbiAgcHVibGljIHByb2ZpbGVNZW51ID0gc2lnbmFsPE1lbnUgfCBudWxsPihudWxsKTtcbiAgcHVibGljIGRpc2Nvbm5lY3Rpb25NZW51ID0gc2lnbmFsPE1lbnUgfCBudWxsPihudWxsKTtcbiAgcHVibGljIHVzZXJMb2dvJCA9IHNpZ25hbDxPYnNlcnZhYmxlPHtcbiAgICB1c2VyOiBVc2VyTG9nb0RhdGE7XG4gICAgc2l6ZT86IFRhU2l6ZXM7XG4gIH0gfCBudWxsPj4odGhpcy5fdXNlclNlcnZpY2UudXNlclByb2ZpbGUuZ2V0JCgpLnBpcGUoXG4gICAgICBtYXAodXAgPT4ge1xuICAgICAgICBpZiAoIXVwKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIHBpY3R1cmU6IHVwLnBpY3R1cmUsXG4gICAgICAgICAgICBsYXN0bmFtZTogdXAubGFzdG5hbWUgPz8gJycsXG4gICAgICAgICAgICBmaXJzdG5hbWU6IHVwLmZpcnN0bmFtZSA/PyAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgIClcbiAgKVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS51c2VyUHJvZmlsZS5nZXQkKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgc2Vjb25kOiBkYXRhPy5maXJzdG5hbWUgfHwgZGF0YT8ubGFzdG5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbWFpbDogZGF0YT8uZW1haWwgfHwgJycsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucHJvZmlsZU1lbnUuc2V0KHRoaXMuZ2V0UHJvZmlsZU1lbnUodGhpcy5sYW5ndWFnZVRlbXBsYXRlLCB0aGlzLmluZm9zVGVtcGxhdGUpKTtcbiAgICB0aGlzLmRpc2Nvbm5lY3Rpb25NZW51LnNldCh0aGlzLmdldERpc2Nvbm5lY3Rpb25NZW51KCkpO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9Qcm9maWxlKCkge1xuICAgIHRoaXMubmF2aWdhdGVFdmVudC5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9maWxlTWVudShsYW5ndWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBpbmZvc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgY29uc3QgbWVudSA9IFtcbiAgICAgIG5ldyBNZW51UGFuZWwoe1xuICAgICAgICBrZXk6ICdsYW5ndWFnZScsXG4gICAgICAgIGxhYmVsOiAndXNlci5sYW5ndWFnZScsXG4gICAgICAgIG9yZGVyOiAyLFxuICAgICAgICB0ZW1wbGF0ZTogbGFuZ3VhZ2VUZW1wbGF0ZSxcbiAgICAgICAgc3R5bGU6ICdkYXJrJyxcbiAgICAgICAgaWNvbjogJ2xhbmd1YWdlJyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICAgIGVuZGluZ0ljb246ICdhcnJvdy1iaWctcmlnaHQnLFxuICAgICAgfSksXG4gICAgICBuZXcgTWVudVBhbmVsKHtcbiAgICAgICAga2V5OiAnaW5mb3MnLFxuICAgICAgICBsYWJlbDogJ3VzZXIuaW5mb3MnLFxuICAgICAgICBvcmRlcjogMyxcbiAgICAgICAgdGVtcGxhdGU6IGluZm9zVGVtcGxhdGUsXG4gICAgICAgIHN0eWxlOiAnZGFyaycsXG4gICAgICAgIGljb246ICdpbmZvcycsXG4gICAgICAgIGljb25zQ29sb3I6ICdpY29uLWNvbG9yLWljb24tdGVydGlhcnknLFxuICAgICAgICBlbmRpbmdJY29uOiAnYXJyb3ctYmlnLXJpZ2h0JyxcbiAgICAgIH0pLFxuICAgICAgbmV3IE1lbnVJY29uKHtcbiAgICAgICAga2V5OiAncGFyYW1zJyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLnBhcmFtcycsXG4gICAgICAgIG9yZGVyOiA0LFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgc3R5bGU6ICdkYXJrJyxcbiAgICAgICAgaWNvbjogJ2xhYmVsJyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICB9KSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIG5ldyBNZW51KHtcbiAgICAgIGVsZW1lbnRzOiBtZW51LnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKSxcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREaXNjb25uZWN0aW9uTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gW1xuICAgICAgbmV3IE1lbnVJY29uKHtcbiAgICAgICAga2V5OiAnbG9nb3V0JyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLmxvZ291dCcsXG4gICAgICAgIG9yZGVyOiA0LFxuICAgICAgICBzdHlsZTogJ2RhcmsnLFxuICAgICAgICBpY29uOiAnbG9nLW91dCcsXG4gICAgICAgIGljb25zQ29sb3I6ICdpY29uLWNvbG9yLWljb24tdGVydGlhcnknLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5kaXNjb25uZWN0KCksXG4gICAgICB9KSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIG5ldyBNZW51KHtcbiAgICAgIGVsZW1lbnRzOiBtZW51LnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKSxcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvRWRpdFByb2ZpbGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZUVkaXRFdmVudC5lbWl0KCk7XG4gIH1cbn1cbiIsIkBsZXQgcHJvZmlsZSA9IHRoaXMucHJvZmlsZSQgfCBhc3luYztcbjxkaXYgY2xhc3M9XCJteC1zcGFjZS1zbVwiIGFwcFN0b3BQcm9wYWdhdGlvbj5cbiAgPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCI+XG4gICAgPHRhLWVycm9yIFttZXNzYWdlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yTWVzc2FnZSgpXCIgW2NvZGVdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JTdGF0dXMoKVwiPlxuICAgICAgPHRhLWVtcHR5IFtpc0VtcHR5XT1cIiFwcm9maWxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInAtc3BhY2Utc20gYmRwLWIgY29sb3ItYm9yZGVyLXByaW1hcnlcIj5cbiAgICAgICAgICAgIDx0YS1pbmxpbmUtcHJvZmlsZS1kYXRhXG4gICAgICAgICAgICAgIFtwcm9maWxlXT1cInByb2ZpbGUgPz8ge31cIlxuICAgICAgICAgICAgICBbdXNlckxvZ29dPVwidGhpcy51c2VyTG9nbyQoKSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInRoaXMubmF2aWdhdGVUb1Byb2ZpbGUoKVwiXG4gICAgICAgICAgICA+PC90YS1pbmxpbmUtcHJvZmlsZS1kYXRhPlxuICAgICAgICAgICAgQGlmICh0aGlzLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LXNwYWNlLW1kXCI+XG4gICAgICAgICAgICAgICAgPHRhLWJ1dHRvbiAoYWN0aW9uKT1cInRoaXMubmF2aWdhdGVUb0VkaXRQcm9maWxlKClcIiBbc3R5bGVdPVwiJ3NlY29uZGFyeSdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGlnbi1jZW50ZXIgYnV0dG9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwibW9kaWZ5XCIgY2xhc3M9XCJtci1zcGFjZS14cyBtb2RpZnktaWNvblwiPjwvdGEtZm9udC1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7ICd1c2VyLm1vZGlmeScgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RhLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3RhLWVtcHR5PlxuICAgIDwvdGEtZXJyb3I+XG4gIDwvdGEtbG9hZGVyPlxuQGxldCBwcm9maWxlTWVudSA9IHRoaXMucHJvZmlsZU1lbnUoKTtcbiAgQGlmIChwcm9maWxlTWVudSkge1xuICAgIDxkaXYgY2xhc3M9XCJiZHAtYiBjb2xvci1ib3JkZXItcHJpbWFyeSBwdC1zcGFjZS14c1wiPlxuICAgICAgPHRhLW1lbnUgW21lbnVdPVwicHJvZmlsZU1lbnVcIiBbc3R5bGVdPVwiJ2RhcmsnXCIgW2NvbnRhaW5lcl09XCInb3ZlcmZsb3cnXCI+PC90YS1tZW51PlxuICAgIDwvZGl2PlxuICB9XG5AbGV0IGRpc2Nvbm5lY3Rpb25NZW51ID0gdGhpcy5kaXNjb25uZWN0aW9uTWVudSgpO1xuICBAaWYgKGRpc2Nvbm5lY3Rpb25NZW51KSB7XG4gICAgPGRpdiBjbGFzcz1cImJkcC1iIHB0LXNwYWNlLXhzXCI+XG4gICAgICA8dGEtbWVudSBbbWVudV09XCJkaXNjb25uZWN0aW9uTWVudVwiIFtzdHlsZV09XCInZGFyaydcIj48L3RhLW1lbnU+XG4gICAgPC9kaXY+XG4gIH1cbiAgPGRpdiBjbGFzcz1cInRhLWNcIj5cbiAgICA8c21hbGw+e3sgdGhpcy5hcHBWZXJzaW9uIH19PC9zbWFsbD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNsYW5ndWFnZVRlbXBsYXRlPlxuICA8dGEtc3dpdGNoLWxhbmd1YWdlPjwvdGEtc3dpdGNoLWxhbmd1YWdlPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNpbmZvc1RlbXBsYXRlPlxuICBAaWYgKHRoaXMuaW5mb3NNZW51KSB7XG4gICAgPGRpdiBjbGFzcz1cIm0tc3BhY2Utc20gaW5mby1wYW5lbFwiPlxuICAgICAgPHRhLW1lbnUgW21lbnVdPVwidGhpcy5pbmZvc01lbnVcIiBbc3R5bGVdPVwiJ2RhcmsnXCI+PC90YS1tZW51PlxuICAgIDwvZGl2PlxuICB9XG48L25nLXRlbXBsYXRlPlxuIl19