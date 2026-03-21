import { BehaviorSubject, Subject, signal } from '@angular/core';

import { DateCol } from './date-col';
import { TaGridData } from '../grid-data';
import { ParameterType } from '../types';

describe('DateCol', () => {
  let dateCol: DateCol;
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

    dateCol = new DateCol(
      {
        scope: 'test-scope',
        col: { name: 'createdDate', type: ParameterType.DateTime },
      },
      mockModel
    );
  });

  it('should create', () => {
    expect(dateCol).toBeTruthy();
  });

  it('should have the correct key', () => {
    expect(dateCol.key).toBe('createdDate');
  });

  describe('getInputForm', () => {
    it('should return an InputDatePicker', () => {
      const inputForm = dateCol.getInputForm();

      expect(inputForm).toBeTruthy();
      expect(inputForm!.key).toBe('createdDate');
    });
  });

  describe('formatInputForm', () => {
    it('should return null when value is falsy', () => {
      expect(dateCol.formatInputForm({ createdDate: null })).toBeNull();
      expect(dateCol.formatInputForm({ createdDate: undefined })).toBeNull();
    });

    it('should return a Filter with formatted date and "like" type', () => {
      const testDate = new Date(2024, 0, 15); // January 15, 2024
      const result = dateCol.formatInputForm({ createdDate: testDate });

      expect(result).toBeTruthy();
      expect(result!.field).toBe('createdDate');
      expect(result!.type).toBe('like');
      expect(result!.value).toBe('2024-01-15%');
    });
  });
});
