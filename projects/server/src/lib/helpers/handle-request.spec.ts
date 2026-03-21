import { of } from 'rxjs';

import { HandleComplexRequest, HandleSimpleRequest } from './handle-request';

describe('HandleComplexRequest', () => {
  let handler: HandleComplexRequest<{ name: string }>;

  beforeEach(() => {
    handler = new HandleComplexRequest<{ name: string }>();
  });

  it('should initialize with an empty data$ BehaviorSubject', () => {
    expect(handler.data$.getValue()).toEqual({});
  });

  describe('fetch', () => {
    it('should store fetched data by id and emit it', (done) => {
      const item = { name: 'test' };
      handler.fetch('1', of(item)).subscribe((result) => {
        expect(result).toEqual(item);
        expect(handler.data$.getValue()['1']).toEqual(item);
        done();
      });
    });

    it('should filter out falsy values', (done) => {
      const item = { name: 'valid' };
      handler.fetch('1', of(null as any, item)).subscribe((result) => {
        expect(result).toEqual(item);
        done();
      });
    });
  });

  describe('add', () => {
    it('should add a new item to the data store', () => {
      const item = { name: 'new item' };
      handler.add('1', item);
      expect(handler.data$.getValue()['1']).toEqual(item);
    });

    it('should call update if item already exists', () => {
      const item = { name: 'original' };
      handler.add('1', item);

      spyOn(handler, 'update');
      handler.add('1', { name: 'updated' });
      expect(handler.update).toHaveBeenCalledWith('1', { name: 'updated' });
    });
  });

  describe('update', () => {
    it('should merge update into existing item by default', () => {
      handler.add('1', { name: 'original' });
      handler.update('1', { name: 'updated' });
      expect(handler.data$.getValue()['1']).toEqual({ name: 'updated' });
    });

    it('should replace item when merge is false', () => {
      handler.add('1', { name: 'original' });
      handler.update('1', { name: 'replaced' }, false);
      expect(handler.data$.getValue()['1']).toEqual({ name: 'replaced' });
    });

    it('should do nothing if item does not exist', () => {
      const before = { ...handler.data$.getValue() };
      handler.update('nonexistent', { name: 'test' });
      expect(handler.data$.getValue()).toEqual(before);
    });
  });

  describe('get', () => {
    it('should return item by key', () => {
      handler.add('1', { name: 'test' });
      expect(handler.get('1')).toEqual({ name: 'test' });
    });

    it('should return null if key does not exist', () => {
      expect(handler.get('nonexistent')).toBeNull();
    });
  });

  describe('get$', () => {
    it('should emit item from data$ by key', (done) => {
      handler.add('1', { name: 'test' });
      handler.get$('1').subscribe((result) => {
        expect(result).toEqual({ name: 'test' });
        done();
      });
    });
  });
});

describe('HandleSimpleRequest', () => {
  let handler: HandleSimpleRequest<string>;

  beforeEach(() => {
    handler = new HandleSimpleRequest<string>();
  });

  it('should initialize with null data$', () => {
    expect(handler.data$.getValue()).toBeNull();
  });

  describe('fetch', () => {
    it('should store fetched data and emit it', (done) => {
      handler.fetch(of('test value')).subscribe((result) => {
        expect(result).toBe('test value');
        expect(handler.data$.getValue()).toBe('test value');
        done();
      });
    });

    it('should filter out null and undefined values', (done) => {
      handler.fetch(of('valid')).subscribe((result) => {
        expect(result).toBe('valid');
        done();
      });
    });
  });

  describe('get', () => {
    it('should return the current value', () => {
      handler.data$.next('hello');
      expect(handler.get()).toBe('hello');
    });

    it('should return null when data$ is null', () => {
      expect(handler.get()).toBeNull();
    });
  });

  describe('get$', () => {
    it('should emit non-null values', (done) => {
      handler.data$.next('test');
      handler.get$().subscribe((result) => {
        expect(result).toBe('test');
        done();
      });
    });
  });
});
