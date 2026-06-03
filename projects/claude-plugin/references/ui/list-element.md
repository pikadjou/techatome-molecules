# `<ta-list-element>` — `ListElementComponent`
**Quand l'utiliser** : Ligne de liste cliquable avec séparateur optionnel. Voir `_composed/list.md`.
**Template canonique** :
```html
<ta-list-element [withSeparator]="true" [flexColumn]="false" (action)="onSelect()">
  <ta-list-title>Titre</ta-list-title>
  <ta-list-sub-title>Sous-titre</ta-list-sub-title>
  <ta-list-tag><ta-badge value="Tag" /></ta-list-tag>
</ta-list-element>
```
**Inputs** :
- `withSeparator` : `boolean` — `true` (défaut) — ligne de séparation en bas
- `flexColumn` : `boolean` — `false` — disposition en colonne au lieu de ligne

**Outputs** : `(action)` — clic sur l'élément.
