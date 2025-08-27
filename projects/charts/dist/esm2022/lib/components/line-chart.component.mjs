import { Component } from '@angular/core';
import { BaseChartComponent } from './base-chart/base-chart.component';
import * as i0 from "@angular/core";
export class CamChartLineComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = 'line';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartLineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamChartLineComponent, isStandalone: true, selector: "ta-line-chart", usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartLineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-line-chart', standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGluZS1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBU3ZFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxrQkFBMEI7SUFDbkU7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3JCLENBQUM7K0dBTFUscUJBQXFCO21HQUFyQixxQkFBcUIsZ0dDWGxDLHdLQUlBOzs0RkRPYSxxQkFBcUI7a0JBUGpDLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWxpbmUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1DaGFydExpbmVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQ8J2xpbmUnPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSAnbGluZSc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGFydC1jb250YWluZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cInRoaXMuY2hhcnRIZWlnaHRcIj5cbiAgPCEtLSA8Y2FudmFzIFthdHRyLmlkXT1cInRoaXMuaWRcIj48L2NhbnZhcz4gLS0+XG4gIDxjYW52YXMgI2NoYXJ0Q2FudmFzPjwvY2FudmFzPlxuPC9kaXY+XG4iXX0=