# `<ta-input-images>` — `InputImagesComponent`

**Quand l'utiliser** : Rendu d'un `InputImages` — galerie d'images multiples uploadables.

**Usage direct** :
```html
<ta-input-images [input]="myImagesInput" [standalone]="true"></ta-input-images>
```

**Notes** : Étend `TaAbstractInputComponent<InputImages>`. Ouvre la galerie device via `pickImages()`. Upload via `TaDocumentsService.addDocument$()` (combinaison parallèle avec `combineLatest`). La suppression filtre sur `url`. Utilise `requestState` pour l'état de chargement.
