# `<ta-progress>` — `ProgressComponent`
**Quand l'utiliser** : Barre de progression stylisée par couleur (sans valeurs numériques affichées).
**Template canonique** :
```html
<ta-progress [value]="60" [type]="'success'" [size]="'md'" />
```
**Inputs** :
- `value` : `number` — pourcentage `0-100` (`0` par défaut)
- `type` : `ColorType` — `'default'` | `'success'` | `'warning'` | `'alert'` | `'primary'`
- `size` : `TaSizes` — `'md'` (défaut)
