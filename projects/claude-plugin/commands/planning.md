---
description: Assistant contextuel @ta/planning — catalogue compact + pointeurs vers references/planning/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/planning — Assistant contextuel

Tu es un expert de la librairie `@ta/planning` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service, DTO…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/planning/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, méthodes ou les types.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/planning`
- **Import path** : `@ta/planning`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/features/planning/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/planning/<name>.md`.

### Composants

- `ta-planning-calendar` (`PlanningCalendarComponent`) — calendrier de planning.
- `ta-planning-scheduler` (`PlanningSchedulerComponent`) — scheduler de planning.
- `ta-planning-card` (`PlanningCardComponent`) — carte de planning.
- `ta-create-note` (`CreateNoteComponent`) — formulaire de création de note.
- `ta-create-unavailability` (`CreateUnavailabilityComponent`) — formulaire d'indisponibilité.
- `ta-create-visit-event` (`CreateVisitEventComponent`) — formulaire de création d'événement visite.
- `ta-event-form` (`EventFormComponent`) — formulaire d'événement.
- `ta-visit-status` (`VisitStatusComponent`) — affichage du statut de visite.
- `ta-visit-card` (`VisitCardComponent`) — carte de visite.
- `ta-create-event-selection` (`CreateEventSelectionComponent`) — sélection de type d'événement à créer.

### Services de données

- `VisitsService` — CRUD des visites.
- `NotesService` — CRUD des notes.
- `UnavailabilitiesService` — CRUD des indisponibilités.
- `TimeEntryService` — entrées de temps.
- `ExternalsService` — événements externes.
- `NoteTypeService` — types de notes.
- `ColorSetService` — sets de couleurs.
- `CalendarSyncConfigurationService` — configuration de synchronisation calendrier.
- `UserCalendarSubscriptionService` — abonnements calendrier utilisateur.

### Services de formulaire

- `NoteTypeFormService` / `ColorSetFormService` / `CalendarSyncConfigFormService`
- `UnavailabilityFormService` / `CalendarNoteFormService`

### DTOs (`references/planning/dtos.md`)

- `Visit` / `VisitCreationPayloadInput` / `VisitModifierPayloadInput`
- `Unavailability` / `UnavailabilityCreationPayloadInput` / `UnavailabilityModifierPayloadInput`
- `CalendarEntry` / `CalendarTimeEntry`
- `Note` / `CalendarNoteCreationPayloadInput` / `CalendarNoteModifierPayloadInput`
- `NoteType` / `ColorSet` / `CalendarSyncConfig` / `UserCalendarSubscription`
- `ExternalEvent` / `UnavailabilityType` / `Event`

## Conventions

- Payloads de création : pattern `XxxCreationPayloadInput`.
- Payloads de modification : pattern `XxxModifierPayloadInput`.
- Services formulaires (`*FormService`) séparés des services de données.
- Utiliser les services de données (pas d'accès direct à `@ta/server`).
- Clés d'objets triées alphabétiquement.
