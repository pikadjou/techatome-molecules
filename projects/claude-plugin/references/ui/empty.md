# `<ta-empty>` — `EmptyComponent`
**Quand l'utiliser** : État vide d'une liste ou d'un contenu (aucun résultat, aucune donnée). Voir `_composed/container.md`.
**Template canonique** :
```html
<ta-empty [isEmpty]="list.length === 0" [text]="'ui.list.empty'" />
<ta-empty [isEmpty]="true" [emptyIcon]="'search_off'" [subtitle]="'Aucun résultat pour cette recherche'" />
```
**Inputs** :
- `isEmpty` : `boolean` — `true` (défaut)
- `isLight` : `boolean` — `false` — variante légère sans fond
- `showMessage` : `boolean` — `true`
- `text` : `string` — clé i18n (`'ui.container.empty.title'` par défaut)
- `subtitle` : `string` — `''` par défaut
- `emptyIcon` : `string` — `'sentiment_dissatisfied'` par défaut
- `iconSize` : `TaSizes | 'xl'` — `'xl'` par défaut
