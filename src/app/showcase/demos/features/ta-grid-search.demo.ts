import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ColMetaData, ParameterType, TaGridComponent, TaGridContainerComponent, TaGridSearchComponent } from "@ta/features";

import { ComponentDemo } from "../../demo.types";

interface Order {
  id: number;
  reference: string;
  customer: string;
  category: "Électronique" | "Mode" | "Maison" | "Sport";
  amount: number;
}

const ORDERS: Order[] = [
  { id: 1, reference: "REF-6001", customer: "Amélie Laurent", category: "Électronique", amount: 129.9 },
  { id: 2, reference: "REF-6002", customer: "Karim Haddad", category: "Mode", amount: 54 },
  { id: 3, reference: "REF-6003", customer: "Sophie Meunier", category: "Maison", amount: 212.5 },
  { id: 4, reference: "REF-6004", customer: "Julien Petit", category: "Sport", amount: 89.99 },
  { id: 5, reference: "REF-6005", customer: "Nora El Idrissi", category: "Électronique", amount: 349 },
  { id: 6, reference: "REF-6006", customer: "Thomas Bernard", category: "Mode", amount: 22.9 },
  { id: 7, reference: "REF-6007", customer: "Léa Girard", category: "Maison", amount: 145 },
  { id: 8, reference: "REF-6008", customer: "Hugo Faure", category: "Sport", amount: 67.5 },
];

// isSearchField détermine les champs interrogés par le "OR" de la recherche
// globale (TaTableState._applyLocalFilter) : ici référence et client.
const COLUMNS: ColMetaData<Order>[] = [
  { name: "reference", type: ParameterType.String, isSearchField: true },
  { name: "customer", type: ParameterType.String, isSearchField: true },
  { name: "category", type: ParameterType.Enum, enumValues: ["Électronique", "Mode", "Maison", "Sport"] },
  { name: "amount", type: ParameterType.Number, align: "right" },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-search-default",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridSearchComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-search [gridId]="this.gridId"></ta-grid-search>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (order of items; track order.id) {
          <p>{{ order.reference }} — {{ order.customer }} — {{ order.amount }} €</p>
        }
      </ng-template>
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridSearchDefaultExample {
  readonly gridId = "demo-grid-search-default";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-search-placeholder",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridSearchComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-search [gridId]="this.gridId" placeholder="Rechercher une commande"></ta-grid-search>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (order of items; track order.id) {
          <p>{{ order.reference }}</p>
        }
      </ng-template>
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridSearchPlaceholderExample {
  readonly gridId = "demo-grid-search-placeholder";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
}

export const DEMO: ComponentDemo = {
  id: "ta-grid-search",
  group: "Grilles",
  summary: "Champ de recherche globale d'une grille, appliqué comme filtre `like` sur les colonnes marquées `isSearchField` du `ta-grid-container` partageant le même `gridId`.",
  examples: [
    {
      title: "Recherche globale",
      layout: "stack",
      description:
        "`placeholder` (clé de traduction) vaut par défaut `grid.search.placeholder` → « Rechercher ». Le filtre ne se déclenche pas à chaque frappe : `valueCompleted` (`ta-search-field`) n'émet que sur clic de la loupe ou touche Entrée. `valueChanged()` construit alors `{ field: 'search', type: 'like', value }` et l'applique via `this.grid.filters?.apply(...)`, qui retarde encore l'exécution de 500 ms (`TaGridFilters.apply`).",
      component: TaGridSearchDefaultExample,
    },
    {
      title: "Placeholder personnalisé",
      layout: "stack",
      description: "`placeholder` accepte aussi une chaîne littérale plutôt qu'une clé de traduction — `TranslatePipe` l'affiche telle quelle si elle ne correspond à aucune clé connue.",
      component: TaGridSearchPlaceholderExample,
    },
  ],
  notes:
    "Le champ est toujours déployé (`search.component.html` fixe `[isOpen]=\"true\"`) : `isOpen`, un input de `ta-search-field` lui-même, n'est pas exposé par `ta-grid-search`. La recherche est un simple filtre parmi d'autres au sens du modèle (`field: 'search'`) : `ta-grid-tags` l'affiche sous le libellé `grid.tag.search` plutôt que le nom d'une colonne — voir la démo `ta-grid-tags`.",
};
