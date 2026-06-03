---
description: Assistant contextuel @ta/core — catalogue compact + pointeurs vers references/core/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/core — Assistant contextuel

Tu es un expert de la librairie `@ta/core` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service, module…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/core/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, outputs ou l'API.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/core`
- **Import path** : `@ta/core`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/core/`

## Catalogue

Format : `selector` (`Class`) — description courte. Le fichier de référence est `references/core/<name>.md`.

### Composants — Filtres et recherche

- `ta-filters` (`FiltersComponent`) / `ta-filters-container` (`FiltersContainerComponent`) — composant de filtres.
- `ta-filter-container` (`FilterContainerComponent`) / `ta-filter-displayer` (`FilterDisplayerComponent`) — conteneur et affichage d'un filtre.
- `ta-filters-tag` (`FiltersTagComponent`) — tags des filtres actifs.
- `ta-search-displayer` (`SearchDisplayerComponent`) — affichage de recherche.
- `ta-search-history-displayer` (`SearchHistoryDisplayerComponent`) — historique de recherche.

### Composants — Documents

- `ta-documents` (`DocumentsComponent`) — gestion des documents.
- `ta-upload-document` (`UploadDocumentModal`) — upload de documents.
- `ta-text-to-clipboard` (`TextToClipboardComponent`) — copie dans le presse-papiers.

### Module AG Grid

- `ta-ag-grid` (`TaGridComponent`) — grille de données AG Grid.
- `ta-base-header` (`TaGridContainerComponent`) — en-tête colonne.
- `ta-fields-selection` (`TaGridSearchComponent`) — sélection de colonnes.
- `ta-pagination` (`TaGridControlComponent`) — pagination et contrôles.
- `ta-grid-control` (`TaGridFormComponent`) — contrôles de grille.
- `ta-grid-tag` (`TaGridTagsComponent`) — tags de grille.
- `GridDataService` / `GridMetadataService` — services de données AG Grid.
- Templates de cellule : `BoolComponent`, `DateComponent`, `CriticityComponent`, `TranslationComponent`, `CultureComponent`…

### Module Maps

- `ta-map` (`MapComponent`) — carte géographique.
- `provideMap()` — provider pour la carte (à ajouter dans les providers).
- `provideGoogleMaps()` / `provideGTM()` — providers Google.

### Services

- `DynamicTranslationService` — traductions dynamiques.
- `CoreTranslationService` — service de traduction du core.

## Conventions

- `CoreModule` est deprecated — utiliser les composants standalone.
- AG Grid est le composant standard pour les listes de données.
- Utiliser `GridDataService` pour la pagination/tri/filtre côté serveur.
- `provideMap()` obligatoire dans les providers si `ta-map` est utilisé.
- Clés d'objets triées alphabétiquement dans les `columnDefs`.
