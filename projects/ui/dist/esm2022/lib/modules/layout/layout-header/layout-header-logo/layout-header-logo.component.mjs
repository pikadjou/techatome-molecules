import { NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { FontIconComponent } from '@ta/icons';
import { TaBaseComponent } from '@ta/utils';
import { TemplateModalContainer, } from '../../layout-modal/layout-modal-container/layout-modal-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/menu";
export class LayoutHeaderLogoComponent extends TaBaseComponent {
    constructor(_modal) {
        super();
        this._modal = _modal;
        this.profile = null;
        this.notificationTemplate = null;
    }
    userInfo() {
        if (!this.profile) {
            return {
                naming: null,
                profilePictureUrl: '',
            };
        }
        return {
            naming: this.profile.user.naming,
            profilePictureUrl: this.profile.user.profilePictureUrl,
        };
    }
    goToHome() {
        this._router.navigateByUrl('/');
    }
    openProfile() {
        if (!this.profile?.template) {
            return;
        }
        this._modal.open(TemplateModalContainer, {
            data: {
                template: this.profile?.template,
                askClosing$: this.askClosing$,
            },
        });
    }
    openNotification() {
        if (!this.notificationTemplate) {
            return;
        }
        this._modal.open(TemplateModalContainer, {
            data: {
                template: this.notificationTemplate,
                askClosing$: this.askClosing$,
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderLogoComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LayoutHeaderLogoComponent, isStandalone: true, selector: "ta-layout-header-logo", inputs: { profile: "profile", notificationTemplate: "notificationTemplate", askClosing$: "askClosing$" }, usesInheritance: true, ngImport: i0, template: "<div class=\"icons row align-items-center\">\n  <div class=\"image col-2\">\n    <ta-user-logo [userInfo]=\"this.userInfo()\" size=\"lg\" (click)=\"this.openProfile()\"></ta-user-logo>\n  </div>\n\n  <div class=\"title col-8\">\n    <ta-logo (click)=\"this.goToHome()\" color=\"black\"></ta-logo>\n  </div>\n\n  <div class=\"notif col-2\">\n    <ta-font-icon\n      name=\"notifications\"\n      type=\"lg\"\n      [class.disabled]=\"!this.notificationTemplate\"\n      (click)=\"this.openNotification()\"\n    ></ta-font-icon>\n  </div>\n</div>\n\n<mat-menu #showNotificationTemplate=\"matMenu\">\n  @if (this.notificationTemplate) {\n    <ng-template *ngTemplateOutlet=\"this.notificationTemplate\"></ng-template>\n  }\n</mat-menu>\n\n<mat-menu #showProfileTemplate=\"matMenu\">\n  @if (this.profile) {\n    <ng-template *ngTemplateOutlet=\"this.profile.template\"></ng-template>\n  }\n</mat-menu>\n", styles: [".icons{-webkit-user-select:none;user-select:none}.icons .image{text-align:left}.icons .image img{width:28px;height:auto;border-radius:100px}.icons .title{text-align:center}.icons .title ta-logo{display:block;width:60px;height:auto;border-radius:5px;margin:auto}.icons .notif{text-align:right}.icons .notif.disabled{color:var(--ta-icon-disabled)}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-header-logo', standalone: true, imports: [NgIf, FontIconComponent, MatMenuModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: "<div class=\"icons row align-items-center\">\n  <div class=\"image col-2\">\n    <ta-user-logo [userInfo]=\"this.userInfo()\" size=\"lg\" (click)=\"this.openProfile()\"></ta-user-logo>\n  </div>\n\n  <div class=\"title col-8\">\n    <ta-logo (click)=\"this.goToHome()\" color=\"black\"></ta-logo>\n  </div>\n\n  <div class=\"notif col-2\">\n    <ta-font-icon\n      name=\"notifications\"\n      type=\"lg\"\n      [class.disabled]=\"!this.notificationTemplate\"\n      (click)=\"this.openNotification()\"\n    ></ta-font-icon>\n  </div>\n</div>\n\n<mat-menu #showNotificationTemplate=\"matMenu\">\n  @if (this.notificationTemplate) {\n    <ng-template *ngTemplateOutlet=\"this.notificationTemplate\"></ng-template>\n  }\n</mat-menu>\n\n<mat-menu #showProfileTemplate=\"matMenu\">\n  @if (this.profile) {\n    <ng-template *ngTemplateOutlet=\"this.profile.template\"></ng-template>\n  }\n</mat-menu>\n", styles: [".icons{-webkit-user-select:none;user-select:none}.icons .image{text-align:left}.icons .image img{width:28px;height:auto;border-radius:100px}.icons .title{text-align:center}.icons .title ta-logo{display:block;width:60px;height:auto;border-radius:5px;margin:auto}.icons .notif{text-align:right}.icons .notif.disabled{color:var(--ta-icon-disabled)}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { profile: [{
                type: Input
            }], notificationTemplate: [{
                type: Input
            }], askClosing$: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLWxvZ28vbGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLWxvZ28vbGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHNUMsT0FBTyxFQUNMLHNCQUFzQixHQUV2QixNQUFNLDRFQUE0RSxDQUFDOzs7O0FBZ0JwRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsZUFBZTtJQWE1RCxZQUFvQixNQUFpQjtRQUNuQyxLQUFLLEVBQUUsQ0FBQztRQURVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFYckMsWUFBTyxHQUdJLElBQUksQ0FBQztRQUdoQix5QkFBb0IsR0FBNEIsSUFBSSxDQUFDO0lBT3JELENBQUM7SUFFTSxRQUFRO1FBSWIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixPQUFPO2dCQUNMLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGlCQUFpQixFQUFFLEVBQUU7YUFDdEIsQ0FBQztRQUNKLENBQUM7UUFDRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDaEMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCO1NBQ3ZELENBQUM7SUFDSixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDO1lBQzVCLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQXFELHNCQUFzQixFQUFFO1lBQzNGLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRO2dCQUNoQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDOUI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUMvQixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFxRCxzQkFBc0IsRUFBRTtZQUMzRixJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxvQkFBb0I7Z0JBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzthQUM5QjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBMURVLHlCQUF5QjttR0FBekIseUJBQXlCLGtOQzVCdEMsdTRCQThCQSwwZERMa0IsaUJBQWlCLGtGQUFFLGFBQWE7OzRGQUdyQyx5QkFBeUI7a0JBUnJDLFNBQVM7K0JBQ0UsdUJBQXVCLGNBR3JCLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUMsV0FDeEMsQ0FBQyxzQkFBc0IsQ0FBQzs4RUFJakMsT0FBTztzQkFETixLQUFLO2dCQU9OLG9CQUFvQjtzQkFEbkIsS0FBSztnQkFJTixXQUFXO3NCQURWLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLFxuICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyRGF0YSxcbn0gZnJvbSAnLi4vLi4vbGF5b3V0LW1vZGFsL2xheW91dC1tb2RhbC1jb250YWluZXIvbGF5b3V0LW1vZGFsLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5pbnRlcmZhY2UgVXNlckxvZ29OYW1pbmcge1xuICBuYW1lOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgdHJpZ3JhbTogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1sYXlvdXQtaGVhZGVyLWxvZ28nLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBGb250SWNvbkNvbXBvbmVudCwgTWF0TWVudU1vZHVsZV0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0SGVhZGVyTG9nb0NvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHByb2ZpbGU6IHtcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICB1c2VyOiB7IHByb2ZpbGVQaWN0dXJlVXJsPzogc3RyaW5nOyBuYW1pbmc6IFVzZXJMb2dvTmFtaW5nIHwgbnVsbCB9O1xuICB9IHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgbm90aWZpY2F0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBhc2tDbG9zaW5nJDogT2JzZXJ2YWJsZTxudWxsPiB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb2RhbDogTWF0RGlhbG9nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyB1c2VySW5mbygpOiB7XG4gICAgcHJvZmlsZVBpY3R1cmVVcmw/OiBzdHJpbmc7XG4gICAgbmFtaW5nOiBVc2VyTG9nb05hbWluZyB8IG51bGw7XG4gIH0ge1xuICAgIGlmICghdGhpcy5wcm9maWxlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1pbmc6IG51bGwsXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlVXJsOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuYW1pbmc6IHRoaXMucHJvZmlsZS51c2VyLm5hbWluZyxcbiAgICAgIHByb2ZpbGVQaWN0dXJlVXJsOiB0aGlzLnByb2ZpbGUudXNlci5wcm9maWxlUGljdHVyZVVybCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdvVG9Ib21lKCkge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XG4gIH1cbiAgcHVibGljIG9wZW5Qcm9maWxlKCkge1xuICAgIGlmICghdGhpcy5wcm9maWxlPy50ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tb2RhbC5vcGVuPFRlbXBsYXRlTW9kYWxDb250YWluZXIsIFRlbXBsYXRlTW9kYWxDb250YWluZXJEYXRhPihUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLCB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLnByb2ZpbGU/LnRlbXBsYXRlLFxuICAgICAgICBhc2tDbG9zaW5nJDogdGhpcy5hc2tDbG9zaW5nJCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb3Blbk5vdGlmaWNhdGlvbigpIHtcbiAgICBpZiAoIXRoaXMubm90aWZpY2F0aW9uVGVtcGxhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbW9kYWwub3BlbjxUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLCBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyRGF0YT4oVGVtcGxhdGVNb2RhbENvbnRhaW5lciwge1xuICAgICAgZGF0YToge1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5ub3RpZmljYXRpb25UZW1wbGF0ZSxcbiAgICAgICAgYXNrQ2xvc2luZyQ6IHRoaXMuYXNrQ2xvc2luZyQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaWNvbnMgcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICA8ZGl2IGNsYXNzPVwiaW1hZ2UgY29sLTJcIj5cbiAgICA8dGEtdXNlci1sb2dvIFt1c2VySW5mb109XCJ0aGlzLnVzZXJJbmZvKClcIiBzaXplPVwibGdcIiAoY2xpY2spPVwidGhpcy5vcGVuUHJvZmlsZSgpXCI+PC90YS11c2VyLWxvZ28+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ0aXRsZSBjb2wtOFwiPlxuICAgIDx0YS1sb2dvIChjbGljayk9XCJ0aGlzLmdvVG9Ib21lKClcIiBjb2xvcj1cImJsYWNrXCI+PC90YS1sb2dvPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwibm90aWYgY29sLTJcIj5cbiAgICA8dGEtZm9udC1pY29uXG4gICAgICBuYW1lPVwibm90aWZpY2F0aW9uc1wiXG4gICAgICB0eXBlPVwibGdcIlxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiF0aGlzLm5vdGlmaWNhdGlvblRlbXBsYXRlXCJcbiAgICAgIChjbGljayk9XCJ0aGlzLm9wZW5Ob3RpZmljYXRpb24oKVwiXG4gICAgPjwvdGEtZm9udC1pY29uPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bWF0LW1lbnUgI3Nob3dOb3RpZmljYXRpb25UZW1wbGF0ZT1cIm1hdE1lbnVcIj5cbiAgQGlmICh0aGlzLm5vdGlmaWNhdGlvblRlbXBsYXRlKSB7XG4gICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGhpcy5ub3RpZmljYXRpb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gIH1cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjc2hvd1Byb2ZpbGVUZW1wbGF0ZT1cIm1hdE1lbnVcIj5cbiAgQGlmICh0aGlzLnByb2ZpbGUpIHtcbiAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0aGlzLnByb2ZpbGUudGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICB9XG48L21hdC1tZW51PlxuIl19