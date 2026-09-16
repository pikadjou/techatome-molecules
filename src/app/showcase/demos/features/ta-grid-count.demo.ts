import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ColMetaData,
  ParameterType,
  TaGridComponent,
  TaGridContainerComponent,
  TaGridCountComponent,
  TaGridSearchComponent,
} from "@ta/features";

import { ComponentDemo } from "../../demo.types";

interface Estate {
  id: number;
  name: string;
  city: string;
  rent: number;
}

const ESTATES: Estate[] = [
  { id: 1, name: "Rue du Bailli 84", city: "Bruxelles", rent: 1250 },
  { id: 2, name: "Avenue Louise 12", city: "Bruxelles", rent: 1890 },
  { id: 3, name: "Quai aux Briques 7", city: "Bruxelles", rent: 980 },
  { id: 4, name: "Place Flagey 3", city: "Ixelles", rent: 1420 },
  { id: 5, name: "Chaussée de Waterloo 210", city: "Ixelles", rent: 1100 },
];

const COLUMNS: ColMetaData<Estate>[] = [
  { name: "name", type: ParameterType.String, isSearchField: true },
  { name: "city", type: ParameterType.String, isSearchField: true },
  { name: "rent", type: ParameterType.Number, align: "right" },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-count-default",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridCountComponent, TaGridSearchComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.estates" [colsMetaData]="this.columns">
      <div class="flex-row g-space-sm align-center">
        <ta-grid-search [gridId]="this.gridId"></ta-grid-search>
        <ta-grid-count [gridId]="this.gridId"></ta-grid-count>
      </div>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (estate of items; track estate.id) {
          <p>{{ estate.name }} — {{ estate.city }}</p>
        }
      </ng-template>
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridCountDefaultExample {
  readonly gridId = "demo-grid-count";
  readonly estates = ESTATES;
  readonly columns = COLUMNS;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-count-label",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridCountComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.estates" [colsMetaData]="this.columns">
      <ta-grid-count [gridId]="this.gridId" label="demo.grid.count.estates"></ta-grid-count>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (estate of items; track estate.id) {
          <p>{{ estate.name }}</p>
        }
      </ng-template>
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridCountLabelExample {
  readonly gridId = "demo-grid-count-label";
  readonly estates = ESTATES;
  readonly columns = COLUMNS;
}

export const DEMO: ComponentDemo = {
  id: "ta-grid-count",
  group: "Grilles",
  summary: "Nombre de résultats d'une grille, à poser au-dessus de la liste — lit le `ta-grid-container` partageant le même `gridId`.",
  examples: [
    {
      title: "Décompte des résultats",
      layout: "stack",
      description:
        "Aucun input hors `gridId` : le compte suit `grid.totalItems()`. Taper une recherche et valider filtre la liste, et le nombre suit. `PluralTranslatePipe` choisit entre `grid.tag.results.one` et `.plural`.",
      component: TaGridCountDefaultExample,
    },
    {
      title: "Libellé métier",
      layout: "stack",
      description:
        "`label` remplace la clé pluralisée par celle de l'appelant : une liste de biens compte des biens, pas des « résultats ». La clé doit exister en `.one` et `.plural` et accepter `{{nb}}` ; celle de cet exemple n'est pas traduite, elle s'affiche donc brute — c'est le comportement attendu d'une clé absente.",
      component: TaGridCountLabelExample,
    },
  ],
  notes:
    "Le compte n'apparaît qu'une fois la grille prête (`isReady$`) : avant, il n'y a rien à compter, et afficher un zéro transitoire ferait croire à une liste vide. `ta-grid-form` affiche déjà ce nombre à côté de son titre — ce composant sert quand les filtres vivent dans un panneau ou une colonne, et que le décompte doit rester au-dessus des résultats.",
};
