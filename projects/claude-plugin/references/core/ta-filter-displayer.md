# `<ta-filter-displayer>` — `FilterDisplayerComponent`
**Quand l'utiliser** : Bouton/lien qui ouvre un panneau de filtres (bottom sheet sur mobile, panneau plein écran sur desktop).
**Template canonique** :
```html
<ta-filter-displayer
  [form]="filterInputs"
  [iconType]="'filter'"
  [container]="'button'"
  (filtersSelected)="onFiltersApplied($event)">
</ta-filter-displayer>
```
**Inputs** :
- `form: InputBase<any>[]` — inputs du formulaire
- `iconType: string` — icône du bouton (défaut: `'filter'`)
- `container: 'button' | 'link'` — style du déclencheur (défaut: `'button'`)

**Outputs** :
- `filtersSelected` — émet les valeurs sélectionnées

**Notes** : Adaptatif mobile/desktop. Sur mobile, ouvre un `MatBottomSheet`.
