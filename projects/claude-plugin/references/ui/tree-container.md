# `<ta-tree-container>` — `TaTreeContainerComponent`
**Quand l'utiliser** : Conteneur racine pour un arbre hiérarchique. Voir `_composed/` pour le pattern complet.
**Template canonique** :
```html
<ta-tree-container>
  <ta-tree-item>
    Noeud racine
    <ta-tree-children>
      <ta-tree-item>Enfant 1</ta-tree-item>
      <ta-tree-item>Enfant 2</ta-tree-item>
    </ta-tree-children>
  </ta-tree-item>
</ta-tree-container>
```
**Notes** : Pas d'inputs. Utilise `<ng-content>`.
