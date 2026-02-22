---
description: Assistant contextuel @ta/planning — feature planning, composants et services de planification
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/planning — Assistant contextuel

Tu es un expert de la librairie `@ta/planning` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/planning`
**Import path** : `@ta/planning`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/features/planning/`

## Exports clés

### Composants (`lib/components/`)

- `taPlanningCardComponent` — carte de planning (abstract-card)
- `taPlanningCalendarComponent` — calendrier de planning
- `taPlanningSchedulerComponent` — scheduler de planning
- `taCreateNoteComponent` — formulaire de création de note
- `taCreateUnavailabilityComponent` — formulaire d'indisponibilité
- `taCreateVisitEventComponent` — formulaire de création d'événement visite
- `taEventFormComponent` — formulaire d'événement
- `taVisitStatusComponent` — affichage du statut de visite
- `taVisitCardComponent` — carte de visite
- `taCreateEventSelectionComponent` — sélection de type d'événement à créer

### Services (`lib/services/`)

- `NoteTypeService` — service des types de notes
- `ColorSetService` — service des sets de couleurs
- `CalendarSyncConfigurationService` — configuration de synchronisation calendrier
- `UserCalendarSubscriptionService` — abonnements calendrier utilisateur
- `ExternalsService` — service des événements externes
- `NotesService` — service des notes
- `UnavailabilitiesService` — service des indisponibilités
- `TimeEntryService` — service des entrées de temps
- `VisitsService` — service des visites
- Services formulaires : `NoteTypeFormService`, `ColorSetFormService`, `CalendarSyncConfigFormService`, `UnavailabilityFormService`, `CalendarNoteFormService`

### Types et DTOs (`lib/services/dto/`)

- `NoteType` — type de note
- `ColorSet` — set de couleurs
- `CalendarSyncConfig` — config de sync calendrier
- `UserCalendarSubscription` — abonnement calendrier
- `CalendarTimeEntry` — entrée de temps
- `Unavailability` — indisponibilité
- `Visit` — visite
- `VisitCreationPayloadInput` — payload de création de visite
- `VisitModifierPayloadInput` — payload de modification de visite
- `UnavailabilityCreationPayloadInput` — payload de création d'indisponibilité
- `UnavailabilityModifierPayloadInput` — payload de modification
- `CalendarNoteCreationPayloadInput` — payload de note
- `CalendarNoteModifierPayloadInput` — payload de modification de note
- `CalendarEntry` — entrée calendrier
- `Note` — note
- `UnavailabilityType` — type d'indisponibilité
- `ExternalEvent` — événement externe

### Types (`lib/types/`)

- `Event` — type d'événement planning

## Patterns d'utilisation

### Afficher le calendrier de planning

```typescript
import { taPlanningCalendarComponent } from '@ta/planning';

@Component({
  standalone: true,
  imports: [taPlanningCalendarComponent],
  template: `
    <ta-planning-calendar
      [userId]="currentUserId"
      [date]="selectedDate"
      (eventClick)="onEventClick($event)"
    />
  `
})
```

### Créer une visite

```typescript
import { VisitCreationPayloadInput, VisitsService } from '@ta/planning';

@Injectable({ providedIn: 'root' })
export class MyPlanningService {
  private visits = inject(VisitsService);

  createVisit(payload: VisitCreationPayloadInput) {
    return this.visits.create(payload);
  }
}
```

### Gérer les indisponibilités

```typescript
import { UnavailabilitiesService, UnavailabilityCreationPayloadInput } from '@ta/planning';

@Injectable({ providedIn: 'root' })
export class MyService {
  private unavail = inject(UnavailabilitiesService);

  createUnavailability(payload: UnavailabilityCreationPayloadInput) {
    return this.unavail.create(payload);
  }
}
```

### Formulaire de création d'événement

```typescript
import { taCreateEventSelectionComponent } from '@ta/planning';

@Component({
  standalone: true,
  imports: [taCreateEventSelectionComponent],
  template: `
    <ta-create-event-selection
      (eventTypeSelected)="onEventTypeSelected($event)"
    />
  `
})
```

### Synchronisation calendrier externe

```typescript
import { CalendarSyncConfig, CalendarSyncConfigurationService } from '@ta/planning';

@Injectable({ providedIn: 'root' })
export class SyncService {
  private syncConfig = inject(CalendarSyncConfigurationService);

  getConfigs() {
    return this.syncConfig.getAll();
  }
}
```

## Conventions

- Les payloads de création suivent le pattern `XxxCreationPayloadInput`
- Les payloads de modification suivent le pattern `XxxModifierPayloadInput`
- Les services formulaires (`*FormService`) sont séparés des services de données
- Utiliser `VisitsService` pour les CRUD des visites (pas d'accès direct à `@ta/server`)

## Revue de code

- Vérifier que les payloads de création/modification utilisent les types définis
- S'assurer que les services formulaires sont utilisés pour la validation
- Vérifier les clés d'objet triées alphabétiquement dans les payloads
- S'assurer que `standalone: true` et les imports explicites

## Ajout dans @ta/planning

- Composant : `projects/features/planning/src/lib/components/`
- Service : `projects/features/planning/src/lib/services/`
- Type/DTO : `projects/features/planning/src/lib/services/dto/`
- Exporter depuis les `public-api.ts` correspondants
