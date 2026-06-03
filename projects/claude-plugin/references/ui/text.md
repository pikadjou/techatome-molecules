# `<ta-text>` — `TextComponent`
**Quand l'utiliser** : Texte stylisé avec taille, gras et couleur via design tokens.
**Template canonique** :
```html
<ta-text [size]="'sm'" [isBold]="true" [color]="'primary'">Mon texte</ta-text>
```
**Inputs** :
- `size` : `TaSizes` — `'md'` (défaut)
- `isBold` : `boolean` — `false` (défaut)
- `color` : `ColorType` — `'default'` (défaut) | `'primary'` | `'secondary'` | `'success'` | `'warning'` | `'alert'`

**Notes** : Génère la classe CSS `text-color-text-{color}`.
