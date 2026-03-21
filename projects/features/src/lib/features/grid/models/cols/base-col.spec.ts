import { BehaviorSubject, Subject, signal } from '@angular/core';

import { BaseCol, IBaseCol, operatorMap } from './base-col';
import { TaGridData } from '../grid-data';
import { ParameterType } from '../types';

describe('operatorMap', () => {
  it('should map contains to %', () => {
    expect(operatorMap['contains']).toBe('%');
  });

  it('should map greaterThan to >', () => {
    expect(operatorMap['greaterThan']).toBe('>');
  });

  it('should map lessThan to <', () => {
    expect(operatorMap['lessThan']).toBe('<');
  });

  it('should map equals to =', () => {
    expect(operatorMap['equals']).toBe('=');
  });

  it('should map notEqual to !=', () => {
    expect(operatorMap['notEqual']).toBe('!=');
  });

  it('should map greaterThanOrEqual to >=', () => {
    expect(operatorMap['greaterThanOrEqual']).toBe('>=');
  });

  it('should map lessThanOrEqual to <=', () => {
    expect(operatorMap['lessThanOrEqual']).toBe('<=');
  });
});

describe('BaseCol', () => {
  let baseCol: BaseCol<any>;
  let mockModel: any;
  let mockData: IBaseCol;

  beforeEach(() => {
    mockModel = {
      scope: 'test-scope',
      filters: {
        get: () => [],
      },
      data: [],
      table: null,
      cols: {},
      isReady$: new BehaviorSubject(false),
      isDataReady$: new BehaviorSubject(false),
      rowClicked$: new Subject(),
      displayType: signal('card'),
      groupBy: null,
      totalItems: signal(0),
    } as unknown as TaGridData<any>;

    mockData = {
      scope: 'test-scope',
      col: {
        name: 'testField',
        type: ParameterType.String,
      },
    };

    baseCol = new BaseCol(mockData, mockModel);
  });

  it('should create', () => {
    expect(baseCol).toBeTruthy();
  });

  it('should expose data', () => {
    expect(baseCol.data).toBe(mockData);
  });

  it('should expose model', () => {
    expect(baseCol.model).toBe(mockModel);
  });

  describe('key', () => {
    it('should return the column name', () => {
      expect(baseCol.key).toBe('testField');
    });
  });

  describe('inputLabel', () => {
    it('should return a formatted label string', () => {
      expect(baseCol.inputLabel).toBe('grid.test-scope.core.testField');
    });
  });

  describe('filterValues', () => {
    it('should return empty array when no filters match', () => {
      expect(baseCol.filterValues).toEqual([]);
    });

    it('should return filter values when filters match the key', () => {
      mockModel.filters = {
        get: () => [
          {
            key: 'testField',
            values: [
              { field: 'testField', type: '=', value: 'val1' },
              { field: 'testField', type: '=', value: 'val2' },
            ],
          },
        ],
      };

      expect(baseCol.filterValues).toEqual(['val1', 'val2']);
    });

    it('should return empty array when filters is null', () => {
      mockModel.filters = null;

      expect(baseCol.filterValues).toEqual([]);
    });
  });

  describe('getColDef', () => {
    it('should return a column definition', () => {
      const colDef = baseCol.getColDef();

      expect(colDef.field).toBe('testField');
      expect(colDef.title).toBe('grid.test-scope.core.testField');
      expect(colDef.headerFilter).toBe('input');
    });
  });

  describe('getInputForm', () => {
    it('should return null by default', () => {
      expect(baseCol.getInputForm()).toBeNull();
    });
  });

  describe('formatInputForm', () => {
    it('should return null when value is falsy', () => {
      expect(baseCol.formatInputForm({ testField: '' })).toBeNull();
      expect(baseCol.formatInputForm({ testField: null })).toBeNull();
      expect(baseCol.formatInputForm({ testField: undefined })).toBeNull();
    });

    it('should return a Filter when value is provided', () => {
      const result = baseCol.formatInputForm({ testField: 'hello' });

      expect(result).toEqual({
        field: 'testField',
        type: '=',
        value: 'hello',
      });
    });

    it('should trim the value', () => {
      const result = baseCol.formatInputForm({ testField: '  hello  ' });

      expect(result!.value).toBe('hello');
    });
  });
});
