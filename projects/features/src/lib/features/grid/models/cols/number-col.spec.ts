import { BehaviorSubject, Subject, signal } from '@angular/core';

import { NumberCol } from './number-col';
import { TaGridData } from '../grid-data';
import { ParameterType } from '../types';

describe('NumberCol', () => {
  let numberCol: NumberCol;
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

    numberCol = new NumberCol(
      {
        scope: 'test-scope',
        col: { name: 'quantity', type: ParameterType.Number },
      },
      mockModel
    );
  });

  it('should create', () => {
    expect(numberCol).toBeTruthy();
  });

  it('should have the correct key', () => {
    expect(numberCol.key).toBe('quantity');
  });

  describe('getInputForm', () => {
    it('should return an InputPanel containing an InputNumber', () => {
      const inputForm = numberCol.getInputForm();

      expect(inputForm).toBeTruthy();
      expect(inputForm!.key).toBe('number-panel');
    });
  });

  describe('formatInputForm', () => {
    it('should return null when value is falsy', () => {
      expect(numberCol.formatInputForm({ quantity: null })).toBeNull();
      expect(numberCol.formatInputForm({ quantity: 0 })).toBeNull();
      expect(numberCol.formatInputForm({ quantity: undefined })).toBeNull();
    });

    it('should return a Filter with equals type for numeric values', () => {
      const result = numberCol.formatInputForm({ quantity: 42 });

      expect(result).toEqual({
        field: 'quantity',
        type: '=',
        value: 42,
      });
    });
  });
});
