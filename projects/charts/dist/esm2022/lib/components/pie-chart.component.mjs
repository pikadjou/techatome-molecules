import { Component, Input } from '@angular/core';
import { BaseChartComponent } from './base-chart/base-chart.component';
import * as i0 from "@angular/core";
export class TaChartPieComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = 'pie';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartPieComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaChartPieComponent, isStandalone: true, selector: "ta-pie-chart", inputs: { radius: "radius" }, usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartPieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-pie-chart', standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { radius: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9waWUtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGtCQUF5QjtJQUloRTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzsrR0FSVSxtQkFBbUI7bUdBQW5CLG1CQUFtQiw2SENYaEMsd0tBSUE7OzRGRE9hLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQLEVBQUU7d0RBSVgsTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1waWUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUNoYXJ0UGllQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNoYXJ0Q29tcG9uZW50PCdwaWUnPiB7XG4gIEBJbnB1dCgpXG4gIHJhZGl1cz86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ3BpZSc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGFydC1jb250YWluZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cInRoaXMuY2hhcnRIZWlnaHRcIj5cbiAgPCEtLSA8Y2FudmFzIFthdHRyLmlkXT1cInRoaXMuaWRcIj48L2NhbnZhcz4gLS0+XG4gIDxjYW52YXMgI2NoYXJ0Q2FudmFzPjwvY2FudmFzPlxuPC9kaXY+XG4iXX0=