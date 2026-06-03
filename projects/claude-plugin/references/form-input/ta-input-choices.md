# `<ta-input-choices>` — `InputChoicesComponent`

**Quand l'utiliser** : Rendu d'un `InputChoices` — sélection avancée avec panel, recherche et templates.

**Usage direct** :
```html
<ta-input-choices [input]="myChoicesInput" [standalone]="true"></ta-input-choices>
```

**Notes** : Étend `TaAbstractInputComponent<InputChoices>`. Gère deux modes :
- **local** : filtre via `inputSearch.changeValue$` + `combineLatest` sur `bOptions$`
- **avancé** : `advancedSearch$` debounced 500ms, cumule les résultats avec les déjà sélectionnés

`close()` ferme via `TaOverlayPanelComponent`. Supporte `choiceTemplate` pour rendu custom. `focusSearch: true` focus automatiquement la recherche à l'ouverture.
