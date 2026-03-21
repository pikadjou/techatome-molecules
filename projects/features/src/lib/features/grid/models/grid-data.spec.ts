import { TaGridData } from './grid-data';
import { ParameterType } from './types';

describe('TaGridData', () => {
  let gridData: TaGridData<any>;

  beforeEach(() => {
    gridData = new TaGridData<any>('test-scope');
  });

  it('should create with the given scope', () => {
    expect(gridData).toBeTruthy();
    expect(gridData.scope).toBe('test-scope');
  });

  it('should have table initially null', () => {
    expect(gridData.table).toBeNull();
  });

  it('should have filters initially null', () => {
    expect(gridData.filters).toBeNull();
  });

  it('should have empty cols initially', () => {
    expect(gridData.cols).toEqual({});
  });

  it('should have isReady$ initially false', () => {
    expect(gridData.isReady$.getValue()).toBeFalse();
  });

  it('should have isDataReady$ initially false', () => {
    expect(gridData.isDataReady$.getValue()).toBeFalse();
  });

  it('should have groupBy initially null', () => {
    expect(gridData.groupBy).toBeNull();
  });

  it('should have totalItems initially 0', () => {
    expect(gridData.totalItems()).toBe(0);
  });

  it('should have displayType initially "card"', () => {
    expect(gridData.displayType()).toBe('card');
  });

  it('should have tableHtml initially null', () => {
    expect(gridData.tableHtml).toBeNull();
  });

  describe('data', () => {
    it('should return empty array when table is null', () => {
      expect(gridData.data).toEqual([]);
    });
  });

  describe('dataByGroup', () => {
    it('should return single group with empty data when table is null and groupBy is null', () => {
      const result = gridData.dataByGroup;

      expect(result.length).toBe(1);
      expect(result[0].key).toBe('');
      expect(result[0].data).toEqual([]);
    });
  });

  describe('isGroup', () => {
    it('should return false when groupBy is null', () => {
      expect(gridData.isGroup).toBeFalse();
    });
  });

  describe('switchView', () => {
    it('should update displayType to grid', () => {
      gridData.switchView('grid');
      expect(gridData.displayType()).toBe('grid');
    });

    it('should update displayType to card', () => {
      gridData.switchView('grid');
      gridData.switchView('card');
      expect(gridData.displayType()).toBe('card');
    });
  });

  describe('setGroupBy', () => {
    it('should set groupBy field', () => {
      gridData.table = {
        setGroupBy: jasmine.createSpy('setGroupBy'),
        setData: jasmine.createSpy('setData'),
      } as any;

      gridData.setGroupBy('category');

      expect(gridData.groupBy).toBe('category');
    });

    it('should call table.setGroupBy and table.setData', () => {
      const mockTable = {
        setGroupBy: jasmine.createSpy('setGroupBy'),
        setData: jasmine.createSpy('setData'),
      };
      gridData.table = mockTable as any;

      gridData.setGroupBy('category');

      expect(mockTable.setGroupBy).toHaveBeenCalledWith('category');
      expect(mockTable.setData).toHaveBeenCalled();
    });
  });

  describe('clearGroupBy', () => {
    it('should set groupBy to null', () => {
      gridData.table = {
        setGroupBy: jasmine.createSpy('setGroupBy'),
        setData: jasmine.createSpy('setData'),
      } as any;

      gridData.setGroupBy('category');
      gridData.clearGroupBy();

      expect(gridData.groupBy).toBeNull();
    });

    it('should call table.setGroupBy with empty array and table.setData', () => {
      const mockTable = {
        setGroupBy: jasmine.createSpy('setGroupBy'),
        setData: jasmine.createSpy('setData'),
      };
      gridData.table = mockTable as any;

      gridData.clearGroupBy();

      expect(mockTable.setGroupBy).toHaveBeenCalledWith([]);
      expect(mockTable.setData).toHaveBeenCalled();
    });
  });

  describe('destroy', () => {
    it('should call table.destroy when table exists', () => {
      const mockTable = { destroy: jasmine.createSpy('destroy') };
      gridData.table = mockTable as any;

      gridData.destroy();

      expect(mockTable.destroy).toHaveBeenCalled();
    });

    it('should not throw when table is null', () => {
      expect(() => gridData.destroy()).not.toThrow();
    });
  });

  describe('rowClicked$', () => {
    it('should emit values', (done) => {
      const testItem = { id: 1, name: 'Test' };

      gridData.rowClicked$.subscribe(item => {
        expect(item).toEqual(testItem);
        done();
      });

      gridData.rowClicked$.next(testItem);
    });
  });
});
