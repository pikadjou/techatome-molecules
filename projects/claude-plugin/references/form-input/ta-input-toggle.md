# `<ta-input-toggle>` — `ToggleComponent`

**Quand l'utiliser** : Rendu d'un `InputCheckBox` créé avec `toggle: true`.

**Usage direct** :
```html
<ta-input-toggle [input]="myToggleInput" [standalone]="true"></ta-input-toggle>
```

**Notes** : Étend `TaAbstractInputComponent<InputCheckBox, boolean>`. Même modèle que checkbox (`InputCheckBox`) mais rendu visuel différent (switch on/off). Sélectionné automatiquement par `<ta-inputs>` quand `controlType === 'toggle'`.
