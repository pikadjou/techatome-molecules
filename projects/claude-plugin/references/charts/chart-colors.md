# `ChartColors` — palette de couleurs pour graphiques
**Quand l'utiliser** : Couleurs prédéfinies cohérentes pour les datasets Chart.js.
**Usage** :
```typescript
import { ChartColors } from '@ta/charts';

datasets = [{
  data: [10, 20, 30],
  backgroundColor: [ChartColors.blue800, ChartColors.blue500, ChartColors.blue200],
}];
```
**Couleurs disponibles** :
- Bleus : `blue900` (#1f2245) → `blue50` (#ffffff)
- Sémantiques : `success` (#4CAF50), `danger` (#F44336), `warning` (#FFC107), `info` (#2196F3)
- Neutres : `light`, `dark`, `white`, `black`

**Type** : `ChartColorKey = keyof typeof ChartColors`
