import { of } from 'rxjs';

import { FilterHelper } from './filter';

describe('FilterHelper', () => {
  let filterHelper: FilterHelper;

  beforeEach(() => {
    filterHelper = new FilterHelper([
      { key: 'all', label: 'menu.all', defaultOpen: true, order: 1 },
      { key: 'active', label: 'menu.active', defaultOpen: false, order: 2 },
      { key: 'archived', label: 'menu.archived', defaultOpen: false, order: 3 },
    ]);
  });

  it('should create', () => {
    expect(filterHelper).toBeTruthy();
  });

  describe('filter getter/setter', () => {
    it('should default to empty string', () => {
      expect(filterHelper.filter).toBe('');
    });

    it('should update the filter value', () => {
      filterHelper.filter = 'active';
      expect(filterHelper.filter).toBe('active');
    });

    it('should emit on refresh$ when filter changes', (done) => {
      filterHelper.refresh$.subscribe((value) => {
        if (value === 'test') {
          expect(value).toBe('test');
          done();
        }
      });
      filterHelper.filter = 'test';
    });
  });

  describe('getMenu', () => {
    it('should return a Menu instance', () => {
      const menu = filterHelper.getMenu();
      expect(menu).toBeTruthy();
      expect(menu.direction).toBe('responsive');
    });

    it('should create menu elements from items', () => {
      const menu = filterHelper.getMenu();
      expect(menu.elements.length).toBe(3);
    });

    it('should set keys from item keys', () => {
      const menu = filterHelper.getMenu();
      expect(menu.elements[0].key).toBe('all');
      expect(menu.elements[1].key).toBe('active');
      expect(menu.elements[2].key).toBe('archived');
    });

    it('should set labels from items', () => {
      const menu = filterHelper.getMenu();
      expect(menu.elements[0].label).toBe('menu.all');
    });

    it('should set defaultOpen from items', () => {
      const menu = filterHelper.getMenu();
      expect(menu.elements[0].defaultOpen).toBe(true);
      expect(menu.elements[1].defaultOpen).toBe(false);
    });

    it('should set callback that updates filter', () => {
      const menu = filterHelper.getMenu();
      menu.elements[1].callback!();
      expect(filterHelper.filter).toBe('active');
    });

    it('should derive key from label when key is not provided', () => {
      const helper = new FilterHelper([
        { label: 'section.filters.all', defaultOpen: true },
      ]);
      const menu = helper.getMenu();
      expect(menu.elements[0].key).toBe('all');
    });

    it('should use full label as key when label has no dot', () => {
      const helper = new FilterHelper([
        { label: 'simple', defaultOpen: false },
      ]);
      const menu = helper.getMenu();
      expect(menu.elements[0].key).toBe('simple');
    });
  });

  describe('updateMenuDatas', () => {
    it('should update translationData for matching items', () => {
      filterHelper.updateMenuDatas([
        { key: 'all', translationData: { count: 10 } },
      ]);
      const menu = filterHelper.getMenu();
      expect(menu.elements[0].translationData).toEqual({ count: 10 });
    });

    it('should update options for matching items', () => {
      filterHelper.updateMenuDatas([
        { key: 'active', options: { notificationBadge: { label: 5 } } },
      ]);
      const menu = filterHelper.getMenu();
      expect(menu.elements[1].options).toEqual({ notificationBadge: { label: 5 } });
    });

    it('should update visible$ for matching items', () => {
      const visible$ = of(false);
      filterHelper.updateMenuDatas([
        { key: 'archived', visible$: visible$ },
      ]);
      const menu = filterHelper.getMenu();
      expect(menu.elements[2].visible$).toBe(visible$);
    });

    it('should not fail for non-matching keys', () => {
      expect(() => {
        filterHelper.updateMenuDatas([
          { key: 'nonexistent', translationData: { count: 0 } },
        ]);
      }).not.toThrow();
    });
  });
});
