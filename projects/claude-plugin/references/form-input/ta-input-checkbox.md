# `<ta-input-checkbox>` — `CheckboxComponent`

**Quand l'utiliser** : Rendu d'un `InputCheckBox` (avec `toggle: false`).

**Usage direct** :
```html
<ta-input-checkbox [input]="myCheckboxInput" [standalone]="true"></ta-input-checkbox>
```

**Notes** : Étend `TaAbstractInputComponent<InputCheckBox, boolean>`. Utilise `FormLabelComponent` pour le label. Voir `<ta-input-toggle>` pour le rendu toggle switch.
