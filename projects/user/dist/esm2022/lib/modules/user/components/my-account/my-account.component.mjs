import { AsyncPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { map } from 'rxjs';
import { FontIconComponent } from '@ta/icons';
import { Menu, MenuComponent, MenuIcon, MenuPanel } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, EmptyComponent, ErrorComponent, InlineProfileDataComponent, LoaderComponent, } from '@ta/ui';
import { StopPropagationDirective } from '@ta/utils';
import { TaBaseComponent } from '@ta/utils';
import { CAM_AUTH_TOKEN } from '../../services/auth.service';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/users.service";
export class MyAccountComponent extends TaBaseComponent {
    get currentUser$() {
        return this._usersService.currentUser.get$();
    }
    constructor(_usersService) {
        super();
        this._usersService = _usersService;
        this.infosMenu = null;
        this.appVersion = null;
        this.isEditable = false;
        this.navigateEvent = new EventEmitter();
        this.navigateEditEvent = new EventEmitter();
        this._authService = inject(CAM_AUTH_TOKEN);
        this.profileMenu = null;
        this.disconnectionMenu = null;
        this._fetch();
    }
    get profile$() {
        return this.currentUser$.pipe(map(data => {
            return {
                title: {
                    second: data?.firstName || data?.lastName,
                },
                email: data?.userName,
            };
        }));
    }
    get userLogo$() {
        return this.currentUser$.pipe(map(x => {
            if (!x) {
                return null;
            }
            return {
                userInfo: {
                    profilePictureUrl: x.picture,
                    naming: {
                        name: x.firstName || '',
                        firstName: x.lastName || '',
                        trigram: x.trigram || '',
                    },
                },
                size: 'lg',
            };
        }));
    }
    ngAfterViewChecked() {
        this.profileMenu = this.getProfileMenu(this.languageTemplate, this.infosTemplate);
        this.disconnectionMenu = this.getDisconnectionMenu();
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
    _fetch() {
        this.requestState.asked();
        this._usersService.fetchCurrentUser$().subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, deps: [{ token: i1.TaUsersService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MyAccountComponent, isStandalone: true, selector: "ta-my-account", inputs: { infosMenu: "infosMenu", appVersion: "appVersion", isEditable: "isEditable" }, outputs: { navigateEvent: "navigateEvent", navigateEditEvent: "navigateEditEvent" }, viewQueries: [{ propertyName: "languageTemplate", first: true, predicate: ["languageTemplate"], descendants: true, static: true }, { propertyName: "infosTemplate", first: true, predicate: ["infosTemplate"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.profile$ | async as profile\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n        <div class=\"bdp-b color-border-primary\">\n          <div class=\"pt-space-xs m-xs\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$ | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n\n  @if (this.profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"this.profileMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n\n  @if (this.disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"this.disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"mx-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: InlineProfileDataComponent, selector: "ta-inline-profile-data", inputs: ["profile", "userLogo"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: MenuComponent, selector: "ta-menu", inputs: ["menu", "container"] }, { kind: "component", type: SwitchLanguageComponent, selector: "ta-switch-language" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-my-account', standalone: true, imports: [
                        NgIf,
                        AsyncPipe,
                        FontIconComponent,
                        StopPropagationDirective,
                        LoaderComponent,
                        ErrorComponent,
                        EmptyComponent,
                        InlineProfileDataComponent,
                        ButtonComponent,
                        MenuComponent,
                        SwitchLanguageComponent,
                        TranslatePipe,
                    ], template: "<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\" *ngLet=\"this.profile$ | async as profile\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n        <div class=\"bdp-b color-border-primary\">\n          <div class=\"pt-space-xs m-xs\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$ | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n\n  @if (this.profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"this.profileMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n\n  @if (this.disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"this.disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"mx-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"] }]
        }], ctorParameters: () => [{ type: i1.TaUsersService }], propDecorators: { infosMenu: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RyxPQUFPLEVBQWMsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFDZCxjQUFjLEVBQ2QsMEJBQTBCLEVBQzFCLGVBQWUsR0FFaEIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFzQnZGLE1BQU0sT0FBTyxrQkFB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WixNQUFNO2dCQUlQLGlCQUFpQjtzQkFEaEIsTUFBTTtnQkFJUCxnQkFBZ0I7c0JBRGYsU0FBUzt1QkFBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSS9DLGFBQWE7c0JBRFosU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgTWVudSwgTWVudUNvbXBvbmVudCwgTWVudUljb24sIE1lbnVQYW5lbCB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHtcbiAgQnV0dG9uQ29tcG9uZW50LFxuICBFbXB0eUNvbXBvbmVudCxcbiAgRXJyb3JDb21wb25lbnQsXG4gIElubGluZVByb2ZpbGVEYXRhQ29tcG9uZW50LFxuICBMb2FkZXJDb21wb25lbnQsXG4gIFVzZXJMb2dvTmFtaW5nLFxufSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IENBTV9BVVRIX1RPS0VOIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFRhVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBTd2l0Y2hMYW5ndWFnZUNvbXBvbmVudCB9IGZyb20gJy4uL3N3aXRjaC1sYW5ndWFnZS9zd2l0Y2gtbGFuZ3VhZ2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtbXktYWNjb3VudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1hY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdJZixcbiAgICBBc3luY1BpcGUsXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlLFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBFcnJvckNvbXBvbmVudCxcbiAgICBFbXB0eUNvbXBvbmVudCxcbiAgICBJbmxpbmVQcm9maWxlRGF0YUNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBTd2l0Y2hMYW5ndWFnZUNvbXBvbmVudCxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUFjY291bnRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBpbmZvc01lbnU6IE1lbnUgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBhcHBWZXJzaW9uOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBpc0VkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIG5hdmlnYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIG5hdmlnYXRlRWRpdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2xhbmd1YWdlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBsYW5ndWFnZVRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKCdpbmZvc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgaW5mb3NUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBfYXV0aFNlcnZpY2UgPSBpbmplY3QoQ0FNX0FVVEhfVE9LRU4pO1xuXG4gIHB1YmxpYyBwcm9maWxlTWVudTogTWVudSB8IG51bGwgPSBudWxsO1xuICBwdWJsaWMgZGlzY29ubmVjdGlvbk1lbnU6IE1lbnUgfCBudWxsID0gbnVsbDtcblxuICBnZXQgY3VycmVudFVzZXIkKCkge1xuICAgIHJldHVybiB0aGlzLl91c2Vyc1NlcnZpY2UuY3VycmVudFVzZXIuZ2V0JCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdXNlcnNTZXJ2aWNlOiBUYVVzZXJzU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fZmV0Y2goKTtcbiAgfVxuXG4gIGdldCBwcm9maWxlJCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlciQucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgc2Vjb25kOiBkYXRhPy5maXJzdE5hbWUgfHwgZGF0YT8ubGFzdE5hbWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbWFpbDogZGF0YT8udXNlck5hbWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXQgdXNlckxvZ28kKCk6IE9ic2VydmFibGU8e1xuICAgIHVzZXJJbmZvOiB7XG4gICAgICBwcm9maWxlUGljdHVyZVVybD86IHN0cmluZztcbiAgICAgIG5hbWluZzogVXNlckxvZ29OYW1pbmc7XG4gICAgfTtcbiAgICBzaXplPzogVGFTaXplcztcbiAgfSB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlciQucGlwZShcbiAgICAgIG1hcCh4ID0+IHtcbiAgICAgICAgaWYgKCF4KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICBwcm9maWxlUGljdHVyZVVybDogeC5waWN0dXJlLFxuICAgICAgICAgICAgbmFtaW5nOiB7XG4gICAgICAgICAgICAgIG5hbWU6IHguZmlyc3ROYW1lIHx8ICcnLFxuICAgICAgICAgICAgICBmaXJzdE5hbWU6IHgubGFzdE5hbWUgfHwgJycsXG4gICAgICAgICAgICAgIHRyaWdyYW06IHgudHJpZ3JhbSB8fCAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiAnbGcnLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIHRoaXMucHJvZmlsZU1lbnUgPSB0aGlzLmdldFByb2ZpbGVNZW51KHRoaXMubGFuZ3VhZ2VUZW1wbGF0ZSwgdGhpcy5pbmZvc1RlbXBsYXRlKTtcbiAgICB0aGlzLmRpc2Nvbm5lY3Rpb25NZW51ID0gdGhpcy5nZXREaXNjb25uZWN0aW9uTWVudSgpO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9Qcm9maWxlKCkge1xuICAgIHRoaXMubmF2aWdhdGVFdmVudC5lbWl0KCk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdCgpIHtcbiAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKS50aGVuKCgpID0+IGxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQcm9maWxlTWVudShsYW5ndWFnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBpbmZvc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgY29uc3QgbWVudSA9IFtcbiAgICAgIG5ldyBNZW51UGFuZWwoe1xuICAgICAgICBrZXk6ICdsYW5ndWFnZScsXG4gICAgICAgIGxhYmVsOiAndXNlci5sYW5ndWFnZScsXG4gICAgICAgIG9yZGVyOiAyLFxuICAgICAgICB0ZW1wbGF0ZTogbGFuZ3VhZ2VUZW1wbGF0ZSxcbiAgICAgICAgc3R5bGU6ICdkYXJrJyxcbiAgICAgICAgaWNvbjogJ2xhbmd1YWdlJyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICAgIGVuZGluZ0ljb246ICdhcnJvdy1iaWctcmlnaHQnLFxuICAgICAgfSksXG4gICAgICBuZXcgTWVudVBhbmVsKHtcbiAgICAgICAga2V5OiAnaW5mb3MnLFxuICAgICAgICBsYWJlbDogJ3VzZXIuaW5mb3MnLFxuICAgICAgICBvcmRlcjogMyxcbiAgICAgICAgdGVtcGxhdGU6IGluZm9zVGVtcGxhdGUsXG4gICAgICAgIHN0eWxlOiAnZGFyaycsXG4gICAgICAgIGljb246ICdpbmZvcycsXG4gICAgICAgIGljb25zQ29sb3I6ICdpY29uLWNvbG9yLWljb24tdGVydGlhcnknLFxuICAgICAgICBlbmRpbmdJY29uOiAnYXJyb3ctYmlnLXJpZ2h0JyxcbiAgICAgIH0pLFxuICAgICAgbmV3IE1lbnVJY29uKHtcbiAgICAgICAga2V5OiAncGFyYW1zJyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLnBhcmFtcycsXG4gICAgICAgIG9yZGVyOiA0LFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgc3R5bGU6ICdkYXJrJyxcbiAgICAgICAgaWNvbjogJ2xhYmVsJyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICB9KSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIG5ldyBNZW51KHtcbiAgICAgIGVsZW1lbnRzOiBtZW51LnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKSxcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREaXNjb25uZWN0aW9uTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gW1xuICAgICAgbmV3IE1lbnVJY29uKHtcbiAgICAgICAga2V5OiAnbG9nb3V0JyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLmxvZ291dCcsXG4gICAgICAgIG9yZGVyOiA0LFxuICAgICAgICBzdHlsZTogJ2RhcmsnLFxuICAgICAgICBpY29uOiAnbG9nLW91dCcsXG4gICAgICAgIGljb25zQ29sb3I6ICdpY29uLWNvbG9yLWljb24tdGVydGlhcnknLFxuICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5kaXNjb25uZWN0KCksXG4gICAgICB9KSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIG5ldyBNZW51KHtcbiAgICAgIGVsZW1lbnRzOiBtZW51LnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKSxcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvRWRpdFByb2ZpbGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZUVkaXRFdmVudC5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIF9mZXRjaCgpIHtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuICAgIHRoaXMuX3VzZXJzU2VydmljZS5mZXRjaEN1cnJlbnRVc2VyJCgpLnN1YnNjcmliZSh7XG4gICAgICBjb21wbGV0ZTogKCkgPT4gdGhpcy5yZXF1ZXN0U3RhdGUuY29tcGxldGVkKCksXG4gICAgICBlcnJvcjogKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnJlcXVlc3RTdGF0ZS5vbkVycm9yKGVycm9yLnN0YXR1cywgZXJyb3Iuc3RhdHVzVGV4dCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibXgtc3BhY2Utc21cIiBhcHBTdG9wUHJvcGFnYXRpb24+XG4gIDx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLnJlcXVlc3RTdGF0ZS5pc0xvYWRpbmcoKVwiICpuZ0xldD1cInRoaXMucHJvZmlsZSQgfCBhc3luYyBhcyBwcm9maWxlXCI+XG4gICAgPHRhLWVycm9yIFttZXNzYWdlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yTWVzc2FnZSgpXCIgW2NvZGVdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JTdGF0dXMoKVwiPlxuICAgICAgPHRhLWVtcHR5IFtpc0VtcHR5XT1cIiFwcm9maWxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJiZHAtYiBjb2xvci1ib3JkZXItcHJpbWFyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC1zcGFjZS14cyBtLXhzXCI+XG4gICAgICAgICAgICA8dGEtaW5saW5lLXByb2ZpbGUtZGF0YVxuICAgICAgICAgICAgICBbcHJvZmlsZV09XCJwcm9maWxlID8/IHt9XCJcbiAgICAgICAgICAgICAgW3VzZXJMb2dvXT1cInRoaXMudXNlckxvZ28kIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwidGhpcy5uYXZpZ2F0ZVRvUHJvZmlsZSgpXCJcbiAgICAgICAgICAgID48L3RhLWlubGluZS1wcm9maWxlLWRhdGE+XG4gICAgICAgICAgICBAaWYgKHRoaXMuaXNFZGl0YWJsZSkge1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc3BhY2UtbWRcIj5cbiAgICAgICAgICAgICAgICA8dGEtYnV0dG9uIChhY3Rpb24pPVwidGhpcy5uYXZpZ2F0ZVRvRWRpdFByb2ZpbGUoKVwiIFtzdHlsZV09XCInc2Vjb25kYXJ5J1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsaWduLWNlbnRlciBidXR0b24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJtb2RpZnlcIiBjbGFzcz1cIm1yLXNwYWNlLXhzIG1vZGlmeS1pY29uXCI+PC90YS1mb250LWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgJ3VzZXIubW9kaWZ5JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGEtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RhLWVtcHR5PlxuICAgIDwvdGEtZXJyb3I+XG4gIDwvdGEtbG9hZGVyPlxuXG4gIEBpZiAodGhpcy5wcm9maWxlTWVudSkge1xuICAgIDxkaXYgY2xhc3M9XCJiZHAtYiBjb2xvci1ib3JkZXItcHJpbWFyeSBwdC1zcGFjZS14c1wiPlxuICAgICAgPHRhLW1lbnUgW21lbnVdPVwidGhpcy5wcm9maWxlTWVudVwiIFtzdHlsZV09XCInZGFyaydcIj48L3RhLW1lbnU+XG4gICAgPC9kaXY+XG4gIH1cblxuICBAaWYgKHRoaXMuZGlzY29ubmVjdGlvbk1lbnUpIHtcbiAgICA8ZGl2IGNsYXNzPVwiYmRwLWIgcHQtc3BhY2UteHNcIj5cbiAgICAgIDx0YS1tZW51IFttZW51XT1cInRoaXMuZGlzY29ubmVjdGlvbk1lbnVcIiBbc3R5bGVdPVwiJ2RhcmsnXCI+PC90YS1tZW51PlxuICAgIDwvZGl2PlxuICB9XG4gIDxkaXYgY2xhc3M9XCJ0YS1jXCI+XG4gICAgPHNtYWxsPnt7IHRoaXMuYXBwVmVyc2lvbiB9fTwvc21hbGw+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjbGFuZ3VhZ2VUZW1wbGF0ZT5cbiAgPHRhLXN3aXRjaC1sYW5ndWFnZT48L3RhLXN3aXRjaC1sYW5ndWFnZT5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjaW5mb3NUZW1wbGF0ZT5cbiAgQGlmICh0aGlzLmluZm9zTWVudSkge1xuICAgIDxkaXYgY2xhc3M9XCJteC1zcGFjZS1zbSBpbmZvLXBhbmVsXCI+XG4gICAgICA8dGEtbWVudSBbbWVudV09XCJ0aGlzLmluZm9zTWVudVwiIFtzdHlsZV09XCInZGFyaydcIj48L3RhLW1lbnU+XG4gICAgPC9kaXY+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG4iXX0=