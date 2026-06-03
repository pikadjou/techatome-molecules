# `<ta-filters-tag>` — `FiltersTagComponent`
**Quand l'utiliser** : Affiche les filtres actifs sous forme de badges supprimables.
**Template canonique** :
```html
<ta-filters-tag
  [activeFilter]="activeFilters"
  (removedFilter)="onRemove($event)">
</ta-filters-tag>
```
**Inputs** :
- `activeFilter: ActiveFilterTag[]` — liste des filtres actifs (`{ id: string; name: string }`)

**Outputs** :
- `removedFilter: ActiveFilterTag` — émet le filtre cliqué pour suppression

**Type** : `ActiveFilterTag = { id: string; name: string }`
