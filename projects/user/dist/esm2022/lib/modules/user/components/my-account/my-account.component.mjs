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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, deps: [{ token: i1.CamUsersService }], target: i0.ɵɵFactoryTarget.Component }); }
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
        }], ctorParameters: () => [{ type: i1.CamUsersService }], propDecorators: { infosMenu: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RyxPQUFPLEVBQWMsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFDZCxjQUFjLEVBQ2QsMEJBQTBCLEVBQzFCLGVBQWUsR0FFaEIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7QUFzQnZGLE1BQU0sT0FBTyxrQkFB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WixNQUFNO2dCQUlQLGlCQUFpQjtzQkFEaEIsTUFBTTtnQkFJUCxnQkFBZ0I7c0JBRGYsU0FBUzt1QkFBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBSS9DLGFBQWE7c0JBRFosU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN5bmNQaXBlLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtYXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgTWVudSwgTWVudUNvbXBvbmVudCwgTWVudUljb24sIE1lbnVQYW5lbCB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IFRhU2l6ZXMgfSBmcm9tICdAdGEvc3R5bGVzJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHtcbiAgQnV0dG9uQ29tcG9uZW50LFxuICBFbXB0eUNvbXBvbmVudCxcbiAgRXJyb3JDb21wb25lbnQsXG4gIElubGluZVByb2ZpbGVEYXRhQ29tcG9uZW50LFxuICBMb2FkZXJDb21wb25lbnQsXG4gIFVzZXJMb2dvTmFtaW5nLFxufSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IENBTV9BVVRIX1RPS0VOIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhbVVzZXJzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3dpdGNoTGFuZ3VhZ2VDb21wb25lbnQgfSBmcm9tICcuLi9zd2l0Y2gtbGFuZ3VhZ2Uvc3dpdGNoLWxhbmd1YWdlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLW15LWFjY291bnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL215LWFjY291bnQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgQXN5bmNQaXBlLFxuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgSW5saW5lUHJvZmlsZURhdGFDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgU3dpdGNoTGFuZ3VhZ2VDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTXlBY2NvdW50Q29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgaW5mb3NNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgYXBwVmVyc2lvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgaXNFZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdsYW5ndWFnZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgbGFuZ3VhZ2VUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQFZpZXdDaGlsZCgnaW5mb3NUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGluZm9zVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHByaXZhdGUgX2F1dGhTZXJ2aWNlID0gaW5qZWN0KENBTV9BVVRIX1RPS0VOKTtcblxuICBwdWJsaWMgcHJvZmlsZU1lbnU6IE1lbnUgfCBudWxsID0gbnVsbDtcbiAgcHVibGljIGRpc2Nvbm5lY3Rpb25NZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgZ2V0IGN1cnJlbnRVc2VyJCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlcnNTZXJ2aWNlLmN1cnJlbnRVc2VyLmdldCQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VzZXJzU2VydmljZTogQ2FtVXNlcnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9mZXRjaCgpO1xuICB9XG5cbiAgZ2V0IHByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBzZWNvbmQ6IGRhdGE/LmZpcnN0TmFtZSB8fCBkYXRhPy5sYXN0TmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVtYWlsOiBkYXRhPy51c2VyTmFtZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldCB1c2VyTG9nbyQoKTogT2JzZXJ2YWJsZTx7XG4gICAgdXNlckluZm86IHtcbiAgICAgIHByb2ZpbGVQaWN0dXJlVXJsPzogc3RyaW5nO1xuICAgICAgbmFtaW5nOiBVc2VyTG9nb05hbWluZztcbiAgICB9O1xuICAgIHNpemU/OiBUYVNpemVzO1xuICB9IHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyJC5waXBlKFxuICAgICAgbWFwKHggPT4ge1xuICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgIHByb2ZpbGVQaWN0dXJlVXJsOiB4LnBpY3R1cmUsXG4gICAgICAgICAgICBuYW1pbmc6IHtcbiAgICAgICAgICAgICAgbmFtZTogeC5maXJzdE5hbWUgfHwgJycsXG4gICAgICAgICAgICAgIGZpcnN0TmFtZTogeC5sYXN0TmFtZSB8fCAnJyxcbiAgICAgICAgICAgICAgdHJpZ3JhbTogeC50cmlncmFtIHx8ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgdGhpcy5wcm9maWxlTWVudSA9IHRoaXMuZ2V0UHJvZmlsZU1lbnUodGhpcy5sYW5ndWFnZVRlbXBsYXRlLCB0aGlzLmluZm9zVGVtcGxhdGUpO1xuICAgIHRoaXMuZGlzY29ubmVjdGlvbk1lbnUgPSB0aGlzLmdldERpc2Nvbm5lY3Rpb25NZW51KCk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb1Byb2ZpbGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZUV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpLnRoZW4oKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuICB9XG5cbiAgcHVibGljIGdldFByb2ZpbGVNZW51KGxhbmd1YWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIGluZm9zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBjb25zdCBtZW51ID0gW1xuICAgICAgbmV3IE1lbnVQYW5lbCh7XG4gICAgICAgIGtleTogJ2xhbmd1YWdlJyxcbiAgICAgICAgbGFiZWw6ICd1c2VyLmxhbmd1YWdlJyxcbiAgICAgICAgb3JkZXI6IDIsXG4gICAgICAgIHRlbXBsYXRlOiBsYW5ndWFnZVRlbXBsYXRlLFxuICAgICAgICBzdHlsZTogJ2RhcmsnLFxuICAgICAgICBpY29uOiAnbGFuZ3VhZ2UnLFxuICAgICAgICBpY29uc0NvbG9yOiAnaWNvbi1jb2xvci1pY29uLXRlcnRpYXJ5JyxcbiAgICAgICAgZW5kaW5nSWNvbjogJ2Fycm93LWJpZy1yaWdodCcsXG4gICAgICB9KSxcbiAgICAgIG5ldyBNZW51UGFuZWwoe1xuICAgICAgICBrZXk6ICdpbmZvcycsXG4gICAgICAgIGxhYmVsOiAndXNlci5pbmZvcycsXG4gICAgICAgIG9yZGVyOiAzLFxuICAgICAgICB0ZW1wbGF0ZTogaW5mb3NUZW1wbGF0ZSxcbiAgICAgICAgc3R5bGU6ICdkYXJrJyxcbiAgICAgICAgaWNvbjogJ2luZm9zJyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICAgIGVuZGluZ0ljb246ICdhcnJvdy1iaWctcmlnaHQnLFxuICAgICAgfSksXG4gICAgICBuZXcgTWVudUljb24oe1xuICAgICAgICBrZXk6ICdwYXJhbXMnLFxuICAgICAgICBsYWJlbDogJ3VzZXIucGFyYW1zJyxcbiAgICAgICAgb3JkZXI6IDQsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBzdHlsZTogJ2RhcmsnLFxuICAgICAgICBpY29uOiAnbGFiZWwnLFxuICAgICAgICBpY29uc0NvbG9yOiAnaWNvbi1jb2xvci1pY29uLXRlcnRpYXJ5JyxcbiAgICAgIH0pLFxuICAgIF07XG5cbiAgICByZXR1cm4gbmV3IE1lbnUoe1xuICAgICAgZWxlbWVudHM6IG1lbnUuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLFxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldERpc2Nvbm5lY3Rpb25NZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBbXG4gICAgICBuZXcgTWVudUljb24oe1xuICAgICAgICBrZXk6ICdsb2dvdXQnLFxuICAgICAgICBsYWJlbDogJ3VzZXIubG9nb3V0JyxcbiAgICAgICAgb3JkZXI6IDQsXG4gICAgICAgIHN0eWxlOiAnZGFyaycsXG4gICAgICAgIGljb246ICdsb2ctb3V0JyxcbiAgICAgICAgaWNvbnNDb2xvcjogJ2ljb24tY29sb3ItaWNvbi10ZXJ0aWFyeScsXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmRpc2Nvbm5lY3QoKSxcbiAgICAgIH0pLFxuICAgIF07XG5cbiAgICByZXR1cm4gbmV3IE1lbnUoe1xuICAgICAgZWxlbWVudHM6IG1lbnUuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpLFxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5hdmlnYXRlVG9FZGl0UHJvZmlsZSgpIHtcbiAgICB0aGlzLm5hdmlnYXRlRWRpdEV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZldGNoKCkge1xuICAgIHRoaXMucmVxdWVzdFN0YXRlLmFza2VkKCk7XG4gICAgdGhpcy5fdXNlcnNTZXJ2aWNlLmZldGNoQ3VycmVudFVzZXIkKCkuc3Vic2NyaWJlKHtcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB0aGlzLnJlcXVlc3RTdGF0ZS5jb21wbGV0ZWQoKSxcbiAgICAgIGVycm9yOiAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMucmVxdWVzdFN0YXRlLm9uRXJyb3IoZXJyb3Iuc3RhdHVzLCBlcnJvci5zdGF0dXNUZXh0KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJteC1zcGFjZS1zbVwiIGFwcFN0b3BQcm9wYWdhdGlvbj5cbiAgPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCIgKm5nTGV0PVwidGhpcy5wcm9maWxlJCB8IGFzeW5jIGFzIHByb2ZpbGVcIj5cbiAgICA8dGEtZXJyb3IgW21lc3NhZ2VdPVwidGhpcy5yZXF1ZXN0U3RhdGUuZ2V0RXJyb3JNZXNzYWdlKClcIiBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCI+XG4gICAgICA8dGEtZW1wdHkgW2lzRW1wdHldPVwiIXByb2ZpbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJkcC1iIGNvbG9yLWJvcmRlci1wcmltYXJ5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInB0LXNwYWNlLXhzIG0teHNcIj5cbiAgICAgICAgICAgIDx0YS1pbmxpbmUtcHJvZmlsZS1kYXRhXG4gICAgICAgICAgICAgIFtwcm9maWxlXT1cInByb2ZpbGUgPz8ge31cIlxuICAgICAgICAgICAgICBbdXNlckxvZ29dPVwidGhpcy51c2VyTG9nbyQgfCBhc3luY1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLm5hdmlnYXRlVG9Qcm9maWxlKClcIlxuICAgICAgICAgICAgPjwvdGEtaW5saW5lLXByb2ZpbGUtZGF0YT5cbiAgICAgICAgICAgIEBpZiAodGhpcy5pc0VkaXRhYmxlKSB7XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1zcGFjZS1tZFwiPlxuICAgICAgICAgICAgICAgIDx0YS1idXR0b24gKGFjdGlvbik9XCJ0aGlzLm5hdmlnYXRlVG9FZGl0UHJvZmlsZSgpXCIgW3N0eWxlXT1cIidzZWNvbmRhcnknXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIGJ1dHRvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cIm1vZGlmeVwiIGNsYXNzPVwibXItc3BhY2UteHMgbW9kaWZ5LWljb25cIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyAndXNlci5tb2RpZnknIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90YS1idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGEtZW1wdHk+XG4gICAgPC90YS1lcnJvcj5cbiAgPC90YS1sb2FkZXI+XG5cbiAgQGlmICh0aGlzLnByb2ZpbGVNZW51KSB7XG4gICAgPGRpdiBjbGFzcz1cImJkcC1iIGNvbG9yLWJvcmRlci1wcmltYXJ5IHB0LXNwYWNlLXhzXCI+XG4gICAgICA8dGEtbWVudSBbbWVudV09XCJ0aGlzLnByb2ZpbGVNZW51XCIgW3N0eWxlXT1cIidkYXJrJ1wiPjwvdGEtbWVudT5cbiAgICA8L2Rpdj5cbiAgfVxuXG4gIEBpZiAodGhpcy5kaXNjb25uZWN0aW9uTWVudSkge1xuICAgIDxkaXYgY2xhc3M9XCJiZHAtYiBwdC1zcGFjZS14c1wiPlxuICAgICAgPHRhLW1lbnUgW21lbnVdPVwidGhpcy5kaXNjb25uZWN0aW9uTWVudVwiIFtzdHlsZV09XCInZGFyaydcIj48L3RhLW1lbnU+XG4gICAgPC9kaXY+XG4gIH1cbiAgPGRpdiBjbGFzcz1cInRhLWNcIj5cbiAgICA8c21hbGw+e3sgdGhpcy5hcHBWZXJzaW9uIH19PC9zbWFsbD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNsYW5ndWFnZVRlbXBsYXRlPlxuICA8dGEtc3dpdGNoLWxhbmd1YWdlPjwvdGEtc3dpdGNoLWxhbmd1YWdlPlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNpbmZvc1RlbXBsYXRlPlxuICBAaWYgKHRoaXMuaW5mb3NNZW51KSB7XG4gICAgPGRpdiBjbGFzcz1cIm14LXNwYWNlLXNtIGluZm8tcGFuZWxcIj5cbiAgICAgIDx0YS1tZW51IFttZW51XT1cInRoaXMuaW5mb3NNZW51XCIgW3N0eWxlXT1cIidkYXJrJ1wiPjwvdGEtbWVudT5cbiAgICA8L2Rpdj5cbiAgfVxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==