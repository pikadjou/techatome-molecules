import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, Signal, TemplateRef, ViewEncapsulation, computed, input, output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { TitleComponent } from '@ta/ui';

import { ColConfig } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'ta-grid',
  standalone: true,
  imports: [PaginationComponent, NgTemplateOutlet, AsyncPipe, TitleComponent, TranslateModule, FontIconComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaGridComponent<T extends { id: number }> extends TaAbstractGridComponent<T> {
  cardTemplate = input.required<TemplateRef<{ items: T[] }>>();

  rowClicked = output<T>();

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
    this._registerSubscription(
      this._grid.rowClicked$.subscribe({ next: row => this.rowClicked.emit(row) })
    );
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
