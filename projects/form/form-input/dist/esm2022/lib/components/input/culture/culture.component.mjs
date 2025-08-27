import { Component } from '@angular/core';
import { CamAbstractInputComponent } from '../../abstract.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import * as i0 from "@angular/core";
export class CultureComponent extends CamAbstractInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VsdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY3VsdHVyZS9jdWx0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkxQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFTbkUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHlCQUF1QztJQUMzRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQzsrR0FIVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixtR0NkN0Isa0VBQ0EsMEREV1ksaUJBQWlCOzs0RkFFaEIsZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNBLGtCQUFrQixjQUdkLElBQUksV0FDUCxDQUFDLGlCQUFpQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Q3VsdHVyZSB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcblxuaW1wb3J0IHsgQ2FtQWJzdHJhY3RJbnB1dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4uL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuc2VsZWN0b3I6ICd0YS1pbnB1dC1jdWx0dXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdWx0dXJlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtEcm9wZG93bkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEN1bHR1cmVDb21wb25lbnQgZXh0ZW5kcyBDYW1BYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0Q3VsdHVyZT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iLCI8dGEtaW5wdXQtZHJvcGRvd24gW2lucHV0XT1cInRoaXMuaW5wdXRcIj48L3RhLWlucHV0LWRyb3Bkb3duPlxuIl19