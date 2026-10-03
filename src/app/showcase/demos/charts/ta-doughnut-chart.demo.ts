import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ChartDataset } from "chart.js";

import { ChartColors, TaChartDoughnutComponent } from "@ta/charts";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-doughnut-chart-devices",
  imports: [TaChartDoughnutComponent],
  template: `
    <div style="max-width: 420px">
      <ta-doughnut-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-doughnut-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDoughnutChartDevicesExample {
  labels = ["Ordinateur", "Mobile", "Tablette"];

  datasets: ChartDataset[] = [
    {
      data: [55, 35, 10],
      backgroundColor: [ChartColors.blue700, ChartColors.blue400, ChartColors.warning],
    },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-doughnut-chart",
  group: "Graphiques",
  summary: "Graphique en anneau Chart.js, sans input propre : `labels` et `datasets` viennent de `BaseChartComponent`, commun aux cinq composants du paquet.",
  examples: [{ title: "Répartition du trafic par appareil", layout: "stack", component: TaDoughnutChartDevicesExample }],
  notes:
    "Voir la démo `ta-bar-chart` pour l'usage de `chartOptions`, hérité comme `labels`/`datasets`/`chartHeight` de `BaseChartComponent` (abstraite, non exportée par le paquet).",
};
