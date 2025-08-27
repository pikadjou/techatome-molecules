import { Component } from '@angular/core';
import { CamAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
export class TaBaseComponent extends CamAbstractComponent {
    constructor() {
        super();
    }
    trackById(_, item) {
        return item.id;
    }
    trackByKey(_, item) {
        return item.key;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TaBaseComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaBaseComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYWJzdHJhY3QvYmFzZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUczRCxNQUFNLE9BQWdCLGVBQWdCLFNBQVEsb0JBQW9CO0lBQ2hFO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRU0sU0FBUyxDQUFDLENBQU0sRUFBRSxJQUE2QjtRQUNwRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxDQUFNLEVBQUUsSUFBcUI7UUFDN0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7K0dBWG1CLGVBQWU7bUdBQWYsZUFBZSwyRUFEZCxFQUFFOzs0RkFDSCxlQUFlO2tCQURwQyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbUFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdENvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogJycgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUJhc2VDb21wb25lbnQgZXh0ZW5kcyBDYW1BYnN0cmFjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgdHJhY2tCeUlkKF86IGFueSwgaXRlbTogeyBpZDogbnVtYmVyIHwgc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuXG4gIHB1YmxpYyB0cmFja0J5S2V5KF86IGFueSwgaXRlbTogeyBrZXk6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIGl0ZW0ua2V5O1xuICB9XG59XG4iXX0=