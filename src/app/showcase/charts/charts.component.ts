import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ChartDataset } from "chart.js";

import {
  TaChartBarComponent,
  TaChartDoughnutComponent,
  TaChartLineComponent,
  TaChartMixedComponent,
  TaChartPieComponent,
} from "@ta/charts";
import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    PageLayoutComponent,
    TaChartBarComponent,
    TaChartDoughnutComponent,
    TaChartLineComponent,
    TaChartMixedComponent,
    TaChartPieComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./charts.component.html",
  styleUrl: "./charts.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsPage {
  // Bar Chart
  barLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  barDatasets: ChartDataset[] = [
    {
      label: "Revenue",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Expenses",
      data: [28, 48, 40, 19, 86, 27],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ];

  // Line Chart
  lineLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  lineDatasets: ChartDataset[] = [
    {
      label: "Visits",
      data: [120, 190, 170, 250, 230, 310, 280],
      borderColor: "rgba(75, 192, 192, 1)",
      tension: 0.3,
      fill: false,
    },
    {
      label: "Unique",
      data: [80, 110, 95, 160, 140, 200, 170],
      borderColor: "rgba(153, 102, 255, 1)",
      tension: 0.3,
      fill: false,
    },
  ];

  // Doughnut Chart
  doughnutLabels = ["Desktop", "Mobile", "Tablet"];
  doughnutDatasets: ChartDataset[] = [
    {
      data: [55, 35, 10],
      backgroundColor: [
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 99, 132, 0.7)",
        "rgba(255, 206, 86, 0.7)",
      ],
    },
  ];

  // Pie Chart
  pieLabels = ["Chrome", "Firefox", "Safari", "Edge"];
  pieDatasets: ChartDataset[] = [
    {
      data: [45, 25, 20, 10],
      backgroundColor: [
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 99, 132, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)",
      ],
    },
  ];

  // Mixed Chart
  mixedLabels = ["Q1", "Q2", "Q3", "Q4"];
  mixedDatasets: ChartDataset[] = [
    {
      type: "bar" as const,
      label: "Sales",
      data: [200, 300, 250, 400],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      type: "line" as const,
      label: "Target",
      data: [250, 250, 300, 350],
      borderColor: "rgba(255, 99, 132, 1)",
      fill: false,
    },
  ];
}
