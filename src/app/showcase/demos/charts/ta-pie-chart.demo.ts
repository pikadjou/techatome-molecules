import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ChartDataset } from "chart.js";

import { ChartColors, TaChartPieComponent } from "@ta/charts";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-pie-chart-browsers",
  imports: [TaChartPieComponent],
  template: `
    <div style="max-width: 420px">
      <ta-pie-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-pie-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaPieChartBrowsersExample {
  labels = ["Chrome", "Firefox", "Safari", "Edge"];

  datasets: ChartDataset[] = [
    {
      data: [45, 25, 20, 10],
      backgroundColor: [ChartColors.blue700, ChartColors.blue500, ChartColors.success, ChartColors.warning],
    },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-pie-chart",
  group: "Graphiques",
  summary: "Graphique circulaire Chart.js. `labels` et `datasets` viennent de `BaseChartComponent` ; c'est le seul des cinq composants du paquet à ajouter un input propre, `radius`.",
  examples: [{ title: "Répartition des navigateurs", layout: "stack", component: TaPieChartBrowsersExample }],
  notes:
    "`radius` (`input<number>()`) est déclaré mais n'est lu nulle part : ni dans `pie-chart.component.ts`, ni dans `createChart()`/`refreshChart()` de `BaseChartComponent`, qui construisent le graphique Chart.js sans jamais y référencer cet input. Le fixer n'a donc aujourd'hui aucun effet observable — non démontré ici pour cette raison. Voir la démo `ta-bar-chart` pour l'usage de `chartOptions`, hérité comme `labels`/`datasets`/`chartHeight` de `BaseChartComponent` (abstraite, non exportée par le paquet) ; c'est par cette voie, et non par `radius`, que Chart.js expose son propre réglage de rayon (`options.radius`, `options.cutout`…).",
};
