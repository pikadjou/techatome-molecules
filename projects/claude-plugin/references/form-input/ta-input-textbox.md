# `<ta-input-textbox>` — `TextBoxComponent`

**Quand l'utiliser** : Rendu d'un `InputTextBox`, `InputEmail`, `InputPassword`, `InputNumber`, `InputTimePicker`, `InputColorPicker`.

**Input supplémentaire** :
- `space: boolean` (défaut : `true`) — ajoute un espace bas

**Usage direct** :
```html
<ta-input-textbox [input]="myTextboxInput" [standalone]="true"></ta-input-textbox>
```

**Notes** : Étend `TaAbstractInputComponent<InputTextBox, string>`. Gère automatiquement le type `password` avec toggle show/hide (`hide` property). Appelle `input.iconClicked()` si défini. Utilise `InputLayoutComponent` pour label + erreurs.
