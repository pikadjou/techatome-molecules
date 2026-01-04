import { Component, ViewChild, input, } from "@angular/core";
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: BaseChartComponent, selector: "ng-component", inputs: { labels: { classPropertyName: "labels", publicName: "labels", isSignal: true, isRequired: true, transformFunction: null }, datasets: { classPropertyName: "datasets", publicName: "datasets", isSignal: true, isRequired: true, transformFunction: null }, chartOptions: { classPropertyName: "chartOptions", publicName: "chartOptions", isSignal: true, isRequired: false, transformFunction: null }, chartHeight: { classPropertyName: "chartHeight", publicName: "chartHeight", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "chartCanvas", first: true, predicate: ["chartCanvas"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BaseChartComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [], propDecorators: { chartCanvas: [{
                type: ViewChild,
                args: ["chartCanvas"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUlULFNBQVMsRUFDVCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFRdkIsT0FBTyxLQUFLLE1BQU0sZUFBZSxDQUFDO0FBQ2xDLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDOztBQUd4QyxNQUFNLE9BQWdCLGtCQUFrQjtJQW9CdEMsMkNBQTJDO0lBRTNDO1FBaEJBLFdBQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFZLENBQUM7UUFFcEMsYUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQW9DLENBQUM7UUFFOUQsaUJBQVksR0FBRyxLQUFLLENBQWdDLEVBQUUsQ0FBQyxDQUFDO1FBRXhELGdCQUFXLEdBQUcsS0FBSyxFQUFVLENBQUM7UUFNdkIsVUFBSyxHQUEyQyxJQUFJLENBQUM7SUFJN0MsQ0FBQztJQUNoQixlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQ0UsQ0FBQyxTQUFTLENBQ1IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGFBQWEsRUFDaEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksQ0FDaEM7WUFDRCxDQUFDLFNBQVMsQ0FDUixPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYSxFQUNsQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsWUFBWSxDQUNsQyxFQUNELENBQUM7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7YUFDMUI7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2hCLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTNDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzsrR0FqRW1CLGtCQUFrQjttR0FBbEIsa0JBQWtCLGt0QkFEakIsRUFBRTs7NEZBQ0gsa0JBQWtCO2tCQUR2QyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTt3REFlQyxXQUFXO3NCQUFwQyxTQUFTO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBpbnB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHtcbiAgQ2hhcnRDb25maWd1cmF0aW9uLFxuICBDaGFydERhdGFzZXQsXG4gIENoYXJ0VHlwZSxcbiAgRGVmYXVsdERhdGFQb2ludCxcbn0gZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBkZWVwRXF1YWwgZnJvbSBcImZhc3QtZGVlcC1lcXVhbFwiO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6IFwiXCIgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ2hhcnRDb21wb25lbnQ8XG4gIFRUeXBlIGV4dGVuZHMgQ2hhcnRUeXBlID0gQ2hhcnRUeXBlLFxuICBURGF0YSA9IERlZmF1bHREYXRhUG9pbnQ8VFR5cGU+LFxuICBUTGFiZWwgPSB1bmtub3duXG4+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIGxhYmVscyA9IGlucHV0LnJlcXVpcmVkPFRMYWJlbFtdPigpO1xuXG4gIGRhdGFzZXRzID0gaW5wdXQucmVxdWlyZWQ8Q2hhcnREYXRhc2V0PENoYXJ0VHlwZSwgVERhdGE+W10+KCk7XG5cbiAgY2hhcnRPcHRpb25zID0gaW5wdXQ8Q2hhcnRDb25maWd1cmF0aW9uW1wib3B0aW9uc1wiXT4oe30pO1xuXG4gIGNoYXJ0SGVpZ2h0ID0gaW5wdXQ8bnVtYmVyPigpO1xuXG4gIEBWaWV3Q2hpbGQoXCJjaGFydENhbnZhc1wiKSBjaGFydENhbnZhcyE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIHR5cGUhOiBUVHlwZTtcblxuICBwdWJsaWMgY2hhcnQ6IENoYXJ0PENoYXJ0VHlwZSwgVERhdGEsIFRMYWJlbD4gfCBudWxsID0gbnVsbDtcblxuICAvLyByZWFkb25seSBpZCA9ICdNeUNoYXJ0JyArIE1hdGgucmFuZG9tKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hhcnQ/LmRlc3Ryb3koKTtcbiAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKFxuICAgICAgIWRlZXBFcXVhbChcbiAgICAgICAgY2hhbmdlc1tcImxhYmVsc1wiXT8ucHJldmlvdXNWYWx1ZSxcbiAgICAgICAgY2hhbmdlc1tcImxhYmVsc1wiXT8uY3VycmVudFZhbHVlXG4gICAgICApIHx8XG4gICAgICAhZGVlcEVxdWFsKFxuICAgICAgICBjaGFuZ2VzW1wiZGF0YXNldHNcIl0/LnByZXZpb3VzVmFsdWUsXG4gICAgICAgIGNoYW5nZXNbXCJkYXRhc2V0c1wiXT8uY3VycmVudFZhbHVlXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVDaGFydCgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KHRoaXMuY2hhcnRDYW52YXMubmF0aXZlRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIiksIHtcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuY2hhcnRPcHRpb25zKCksXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHMoKSxcbiAgICAgICAgZGF0YXNldHM6IHRoaXMuZGF0YXNldHMoKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVmcmVzaENoYXJ0KCkge1xuICAgIGlmICghdGhpcy5jaGFydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hhcnQuZGF0YS5sYWJlbHMgPSB0aGlzLmxhYmVscygpO1xuICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IHRoaXMuZGF0YXNldHMoKTtcblxuICAgIHRoaXMuY2hhcnQ/LnVwZGF0ZSgpO1xuICB9XG59XG4iXX0=