import { signal } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { BoolCol } from './bool-col';
import { TaGridData } from '../grid-data';
import { ParameterType } from '../types';

describe('BoolCol', () => {
  let boolCol: BoolCol;
  let mockModel: any;

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

    boolCol = new BoolCol(
      {
        scope: 'test-scope',
        col: { name: 'isActive', type: ParameterType.Boolean },
      },
      mockModel
    );
  });

  it('should create', () => {
    expect(boolCol).toBeTruthy();
  });

  it('should have the correct key', () => {
    expect(boolCol.key).toBe('isActive');
  });

  it('should inherit getColConfig from BaseCol', () => {
    const config = boolCol.getColConfig();

    expect(config.key).toBe('isActive');
    expect(config.title).toBe('grid.test-scope.core.isActive');
    expect(config.sortable).toBe(true);
  });

  describe('defaultFormatter', () => {
    it('should return ✓ for truthy values', () => {
      expect(boolCol.defaultFormatter({ isActive: true })).toBe('✓');
    });

    it('should return ✗ for false', () => {
      expect(boolCol.defaultFormatter({ isActive: false })).toBe('✗');
    });

    it('should return empty string for null or undefined', () => {
      expect(boolCol.defaultFormatter({ isActive: null })).toBe('');
      expect(boolCol.defaultFormatter({ isActive: undefined })).toBe('');
    });
  });

  it('should inherit getInputForm from BaseCol (returns null)', () => {
    expect(boolCol.getInputForm()).toBeNull();
  });

  it('should inherit formatInputForm from BaseCol', () => {
    const result = boolCol.formatInputForm({ isActive: 'true' });

    expect(result).toEqual({
      field: 'isActive',
      type: '=',
      value: 'true',
    });
  });
});
