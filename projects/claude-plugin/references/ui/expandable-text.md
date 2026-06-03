# `<ta-expandable-text>` — `ExpandableTextComponent`
**Quand l'utiliser** : Bloc de texte long tronqué avec un bouton "Voir plus/moins".
**Template canonique** :
```html
<ta-expandable-text [height]="120">
  {{ item.description }}
</ta-expandable-text>
```
**Inputs** :
- `height` : `number` — hauteur max en pixels avant troncature (`100` par défaut)

**Notes** : Le bouton "Voir plus" n'apparaît que si le texte dépasse la hauteur définie. Utilise `<ng-content>`.
