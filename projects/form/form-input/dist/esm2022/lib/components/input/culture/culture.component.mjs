import { Component } from '@angular/core';
import { TaAbstractInputComponent } from '../../abstract.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import * as i0 from "@angular/core";
export class CultureComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CultureComponent, isStandalone: true, selector: "ta-input-culture", usesInheritance: true, ngImport: i0, template: "<ta-input-dropdown [input]=\"this.input\"></ta-input-dropdown>\n", styles: [""], dependencies: [{ kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-culture', standalone: true, imports: [DropdownComponent], template: "<ta-input-dropdown [input]=\"this.input\"></ta-input-dropdown>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VsdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY3VsdHVyZS9jdWx0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFTbkUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHdCQUFzQztJQUMxRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQzsrR0FIVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixtR0NkN0Isa0VBQ0EsMEREV1ksaUJBQWlCOzs0RkFFaEIsZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEN1bHR1cmUgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWlucHV0LWN1bHR1cmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VsdHVyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1bHR1cmUuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Ryb3Bkb3duQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VsdHVyZUNvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RJbnB1dENvbXBvbmVudDxJbnB1dEN1bHR1cmU+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIiwiPHRhLWlucHV0LWRyb3Bkb3duIFtpbnB1dF09XCJ0aGlzLmlucHV0XCI+PC90YS1pbnB1dC1kcm9wZG93bj5cbiJdfQ==