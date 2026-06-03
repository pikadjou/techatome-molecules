# `<ta-filter-container>` — `FilterContainerComponent`
**Quand l'utiliser** : Panneau latéral de filtres avec boutons Appliquer/Vider, sans gestion du toggle externe.
**Template canonique** :
```html
<ta-filter-container
  [form]="filterInputs"
  (filtersSelected)="onFiltersApplied($event)">
</ta-filter-container>
```
**Inputs** :
- `form: InputBase<any>[]` — inputs du formulaire de filtres

**Outputs** :
- `filtersSelected` — émet les valeurs appliquées (null si vider)

**Notes** : Expose `askValidation$` (Subject) et `askClear$` (Subject) pour déclencher validation/reset depuis l'extérieur.
