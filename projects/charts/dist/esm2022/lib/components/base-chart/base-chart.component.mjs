import { Component, Input, ViewChild, } from "@angular/core";
import Chart from "chart.js/auto";
import deepEqual from "fast-deep-equal";
import * as i0 from "@angular/core";
export class BaseChartComponent {
    // readonly id = 'MyChart' + Math.random();
    constructor() {
        this.chartOptions = {};
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
        this.chart = new Chart(this.chartCanvas.nativeElement.getContext("2d"), {
            type: this.type,
            options: this.chartOptions,
            data: {
                labels: this.labels,
                datasets: this.datasets,
            },
        });
    }
    refreshChart() {
        if (!this.chart) {
            return;
        }
        this.chart.data.labels = this.labels;
        this.chart.data.datasets = this.datasets;
        this.chart?.update();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BaseChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BaseChartComponent, selector: "ng-component", inputs: { labels: "labels", datasets: "datasets", chartOptions: "chartOptions", chartHeight: "chartHeight" }, viewQueries: [{ propertyName: "chartCanvas", first: true, predicate: ["chartCanvas"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BaseChartComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [], propDecorators: { labels: [{
                type: Input
            }], datasets: [{
                type: Input
            }], chartOptions: [{
                type: Input
            }], chartHeight: [{
                type: Input
            }], chartCanvas: [{
                type: ViewChild,
                args: ["chartCanvas"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFRdkIsT0FBTyxLQUFLLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDOztBQUd4QyxNQUFNLE9BQWdCLGtCQUFrQjtJQXNCdEMsMkNBQTJDO0lBRTNDO1FBWlMsaUJBQVksR0FBa0MsRUFBRSxDQUFDO1FBUW5ELFVBQUssR0FBMkMsSUFBSSxDQUFDO0lBSTdDLENBQUM7SUFDaEIsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUNFLENBQUMsU0FBUyxDQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxhQUFhLEVBQ2hDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLENBQ2hDO1lBQ0QsQ0FBQyxTQUFTLENBQ1IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWEsRUFDbEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVksQ0FDbEMsRUFDRCxDQUFDO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDMUIsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzsrR0FuRW1CLGtCQUFrQjttR0FBbEIsa0JBQWtCLG1TQURqQixFQUFFOzs0RkFDSCxrQkFBa0I7a0JBRHZDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dEQVF6QixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUdHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSztnQkFFb0IsV0FBVztzQkFBcEMsU0FBUzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7XG4gIENoYXJ0Q29uZmlndXJhdGlvbixcbiAgQ2hhcnREYXRhc2V0LFxuICBDaGFydFR5cGUsXG4gIERlZmF1bHREYXRhUG9pbnQsXG59IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gXCJmYXN0LWRlZXAtZXF1YWxcIjtcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiBcIlwiIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNoYXJ0Q29tcG9uZW50PFxuICBUVHlwZSBleHRlbmRzIENoYXJ0VHlwZSA9IENoYXJ0VHlwZSxcbiAgVERhdGEgPSBEZWZhdWx0RGF0YVBvaW50PFRUeXBlPixcbiAgVExhYmVsID0gdW5rbm93blxuPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveVxue1xuICBASW5wdXQoKVxuICBsYWJlbHMhOiBUTGFiZWxbXTtcblxuICBASW5wdXQoKVxuICBkYXRhc2V0cyE6IENoYXJ0RGF0YXNldDxDaGFydFR5cGUsIFREYXRhPltdO1xuXG4gIEBJbnB1dCgpIGNoYXJ0T3B0aW9uczogQ2hhcnRDb25maWd1cmF0aW9uW1wib3B0aW9uc1wiXSA9IHt9O1xuXG4gIEBJbnB1dCgpIGNoYXJ0SGVpZ2h0PzogbnVtYmVyO1xuXG4gIEBWaWV3Q2hpbGQoXCJjaGFydENhbnZhc1wiKSBjaGFydENhbnZhcyE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIHR5cGUhOiBUVHlwZTtcblxuICBwdWJsaWMgY2hhcnQ6IENoYXJ0PENoYXJ0VHlwZSwgVERhdGEsIFRMYWJlbD4gfCBudWxsID0gbnVsbDtcblxuICAvLyByZWFkb25seSBpZCA9ICdNeUNoYXJ0JyArIE1hdGgucmFuZG9tKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hhcnQ/LmRlc3Ryb3koKTtcbiAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKFxuICAgICAgIWRlZXBFcXVhbChcbiAgICAgICAgY2hhbmdlc1tcImxhYmVsc1wiXT8ucHJldmlvdXNWYWx1ZSxcbiAgICAgICAgY2hhbmdlc1tcImxhYmVsc1wiXT8uY3VycmVudFZhbHVlXG4gICAgICApIHx8XG4gICAgICAhZGVlcEVxdWFsKFxuICAgICAgICBjaGFuZ2VzW1wiZGF0YXNldHNcIl0/LnByZXZpb3VzVmFsdWUsXG4gICAgICAgIGNoYW5nZXNbXCJkYXRhc2V0c1wiXT8uY3VycmVudFZhbHVlXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDaGFydCgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMuY2hhcnRDYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIiksIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY2hhcnRPcHRpb25zLFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IHRoaXMubGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogdGhpcy5kYXRhc2V0cyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaENoYXJ0KCkge1xuICAgIGlmICghdGhpcy5jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuZGF0YS5sYWJlbHMgPSB0aGlzLmxhYmVscztcbiAgICB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHMgPSB0aGlzLmRhdGFzZXRzO1xuXG4gICAgdGhpcy5jaGFydD8udXBkYXRlKCk7XG4gIH1cbn1cbiJdfQ==