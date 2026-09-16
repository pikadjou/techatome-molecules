import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  ColMetaData,
  ParameterType,
  Preset,
  TaGridComponent,
  TaGridContainerComponent,
  TaGridControlComponent,
  TaGridTagsComponent,
} from '@ta/features';

import { ComponentDemo } from '../../demo.types';

interface Order {
  id: number;
  reference: string;
  customer: string;
  category: 'Électronique' | 'Mode' | 'Maison' | 'Sport';
  paid: boolean;
  amount: number;
}

const CATEGORIES: Order['category'][] = ['Électronique', 'Mode', 'Maison', 'Sport'];

const ORDERS: Order[] = [
  { id: 1, reference: 'REF-2001', customer: 'Amélie Laurent', category: 'Électronique', paid: true, amount: 129.9 },
  { id: 2, reference: 'REF-2002', customer: 'Karim Haddad', category: 'Mode', paid: true, amount: 54 },
  { id: 3, reference: 'REF-2003', customer: 'Sophie Meunier', category: 'Maison', paid: false, amount: 212.5 },
  { id: 4, reference: 'REF-2004', customer: 'Julien Petit', category: 'Sport', paid: true, amount: 89.99 },
  { id: 5, reference: 'REF-2005', customer: 'Nora El Idrissi', category: 'Électronique', paid: false, amount: 349 },
  { id: 6, reference: 'REF-2006', customer: 'Thomas Bernard', category: 'Mode', paid: true, amount: 22.9 },
  { id: 7, reference: 'REF-2007', customer: 'Léa Girard', category: 'Maison', paid: true, amount: 145 },
  { id: 8, reference: 'REF-2008', customer: 'Hugo Faure', category: 'Sport', paid: false, amount: 67.5 },
];

const COLUMNS: ColMetaData<Order>[] = [
  { name: 'reference', type: ParameterType.String, isSearchField: true, width: '120px' },
  { name: 'customer', type: ParameterType.String, isSearchField: true },
  { name: 'category', type: ParameterType.Enum, enumValues: CATEGORIES, showOnSearch: true, width: '140px' },
  { name: 'paid', type: ParameterType.Boolean, showOnSearch: true, width: '90px' },
  { name: 'amount', type: ParameterType.Number, align: 'right', width: '100px' },
];

const PRESETS: Preset[] = [
  { name: 'Payées', filters: [{ field: 'paid', type: '=', value: true }] },
  { name: 'Non payées', filters: [{ field: 'paid', type: '=', value: false }] },
  { name: 'Électronique', filters: [{ field: 'category', type: '=', value: 'Électronique' }] },
];

@Component({
  standalone: true,
  selector: 'app-ex-ta-grid-control-full',
  imports: [TaGridComponent, TaGridContainerComponent, TaGridControlComponent, TaGridTagsComponent],
  template: `
    <ta-grid-container
      [gridId]="this.gridId"
      [initialData]="this.orders"
      [colsMetaData]="this.columns"
      [preset]="this.presets"
    >
      <ta-grid-control [gridId]="this.gridId"></ta-grid-control>
      <ta-grid-tags [gridId]="this.gridId"></ta-grid-tags>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (order of items; track order.id) {
          <p>{{ order.reference }} — {{ order.customer }}</p>
        }
      </ng-template>
    </ta-grid-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridControlFullExample {
  readonly gridId = 'demo-grid-control-full';
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
  readonly presets = PRESETS;
}

@Component({
  standalone: true,
  selector: 'app-ex-ta-grid-control-compact',
  imports: [TaGridComponent, TaGridContainerComponent, TaGridControlComponent],
  template: `
    <ta-grid-container
      [gridId]="this.gridId"
      [initialData]="this.orders"
      [colsMetaData]="this.columns"
      [preset]="this.presets"
    >
      <ta-grid-control
        [gridId]="this.gridId"
        [compact]="true"
        [show]="{ switchView: true, filters: true, preset: true, group: false, sort: true }"
      ></ta-grid-control>
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
export class TaGridControlCompactExample {
  readonly gridId = 'demo-grid-control-compact';
  readonly orders = ORDERS;
  readonly columns = COLUMNS;
  readonly presets = PRESETS;
}

export const DEMO: ComponentDemo = {
  id: 'ta-grid-control',
  group: 'Grilles',
  summary:
    "Barre d'actions d'une grille — filtres, tri, vues rapides, regroupement et bascule carte/tableau — pilotée par les colonnes déclarées sur le `ta-grid-container` partageant le même `gridId`.",
  examples: [
    {
      title: 'Barre de contrôle complète',
      layout: 'stack',
      description:
        "`show` (défaut : les cinq à `true`) affiche ici ses cinq boutons. « Trier » liste les colonnes affichables (`sortableCols`) ; rejouer la colonne déjà active bascule le sens, l'entrée « Ordre par défaut » rend la main au serveur. Le tableau se trie par ses en-têtes, la vue cartes n'en a pas — ce menu est le seul tri qu'elle ait. « Filtres » ouvre `ta-grid-filters-panel` (démo dédiée) et porte un badge de comptage (`activeFiltersCount`, qui exclut le filtre de recherche globale). « Vues rapides » n'apparaît que si `preset` contient au moins une entrée (`hasPresets`) ; cliquer une vue active/désactive son `Filter[]`. « Regrouper » ne liste que les colonnes `showOnSearch && !notDisplayable` (`groupableCols`) — `paid` (booléen) y figure alors qu'il n'a aucun input de filtre dans `ta-grid-form` (`BoolCol` n'implémente pas `getInputForm()`) : les deux mécanismes lisent le même `showOnSearch` mais n'ont pas la même exigence. « Tableau / Cartes » appelle `switchView()`.",
      component: TaGridControlFullExample,
    },
    {
      title: 'Mode compact',
      layout: 'stack',
      description:
        "`compact=true` masque les libellés textuels des boutons (`&--compact &__label { display: none }`, `control.component.scss`) : seuls icônes et badge de comptage restent visibles. La même règle s'applique automatiquement en dessous de 768px de large, indépendamment de `compact` — non démontrable ici, la vitrine ne fait pas varier la largeur du viewport.",
      component: TaGridControlCompactExample,
    },
  ],
  notes:
    "Les libellés du menu « Regrouper » (`col.inputLabel`, une clé `grid.<gridId>.core.<champ>`) et le nom de la vue active affichée sur le bouton « Vues rapides » ne dépendent d'aucune traduction manquante : `activePresetName` et les noms de `Preset` sont des chaînes littérales fournies par la démo, ils s'affichent tels quels. Seuls les libellés de colonnes issus de `inputLabel` restent des clés brutes faute de traduction pour ce `gridId` — comportement documenté sur la démo `ta-grid`.",
};
