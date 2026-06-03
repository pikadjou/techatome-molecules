# `<ta-input-color-picker>` — `ColorPickerComponent`

**Quand l'utiliser** : Rendu d'un `InputColorPicker`.

**Usage direct** :
```html
<ta-input-color-picker [input]="myColorInput" [standalone]="true"></ta-input-color-picker>
```

**Notes** : Étend `TaAbstractInputComponent<InputTextBox>`. Appelle `input.formControl?.setValue(value)` via `onChangeValue()`. Pas de `InputLayoutComponent` — rendu minimal.
