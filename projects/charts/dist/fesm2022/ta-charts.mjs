import * as i0 from '@angular/core';
import { ViewChild, Input, Component } from '@angular/core';
import Chart from 'chart.js/auto';
import deepEqual from 'fast-deep-equal';

class BaseChartComponent {
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

class CamChartBarComponent extends BaseChartComponent {
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

class CamChartLineComponent extends BaseChartComponent {
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

class CamChartDoughnutComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = 'doughnut';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartDoughnutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamChartDoughnutComponent, isStandalone: true, selector: "ta-doughnut-chart", usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartDoughnutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-doughnut-chart', standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [] });

class CamChartMixedComponent extends BaseChartComponent {
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

class CamChartPieComponent extends BaseChartComponent {
    constructor() {
        super();
        this.type = 'pie';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartPieComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamChartPieComponent, isStandalone: true, selector: "ta-pie-chart", inputs: { radius: "radius" }, usesInheritance: true, ngImport: i0, template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamChartPieComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-pie-chart', standalone: true, imports: [], template: "<div class=\"chart-container\" [style.height.px]=\"this.chartHeight\">\n  <!-- <canvas [attr.id]=\"this.id\"></canvas> -->\n  <canvas #chartCanvas></canvas>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { radius: [{
                type: Input
            }] } });

const ChartColors = {
    blue900: '#1f2245',
    blue800: '#172aa5',
    blue700: '#3c54e4',
    blue600: '#6b7cea',
    blue500: '#98a6ff',
    blue400: '#cbd3ff',
    blue300: '#e5e9ff',
    blue200: '#f2f4fe',
    blue100: '#f8f9ff',
    blue50: '#ffffff',
    success: '#4CAF50',
    danger: '#F44336',
    warning: '#FFC107',
    info: '#2196F3',
    light: '#F1F1F1',
    dark: '#212121',
    white: '#FFFFFF',
    black: '#000000',
};

/*
 * Public API Surface of charts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CamChartBarComponent, CamChartDoughnutComponent, CamChartLineComponent, CamChartMixedComponent, CamChartPieComponent, ChartColors };
//# sourceMappingURL=ta-charts.mjs.map
