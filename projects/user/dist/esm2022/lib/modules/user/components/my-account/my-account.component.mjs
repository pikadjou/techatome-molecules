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
        this.userLogo$ = signal(this._userService.userProfile.get$().pipe(map((up) => {
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
        return this._userService.userProfile.get$().pipe(map((data) => {
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
                icon: 'logout',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBYyxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxRQUFRLENBQUM7QUFDeEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBcUI5RCxNQUFNLE9B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QkFBa0IsaVJDcEMvQiw4ckRBMkNBLDJURHBCSSxTQUFTLDhDQUNULGlCQUFpQixtRkFDakIsd0JBQXdCLHdHQUN4QixlQUFlLHlHQUNmLGNBQWMsa0ZBQ2QsY0FBYyx3SUFDZCxlQUFlLDhKQUNmLGFBQWEsOEVBQ2IsYUFBYSxrREFDYiwwQkFBMEI7OzRGQUlqQixrQkFBa0I7a0JBbkI5QixTQUFTOytCQUNFLGVBQWUsY0FHYixJQUFJLFdBQ1A7d0JBQ1AsU0FBUzt3QkFDVCxpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsMEJBQTBCO3dCQUMxQix3QkFBd0I7cUJBQ3pCO3dEQUlELFdBQVc7c0JBRFYsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosTUFBTTtnQkFJUCxpQkFBaUI7c0JBRGhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgaW5qZWN0LCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IE1lbnUsIE1lbnVDb21wb25lbnQsIE1lbnVJY29uIH0gZnJvbSAnQHRhL21lbnUnO1xuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gJ0B0YS9zdHlsZXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQsIEVtcHR5Q29tcG9uZW50LCBFcnJvckNvbXBvbmVudCwgTG9hZGVyQ29tcG9uZW50LCBVc2VyTG9nb0RhdGEgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgSW5saW5lUHJvZmlsZURhdGFDb21wb25lbnQgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgU3RvcFByb3BhZ2F0aW9uRGlyZWN0aXZlIH0gZnJvbSAnQHRhL3V0aWxzJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRBX0FVVEhfVE9LRU4gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVEFfVVNFUl9TRVJWSUNFIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtbXktYWNjb3VudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1hY2NvdW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQXN5bmNQaXBlLFxuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBJbmxpbmVQcm9maWxlRGF0YUNvbXBvbmVudCxcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE15QWNjb3VudENvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHByb2ZpbGVNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgYXBwVmVyc2lvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgaXNFZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF91c2VyU2VydmljZSA9IGluamVjdChUQV9VU0VSX1NFUlZJQ0UpO1xuICBwcml2YXRlIF9hdXRoU2VydmljZSA9IGluamVjdChUQV9BVVRIX1RPS0VOKTtcblxuICBwdWJsaWMgZGlzY29ubmVjdGlvbk1lbnUgPSBzaWduYWw8TWVudSB8IG51bGw+KG51bGwpO1xuICBwdWJsaWMgdXNlckxvZ28kID0gc2lnbmFsPFxuICAgIE9ic2VydmFibGU8e1xuICAgICAgdXNlcjogVXNlckxvZ29EYXRhO1xuICAgICAgc2l6ZT86IFRhU2l6ZXM7XG4gICAgfSB8IG51bGw+XG4gID4oXG4gICAgdGhpcy5fdXNlclNlcnZpY2UudXNlclByb2ZpbGUuZ2V0JCgpLnBpcGUoXG4gICAgICBtYXAoKHVwKSA9PiB7XG4gICAgICAgIGlmICghdXApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgcGljdHVyZTogdXAucGljdHVyZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1cC5sYXN0bmFtZSA/PyAnJyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogdXAuZmlyc3RuYW1lID8/ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICksXG4gICk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgcHJvZmlsZSQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJTZXJ2aWNlLnVzZXJQcm9maWxlLmdldCQoKS5waXBlKFxuICAgICAgbWFwKChkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHNlY29uZDogZGF0YT8uZmlyc3RuYW1lIHx8IGRhdGE/Lmxhc3RuYW1lLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW1haWw6IGRhdGE/LmVtYWlsIHx8ICcnLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzY29ubmVjdGlvbk1lbnUuc2V0KHRoaXMuZ2V0RGlzY29ubmVjdGlvbk1lbnUoKSk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb1Byb2ZpbGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZUV2ZW50LmVtaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0KCkge1xuICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpLnRoZW4oKCkgPT4gbG9jYXRpb24ucmVsb2FkKCkpO1xuICB9XG5cbiAgcHVibGljIGdldERpc2Nvbm5lY3Rpb25NZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBbXG4gICAgICBuZXcgTWVudUljb24oe1xuICAgICAgICBrZXk6ICdsb2dvdXQnLFxuICAgICAgICBsYWJlbDogJ3VzZXIubG9nb3V0JyxcbiAgICAgICAgb3JkZXI6IDQsXG4gICAgICAgIHN0eWxlOiAnZGFyaycsXG4gICAgICAgIGljb246ICdsb2dvdXQnLFxuICAgICAgICBpY29uc0NvbG9yOiAnaWNvbi1jb2xvci1pY29uLXRlcnRpYXJ5JyxcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuZGlzY29ubmVjdCgpLFxuICAgICAgfSksXG4gICAgXTtcblxuICAgIHJldHVybiBuZXcgTWVudSh7XG4gICAgICBlbGVtZW50czogbWVudS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlciksXG4gICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmF2aWdhdGVUb0VkaXRQcm9maWxlKCkge1xuICAgIHRoaXMubmF2aWdhdGVFZGl0RXZlbnQuZW1pdCgpO1xuICB9XG59XG4iLCJAbGV0IHByb2ZpbGUgPSB0aGlzLnByb2ZpbGUkIHwgYXN5bmM7XG48ZGl2IGNsYXNzPVwibXgtc3BhY2Utc21cIiBhcHBTdG9wUHJvcGFnYXRpb24+XG4gIDx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLnJlcXVlc3RTdGF0ZS5pc0xvYWRpbmcoKVwiPlxuICAgIDx0YS1lcnJvciBbbWVzc2FnZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvck1lc3NhZ2UoKVwiIFtjb2RlXT1cInRoaXMucmVxdWVzdFN0YXRlLmdldEVycm9yU3RhdHVzKClcIj5cbiAgICAgIDx0YS1lbXB0eSBbaXNFbXB0eV09XCIhcHJvZmlsZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXNwYWNlLXNtIGJkcC1iIGNvbG9yLWJvcmRlci1wcmltYXJ5XCI+XG4gICAgICAgICAgICA8dGEtaW5saW5lLXByb2ZpbGUtZGF0YVxuICAgICAgICAgICAgICBbcHJvZmlsZV09XCJwcm9maWxlID8/IHt9XCJcbiAgICAgICAgICAgICAgW3VzZXJMb2dvXT1cInRoaXMudXNlckxvZ28kKCkgfCBhc3luY1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLm5hdmlnYXRlVG9Qcm9maWxlKClcIlxuICAgICAgICAgICAgPjwvdGEtaW5saW5lLXByb2ZpbGUtZGF0YT5cbiAgICAgICAgICAgIEBpZiAodGhpcy5pc0VkaXRhYmxlKSB7XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1zcGFjZS1tZFwiPlxuICAgICAgICAgICAgICAgIDx0YS1idXR0b24gKGFjdGlvbik9XCJ0aGlzLm5hdmlnYXRlVG9FZGl0UHJvZmlsZSgpXCIgW3N0eWxlXT1cIidzZWNvbmRhcnknXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxpZ24tY2VudGVyIGJ1dHRvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cIm1vZGlmeVwiIGNsYXNzPVwibXItc3BhY2UteHMgbW9kaWZ5LWljb25cIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyAndXNlci5tb2RpZnknIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90YS1idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC90YS1lbXB0eT5cbiAgICA8L3RhLWVycm9yPlxuICA8L3RhLWxvYWRlcj5cbiAgQGlmICh0aGlzLnByb2ZpbGVNZW51KSB7XG4gICAgPGRpdiBjbGFzcz1cImJkcC1iIGNvbG9yLWJvcmRlci1wcmltYXJ5IHB0LXNwYWNlLXhzXCI+XG4gICAgICA8dGEtbWVudSBbbWVudV09XCJ0aGlzLnByb2ZpbGVNZW51XCIgW3N0eWxlXT1cIidkYXJrJ1wiIFtjb250YWluZXJdPVwiJ292ZXJmbG93J1wiPjwvdGEtbWVudT5cbiAgICA8L2Rpdj5cbiAgfVxuQGxldCBkaXNjb25uZWN0aW9uTWVudSA9IHRoaXMuZGlzY29ubmVjdGlvbk1lbnUoKTtcbiAgQGlmIChkaXNjb25uZWN0aW9uTWVudSkge1xuICAgIDxkaXYgY2xhc3M9XCJiZHAtYiBwdC1zcGFjZS14c1wiPlxuICAgICAgPHRhLW1lbnUgW21lbnVdPVwiZGlzY29ubmVjdGlvbk1lbnVcIiBbc3R5bGVdPVwiJ2RhcmsnXCI+PC90YS1tZW51PlxuICAgIDwvZGl2PlxuICB9XG4gIDxkaXYgY2xhc3M9XCJ0YS1jXCI+XG4gICAgPHNtYWxsPnt7IHRoaXMuYXBwVmVyc2lvbiB9fTwvc21hbGw+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==