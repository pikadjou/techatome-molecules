import { AfterViewInit, ChangeDetectionStrategy, Component, QueryList, TemplateRef, ViewChild, ViewChildren, signal } from "@angular/core";

import { ColMetaData, ParameterType, TaGridComponent, TaGridContainerComponent, TaGridControlComponent } from "@ta/features";
import { ButtonComponent } from "@ta/ui";

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
  { id: 1, reference: "REF-1001", customer: "Amélie Laurent", category: "Électronique", orderedAt: "2024-01-12", amount: 129.9, paid: true },
  { id: 2, reference: "REF-1002", customer: "Karim Haddad", category: "Mode", orderedAt: "2024-01-18", amount: 54, paid: true },
  { id: 3, reference: "REF-1003", customer: "Sophie Meunier", category: "Maison", orderedAt: "2024-02-02", amount: 212.5, paid: false },
  { id: 4, reference: "REF-1004", customer: "Julien Petit", category: "Sport", orderedAt: "2024-02-14", amount: 89.99, paid: true },
  { id: 5, reference: "REF-1005", customer: "Nora El Idrissi", category: "Électronique", orderedAt: "2024-02-20", amount: 349, paid: true },
  { id: 6, reference: "REF-1006", customer: "Thomas Bernard", category: "Mode", orderedAt: "2024-03-01", amount: 22.9, paid: false },
  { id: 7, reference: "REF-1007", customer: "Léa Girard", category: "Maison", orderedAt: "2024-03-09", amount: 145, paid: true },
  { id: 8, reference: "REF-1008", customer: "Hugo Faure", category: "Sport", orderedAt: "2024-03-15", amount: 67.5, paid: true },
  { id: 9, reference: "REF-1009", customer: "Chloé Rousseau", category: "Électronique", orderedAt: "2024-03-22", amount: 599, paid: false },
  { id: 10, reference: "REF-1010", customer: "Adam Lefèvre", category: "Mode", orderedAt: "2024-04-02", amount: 38.2, paid: true },
  { id: 11, reference: "REF-1011", customer: "Manon Dupuis", category: "Maison", orderedAt: "2024-04-10", amount: 178.4, paid: true },
  { id: 12, reference: "REF-1012", customer: "Yanis Morel", category: "Sport", orderedAt: "2024-04-19", amount: 95, paid: true },
];

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-table",
  imports: [ButtonComponent, TaGridComponent, TaGridContainerComponent, TaGridControlComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-control
        [gridId]="this.gridId"
        [show]="{ switchView: true, filters: false, preset: false, group: false }"
      ></ta-grid-control>
      <ta-grid [gridId]="this.gridId" [cardTemplate]="cardTpl" (rowClicked)="this.selected.set($event)"></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (order of items; track order.id) {
          <p>{{ order.reference }} — {{ order.customer }}</p>
        }
      </ng-template>

      <ng-template #actionsTpl let-row>
        <div class="flex-row g-space-xs" (click)="$event.stopPropagation()">
          <ta-button type="tertiary" size="small" (action)="this.onRowAction('Détail', row)">Détail</ta-button>
          <ta-button type="tertiary" size="small" (action)="this.onRowAction('Rembourser', row)">Rembourser</ta-button>
        </div>
      </ng-template>
    </ta-grid-container>

    @if (this.selected(); as order) {
      <p class="p-space-sm">Ligne cliquée : {{ order.reference }} — {{ order.amount }} €</p>
    }
    @if (this.lastAction(); as action) {
      <p class="p-space-sm">Action de ligne : {{ action }}</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridTableExample implements AfterViewInit {
  @ViewChild("actionsTpl", { static: true }) actionsTpl!: TemplateRef<{ $implicit: Order; value: number }>;
  @ViewChild(TaGridControlComponent) private _control!: TaGridControlComponent;

  readonly gridId = "demo-grid-table";
  readonly orders = ORDERS;

  readonly selected = signal<Order | null>(null);
  readonly lastAction = signal<string | null>(null);

  get columns(): ColMetaData<Order>[] {
    return [
      { name: "reference", type: ParameterType.String, width: "120px" },
      { name: "customer", type: ParameterType.String },
      { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, width: "130px" },
      { name: "orderedAt", type: ParameterType.DateTime, width: "120px" },
      { name: "amount", type: ParameterType.Number, align: "right", width: "100px" },
      { name: "paid", type: ParameterType.Boolean, align: "center", width: "80px" },
      // Réutilise la clé "id" pour la seule colonne d'actions : ColMetaData.name
      // doit être une clé de T, il n'existe pas de clé synthétique pour ce cas.
      { name: "id", type: ParameterType.Number, width: "190px", align: "right", template: this.actionsTpl },
    ];
  }

  // La vue par défaut de ta-grid est "card" (TaGridData.displayType s'initialise
  // ainsi) : on bascule en tableau au montage pour que tri, largeurs et formats
  // soient visibles sans action de l'utilisateur, via la méthode publique
  // switchView() du contrôle.
  ngAfterViewInit(): void {
    this._control.switchView("grid");
  }

  onRowAction(action: string, order: Order): void {
    this.lastAction.set(`${action} — ${order.reference}`);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-selection",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridControlComponent],
  template: `
    <ta-grid-container [gridId]="this.gridId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-control
        [gridId]="this.gridId"
        [show]="{ switchView: true, filters: false, preset: false, group: false }"
      ></ta-grid-control>
      <ta-grid
        [gridId]="this.gridId"
        [cardTemplate]="cardTpl"
        [showSelection]="true"
        (selectionChanged)="this.selectedOrders.set($event)"
      ></ta-grid>

      <ng-template #cardTpl let-items="items">
        @for (order of items; track order.id) {
          <p>{{ order.reference }}</p>
        }
      </ng-template>
    </ta-grid-container>

    <p class="p-space-sm">
      {{ this.selectedOrders().length }} commande(s) sélectionnée(s)
      @if (this.selectedOrders().length > 0) {
        : {{ this.selectedReferences() }}
      }
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridSelectionExample implements AfterViewInit {
  @ViewChild(TaGridControlComponent) private _control!: TaGridControlComponent;

  readonly gridId = "demo-grid-selection";
  readonly orders = ORDERS;

  readonly columns: ColMetaData<Order>[] = [
    { name: "reference", type: ParameterType.String, width: "120px" },
    { name: "customer", type: ParameterType.String },
    { name: "category", type: ParameterType.Enum, enumValues: CATEGORIES, width: "130px" },
    { name: "amount", type: ParameterType.Number, align: "right", width: "100px" },
  ];

  readonly selectedOrders = signal<Order[]>([]);

  ngAfterViewInit(): void {
    this._control.switchView("grid");
  }

  selectedReferences(): string {
    return this.selectedOrders()
      .map((order) => order.reference)
      .join(", ");
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-grid-density",
  imports: [TaGridComponent, TaGridContainerComponent, TaGridControlComponent],
  template: `
    <p class="p-space-sm">Confortable (par défaut)</p>
    <ta-grid-container [gridId]="this.comfortableId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-control
        [gridId]="this.comfortableId"
        [show]="{ switchView: true, filters: false, preset: false, group: false }"
      ></ta-grid-control>
      <ta-grid [gridId]="this.comfortableId" [cardTemplate]="cardTpl" density="comfortable"></ta-grid>
    </ta-grid-container>

    <p class="p-space-sm">Compacte</p>
    <ta-grid-container [gridId]="this.compactId" [initialData]="this.orders" [colsMetaData]="this.columns">
      <ta-grid-control
        [gridId]="this.compactId"
        [show]="{ switchView: true, filters: false, preset: false, group: false }"
      ></ta-grid-control>
      <ta-grid [gridId]="this.compactId" [cardTemplate]="cardTpl" density="compact"></ta-grid>
    </ta-grid-container>

    <ng-template #cardTpl let-items="items">
      @for (order of items; track order.id) {
        <p>{{ order.reference }}</p>
      }
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridDensityExample implements AfterViewInit {
  @ViewChildren(TaGridControlComponent) private _controls!: QueryList<TaGridControlComponent>;

  readonly comfortableId = "demo-grid-density-comfortable";
  readonly compactId = "demo-grid-density-compact";
  readonly orders = ORDERS;

  readonly columns: ColMetaData<Order>[] = [
    { name: "reference", type: ParameterType.String, width: "120px" },
    { name: "customer", type: ParameterType.String },
    { name: "amount", type: ParameterType.Number, align: "right", width: "100px" },
  ];

  ngAfterViewInit(): void {
    this._controls.forEach((control) => control.switchView("grid"));
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-grid",
  group: "Grilles",
  summary: "Rendu de la grille de données — vue tableau ou carte, tri par colonne, sélection de lignes, densité — au-dessus de la pagination intégrée.",
  examples: [
    {
      title: "Tableau : tri, largeurs, formats, actions de ligne",
      layout: "stack",
      description:
        "Chaque colonne est triable : `getColConfig()` (`base-col.ts`) fixe `sortable: true` sans exception, il n'existe pas de propriété pour l'en exclure. Un premier clic sur un en-tête trie en croissant, un deuxième en décroissant, un troisième retire le tri (`onSort()`). `amount` est formaté par défaut (valeur brute), `orderedAt` passe par `DateCol.defaultFormatter` (`dd/MM/yyyy`), `paid` par `BoolCol.defaultFormatter` (✓ / ✗). La dernière colonne réutilise le champ `id` uniquement pour porter un `template` d'actions — `ColMetaData.name` doit être une clé de `T`, c'est le seul moyen d'ajouter une colonne qui n'affiche pas une valeur du modèle. Cliquer une ligne (hors des boutons, qui stoppent la propagation) émet `rowClicked`.",
      component: TaGridTableExample,
    },
    {
      title: "Sélection multiple de lignes",
      layout: "stack",
      description:
        "`showSelection=true` ajoute une colonne de case à cocher dans la vue tableau (le contexte transmis au `cardTemplate` porte aussi `selectedIds`, mais son exploitation en vue carte reste à la charge du template). `selectionChanged` émet la liste des lignes cochées de la page courante à chaque bascule, individuelle ou via la case d'en-tête (« tout sélectionner »).",
      component: TaGridSelectionExample,
    },
    {
      title: "Densité comfortable / compacte",
      layout: "stack",
      description:
        "`density` (`'comfortable' | 'compact'`, défaut `'comfortable'`) ajoute la classe `is-compact` sur la table (`grid.component.html`) : seule la hauteur de ligne change, visible uniquement en vue tableau.",
      component: TaGridDensityExample,
    },
  ],
  notes:
    "`ta-grid` s'affiche par défaut en vue carte (`TaGridData.displayType` s'initialise à `'card'`) : `cardTemplate` est donc un input requis même quand une démo ne montre que le tableau. Aucun input ne permet de préconfigurer la vue initiale à « tableau » : les trois exemples ci-dessus appellent la méthode publique `switchView()` de `ta-grid-control` depuis `ngAfterViewInit()` pour l'ouvrir directement en tableau, plutôt que de laisser le lecteur cliquer avant de voir quoi que ce soit. Les titres de colonne (`col.title`) sont des clés de traduction `grid.<gridId>.core.<champ>` (`base-col.ts`, accesseur `inputLabel`) : la vitrine ne fournit pas ces traductions pour des `gridId` de démonstration, donc les en-têtes affichent la clé brute plutôt qu'un libellé lisible — comportement du composant tel qu'il existe dans le dépôt, pas une erreur de cette démo.",
};
