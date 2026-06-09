# Remplacement de Tabulator par un composant Angular natif dans `@ta/features`

## Contexte

La feature grid (`@ta/features`) utilise la librairie externe `tabulator-tables` (v6.3.1) pour le rendu du tableau, la pagination serveur, le tri et les filtres. L'objectif est de supprimer cette dépendance et de la remplacer par un composant Angular pur basé sur les signals, sans perdre aucune fonctionnalité existante.

Décisions prises pendant le brainstorming :
- Les header filters Tabulator (inputs inline dans les en-têtes) sont supprimés — le filtrage passe uniquement par le modal, les highlight-filters et la barre de recherche
- Le tri par clic sur les en-têtes de colonnes est conservé (server-side)
- Les cell templates custom (`TemplateRef`) sont nécessaires pour les badges, avatars, etc.

---

## Architecture

### Avant
```
TaGridData<T>.table: Tabulator   ← gère rows, pagination, filtres, tri, grouping
```

### Après
```
TaGridData<T>.table: TaTableState<T>   ← même rôle, zéro dépendance externe
  ├── signals : rows, currentPage, totalItems, sortField, sortDir, filters, groupBy
  ├── effect() Angular → appelle le service data quand page/filtre/tri change
  └── API publique identique aux appels Tabulator actuels
```

Tous les composants satellites (pagination, tags, form, control, highlight-filters) restent inchangés dans leur logique — ils appellent les mêmes méthodes qu'avant.

---

## Fichier ajouté

### `models/table-state.ts` — `TaTableState<T>`

```typescript
class TaTableState<T> {
  // Signals internes
  rows = signal<T[]>([]);
  currentPage = signal(1);
  pageSize = signal(20);
  totalItems = signal(0);
  totalPages = computed(() => Math.ceil(this.totalItems() / this.pageSize()));
  sortField = signal<string | null>(null);
  sortDir = signal<'ASC' | 'DESC'>('ASC');
  filters = signal<Filter[]>([]);
  groupBy = signal<string | null>(null);
  isLoading = signal(false);

  // Events conservés
  rowClicked$ = new Subject<T>();
  isReady$ = new BehaviorSubject(false);
  isDataReady$ = new BehaviorSubject(false);

  // API publique (remplace les appels Tabulator)
  getData(): T[]
  getPage(): number
  getPageMax(): number
  setPage(n: number): void
  nextPage(): void
  previousPage(): void
  setFilter(filters: Filter[]): void
  getFilters(includeHeaderFilters: boolean): Filter[]
  removeFilter(field: string, type: string, value: any): void
  setGroupBy(field: string | null): void
  refresh(): void
  destroy(): void
}
```

**Data fetching :** un `effect()` surveille `currentPage`, `filters`, `sortField`, `sortDir`, `groupBy` et appelle `services.getData$()` automatiquement — comme `ajaxRequestFunc` de Tabulator. La réponse met à jour `rows` et `totalItems`.

---

## Fichiers modifiés

### `models/grid-data.ts`
- `table: Tabulator | null` → `table: TaTableState<T> | null`
- Suppression de `new Tabulator(...)` et `_getOptions()`
- Remplacement par `new TaTableState<T>(params)`
- `table.on('tableBuilt', cb)` → `isReady$.next(true)` direct après init
- `table.on('rowClick', cb)` → géré dans `grid.component` via `(click)` Angular

### `components/grid/grid.component.ts` + `.html` + `.scss`
Réécriture complète. Le composant reçoit `data: TaGridData<T>` et rend :

```html
<table class="ta-grid-table">
  <thead>
    <tr>
      @for (col of visibleCols(); track col.key) {
        <th (click)="onSort(col)" [class.is-sorted]="sortField() === col.key">
          {{ col.title | translate }}
          @if (sortField() === col.key) {
            <ta-font-icon [icon]="sortDir() === 'ASC' ? 'arrow-up' : 'arrow-down'" />
          }
        </th>
      }
    </tr>
  </thead>
  <tbody>
    @for (row of rows(); track $index) {
      <tr (click)="onRowClick(row)">
        @for (col of visibleCols(); track col.key) {
          <td>
            @if (col.template) {
              <ng-container [ngTemplateOutlet]="col.template"
                [ngTemplateOutletContext]="{ $implicit: row, value: row[col.key] }" />
            } @else {
              {{ col.defaultFormatter(row) }}
            }
          </td>
        }
      </tr>
    }
  </tbody>
</table>
```

