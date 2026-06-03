---
description: Assistant contextuel @ta/calendar — catalogue compact + pointeurs vers references/calendar/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/calendar — Assistant contextuel

Tu es un expert de la librairie `@ta/calendar` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service, abstraction…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/calendar/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou l'API Bryntum.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/calendar`
- **Import path** : `@ta/calendar`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/calendar/`
- **Dépendance commerciale** : Bryntum (licence requise).

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/calendar/<name>.md`.

### Composants calendrier

- `ta-calendar` (`CalendarComponent`) — composant calendrier principal.
- `ta-calendar-by-day` (`CalendarByDayComponent`) — vue journalière.
- `ta-calendar-by-month` (`CalendarByMonthComponent`) — vue mensuelle.
- `ta-calendar-header` (`CalendarHeaderComponent`) — en-tête du calendrier.
- `ta-calendar-view` (`CalendarViewComponent`) — vue du calendrier.

### Composants scheduler (Bryntum)

- `ta-scheduler` (`SchedulerComponent`) — composant scheduler Bryntum principal.
- `ta-scheduler-view` (`SchedulerViewComponent`) — vue du scheduler.
- `ta-scheduler-header` (`SchedulerHeaderComponent`) — en-tête du scheduler.

### Composants bucket

- `ta-bucket-container` (`BucketContainerComponent`) — conteneur de buckets.
- `ta-bucket-item` (`BucketItemComponent`) — élément de bucket.

### Classes abstraites

- `AbstractCalendarComponent` — base pour les composants calendrier personnalisés.
- `AbstractSchedulerComponent` — base pour les composants scheduler personnalisés.
- `AbstractCellComponent` — base pour les cellules du scheduler (accès à `this.event`, `this.resource`).

### Services

- `InstancesService` — gestion des instances Bryntum.
- `ComponentRendererService` — rendu de composants Angular dans les cellules Bryntum.
- `CalendarTranslationService` — service de traduction du calendrier.

### Types et providers

- `CalendarTypes` — types de vues du calendrier.
- `VisitEventTypes` — types d'événements de visite.
- `DateFormatterProvider` — provider de formatage de dates (à ajouter dans les providers).

## Conventions

- Les composants Bryntum nécessitent une licence `.npmrc` configurée.
- Étendre `AbstractCalendarComponent` / `AbstractSchedulerComponent` pour les extensions.
- `ComponentRendererService` permet d'injecter des composants Angular dans les cellules Bryntum.
- `DateFormatterProvider` doit être dans les providers si des dates sont formatées.
- Utiliser `VisitEventTypes` pour typer les événements.
