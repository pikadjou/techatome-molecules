---
description: Assistant contextuel @ta/calendar — Bryntum calendar/scheduler, ta-planning-calendar
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/calendar — Assistant contextuel

Tu es un expert de la librairie `@ta/calendar` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/calendar`
**Import path** : `@ta/calendar`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/calendar/`
**Dépendance commerciale** : Bryntum (nécessite une licence)

## Exports clés

### Types

- `CalendarTypes` — types de vues du calendrier
- `VisitEventTypes` — types d'événements de visite

### Composants (`lib/components/`)

- `taCalendarByDayComponent` — `ta-calendar-by-day` : vue journalière
- `taCalendarByMonthComponent` — `ta-calendar-by-month` : vue mensuelle
- `taCalendarComponent` — `ta-calendar` : composant calendrier principal
- `taCalendarHeaderComponent` — `ta-calendar-header` : en-tête du calendrier
- `taCalendarViewComponent` — `ta-calendar-view` : vue du calendrier
- `taBucketContainerComponent` — `ta-bucket-container` : conteneur de buckets
- `taBucketItemComponent` — `ta-bucket-item` : élément de bucket
- `taSchedulerComponent` — `ta-scheduler` : composant scheduler (Bryntum)
- `taSchedulerViewComponent` — `ta-scheduler-view` : vue scheduler
- `taSchedulerHeaderComponent` — `ta-scheduler-header` : en-tête scheduler

### Abstractions

- `AbstractCalendarComponent` — base pour les composants calendrier
- `AbstractSchedulerComponent` — base pour les composants scheduler
- `AbstractCellComponent` — base pour les cellules du scheduler

### Services

- `InstancesService` — gestion des instances Bryntum
- `ComponentRendererService` — rendu de composants Angular dans Bryntum

### Divers

- `DateFormatterProvider` — provider de formatage de dates
- `CalendarTranslationService` — service de traduction du calendrier

### Module

- `CalendarModule` — module NgModule

## Patterns d'utilisation

### Calendrier par jour

```typescript
import { taCalendarByDayComponent } from '@ta/calendar';

@Component({
  standalone: true,
  imports: [taCalendarByDayComponent],
  template: `
    <ta-calendar-by-day
      [date]="selectedDate"
      [events]="events"
      (eventClick)="onEventClick($event)"
    />
  `
})
```

### Scheduler (Bryntum)

```typescript
import { taSchedulerComponent } from '@ta/calendar';

@Component({
  standalone: true,
  imports: [taSchedulerComponent],
  template: `
    <ta-scheduler
      [resources]="resources"
      [events]="events"
      [startDate]="startDate"
      [endDate]="endDate"
    />
  `
})
```

### Cellule personnalisée pour le scheduler

```typescript
import { AbstractCellComponent } from '@ta/calendar';

@Component({
  standalone: true,
  template: `<div class="my-cell">{{ event.name }}</div>`,
})
export class MyCellComponent extends AbstractCellComponent {
  // Accès à this.event, this.resource, etc.
}
```

### Configuration du provider de dates

```typescript
import { DateFormatterProvider } from '@ta/calendar';

export const appConfig: ApplicationConfig = {
  providers: [DateFormatterProvider],
};
```

## Conventions

- Les composants Bryntum (`taSchedulerComponent`) nécessitent une licence `.npmrc`
- Utiliser `AbstractCalendarComponent` / `AbstractSchedulerComponent` pour les extensions
- `ComponentRendererService` permet d'injecter des composants Angular dans les cellules Bryntum
- Le formatage des dates utilise `DateFormatterProvider` pour la cohérence

## Revue de code

- Vérifier que la licence Bryntum est configurée dans `.npmrc`
- S'assurer que `DateFormatterProvider` est dans les providers si des dates sont formatées
- Vérifier que les types d'événements utilisent `VisitEventTypes`
- Pour les cellules personnalisées, étendre `AbstractCellComponent`

## Ajout d'un nouveau composant dans @ta/calendar

1. Créer dans `projects/calendar/src/lib/components/`
2. Exporter depuis `projects/calendar/src/lib/components/public-api.ts`
3. Pour une cellule Bryntum : étendre `AbstractCellComponent`
