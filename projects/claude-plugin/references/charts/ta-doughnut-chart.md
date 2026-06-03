# `<ta-doughnut-chart>` — `TaChartDoughnutComponent`
**Quand l'utiliser** : Graphique en anneau (répartition proportionnelle avec trou central).
**Template canonique** :
```html
<ta-doughnut-chart
  [labels]="['A', 'B', 'C']"
  [datasets]="[{ data: [30, 50, 20], backgroundColor: ['#172aa5', '#98a6ff', '#cbd3ff'] }]">
</ta-doughnut-chart>
```
**Inputs** : identiques à `<ta-bar-chart>` — voir `ta-bar-chart.md`.

**Notes** : Type Chart.js `'doughnut'`. Utiliser `ChartColors` pour les palettes de couleurs cohérentes.
