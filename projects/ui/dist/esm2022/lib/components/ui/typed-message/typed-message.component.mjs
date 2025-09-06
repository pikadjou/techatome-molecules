import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent } from '@ta/icons';
import { TaTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class TypedMessageComponent {
    get icon() {
        switch (this.type) {
            case 'danger':
                return 'error_outline';
            case 'success':
                return 'check_circle_outline';
            case 'info':
                return 'help_outline';
            case 'warning':
                return 'warning_amber';
            default:
                return '';
        }
    }
    constructor() {
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TypedMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TypedMessageComponent, isStandalone: true, selector: "ta-typed-message", inputs: { text: "text", type: "type" }, ngImport: i0, template: "<div class=\"alert alert-{{ this.type }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\">{{ this.icon }}</ta-font-icon>\n  <span class=\"text\">{{ this.text | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TypedMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-typed-message', standalone: true, imports: [FontIconComponent, TranslateModule], template: "<div class=\"alert alert-{{ this.type }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\">{{ this.icon }}</ta-font-icon>\n  <span class=\"text\">{{ this.text | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWQtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdHlwZWQtbWVzc2FnZS90eXBlZC1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90eXBlZC1tZXNzYWdlL3R5cGVkLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVN6RCxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLElBQUksSUFBSTtRQUNOLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLEtBQUssUUFBUTtnQkFDWCxPQUFPLGVBQWUsQ0FBQztZQUN6QixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxzQkFBc0IsQ0FBQztZQUNoQyxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxjQUFjLENBQUM7WUFDeEIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sZUFBZSxDQUFDO1lBQ3pCO2dCQUNFLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRDtRQUNFLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDOytHQXJCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixvSENoQmxDLGlNQUlBLHlMRFVZLGlCQUFpQixrRkFBRSxlQUFlOzs0RkFFakMscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7d0RBR3BDLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBNZXNzYWdlTGV2ZWwgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uVUkgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtdHlwZWQtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90eXBlZC1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdHlwZWQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9udEljb25Db21wb25lbnQsIFRyYW5zbGF0ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFR5cGVkTWVzc2FnZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHRleHQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGUhOiBNZXNzYWdlTGV2ZWw7XG5cbiAgZ2V0IGljb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XG4gICAgICAgIHJldHVybiAnZXJyb3Jfb3V0bGluZSc7XG4gICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgcmV0dXJuICdjaGVja19jaXJjbGVfb3V0bGluZSc7XG4gICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgcmV0dXJuICdoZWxwX291dGxpbmUnO1xuICAgICAgY2FzZSAnd2FybmluZyc6XG4gICAgICAgIHJldHVybiAnd2FybmluZ19hbWJlcic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC17eyB0aGlzLnR5cGUgfX1cIiByb2xlPVwiYWxlcnRcIj5cbiAgPHRhLWZvbnQtaWNvbiBbdHlwZV09XCInbWQnXCI+e3sgdGhpcy5pY29uIH19PC90YS1mb250LWljb24+XG4gIDxzcGFuIGNsYXNzPVwidGV4dFwiPnt7IHRoaXMudGV4dCB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbjwvZGl2PlxuIl19