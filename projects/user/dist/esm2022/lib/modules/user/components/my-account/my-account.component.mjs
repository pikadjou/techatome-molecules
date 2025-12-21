import { AsyncPipe } from "@angular/common";
import { Component, EventEmitter, Input, Output, inject, signal, } from "@angular/core";
import { map } from "rxjs";
import { FontIconComponent } from "@ta/icons";
import { Menu, MenuComponent, MenuIcon } from "@ta/menu";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent, EmptyComponent, ErrorComponent, LoaderComponent, } from "@ta/ui";
import { InlineProfileDataComponent } from "@ta/ui";
import { StopPropagationDirective } from "@ta/utils";
import { TaBaseComponent } from "@ta/utils";
import { TA_AUTH_TOKEN } from "../../services/auth.service";
import { TA_USER_SERVICE } from "../../services/user.service";
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
                    lastname: up.lastname ?? "",
                    firstname: up.firstname ?? "",
                },
                size: "lg",
            };
        })));
    }
    get profile$() {
        return this._userService.userProfile.get$().pipe(map((data) => {
            return {
                title: {
                    second: data?.firstname || data?.lastname,
                },
                email: data?.email || "",
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
                key: "logout",
                label: "user.logout",
                order: 4,
                style: "dark",
                icon: "logout",
                iconsColor: "icon-color-icon-tertiary",
                callback: () => this.disconnect(),
            }),
        ];
        return new Menu({
            elements: menu.sort((a, b) => a.order - b.order),
            direction: "vertical",
        });
    }
    navigateToEditProfile() {
        this.navigateEditEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MyAccountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MyAccountComponent, isStandalone: true, selector: "ta-my-account", inputs: { profileMenu: "profileMenu", appVersion: "appVersion", isEditable: "isEditable" }, outputs: { navigateEvent: "navigateEvent", navigateEditEvent: "navigateEditEvent" }, usesInheritance: true, ngImport: i0, template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error\n      [message]=\"this.requestState.getErrorMessage()\"\n      [code]=\"this.requestState.getErrorStatus()\"\n    >\n      <ta-empty [isEmpty]=\"!profile\">\n        <div class=\"p-space-sm bdp-b color-border-primary\">\n          <ta-inline-profile-data\n            [profile]=\"profile ?? {}\"\n            [userLogo]=\"this.userLogo$() | async\"\n            (click)=\"this.navigateToProfile()\"\n          ></ta-inline-profile-data>\n          @if (this.isEditable) {\n          <div class=\"my-space-md\">\n            <ta-button\n              (action)=\"this.navigateToEditProfile()\"\n              [style]=\"'secondary'\"\n            >\n              <div class=\"align-center button-content\">\n                <ta-font-icon\n                  name=\"modify\"\n                  class=\"mr-space-xs modify-icon\"\n                ></ta-font-icon>\n                <div class=\"text\">\n                  {{ \"user.modify\" | translate }}\n                </div>\n              </div>\n            </ta-button>\n          </div>\n          }\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n  @if (this.profileMenu) {\n  <div class=\"bdp-b color-border-primary pt-space-xs\">\n    <ta-menu\n      [menu]=\"this.profileMenu\"\n      [style]=\"'dark'\"\n      [container]=\"'overflow'\"\n    ></ta-menu>\n  </div>\n  } @let disconnectionMenu = this.disconnectionMenu(); @if (disconnectionMenu) {\n  <div class=\"bdp-b pt-space-xs\">\n    <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n  </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: MenuComponent, selector: "ta-menu", inputs: ["menu", "container"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InlineProfileDataComponent, selector: "ta-inline-profile-data", inputs: ["profile", "userLogo"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MyAccountComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-my-account", standalone: true, imports: [
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
                    ], template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error\n      [message]=\"this.requestState.getErrorMessage()\"\n      [code]=\"this.requestState.getErrorStatus()\"\n    >\n      <ta-empty [isEmpty]=\"!profile\">\n        <div class=\"p-space-sm bdp-b color-border-primary\">\n          <ta-inline-profile-data\n            [profile]=\"profile ?? {}\"\n            [userLogo]=\"this.userLogo$() | async\"\n            (click)=\"this.navigateToProfile()\"\n          ></ta-inline-profile-data>\n          @if (this.isEditable) {\n          <div class=\"my-space-md\">\n            <ta-button\n              (action)=\"this.navigateToEditProfile()\"\n              [style]=\"'secondary'\"\n            >\n              <div class=\"align-center button-content\">\n                <ta-font-icon\n                  name=\"modify\"\n                  class=\"mr-space-xs modify-icon\"\n                ></ta-font-icon>\n                <div class=\"text\">\n                  {{ \"user.modify\" | translate }}\n                </div>\n              </div>\n            </ta-button>\n          </div>\n          }\n        </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n  @if (this.profileMenu) {\n  <div class=\"bdp-b color-border-primary pt-space-xs\">\n    <ta-menu\n      [menu]=\"this.profileMenu\"\n      [style]=\"'dark'\"\n      [container]=\"'overflow'\"\n    ></ta-menu>\n  </div>\n  } @let disconnectionMenu = this.disconnectionMenu(); @if (disconnectionMenu) {\n  <div class=\"bdp-b pt-space-xs\">\n    <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n  </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYyxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGVBQWUsRUFDZixjQUFjLEVBQ2QsY0FBYyxFQUNkLGVBQWUsR0FFaEIsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBcUI5RCxNQUFNLE9B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QkFBa0IsaVJDbEQvQix1d0RBcURBLDJRRGhCSSxTQUFTLDhDQUNULGlCQUFpQixtRkFDakIsd0JBQXdCLHdHQUN4QixlQUFlLHlHQUNmLGNBQWMsa0ZBQ2QsY0FBYyx3SUFDZCxlQUFlLDhKQUNmLGFBQWEsOEVBQ2IsYUFBYSxrREFDYiwwQkFBMEI7OzRGQUlqQixrQkFBa0I7a0JBbkI5QixTQUFTOytCQUNFLGVBQWUsY0FHYixJQUFJLFdBQ1A7d0JBQ1AsU0FBUzt3QkFDVCxpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsMEJBQTBCO3dCQUMxQix3QkFBd0I7cUJBQ3pCO3dEQUlELFdBQVc7c0JBRFYsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLGFBQWE7c0JBRFosTUFBTTtnQkFJUCxpQkFBaUI7c0JBRGhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBpbmplY3QsXG4gIHNpZ25hbCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWFwIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBNZW51LCBNZW51Q29tcG9uZW50LCBNZW51SWNvbiB9IGZyb20gXCJAdGEvbWVudVwiO1xuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gXCJAdGEvc3R5bGVzXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIkB0YS90cmFuc2xhdGlvblwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uQ29tcG9uZW50LFxuICBFbXB0eUNvbXBvbmVudCxcbiAgRXJyb3JDb21wb25lbnQsXG4gIExvYWRlckNvbXBvbmVudCxcbiAgVXNlckxvZ29EYXRhLFxufSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBJbmxpbmVQcm9maWxlRGF0YUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVEFfQVVUSF9UT0tFTiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRBX1VTRVJfU0VSVklDRSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLW15LWFjY291bnRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9teS1hY2NvdW50LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQXN5bmNQaXBlLFxuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIFN0b3BQcm9wYWdhdGlvbkRpcmVjdGl2ZSxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgRW1wdHlDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBJbmxpbmVQcm9maWxlRGF0YUNvbXBvbmVudCxcbiAgICBTdG9wUHJvcGFnYXRpb25EaXJlY3RpdmUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE15QWNjb3VudENvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHByb2ZpbGVNZW51OiBNZW51IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgYXBwVmVyc2lvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgaXNFZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKVxuICBuYXZpZ2F0ZUVkaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF91c2VyU2VydmljZSA9IGluamVjdChUQV9VU0VSX1NFUlZJQ0UpO1xuICBwcml2YXRlIF9hdXRoU2VydmljZSA9IGluamVjdChUQV9BVVRIX1RPS0VOKTtcblxuICBwdWJsaWMgZGlzY29ubmVjdGlvbk1lbnUgPSBzaWduYWw8TWVudSB8IG51bGw+KG51bGwpO1xuICBwdWJsaWMgdXNlckxvZ28kID0gc2lnbmFsPFxuICAgIE9ic2VydmFibGU8e1xuICAgICAgdXNlcjogVXNlckxvZ29EYXRhO1xuICAgICAgc2l6ZT86IFRhU2l6ZXM7XG4gICAgfSB8IG51bGw+XG4gID4oXG4gICAgdGhpcy5fdXNlclNlcnZpY2UudXNlclByb2ZpbGUuZ2V0JCgpLnBpcGUoXG4gICAgICBtYXAoKHVwKSA9PiB7XG4gICAgICAgIGlmICghdXApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgcGljdHVyZTogdXAucGljdHVyZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB1cC5sYXN0bmFtZSA/PyBcIlwiLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiB1cC5maXJzdG5hbWUgPz8gXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6IFwibGdcIixcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKVxuICApO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgZ2V0IHByb2ZpbGUkKCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyU2VydmljZS51c2VyUHJvZmlsZS5nZXQkKCkucGlwZShcbiAgICAgIG1hcCgoZGF0YSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICBzZWNvbmQ6IGRhdGE/LmZpcnN0bmFtZSB8fCBkYXRhPy5sYXN0bmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVtYWlsOiBkYXRhPy5lbWFpbCB8fCBcIlwiLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kaXNjb25uZWN0aW9uTWVudS5zZXQodGhpcy5nZXREaXNjb25uZWN0aW9uTWVudSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvUHJvZmlsZSgpIHtcbiAgICB0aGlzLm5hdmlnYXRlRXZlbnQuZW1pdCgpO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3QoKSB7XG4gICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCkudGhlbigoKSA9PiBsb2NhdGlvbi5yZWxvYWQoKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGlzY29ubmVjdGlvbk1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IFtcbiAgICAgIG5ldyBNZW51SWNvbih7XG4gICAgICAgIGtleTogXCJsb2dvdXRcIixcbiAgICAgICAgbGFiZWw6IFwidXNlci5sb2dvdXRcIixcbiAgICAgICAgb3JkZXI6IDQsXG4gICAgICAgIHN0eWxlOiBcImRhcmtcIixcbiAgICAgICAgaWNvbjogXCJsb2dvdXRcIixcbiAgICAgICAgaWNvbnNDb2xvcjogXCJpY29uLWNvbG9yLWljb24tdGVydGlhcnlcIixcbiAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuZGlzY29ubmVjdCgpLFxuICAgICAgfSksXG4gICAgXTtcblxuICAgIHJldHVybiBuZXcgTWVudSh7XG4gICAgICBlbGVtZW50czogbWVudS5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlciksXG4gICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuYXZpZ2F0ZVRvRWRpdFByb2ZpbGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0ZUVkaXRFdmVudC5lbWl0KCk7XG4gIH1cbn1cbiIsIkBsZXQgcHJvZmlsZSA9IHRoaXMucHJvZmlsZSQgfCBhc3luYztcbjxkaXYgY2xhc3M9XCJteC1zcGFjZS1zbVwiIGFwcFN0b3BQcm9wYWdhdGlvbj5cbiAgPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCI+XG4gICAgPHRhLWVycm9yXG4gICAgICBbbWVzc2FnZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvck1lc3NhZ2UoKVwiXG4gICAgICBbY29kZV09XCJ0aGlzLnJlcXVlc3RTdGF0ZS5nZXRFcnJvclN0YXR1cygpXCJcbiAgICA+XG4gICAgICA8dGEtZW1wdHkgW2lzRW1wdHldPVwiIXByb2ZpbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInAtc3BhY2Utc20gYmRwLWIgY29sb3ItYm9yZGVyLXByaW1hcnlcIj5cbiAgICAgICAgICA8dGEtaW5saW5lLXByb2ZpbGUtZGF0YVxuICAgICAgICAgICAgW3Byb2ZpbGVdPVwicHJvZmlsZSA/PyB7fVwiXG4gICAgICAgICAgICBbdXNlckxvZ29dPVwidGhpcy51c2VyTG9nbyQoKSB8IGFzeW5jXCJcbiAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLm5hdmlnYXRlVG9Qcm9maWxlKClcIlxuICAgICAgICAgID48L3RhLWlubGluZS1wcm9maWxlLWRhdGE+XG4gICAgICAgICAgQGlmICh0aGlzLmlzRWRpdGFibGUpIHtcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc3BhY2UtbWRcIj5cbiAgICAgICAgICAgIDx0YS1idXR0b25cbiAgICAgICAgICAgICAgKGFjdGlvbik9XCJ0aGlzLm5hdmlnYXRlVG9FZGl0UHJvZmlsZSgpXCJcbiAgICAgICAgICAgICAgW3N0eWxlXT1cIidzZWNvbmRhcnknXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsaWduLWNlbnRlciBidXR0b24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDx0YS1mb250LWljb25cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2RpZnlcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci1zcGFjZS14cyBtb2RpZnktaWNvblwiXG4gICAgICAgICAgICAgICAgPjwvdGEtZm9udC1pY29uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICB7eyBcInVzZXIubW9kaWZ5XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RhLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90YS1lbXB0eT5cbiAgICA8L3RhLWVycm9yPlxuICA8L3RhLWxvYWRlcj5cbiAgQGlmICh0aGlzLnByb2ZpbGVNZW51KSB7XG4gIDxkaXYgY2xhc3M9XCJiZHAtYiBjb2xvci1ib3JkZXItcHJpbWFyeSBwdC1zcGFjZS14c1wiPlxuICAgIDx0YS1tZW51XG4gICAgICBbbWVudV09XCJ0aGlzLnByb2ZpbGVNZW51XCJcbiAgICAgIFtzdHlsZV09XCInZGFyaydcIlxuICAgICAgW2NvbnRhaW5lcl09XCInb3ZlcmZsb3cnXCJcbiAgICA+PC90YS1tZW51PlxuICA8L2Rpdj5cbiAgfSBAbGV0IGRpc2Nvbm5lY3Rpb25NZW51ID0gdGhpcy5kaXNjb25uZWN0aW9uTWVudSgpOyBAaWYgKGRpc2Nvbm5lY3Rpb25NZW51KSB7XG4gIDxkaXYgY2xhc3M9XCJiZHAtYiBwdC1zcGFjZS14c1wiPlxuICAgIDx0YS1tZW51IFttZW51XT1cImRpc2Nvbm5lY3Rpb25NZW51XCIgW3N0eWxlXT1cIidkYXJrJ1wiPjwvdGEtbWVudT5cbiAgPC9kaXY+XG4gIH1cbiAgPGRpdiBjbGFzcz1cInRhLWNcIj5cbiAgICA8c21hbGw+e3sgdGhpcy5hcHBWZXJzaW9uIH19PC9zbWFsbD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==