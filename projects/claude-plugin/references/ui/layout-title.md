# `<ta-layout-title>` — `LayoutTitleComponent`
**Quand l'utiliser** : Zone de titre dans le layout de page (titre + actions optionnelles).
**Template canonique** :
```html
<ta-layout-title>
  <ta-title [level]="2">Ma liste</ta-title>
  <ta-button (action)="create()">Créer</ta-button>
</ta-layout-title>
```
**Notes** : Pas d'inputs. Conteneur structural flex avec `<ng-content>`.
