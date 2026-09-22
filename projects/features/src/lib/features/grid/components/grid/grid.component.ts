import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, Signal, TemplateRef, ViewEncapsulation, computed, input, output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { EmptyComponent, ErrorComponent, LoaderComponent, TitleComponent } from '@ta/ui';

import { RowId } from '../../models/table-state';
import { ColConfig } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'ta-grid',
  standalone: true,
  imports: [
    PaginationComponent,
    NgTemplateOutlet,
    AsyncPipe,
    EmptyComponent,
    ErrorComponent,
    FontIconComponent,
    LoaderComponent,
    TitleComponent,
    TranslateModule,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaGridComponent<T extends { id: RowId }> extends TaAbstractGridComponent<T> {
  cardTemplate = input.required<TemplateRef<{ items: T[]; selectedIds: Set<RowId> }>>();
  showSelection = input<boolean>(false);

  /** Hauteur de ligne : confortable par défaut, compacte pour les longues listes. */
  density = input<'comfortable' | 'compact'>('comfortable');

  /** Ce que dit la grille quand elle ne ramène rien ; l'action se projette sur `[emptyAction]`. */
  emptyText = input<string>('ui.container.empty.title');
  emptySubtitle = input<string>('');
  emptyIcon = input<string>('sentiment_dissatisfied');

  rowClicked = output<T>();
  selectionChanged = output<T[]>();

  constructor() {
    super();
  }

  visibleCols!: Signal<ColConfig[]>;

  override ngOnInit() {
    super.ngOnInit();
    this.visibleCols = computed(() =>
      Object.values(this.grid.cols)
        .filter(col => !col.data.col.notDisplayable && !String(col.key).startsWith('_'))
        .map(col => col.getColConfig())
    );
    this._registerSubscription(this._grid.rowClicked$.subscribe({ next: row => this.rowClicked.emit(row) }));
    if (this._grid.table) {
      this._registerSubscription(
        this._grid.table.selectionChanged$.subscribe(ids => {
          this.selectionChanged.emit(this.rows.filter(r => ids.includes(r.id)));
        })
      );
    }
  }

  get rows(): T[] {
    return this._grid.table?.rows() ?? [];
  }

  get sortField(): string | null {
    return this._grid.table?.sortField() ?? null;
  }

  get sortDir(): 'asc' | 'desc' {
    return this._grid.table?.sortDir() ?? 'asc';
  }

  get isLoading(): boolean {
    return this._grid.table?.isLoading() ?? false;
  }

  get errorMessage(): string {
    return this._grid.table?.errorMessage() ?? '';
  }

  /** Largeur d'une ligne d'en-tête de groupe, colonne de sélection comprise. */
  get colspan(): number {
    return this.visibleCols().length + (this.showSelection() ? 1 : 0);
  }

  get selectedIds(): Set<RowId> {
    return this._grid.table?.selectedIds() ?? new Set();
  }

  isSelected(id: number): boolean {
    return this.selectedIds.has(id);
  }

  isAllPageSelected(): boolean {
    return this._grid.table?.isAllPageSelected() ?? false;
  }

  toggleRow(row: T): void {
    this._grid.table?.toggleRow(row.id);
  }

  toggleAll(): void {
    this._grid.table?.toggleAll();
  }

  /**
   * Libellé d'un groupe : `groupBy` produit des chaînes, on repasse par le
   * formatteur de la colonne pour retrouver dates et booléens lisibles.
   */
  groupLabel(value: string): string {
    const field = this._grid.groupBy as string;
    const col = field ? this._grid.cols[field] : null;
    if (!col) {
      return value;
    }
    const casted = value === 'true' ? true : value === 'false' ? false : value;
    return col.defaultFormatter({ [field]: casted }) || value;
  }

  getCellValue(row: T, key: string): any {
    return (row as any)[key];
  }

  onRowClick(row: T): void {
    this._grid.rowClicked$.next(row);
  }

  onSort(col: ColConfig): void {
    if (!col.sortable || !this._grid.table) return;
    const current = this.sortField;
    const dir = this.sortDir;

    if (current !== col.key) {
      this._grid.table.setSort(col.key, 'asc');
    } else if (dir === 'asc') {
      this._grid.table.setSort(col.key, 'desc');
    } else {
      this._grid.table.setSort(null, 'asc');
    }
  }
}
