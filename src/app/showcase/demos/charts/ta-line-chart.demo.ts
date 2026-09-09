import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ChartDataset } from "chart.js";

import { ChartColors, TaChartLineComponent } from "@ta/charts";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-line-chart-series",
  imports: [TaChartLineComponent],
  template: `
    <div style="max-width: 640px">
      <ta-line-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-line-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLineChartSeriesExample {
  labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  datasets: ChartDataset[] = [
    { label: "Visites", data: [420, 460, 500, 480, 610, 390, 340], borderColor: ChartColors.blue700, tension: 0.3, fill: false },
    { label: "Visiteurs uniques", data: [310, 330, 360, 340, 420, 260, 230], borderColor: ChartColors.success, tension: 0.3, fill: false },
  ];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-line-chart-area",
  imports: [TaChartLineComponent],
  template: `
    <div style="max-width: 640px">
      <ta-line-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="240"></ta-line-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLineChartAreaExample {
  labels = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"];

  // `fill: true` (propriété Chart.js du `ChartDataset`, pas du composant) remplit
  // la zone sous la courbe : c'est ce qui fait un graphique en aire.
  datasets: ChartDataset[] = [
    { label: "Abonnés cumulés", data: [1200, 1450, 1600, 2100, 2400, 2950], borderColor: ChartColors.blue700, backgroundColor: ChartColors.blue300, tension: 0.3, fill: true },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-line-chart",
  group: "Graphiques",
  summary: "Graphique en courbes Chart.js, sans input propre : `labels`, `datasets` et `chartHeight` viennent de `BaseChartComponent`, commun aux cinq composants du paquet.",
  examples: [
    { title: "Plusieurs séries", layout: "stack", component: TaLineChartSeriesExample },
    {
      title: "Aire remplie",
      layout: "stack",
      description: "`fill: true` sur un `ChartDataset` remplit la zone sous la courbe.",
      component: TaLineChartAreaExample,
    },
  ],
  notes:
    "Voir la démo `ta-bar-chart` pour l'usage de `chartOptions`, hérité comme `labels`/`datasets`/`chartHeight` de `BaseChartComponent` (abstraite, non exportée par le paquet).",
};
