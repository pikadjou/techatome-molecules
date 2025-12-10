import { AsyncPipe } from "@angular/common";
import { Component, Input, inject } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { TaIconType } from "@ta/icons";
import { TaMainRoute, TaRoutes } from "@ta/menu";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent } from "@ta/ui";
import { TaAbstractComponent } from "@ta/utils";
import { TaPermissionsService, } from "../../services/permissions.service";
import * as i0 from "@angular/core";
export class GuardComponent extends TaAbstractComponent {
    get noAccessIcon() {
        return TaIconType.NoAccess;
    }
    constructor() {
        super();
        this.canDisplayErrorMessage = true;
        this._permissionsService = inject(TaPermissionsService);
    }
    isGuardValid$() {
        if (this.role) {
            return this._permissionsService.hasRole$(this.role);
        }
        return this._permissionsService.canAccess$(this.feature ?? "", this.level ?? "authorize");
    }
    goToLogin() {
        this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.USERLOGIN]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GuardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: GuardComponent, isStandalone: true, selector: "ta-guard", inputs: { level: "level", feature: "feature", role: "role", canDisplayErrorMessage: "canDisplayErrorMessage" }, usesInheritance: true, ngImport: i0, template: "@let isValid = this.isGuardValid$() | async;\n\n<div class=\"guard\">\n  @if (isValid) {\n  <div class=\"guard-valid\">\n    <ng-content></ng-content>\n  </div>\n  } @if (!isValid && this.canDisplayErrorMessage) {\n  <div class=\"guard-no-valid ta-c\">\n    <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n    {{ \"user.guard.content\" | translate }}\n\n    @if (this.level === 'authenticated') {\n    <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n    }\n  </div>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GuardComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-guard", standalone: true, imports: [AsyncPipe, FontIconComponent, ButtonComponent, TranslatePipe], template: "@let isValid = this.isGuardValid$() | async;\n\n<div class=\"guard\">\n  @if (isValid) {\n  <div class=\"guard-valid\">\n    <ng-content></ng-content>\n  </div>\n  } @if (!isValid && this.canDisplayErrorMessage) {\n  <div class=\"guard-no-valid ta-c\">\n    <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n    {{ \"user.guard.content\" | translate }}\n\n    @if (this.level === 'authenticated') {\n    <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n    }\n  </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { level: [{
                type: Input
            }], feature: [{
                type: Input
            }], role: [{
                type: Input
            }], canDisplayErrorMessage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9ndWFyZC9ndWFyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL2d1YXJkL2d1YXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWhELE9BQU8sRUFFTCxvQkFBb0IsR0FDckIsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFTNUMsTUFBTSxPQUFPLGNBQWUsU0FBUSxtQkFBbUI7SUFjckQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBUlYsMkJBQXNCLEdBQVksSUFBSSxDQUFDO1FBRXRCLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBT3BFLENBQUM7SUFFTSxhQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUN4QyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7K0dBbkNVLGNBQWM7bUdBQWQsY0FBYywyTUN0QjNCLHNnQkFrQkEscURERVksU0FBUyw4Q0FBRSxpQkFBaUIsbUZBQUUsZUFBZSx5SkFBRSxhQUFhOzs0RkFFM0QsY0FBYztrQkFQMUIsU0FBUzsrQkFDRSxVQUFVLGNBR1IsSUFBSSxXQUNQLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7d0RBSXZFLEtBQUs7c0JBREosS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLHNCQUFzQjtzQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVGFJY29uVHlwZSB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhTWFpblJvdXRlLCBUYVJvdXRlcyB9IGZyb20gXCJAdGEvbWVudVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7XG4gIExldmVsLFxuICBUYVBlcm1pc3Npb25zU2VydmljZSxcbn0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3Blcm1pc3Npb25zLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWd1YXJkXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZ3VhcmQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2d1YXJkLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQXN5bmNQaXBlLCBGb250SWNvbkNvbXBvbmVudCwgQnV0dG9uQ29tcG9uZW50LCBUcmFuc2xhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgR3VhcmRDb21wb25lbnQgZXh0ZW5kcyBUYUFic3RyYWN0Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgbGV2ZWw/OiBMZXZlbDtcblxuICBASW5wdXQoKVxuICBmZWF0dXJlPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHJvbGU/OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY2FuRGlzcGxheUVycm9yTWVzc2FnZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfcGVybWlzc2lvbnNTZXJ2aWNlID0gaW5qZWN0KFRhUGVybWlzc2lvbnNTZXJ2aWNlKTtcbiAgZ2V0IG5vQWNjZXNzSWNvbigpIHtcbiAgICByZXR1cm4gVGFJY29uVHlwZS5Ob0FjY2VzcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgaXNHdWFyZFZhbGlkJCgpIHtcbiAgICBpZiAodGhpcy5yb2xlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnNTZXJ2aWNlLmhhc1JvbGUkKHRoaXMucm9sZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5jYW5BY2Nlc3MkKFxuICAgICAgdGhpcy5mZWF0dXJlID8/IFwiXCIsXG4gICAgICB0aGlzLmxldmVsID8/IFwiYXV0aG9yaXplXCJcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdvVG9Mb2dpbigpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChUYVJvdXRlcy5nZXRVcmwoW1RhTWFpblJvdXRlLlVTRVJMT0dJTl0pKTtcbiAgfVxufVxuIiwiQGxldCBpc1ZhbGlkID0gdGhpcy5pc0d1YXJkVmFsaWQkKCkgfCBhc3luYztcblxuPGRpdiBjbGFzcz1cImd1YXJkXCI+XG4gIEBpZiAoaXNWYWxpZCkge1xuICA8ZGl2IGNsYXNzPVwiZ3VhcmQtdmFsaWRcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICB9IEBpZiAoIWlzVmFsaWQgJiYgdGhpcy5jYW5EaXNwbGF5RXJyb3JNZXNzYWdlKSB7XG4gIDxkaXYgY2xhc3M9XCJndWFyZC1uby12YWxpZCB0YS1jXCI+XG4gICAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiY2xvc2UtdG9vbFwiIHNpemU9XCJtZFwiPjwvdGEtZm9udC1pY29uPlxuICAgIHt7IFwidXNlci5ndWFyZC5jb250ZW50XCIgfCB0cmFuc2xhdGUgfX1cblxuICAgIEBpZiAodGhpcy5sZXZlbCA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XG4gICAgPHRhLWJ1dHRvbiAoYWN0aW9uKT1cInRoaXMuZ29Ub0xvZ2luKClcIj4gTWUgY29ubmVjdGVyIDwvdGEtYnV0dG9uPlxuICAgIH1cbiAgPC9kaXY+XG4gIH1cbjwvZGl2PlxuIl19