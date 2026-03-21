import { BehaviorSubject, Subject, of, signal } from '@angular/core';

import { RelationCol } from './relation-col';
import { TaGridData } from '../grid-data';
import { ParameterType } from '../types';

describe('RelationCol', () => {
  let relationCol: RelationCol;
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
  });

  describe('without dataSearch$', () => {
    beforeEach(() => {
      relationCol = new RelationCol(
        {
          scope: 'test-scope',
          col: { name: 'projectId', type: ParameterType.Relation },
        },
        mockModel
      );
    });

    it('should create', () => {
      expect(relationCol).toBeTruthy();
    });

    it('should have the correct key', () => {
      expect(relationCol.key).toBe('projectId');
    });

    describe('getInputForm', () => {
      it('should return an InputTextBox when no dataSearch$ is provided', () => {
        const inputForm = relationCol.getInputForm();

        expect(inputForm).toBeTruthy();
        expect(inputForm!.key).toBe('projectId');
      });
    });

    describe('formatInputForm', () => {
      it('should return null when value is falsy', () => {
        expect(relationCol.formatInputForm({ projectId: null })).toBeNull();
        expect(relationCol.formatInputForm({ projectId: undefined })).toBeNull();
      });

      it('should return a Filter with equals type by default', () => {
        const result = relationCol.formatInputForm({ projectId: '5' });

        expect(result).toBeTruthy();
        expect(result!.field).toBe('projectId');
        expect(result!.type).toBe('=');
        expect(result!.value).toBe(5);
      });
    });
  });

  describe('with dataSearch$', () => {
    beforeEach(() => {
      relationCol = new RelationCol(
        {
          scope: 'test-scope',
          col: {
            name: 'projectId',
            type: ParameterType.Relation,
            dataSearch$: () => of([{ id: '1', name: 'Project A' }]),
          },
        },
        mockModel
      );
    });

    describe('getInputForm', () => {
      it('should return an InputChoices when dataSearch$ is provided', () => {
        const inputForm = relationCol.getInputForm();

        expect(inputForm).toBeTruthy();
        expect(inputForm!.key).toBe('projectId');
      });
    });
  });

  describe('with multivalues', () => {
    beforeEach(() => {
      relationCol = new RelationCol(
        {
          scope: 'test-scope',
          col: {
            name: 'tags',
            type: ParameterType.Relation,
            multivalues: true,
          },
        },
        mockModel
      );
    });

    describe('formatInputForm', () => {
      it('should return a Filter with "in" type when multivalues is true', () => {
        const result = relationCol.formatInputForm({ tags: '10' });

        expect(result).toBeTruthy();
        expect(result!.field).toBe('tags');
        expect(result!.type).toBe('in');
      });
    });
  });
});
