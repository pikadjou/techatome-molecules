import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  input,
} from "@angular/core";

import {
  ChartConfiguration,
  ChartDataset,
  ChartType,
  DefaultDataPoint,
} from "chart.js";
import Chart from "chart.js/auto";
import deepEqual from "fast-deep-equal";

@Component({ template: "" })
export abstract class BaseChartComponent<
  TType extends ChartType = ChartType,
  TData = DefaultDataPoint<TType>,
  TLabel = unknown
> implements AfterViewInit, OnDestroy
{
  labels = input.required<TLabel[]>();

  datasets = input.required<ChartDataset<ChartType, TData>[]>();

  chartOptions = input<ChartConfiguration["options"]>({});

  chartHeight = input<number>();

  @ViewChild("chartCanvas") chartCanvas!: ElementRef;

  public type!: TType;

  public chart: Chart<ChartType, TData, TLabel> | null = null;

  // readonly id = 'MyChart' + Math.random();

  constructor() {}
  ngAfterViewInit() {
    this.createChart();
  }
  ngOnDestroy() {
    this.chart?.destroy();
    this.chart = null;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (
      !deepEqual(
        changes["labels"]?.previousValue,
        changes["labels"]?.currentValue
      ) ||
      !deepEqual(
        changes["datasets"]?.previousValue,
        changes["datasets"]?.currentValue
      )
    ) {
      this.refreshChart();
    }
  }

  public createChart() {
    this.chart = new Chart(this.chartCanvas.nativeElement.getContext("2d"), {
      type: this.type,
      options: this.chartOptions(),
      data: {
        labels: this.labels(),
        datasets: this.datasets(),
      },
    });
  }

  public refreshChart() {
    if (!this.chart) {
      return;
    }

    this.chart.data.labels = this.labels();
    this.chart.data.datasets = this.datasets();

    this.chart?.update();
  }
}
