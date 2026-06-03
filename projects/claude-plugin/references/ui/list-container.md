# `<ta-list-container>` — `ListContainerComponent`
**Quand l'utiliser** : Conteneur racine d'une liste d'éléments. Voir `_composed/list.md`.
**Template canonique** :
```html
<ta-list-container>
  @for (item of items; track item.id) {
    <ta-list-element (action)="onSelect(item)">
      <ta-list-title>{{ item.name }}</ta-list-title>
    </ta-list-element>
  }
</ta-list-container>
```
**Notes** : Pas d'inputs.
