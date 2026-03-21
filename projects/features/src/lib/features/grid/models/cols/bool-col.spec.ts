import { BehaviorSubject, Subject, signal } from '@angular/core';

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

  it('should inherit getColDef from BaseCol', () => {
    const colDef = boolCol.getColDef();

    expect(colDef.field).toBe('isActive');
    expect(colDef.title).toBe('grid.test-scope.core.isActive');
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
