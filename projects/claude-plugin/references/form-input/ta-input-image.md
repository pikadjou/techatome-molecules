# `<ta-input-image>` — `InputImageComponent`

**Quand l'utiliser** : Rendu d'un `InputImages` comme une seule image (avatar/photo) — affiche via `UserLogoComponent`.

**Usage direct** :
```html
<ta-input-image [input]="myImagesInput" [standalone]="true"></ta-input-image>
```

**Getters** :
- `selection` — URLs des images
- `userInfo` — première image en format `{ picture, firstname, lastname }`
- `isLimitReached: boolean` — `true` si `input.limit` atteint

**Notes** : Étend `TaAbstractInputComponent<InputImages>`. Utilise le même modèle `InputImages` que `ta-input-images` mais rendu différent (vue avatar). Sélectionné via `controlType` approprié dans `<ta-inputs>`.
