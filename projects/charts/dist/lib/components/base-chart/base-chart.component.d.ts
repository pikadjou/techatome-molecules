import { AfterViewInit, ElementRef, OnDestroy, SimpleChanges } from "@angular/core";
import { ChartDataset, ChartType, DefaultDataPoint } from "chart.js";
import Chart from "chart.js/auto";
import * as i0 from "@angular/core";
export declare abstract class BaseChartComponent<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> implements AfterViewInit, OnDestroy {
    labels: import("@angular/core").InputSignal<TLabel[]>;
    datasets: import("@angular/core").InputSignal<ChartDataset<keyof import("chart.js").ChartTypeRegistry, TData>[]>;
    chartOptions: import("@angular/core").InputSignal<import("chart.js/dist/types/utils")._DeepPartialObject<import("chart.js").CoreChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").ElementChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").PluginChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").DatasetChartOptions<keyof import("chart.js").ChartTypeRegistry> & import("chart.js").ScaleChartOptions<keyof import("chart.js").ChartTypeRegistry>> | undefined>;
    chartHeight: import("@angular/core").InputSignal<number | undefined>;
    chartCanvas: ElementRef;
    type: TType;
    chart: Chart<ChartType, TData, TLabel> | null;
    constructor();
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    createChart(): void;
    refreshChart(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseChartComponent<any, any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseChartComponent<any, any, any>, "ng-component", never, { "labels": { "alias": "labels"; "required": true; "isSignal": true; }; "datasets": { "alias": "datasets"; "required": true; "isSignal": true; }; "chartOptions": { "alias": "chartOptions"; "required": false; "isSignal": true; }; "chartHeight": { "alias": "chartHeight"; "required": false; "isSignal": true; }; }, {}, never, never, false, never>;
}
