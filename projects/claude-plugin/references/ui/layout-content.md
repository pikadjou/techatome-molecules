# `<ta-layout-content>` — `LayoutContentComponent`
**Quand l'utiliser** : Zone de contenu scrollable principal d'une page. Voir `_composed/layout-page.md`.
**Template canonique** :
```html
<ta-layout-content>
  <router-outlet />
</ta-layout-content>
<ta-layout-content [autoHeight]="true">
  <!-- contenu sans hauteur fixe -->
</ta-layout-content>
```
**Inputs** :
- `autoHeight` : `boolean` — `false` par défaut — hauteur automatique au lieu de fill
