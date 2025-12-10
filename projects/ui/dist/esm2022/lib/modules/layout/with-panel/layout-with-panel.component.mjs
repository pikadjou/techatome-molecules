import { NgClass } from "@angular/common";
import { Component, Input, ViewChild, } from "@angular/core";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import * as i0 from "@angular/core";
export class LayoutWithPanelComponent {
    constructor() {
        this.drawer = null;
    }
    ngAfterViewInit() {
        this.manageDrawer();
    }
    ngOnChanges(changes) {
        this.manageDrawer();
    }
    manageDrawer() {
        if (this.open === true) {
            this.drawer?.open();
        }
        else {
            this.drawer?.close();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutWithPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LayoutWithPanelComponent, isStandalone: true, selector: "ta-layout-with-panel", inputs: { open: "open" }, viewQueries: [{ propertyName: "drawer", first: true, predicate: ["drawer"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutWithPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-layout-with-panel", standalone: true, imports: [NgClass, MatDrawer, MatDrawerContainer], template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { open: [{
                type: Input
            }], drawer: [{
                type: ViewChild,
                args: ["drawer"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXdpdGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2xheW91dC93aXRoLXBhbmVsL2xheW91dC13aXRoLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvd2l0aC1wYW5lbC9sYXlvdXQtd2l0aC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUVMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFTMUUsTUFBTSxPQUFPLHdCQUF3QjtJQU1uQztRQUZxQixXQUFNLEdBQXFCLElBQUksQ0FBQztJQUV0QyxDQUFDO0lBRVQsZUFBZTtRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNNLFdBQVcsQ0FBQyxPQUFzQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDOytHQXJCVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixpT0NsQnJDLG1XQVNBLDJMRE9ZLE9BQU8sb0ZBQUUsU0FBUyxxUEFBRSxrQkFBa0I7OzRGQUVyQyx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0Usc0JBQXNCLGNBR3BCLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUM7d0RBSWpELElBQUk7c0JBREgsS0FBSztnQkFHZSxNQUFNO3NCQUExQixTQUFTO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXREcmF3ZXIsIE1hdERyYXdlckNvbnRhaW5lciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1sYXlvdXQtd2l0aC1wYW5lbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xheW91dC13aXRoLXBhbmVsLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sYXlvdXQtd2l0aC1wYW5lbC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE1hdERyYXdlciwgTWF0RHJhd2VyQ29udGFpbmVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0V2l0aFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgb3BlbiE6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZChcImRyYXdlclwiKSBkcmF3ZXI6IE1hdERyYXdlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubWFuYWdlRHJhd2VyKCk7XG4gIH1cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm1hbmFnZURyYXdlcigpO1xuICB9XG5cbiAgcHVibGljIG1hbmFnZURyYXdlcigpIHtcbiAgICBpZiAodGhpcy5vcGVuID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmRyYXdlcj8ub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRyYXdlcj8uY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZHJhd2VyLWNvbnRhaW5lciBoYXNCYWNrZHJvcCBbbmdDbGFzc109XCJ7IGlzT3BlbjogdGhpcy5vcGVuIH1cIj5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBbcG9zaXRpb25dPVwiJ2VuZCdcIiBjbGFzcz1cImRyYXdlclwiPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInRhLWxheW91dC1wYW5lbFwiPjwvbmctY29udGVudD5cbiAgPC9tYXQtZHJhd2VyPlxuXG4gIDxkaXYgY2xhc3M9XCJ0YS1sYXlvdXQtY29udGVudC1jb250YWluZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ0YS1sYXlvdXQtY29udGVudFwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L21hdC1kcmF3ZXItY29udGFpbmVyPlxuIl19