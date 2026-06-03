# `<ta-new>` — `NewComponent`
**Quand l'utiliser** : Point coloré "nouveau" superposé sur un élément (badge de nouveauté).
**Template canonique** :
```html
<div style="position: relative">
  <ta-new [visible]="item.isNew" [size]="'sm'" />
  <!-- contenu de l'élément -->
</div>
<ta-new [visible]="true" [isRelative]="true" />
```
**Inputs** :
- `visible` : `boolean` — `false` (défaut) — affiche/cache le point
- `isRelative` : `boolean` — `false` — positionnement relatif au lieu d'absolu
- `size` : `TaSizes` — `'md'` (défaut)

**Notes** : Wraps `<ta-bullet>`. Le parent doit avoir `position: relative` si `isRelative=false`.
