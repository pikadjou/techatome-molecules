# `<ta-input-rating>` — `RatingComponent`

**Quand l'utiliser** : Rendu d'un `InputRating`.

**Usage direct** :
```html
<ta-input-rating [input]="myRatingInput" [standalone]="true"></ta-input-rating>
```

**Notes** : Étend `TaAbstractInputComponent<InputRating, number>`. Utilise `RatingComponent` de `@ta/ui` en interne. La méthode `onRatingChange(value)` met à jour le `formControl` et émet `onChange`. `max`, `size`, `allowHalf`, `readonly` proviennent du modèle.
