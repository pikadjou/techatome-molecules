# `InputRating<T = number>` (extends `InputBase<T>`)

**Quand l'utiliser** : Notation par étoiles.

**Champs ajoutés vs `InputBase`** :
- `max: number` (défaut : `5`) — nombre d'étoiles maximum
- `size: number` (défaut : `24`) — taille des étoiles en pixels
- `allowHalf: boolean` (défaut : `false`) — demi-étoiles autorisées
- `readonly: boolean` (défaut : `false`) — affichage seul sans interaction

**Interface de config** :
```typescript
new InputRating({ key: 'score', label: 'form.score', value: 3, max: 5 })
```

**Notes** : `controlType = 'rating'`. Rendu par `RatingComponent` (`ta-input-rating`) qui utilise `@ta/ui` `RatingComponent` en interne.
