import { computed, signal } from '@angular/core';

import { BehaviorSubject, Observable, Subject, firstValueFrom } from 'rxjs';

import { ColMetaData, Filter, Sort, ajaxRequestFuncParams, ajaxResponse } from './types';

export interface ITableStateServices<T> {
  getData$: (params: ajaxRequestFuncParams) => Observable<ajaxResponse<T>>;
}

export interface ITableStateParams<T> {
  colsMetaData: ColMetaData[];
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

  readonly rowClicked$ = new Subject<T>();
  readonly isReady$ = new BehaviorSubject(false);
  readonly isDataReady$ = new BehaviorSubject(false);

  private _services: ITableStateServices<T> | null = null;
  private _colsMetaData: ColMetaData[] = [];
  private _fetchTimer: ReturnType<typeof setTimeout> | null = null;
  private _onDataUpdate?: (total: number) => void;

  public init(params: ITableStateParams<T>): void {
    this._services = params.services ?? null;
    this._colsMetaData = params.colsMetaData;
    this._onDataUpdate = params.onDataUpdate;

    if (params.initialFilter?.length) {
      this.filters.set(params.initialFilter);
    }

    if (params.data && !params.services) {
      this.rows.set(params.data);
      this.totalItems.set(params.data.length);
    }

    this.isReady$.next(true);

    if (this._services) {
      this._scheduleFetch();
    } else {
      this.isDataReady$.next(true);
    }
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
      this._scheduleFetch();
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
      this._scheduleFetch();
    }
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
      this._scheduleFetch();
    }
  }

  setFilter(filters: Filter[]): void {
    this.currentPage.set(1);
    this.filters.set(filters);
    this._scheduleFetch();
  }

  getFilters(_includeHeaderFilters: boolean): Filter[] {
    return this.filters();
  }

  removeFilter(field: string, type: string, value: any): void {
    this.filters.update(f =>
      f.filter(filter => !(filter.field === field && filter.type === type && filter.value === value))
    );
    this.currentPage.set(1);
    this._scheduleFetch();
  }

  setSort(field: string | null, dir: 'asc' | 'desc'): void {
    this.sortField.set(field);
    this.sortDir.set(dir);
    this.currentPage.set(1);
    this._scheduleFetch();
  }

  setGroupBy(field: string | null): void {
    this.groupByField.set(field);
    this.currentPage.set(1);
    this._scheduleFetch();
  }

  refresh(): void {
    this._scheduleFetch();
  }

  destroy(): void {
    if (this._fetchTimer) {
      clearTimeout(this._fetchTimer);
      this._fetchTimer = null;
    }
  }

  private _scheduleFetch(): void {
    if (!this._services) return;
    if (this._fetchTimer) clearTimeout(this._fetchTimer);
    this._fetchTimer = setTimeout(() => this._fetchData(), 0);
  }

  private _fetchData(): void {
    if (!this._services) return;
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
        this.rows.set(response.data);
        this.totalItems.set(response.total);
        this.isLoading.set(false);
        this.isDataReady$.next(true);
        this._onDataUpdate?.(response.total);
      })
      .catch(() => {
        this.isLoading.set(false);
      });
  }
}
