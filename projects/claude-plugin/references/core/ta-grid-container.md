# `<ta-grid-container>` — `TaGridContainerComponent`
**Quand l'utiliser** : Composant principal de grille de données (Tabulator) avec chargement paginé serveur, filtres, tri et groupement.
**Template canonique** :
```html
<ta-grid-container
  [gridId]="'my-entity-grid'"
  [model]="'MyEntity'"
  [colsMetaData]="colsMetaData"
  [preset]="presets"
  [initialData]="cachedData">
</ta-grid-container>
```
**Inputs** :
- `gridId: string` (required, hérité) — identifiant unique de la grille (partagé entre tous les composants ta-grid-*)
- `model: string` — nom du modèle GraphQL pour `TaGridViewService.getData$()`
- `colsMetaData: ColMetaData<T>[]` — définition des colonnes
- `preset: Preset[]` — presets de filtres prédéfinis
- `initialData: T[]` — données initiales (évite le premier chargement)

**Notes** : Charge les données via `TaGridViewService`. Persiste les filtres en session via `TaGridSessionService`. Tous les composants `ta-grid-*` avec le même `gridId` partagent le même état.
