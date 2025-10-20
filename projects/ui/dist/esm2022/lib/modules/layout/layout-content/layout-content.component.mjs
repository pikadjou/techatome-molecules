import { Component, Input } from '@angular/core';
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
            args: [{ selector: 'ta-layout-content', standalone: true, template: "<div class=\"layout-content\" [class.auto]=\"this.autoHeight\">\n  <ng-content></ng-content>\n</div>\n", styles: [".layout-content{position:relative;margin:8px;min-height:calc(100vh - 80px)}.layout-content.auto{min-height:auto;margin:0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { autoHeight: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL2xheW91dC9sYXlvdXQtY29udGVudC9sYXlvdXQtY29udGVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1jb250ZW50L2xheW91dC1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVFqRCxNQUFNLE9BQU8sc0JBQXNCO0lBSWpDO1FBRkEsZUFBVSxHQUFZLEtBQUssQ0FBQztJQUViLENBQUM7K0dBSkwsc0JBQXNCO21HQUF0QixzQkFBc0IsbUhDUm5DLHdHQUdBOzs0RkRLYSxzQkFBc0I7a0JBTmxDLFNBQVM7K0JBQ0EsbUJBQW1CLGNBR2YsSUFBSTt3REFJaEIsVUFBVTtzQkFEVCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOiAndGEtbGF5b3V0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGF5b3V0LWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sYXlvdXQtY29udGVudC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRDb250ZW50Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgYXV0b0hlaWdodDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiIsIjxkaXYgY2xhc3M9XCJsYXlvdXQtY29udGVudFwiIFtjbGFzcy5hdXRvXT1cInRoaXMuYXV0b0hlaWdodFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==