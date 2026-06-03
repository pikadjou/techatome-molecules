# `<ta-user-logo>` — `UserLogoComponent`
**Quand l'utiliser** : Avatar utilisateur avec photo ou fallback (trigram ou icône).
**Template canonique** :
```html
<ta-user-logo [user]="{ firstname: 'Jean', lastname: 'Dupont', picture: user.avatarUrl }" [size]="'lg'" />
```
**Inputs** :
- `user` (required) : `UserLogoData` — `{ firstname, lastname, picture? }`
- `size` : `TaSizes` — `'lg'` (défaut) | `'sm'` (16px) | `'md'` (24px) | `'xl'` (70px)
- `forcedSize` : `number | undefined` — taille en px (override `size`)
- `defaultType` : `'font' | 'trigram'` — fallback sans photo (`'font'` par défaut)
