import { fakeAsync, tick } from '@angular/core/testing';

import { of } from 'rxjs';

import { ParameterType } from './types';
import { TaTableState } from './table-state';
import { Filter } from './types';

describe('TaTableState', () => {
  let state: TaTableState<{ id: number; name: string; category?: string; price?: number }>;

  beforeEach(() => {
    state = new TaTableState();
  });

  afterEach(() => state.destroy());

  // ── initial state ──────────────────────────────────────────────────────────

  it('should initialize with default values', () => {
    expect(state.currentPage()).toBe(1);
    expect(state.pageSize()).toBe(20);
    expect(state.filters()).toEqual([]);
    expect(state.sortField()).toBeNull();
    expect(state.sortDir()).toBe('asc');
    expect(state.totalItems()).toBe(0);
    expect(state.rows()).toEqual([]);
  });

  // ── totalPages ─────────────────────────────────────────────────────────────

  it('totalPages should be at least 1', () => {
    state.totalItems.set(0);
    expect(state.totalPages()).toBe(1);
  });

  it('totalPages should be computed from totalItems and pageSize', () => {
    state.totalItems.set(45);
    expect(state.totalPages()).toBe(3);
  });

  // ── static data — init ─────────────────────────────────────────────────────

  it('init with static data should populate rows synchronously', () => {
    const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    state.init({ colsMetaData: [], data });
    expect(state.rows()).toEqual(data);
    expect(state.totalItems()).toBe(2);
    expect(state.isReady$.getValue()).toBeTrue();
    expect(state.isDataReady$.getValue()).toBeTrue();
  });

  it('getData should return current rows', () => {
    const data = [{ id: 1, name: 'Alice' }];
    state.init({ colsMetaData: [], data });
    expect(state.getData()).toEqual(data);
  });

  // ── pagination (static) ────────────────────────────────────────────────────

  it('setPage should update rows to the correct page synchronously', () => {
    const data = Array.from({ length: 25 }, (_, i) => ({ id: i + 1, name: `item ${i + 1}` }));
    state.init({ colsMetaData: [], data });

    expect(state.rows().length).toBe(20);
    expect(state.totalPages()).toBe(2);

    state.setPage(2);

    expect(state.rows().length).toBe(5);
    expect(state.rows()[0].id).toBe(21);
    expect(state.currentPage()).toBe(2);
  });

  it('setPage should not exceed totalPages', () => {
    const data = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    state.init({ colsMetaData: [], data });
    state.setPage(99);
    expect(state.currentPage()).toBe(1);
  });

  it('nextPage should increment page and update rows', () => {
    const data = Array.from({ length: 60 }, (_, i) => ({ id: i + 1, name: `item ${i + 1}` }));
    state.init({ colsMetaData: [], data });

    state.nextPage();

    expect(state.currentPage()).toBe(2);
    expect(state.rows()[0].id).toBe(21);
  });

  it('nextPage should not exceed totalPages', () => {
    const data = [{ id: 1, name: 'a' }];
    state.init({ colsMetaData: [], data });
    state.nextPage();
    expect(state.currentPage()).toBe(1);
  });

  it('previousPage should decrement page and update rows', () => {
    const data = Array.from({ length: 60 }, (_, i) => ({ id: i + 1, name: `item ${i + 1}` }));
    state.init({ colsMetaData: [], data });

    state.setPage(3);
    state.previousPage();

    expect(state.currentPage()).toBe(2);
    expect(state.rows()[0].id).toBe(21);
  });

  it('previousPage should not go below 1', () => {
    const data = [{ id: 1, name: 'a' }];
    state.init({ colsMetaData: [], data });
    state.previousPage();
    expect(state.currentPage()).toBe(1);
  });

  // ── filtering (static) ─────────────────────────────────────────────────────

  it('setFilter with "=" should filter data and reset to page 1', () => {
    state.init({ colsMetaData: [], data: [
      { id: 1, name: 'Alice', category: 'A' },
      { id: 2, name: 'Bob', category: 'B' },
      { id: 3, name: 'Carol', category: 'A' },
    ]});

    const filters: Filter[] = [{ field: 'category', type: '=', value: 'A' }];
    state.setFilter(filters);

    expect(state.rows().length).toBe(2);
    expect(state.rows().map(r => r.name)).toEqual(['Alice', 'Carol']);
    expect(state.totalItems()).toBe(2);
    expect(state.currentPage()).toBe(1);
  });

  it('setFilter with "like" should filter by partial match', () => {
    state.init({ colsMetaData: [], data: [
      { id: 1, name: 'Laptop Pro' },
      { id: 2, name: 'Laptop Mini' },
      { id: 3, name: 'Phone' },
    ]});

    state.setFilter([{ field: 'name', type: 'like', value: 'Laptop' }]);

    expect(state.rows().length).toBe(2);
  });

  it('setFilter with "search" field should search across isSearchField columns', () => {
    const colsMetaData = [
      { name: 'name' as any, type: ParameterType.String, isSearchField: true },
      { name: 'category' as any, type: ParameterType.String, isSearchField: false },
    ];
    state.init({ colsMetaData, data: [
      { id: 1, name: 'Laptop', category: 'Electronics' },
      { id: 2, name: 'Shirt', category: 'Clothing' },
      { id: 3, name: 'Phone', category: 'Electronics' },
    ]});

    state.setFilter([{ field: 'search', type: 'like', value: 'lap' }]);

    expect(state.rows().length).toBe(1);
    expect(state.rows()[0].name).toBe('Laptop');
  });

  it('setFilter with empty array should restore all rows', () => {
    const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    state.init({ colsMetaData: [], data });

    state.setFilter([{ field: 'name', type: '=', value: 'Alice' }]);
    expect(state.rows().length).toBe(1);

    state.setFilter([]);
    expect(state.rows().length).toBe(2);
  });

  it('removeFilter should remove matching filter and re-apply', () => {
    state.init({ colsMetaData: [], data: [
      { id: 1, name: 'Alice', category: 'A' },
      { id: 2, name: 'Bob', category: 'B' },
    ]});

    state.setFilter([{ field: 'category', type: '=', value: 'A' }]);
    expect(state.rows().length).toBe(1);

    state.removeFilter('category', '=', 'A');
    expect(state.rows().length).toBe(2);
    expect(state.currentPage()).toBe(1);
  });

  // ── sorting (static) ───────────────────────────────────────────────────────

  it('setSort should sort data ASC', () => {
    state.init({ colsMetaData: [], data: [
      { id: 1, name: 'Charlie' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' },
    ]});

    state.setSort('name', 'asc');

    expect(state.rows().map(r => r.name)).toEqual(['Alice', 'Bob', 'Charlie']);
  });

  it('setSort should sort data DESC', () => {
    state.init({ colsMetaData: [], data: [
      { id: 1, name: 'Charlie' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' },
    ]});

    state.setSort('name', 'desc');

    expect(state.rows().map(r => r.name)).toEqual(['Charlie', 'Bob', 'Alice']);
  });

  it('setSort with null should clear sort and restore original order', () => {
    const data = [{ id: 1, name: 'Charlie' }, { id: 2, name: 'Alice' }];
    state.init({ colsMetaData: [], data });

    state.setSort('name', 'asc');
    state.setSort(null, 'asc');

    expect(state.rows().map(r => r.name)).toEqual(['Charlie', 'Alice']);
  });

  // ── groupBy ────────────────────────────────────────────────────────────────

  it('setGroupBy should update groupByField and reset page', () => {
    state.init({ colsMetaData: [], data: [{ id: 1, name: 'a' }] });
    state.setPage = jasmine.createSpy().and.callThrough();
    state.currentPage.set(3);
    state.setGroupBy('category');
    expect(state.groupByField()).toBe('category');
    expect(state.currentPage()).toBe(1);
  });

  // ── server-side data ───────────────────────────────────────────────────────

  it('init with services should fetch data asynchronously', fakeAsync(() => {
    const mockService = {
      getData$: () => of({ data: [{ id: 1, name: 'Test' }], total: 1, last_page: 1 }),
    };
    const onDataUpdate = jasmine.createSpy('onDataUpdate');
    state.init({ colsMetaData: [], services: mockService, onDataUpdate });

    expect(state.isReady$.getValue()).toBeTrue();

    tick(0);

    expect(state.rows()).toEqual([{ id: 1, name: 'Test' }]);
    expect(state.totalItems()).toBe(1);
    expect(state.isLoading()).toBeFalse();
    expect(onDataUpdate).toHaveBeenCalledWith(1);
  }));
});
