import { Component, input, viewChild, } from "@angular/core";
import Chart from "chart.js/auto";
import deepEqual from "fast-deep-equal";
import * as i0 from "@angular/core";
export class BaseChartComponent {
    // readonly id = 'MyChart' + Math.random();
    constructor() {
        this.labels = input.required();
        this.datasets = input.required();
        this.chartOptions = input({});
        this.chartHeight = input();
        this.chartCanvas = viewChild.required("chartCanvas");
        this.chart = null;
    }
    ngAfterViewInit() {
        this.createChart();
    }
    ngOnDestroy() {
        this.chart?.destroy();
        this.chart = null;
    }
    ngOnChanges(changes) {
        if (!deepEqual(changes["labels"]?.previousValue, changes["labels"]?.currentValue) ||
            !deepEqual(changes["datasets"]?.previousValue, changes["datasets"]?.currentValue)) {
            this.refreshChart();
        }
    }
    createChart() {
        this.chart = new Chart(this.chartCanvas().nativeElement, {
            type: this.type,
            options: this.chartOptions(),
            data: {
                labels: this.labels(),
                datasets: this.datasets(),
            },
        });
    }
    refreshChart() {
        if (!this.chart) {
            return;
        }
        this.chart.data.labels = this.labels();
        this.chart.data.datasets = this.datasets();
        this.chart?.update();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BaseChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "18.2.14", type: BaseChartComponent, isStandalone: true, selector: "ng-component", inputs: { labels: { classPropertyName: "labels", publicName: "labels", isSignal: true, isRequired: true, transformFunction: null }, datasets: { classPropertyName: "datasets", publicName: "datasets", isSignal: true, isRequired: true, transformFunction: null }, chartOptions: { classPropertyName: "chartOptions", publicName: "chartOptions", isSignal: true, isRequired: false, transformFunction: null }, chartHeight: { classPropertyName: "chartHeight", publicName: "chartHeight", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "chartCanvas", first: true, predicate: ["chartCanvas"], descendants: true, isSignal: true }], usesOnChanges: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BaseChartComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, template: "" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUlULEtBQUssRUFDTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFRdkIsT0FBTyxLQUFLLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDOztBQUd4QyxNQUFNLE9BQWdCLGtCQUFrQjtJQW9CdEMsMkNBQTJDO0lBRTNDO1FBaEJBLFdBQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFZLENBQUM7UUFFcEMsYUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQW9DLENBQUM7UUFFOUQsaUJBQVksR0FBRyxLQUFLLENBQWdDLEVBQUUsQ0FBQyxDQUFDO1FBRXhELGdCQUFXLEdBQUcsS0FBSyxFQUFVLENBQUM7UUFFOUIsZ0JBQVcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFnQyxhQUFhLENBQUMsQ0FBQztRQUl4RSxVQUFLLEdBQTJDLElBQUksQ0FBQztJQUk3QyxDQUFDO0lBQ2hCLGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFDRSxDQUFDLFNBQVMsQ0FDUixPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUNoQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxDQUNoQztZQUNELENBQUMsU0FBUyxDQUNSLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxhQUFhLEVBQ2xDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxZQUFZLENBQ2xDLEVBQ0QsQ0FBQztZQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0gsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ3ZELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7YUFDMUI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzsrR0FqRW1CLGtCQUFrQjttR0FBbEIsa0JBQWtCLHN2QkFEQyxFQUFFOzs0RkFDckIsa0JBQWtCO2tCQUR2QyxTQUFTO21CQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG4gIGlucHV0LFxuICB2aWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7XG4gIENoYXJ0Q29uZmlndXJhdGlvbixcbiAgQ2hhcnREYXRhc2V0LFxuICBDaGFydFR5cGUsXG4gIERlZmF1bHREYXRhUG9pbnQsXG59IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gXCJmYXN0LWRlZXAtZXF1YWxcIjtcblxuQENvbXBvbmVudCh7IHN0YW5kYWxvbmU6IHRydWUsIHRlbXBsYXRlOiBcIlwiIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNoYXJ0Q29tcG9uZW50PFxuICBUVHlwZSBleHRlbmRzIENoYXJ0VHlwZSA9IENoYXJ0VHlwZSxcbiAgVERhdGEgPSBEZWZhdWx0RGF0YVBvaW50PFRUeXBlPixcbiAgVExhYmVsID0gdW5rbm93blxuPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveVxue1xuICBsYWJlbHMgPSBpbnB1dC5yZXF1aXJlZDxUTGFiZWxbXT4oKTtcblxuICBkYXRhc2V0cyA9IGlucHV0LnJlcXVpcmVkPENoYXJ0RGF0YXNldDxDaGFydFR5cGUsIFREYXRhPltdPigpO1xuXG4gIGNoYXJ0T3B0aW9ucyA9IGlucHV0PENoYXJ0Q29uZmlndXJhdGlvbltcIm9wdGlvbnNcIl0+KHt9KTtcblxuICBjaGFydEhlaWdodCA9IGlucHV0PG51bWJlcj4oKTtcblxuICBjaGFydENhbnZhcyA9IHZpZXdDaGlsZC5yZXF1aXJlZDxFbGVtZW50UmVmPEhUTUxDYW52YXNFbGVtZW50Pj4oXCJjaGFydENhbnZhc1wiKTtcblxuICBwdWJsaWMgdHlwZSE6IFRUeXBlO1xuXG4gIHB1YmxpYyBjaGFydDogQ2hhcnQ8Q2hhcnRUeXBlLCBURGF0YSwgVExhYmVsPiB8IG51bGwgPSBudWxsO1xuXG4gIC8vIHJlYWRvbmx5IGlkID0gJ015Q2hhcnQnICsgTWF0aC5yYW5kb20oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUNoYXJ0KCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFydD8uZGVzdHJveSgpO1xuICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoXG4gICAgICAhZGVlcEVxdWFsKFxuICAgICAgICBjaGFuZ2VzW1wibGFiZWxzXCJdPy5wcmV2aW91c1ZhbHVlLFxuICAgICAgICBjaGFuZ2VzW1wibGFiZWxzXCJdPy5jdXJyZW50VmFsdWVcbiAgICAgICkgfHxcbiAgICAgICFkZWVwRXF1YWwoXG4gICAgICAgIGNoYW5nZXNbXCJkYXRhc2V0c1wiXT8ucHJldmlvdXNWYWx1ZSxcbiAgICAgICAgY2hhbmdlc1tcImRhdGFzZXRzXCJdPy5jdXJyZW50VmFsdWVcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMucmVmcmVzaENoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNoYXJ0KCkge1xuICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5jaGFydENhbnZhcygpLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY2hhcnRPcHRpb25zKCksXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHMoKSxcbiAgICAgICAgZGF0YXNldHM6IHRoaXMuZGF0YXNldHMoKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaENoYXJ0KCkge1xuICAgIGlmICghdGhpcy5jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuZGF0YS5sYWJlbHMgPSB0aGlzLmxhYmVscygpO1xuICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IHRoaXMuZGF0YXNldHMoKTtcblxuICAgIHRoaXMuY2hhcnQ/LnVwZGF0ZSgpO1xuICB9XG59XG4iXX0=