# `<ta-layout-header>` — `LayoutHeaderComponent`
**Quand l'utiliser** : Zone d'en-tête dans `<ta-layout-page>`. Voir `_composed/layout-page.md`.
**Template canonique** :
```html
<ta-layout-header>
  <ta-layout-header-default [title]="'Titre'" (backEvent)="goBack()" />
</ta-layout-header>
```
**Notes** : Pas d'inputs. Conteneur structural.
