import { Component } from '@angular/core';
import { BaseChartComponent } from './base-chart/base-chart.component';
import * as i0 from "@angular/core";
export class CamChartBarComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = 'bar';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamChartBarComponent, isStandalone: true, selector: "ta-bar-chart", usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-bar-chart', standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9iYXItY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQVN2RSxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQXlCO0lBQ2pFO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOytHQUxVLG9CQUFvQjttR0FBcEIsb0JBQW9CLCtGQ1hqQyx3S0FJQTs7NEZET2Esb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLGNBQWMsY0FHWixJQUFJLFdBQ1AsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1iYXItY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1DaGFydEJhckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudDwnYmFyJz4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlID0gJ2Jhcic7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGFydC1jb250YWluZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cInRoaXMuY2hhcnRIZWlnaHRcIj5cbiAgPCEtLSA8Y2FudmFzIFthdHRyLmlkXT1cInRoaXMuaWRcIj48L2NhbnZhcz4gLS0+XG4gIDxjYW52YXMgI2NoYXJ0Q2FudmFzPjwvY2FudmFzPlxuPC9kaXY+XG4iXX0=