import { Component } from "@angular/core";

import { BaseChartComponent } from "./base-chart/base-chart.component";

@Component({
  selector: "ta-doughnut-chart",
  templateUrl: "./base-chart/base-chart.component.html",
  styleUrls: ["./base-chart/base-chart.component.scss"],
  standalone: true,
  imports: [],
})
export class TaChartDoughnutComponent extends BaseChartComponent<"doughnut"> {
  constructor() {
    super();

    this.type = "doughnut";
  }
}
