import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent } from "@ta/icons";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class BadgeComponent {
    constructor() {
        /**
         * Style of badge
         */
        this.type = "primary";
        /**
         * @deprecated
         * showClickOption
         */
        this.showClickOption = false;
        this.clickAction = new EventEmitter();
        TaTranslationUI.getInstance();
    }
    getClass() {
        return `badge-${this.type}`;
    }
    click() {
        this.clickAction.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: BadgeComponent, isStandalone: true, selector: "ta-badge", inputs: { value: "value", type: "type", showClickOption: "showClickOption", icon: "icon" }, outputs: { clickAction: "clickAction" }, ngImport: i0, template: "<span\n  class=\"badge-container\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.click()\"\n>\n  <span class=\"value\">{{ this.value | translate }}</span>\n  @if (this.icon) {\n  <ta-font-icon class=\"ml-space-xs\" [name]=\"icon\" type=\"xs\"></ta-font-icon>\n  } @if (this.showClickOption) {\n  <ta-font-icon name=\"arrow-small\" type=\"xs\"></ta-font-icon>\n  }\n</span>\n", styles: [".badge-container{display:flex;width:fit-content;padding:var(--ta-space-sm) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-bold-weight);border-radius:6px}.badge-container .value{white-space:nowrap}.badge-info{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-danger{color:var(--ta-semantic-red-dark);background:var(--ta-semantic-red-light)}.badge-warning{color:var(--ta-semantic-yellow-dark);background:var(--ta-semantic-yellow-light)}.badge-success{color:var(--ta-semantic-green-dark);background:var(--ta-semantic-green-light)}.badge-primary{color:var(--ta-brand-800);background:var(--ta-brand-300)}.badge-secondary{color:var(--ta-neutral-black);background:var(--ta-brand-300)}.badge-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-orange{color:var(--ta-semantic-orange-dark);background:var(--ta-semantic-orange-light)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-badge", standalone: true, imports: [NgClass, FontIconComponent, TranslateModule], template: "<span\n  class=\"badge-container\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.click()\"\n>\n  <span class=\"value\">{{ this.value | translate }}</span>\n  @if (this.icon) {\n  <ta-font-icon class=\"ml-space-xs\" [name]=\"icon\" type=\"xs\"></ta-font-icon>\n  } @if (this.showClickOption) {\n  <ta-font-icon name=\"arrow-small\" type=\"xs\"></ta-font-icon>\n  }\n</span>\n", styles: [".badge-container{display:flex;width:fit-content;padding:var(--ta-space-sm) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-bold-weight);border-radius:6px}.badge-container .value{white-space:nowrap}.badge-info{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-danger{color:var(--ta-semantic-red-dark);background:var(--ta-semantic-red-light)}.badge-warning{color:var(--ta-semantic-yellow-dark);background:var(--ta-semantic-yellow-light)}.badge-success{color:var(--ta-semantic-green-dark);background:var(--ta-semantic-green-light)}.badge-primary{color:var(--ta-brand-800);background:var(--ta-brand-300)}.badge-secondary{color:var(--ta-neutral-black);background:var(--ta-brand-300)}.badge-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-orange{color:var(--ta-semantic-orange-dark);background:var(--ta-semantic-orange-light)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], type: [{
                type: Input
            }], showClickOption: [{
                type: Input
            }], icon: [{
                type: Input
            }], clickAction: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3VpL2JhZGdlL2JhZGdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9iYWRnZS9iYWRnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBa0IvRCxNQUFNLE9BQU8sY0FBYztJQTBCekI7UUFuQkE7O1dBRUc7UUFFSCxTQUFJLEdBQWMsU0FBUyxDQUFDO1FBRTVCOzs7V0FHRztRQUVILG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBTXhCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcvQixlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQXBDVSxjQUFjO21HQUFkLGNBQWMseU1DekIzQiw2WEFZQSxzL0JEV1ksT0FBTyxvRkFBRSxpQkFBaUIsa0ZBQUUsZUFBZTs7NEZBRTFDLGNBQWM7a0JBUDFCLFNBQVM7K0JBQ0UsVUFBVSxjQUdSLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7d0RBT3RELEtBQUs7c0JBREosS0FBSztnQkFPTixJQUFJO3NCQURILEtBQUs7Z0JBUU4sZUFBZTtzQkFEZCxLQUFLO2dCQUlOLElBQUk7c0JBREgsS0FBSztnQkFJTixXQUFXO3NCQURWLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2VcIjtcblxuZXhwb3J0IHR5cGUgQmFkZ2VUeXBlID1cbiAgfCBcImRhbmdlclwiXG4gIHwgXCJ3YXJuaW5nXCJcbiAgfCBcInN1Y2Nlc3NcIlxuICB8IFwicHJpbWFyeVwiXG4gIHwgXCJzZWNvbmRhcnlcIlxuICB8IFwiaW5mb1wiXG4gIHwgXCJwdXJwbGVcIlxuICB8IFwib3JhbmdlXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtYmFkZ2VcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9iYWRnZS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYmFkZ2UuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBGb250SWNvbkNvbXBvbmVudCwgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VDb21wb25lbnQge1xuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IGluIGJhZGdlXG4gICAqL1xuICBASW5wdXQoKVxuICB2YWx1ZSE6IHN0cmluZztcblxuICAvKipcbiAgICogU3R5bGUgb2YgYmFkZ2VcbiAgICovXG4gIEBJbnB1dCgpXG4gIHR5cGU6IEJhZGdlVHlwZSA9IFwicHJpbWFyeVwiO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBzaG93Q2xpY2tPcHRpb25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3dDbGlja09wdGlvbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGNsaWNrQWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBiYWRnZS0ke3RoaXMudHlwZX1gO1xuICB9XG5cbiAgcHVibGljIGNsaWNrKCkge1xuICAgIHRoaXMuY2xpY2tBY3Rpb24uZW1pdCgpO1xuICB9XG59XG4iLCI8c3BhblxuICBjbGFzcz1cImJhZGdlLWNvbnRhaW5lclwiXG4gIFtuZ0NsYXNzXT1cInRoaXMuZ2V0Q2xhc3MoKVwiXG4gIChjbGljayk9XCJ0aGlzLmNsaWNrKClcIlxuPlxuICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgdGhpcy52YWx1ZSB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgQGlmICh0aGlzLmljb24pIHtcbiAgPHRhLWZvbnQtaWNvbiBjbGFzcz1cIm1sLXNwYWNlLXhzXCIgW25hbWVdPVwiaWNvblwiIHR5cGU9XCJ4c1wiPjwvdGEtZm9udC1pY29uPlxuICB9IEBpZiAodGhpcy5zaG93Q2xpY2tPcHRpb24pIHtcbiAgPHRhLWZvbnQtaWNvbiBuYW1lPVwiYXJyb3ctc21hbGxcIiB0eXBlPVwieHNcIj48L3RhLWZvbnQtaWNvbj5cbiAgfVxuPC9zcGFuPlxuIl19