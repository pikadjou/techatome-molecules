import { Component } from "@angular/core";
import { BaseChartComponent } from "./base-chart/base-chart.component";
import * as i0 from "@angular/core";
export class TaChartLineComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = "line";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartLineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaChartLineComponent, isStandalone: true, selector: "ta-line-chart", usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartLineComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-line-chart", standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvbGluZS1jaGFydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBU3ZFLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxrQkFBMEI7SUFDbEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3JCLENBQUM7K0dBTFUsb0JBQW9CO21HQUFwQixvQkFBb0IsZ0dDWGpDLHdLQUlBOzs0RkRPYSxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQmFzZUNoYXJ0Q29tcG9uZW50IH0gZnJvbSBcIi4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtbGluZS1jaGFydFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFDaGFydExpbmVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQ8XCJsaW5lXCI+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9IFwibGluZVwiO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCIgW3N0eWxlLmhlaWdodC5weF09XCJ0aGlzLmNoYXJ0SGVpZ2h0XCI+XG4gIDwhLS0gPGNhbnZhcyBbYXR0ci5pZF09XCJ0aGlzLmlkXCI+PC9jYW52YXM+IC0tPlxuICA8Y2FudmFzICNjaGFydENhbnZhcz48L2NhbnZhcz5cbjwvZGl2PlxuIl19