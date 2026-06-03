# `<ta-layout-side>` — `LayoutSideComponent`
**Quand l'utiliser** : Panneau latéral dans un layout deux colonnes. Voir `_composed/layout-with-panel.md`.
**Template canonique** :
```html
<ta-layout-side>
  <ta-layout-side-content>
    <!-- contenu du panneau -->
  </ta-layout-side-content>
  <ta-layout-side-cta>
    <ta-button (action)="save()">Enregistrer</ta-button>
  </ta-layout-side-cta>
</ta-layout-side>
```
**Notes** : Pas d'inputs. Conteneur structural.
