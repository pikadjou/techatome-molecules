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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsTUFBTSxFQUNOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWMsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFnQixNQUFNLFFBQVEsQ0FBQztBQUN4RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIs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LEtBQUssQ0FBQztZQUNoRCxTQUFTLEVBQUUsVUFBVTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0scUJBQXFCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQTVJVSxrQkFBa0I7bUdBQWxCLGtCQUFrQixnZ0JDaEQvQix3Z0VBdURBLDJURHJCSSxTQUFTLDhDQUNULGlCQUFpQixtRkFDakIsd0JBQXdCLHdHQUN4QixlQUFlLHlGQUNmLGNBQWMsa0ZBQ2QsY0FBYyx3SUFDZCxlQUFlLDhKQUNmLGFBQWEsbUZBQ2IsdUJBQXVCLDBEQUN2QixhQUFhLGtEQUNiLDBCQUEwQjs7NEZBSWpCLGtCQUFrQjtrQkFwQjlCLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUDt3QkFDUCxTQUFTO3dCQUNULGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4QixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3FCQUN6Qjt3REFJRCxTQUFTO3NCQURSLEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixhQUFhO3NCQURaLE1BQU07Z0JBSVAsaUJBQWlCO3NCQURoQixNQUFNO2dCQUlQLGdCQUFnQjtzQkFEZixTQUFTO3VCQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFJL0MsYUFBYTtzQkFEWixTQUFTO3VCQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIGluamVjdCxcbiAgc2lnbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IE1lbnUsIE1lbnVDb21wb25lbnQsIE1lbnVJY29uLCBNZW51UGFuZWwgfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCwgRW1wdHlDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQsIFVzZXJMb2dvRGF0YSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBJbmxpbmVQcm9maWxlRGF0YUNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVEFfQVVUSF9UT0tFTiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBUQV9VU0VSX1NFUlZJQ0UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3dpdGNoTGFuZ3VhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9zd2l0Y2gtbGFuZ3VhZ2Uvc3dpdGNoLWxhbmd1YWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLW15LWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL215LWFjY291bnQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEFzeW5jUGlwZSxcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXG4gICAgTG9hZGVyQ29tcG9uZW50LFxuICAgIEVycm9yQ29tcG9uZW50LFxuICAgIEVtcHR5Q29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIFN3aXRjaExhbmd1YWdlQ29tcG9uZW50LFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgSW5saW5lUHJvZmlsZURhdGFDb21wb25lbnQsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUFjY291bnRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgaW5mb3NNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgYXBwVmVyc2lvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgaXNFZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdsYW5ndWFnZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgbGFuZ3VhZ2VUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQFZpZXdDaGlsZCgnaW5mb3NUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGluZm9zVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgX3VzZXJTZXJ2aWNlID0gaW5qZWN0KFRBX1VTRVJfU0VSVklDRSk7XG4gIHByaXZhdGUgX2F1dGhTZXJ2aWNlID0gaW5qZWN0KFRBX0FVVEhfVE9LRU4pO1xuXG4gIHB1YmxpYyBwcm9maWxlTWVudSA9IHNpZ25hbDxNZW51IHwgbnVsbD4obnVsbCk7XG4gIHB1YmxpYyBkaXNjb25uZWN0aW9uTWVudSA9IHNpZ25hbDxNZW51IHwgbnVsbD4obnVsbCk7XG4gIHB1YmxpYyB1c2VyTG9nbyQgPSBzaWduYWw8XG4gICAgT2JzZXJ2YWJsZTx7XG4gICAgICB1c2VyOiBVc2VyTG9nb0RhdGE7XG4gICAgICBzaXplPzogVGFTaXplcztcbiAgICB9IHwgbnVsbD5cbiAgPihcbiAgICB0aGlzLl91c2VyU2VydmljZS51c2VyUHJvZmlsZS5nZXQkKCkucGlwZShcbiAgICAgIG1hcCh1cCA9PiB7XG4gICAgICAgIGlmICghdXApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgcGljdHVyZTogdXAucGljdHVyZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1cC5sYXN0bmFtZSA/PyAnJyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXAuZmlyc3RuYW1lID8/ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKVxuICApO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS51c2VyUHJvZmlsZS5nZXQkKCkucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgc2Vjb25kOiBkYXRhPy5maXJzdG5hbWUgfHwgZGF0YT8ubGFzdG5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbWFpbDogZGF0YT8uZW1haWwgfHwgJycsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5wcm9maWxlTWVudS5zZXQodGhpcy5nZXRQcm9maWxlTWVudSh0aGlzLmxhbmd1YWdlVGVtcGxhdGUsIHRoaXMuaW5mb3NUZW1wbGF0ZSkpO1xuICAgIHRoaXMuZGlzY29ubmVjdGlvbk1lbnUuc2V0KHRoaXMuZ2V0RGlzY29ubmVjdGlvbk1lbnUoKSk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb1Byb2ZpbGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZUV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpLnRoZW4oKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuICB9XG5cbiAgcHVibGljIGdldFByb2ZpbGVNZW51KGxhbmd1YWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIGluZm9zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBjb25zdCBtZW51ID0gW1xuICAgICAgbmV3IE1lbnVQYW5lbCh7XG4gICAgICAgIGtleTogJ2xhbmd1YWdlJyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLmxhbmd1YWdlJyxcbiAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgIHRlbXBsYXRlOiBsYW5ndWFnZVRlbXBsYXRlLFxuICAgICAgICBzdHlsZTogJ2RhcmsnLFxuICAgICAgICBpY29uOiAnbGFuZ3VhZ2UnLFxuICAgICAgICBpY29uc0NvbG9yOiAnaWNvbi1jb2xvci1pY29uLXRlcnRpYXJ5JyxcbiAgICAgICAgZW5kaW5nSWNvbjogJ2Fycm93LWJpZy1yaWdodCcsXG4gICAgICB9KSxcbiAgICAgIG5ldyBNZW51UGFuZWwoe1xuICAgICAgICBrZXk6ICdpbmZvcycsXG4gICAgICAgIGxhYmVsOiAndXNlci5pbmZvcycsXG4gICAgICAgIG9yZGVyOiAzLFxuICAgICAgICB0ZW1wbGF0ZTogaW5mb3NUZW1wbGF0ZSxcbiAgICAgICAgc3R5bGU6ICdkYXJrJyxcbiAgICAgICAgaWNvbjogJ2luZm9zJyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICAgIGVuZGluZ0ljb246ICdhcnJvdy1iaWctcmlnaHQnLFxuICAgICAgfSksXG4gICAgICBuZXcgTWVudUljb24oe1xuICAgICAgICBrZXk6ICdwYXJhbXMnLFxuICAgICAgICBsYWJlbDogJ3VzZXIucGFyYW1zJyxcbiAgICAgICAgb3JkZXI6IDQsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBzdHlsZTogJ2RhcmsnLFxuICAgICAgICBpY29uOiAnbGFiZWwnLFxuICAgICAgICBpY29uc0NvbG9yOiAnaWNvbi1jb2xvci1pY29uLXRlcnRpYXJ5JyxcbiAgICAgIH0pLFxuICAgIF07XG5cbiAgICByZXR1cm4gbmV3IE1lbnUoe1xuICAgICAgZWxlbWVudHM6IG1lbnUuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLFxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERpc2Nvbm5lY3Rpb25NZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBbXG4gICAgICBuZXcgTWVudUljb24oe1xuICAgICAgICBrZXk6ICdsb2dvdXQnLFxuICAgICAgICBsYWJlbDogJ3VzZXIubG9nb3V0JyxcbiAgICAgICAgb3JkZXI6IDQsXG4gICAgICAgIHN0eWxlOiAnZGFyaycsXG4gICAgICAgIGljb246ICdsb2ctb3V0JyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmRpc2Nvbm5lY3QoKSxcbiAgICAgIH0pLFxuICAgIF07XG5cbiAgICByZXR1cm4gbmV3IE1lbnUoe1xuICAgICAgZWxlbWVudHM6IG1lbnUuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLFxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9FZGl0UHJvZmlsZSgpIHtcbiAgICB0aGlzLm5hdmlnYXRlRWRpdEV2ZW50LmVtaXQoKTtcbiAgfVxufVxuIiwiQGxldCBwcm9maWxlID0gdGhpcy5wcm9maWxlJCB8IGFzeW5jO1xuPGRpdiBjbGFzcz1cIm14LXNwYWNlLXNtXCIgYXBwU3RvcFByb3BhZ2F0aW9uPlxuICA8dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidGhpcy5yZXF1ZXN0U3RhdGUuaXNMb2FkaW5nKClcIj5cbiAgICA8dGEtZXJyb3IgW21lc3NhZ2VdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JNZXNzYWdlKClcIiBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCI+XG4gICAgICA8dGEtZW1wdHkgW2lzRW1wdHldPVwiIXByb2ZpbGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1zcGFjZS1zbSBiZHAtYiBjb2xvci1ib3JkZXItcHJpbWFyeVwiPlxuICAgICAgICAgICAgPHRhLWlubGluZS1wcm9maWxlLWRhdGFcbiAgICAgICAgICAgICAgW3Byb2ZpbGVdPVwicHJvZmlsZSA/PyB7fVwiXG4gICAgICAgICAgICAgIFt1c2VyTG9nb109XCJ0aGlzLnVzZXJMb2dvJCgpIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidGhpcy5uYXZpZ2F0ZVRvUHJvZmlsZSgpXCJcbiAgICAgICAgICAgID48L3RhLWlubGluZS1wcm9maWxlLWRhdGE+XG4gICAgICAgICAgICBAaWYgKHRoaXMuaXNFZGl0YWJsZSkge1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc3BhY2UtbWRcIj5cbiAgICAgICAgICAgICAgICA8dGEtYnV0dG9uIChhY3Rpb24pPVwidGhpcy5uYXZpZ2F0ZVRvRWRpdFByb2ZpbGUoKVwiIFtzdHlsZV09XCInc2Vjb25kYXJ5J1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsaWduLWNlbnRlciBidXR0b24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJtb2RpZnlcIiBjbGFzcz1cIm1yLXNwYWNlLXhzIG1vZGlmeS1pY29uXCI+PC90YS1mb250LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgJ3VzZXIubW9kaWZ5JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGEtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGEtZW1wdHk+XG4gICAgPC90YS1lcnJvcj5cbiAgPC90YS1sb2FkZXI+XG5AbGV0IHByb2ZpbGVNZW51ID0gdGhpcy5wcm9maWxlTWVudSgpO1xuICBAaWYgKHByb2ZpbGVNZW51KSB7XG4gICAgPGRpdiBjbGFzcz1cImJkcC1iIGNvbG9yLWJvcmRlci1wcmltYXJ5IHB0LXNwYWNlLXhzXCI+XG4gICAgICA8dGEtbWVudSBbbWVudV09XCJwcm9maWxlTWVudVwiIFtzdHlsZV09XCInZGFyaydcIiBbY29udGFpbmVyXT1cIidvdmVyZmxvdydcIj48L3RhLW1lbnU+XG4gICAgPC9kaXY+XG4gIH1cbkBsZXQgZGlzY29ubmVjdGlvbk1lbnUgPSB0aGlzLmRpc2Nvbm5lY3Rpb25NZW51KCk7XG4gIEBpZiAoZGlzY29ubmVjdGlvbk1lbnUpIHtcbiAgICA8ZGl2IGNsYXNzPVwiYmRwLWIgcHQtc3BhY2UteHNcIj5cbiAgICAgIDx0YS1tZW51IFttZW51XT1cImRpc2Nvbm5lY3Rpb25NZW51XCIgW3N0eWxlXT1cIidkYXJrJ1wiPjwvdGEtbWVudT5cbiAgICA8L2Rpdj5cbiAgfVxuICA8ZGl2IGNsYXNzPVwidGEtY1wiPlxuICAgIDxzbWFsbD57eyB0aGlzLmFwcFZlcnNpb24gfX08L3NtYWxsPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2xhbmd1YWdlVGVtcGxhdGU+XG4gIDx0YS1zd2l0Y2gtbGFuZ3VhZ2U+PC90YS1zd2l0Y2gtbGFuZ3VhZ2U+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2luZm9zVGVtcGxhdGU+XG4gIEBpZiAodGhpcy5pbmZvc01lbnUpIHtcbiAgICA8ZGl2IGNsYXNzPVwibS1zcGFjZS1zbSBpbmZvLXBhbmVsXCI+XG4gICAgICA8dGEtbWVudSBbbWVudV09XCJ0aGlzLmluZm9zTWVudVwiIFtzdHlsZV09XCInZGFyaydcIj48L3RhLW1lbnU+XG4gICAgPC9kaXY+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG4iXX0=