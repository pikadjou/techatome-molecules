# `<ta-input-culture>` — `CultureComponent`

**Quand l'utiliser** : Rendu d'un `InputCulture` — dropdown de sélection de langue.

**Usage direct** :
```html
<ta-input-culture [input]="myCultureInput" [standalone]="true"></ta-input-culture>
```

**Notes** : Étend `TaAbstractInputComponent<InputCulture>`. Délègue entièrement à `DropdownComponent` — rendu identique à un dropdown standard. Les options de langues sont gérées dans le modèle `InputCulture`.
