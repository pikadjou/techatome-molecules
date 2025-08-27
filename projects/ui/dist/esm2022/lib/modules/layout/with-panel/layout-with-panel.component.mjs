import { NgClass } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutWithPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutWithPanelComponent, isStandalone: true, selector: "ta-layout-with-panel", inputs: { open: "open" }, viewQueries: [{ propertyName: "drawer", first: true, predicate: ["drawer"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutWithPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-with-panel', standalone: true, imports: [NgClass, MatDrawer, MatDrawerContainer], template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { open: [{
                type: Input
            }], drawer: [{
                type: ViewChild,
                args: ['drawer']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXdpdGgtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2xheW91dC93aXRoLXBhbmVsL2xheW91dC13aXRoLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9sYXlvdXQvd2l0aC1wYW5lbC9sYXlvdXQtd2l0aC1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUE0QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQVMxRSxNQUFNLE9BQU8sd0JBQXdCO0lBTW5DO1FBRnFCLFdBQU0sR0FBcUIsSUFBSSxDQUFDO0lBRXRDLENBQUM7SUFFVCxlQUFlO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ00sV0FBVyxDQUFDLE9BQXNCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7K0dBckJVLHdCQUF3QjttR0FBeEIsd0JBQXdCLGlPQ1hyQyxtV0FTQSwyTERBWSxPQUFPLG9GQUFFLFNBQVMscVBBQUUsa0JBQWtCOzs0RkFFckMsd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNBLHNCQUFzQixjQUdsQixJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixDQUFDO3dEQUlqRCxJQUFJO3NCQURILEtBQUs7Z0JBR2UsTUFBTTtzQkFBMUIsU0FBUzt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RHJhd2VyLCBNYXREcmF3ZXJDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJ3RhLWxheW91dC13aXRoLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xheW91dC13aXRoLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGF5b3V0LXdpdGgtcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nQ2xhc3MsIE1hdERyYXdlciwgTWF0RHJhd2VyQ29udGFpbmVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0V2l0aFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgb3BlbiE6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnZHJhd2VyJykgZHJhd2VyOiBNYXREcmF3ZXIgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm1hbmFnZURyYXdlcigpO1xuICB9XG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5tYW5hZ2VEcmF3ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBtYW5hZ2VEcmF3ZXIoKSB7XG4gICAgaWYgKHRoaXMub3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kcmF3ZXI/Lm9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcmF3ZXI/LmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCI8bWF0LWRyYXdlci1jb250YWluZXIgaGFzQmFja2Ryb3AgW25nQ2xhc3NdPVwieyBpc09wZW46IHRoaXMub3BlbiB9XCI+XG4gIDxtYXQtZHJhd2VyICNkcmF3ZXIgW3Bvc2l0aW9uXT1cIidlbmQnXCIgY2xhc3M9XCJkcmF3ZXJcIj5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ0YS1sYXlvdXQtcGFuZWxcIj48L25nLWNvbnRlbnQ+XG4gIDwvbWF0LWRyYXdlcj5cblxuICA8ZGl2IGNsYXNzPVwidGEtbGF5b3V0LWNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidGEtbGF5b3V0LWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiJdfQ==