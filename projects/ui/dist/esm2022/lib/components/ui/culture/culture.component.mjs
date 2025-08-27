import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CamTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class CultureComponent {
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: CultureComponent, isStandalone: true, selector: "ta-culture", inputs: { cultures: "cultures" }, ngImport: i0, template: "<div class=\"flex-start g-space-xs\">\n  @for (culture of this.cultures; track culture; let isLast = $last) {\n    <div>\n      {{ 'ui.culture.short.' + culture | translate }}{{ !isLast ? ',' : '' }}\n    </div>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-culture', standalone: true, imports: [NgFor, TranslateModule], template: "<div class=\"flex-start g-space-xs\">\n  @for (culture of this.cultures; track culture; let isLast = $last) {\n    <div>\n      {{ 'ui.culture.short.' + culture | translate }}{{ !isLast ? ',' : '' }}\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { cultures: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VsdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvY3VsdHVyZS9jdWx0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBUzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0I7UUFDRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDOytHQU5VLGdCQUFnQjttR0FBaEIsZ0JBQWdCLHdHQ2Y3QixvT0FPQSx5RERNbUIsZUFBZTs7NEZBRXJCLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDQSxZQUFZLGNBR1IsSUFBSSxXQUNQLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQzt3REFJakMsUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IEN1bHR1cmUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblVJIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS1jdWx0dXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdWx0dXJlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0ZvciwgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VsdHVyZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGN1bHR1cmVzITogQ3VsdHVyZVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uVUkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgtc3RhcnQgZy1zcGFjZS14c1wiPlxuICBAZm9yIChjdWx0dXJlIG9mIHRoaXMuY3VsdHVyZXM7IHRyYWNrIGN1bHR1cmU7IGxldCBpc0xhc3QgPSAkbGFzdCkge1xuICAgIDxkaXY+XG4gICAgICB7eyAndWkuY3VsdHVyZS5zaG9ydC4nICsgY3VsdHVyZSB8IHRyYW5zbGF0ZSB9fXt7ICFpc0xhc3QgPyAnLCcgOiAnJyB9fVxuICAgIDwvZGl2PlxuICB9XG48L2Rpdj5cbiJdfQ==