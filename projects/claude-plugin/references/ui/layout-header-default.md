# `<ta-layout-header-default>` — `LayoutHeaderDefaultComponent`
**Quand l'utiliser** : En-tête standard avec bouton retour, titre et menu optionnel.
**Template canonique** :
```html
<ta-layout-header-default
  [title]="'Mon titre'"
  [showBack]="true"
  [menuTemplate]="menuTpl"
  (backEvent)="onBack()"
/>
```
**Inputs** :
- `showBack` : `boolean` — `true` (défaut)
- `title` : `string | undefined`
- `menuTemplate` : `TemplateRef<any> | undefined` — template pour le menu kebab

**Outputs** : `(backEvent)` — clic sur le bouton retour (appelle aussi `Location.back()`).
