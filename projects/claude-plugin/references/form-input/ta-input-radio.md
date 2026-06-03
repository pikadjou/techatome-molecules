# `<ta-input-radio>` — `RadioComponent`

**Quand l'utiliser** : Rendu d'un `InputRadio`.

**Usage direct** :
```html
<ta-input-radio [input]="myRadioInput" [standalone]="true"></ta-input-radio>
```

**Notes** : Étend `TaAbstractInputComponent<InputRadio<any>>`. Gère les options avec icônes (`LocalIconComponent`). Clic sur option déjà sélectionnée la désélectionne (`setValue(null)`). Taille d'icône dynamique selon présence d'un label.
