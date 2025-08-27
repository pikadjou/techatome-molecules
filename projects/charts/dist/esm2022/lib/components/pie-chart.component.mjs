import { Component, Input } from '@angular/core';
import { BaseChartComponent } from './base-chart/base-chart.component';
import * as i0 from "@angular/core";
export class CamChartPieComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = 'pie';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartPieComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamChartPieComponent, isStandalone: true, selector: "ta-pie-chart", inputs: { radius: "radius" }, usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartPieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-pie-chart', standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { radius: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9waWUtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGtCQUF5QjtJQUlqRTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzsrR0FSVSxvQkFBb0I7bUdBQXBCLG9CQUFvQiw2SENYakMsd0tBSUE7OzRGRE9hLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQLEVBQUU7d0RBSVgsTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1waWUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1DaGFydFBpZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudDwncGllJz4ge1xuICBASW5wdXQoKVxuICByYWRpdXM/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9ICdwaWUnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCIgW3N0eWxlLmhlaWdodC5weF09XCJ0aGlzLmNoYXJ0SGVpZ2h0XCI+XG4gIDwhLS0gPGNhbnZhcyBbYXR0ci5pZF09XCJ0aGlzLmlkXCI+PC9jYW52YXM+IC0tPlxuICA8Y2FudmFzICNjaGFydENhbnZhcz48L2NhbnZhcz5cbjwvZGl2PlxuIl19