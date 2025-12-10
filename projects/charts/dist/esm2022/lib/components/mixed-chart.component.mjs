import { Component } from "@angular/core";
import { BaseChartComponent } from "./base-chart/base-chart.component";
import * as i0 from "@angular/core";
export class TaChartMixedComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = "scatter";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartMixedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaChartMixedComponent, isStandalone: true, selector: "ta-mixed-chart", usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaChartMixedComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-mixed-chart", standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4ZWQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL21peGVkLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGtCQUE2QjtJQUN0RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQzsrR0FMVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixpR0NYbEMsd0tBSUE7OzRGRE9hLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxnQkFBZ0IsY0FHZCxJQUFJLFdBQ1AsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEJhc2VDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLW1peGVkLWNoYXJ0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUNoYXJ0TWl4ZWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQ8XCJzY2F0dGVyXCI+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHlwZSA9IFwic2NhdHRlclwiO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCIgW3N0eWxlLmhlaWdodC5weF09XCJ0aGlzLmNoYXJ0SGVpZ2h0XCI+XG4gIDwhLS0gPGNhbnZhcyBbYXR0ci5pZF09XCJ0aGlzLmlkXCI+PC9jYW52YXM+IC0tPlxuICA8Y2FudmFzICNjaGFydENhbnZhcz48L2NhbnZhcz5cbjwvZGl2PlxuIl19