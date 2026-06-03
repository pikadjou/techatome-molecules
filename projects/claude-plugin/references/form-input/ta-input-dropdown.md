# `<ta-input-dropdown>` — `DropdownComponent`

**Quand l'utiliser** : Rendu d'un `InputDropdown`.

**Input supplémentaire** :
- `space: boolean` (défaut : `true`)

**Usage direct** :
```html
<ta-input-dropdown [input]="myDropdownInput" [standalone]="true"></ta-input-dropdown>
```

**Notes** : Étend `TaAbstractInputComponent<InputDropdown<any>>`. Utilise `TaOverlayPanelComponent` pour le panel de sélection. Gère `multiple` et `withSearch` nativement. `filteredOptions` pour le filtre interne.
