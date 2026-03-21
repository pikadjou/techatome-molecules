import { TestBed } from '@angular/core/testing';

import { TaGridFormService } from './grid-form.services';
import { TaGridData } from '../models/grid-data';
import { BaseCol } from '../models/cols/base-col';
import { StringCol } from '../models/cols/string-col';
import { ParameterType } from '../models/types';

describe('TaGridFormService', () => {
  let service: TaGridFormService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaGridFormService],
    });
    service = TestBed.inject(TaGridFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFiltersForm', () => {
    it('should return empty array when model has no cols', () => {
      const model = { cols: {} } as TaGridData<any>;
      const result = service.getFiltersForm(model);

      expect(result).toEqual([]);
    });

    it('should return form inputs for cols with showOnSearch', () => {
      const model = {
        cols: {
          name: createMockCol('name', true),
          hidden: createMockCol('hidden', false),
        },
        filters: { get: () => [] },
      } as unknown as TaGridData<any>;

      const result = service.getFiltersForm(model);

      expect(result.length).toBe(1);
      expect(result[0].key).toBe('main-panel');
    });

    it('should return a panel with children when showOnSearch cols exist', () => {
      const model = {
        cols: {
          name: createMockCol('name', true),
          status: createMockCol('status', true),
        },
        filters: { get: () => [] },
      } as unknown as TaGridData<any>;

      const result = service.getFiltersForm(model);

      expect(result.length).toBe(1);
    });
  });

  describe('formatFiltersForm', () => {
    it('should return empty array when no values match', () => {
      const model = {
        cols: {
          name: createMockColWithFormat('name', null),
        },
      } as unknown as TaGridData<any>;

      const result = service.formatFiltersForm(model, { name: '' });

      expect(result).toEqual([]);
    });

    it('should return filters for cols with values', () => {
      const model = {
        cols: {
          name: createMockColWithFormat('name', { field: 'name', type: 'like', value: 'test' }),
        },
      } as unknown as TaGridData<any>;

      const result = service.formatFiltersForm(model, { name: 'test' });

      expect(result.length).toBe(1);
      expect(result[0].field).toBe('name');
    });

    it('should filter out null results', () => {
      const model = {
        cols: {
          name: createMockColWithFormat('name', { field: 'name', type: 'like', value: 'test' }),
          empty: createMockColWithFormat('empty', null),
        },
      } as unknown as TaGridData<any>;

      const result = service.formatFiltersForm(model, { name: 'test', empty: '' });

      expect(result.length).toBe(1);
    });
  });

  describe('getGroupForm', () => {
    it('should return a form with dropdown containing groupable columns', () => {
      const model = {
        cols: {
          name: createMockColForGroup('name', true, false),
          hidden: createMockColForGroup('hidden', false, false),
          notDisplayable: createMockColForGroup('notDisplayable', true, true),
        },
        groupBy: null,
      } as unknown as TaGridData<any>;

      const result = service.getGroupForm(model);

      expect(result.length).toBe(1);
      expect(result[0].key).toBe('main-panel');
    });
  });

  describe('formatGroupForm', () => {
    it('should return null when group is empty', () => {
      expect(service.formatGroupForm({ group: '' })).toBeNull();
      expect(service.formatGroupForm({ group: null })).toBeNull();
      expect(service.formatGroupForm({ group: undefined })).toBeNull();
    });

    it('should return the group field name', () => {
      expect(service.formatGroupForm({ group: 'category' })).toBe('category');
    });

    it('should return null when no group key exists', () => {
      expect(service.formatGroupForm({})).toBeNull();
    });
  });
});

function createMockCol(key: string, showOnSearch: boolean) {
  return {
    key,
    data: { col: { name: key, type: ParameterType.String, showOnSearch } },
    getInputForm: () =>
      showOnSearch
        ? { key, label: `grid.test.core.${key}`, class: 'pb-2' }
        : null,
    inputLabel: `grid.test.core.${key}`,
  };
}

function createMockColWithFormat(key: string, formatResult: any) {
  return {
    key,
    data: { col: { name: key, type: ParameterType.String } },
    formatInputForm: () => formatResult,
  };
}

function createMockColForGroup(key: string, showOnSearch: boolean, notDisplayable: boolean) {
  return {
    key,
    data: { col: { name: key, type: ParameterType.String, showOnSearch, notDisplayable } },
    inputLabel: `grid.test.core.${key}`,
  };
}
