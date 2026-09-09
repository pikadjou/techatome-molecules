import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ChartConfiguration, ChartDataset } from "chart.js";

import { ChartColors, TaChartBarComponent } from "@ta/charts";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-bar-chart-comparison",
  imports: [TaChartBarComponent],
  template: `
    <div style="max-width: 640px">
      <ta-bar-chart [labels]="this.labels" [datasets]="this.datasets" [chartHeight]="280"></ta-bar-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBarChartComparisonExample {
  labels = ["T1", "T2", "T3", "T4"];

  datasets: ChartDataset[] = [
    { label: "Chiffre d'affaires (k€)", data: [180, 210, 195, 260], backgroundColor: ChartColors.blue700 },
    { label: "Charges (k€)", data: [120, 130, 125, 150], backgroundColor: ChartColors.warning },
  ];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-bar-chart-horizontal",
  imports: [TaChartBarComponent],
  template: `
    <div style="max-width: 640px">
      <ta-bar-chart
        [labels]="this.labels"
        [datasets]="this.datasets"
        [chartOptions]="this.options"
        [chartHeight]="240"
      ></ta-bar-chart>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBarChartHorizontalExample {
  labels = ["Marketing", "R&D", "Support", "Ventes"];

  datasets: ChartDataset[] = [{ label: "Effectif", data: [12, 28, 9, 17], backgroundColor: ChartColors.blue600 }];

  // `chartOptions` (hérité de `BaseChartComponent`) est relayé tel quel au
  // constructeur Chart.js : `indexAxis: "y"` y est l'option standard pour
  // basculer des barres verticales en barres horizontales.
  options: ChartConfiguration<"bar">["options"] = { indexAxis: "y" };
}

export const DEMO: ComponentDemo = {
  id: "ta-bar-chart",
  group: "Graphiques",
  summary: "Graphique en barres Chart.js. Le composant ne déclare aucun input propre : `labels`, `datasets`, `chartOptions` et `chartHeight` viennent tous de `BaseChartComponent`.",
  examples: [
    { title: "Deux séries comparées", layout: "stack", component: TaBarChartComparisonExample },
    {
      title: "Barres horizontales",
      layout: "stack",
      description: "`chartOptions` est relayé tel quel au constructeur Chart.js ; `indexAxis: \"y\"` y est l'option standard pour basculer en barres horizontales.",
      component: TaBarChartHorizontalExample,
    },
  ],
  notes:
    "`ta-bar-chart` (comme les quatre autres composants du paquet) hérite `labels`, `datasets`, `chartOptions` (typé `ChartConfiguration[\"options\"]`, relayé tel quel à Chart.js) et `chartHeight` (hauteur en pixels du conteneur `.chart-container`) de `BaseChartComponent`, abstraite et non exportée — d'où le décompte à zéro input propre. `ChartColors` (`@ta/charts`) fournit la palette de couleurs utilisée ci-dessus.",
};
