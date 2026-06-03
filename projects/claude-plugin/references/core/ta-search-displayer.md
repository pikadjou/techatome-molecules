# `<ta-search-displayer>` — `SearchDisplayerComponent`
**Quand l'utiliser** : Bouton/lien ouvrant une barre de recherche avec historique (bottom sheet sur mobile).
**Template canonique** :
```html
<ta-search-displayer
  [container]="'button'"
  [placeholder]="'Rechercher...'"
  [searchHistory]="{ type: 'myEntityType' }"
  (valueCompleted)="onSearch($event)">
</ta-search-displayer>
```
**Inputs** :
- `container: 'button' | 'link'` — style du déclencheur
- `placeholder: string` — texte placeholder
- `searchHistory: { type: string }` — type d'entité pour l'historique

**Outputs** :
- `valueCompleted` — émet le résultat de recherche sélectionné
