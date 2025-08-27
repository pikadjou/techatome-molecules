import { Component, Input, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import deepEqual from 'fast-deep-equal';
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
        if (!deepEqual(changes['labels']?.previousValue, changes['labels']?.currentValue) ||
            !deepEqual(changes['datasets']?.previousValue, changes['datasets']?.currentValue)) {
            this.refreshChart();
        }
    }
    createChart() {
        this.chart = new Chart(this.chartCanvas.nativeElement.getContext('2d'), {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BaseChartComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BaseChartComponent, selector: "ng-component", inputs: { labels: "labels", datasets: "datasets", chartOptions: "chartOptions", chartHeight: "chartHeight" }, viewQueries: [{ propertyName: "chartCanvas", first: true, predicate: ["chartCanvas"], descendants: true }], usesOnChanges: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BaseChartComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
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
                args: ['chartCanvas']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS1jaGFydC9iYXNlLWNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQTRCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdqSCxPQUFPLEtBQUssTUFBTSxlQUFlLENBQUM7QUFDbEMsT0FBTyxTQUFTLE1BQU0saUJBQWlCLENBQUM7O0FBR3hDLE1BQU0sT0FBZ0Isa0JBQWtCO0lBdUJ0QywyQ0FBMkM7SUFFM0M7UUFaUyxpQkFBWSxHQUFrQyxFQUFFLENBQUM7UUFRbkQsVUFBSyxHQUEyQyxJQUFJLENBQUM7SUFJN0MsQ0FBQztJQUNoQixlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQ0UsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsWUFBWSxDQUFDO1lBQzdFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxhQUFhLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxFQUNqRixDQUFDO1lBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDMUIsSUFBSSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQixPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQzsrR0E5RG1CLGtCQUFrQjttR0FBbEIsa0JBQWtCLG1TQURqQixFQUFFOzs0RkFDSCxrQkFBa0I7a0JBRHZDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO3dEQVN6QixNQUFNO3NCQURMLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUdHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSztnQkFFb0IsV0FBVztzQkFBcEMsU0FBUzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRDb25maWd1cmF0aW9uLCBDaGFydERhdGFzZXQsIENoYXJ0VHlwZSwgRGVmYXVsdERhdGFQb2ludCB9IGZyb20gJ2NoYXJ0LmpzJztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJztcbmltcG9ydCBkZWVwRXF1YWwgZnJvbSAnZmFzdC1kZWVwLWVxdWFsJztcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDaGFydENvbXBvbmVudDxcbiAgICBUVHlwZSBleHRlbmRzIENoYXJ0VHlwZSA9IENoYXJ0VHlwZSxcbiAgICBURGF0YSA9IERlZmF1bHREYXRhUG9pbnQ8VFR5cGU+LFxuICAgIFRMYWJlbCA9IHVua25vd24sXG4gID5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgQElucHV0KClcbiAgbGFiZWxzITogVExhYmVsW107XG5cbiAgQElucHV0KClcbiAgZGF0YXNldHMhOiBDaGFydERhdGFzZXQ8Q2hhcnRUeXBlLCBURGF0YT5bXTtcblxuICBASW5wdXQoKSBjaGFydE9wdGlvbnM6IENoYXJ0Q29uZmlndXJhdGlvblsnb3B0aW9ucyddID0ge307XG5cbiAgQElucHV0KCkgY2hhcnRIZWlnaHQ/OiBudW1iZXI7XG5cbiAgQFZpZXdDaGlsZCgnY2hhcnRDYW52YXMnKSBjaGFydENhbnZhcyE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIHR5cGUhOiBUVHlwZTtcblxuICBwdWJsaWMgY2hhcnQ6IENoYXJ0PENoYXJ0VHlwZSwgVERhdGEsIFRMYWJlbD4gfCBudWxsID0gbnVsbDtcblxuICAvLyByZWFkb25seSBpZCA9ICdNeUNoYXJ0JyArIE1hdGgucmFuZG9tKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVDaGFydCgpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hhcnQ/LmRlc3Ryb3koKTtcbiAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKFxuICAgICAgIWRlZXBFcXVhbChjaGFuZ2VzWydsYWJlbHMnXT8ucHJldmlvdXNWYWx1ZSwgY2hhbmdlc1snbGFiZWxzJ10/LmN1cnJlbnRWYWx1ZSkgfHxcbiAgICAgICFkZWVwRXF1YWwoY2hhbmdlc1snZGF0YXNldHMnXT8ucHJldmlvdXNWYWx1ZSwgY2hhbmdlc1snZGF0YXNldHMnXT8uY3VycmVudFZhbHVlKVxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoQ2hhcnQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ2hhcnQoKSB7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLmNoYXJ0Q2FudmFzLm5hdGl2ZUVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKSwge1xuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgb3B0aW9uczogdGhpcy5jaGFydE9wdGlvbnMsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogdGhpcy5sYWJlbHMsXG4gICAgICAgIGRhdGFzZXRzOiB0aGlzLmRhdGFzZXRzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZWZyZXNoQ2hhcnQoKSB7XG4gICAgaWYgKCF0aGlzLmNoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGFydC5kYXRhLmxhYmVscyA9IHRoaXMubGFiZWxzO1xuICAgIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0cyA9IHRoaXMuZGF0YXNldHM7XG5cbiAgICB0aGlzLmNoYXJ0Py51cGRhdGUoKTtcbiAgfVxufVxuIl19