import { Component } from '@angular/core';
import { TaAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
export class TaBaseComponent extends TaAbstractComponent {
    constructor() {
        super();
    }
    trackById(_, item) {
        return item.id;
    }
    trackByKey(_, item) {
        return item.key;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaBaseComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYWJzdHJhY3QvYmFzZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUcxRCxNQUFNLE9BQWdCLGVBQWdCLFNBQVEsbUJBQW1CO0lBQy9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRU0sU0FBUyxDQUFDLENBQU0sRUFBRSxJQUE2QjtRQUNwRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxDQUFNLEVBQUUsSUFBcUI7UUFDN0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7K0dBWG1CLGVBQWU7bUdBQWYsZUFBZSwyRUFEZCxFQUFFOzs0RkFDSCxlQUFlO2tCQURwQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRhQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0Q29tcG9uZW50JztcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQmFzZUNvbXBvbmVudCBleHRlbmRzIFRhQWJzdHJhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHRyYWNrQnlJZChfOiBhbnksIGl0ZW06IHsgaWQ6IG51bWJlciB8IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cblxuICBwdWJsaWMgdHJhY2tCeUtleShfOiBhbnksIGl0ZW06IHsga2V5OiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBpdGVtLmtleTtcbiAgfVxufVxuIl19