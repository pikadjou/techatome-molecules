import { NgClass } from "@angular/common";
import { Component, input, ViewChild, } from "@angular/core";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import * as i0 from "@angular/core";
export class LayoutWithPanelComponent {
    constructor() {
        this.open = input.required();
        this.drawer = null;
    }
    ngAfterViewInit() {
        this.manageDrawer();
    }
    ngOnChanges(changes) {
        this.manageDrawer();
    }
    manageDrawer() {
        if (this.open() === true) {
            this.drawer?.open();
        }
        else {
            this.drawer?.close();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutWithPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: LayoutWithPanelComponent, isStandalone: true, selector: "ta-layout-with-panel", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: true, transformFunction: null } }, viewQueries: [{ propertyName: "drawer", first: true, predicate: ["drawer"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutWithPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-layout-with-panel", standalone: true, imports: [NgClass, MatDrawer, MatDrawerContainer], template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { drawer: [{
                type: ViewChild,
                args: ["drawer"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXdpdGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2xheW91dC93aXRoLXBhbmVsL2xheW91dC13aXRoLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvd2l0aC1wYW5lbC9sYXlvdXQtd2l0aC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUVMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFTMUUsTUFBTSxPQUFPLHdCQUF3QjtJQUtuQztRQUpBLFNBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFXLENBQUM7UUFFWixXQUFNLEdBQXFCLElBQUksQ0FBQztJQUV0QyxDQUFDO0lBRVQsZUFBZTtRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNNLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7K0dBcEJVLHdCQUF3QjttR0FBeEIsd0JBQXdCLHVVQ2xCckMsbVdBU0EsMkxET1ksT0FBTyxvRkFBRSxTQUFTLHFQQUFFLGtCQUFrQjs7NEZBRXJDLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxzQkFBc0IsY0FHcEIsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQzt3REFLNUIsTUFBTTtzQkFBMUIsU0FBUzt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgaW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0RHJhd2VyLCBNYXREcmF3ZXJDb250YWluZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdlwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbGF5b3V0LXdpdGgtcGFuZWxcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9sYXlvdXQtd2l0aC1wYW5lbC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbGF5b3V0LXdpdGgtcGFuZWwuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0NsYXNzLCBNYXREcmF3ZXIsIE1hdERyYXdlckNvbnRhaW5lcl0sXG59KVxuZXhwb3J0IGNsYXNzIExheW91dFdpdGhQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIG9wZW4gPSBpbnB1dC5yZXF1aXJlZDxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoXCJkcmF3ZXJcIikgZHJhd2VyOiBNYXREcmF3ZXIgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm1hbmFnZURyYXdlcigpO1xuICB9XG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5tYW5hZ2VEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBtYW5hZ2VEcmF3ZXIoKSB7XG4gICAgaWYgKHRoaXMub3BlbigpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRyYXdlcj8ub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdlcj8uY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZHJhd2VyLWNvbnRhaW5lciBoYXNCYWNrZHJvcCBbbmdDbGFzc109XCJ7IGlzT3BlbjogdGhpcy5vcGVuIH1cIj5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBbcG9zaXRpb25dPVwiJ2VuZCdcIiBjbGFzcz1cImRyYXdlclwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInRhLWxheW91dC1wYW5lbFwiPjwvbmctY29udGVudD5cbiAgPC9tYXQtZHJhd2VyPlxuXG4gIDxkaXYgY2xhc3M9XCJ0YS1sYXlvdXQtY29udGVudC1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ0YS1sYXlvdXQtY29udGVudFwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L21hdC1kcmF3ZXItY29udGFpbmVyPlxuIl19