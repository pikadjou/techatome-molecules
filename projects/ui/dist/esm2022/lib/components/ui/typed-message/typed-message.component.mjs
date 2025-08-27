import { FontIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CamTranslationUI } from '../translation.service';
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
        CamTranslationUI.getInstance();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWQtbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvdHlwZWQtbWVzc2FnZS90eXBlZC1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS90eXBlZC1tZXNzYWdlL3R5cGVkLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBUzFELE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsSUFBSSxJQUFJO1FBQ04sUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsS0FBSyxRQUFRO2dCQUNYLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssU0FBUztnQkFDWixPQUFPLHNCQUFzQixDQUFDO1lBQ2hDLEtBQUssTUFBTTtnQkFDVCxPQUFPLGNBQWMsQ0FBQztZQUN4QixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxlQUFlLENBQUM7WUFDekI7Z0JBQ0UsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVEO1FBQ0UsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzsrR0FyQlUscUJBQXFCO21HQUFyQixxQkFBcUIsb0hDZmxDLGlNQUlBLHlMRFNZLGlCQUFpQixrRkFBRSxlQUFlOzs0RkFFakMscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNBLGtCQUFrQixjQUdkLElBQUksV0FDUCxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzt3REFHcEMsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBNZXNzYWdlTGV2ZWwgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS10eXBlZC1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3R5cGVkLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90eXBlZC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb250SWNvbkNvbXBvbmVudCwgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVHlwZWRNZXNzYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGV4dCE6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZSE6IE1lc3NhZ2VMZXZlbDtcblxuICBnZXQgaWNvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgICAgcmV0dXJuICdlcnJvcl9vdXRsaW5lJztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICByZXR1cm4gJ2NoZWNrX2NpcmNsZV9vdXRsaW5lJztcbiAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICByZXR1cm4gJ2hlbHBfb3V0bGluZSc7XG4gICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nX2FtYmVyJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBDYW1UcmFuc2xhdGlvblVJLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC17eyB0aGlzLnR5cGUgfX1cIiByb2xlPVwiYWxlcnRcIj5cbiAgPHRhLWZvbnQtaWNvbiBbdHlwZV09XCInbWQnXCI+e3sgdGhpcy5pY29uIH19PC90YS1mb250LWljb24+XG4gIDxzcGFuIGNsYXNzPVwidGV4dFwiPnt7IHRoaXMudGV4dCB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbjwvZGl2PlxuIl19