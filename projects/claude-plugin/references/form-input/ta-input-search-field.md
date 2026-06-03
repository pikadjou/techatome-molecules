# `<ta-search-field>` — `SearchFieldComponent`

**Quand l'utiliser** : Champ de recherche expandable avec icône de loupe — pour des filtres et barres de recherche, pas pour des formulaires.

**Inputs supplémentaires** :
- `isOpen: boolean` (défaut : `false`) — déployé par défaut
- `placeholder: string` (défaut : `''`)
- `space: boolean` (défaut : `true`)
- `type: TaSizes` (défaut : `'sm'`) — taille visuelle

**Output supplémentaire** :
- `valueCompleted: EventEmitter` — émet quand Entrée ou clic sur icône avec valeur

**Usage direct** :
```html
<ta-search-field [input]="mySearchInput" (valueCompleted)="onSearch($event)"></ta-search-field>
```

**Notes** : Étend `TaAbstractInputComponent<InputTextBox | InputNumber>`. Gère son propre `FormControl` (mode standalone intégré). Se déploie au premier clic si `isOpen = false`.