Tri cyclique au clic : ASC → DESC → null.
`visibleCols()` filtre `notDisplayable: true`.
`.scss` : suppression de `@import 'tabulator-tables/dist/css/tabulator.min.css'`.

### `models/types.ts`
Ajout dans `ColMetaData<T>` :
```typescript
template?: TemplateRef<{ $implicit: T; value: any }>; // cell renderer custom
width?: string; // ex: '120px', '20%'
```

Utilisation côté consommateur :
```typescript
// Dans l'app consommatrice
@ViewChild('statusCell') statusCell!: TemplateRef<any>;

cols: ColMetaData[] = [
  { name: 'name', type: ParameterType.String },
  { name: 'status', type: ParameterType.Enum, template: this.statusCell },
];
```
```html
<ng-template #statusCell let-row let-value="value">
  <ta-badge [label]="value" [color]="row.isActive ? 'green' : 'red'" />
</ng-template>
```

### `models/grid-filters.ts`
- Constructeur reçoit `TaTableState<T>` au lieu de `Tabulator`
- `this.table.getFilters(false)` → `this.table.getFilters(false)` (même signature)
- `this.table.setFilter(filters)` → idem
- `this.table.removeFilter(f, t, v)` → idem
- Debounce 500ms conservé

### `models/cols/base-col.ts` et sous-classes
- Suppression de `getColDef(): ColumnDefinition` (retournait du Tabulator)
- Remplacement par `getColConfig(): ColConfig` (interface interne légère)
- Ajout de `defaultFormatter(row: T): string` — retourne la valeur textuelle par défaut de la cellule (ex: date formatée, booléen en ✓/✗, enum traduit)
- Suppression de `headerFilter: 'input'` dans toutes les colonnes
- `formatInputForm()` inchangé — produit des `Filter { field, type, value }` indépendants de Tabulator

`ColConfig` (défini dans `models/types.ts`) :
```typescript
interface ColConfig {
  key: string;         // field name
  title: string;       // i18n key
  sortable: boolean;   // peut-on trier cette colonne
  width?: string;      // largeur CSS optionnelle
}
```

`Filter` (redéfini dans `models/types.ts`, remplace l'import de `tabulator-tables`) :
```typescript
interface Filter {
  field: string;
  type: 'like' | '=' | '!=' | '>' | '>=' | '<' | '<=' | 'in';
  value: any;
}
```

### `package.json` (`projects/features/`)
```json
// Supprimer :
"tabulator-tables": "^6.3.1"
"@types/tabulator-tables": "^6.2.6"
```

---

## Fonctionnalités conservées

| Fonctionnalité | Mécanisme |
|---|---|
| Pagination server-side | `TaTableState.currentPage` signal + effect |
| Tri server-side | `TaTableState.sortField/sortDir` signals + effect |
| Filtres server-side | `TaTableState.filters` signal + debounce 500ms |
| Grouping | `TaTableState.groupBy` signal + `dataByGroup` dans `TaGridData` |
| Row click | `(click)` Angular sur `<tr>` → `rowClicked$.next(row)` |
| Vue card / grid | Inchangé — `displayType` signal dans `TaGridData` |
| Pagination component | Inchangé — appelle les mêmes méthodes |
| Filter form / tags | Inchangés |
| Highlight filters | Inchangés |
| Session persistence | Inchangé |

## Fonctionnalités supprimées

| Fonctionnalité | Raison |
|---|---|
| Header filters inline | Décision utilisateur — ne rend pas bien |
| CSS Tabulator | Remplacé par SCSS natif avec `common.get-var()` |

---

## Vérification

1. `ng build @ta/features` — doit compiler sans erreur ni référence à `tabulator-tables`
2. Ouvrir l'app Taelot, naviguer vers une vue avec grid → les données se chargent
3. Cliquer sur un en-tête de colonne → tri ASC/DESC visible, données rechargées
4. Appliquer un filtre via le modal → données filtrées, tags affichés
5. Paginer → page change, données rechargées
6. Passer en vue card → fonctionne toujours
7. Colonnes avec `template` → rendu custom visible dans les cellules
8. `yarn lint` → zéro erreur
