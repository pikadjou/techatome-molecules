import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ColMetaData, ParameterType, Preset, TaGridComponent, TaGridContainerComponent, TaGridControlComponent, TaGridTagsComponent } from "@ta/features";
import { BadgeComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

interface Member {
  id: number;
  name: string;
  role: "Développeur" | "Designer" | "Product Owner" | "QA";
  active: boolean;
}

const ROLES: Member["role"][] = ["Développeur", "Designer", "Product Owner", "QA"];

const MEMBERS: Member[] = [
  { id: 1, name: "Inès Caron", role: "Développeur", active: true },
  { id: 2, name: "Malik Benali", role: "Designer", active: true },
  { id: 3, name: "Claire Dumont", role: "Product Owner", active: true },
  { id: 4, name: "Victor Hébert", role: "QA", active: false },
  { id: 5, name: "Zoé Fontaine", role: "Développeur", active: true },
  { id: 6, name: "Paul Renaud", role: "Designer", active: false },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-container-basic",
  imports: [TaGridComponent, TaGridContainerComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.members" [colsMetaData]="this.columns">
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (member of items; track member.id) {
          <p>{{ member.name }} — {{ member.role }} ({{ member.active ? "actif" : "inactif" }})</p>
        }
      </ng-template>
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridContainerBasicExample {
  readonly gridId = "demo-grid-container-basic";
  readonly members = MEMBERS;

  readonly columns: ColMetaData<Member>[] = [
    { name: "name", type: ParameterType.String, isSearchField: true },
    { name: "role", type: ParameterType.Enum, enumValues: ROLES },
    { name: "active", type: ParameterType.Boolean },
  ];
}

const PRESETS: Preset[] = [
  { name: "Actifs", filters: [{ field: "active", type: "=", value: true }] },
  { name: "Design", filters: [{ field: "role", type: "=", value: "Designer" }] },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-container-preset",
  imports: [BadgeComponent, TaGridComponent, TaGridContainerComponent, TaGridControlComponent, TaGridTagsComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.members" [colsMetaData]="this.columns" [preset]="this.presets">
      <ta-grid-control
        [gridId]="this.gridId"
        [show]="{ switchView: false, filters: false, preset: true, group: false }"
      ></ta-grid-control>
      <ta-grid-tags [gridId]="this.gridId"></ta-grid-tags>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (member of items; track member.id) {
          <div class="flex-row g-space-sm align-center">
            <span>{{ member.name }}</span>
            <ta-badge [value]="member.role" type="secondary"></ta-badge>
          </div>
        }
      </ng-template>
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridContainerPresetExample {
  readonly gridId = "demo-grid-container-preset";
  readonly members = MEMBERS;
  readonly presets = PRESETS;

  readonly columns: ColMetaData<Member>[] = [
    { name: "name", type: ParameterType.String, isSearchField: true },
    { name: "role", type: ParameterType.Enum, enumValues: ROLES, showOnSearch: true },
    { name: "active", type: ParameterType.Boolean, showOnSearch: true },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-grid-container",
  group: "Grilles",
  summary: "Racine d'une grille : crée l'instance `TaGridData` pour un `gridId` donné et l'initialise avec des données locales, des colonnes typées et des vues rapides.",
  examples: [
    {
      title: "Données locales typées",
      layout: "stack",
      description:
        "`ngOnInit` appelle `this._grid.init({ colsMetaData, data: this.initialData(), preset: this.preset() })` : sans backend, `initialData` alimente directement le tri/filtre/pagination côté client (`TaTableState._applyLocalFilter`). Le composant lui-même ne rend rien de plus que le `<ng-content>` qui reçoit `ta-grid` et consorts.",
      component: TaGridContainerBasicExample,
    },
    {
      title: "Vues rapides via `preset`",
      layout: "stack",
      description:
        "`preset` est transmis à `TaGridFilters`, qui alimente le menu « Vues rapides » de `ta-grid-control`. Cliquer une vue applique son tableau de `Filter[]` d'un coup ; le cliquer à nouveau la retire (`isPresetActive()` compare chaque filtre actif). `ta-grid-tags` reflète l'état résultant.",
      component: TaGridContainerPresetExample,
    },
  ],
  notes:
    "`model` (le quatrième input, une chaîne — nom du type GraphQL) n'est pas démontré : quand il est renseigné, `container.component.ts` construit `services: { getData$: params => this._service.getData$(this.model(), params) }`, et `TaTableState.init` n'utilise `initialData` que si `!params.services` — autrement dit `model` et `initialData` ensemble font ignorer silencieusement `initialData`. `TaGridViewService.getData$` construit une requête GraphQL paginée via `@ta/server` (`createPagedQuery`) : cela suppose un backend réel, absent de la vitrine. Les colonnes de type `ParameterType.Relation` (avec `dataSearch$` ou `manyToOneOptions`) ne sont pas démontrées ici non plus, faute d'un cas d'usage local convaincant ; voir `ta-grid` pour les autres types (`String`, `Number`, `Enum`, `DateTime`, `Boolean`).",
};
