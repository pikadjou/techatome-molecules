# `<ta-wrapped-icon>` — `WrappedIconComponent`
**Quand l'utiliser** : Icône dans un conteneur circulaire/carré coloré (badge icône).
**Template canonique** :
```html
<ta-wrapped-icon [icon]="'star'" [type]="'primary'" [size]="'md'" />
```
**Inputs** :
- `icon` (required) : `string` — icône Material
- `type` : `ColorType` — `'default'` (défaut) | `'primary'` | `'success'` | `'warning'` | `'alert'`
- `size` : `TaSizes` — `'md'` (défaut)
