import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ChartDataset } from "chart.js";

import { ChartColors, TaChartMixedComponent } from "@ta/charts";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-mixed-chart-combo",
  imports: [TaChartMixedComponent],
  template: `
    <div style="max-width: 640px">
      <ta-mixed-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-mixed-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMixedChartComboExample {
  labels = ["T1", "T2", "T3", "T4"];

  // Chaque `ChartDataset` porte son propre `type` : c'est cette propriété, pas
  // le composant, qui combine barres et courbe sur un même graphique.
  datasets: ChartDataset[] = [
    { type: "bar" as const, label: "Ventes réalisées", data: [200, 300, 250, 400], backgroundColor: ChartColors.blue700 },
    { type: "line" as const, label: "Objectif", data: [250, 250, 300, 350], borderColor: ChartColors.warning, fill: false },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-mixed-chart",
  group: "Graphiques",
  summary: "Graphique combinant plusieurs types de séries (barres, courbe…) sur un même canevas Chart.js, sans input propre.",
  examples: [{ title: "Ventes réalisées et objectif", layout: "stack", component: TaMixedChartComboExample }],
  notes:
    "`TaChartMixedComponent` fixe `type = \"scatter\"` au niveau du graphique (voir `mixed-chart.component.ts`), mais c'est le `type` de chaque `ChartDataset` (`\"bar\"`, `\"line\"`…) qui détermine le rendu réel de chaque série — Chart.js permet ce mélange par dataset. Voir la démo `ta-bar-chart` pour l'usage de `chartOptions`, hérité comme `labels`/`datasets`/`chartHeight` de `BaseChartComponent` (abstraite, non exportée par le paquet).",
};
