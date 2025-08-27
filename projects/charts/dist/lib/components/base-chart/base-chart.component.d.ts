import { AfterViewInit, ElementRef, OnDestroy, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartType, DefaultDataPoint } from 'chart.js';
import Chart from 'chart.js/auto';
import * as i0 from "@angular/core";
export declare abstract class BaseChartComponent<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel = unknown> implements AfterViewInit, OnDestroy {
    labels: TLabel[];
    datasets: ChartDataset<ChartType, TData>[];
    chartOptions: ChartConfiguration['options'];
    chartHeight?: number;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseChartComponent<any, any, any>, "ng-component", never, { "labels": { "alias": "labels"; "required": false; }; "datasets": { "alias": "datasets"; "required": false; }; "chartOptions": { "alias": "chartOptions"; "required": false; }; "chartHeight": { "alias": "chartHeight"; "required": false; }; }, {}, never, never, false, never>;
}
