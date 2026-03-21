import { TestBed } from '@angular/core/testing';

import { TaGridSessionService } from './grid-session.services';

describe('TaGridSessionService', () => {
  let service: TaGridSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaGridSessionService],
    });
    service = TestBed.inject(TaGridSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setFilter and getFilter', () => {
    it('should store and retrieve a filter', () => {
      const filters = [{ field: 'name', type: 'like', value: 'test' }];

      service.setFilter('grid-1', filters);
      const result = service.getFilter('grid-1');

      expect(result).toEqual(filters);
    });

    it('should return null for non-existent key', () => {
      const result = service.getFilter('non-existent');
      expect(result).toBeNull();
    });

    it('should update an existing filter', () => {
      const filters1 = [{ field: 'name', type: 'like', value: 'test1' }];
      const filters2 = [{ field: 'name', type: 'like', value: 'test2' }];

      service.setFilter('grid-1', filters1);
      service.setFilter('grid-1', filters2);
      const result = service.getFilter('grid-1');

      expect(result).toEqual(filters2);
    });

    it('should store filters for different keys independently', () => {
      const filters1 = [{ field: 'name', type: 'like', value: 'test1' }];
      const filters2 = [{ field: 'status', type: '=', value: 'active' }];

      service.setFilter('grid-1', filters1);
      service.setFilter('grid-2', filters2);

      expect(service.getFilter('grid-1')).toEqual(filters1);
      expect(service.getFilter('grid-2')).toEqual(filters2);
    });
  });

  describe('clearFilter', () => {
    it('should clear filter for a given key', () => {
      const filters = [{ field: 'name', type: 'like', value: 'test' }];
      service.setFilter('grid-1', filters);

      service.clearFilter('grid-1');
      const result = service.getFilter('grid-1');

      expect(result).toEqual([]);
    });
  });
});
