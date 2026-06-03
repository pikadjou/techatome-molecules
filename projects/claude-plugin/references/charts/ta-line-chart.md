# `<ta-line-chart>` — `TaChartLineComponent`
**Quand l'utiliser** : Graphique en lignes (évolution dans le temps).
**Template canonique** :
```html
<ta-line-chart
  [labels]="timeLabels"
  [datasets]="datasets"
  [chartOptions]="{ responsive: true }">
</ta-line-chart>
```
**Inputs** : identiques à `<ta-bar-chart>` — voir `ta-bar-chart.md`.

**Notes** : Type Chart.js `'line'`. Même API que les autres composants de graphique.
