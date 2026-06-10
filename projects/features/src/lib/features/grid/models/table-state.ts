import { computed, signal } from '@angular/core';

import { BehaviorSubject, Observable, Subject, firstValueFrom } from 'rxjs';

import { ColMetaData, Filter, Sort, ajaxRequestFuncParams, ajaxResponse } from './types';

export interface ITableStateServices<T> {
  getData$: (params: ajaxRequestFuncParams) => Observable<ajaxResponse<T>>;
}

export interface ITableStateParams<T> {
  colsMetaData: ColMetaData<T>[];
  data?: T[];
  services?: ITableStateServices<T>;
  initialFilter?: Filter[];
  onDataUpdate?: (total: number) => void;
}

export class TaTableState<T> {
  readonly rows = signal<T[]>([]);
  readonly currentPage = signal(1);
  readonly pageSize = signal(20);
  readonly totalItems = signal(0);
  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.totalItems() / this.pageSize())));
  readonly sortField = signal<string | null>(null);
  readonly sortDir = signal<'asc' | 'desc'>('asc');
  readonly filters = signal<Filter[]>([]);
  readonly groupByField = signal<string | null>(null);
  readonly isLoading = signal(false);
  readonly errorMessage = signal<string>('');

  readonly selectedIds = signal<Set<number>>(new Set());
  readonly selectionChanged$ = new Subject<number[]>();

  readonly rowClicked$ = new Subject<T>();
  readonly isReady$ = new BehaviorSubject(false);
  readonly isDataReady$ = new BehaviorSubject(false);

  private _services: ITableStateServices<T> | null = null;
  private _allData: T[] = [];
  private _colsMetaData: ColMetaData<T>[] = [];
  private _fetchTimer: ReturnType<typeof setTimeout> | null = null;
  private _fetchId = 0;
  private _onDataUpdate?: (total: number) => void;

  public init(params: ITableStateParams<T>): void {
    this._services = params.services ?? null;
    this._colsMetaData = params.colsMetaData;
    this._onDataUpdate = params.onDataUpdate;

    if (params.initialFilter?.length) {
      this.filters.set(params.initialFilter);
    }

    if (params.data && !params.services) {
      this._allData = params.data;
    }

    this.isReady$.next(true);
    this._scheduleUpdate();
  }

  getData(): T[] {
    return this.rows();
  }

  getPage(): number {
    return this.currentPage();
  }

  getPageMax(): number {
    return this.totalPages();
  }

  setPage(n: number): void {
    if (n >= 1 && n <= this.totalPages()) {
      this.currentPage.set(n);
      this._scheduleUpdate();
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
      this._scheduleUpdate();
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
      this._scheduleUpdate();
    }
  }

  setFilter(filters: Filter[]): void {
    this.currentPage.set(1);
    this.filters.set(filters);
    this._scheduleUpdate();
  }

  getFilters(_includeHeaderFilters: boolean): Filter[] {
    return this.filters();
  }

  removeFilter(field: string, type: Filter['type'], value: any): void {
    this.filters.update(f =>
      f.filter(filter => !(filter.field === field && filter.type === type && filter.value === value))
    );
    this.currentPage.set(1);
    this._scheduleUpdate();
  }

  setSort(field: string | null, dir: 'asc' | 'desc'): void {
    this.sortField.set(field);
    this.sortDir.set(dir);
    this.currentPage.set(1);
    this._scheduleUpdate();
  }

  setGroupBy(field: string | null): void {
    this.groupByField.set(field);
    this.currentPage.set(1);
    this._scheduleUpdate();
  }

  refresh(): void {
    this._scheduleUpdate();
  }

  toggleRow(id: number): void {
    this.selectedIds.update(set => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    this.selectionChanged$.next([...this.selectedIds()]);
  }

  toggleAll(): void {
    const pageIds = (this.rows() as Array<{ id: number }>).map(r => r.id);
    const allSelected = pageIds.length > 0 && pageIds.every(id => this.selectedIds().has(id));
    this.selectedIds.update(set => {
      const next = new Set(set);
      if (allSelected) pageIds.forEach(id => next.delete(id));
      else pageIds.forEach(id => next.add(id));
      return next;
    });
    this.selectionChanged$.next([...this.selectedIds()]);
  }

  clearSelection(): void {
    this.selectedIds.set(new Set());
    this.selectionChanged$.next([]);
  }

  isAllPageSelected(): boolean {
    const pageIds = (this.rows() as Array<{ id: number }>).map(r => r.id);
    return pageIds.length > 0 && pageIds.every(id => this.selectedIds().has(id));
  }

  destroy(): void {
    if (this._fetchTimer) {
      clearTimeout(this._fetchTimer);
      this._fetchTimer = null;
    }
    ++this._fetchId;
    this.selectionChanged$.complete();
    this.rowClicked$.complete();
    this.isReady$.complete();
    this.isDataReady$.complete();
  }

  private _scheduleUpdate(): void {
    if (!this._services) {
      this._applyLocalFilter();
      return;
    }
    if (this._fetchTimer) clearTimeout(this._fetchTimer);
    this._fetchTimer = setTimeout(() => this._fetchData(), 0);
  }

  // Client-side filter/sort/page for static data
  private _applyLocalFilter(): void {
    let data = [...this._allData];

    for (const f of this.filters()) {
      const isSearch = f.field === 'search';

      if (isSearch) {
        const searchFields = this._colsMetaData
          .filter(c => c.isSearchField)
          .map(c => String(c.name));

        if (searchFields.length && f.value) {
          const needle = String(f.value).toLowerCase();
          data = data.filter(item =>
            searchFields.some(key =>
              String((item as any)[key] ?? '').toLowerCase().includes(needle)
            )
          );
        }
        continue;
      }

      data = data.filter(item => {
        const val = (item as any)[f.field];
        const target = f.value;
        switch (f.type) {
          case '=': return val == target;
          case '!=': return val != target;
          case 'like': return String(val ?? '').toLowerCase().includes(String(target).toLowerCase());
          case '<': return val < target;
          case '>': return val > target;
          case '<=': return val <= target;
          case '>=': return val >= target;
          case 'starts': return String(val ?? '').toLowerCase().startsWith(String(target).toLowerCase());
          case 'ends': return String(val ?? '').toLowerCase().endsWith(String(target).toLowerCase());
          case 'in': return Array.isArray(target) ? target.includes(val) : val == target;
          default: return true;
        }
      });
    }

    if (this.sortField()) {
      const field = this.sortField()!;
      const dir = this.sortDir();
      data.sort((a, b) => {
        const av = (a as any)[field];
        const bv = (b as any)[field];
        if (av == null) return 1;
        if (bv == null) return -1;
        const cmp = av > bv ? 1 : av < bv ? -1 : 0;
        return dir === 'asc' ? cmp : -cmp;
      });
    }

    const total = data.length;
    this.totalItems.set(total);
    this.errorMessage.set('');

    const page = this.currentPage();
    const size = this.pageSize();
    const start = (page - 1) * size;
    this.rows.set(data.slice(start, start + size));

    this.isDataReady$.next(true);
    this._onDataUpdate?.(total);
  }

  private _fetchData(): void {
    if (!this._services) return;
    const id = ++this._fetchId;
    this.isLoading.set(true);

    const sort: Sort[] = this.sortField() ? [{ field: this.sortField()!, dir: this.sortDir() }] : [];

    firstValueFrom(
      this._services.getData$({
        filter: this.filters(),
        sort,
        groupBy: this.groupByField(),
        page: this.currentPage(),
        size: this.pageSize(),
        colsMetaData: this._colsMetaData,
      })
    )
      .then(response => {
        if (id !== this._fetchId) return;
        this.rows.set(response.data);
        this.totalItems.set(response.total);
        this.errorMessage.set('');
        this.isLoading.set(false);
        this.isDataReady$.next(true);
        this._onDataUpdate?.(response.total);
      })
      .catch(() => {
        if (id !== this._fetchId) return;
        this.isLoading.set(false);
        this.errorMessage.set('grid.error.fetch');
      });
  }
}
