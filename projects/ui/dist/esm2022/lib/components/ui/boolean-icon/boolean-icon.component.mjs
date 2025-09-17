import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class BooleanIconComponent {
    constructor() {
        /**
         * Size of the icon
         */
        this.size = 'md';
        TaTranslationUI.getInstance();
    }
    getIconName() {
        return this.value ? 'task_alt' : 'cancel';
    }
    getClass() {
        return `boolean-icon-${this.value ? 'success' : 'error'} ${this.size}`;
    }
    isNullValue() {
        return this.value === null || this.value === undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BooleanIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: BooleanIconComponent, isStandalone: true, selector: "ta-boolean-icon", inputs: { value: "value", size: "size" }, ngImport: i0, template: "<div class=\"boolean-icon-container\" [ngClass]=\"this.getClass()\">\r\n  @if (this.isNullValue()) {\r\n    <span class=\"null-text\">{{ 'ui.boolean-icon.not-communicated' | translate }}</span>\r\n  } @else {\r\n    <ta-font-icon \r\n      [name]=\"this.getIconName()\" \r\n      [type]=\"this.size\">\r\n    </ta-font-icon>\r\n  }\r\n</div>", styles: [".boolean-icon-container{display:inline-flex;align-items:center;gap:var(--ta-space-xs)}.boolean-icon-success{color:var(--ta-semantic-token-success)}.boolean-icon-error{color:var(--ta-semantic-token-alert)}.null-text{font-size:var(--ta-font-size-md)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BooleanIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-boolean-icon', standalone: true, imports: [NgClass, FontIconComponent, TranslateModule], template: "<div class=\"boolean-icon-container\" [ngClass]=\"this.getClass()\">\r\n  @if (this.isNullValue()) {\r\n    <span class=\"null-text\">{{ 'ui.boolean-icon.not-communicated' | translate }}</span>\r\n  } @else {\r\n    <ta-font-icon \r\n      [name]=\"this.getIconName()\" \r\n      [type]=\"this.size\">\r\n    </ta-font-icon>\r\n  }\r\n</div>", styles: [".boolean-icon-container{display:inline-flex;align-items:center;gap:var(--ta-space-xs)}.boolean-icon-success{color:var(--ta-semantic-token-success)}.boolean-icon-error{color:var(--ta-semantic-token-alert)}.null-text{font-size:var(--ta-font-size-md)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ib29sZWFuLWljb24vYm9vbGVhbi1pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9ib29sZWFuLWljb24vYm9vbGVhbi1pY29uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBU3pELE1BQU0sT0FBTyxvQkFBb0I7SUFhL0I7UUFOQTs7V0FFRztRQUVILFNBQUksR0FBWSxJQUFJLENBQUM7UUFHbkIsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLGdCQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekUsQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQztJQUN6RCxDQUFDOytHQTNCVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixxSENqQmpDLHVWQVNNLG9URE1NLE9BQU8sb0ZBQUUsaUJBQWlCLGtGQUFFLGVBQWU7OzRGQUUxQyxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzt3REFPdEQsS0FBSztzQkFESixLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcclxuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gJ0B0YS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLWJvb2xlYW4taWNvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jvb2xlYW4taWNvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYm9vbGVhbi1pY29uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbTmdDbGFzcywgRm9udEljb25Db21wb25lbnQsIFRyYW5zbGF0ZU1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuSWNvbkNvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogQm9vbGVhbiB2YWx1ZSB0byBkaXNwbGF5IChjYW4gYmUgbnVsbCBvciB1bmRlZmluZWQgZm9yIHVua25vd24gc3RhdGUpXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICB2YWx1ZTogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpemUgb2YgdGhlIGljb25cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNpemU6IFRhU2l6ZXMgPSAnbWQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldEljb25OYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/ICd0YXNrX2FsdCcgOiAnY2FuY2VsJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGBib29sZWFuLWljb24tJHt0aGlzLnZhbHVlID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJ30gJHt0aGlzLnNpemV9YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc051bGxWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBudWxsIHx8IHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZDtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImJvb2xlYW4taWNvbi1jb250YWluZXJcIiBbbmdDbGFzc109XCJ0aGlzLmdldENsYXNzKClcIj5cclxuICBAaWYgKHRoaXMuaXNOdWxsVmFsdWUoKSkge1xyXG4gICAgPHNwYW4gY2xhc3M9XCJudWxsLXRleHRcIj57eyAndWkuYm9vbGVhbi1pY29uLm5vdC1jb21tdW5pY2F0ZWQnIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxyXG4gIH0gQGVsc2Uge1xyXG4gICAgPHRhLWZvbnQtaWNvbiBcclxuICAgICAgW25hbWVdPVwidGhpcy5nZXRJY29uTmFtZSgpXCIgXHJcbiAgICAgIFt0eXBlXT1cInRoaXMuc2l6ZVwiPlxyXG4gICAgPC90YS1mb250LWljb24+XHJcbiAgfVxyXG48L2Rpdj4iXX0=