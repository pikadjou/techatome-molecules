import { TaGridFilters } from './grid-filters';

describe('TaGridFilters', () => {
  let gridFilters: TaGridFilters;
  let mockTable: any;

  beforeEach(() => {
    mockTable = {
      getFilters: jasmine.createSpy('getFilters').and.returnValue([]),
      setFilter: jasmine.createSpy('setFilter'),
      removeFilter: jasmine.createSpy('removeFilter'),
    };

    gridFilters = new TaGridFilters('test-scope', mockTable, []);
  });

  it('should create', () => {
    expect(gridFilters).toBeTruthy();
  });

  it('should expose scope', () => {
    expect(gridFilters.scope).toBe('test-scope');
  });

  it('should expose table', () => {
    expect(gridFilters.table).toBe(mockTable);
  });

  it('should expose preset (default empty)', () => {
    expect(gridFilters.preset).toEqual([]);
  });

  it('should accept preset through constructor', () => {
    const presets = [{ name: 'Active', filters: [{ field: 'status', type: '=', value: 'active' }] }];
    const filtersWithPreset = new TaGridFilters('scope', mockTable, presets);

    expect(filtersWithPreset.preset).toEqual(presets);
  });

  describe('get', () => {
    it('should return empty array when no filters', () => {
      mockTable.getFilters.and.returnValue([]);

      const result = gridFilters.get();

      expect(result).toEqual([]);
    });

    it('should group filters by field', () => {
      mockTable.getFilters.and.returnValue([
        { field: 'status', type: '=', value: 'active' },
        { field: 'status', type: '=', value: 'pending' },
        { field: 'name', type: 'like', value: 'test' },
      ]);

      const result = gridFilters.get();

      expect(result.length).toBe(2);

      const statusFilter = result.find(f => f.key === 'status');
      expect(statusFilter).toBeTruthy();
      expect(statusFilter!.values.length).toBe(2);

      const nameFilter = result.find(f => f.key === 'name');
      expect(nameFilter).toBeTruthy();
      expect(nameFilter!.values.length).toBe(1);
    });

    it('should call table.getFilters with false', () => {
      gridFilters.get();
      expect(mockTable.getFilters).toHaveBeenCalledWith(false);
    });
  });

  describe('apply', () => {
    it('should call table.setFilter with the given filters after debounce', (done) => {
      const filters = [{ field: 'name', type: 'like', value: 'test' }];

      gridFilters.apply(filters);

      setTimeout(() => {
        expect(mockTable.setFilter).toHaveBeenCalledWith(filters);
        done();
      }, 600);
    });

    it('should debounce multiple calls', (done) => {
      const filters1 = [{ field: 'name', type: 'like', value: 'test1' }];
      const filters2 = [{ field: 'name', type: 'like', value: 'test2' }];

      gridFilters.apply(filters1);
      gridFilters.apply(filters2);

      setTimeout(() => {
        expect(mockTable.setFilter).toHaveBeenCalledTimes(1);
        expect(mockTable.setFilter).toHaveBeenCalledWith(filters2);
        done();
      }, 600);
    });
  });

  describe('remove', () => {
    it('should call table.removeFilter with correct arguments', () => {
      const filter = { field: 'name', type: 'like', value: 'test' };

      gridFilters.remove(filter);

      expect(mockTable.removeFilter).toHaveBeenCalledWith('name', 'like', 'test');
    });
  });
});
