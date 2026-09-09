import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ColMetaData, ParameterType, Preset, TaGridComponent, TaGridContainerComponent, TaGridControlComponent, TaGridSearchComponent, TaGridTagsComponent } from "@ta/features";

import { ComponentDemo } from "../../demo.types";

interface Order {
  id: number;
  reference: string;
  customer: string;
  category: "Électronique" | "Mode" | "Maison" | "Sport";
  paid: boolean;
  amount: number;
}

const CATEGORIES: Order["category"][] = ["Électronique", "Mode", "Maison", "Sport"];

const ORDERS: Order[] = [
  { id: 1, reference: "REF-7001", customer: "Amélie Laurent", category: "Électronique", paid: true, amount: 129.9 },
  { id: 2, reference: "REF-7002", customer: "Karim Haddad", category: "Mode", paid: true, amount: 54 },
  { id: 3, reference: "REF-7003", customer: "Sophie Meunier", category: "Maison", paid: false, amount: 212.5 },
  { id: 4, reference: "REF-7004", customer: "Julien Petit", category: "Sport", paid: true, amount: 289.99 },
  { id: 5, reference: "REF-7005", customer: "Nora El Idrissi", category: "Électronique", paid: false, amount: 349 },
  { id: 6, reference: "REF-7006", customer: "Thomas Bernard", category: "Mode", paid: true, amount: 22.9 },
  { id: 7, reference: "REF-7007", customer: "Léa Girard", category: "Maison", paid: true, amount: 145 },
  { id: 8, reference: "REF-7008", customer: "Hugo Faure", category: "Sport", paid: false, amount: 267.5 },
];

const COLUMNS: ColMetaData<Order>[] = [
  { name: "reference", type: ParameterType.String, isSearchField: true },
  { name: "customer", type: ParameterType.String, isSearchField: true },
  { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, showOnSearch: true },
  { name: "paid", type: ParameterType.Boolean, showOnSearch: true },
  { name: "amount", type: ParameterType.Number, align: "right" },
];

// Choisis pour couvrir des branches différentes de TaGridTagsComponent.formatValue() :
// "=" sur un booléen (✓ / ✗), ">=" (symbole ≥), "like" (guillemets), "in" (liste jointe).
const PRESETS: Preset[] = [
  { name: "Payées", filters: [{ field: "paid", type: "=", value: true }] },
  { name: "Montant ≥ 200", filters: [{ field: "amount", type: ">=", value: 200 }] },
  { name: "Référence contient 00", filters: [{ field: "reference", type: "like", value: "00" }] },
  { name: "Mode ou Sport", filters: [{ field: "category", type: "in", value: ["Mode", "Sport"] }] },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-tags-active",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridControlComponent, TaGridSearchComponent, TaGridTagsComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns" [preset]="this.presets">
      <div class="flex-row g-space-sm align-center">
        <ta-grid-search [gridId]="this.gridId"></ta-grid-search>
        <ta-grid-control
          [gridId]="this.gridId"
          [show]="{ switchView: false, filters: false, preset: true, group: true }"
        ></ta-grid-control>
      </div>
      <ta-grid-tags [gridId]="this.gridId"></ta-grid-tags>
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
export class TaGridTagsActiveExample {
  readonly gridId = "demo-grid-tags";
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
  readonly presets = PRESETS;
}

export const DEMO: ComponentDemo = {
  id: "ta-grid-tags",
  group: "Grilles",
  summary: "Étiquettes des filtres et du regroupement actifs d'une grille, avec retrait individuel ou global — reflète l'état du `ta-grid-container` partageant le même `gridId`, sans aucun input propre.",
  examples: [
    {
      title: "Étiquettes de filtres actifs",
      layout: "stack",
      description:
        "Ouvrir « Vues rapides » et cliquer une entrée applique son `Filter[]` ; le badge apparu se ferme via son icône (`remove()`) ou via « Tout effacer » (`clear()`, qui vide aussi le regroupement). `formatValue()` varie l'affichage selon le type d'opérateur : « Payées » rend `✓`, « Montant ≥ 200 » rend `≥ 200`, « Référence contient 00 » rend `: « 00 »`, « Mode ou Sport » joint les valeurs (`: Mode, Sport`). Choisir un regroupement dans « Regrouper » ajoute une étiquette dédiée (`removeGroup()`) ; taper une recherche et valider (Entrée ou icône) ajoute une étiquette « Recherche » sous la clé fixe `grid.tag.search`, qui est bien traduite (contrairement aux libellés de colonnes).",
      component: TaGridTagsActiveExample,
    },
  ],
  notes:
    "Le texte « N résultats » toujours visible en tête du bandeau (`grid.tag.results`, pluriel géré par `PluralTranslatePipe`) n'est pas conditionné à la présence de filtres actifs : seule la liste d'étiquettes et le bouton « Tout effacer » le sont (`hasActiveFilters`). Les libellés de champs eux-mêmes (`labelKey()` → `col.inputLabel`) restent des clés `grid.<gridId>.core.<champ>` non traduites pour ce `gridId` de démonstration — comportement documenté sur la démo `ta-grid`.",
};
