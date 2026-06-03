# `<ta-mixed-chart>` — `TaChartMixedComponent`
**Quand l'utiliser** : Graphique mixte scatter/points (combiner plusieurs types de données).
**Template canonique** :
```html
<ta-mixed-chart
  [labels]="labels"
  [datasets]="datasets">
</ta-mixed-chart>
```
**Inputs** : identiques à `<ta-bar-chart>` — voir `ta-bar-chart.md`.

**Notes** : Type Chart.js `'scatter'`. Pour combiner bar + line, passer le type dans chaque dataset via `type: 'bar' | 'line'`.
