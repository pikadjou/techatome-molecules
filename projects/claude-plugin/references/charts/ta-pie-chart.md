# `<ta-pie-chart>` — `TaChartPieComponent`
**Quand l'utiliser** : Graphique camembert (répartition proportionnelle pleine).
**Template canonique** :
```html
<ta-pie-chart
  [labels]="['A', 'B', 'C']"
  [datasets]="[{ data: [40, 35, 25] }]"
  [radius]="80">
</ta-pie-chart>
```
**Inputs** :
- `labels`, `datasets`, `chartOptions`, `chartHeight` — voir `ta-bar-chart.md`
- `radius: number` — rayon du camembert

**Notes** : Type Chart.js `'pie'`.
