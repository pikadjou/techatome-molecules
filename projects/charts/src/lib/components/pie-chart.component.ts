import { Component, input } from "@angular/core";

import { BaseChartComponent } from "./base-chart/base-chart.component";

@Component({
  selector: "ta-pie-chart",
  templateUrl: "./base-chart/base-chart.component.html",
  styleUrls: ["./base-chart/base-chart.component.scss"],
  standalone: true,
  imports: [],
})
export class TaChartPieComponent extends BaseChartComponent<"pie"> {
  radius = input<number>();

  constructor() {
    super();

    this.type = "pie";
  }
}
