# `<ta-filters-container>` — `FiltersContainerComponent`
**Quand l'utiliser** : Conteneur complet de filtres avec panneau latéral, affichage des tags actifs et bouton de toggle.
**Template canonique** :
```html
<ta-filters-container
  [form]="filterInputs"
  [activeFilter]="activeFilters"
  (filtersSelected)="onFiltersApplied($event)"
  (removedFilter)="onFilterRemoved($event)">
</ta-filters-container>
```
**Inputs** :
- `form: InputBase<any>[]` — tableau d'inputs du formulaire de filtres
- `activeFilter: ActiveFilterTag[]` — tags de filtres actifs affichés (`{ id: string; name: string }`)

**Outputs** :
- `filtersSelected` — émet les valeurs du formulaire lors de l'application
- `removedFilter: ActiveFilterTag` — émet quand un tag actif est supprimé

**Notes** : Gère lui-même le toggle du panneau. Utilise `<ta-filters-tag>` pour les badges et `<ta-form>` pour le formulaire.
