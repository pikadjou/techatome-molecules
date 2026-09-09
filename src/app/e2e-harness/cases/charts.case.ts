import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ChartDataset } from "chart.js";

import {
  TaChartBarComponent,
  TaChartDoughnutComponent,
  TaChartLineComponent,
  TaChartMixedComponent,
  TaChartPieComponent,
} from "@ta/charts";
import { TaTestIdDirective } from "@ta/utils";

@Component({
  standalone: true,
  selector: "app-case-charts",
  imports: [
    TaChartBarComponent,
    TaChartDoughnutComponent,
    TaChartLineComponent,
    TaChartMixedComponent,
    TaChartPieComponent,
    TaTestIdDirective,
  ],
  template: `
    <div style="width: 480px">
      <ta-bar-chart
        taTestId="ta-bar-chart"
        [labels]="this.labels"
        [datasets]="this.barDatasets"
        [chartHeight]="240"
      ></ta-bar-chart>
      <ta-line-chart
        taTestId="ta-line-chart"
        [labels]="this.labels"
        [datasets]="this.lineDatasets"
        [chartHeight]="240"
      ></ta-line-chart>
      <ta-doughnut-chart
        taTestId="ta-doughnut-chart"
        [labels]="this.pieLabels"
        [datasets]="this.doughnutDatasets"
        [chartHeight]="240"
      ></ta-doughnut-chart>
      <ta-pie-chart
        taTestId="ta-pie-chart"
        [labels]="this.pieLabels"
        [datasets]="this.pieDatasets"
        [chartHeight]="240"
      ></ta-pie-chart>
      <ta-mixed-chart
        taTestId="ta-mixed-chart"
        [labels]="this.mixedLabels"
        [datasets]="this.mixedDatasets"
        [chartHeight]="240"
      ></ta-mixed-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsCase {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  barDatasets: ChartDataset[] = [
    { label: "Revenue", data: [65, 59, 80, 81, 56, 55], backgroundColor: "rgba(54, 162, 235, 0.5)" },
    { label: "Expenses", data: [28, 48, 40, 19, 86, 27], backgroundColor: "rgba(255, 99, 132, 0.5)" },
  ];

  lineDatasets: ChartDataset[] = [
    { label: "Visits", data: [65, 59, 80, 81, 56, 55], borderColor: "rgba(75, 192, 192, 1)", fill: false },
  ];

  pieLabels = ["Chrome", "Firefox", "Safari", "Edge"];

  doughnutDatasets: ChartDataset[] = [
    { data: [55, 35, 10, 20], backgroundColor: ["#36a2eb", "#ff6384", "#ffce56", "#4bc0c0"] },
  ];

  pieDatasets: ChartDataset[] = [
    { data: [45, 25, 20, 10], backgroundColor: ["#36a2eb", "#ff6384", "#ffce56", "#4bc0c0"] },
  ];

  mixedLabels = ["Q1", "Q2", "Q3", "Q4"];

  mixedDatasets: ChartDataset[] = [
    { type: "bar" as const, label: "Sales", data: [200, 300, 250, 400], backgroundColor: "rgba(54, 162, 235, 0.5)" },
    { type: "line" as const, label: "Target", data: [250, 250, 300, 350], borderColor: "rgba(255, 99, 132, 1)", fill: false },
  ];
}
