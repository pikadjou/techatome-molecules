import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ColMetaData, ParameterType, TaGridComponent, TaGridContainerComponent, TaGridHighlightFiltersComponent } from "@ta/features";

import { ComponentDemo } from "../../demo.types";

interface Order {
  id: number;
  reference: string;
  customer: string;
  category: "Électronique" | "Mode" | "Maison" | "Sport";
  amount: number;
}

const CATEGORIES: Order["category"][] = ["Électronique", "Mode", "Maison", "Sport"];

const ORDERS: Order[] = [
  { id: 1, reference: "REF-5001", customer: "Amélie Laurent", category: "Électronique", amount: 129.9 },
  { id: 2, reference: "REF-5002", customer: "Karim Haddad", category: "Mode", amount: 54 },
  { id: 3, reference: "REF-5003", customer: "Sophie Meunier", category: "Maison", amount: 212.5 },
  { id: 4, reference: "REF-5004", customer: "Julien Petit", category: "Sport", amount: 89.99 },
  { id: 5, reference: "REF-5005", customer: "Nora El Idrissi", category: "Électronique", amount: 349 },
  { id: 6, reference: "REF-5006", customer: "Thomas Bernard", category: "Mode", amount: 22.9 },
  { id: 7, reference: "REF-5007", customer: "Léa Girard", category: "Maison", amount: 145 },
  { id: 8, reference: "REF-5008", customer: "Hugo Faure", category: "Sport", amount: 67.5 },
];

// highlighted (et non showOnSearch) pilote ce que ce composant affiche.
const COLUMNS: ColMetaData<Order>[] = [
  { name: "reference", type: ParameterType.String },
  { name: "customer", type: ParameterType.String, highlighted: true },
  { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, highlighted: true },
  { name: "amount", type: ParameterType.Number, highlighted: true, align: "right" },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-highlight-filters-default",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridHighlightFiltersComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-highlight-filters [gridId]="this.gridId"></ta-grid-highlight-filters>
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
export class TaGridHighlightFiltersDefaultExample {
  readonly gridId = "demo-grid-highlight-default";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-highlight-filters-no-count",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridHighlightFiltersComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-highlight-filters [gridId]="this.gridId" [showResultCount]="false"></ta-grid-highlight-filters>
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
export class TaGridHighlightFiltersNoCountExample {
  readonly gridId = "demo-grid-highlight-no-count";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
}

export const DEMO: ComponentDemo = {
  id: "ta-grid-highlight-filters",
  group: "Grilles",
  summary: "Bandeau de filtres mis en avant hors du panneau replié — un sous-ensemble de colonnes marquées `highlighted`, toujours visible au-dessus de la grille.",
  examples: [
    {
      title: "Filtres mis en avant",
      layout: "stack",
      description:
        "Ne s'affiche que si au moins une colonne porte `highlighted: true` (`@if (this.highlightForm().length > 0)`) — sans cela, ce composant ne rend rien du tout. Le formulaire est en soumission live (`onLive`) ; dès qu'un filtre devient actif, un bouton « Tout effacer » apparaît à côté du compteur de résultats (`showReset() && hasActiveFilters()`).",
      component: TaGridHighlightFiltersDefaultExample,
    },
    {
      title: "Sans compteur de résultats",
      layout: "stack",
      description: "`showResultCount=false` masque le texte « N résultats » ; le bouton de réinitialisation reste soumis à la même condition (filtre actif).",
      component: TaGridHighlightFiltersNoCountExample,
    },
  ],
  notes:
    "Contrairement à `ta-grid-form`, ce composant lit `highlighted` et non `showOnSearch` pour choisir ses champs (`getHighlightedFiltersForm()`) : une colonne peut être mise en avant ici sans apparaître dans le panneau de filtres complet, et réciproquement. Les libellés de champs restent des clés `grid.<gridId>.core.<champ>` non traduites pour ce `gridId` de démonstration — comportement documenté sur la démo `ta-grid`.",
};
