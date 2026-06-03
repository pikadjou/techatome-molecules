# `<ta-layout-page>` — `LayoutPageComponent`
**Quand l'utiliser** : Gabarit de page principal avec navigation latérale. Voir `_composed/layout-page.md`.
**Template canonique** :
```html
<ta-layout-page>
  <ta-layout-header>
    <ta-layout-header-default [title]="'Ma page'" />
  </ta-layout-header>
  <ta-layout-content>
    <!-- contenu de la page -->
  </ta-layout-content>
</ta-layout-page>
```
**Notes** : Pas d'inputs. Compose avec `ta-layout-header`, `ta-layout-content`, `ta-layout-nav`.
