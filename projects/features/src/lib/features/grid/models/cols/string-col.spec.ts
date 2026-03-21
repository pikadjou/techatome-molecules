import { BehaviorSubject, Subject, signal } from '@angular/core';

import { StringCol } from './string-col';
import { TaGridData } from '../grid-data';
import { ParameterType } from '../types';

describe('StringCol', () => {
  let stringCol: StringCol;
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

    stringCol = new StringCol(
      {
        scope: 'test-scope',
        col: { name: 'description', type: ParameterType.String },
      },
      mockModel
    );
  });

  it('should create', () => {
    expect(stringCol).toBeTruthy();
  });

  it('should have the correct key', () => {
    expect(stringCol.key).toBe('description');
  });

  describe('getInputForm', () => {
    it('should return an InputTextBox', () => {
      const inputForm = stringCol.getInputForm();

      expect(inputForm).toBeTruthy();
      expect(inputForm!.key).toBe('description');
    });
  });

  describe('formatInputForm', () => {
    it('should return null when value is empty string', () => {
      expect(stringCol.formatInputForm({ description: '' })).toBeNull();
    });

    it('should return null when value is null', () => {
      expect(stringCol.formatInputForm({ description: null })).toBeNull();
    });

    it('should return null when value is undefined', () => {
      expect(stringCol.formatInputForm({ description: undefined })).toBeNull();
    });

    it('should return null when value is empty array', () => {
      expect(stringCol.formatInputForm({ description: [] })).toBeNull();
    });

    it('should return a Filter with "like" type for valid string', () => {
      const result = stringCol.formatInputForm({ description: 'hello world' });

      expect(result).toEqual({
        field: 'description',
        type: 'like',
        value: 'hello world',
      });
    });
  });
});
