import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { FontIconComponent } from "@ta/icons";
import { TaTranslationUI } from "../../../translation.service";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class BooleanIconComponent {
    constructor() {
        /**
         * Size of the icon
         */
        this.size = "md";
        TaTranslationUI.getInstance();
    }
    getIconName() {
        return this.value ? "task_alt" : "cancel";
    }
    getClass() {
        return `boolean-icon-${this.value ? "success" : "error"} ${this.size}`;
    }
    isNullValue() {
        return this.value === null || this.value === undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BooleanIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: BooleanIconComponent, isStandalone: true, selector: "ta-boolean-icon", inputs: { value: "value", size: "size" }, ngImport: i0, template: "<div class=\"boolean-icon-container\" [ngClass]=\"this.getClass()\">\n  @if (this.isNullValue()) {\n  <span class=\"null-text\">{{\n    \"ui.boolean-icon.not-communicated\" | translate\n  }}</span>\n  } @else {\n  <ta-font-icon [name]=\"this.getIconName()\" [type]=\"this.size\"> </ta-font-icon>\n  }\n</div>\n", styles: [".boolean-icon-container{display:inline-flex;align-items:center;gap:var(--ta-space-xs)}.boolean-icon-success{color:var(--ta-semantic-token-success)}.boolean-icon-error{color:var(--ta-semantic-token-alert)}.null-text{font-size:var(--ta-font-size-md)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BooleanIconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-boolean-icon", standalone: true, imports: [NgClass, FontIconComponent, TranslateModule], template: "<div class=\"boolean-icon-container\" [ngClass]=\"this.getClass()\">\n  @if (this.isNullValue()) {\n  <span class=\"null-text\">{{\n    \"ui.boolean-icon.not-communicated\" | translate\n  }}</span>\n  } @else {\n  <ta-font-icon [name]=\"this.getIconName()\" [type]=\"this.size\"> </ta-font-icon>\n  }\n</div>\n", styles: [".boolean-icon-container{display:inline-flex;align-items:center;gap:var(--ta-space-xs)}.boolean-icon-success{color:var(--ta-semantic-token-success)}.boolean-icon-error{color:var(--ta-semantic-token-alert)}.null-text{font-size:var(--ta-font-size-md)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ib29sZWFuLWljb24vYm9vbGVhbi1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ib29sZWFuLWljb24vYm9vbGVhbi1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBUy9ELE1BQU0sT0FBTyxvQkFBb0I7SUFhL0I7UUFOQTs7V0FFRztRQUVILFNBQUksR0FBWSxJQUFJLENBQUM7UUFHbkIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLGdCQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUN6RCxDQUFDOytHQTNCVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixxSENqQmpDLHdUQVNBLG9URE1ZLE9BQU8sb0ZBQUUsaUJBQWlCLGtGQUFFLGVBQWU7OzRGQUUxQyxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzt3REFPdEQsS0FBSztzQkFESixLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSBcIi4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWJvb2xlYW4taWNvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Jvb2xlYW4taWNvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYm9vbGVhbi1pY29uLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdDbGFzcywgRm9udEljb25Db21wb25lbnQsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5JY29uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEJvb2xlYW4gdmFsdWUgdG8gZGlzcGxheSAoY2FuIGJlIG51bGwgb3IgdW5kZWZpbmVkIGZvciB1bmtub3duIHN0YXRlKVxuICAgKi9cbiAgQElucHV0KClcbiAgdmFsdWU6IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHRoZSBpY29uXG4gICAqL1xuICBASW5wdXQoKVxuICBzaXplOiBUYVNpemVzID0gXCJtZFwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgcHVibGljIGdldEljb25OYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPyBcInRhc2tfYWx0XCIgOiBcImNhbmNlbFwiO1xuICB9XG5cbiAgcHVibGljIGdldENsYXNzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBib29sZWFuLWljb24tJHt0aGlzLnZhbHVlID8gXCJzdWNjZXNzXCIgOiBcImVycm9yXCJ9ICR7dGhpcy5zaXplfWA7XG4gIH1cblxuICBwdWJsaWMgaXNOdWxsVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IG51bGwgfHwgdGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYm9vbGVhbi1pY29uLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cInRoaXMuZ2V0Q2xhc3MoKVwiPlxuICBAaWYgKHRoaXMuaXNOdWxsVmFsdWUoKSkge1xuICA8c3BhbiBjbGFzcz1cIm51bGwtdGV4dFwiPnt7XG4gICAgXCJ1aS5ib29sZWFuLWljb24ubm90LWNvbW11bmljYXRlZFwiIHwgdHJhbnNsYXRlXG4gIH19PC9zcGFuPlxuICB9IEBlbHNlIHtcbiAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmdldEljb25OYW1lKClcIiBbdHlwZV09XCJ0aGlzLnNpemVcIj4gPC90YS1mb250LWljb24+XG4gIH1cbjwvZGl2PlxuIl19