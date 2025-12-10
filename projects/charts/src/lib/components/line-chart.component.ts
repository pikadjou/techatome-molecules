import { Component } from "@angular/core";

import { BaseChartComponent } from "./base-chart/base-chart.component";

@Component({
  selector: "ta-line-chart",
  templateUrl: "./base-chart/base-chart.component.html",
  styleUrls: ["./base-chart/base-chart.component.scss"],
  standalone: true,
  imports: [],
})
export class TaChartLineComponent extends BaseChartComponent<"line"> {
  constructor() {
    super();

    this.type = "line";
  }
}
