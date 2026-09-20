import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent } from "@ta/icons";
import { isNonNullable } from "@ta/utils";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class BooleanIconComponent {
    constructor() {
        /**
         * Boolean value to display (can be null or undefined for unknown state)
         */
        this.value = input(undefined);
        /**
         * Size of the icon
         */
        this.size = input("md");
        TaTranslationUI.getInstance();
    }
    getIconName() {
        return this.value() ? "task_alt" : "cancel";
    }
    getClass() {
        return `boolean-icon-${this.value() ? "success" : "error"} ${this.size()}`;
    }
    isNullValue() {
        return !isNonNullable(this.value());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BooleanIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: BooleanIconComponent, isStandalone: true, selector: "ta-boolean-icon", inputs: { value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<div class=\"boolean-icon-container\" [ngClass]=\"this.getClass()\">\n  @if (this.isNullValue()) {\n  <span class=\"null-text\">{{\n    \"ui.boolean-icon.not-communicated\" | translate\n  }}</span>\n  } @else {\n  <ta-font-icon [name]=\"this.getIconName()\" [type]=\"this.size()\"> </ta-font-icon>\n  }\n</div>\n", styles: [".boolean-icon-container{display:inline-flex;align-items:center;gap:var(--ta-space-xs)}.boolean-icon-success{color:var(--ta-semantic-token-success)}.boolean-icon-error{color:var(--ta-semantic-token-alert)}.null-text{font-size:var(--ta-font-size-md)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BooleanIconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-boolean-icon", standalone: true, imports: [NgClass, FontIconComponent, TranslateModule], template: "<div class=\"boolean-icon-container\" [ngClass]=\"this.getClass()\">\n  @if (this.isNullValue()) {\n  <span class=\"null-text\">{{\n    \"ui.boolean-icon.not-communicated\" | translate\n  }}</span>\n  } @else {\n  <ta-font-icon [name]=\"this.getIconName()\" [type]=\"this.size()\"> </ta-font-icon>\n  }\n</div>\n", styles: [".boolean-icon-container{display:inline-flex;align-items:center;gap:var(--ta-space-xs)}.boolean-icon-success{color:var(--ta-semantic-token-success)}.boolean-icon-error{color:var(--ta-semantic-token-alert)}.null-text{font-size:var(--ta-font-size-md)}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ib29sZWFuLWljb24vYm9vbGVhbi1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ib29sZWFuLWljb24vYm9vbGVhbi1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7QUFTL0QsTUFBTSxPQUFPLG9CQUFvQjtJQVcvQjtRQVZBOztXQUVHO1FBQ0gsVUFBSyxHQUFHLEtBQUssQ0FBNkIsU0FBUyxDQUFDLENBQUM7UUFFckQ7O1dBRUc7UUFDSCxTQUFJLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRzFCLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLGdCQUFnQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQzdFLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzsrR0F6QlUsb0JBQW9CO21HQUFwQixvQkFBb0Isb1VDbEJqQywwVEFTQSxvVERPWSxPQUFPLG9GQUFFLGlCQUFpQixrRkFBRSxlQUFlOzs0RkFFMUMsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gXCJAdGEvc3R5bGVzXCI7XG5pbXBvcnQgeyBpc05vbk51bGxhYmxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uVUkgfSBmcm9tIFwiLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtYm9vbGVhbi1pY29uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYm9vbGVhbi1pY29uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ib29sZWFuLWljb24uY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBGb250SWNvbkNvbXBvbmVudCwgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbkljb25Db21wb25lbnQge1xuICAvKipcbiAgICogQm9vbGVhbiB2YWx1ZSB0byBkaXNwbGF5IChjYW4gYmUgbnVsbCBvciB1bmRlZmluZWQgZm9yIHVua25vd24gc3RhdGUpXG4gICAqL1xuICB2YWx1ZSA9IGlucHV0PGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uXG4gICAqL1xuICBzaXplID0gaW5wdXQ8VGFTaXplcz4oXCJtZFwiKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRJY29uTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZhbHVlKCkgPyBcInRhc2tfYWx0XCIgOiBcImNhbmNlbFwiO1xuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBib29sZWFuLWljb24tJHt0aGlzLnZhbHVlKCkgPyBcInN1Y2Nlc3NcIiA6IFwiZXJyb3JcIn0gJHt0aGlzLnNpemUoKX1gO1xuICB9XG5cbiAgcHVibGljIGlzTnVsbFZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNOb25OdWxsYWJsZSh0aGlzLnZhbHVlKCkpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYm9vbGVhbi1pY29uLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInRoaXMuZ2V0Q2xhc3MoKVwiPlxuICBAaWYgKHRoaXMuaXNOdWxsVmFsdWUoKSkge1xuICA8c3BhbiBjbGFzcz1cIm51bGwtdGV4dFwiPnt7XG4gICAgXCJ1aS5ib29sZWFuLWljb24ubm90LWNvbW11bmljYXRlZFwiIHwgdHJhbnNsYXRlXG4gIH19PC9zcGFuPlxuICB9IEBlbHNlIHtcbiAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmdldEljb25OYW1lKClcIiBbdHlwZV09XCJ0aGlzLnNpemUoKVwiPiA8L3RhLWZvbnQtaWNvbj5cbiAgfVxuPC9kaXY+XG4iXX0=