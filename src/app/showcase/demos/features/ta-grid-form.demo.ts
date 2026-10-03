import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ColMetaData, ParameterType, TaGridComponent, TaGridContainerComponent, TaGridFormComponent } from "@ta/features";

import { ComponentDemo } from "../../demo.types";

interface Order {
  id: number;
  reference: string;
  customer: string;
  category: "Électronique" | "Mode" | "Maison" | "Sport";
  orderedAt: string;
  amount: number;
  paid: boolean;
}

const CATEGORIES: Order["category"][] = ["Électronique", "Mode", "Maison", "Sport"];

const ORDERS: Order[] = [
  { id: 1, reference: "REF-4001", customer: "Amélie Laurent", category: "Électronique", orderedAt: "2024-01-12", amount: 129.9, paid: true },
  { id: 2, reference: "REF-4002", customer: "Karim Haddad", category: "Mode", orderedAt: "2024-01-18", amount: 54, paid: true },
  { id: 3, reference: "REF-4003", customer: "Sophie Meunier", category: "Maison", orderedAt: "2024-02-02", amount: 212.5, paid: false },
  { id: 4, reference: "REF-4004", customer: "Julien Petit", category: "Sport", orderedAt: "2024-02-14", amount: 89.99, paid: true },
  { id: 5, reference: "REF-4005", customer: "Nora El Idrissi", category: "Électronique", orderedAt: "2024-02-20", amount: 349, paid: true },
  { id: 6, reference: "REF-4006", customer: "Thomas Bernard", category: "Mode", orderedAt: "2024-03-01", amount: 22.9, paid: false },
  { id: 7, reference: "REF-4007", customer: "Léa Girard", category: "Maison", orderedAt: "2024-03-09", amount: 145, paid: true },
  { id: 8, reference: "REF-4008", customer: "Hugo Faure", category: "Sport", orderedAt: "2024-03-15", amount: 67.5, paid: true },
];

// showOnSearch pilote à la fois ta-grid-form et le menu "Regrouper" de
// ta-grid-control ; "paid" (booléen) n'est volontairement pas showOnSearch ici
// car BoolCol n'implémente pas getInputForm() — il ne produirait aucun champ.
const COLUMNS: ColMetaData<Order>[] = [
  { name: "reference", type: ParameterType.String, showOnSearch: true },
  { name: "customer", type: ParameterType.String },
  { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, showOnSearch: true },
  { name: "orderedAt", type: ParameterType.DateTime, showOnSearch: true },
  { name: "amount", type: ParameterType.Number, showOnSearch: true, align: "right" },
  { name: "paid", type: ParameterType.Boolean, align: "center" },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-form-basic",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridFormComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-form [gridId]="this.gridId"></ta-grid-form>
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
export class TaGridFormBasicExample {
  readonly gridId = "demo-grid-form-basic";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-form-group",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridFormComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-form [gridId]="this.gridId" [showGroup]="true"></ta-grid-form>
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
export class TaGridFormGroupExample {
  readonly gridId = "demo-grid-form-group";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-form-compact",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridFormComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-form
        [gridId]="this.gridId"
        [showTitle]="false"
        [showReset]="false"
        [showResultCount]="false"
      ></ta-grid-form>
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
export class TaGridFormCompactExample {
  readonly gridId = "demo-grid-form-compact";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
}

export const DEMO: ComponentDemo = {
  id: "ta-grid-form",
  group: "Grilles",
  summary: "Formulaire de filtres et de regroupement d'une grille, construit dynamiquement à partir des colonnes `showOnSearch` du `ta-grid-container` partageant le même `gridId`.",
  examples: [
    {
      title: "Formulaire de filtres",
      layout: "stack",
      description:
        "Chaque colonne `showOnSearch` fournit son propre champ via `col.getInputForm()` : `StringCol` → texte, `EnumCol` → liste déroulante, `DateCol` → sélecteur de date (avec plage), `NumberCol` → nombre. `ta-form` est monté avec `[onLive]=\"true\"` et `[canDisplayButton]=\"false\"` (`form.component.html`) : chaque changement de valeur soumet automatiquement, sans bouton — `TaGridFilters.apply()` retarde ensuite l'application réelle de 500 ms (`grid-filters.ts`).",
      component: TaGridFormBasicExample,
    },
    {
      title: "Avec regroupement",
      layout: "stack",
      description:
        "`showGroup=true` ajoute une seconde section, un menu déroulant listant les mêmes colonnes `showOnSearch` (`getGroupForm()`). La choisir appelle `setGroupBy()` sur la grille ; `reset()` (bouton de pied de formulaire) efface aussi le regroupement dans ce mode, contrairement à celui de `ta-grid-filters-panel` qui ne touche qu'aux filtres.",
      component: TaGridFormGroupExample,
    },
    {
      title: "Sans titre, sans compteur, ni réinitialisation",
      layout: "stack",
      description:
        "`showTitle`, `showResultCount` et `showReset` à `false` ne laissent que le formulaire lui-même — l'usage exact qu'en fait `ta-grid-filters-panel`, qui porte son propre titre de panneau et son propre bouton « Tout effacer ».",
      component: TaGridFormCompactExample,
    },
  ],
  notes:
    "`paid` (booléen) est déclarée `showOnSearch: false` ici à dessein : `BoolCol` n'implémente pas `getInputForm()` (hérite du `null` de `BaseCol`), une colonne booléenne `showOnSearch` n'ajoute donc aucun champ au formulaire — elle resterait filtrable uniquement via un `preset` ou les tags actifs. `title` (clé de traduction, défaut `grid.form.title` → « Affiner la recherche ») n'est pas fait varier entre les exemples : il ne change que la clé recherchée, pas le comportement.",
};
