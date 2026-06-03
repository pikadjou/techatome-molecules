# `<ta-bar-chart>` — `TaChartBarComponent`
**Quand l'utiliser** : Graphique en barres (comparaison de valeurs entre catégories).
**Template canonique** :
```html
<ta-bar-chart
  [labels]="['Jan', 'Feb', 'Mar']"
  [datasets]="datasets"
  [chartOptions]="options"
  [chartHeight]="300">
</ta-bar-chart>
```
**Inputs** (hérités de `BaseChartComponent`) :
- `labels: TLabel[]` (required) — labels de l'axe X
- `datasets: ChartDataset[]` (required) — données Chart.js
- `chartOptions: ChartConfiguration['options']` — options Chart.js
- `chartHeight: number` — hauteur du canvas

**Notes** : Basé sur Chart.js. Se rafraîchit automatiquement quand `labels` ou `datasets` changent.
