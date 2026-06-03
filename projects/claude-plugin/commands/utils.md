---
description: Assistant contextuel @ta/utils — catalogue compact + pointeurs vers references/utils/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/utils — Assistant contextuel

Tu es un expert de la librairie `@ta/utils` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (classe, directive, pipe, helper, type…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/utils/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les signatures ou l'API des classes de base.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/utils`
- **Import path** : `@ta/utils`
- **Localisation** : `projects/utils/`

## Catalogue

Format : nom (`Class/Function`) — description courte. Le fichier de référence est `references/utils/<name>.md`.

### Classes abstraites (`references/utils/abstract-classes.md`)

- `TaAbstractComponent` — base minimale pour tous les composants Angular.
- `TaBaseComponent` — composant de base avec gestion du cycle de vie et subscriptions.
- `TaBasePage` — base pour les pages (étend TaBaseComponent).
- `TaBaseModal` — base pour les modales (étend TaBaseComponent).

### Helpers de classe (`references/utils/helpers.md`)

- `SubscriberHandler` — gestion centralisée des subscriptions RxJS.
- `RequestState` — machine d'état pour les opérations asynchrones (asked/completed/onError/isLoading).
- `BreakpointDetection` — détection responsive des breakpoints.
- `HorizontalScroll` — gestion du scroll horizontal.

### Directives (`references/utils/directives.md`)

- `StopPropagationDirective` — stoppe la propagation des événements DOM.
- `TypedTemplateDirective` — directive de typage de template.
- `LetDirective` — directive `*taLet` pour assigner des valeurs dans le template.
- `OnRenderDirective` — directive déclenchée au rendu.
- `DndDirective` — drag-and-drop.

### Pipes (`references/utils/pipes.md`)

- `FileSizePipe` — formatage de taille de fichier (bytes → Ko/Mo/Go).
- `JoinPipe` — jointure d'un tableau en chaîne.
- `SafePipe` — DomSanitizer pipe (safe HTML, safe URL…).
- `PluralTranslatePipe` — gestion du pluriel dans les traductions.

### Services (`references/utils/services.md`)

- `ReadOnlyContextService` — gestion du contexte lecture seule global.

### Fonctions utilitaires (`references/utils/functions.md`)

- `isNonNullable()`, `getUniqueArray()`, `toArray()`, `filterNonNullableItems()`
- `capitalizeFirstLetter()`, `isURL()`, `newGuid()`, `merge()`, `compare()`
- `getModifiedValues()`, `copyTextToClipboard()`, `isLight()`, `extractEnum()`
- `fullName()`, `compressImage()`, `downloadFile()`, `octetsToMo()`
- `search()`, `sort()`, `createRange()`, `percentage()`, `roundToDecimal()`

### Types (`references/utils/types.md`)

- `Civility` — civilité (Mr/Mme/…).
- `Culture` — culture/langue.
- `EFileExtension` — extensions de fichiers supportées.
- `FileData<T>` — donnée de fichier générique.
- `FileType` — type de fichier.
- `MessageLevel` — niveau de message.
- `RecursivePartial<T>` — Partial récursif.

## Conventions

- **Toujours étendre** `TaBaseComponent` pour les composants avec subscriptions.
- **`_registerSubscription()`** sur chaque subscription (jamais `takeUntil` manuel).
- Pipes et directives sont `standalone: true` — importer individuellement.
- Préférer `inject()` à l'injection par constructeur.
