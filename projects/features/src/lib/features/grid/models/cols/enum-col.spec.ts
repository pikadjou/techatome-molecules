import { BehaviorSubject, Subject, signal } from '@angular/core';

import { EnumCol } from './enum-col';
import { TaGridData } from '../grid-data';
import { ParameterType } from '../types';

describe('EnumCol', () => {
  let enumCol: EnumCol;
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

    enumCol = new EnumCol(
      {
        scope: 'test-scope',
        col: {
          name: 'status',
          type: ParameterType.Enum,
          enumValues: ['active', 'inactive', 'pending'],
        },
      },
      mockModel
    );
  });

  it('should create', () => {
    expect(enumCol).toBeTruthy();
  });

  it('should have the correct key', () => {
    expect(enumCol.key).toBe('status');
  });

  describe('getInputForm', () => {
    it('should return an InputPanel containing an InputDropdown', () => {
      const inputForm = enumCol.getInputForm();

      expect(inputForm).toBeTruthy();
      expect(inputForm!.key).toBe('enum-panel');
    });
  });

  describe('formatInputForm (inherited)', () => {
    it('should return null when value is falsy', () => {
      expect(enumCol.formatInputForm({ status: null })).toBeNull();
    });

    it('should return a Filter with equals type', () => {
      const result = enumCol.formatInputForm({ status: 'active' });

      expect(result).toBeTruthy();
      expect(result!.field).toBe('status');
      expect(result!.type).toBe('=');
    });
  });
});
