import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { ColMetaData, ParameterType, TaGridComponent, TaGridContainerComponent, TaGridFiltersPanel } from "@ta/features";
import { ButtonComponent } from "@ta/ui";

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
  { id: 1, reference: "REF-3001", customer: "Amélie Laurent", category: "Électronique", amount: 129.9 },
  { id: 2, reference: "REF-3002", customer: "Karim Haddad", category: "Mode", amount: 54 },
  { id: 3, reference: "REF-3003", customer: "Sophie Meunier", category: "Maison", amount: 212.5 },
  { id: 4, reference: "REF-3004", customer: "Julien Petit", category: "Sport", amount: 89.99 },
  { id: 5, reference: "REF-3005", customer: "Nora El Idrissi", category: "Électronique", amount: 349 },
  { id: 6, reference: "REF-3006", customer: "Thomas Bernard", category: "Mode", amount: 22.9 },
  { id: 7, reference: "REF-3007", customer: "Léa Girard", category: "Maison", amount: 145 },
  { id: 8, reference: "REF-3008", customer: "Hugo Faure", category: "Sport", amount: 67.5 },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-filters-panel-open",
  imports: [ButtonComponent, TaGridComponent, TaGridContainerComponent, TaGridFiltersPanel],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-button (action)="this.isOpen.set(true)">Ouvrir les filtres</ta-button>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (order of items; track order.id) {
          <p>{{ order.reference }} — {{ order.customer }} — {{ order.amount }} €</p>
        }
      </ng-template>

      @if (this.isOpen()) {
        <ta-grid-filters-panel [gridId]="this.gridId" (closeEvent)="this.isOpen.set(false)"></ta-grid-filters-panel>
      }
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridFiltersPanelOpenExample {
  readonly gridId = "demo-grid-filters-panel";
  readonly orders = ORDERS;
  readonly isOpen = signal(false);

  readonly columns: ColMetaData<Order>[] = [
    { name: "reference", type: ParameterType.String },
    { name: "customer", type: ParameterType.String, showOnSearch: true },
    { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, showOnSearch: true },
    { name: "amount", type: ParameterType.Number, showOnSearch: true, align: "right" },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-grid-filters-panel",
  group: "Grilles",
  summary: "Panneau latéral plein écran portant le formulaire de filtres d'une grille (`ta-grid-form`) — sélectionné par `ta-grid-control` en cliquant « Filtres », mais montable seul.",
  examples: [
    {
      title: "Ouverture du panneau",
      layout: "stack",
      description:
        "Ce composant n'est habituellement rendu que par `ta-grid-control` (`@if (this.isFiltersOpen())`) : cette démo reproduit le même geste avec un simple bouton. Le panneau embarque `<ta-grid-form [showTitle]=\"false\" [showReset]=\"false\">` ; son pied de page ajoute son propre bouton « Tout effacer » (`reset()`, qui n'agit que sur les filtres — le regroupement se pilote depuis `ta-grid-control`) et un bouton « Voir N résultats » dont le libellé lit `resultCount` (= `this.grid.totalItems()`) à chaque frappe. `closeEvent` se déclenche sur la croix du panneau comme sur ce bouton « Voir N résultats ».",
      component: TaGridFiltersPanelOpenExample,
    },
  ],
  notes:
    "`ta-grid-filters-panel` a été renommé depuis `ta-grid-filters-modal` dans une refonte en cours de `@ta/features` ; un cas E2E hérité référence encore l'ancien nom et échoue de ce fait — signalé, hors périmètre de cette tâche. Comme pour les autres composants de la grille, les libellés de champs affichés dans le formulaire embarqué (`InputBase.label`, dérivé de `col.inputLabel`) sont des clés `grid.<gridId>.core.<champ>` non traduites pour ce `gridId` de démonstration.",
};
