import { Component } from "@angular/core";
import { BaseChartComponent } from "./base-chart/base-chart.component";
import * as i0 from "@angular/core";
export class TaChartBarComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = "bar";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaChartBarComponent, isStandalone: true, selector: "ta-bar-chart", usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartBarComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-bar-chart", standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9iYXItY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQVN2RSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsa0JBQXlCO0lBQ2hFO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOytHQUxVLG1CQUFtQjttR0FBbkIsbUJBQW1CLCtGQ1hoQyx3S0FJQTs7NEZET2EsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLGNBQWMsY0FHWixJQUFJLFdBQ1AsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWJhci1jaGFydFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFDaGFydEJhckNvbXBvbmVudCBleHRlbmRzIEJhc2VDaGFydENvbXBvbmVudDxcImJhclwiPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSBcImJhclwiO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCIgW3N0eWxlLmhlaWdodC5weF09XCJ0aGlzLmNoYXJ0SGVpZ2h0XCI+XG4gIDwhLS0gPGNhbnZhcyBbYXR0ci5pZF09XCJ0aGlzLmlkXCI+PC9jYW52YXM+IC0tPlxuICA8Y2FudmFzICNjaGFydENhbnZhcz48L2NhbnZhcz5cbjwvZGl2PlxuIl19