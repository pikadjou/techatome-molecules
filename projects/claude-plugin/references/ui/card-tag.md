# `<ta-card-tag>` — `CardTagComponent`
**Quand l'utiliser** : Zone de tags/badges dans une carte. Voir `_composed/card.md`.
**Template canonique** :
```html
<ta-card-tag>
  <ta-badge [value]="'Urgent'" [type]="'danger'" />
</ta-card-tag>
```
**Notes** : Pas d'inputs. Conteneur pour des `<ta-badge>` ou autres indicateurs.
