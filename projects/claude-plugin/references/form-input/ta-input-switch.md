# `<ta-input-switch>` — `SwitchComponent`

**Quand l'utiliser** : Rendu d'un `InputSwitch` — délègue vers le composant correspondant au `matchtype` courant.

**Usage direct** :
```html
<ta-input-switch [input]="mySwitchInput" [standalone]="true"></ta-input-switch>
```

**Notes** : Étend `TaAbstractInputComponent<InputSwitch>`. Affiche dynamiquement `TextBoxComponent`, `CheckboxComponent`, `DatePickerComponent` ou `DropdownComponent` selon `input.matchtype()`. Le `@switch` template lit le signal `matchtype`.
