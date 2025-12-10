import { Component, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class LayoutContentComponent {
    constructor() {
        this.autoHeight = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: LayoutContentComponent, isStandalone: true, selector: "ta-layout-content", inputs: { autoHeight: "autoHeight" }, ngImport: i0, template: "<div class=\"layout-content\" [class.auto]=\"this.autoHeight\">\n  <ng-content></ng-content>\n</div>\n", styles: [".layout-content{position:relative;margin:8px;min-height:calc(100vh - 80px)}.layout-content.auto{min-height:auto;margin:0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LayoutContentComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-layout-content", standalone: true, template: "<div class=\"layout-content\" [class.auto]=\"this.autoHeight\">\n  <ng-content></ng-content>\n</div>\n", styles: [".layout-content{position:relative;margin:8px;min-height:calc(100vh - 80px)}.layout-content.auto{min-height:auto;margin:0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { autoHeight: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2xheW91dC9sYXlvdXQtY29udGVudC9sYXlvdXQtY29udGVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1jb250ZW50L2xheW91dC1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVFqRCxNQUFNLE9BQU8sc0JBQXNCO0lBSWpDO1FBRkEsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUViLENBQUM7K0dBSkwsc0JBQXNCO21HQUF0QixzQkFBc0IsbUhDUm5DLHdHQUdBOzs0RkRLYSxzQkFBc0I7a0JBTmxDLFNBQVM7K0JBQ0UsbUJBQW1CLGNBR2pCLElBQUk7d0RBSWhCLFVBQVU7c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbGF5b3V0LWNvbnRlbnRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9sYXlvdXQtY29udGVudC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbGF5b3V0LWNvbnRlbnQuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dENvbnRlbnRDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBhdXRvSGVpZ2h0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIiwiPGRpdiBjbGFzcz1cImxheW91dC1jb250ZW50XCIgW2NsYXNzLmF1dG9dPVwidGhpcy5hdXRvSGVpZ2h0XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19