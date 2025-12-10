import { Component } from "@angular/core";
import { TaAbstractInputComponent } from "../../abstract.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import * as i0 from "@angular/core";
export class CultureComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CultureComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CultureComponent, isStandalone: true, selector: "ta-input-culture", usesInheritance: true, ngImport: i0, template: "<ta-input-dropdown [input]=\"this.input\"></ta-input-dropdown>\n", styles: [""], dependencies: [{ kind: "component", type: DropdownComponent, selector: "ta-input-dropdown", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CultureComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-input-culture", standalone: true, imports: [DropdownComponent], template: "<ta-input-dropdown [input]=\"this.input\"></ta-input-dropdown>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VsdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY3VsdHVyZS9jdWx0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jdWx0dXJlL2N1bHR1cmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkxQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFTbkUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHdCQUFzQztJQUMxRTtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQzsrR0FIVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQixtR0NkN0Isa0VBQ0EsMEREV1ksaUJBQWlCOzs0RkFFaEIsZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNFLGtCQUFrQixjQUdoQixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IElucHV0Q3VsdHVyZSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gXCIuLi9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWlucHV0LWN1bHR1cmVcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdWx0dXJlLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9jdWx0dXJlLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRHJvcGRvd25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDdWx0dXJlQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0Q3VsdHVyZT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iLCI8dGEtaW5wdXQtZHJvcGRvd24gW2lucHV0XT1cInRoaXMuaW5wdXRcIj48L3RhLWlucHV0LWRyb3Bkb3duPlxuIl19