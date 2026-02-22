---
description: Assistant contextuel @ta/charts — composants graphiques Chart.js
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/charts — Assistant contextuel

Tu es un expert de la librairie `@ta/charts` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/charts`
**Import path** : `@ta/charts`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/charts/`

## Exports clés

### Composants (`lib/components/`)

- `taBarChartComponent` — `ta-bar-chart` : graphique en barres
- `taLineChartComponent` — `ta-line-chart` : graphique en courbes
- `taDoughnutChartComponent` — `ta-doughnut-chart` : graphique donut
- `taMixedChartComponent` — `ta-mixed-chart` : graphique mixte (barres + courbes)
- `taPieChartComponent` — `ta-pie-chart` : graphique taembert

### Utilitaires

- `ChartColor` — palette de couleurs pour les graphiques

### Module

- `ChartsModule` — module NgModule (deprecated)

## Patterns d'utilisation

### Graphique en barres

```typescript
import { taBarChartComponent } from '@ta/charts';

@Component({
  standalone: true,
  imports: [taBarChartComponent],
  template: ` <ta-bar-chart [labels]="labels" [datasets]="datasets" [title]="'MON_GRAPHIQUE' | translate" /> `,
})
export class MonComponent {
  labels = ['Jan', 'Fév', 'Mar', 'Avr'];
  datasets = [
    {
      backgroundColor: ChartColor.Blue,
      data: [10, 20, 15, 30],
      label: 'Série 1',
    },
  ];
}
```

### Graphique donut

```typescript
import { ChartColor, taDoughnutChartComponent } from '@ta/charts';

@Component({
  standalone: true,
  imports: [taDoughnutChartComponent],
  template: ` <ta-doughnut-chart [labels]="labels" [datasets]="datasets" /> `,
})
export class DonutComponent {
  labels = ['Complété', 'En cours', 'En attente'];
  datasets = [
    {
      backgroundColor: [ChartColor.Green, ChartColor.Orange, ChartColor.Gray],
      data: [60, 25, 15],
    },
  ];
}
```

### Graphique mixte

```typescript
import { taMixedChartComponent } from '@ta/charts';

@Component({
  standalone: true,
  imports: [taMixedChartComponent],
  template: `<ta-mixed-chart [labels]="labels" [datasets]="datasets" />`,
})
export class MixedComponent {
  datasets = [
    { data: [10, 20, 30], label: 'Barres', type: 'bar' },
    { data: [5, 15, 25], label: 'Ligne', type: 'line' },
  ];
}
```

### Utiliser ChartColor

```typescript
import { ChartColor } from '@ta/charts';

// Palette disponible
const colors = {
  primary: ChartColor.Blue,
  success: ChartColor.Green,
  warning: ChartColor.Orange,
  danger: ChartColor.Red,
};
```

## Conventions

- Utiliser `ChartColor` pour les couleurs (jamais de couleurs hardcodées)
- `ChartsModule` est deprecated — utiliser les composants standalone
- Les titres de graphiques doivent passer par le système de traduction
- Les labels de données sont directement des chaînes (pas de traduction nécessaire)

## Revue de code

- Vérifier que `ChartColor` est utilisé pour les couleurs
- S'assurer que `standalone: true` et les imports explicites
- Vérifier que les titres de graphiques sont traduits
- Ne pas importer `ChartsModule` dans les nouveaux composants

## Ajout d'un nouveau type de graphique dans @ta/charts

1. Créer le composant dans `projects/charts/src/lib/components/`
2. Exporter depuis `projects/charts/src/lib/components/public-api.ts`
3. Exporter depuis `projects/charts/src/public-api.ts`
4. S'assurer que `standalone: true`
