import {
  ActiveFilter,
  ColMetaData,
  Filter,
  GridOptions,
  ParameterType,
  Preset,
  Sort,
  ViewType,
  ajaxRequestFuncParams,
  ajaxResponse,
} from './types';

describe('ParameterType', () => {
  it('should have Unknown as 0', () => {
    expect(ParameterType.Unknown).toBe(0);
  });

  it('should have String as 1', () => {
    expect(ParameterType.String).toBe(1);
  });

  it('should have Number as 2', () => {
    expect(ParameterType.Number).toBe(2);
  });

  it('should have Boolean as 3', () => {
    expect(ParameterType.Boolean).toBe(3);
  });

  it('should have DateTime as 4', () => {
    expect(ParameterType.DateTime).toBe(4);
  });

  it('should have Enum as 5', () => {
    expect(ParameterType.Enum).toBe(5);
  });

  it('should have Relation as 6', () => {
    expect(ParameterType.Relation).toBe(6);
  });
});

describe('ColMetaData', () => {
  it('should create a basic ColMetaData', () => {
    const col: ColMetaData<{ name: string }> = {
      name: 'name',
      type: ParameterType.String,
    };

    expect(col.name).toBe('name');
    expect(col.type).toBe(ParameterType.String);
  });

  it('should support optional properties', () => {
    const col: ColMetaData<{ status: string }> = {
      name: 'status',
      type: ParameterType.Enum,
      isSearchField: true,
      notDisplayable: false,
      showOnSearch: true,
      multivalues: false,
      enumValues: ['active', 'inactive'],
    };

    expect(col.isSearchField).toBeTrue();
    expect(col.notDisplayable).toBeFalse();
    expect(col.showOnSearch).toBeTrue();
    expect(col.multivalues).toBeFalse();
    expect(col.enumValues).toEqual(['active', 'inactive']);
  });
});

describe('ActiveFilter', () => {
  it('should create an ActiveFilter', () => {
    const activeFilter: ActiveFilter = {
      key: 'status',
      values: [{ field: 'status', type: '=', value: 'active' }],
    };

    expect(activeFilter.key).toBe('status');
    expect(activeFilter.values.length).toBe(1);
  });
});

describe('Filter', () => {
  it('should create a Filter (TabulatorFilter alias)', () => {
    const filter: Filter = {
      field: 'name',
      type: 'like',
      value: 'test',
    };

    expect(filter.field).toBe('name');
    expect(filter.type).toBe('like');
    expect(filter.value).toBe('test');
  });
});

describe('Sort', () => {
  it('should create a Sort with asc direction', () => {
    const sort: Sort = { field: 'name', dir: 'asc' };

    expect(sort.field).toBe('name');
    expect(sort.dir).toBe('asc');
  });

  it('should create a Sort with desc direction', () => {
    const sort: Sort = { field: 'date', dir: 'desc' };

    expect(sort.field).toBe('date');
    expect(sort.dir).toBe('desc');
  });
});

describe('ajaxResponse', () => {
  it('should create an ajaxResponse', () => {
    const response: ajaxResponse<{ id: number }> = {
      data: [{ id: 1 }, { id: 2 }],
      last_page: 1,
      total: 2,
    };

    expect(response.data.length).toBe(2);
    expect(response.last_page).toBe(1);
    expect(response.total).toBe(2);
  });
});

describe('ajaxRequestFuncParams', () => {
  it('should create ajaxRequestFuncParams', () => {
    const params: ajaxRequestFuncParams = {
      filter: [{ field: 'name', type: 'like', value: 'test' }],
      sort: [{ field: 'name', dir: 'asc' }],
      groupBy: null,
      page: 1,
      size: 20,
      colsMetaData: [],
    };

    expect(params.filter.length).toBe(1);
    expect(params.sort.length).toBe(1);
    expect(params.groupBy).toBeNull();
    expect(params.page).toBe(1);
    expect(params.size).toBe(20);
  });
});

describe('ViewType', () => {
  it('should accept "grid" as a valid value', () => {
    const viewType: ViewType = 'grid';
    expect(viewType).toBe('grid');
  });

  it('should accept "card" as a valid value', () => {
    const viewType: ViewType = 'card';
    expect(viewType).toBe('card');
  });
});

describe('Preset', () => {
  it('should create a Preset', () => {
    const preset: Preset = {
      name: 'Active Items',
      filters: [{ field: 'status', type: '=', value: 'active' }],
    };

    expect(preset.name).toBe('Active Items');
    expect(preset.filters.length).toBe(1);
  });
});
