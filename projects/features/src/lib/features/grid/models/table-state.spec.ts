import { TestBed } from '@angular/core/testing';

import { TaTableState } from './table-state';
import { Filter } from './types';

describe('TaTableState', () => {
  let state: TaTableState<{ id: number; name: string }>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    state = new TaTableState();
  });

  afterEach(() => state.destroy());

  it('should initialize with default values', () => {
    expect(state.currentPage()).toBe(1);
    expect(state.pageSize()).toBe(20);
    expect(state.filters()).toEqual([]);
    expect(state.sortField()).toBeNull();
    expect(state.sortDir()).toBe('asc');
    expect(state.totalItems()).toBe(0);
    expect(state.rows()).toEqual([]);
  });

  it('totalPages should be at least 1', () => {
    state.totalItems.set(0);
    expect(state.totalPages()).toBe(1);
  });

  it('totalPages should be computed from totalItems and pageSize', () => {
    state.totalItems.set(45);
    expect(state.totalPages()).toBe(3); // Math.ceil(45/20)
  });

  it('setPage should update currentPage', () => {
    state.totalItems.set(100);
    state.setPage(3);
    expect(state.currentPage()).toBe(3);
  });

  it('setPage should not exceed totalPages', () => {
    state.totalItems.set(40); // 2 pages
    state.setPage(99);
    expect(state.currentPage()).toBe(1); // no-op, 99 > 2
  });

  it('nextPage should increment currentPage', () => {
    state.totalItems.set(60); // 3 pages
    state.currentPage.set(1);
    state.nextPage();
    expect(state.currentPage()).toBe(2);
  });

  it('nextPage should not exceed totalPages', () => {
    state.totalItems.set(20); // 1 page
    state.currentPage.set(1);
    state.nextPage();
    expect(state.currentPage()).toBe(1);
  });

  it('previousPage should decrement currentPage', () => {
    state.currentPage.set(3);
    state.previousPage();
    expect(state.currentPage()).toBe(2);
  });

  it('previousPage should not go below 1', () => {
    state.currentPage.set(1);
    state.previousPage();
    expect(state.currentPage()).toBe(1);
  });

  it('setFilter should update filters and reset page to 1', () => {
    state.currentPage.set(3);
    const filters: Filter[] = [{ field: 'name', type: 'like', value: 'test' }];
    state.setFilter(filters);
    expect(state.filters()).toEqual(filters);
    expect(state.currentPage()).toBe(1);
  });

  it('getFilters should return current filters', () => {
    const filters: Filter[] = [{ field: 'status', type: '=', value: 'active' }];
    state.filters.set(filters);
    expect(state.getFilters(false)).toEqual(filters);
  });

  it('removeFilter should remove matching filter and reset page', () => {
    state.currentPage.set(2);
    state.filters.set([
      { field: 'name', type: 'like', value: 'test' },
      { field: 'status', type: '=', value: 'active' },
    ]);
    state.removeFilter('name', 'like', 'test');
    expect(state.filters()).toEqual([{ field: 'status', type: '=', value: 'active' }]);
    expect(state.currentPage()).toBe(1);
  });

  it('setSort should update sortField, sortDir and reset page', () => {
    state.currentPage.set(3);
    state.setSort('name', 'desc');
    expect(state.sortField()).toBe('name');
    expect(state.sortDir()).toBe('desc');
    expect(state.currentPage()).toBe(1);
  });

  it('setSort with null field should clear sort', () => {
    state.sortField.set('name');
    state.setSort(null, 'asc');
    expect(state.sortField()).toBeNull();
  });

  it('getData should return current rows', () => {
    const data = [{ id: 1, name: 'Alice' }];
    state.rows.set(data);
    expect(state.getData()).toEqual(data);
  });

  it('init with static data should populate rows', () => {
    const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    state.init({ colsMetaData: [], data });
    expect(state.rows()).toEqual(data);
    expect(state.totalItems()).toBe(2);
    expect(state.isReady$.getValue()).toBeTrue();
    expect(state.isDataReady$.getValue()).toBeTrue();
  });
});
