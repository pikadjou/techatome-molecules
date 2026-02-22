---
description: Assistant contextuel @ta/core — taGridMetaDataService, taGridDataService, AG Grid, maps, IDataService
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/core — Assistant contextuel

Tu es un expert de la librairie `@ta/core` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/core`
**Import path** : `@ta/core`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/core/`

## Exports clés

### Composants principaux (`lib/components/`)

- `taDocumentsComponent` — `ta-documents` : gestion des documents
- `taUploadDocumentComponent` — upload de documents de visite
- `taTextToClipboardComponent` — `ta-text-to-clipboard` : copie dans le presse-papiers
- `taFiltersComponent` — `ta-filters` : composant de filtres
- `taFiltersFormComponent` — `ta-filters-form` : formulaire de filtres
- `taFiltersTagComponent` — `ta-filters-tag` : tags de filtres actifs
- `taFiltersContainerComponent` — `ta-filters-container`
- `taFilterContainerComponent` — `ta-filter-container`
- `taFilterDisplayerComponent` — `ta-filter-displayer`
- `taSearchDisplayerComponent` — `ta-search-displayer` : affichage de recherche
- `taSearchHistoryDisplayerComponent` — historique de recherche
- `taCallTemplateComponent` — template d'appel téléphonique
- `taMailTemplateComponent` — template d'email
- `taReturnTemplateComponent` — template de retour
- `taSnoozeTemplateComponent` — template de report

### Module Grid (AG Grid)

- `taAgGridComponent` — `ta-ag-grid` : grille de données
- `taBaseHeaderComponent` — `ta-base-header` : en-tête colonne
- `taFieldsSelectionComponent` — `ta-fields-selection` : sélection de colonnes
- `taFieldsSelectionDisplayerComponent` — affichage sélection colonnes
- `taLoadingComponent` — `ta-loading` : indicateur de chargement grid
- `taPaginationComponent` — `ta-pagination` : pagination
- Composants template de cellule : `BoolComponent`, `BulletNumberComponent`, `ColorSetComponent`, `ContextMenuItemComponent`, `CriticityComponent`, `DateComponent`, `MissionTypeComponent`, `MultiFunctionComponent`, `MultiRoleComponent`, `TranslationComponent`, `BusinessTypeComponent`, `GenderComponent`, `ContactTypesComponent`, `CultureComponent`
- `taViewsSelectionComponent` — `ta-views-selection` : sélection de vues
- `taCustomHeaderComponent` — `ta-custom-header`
- `taGridControlComponent` — `ta-grid-control`
- `taGridCursorComponent` — `ta-grid-cursor`
- `taGridTagComponent` — `ta-grid-tag`
- `GridDataService`, `GridMetadataService` — services de gestion de la grille
- `GridData`, `GridTypes`, `MetadataDto` — modèles

### Module Maps

- `taMapComponent` — `ta-map` : carte géographique
- `provideMap()` — provider pour la carte

### Module Communication

- Services et composants de gestion de la communication

### Module Strapi (CMS)

- `StrapiModule`, `StrapiComponent` — intégration Strapi

### Services

- `DynamicTranslationService` — traductions dynamiques
- `CoreTranslationService` — service de traduction du core

### Module

- `CoreModule` — module NgModule (deprecated)

## Patterns d'utilisation

### AG Grid

```typescript
import { taAgGridComponent } from '@ta/core';
import { GridData } from '@ta/core';

@Component({
  standalone: true,
  imports: [taAgGridComponent],
  template: ` <ta-ag-grid [data]="gridData" [columns]="columnDefs" (rowClicked)="onRowClick($event)" /> `,
})
export class MyGridComponent {
  gridData: GridData = { items: [], total: 0 };
  columnDefs = [
    { field: 'name', headerName: 'Nom' },
    { field: 'status', headerName: 'Statut' },
  ];
}
```

### Filtres

```typescript
import { taFiltersComponent, taFiltersTagComponent } from '@ta/core';

@Component({
  standalone: true,
  imports: [taFiltersComponent, taFiltersTagComponent],
  template: `
    <ta-filters (filtersChanged)="onFiltersChanged($event)">
      <ta-filters-tag [filters]="activeFilters" />
    </ta-filters>
  `
})
```

### Carte géographique

```typescript
import { taMapComponent, provideMap } from '@ta/core';

// Dans les providers
providers: [provideMap()],

// Dans le composant
@Component({
  standalone: true,
  imports: [taMapComponent],
  template: `<ta-map [markers]="markers" />`
})
```

### GridDataService

```typescript
import { GridDataService, GridMetadataService } from '@ta/core';

@Injectable({ providedIn: 'root' })
export class MyGridService {
  private gridData = inject(GridDataService);

  loadData(params: GridParams) {
    return this.gridData.load(params);
  }
}
```

## Conventions

- `CoreModule` est deprecated — utiliser les composants standalone
- AG Grid est le composant de grille standard pour les listes de données
- Utiliser `GridDataService` pour la pagination/tri/filtre côté serveur
- Les templates de cellule (`BoolComponent`, `DateComponent`, etc.) s'utilisent via la configuration `cellRenderer` d'AG Grid

## Revue de code

- Vérifier que `standalone: true` et les imports explicites
- S'assurer que AG Grid utilise `GridDataService` pour les données paginées
- Vérifier que `provideMap()` est dans les providers si `taMapComponent` est utilisé
- Vérifier les clés d'objet triées alphabétiquement dans les `columnDefs`

## Ajout d'un nouveau composant dans @ta/core

1. Choisir le sous-module approprié (components, grid, maps, communication)
2. Créer dans `projects/core/src/lib/[module]/components/`
3. Exporter depuis le `public-api.ts` du sous-module
4. S'assurer que `standalone: true`
