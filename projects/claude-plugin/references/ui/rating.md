# `<ta-rating>` — `RatingComponent`
**Quand l'utiliser** : Afficher ou saisir une note par étoiles (lecture seule ou interactive).
**Template canonique** :
```html
<!-- Lecture seule -->
<ta-rating [value]="4.5" [readonly]="true" />

<!-- Interactif -->
<ta-rating [value]="note" [max]="5" [size]="24" (ratingChange)="onRate($event)" />
```
**Inputs** :
- `value` : `number` — note courante (`0` par défaut, décimales supportées pour demi-étoiles)
- `max` : `number` — nombre d'étoiles (`5` par défaut)
- `size` : `number` — taille en pixels (`24` par défaut)
- `color` : `string` — couleur remplie (`'#fbbf24'` par défaut)
- `emptyColor` : `string` — couleur vide (`'#d1d5db'` par défaut)
- `readonly` : `boolean` — `false` par défaut
- `showHover` : `boolean` — `true` par défaut
- `containerClass` : `string` — `'flex-row'` par défaut

**Outputs** : `(ratingChange)` : `number`, `(hoverChange)` : `number`.
