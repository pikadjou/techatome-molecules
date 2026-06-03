# `<ta-label>` — `LabelComponent`
**Quand l'utiliser** : Étiquette de formulaire ou label textuel stylisé par type/taille.
**Template canonique** :
```html
<ta-label [type]="'primary'" [size]="'md'">Mon label</ta-label>
```
**Inputs** :
- `size` : `TaSizes` — `'md'` (défaut)
- `type` : `ColorType` — `'default'` (défaut) | `'primary'` | `'success'` | `'warning'` | `'alert'`

**Notes** : Utilise `<ng-content>` pour le texte affiché.
