# `<ta-list-extra-information>` — `ListExtraInformationComponent`
**Quand l'utiliser** : Information complémentaire à droite d'un élément de liste (date, valeur, action). Voir `_composed/list.md`.
**Template canonique** :
```html
<ta-list-extra-information>
  <ta-time-ago [date]="item.createdAt" />
</ta-list-extra-information>
```
**Notes** : Pas d'inputs.
