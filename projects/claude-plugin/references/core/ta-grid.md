# `<ta-grid>` — `TaGridComponent`
**Quand l'utiliser** : Affichage de la grille Tabulator avec basculement vue carte (template personnalisé).
**Template canonique** :
```html
<ta-grid
  [gridId]="'my-entity-grid'"
  [cardTemplate]="cardTpl"
  (rowClicked)="onRowClick($event)">
</ta-grid>

<ng-template #cardTpl let-items="items">
  @for (item of items; track item.id) {
    <ta-card>{{ item.name }}</ta-card>
  }
</ng-template>
```
**Inputs** :
- `gridId: string` (required) — identifiant partagé avec `ta-grid-container`
- `cardTemplate: TemplateRef<{ items: T[] }>` (required) — template pour la vue carte

**Outputs** :
- `rowClicked: T` — ligne cliquée dans la vue grille

**Notes** : Doit être utilisé avec `<ta-grid-container>` qui initialise les données. La vue bascule entre grille Tabulator et la card template.
