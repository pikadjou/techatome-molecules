# `<ta-bullet>` — `BulletComponent`
**Quand l'utiliser** : Petit indicateur visuel coloré (point de couleur) pour signaler un état ou une catégorie.
**Template canonique** :
```html
<ta-bullet [type]="'success'" [size]="'sm'" />
```
**Inputs** :
- `size` : `TaSizes` — `'sm'` (défaut)
- `type` : `ColorType | 'notif'` — `'default'` (défaut) | `'success'` | `'warning'` | `'alert'` | `'notif'`
