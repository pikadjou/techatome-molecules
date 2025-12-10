import { Component } from "@angular/core";

import { BaseChartComponent } from "./base-chart/base-chart.component";

@Component({
  selector: "ta-bar-chart",
  templateUrl: "./base-chart/base-chart.component.html",
  styleUrls: ["./base-chart/base-chart.component.scss"],
  standalone: true,
  imports: [],
})
export class TaChartBarComponent extends BaseChartComponent<"bar"> {
  constructor() {
    super();

    this.type = "bar";
  }
}
