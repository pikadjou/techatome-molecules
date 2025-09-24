import { AsyncPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { of } from 'rxjs';
import { FontIconComponent } from '@ta/icons';
import { TaIconType } from '@ta/icons';
import { TaMainRoute, TaRoutes } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { TaAbstractComponent } from '@ta/utils';
import { TaPermissionsService } from '../../services/permissions.service';
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
        else if (this.feature && this.level) {
            return this._permissionsService.canAccess$(this.feature, this.level);
        }
        return of(false);
    }
    goToLogin() {
        this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.USERLOGIN]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: GuardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: GuardComponent, isStandalone: true, selector: "ta-guard", inputs: { level: "level", feature: "feature", role: "role", canDisplayErrorMessage: "canDisplayErrorMessage" }, usesInheritance: true, ngImport: i0, template: "@let isValid = this.isGuardValid$() | async;\n\n<div class=\"guard\">\n  @if (isValid) {\n    <div class=\"guard-valid\">\n      <ng-content></ng-content>\n    </div>\n  }\n  @if (!isValid && this.canDisplayErrorMessage) {\n    <div class=\"guard-no-valid ta-c\">\n      <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n      {{ 'container.guard.content' | translate }}\n\n      @if (this.level === 'authenticated') {\n        <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n      }\n    </div>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: GuardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-guard', standalone: true, imports: [AsyncPipe, FontIconComponent, ButtonComponent, TranslatePipe], template: "@let isValid = this.isGuardValid$() | async;\n\n<div class=\"guard\">\n  @if (isValid) {\n    <div class=\"guard-valid\">\n      <ng-content></ng-content>\n    </div>\n  }\n  @if (!isValid && this.canDisplayErrorMessage) {\n    <div class=\"guard-no-valid ta-c\">\n      <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n      {{ 'container.guard.content' | translate }}\n\n      @if (this.level === 'authenticated') {\n        <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n      }\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { level: [{
                type: Input
            }], feature: [{
                type: Input
            }], role: [{
                type: Input
            }], canDisplayErrorMessage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3VzZXIvY29tcG9uZW50cy9ndWFyZC9ndWFyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci9jb21wb25lbnRzL2d1YXJkL2d1YXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFaEQsT0FBTyxFQUFTLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBU2pGLE1BQU0sT0FBTyxjQUFlLFNBQVEsbUJBQW1CO0lBY3JELElBQUksWUFBWTtRQUNkLE9BQU8sVUFBVSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVJWLDJCQUFzQixHQUFZLElBQUksQ0FBQztRQUV0Qix3QkFBbUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQU9wRSxDQUFDO0lBRU0sYUFBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7K0dBakNVLGNBQWM7bUdBQWQsY0FBYywyTUNyQjNCLGtpQkFtQkEscUREQVksU0FBUyw4Q0FBRSxpQkFBaUIsbUZBQUUsZUFBZSx5SkFBRSxhQUFhOzs0RkFFM0QsY0FBYztrQkFQMUIsU0FBUzsrQkFDRSxVQUFVLGNBR1IsSUFBSSxXQUNQLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7d0RBSXZFLEtBQUs7c0JBREosS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUs7Z0JBSU4sSUFBSTtzQkFESCxLQUFLO2dCQUlOLHNCQUFzQjtzQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVGFJY29uVHlwZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYU1haW5Sb3V0ZSwgVGFSb3V0ZXMgfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYUFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgTGV2ZWwsIFRhUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcGVybWlzc2lvbnMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWd1YXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2d1YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3VhcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0FzeW5jUGlwZSwgRm9udEljb25Db21wb25lbnQsIEJ1dHRvbkNvbXBvbmVudCwgVHJhbnNsYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIEd1YXJkQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGxldmVsPzogTGV2ZWw7XG5cbiAgQElucHV0KClcbiAgZmVhdHVyZT86IHN0cmluZztcblxuICBASW5wdXQoKVxuICByb2xlPzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGNhbkRpc3BsYXlFcnJvck1lc3NhZ2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX3Blcm1pc3Npb25zU2VydmljZSA9IGluamVjdChUYVBlcm1pc3Npb25zU2VydmljZSk7XG4gIGdldCBub0FjY2Vzc0ljb24oKSB7XG4gICAgcmV0dXJuIFRhSWNvblR5cGUuTm9BY2Nlc3M7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGlzR3VhcmRWYWxpZCQoKSB7XG4gICAgaWYgKHRoaXMucm9sZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zU2VydmljZS5oYXNSb2xlJCh0aGlzLnJvbGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mZWF0dXJlICYmIHRoaXMubGV2ZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9uc1NlcnZpY2UuY2FuQWNjZXNzJCh0aGlzLmZlYXR1cmUsIHRoaXMubGV2ZWwpO1xuICAgIH1cbiAgICByZXR1cm4gb2YoZmFsc2UpO1xuICB9XG5cbiAgcHVibGljIGdvVG9Mb2dpbigpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChUYVJvdXRlcy5nZXRVcmwoW1RhTWFpblJvdXRlLlVTRVJMT0dJTl0pKTtcbiAgfVxufVxuIiwiQGxldCBpc1ZhbGlkID0gdGhpcy5pc0d1YXJkVmFsaWQkKCkgfCBhc3luYztcblxuPGRpdiBjbGFzcz1cImd1YXJkXCI+XG4gIEBpZiAoaXNWYWxpZCkge1xuICAgIDxkaXYgY2xhc3M9XCJndWFyZC12YWxpZFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICB9XG4gIEBpZiAoIWlzVmFsaWQgJiYgdGhpcy5jYW5EaXNwbGF5RXJyb3JNZXNzYWdlKSB7XG4gICAgPGRpdiBjbGFzcz1cImd1YXJkLW5vLXZhbGlkIHRhLWNcIj5cbiAgICAgIDx0YS1mb250LWljb24gbmFtZT1cImNsb3NlLXRvb2xcIiBzaXplPVwibWRcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgIHt7ICdjb250YWluZXIuZ3VhcmQuY29udGVudCcgfCB0cmFuc2xhdGUgfX1cblxuICAgICAgQGlmICh0aGlzLmxldmVsID09PSAnYXV0aGVudGljYXRlZCcpIHtcbiAgICAgICAgPHRhLWJ1dHRvbiAoYWN0aW9uKT1cInRoaXMuZ29Ub0xvZ2luKClcIj4gTWUgY29ubmVjdGVyIDwvdGEtYnV0dG9uPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICB9XG48L2Rpdj5cbiJdfQ==