import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TaTranslationUI } from '../translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class CultureComponent {
    constructor() {
        TaTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CultureComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: CultureComponent, isStandalone: true, selector: "ta-culture", inputs: { cultures: "cultures" }, ngImport: i0, template: "<div class=\"flex-start g-space-xs\">\n  @for (culture of this.cultures; track culture; let isLast = $last) {\n    <div>\n      {{ 'ui.culture.short.' + culture | translate }}{{ !isLast ? ',' : '' }}\n    </div>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CultureComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-culture', standalone: true, imports: [NgFor, TranslateModule], template: "<div class=\"flex-start g-space-xs\">\n  @for (culture of this.cultures; track culture; let isLast = $last) {\n    <div>\n      {{ 'ui.culture.short.' + culture | translate }}{{ !isLast ? ',' : '' }}\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { cultures: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VsdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdWkvY3VsdHVyZS9jdWx0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQVN6RCxNQUFNLE9BQU8sZ0JBQWdCO0lBSTNCO1FBQ0UsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7K0dBTlUsZ0JBQWdCO21HQUFoQixnQkFBZ0Isd0dDaEI3QixvT0FPQSx5RERPbUIsZUFBZTs7NEZBRXJCLGdCQUFnQjtrQkFQNUIsU0FBUzsrQkFDRSxZQUFZLGNBR1YsSUFBSSxXQUNQLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQzt3REFJakMsUUFBUTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3IgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgQ3VsdHVyZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25VSSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1jdWx0dXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdWx0dXJlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0ZvciwgVHJhbnNsYXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VsdHVyZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGN1bHR1cmVzITogQ3VsdHVyZVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25VSS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1zdGFydCBnLXNwYWNlLXhzXCI+XG4gIEBmb3IgKGN1bHR1cmUgb2YgdGhpcy5jdWx0dXJlczsgdHJhY2sgY3VsdHVyZTsgbGV0IGlzTGFzdCA9ICRsYXN0KSB7XG4gICAgPGRpdj5cbiAgICAgIHt7ICd1aS5jdWx0dXJlLnNob3J0LicgKyBjdWx0dXJlIHwgdHJhbnNsYXRlIH19e3sgIWlzTGFzdCA/ICcsJyA6ICcnIH19XG4gICAgPC9kaXY+XG4gIH1cbjwvZGl2PlxuIl19