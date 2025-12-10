import { NgIf } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { FontIconComponent } from "@ta/icons";
import { TaBaseComponent } from "@ta/utils";
import { TemplateModalContainer, } from "../../layout-modal/layout-modal-container/layout-modal-container.component";
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
                profilePictureUrl: "",
            };
        }
        return {
            naming: this.profile.user.naming,
            profilePictureUrl: this.profile.user.profilePictureUrl,
        };
    }
    goToHome() {
        this._router.navigateByUrl("/");
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutHeaderLogoComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: LayoutHeaderLogoComponent, isStandalone: true, selector: "ta-layout-header-logo", inputs: { profile: "profile", notificationTemplate: "notificationTemplate", askClosing$: "askClosing$" }, usesInheritance: true, ngImport: i0, template: "<div class=\"icons row align-items-center\">\n  <div class=\"image col-2\">\n    <ta-user-logo\n      [userInfo]=\"this.userInfo()\"\n      size=\"lg\"\n      (click)=\"this.openProfile()\"\n    ></ta-user-logo>\n  </div>\n\n  <div class=\"title col-8\">\n    <ta-logo (click)=\"this.goToHome()\" color=\"black\"></ta-logo>\n  </div>\n\n  <div class=\"notif col-2\">\n    <ta-font-icon\n      name=\"notifications\"\n      type=\"lg\"\n      [class.disabled]=\"!this.notificationTemplate\"\n      (click)=\"this.openNotification()\"\n    ></ta-font-icon>\n  </div>\n</div>\n\n<mat-menu #showNotificationTemplate=\"matMenu\">\n  @if (this.notificationTemplate) {\n  <ng-template *ngTemplateOutlet=\"this.notificationTemplate\"></ng-template>\n  }\n</mat-menu>\n\n<mat-menu #showProfileTemplate=\"matMenu\">\n  @if (this.profile) {\n  <ng-template *ngTemplateOutlet=\"this.profile.template\"></ng-template>\n  }\n</mat-menu>\n", styles: [".icons{-webkit-user-select:none;user-select:none}.icons .image{text-align:left}.icons .image img{width:28px;height:auto;border-radius:100px}.icons .title{text-align:center}.icons .title ta-logo{display:block;width:60px;height:auto;border-radius:5px;margin:auto}.icons .notif{text-align:right}.icons .notif.disabled{color:var(--ta-icon-disabled)}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutHeaderLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-layout-header-logo", standalone: true, imports: [NgIf, FontIconComponent, MatMenuModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: "<div class=\"icons row align-items-center\">\n  <div class=\"image col-2\">\n    <ta-user-logo\n      [userInfo]=\"this.userInfo()\"\n      size=\"lg\"\n      (click)=\"this.openProfile()\"\n    ></ta-user-logo>\n  </div>\n\n  <div class=\"title col-8\">\n    <ta-logo (click)=\"this.goToHome()\" color=\"black\"></ta-logo>\n  </div>\n\n  <div class=\"notif col-2\">\n    <ta-font-icon\n      name=\"notifications\"\n      type=\"lg\"\n      [class.disabled]=\"!this.notificationTemplate\"\n      (click)=\"this.openNotification()\"\n    ></ta-font-icon>\n  </div>\n</div>\n\n<mat-menu #showNotificationTemplate=\"matMenu\">\n  @if (this.notificationTemplate) {\n  <ng-template *ngTemplateOutlet=\"this.notificationTemplate\"></ng-template>\n  }\n</mat-menu>\n\n<mat-menu #showProfileTemplate=\"matMenu\">\n  @if (this.profile) {\n  <ng-template *ngTemplateOutlet=\"this.profile.template\"></ng-template>\n  }\n</mat-menu>\n", styles: [".icons{-webkit-user-select:none;user-select:none}.icons .image{text-align:left}.icons .image img{width:28px;height:auto;border-radius:100px}.icons .title{text-align:center}.icons .title ta-logo{display:block;width:60px;height:auto;border-radius:5px;margin:auto}.icons .notif{text-align:right}.icons .notif.disabled{color:var(--ta-icon-disabled)}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { profile: [{
                type: Input
            }], notificationTemplate: [{
                type: Input
            }], askClosing$: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLWxvZ28vbGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLWxvZ28vbGF5b3V0LWhlYWRlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLFNBQVMsRUFDVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzVDLE9BQU8sRUFDTCxzQkFBc0IsR0FFdkIsTUFBTSw0RUFBNEUsQ0FBQzs7OztBQWdCcEYsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGVBQWU7SUFhNUQsWUFBb0IsTUFBaUI7UUFDbkMsS0FBSyxFQUFFLENBQUM7UUFEVSxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBWHJDLFlBQU8sR0FHSSxJQUFJLENBQUM7UUFHaEIseUJBQW9CLEdBQTRCLElBQUksQ0FBQztJQU9yRCxDQUFDO0lBRU0sUUFBUTtRQUliLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEIsT0FBTztnQkFDTCxNQUFNLEVBQUUsSUFBSTtnQkFDWixpQkFBaUIsRUFBRSxFQUFFO2FBQ3RCLENBQUM7UUFDSixDQUFDO1FBQ0QsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ2hDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQjtTQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ00sV0FBVztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUM1QixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNkLHNCQUFzQixFQUN0QjtZQUNFLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRO2dCQUNoQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7YUFDOUI7U0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUMvQixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNkLHNCQUFzQixFQUN0QjtZQUNFLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtnQkFDbkMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQzlCO1NBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FoRVUseUJBQXlCO21HQUF6Qix5QkFBeUIsa05DakN0Qyw4NUJBa0NBLDBkREprQixpQkFBaUIsa0ZBQUUsYUFBYTs7NEZBR3JDLHlCQUF5QjtrQkFSckMsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsQ0FBQyxXQUN4QyxDQUFDLHNCQUFzQixDQUFDOzhFQUlqQyxPQUFPO3NCQUROLEtBQUs7Z0JBT04sb0JBQW9CO3NCQURuQixLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1xuICBDVVNUT01fRUxFTUVOVFNfU0NIRU1BLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyLFxuICBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyRGF0YSxcbn0gZnJvbSBcIi4uLy4uL2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwtY29udGFpbmVyL2xheW91dC1tb2RhbC1jb250YWluZXIuY29tcG9uZW50XCI7XG5cbmludGVyZmFjZSBVc2VyTG9nb05hbWluZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmcgfCBudWxsO1xuICB0cmlncmFtOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1sYXlvdXQtaGVhZGVyLWxvZ29cIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9sYXlvdXQtaGVhZGVyLWxvZ28uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2xheW91dC1oZWFkZXItbG9nby5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIEZvbnRJY29uQ29tcG9uZW50LCBNYXRNZW51TW9kdWxlXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRIZWFkZXJMb2dvQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHJvZmlsZToge1xuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIHVzZXI6IHsgcHJvZmlsZVBpY3R1cmVVcmw/OiBzdHJpbmc7IG5hbWluZzogVXNlckxvZ29OYW1pbmcgfCBudWxsIH07XG4gIH0gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBub3RpZmljYXRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIGFza0Nsb3NpbmckOiBPYnNlcnZhYmxlPG51bGw+IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21vZGFsOiBNYXREaWFsb2cpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHVzZXJJbmZvKCk6IHtcbiAgICBwcm9maWxlUGljdHVyZVVybD86IHN0cmluZztcbiAgICBuYW1pbmc6IFVzZXJMb2dvTmFtaW5nIHwgbnVsbDtcbiAgfSB7XG4gICAgaWYgKCF0aGlzLnByb2ZpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWluZzogbnVsbCxcbiAgICAgICAgcHJvZmlsZVBpY3R1cmVVcmw6IFwiXCIsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmFtaW5nOiB0aGlzLnByb2ZpbGUudXNlci5uYW1pbmcsXG4gICAgICBwcm9maWxlUGljdHVyZVVybDogdGhpcy5wcm9maWxlLnVzZXIucHJvZmlsZVBpY3R1cmVVcmwsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBnb1RvSG9tZSgpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9cIik7XG4gIH1cbiAgcHVibGljIG9wZW5Qcm9maWxlKCkge1xuICAgIGlmICghdGhpcy5wcm9maWxlPy50ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tb2RhbC5vcGVuPFRlbXBsYXRlTW9kYWxDb250YWluZXIsIFRlbXBsYXRlTW9kYWxDb250YWluZXJEYXRhPihcbiAgICAgIFRlbXBsYXRlTW9kYWxDb250YWluZXIsXG4gICAgICB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5wcm9maWxlPy50ZW1wbGF0ZSxcbiAgICAgICAgICBhc2tDbG9zaW5nJDogdGhpcy5hc2tDbG9zaW5nJCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9wZW5Ob3RpZmljYXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLm5vdGlmaWNhdGlvblRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21vZGFsLm9wZW48VGVtcGxhdGVNb2RhbENvbnRhaW5lciwgVGVtcGxhdGVNb2RhbENvbnRhaW5lckRhdGE+KFxuICAgICAgVGVtcGxhdGVNb2RhbENvbnRhaW5lcixcbiAgICAgIHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLm5vdGlmaWNhdGlvblRlbXBsYXRlLFxuICAgICAgICAgIGFza0Nsb3NpbmckOiB0aGlzLmFza0Nsb3NpbmckLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpY29ucyByb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpbWFnZSBjb2wtMlwiPlxuICAgIDx0YS11c2VyLWxvZ29cbiAgICAgIFt1c2VySW5mb109XCJ0aGlzLnVzZXJJbmZvKClcIlxuICAgICAgc2l6ZT1cImxnXCJcbiAgICAgIChjbGljayk9XCJ0aGlzLm9wZW5Qcm9maWxlKClcIlxuICAgID48L3RhLXVzZXItbG9nbz5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInRpdGxlIGNvbC04XCI+XG4gICAgPHRhLWxvZ28gKGNsaWNrKT1cInRoaXMuZ29Ub0hvbWUoKVwiIGNvbG9yPVwiYmxhY2tcIj48L3RhLWxvZ28+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJub3RpZiBjb2wtMlwiPlxuICAgIDx0YS1mb250LWljb25cbiAgICAgIG5hbWU9XCJub3RpZmljYXRpb25zXCJcbiAgICAgIHR5cGU9XCJsZ1wiXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIXRoaXMubm90aWZpY2F0aW9uVGVtcGxhdGVcIlxuICAgICAgKGNsaWNrKT1cInRoaXMub3Blbk5vdGlmaWNhdGlvbigpXCJcbiAgICA+PC90YS1mb250LWljb24+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxtYXQtbWVudSAjc2hvd05vdGlmaWNhdGlvblRlbXBsYXRlPVwibWF0TWVudVwiPlxuICBAaWYgKHRoaXMubm90aWZpY2F0aW9uVGVtcGxhdGUpIHtcbiAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGhpcy5ub3RpZmljYXRpb25UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gIH1cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjc2hvd1Byb2ZpbGVUZW1wbGF0ZT1cIm1hdE1lbnVcIj5cbiAgQGlmICh0aGlzLnByb2ZpbGUpIHtcbiAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGhpcy5wcm9maWxlLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgfVxuPC9tYXQtbWVudT5cbiJdfQ==