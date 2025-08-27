import { Component } from '@angular/core';
import { BaseChartComponent } from './base-chart/base-chart.component';
import * as i0 from "@angular/core";
export class CamChartMixedComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = 'scatter';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartMixedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamChartMixedComponent, isStandalone: true, selector: "ta-mixed-chart", usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartMixedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-mixed-chart', standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4ZWQtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL21peGVkLWNoYXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGtCQUE2QjtJQUN2RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQzsrR0FMVSxzQkFBc0I7bUdBQXRCLHNCQUFzQixpR0NYbkMsd0tBSUE7OzRGRE9hLHNCQUFzQjtrQkFQbEMsU0FBUzsrQkFDRSxnQkFBZ0IsY0FHZCxJQUFJLFdBQ1AsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCYXNlQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY2hhcnQvYmFzZS1jaGFydC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1taXhlZC1jaGFydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYXNlLWNoYXJ0L2Jhc2UtY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG59KVxuZXhwb3J0IGNsYXNzIENhbUNoYXJ0TWl4ZWRDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ2hhcnRDb21wb25lbnQ8J3NjYXR0ZXInPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnR5cGUgPSAnc2NhdHRlcic7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJjaGFydC1jb250YWluZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cInRoaXMuY2hhcnRIZWlnaHRcIj5cbiAgPCEtLSA8Y2FudmFzIFthdHRyLmlkXT1cInRoaXMuaWRcIj48L2NhbnZhcz4gLS0+XG4gIDxjYW52YXMgI2NoYXJ0Q2FudmFzPjwvY2FudmFzPlxuPC9kaXY+XG4iXX0=