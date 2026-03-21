import { TestBed } from '@angular/core/testing';

import { TaGridInstanceService } from './grid-instance.service';

describe('TaGridInstanceService', () => {
  let service: TaGridInstanceService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaGridInstanceService],
    });
    service = TestBed.inject(TaGridInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have empty grids initially', () => {
    expect(Object.keys(service.grids).length).toBe(0);
  });

  describe('create', () => {
    it('should create a new grid with the given key', () => {
      service.create('my-grid');

      expect(service.grids['my-grid']).toBeTruthy();
      expect(service.grids['my-grid'].scope).toBe('my-grid');
    });

    it('should not overwrite an existing grid', () => {
      service.create('my-grid');
      const firstGrid = service.grids['my-grid'];
      service.create('my-grid');

      expect(service.grids['my-grid']).toBe(firstGrid);
    });
  });

  describe('has', () => {
    it('should return false when grid does not exist', () => {
      expect(service.has('non-existent')).toBeFalse();
    });

    it('should return true when grid exists', () => {
      service.create('my-grid');
      expect(service.has('my-grid')).toBeTrue();
    });
  });

  describe('get', () => {
    it('should return undefined when grid does not exist and create is false', () => {
      const grid = service.get('non-existent');
      expect(grid).toBeUndefined();
    });

    it('should return the grid when it exists', () => {
      service.create('my-grid');
      const grid = service.get('my-grid');

      expect(grid).toBeTruthy();
      expect(grid.scope).toBe('my-grid');
    });

    it('should create the grid when create is true and grid does not exist', () => {
      const grid = service.get('new-grid', true);

      expect(grid).toBeTruthy();
      expect(grid.scope).toBe('new-grid');
    });

    it('should return existing grid when create is true and grid already exists', () => {
      service.create('my-grid');
      const existingGrid = service.grids['my-grid'];
      const grid = service.get('my-grid', true);

      expect(grid).toBe(existingGrid);
    });
  });
});
