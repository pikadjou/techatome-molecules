# `<ta-boolean-icon>` — `BooleanIconComponent`
**Quand l'utiliser** : Représenter visuellement une valeur booléenne (oui/non, actif/inactif) avec une icône colorée.
**Template canonique** :
```html
<ta-boolean-icon [value]="true" />
<ta-boolean-icon [value]="isActive" [size]="'lg'" />
```
**Inputs** :
- `value` : `boolean | null | undefined` — `true` → icône verte ✓, `false` → icône rouge ✗, `null/undefined` → rien
- `size` : `TaSizes` — `'md'` (défaut) | `'xs'` | `'sm'` | `'lg'` | `'xl'`
