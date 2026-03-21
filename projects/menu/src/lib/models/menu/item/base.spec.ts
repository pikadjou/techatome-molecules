import { of } from 'rxjs';

import { MenuBase } from './base';

describe('MenuBase', () => {
  it('should create with default values', () => {
    const item = new MenuBase();
    expect(item.key).toBe('');
    expect(item.label).toBe('');
    expect(item.order).toBe(1);
    expect(item.link).toBe('');
    expect(item.callback).toBeUndefined();
    expect(item.style).toBe('bloc');
    expect(item.children).toEqual([]);
    expect(item.defaultOpen).toBe(false);
    expect(item.exact).toBe(false);
    expect(item.replaceUrl).toBe(false);
    expect(item.queryParamsHandling).toBe('');
    expect(item.disabled).toBe(false);
    expect(item.translationData).toBeUndefined();
    expect(item.endingIcon).toBeUndefined();
    expect(item.iconsColor).toBeUndefined();
    expect(item.options).toBeUndefined();
  });

  it('should create with provided options', () => {
    const callback = () => {};
    const children = [new MenuBase({ key: 'child' })];
    const visible$ = of(false);
    const item = new MenuBase({
      key: 'test',
      label: 'Test Label',
      order: 5,
      link: '/test',
      callback,
      style: 'inline',
      children,
      visible$,
      defaultOpen: true,
      exact: true,
      replaceUrl: true,
      queryParamsHandling: 'merge',
      disabled: true,
      translationData: { count: 3 },
      endingIcon: 'arrow',
      iconsColor: 'red',
      options: { notificationBadge: { label: 2, style: 'danger' } },
    });

    expect(item.key).toBe('test');
    expect(item.label).toBe('Test Label');
    expect(item.order).toBe(5);
    expect(item.link).toBe('/test');
    expect(item.callback).toBe(callback);
    expect(item.style).toBe('inline');
    expect(item.children).toBe(children);
    expect(item.visible$).toBe(visible$);
    expect(item.defaultOpen).toBe(true);
    expect(item.exact).toBe(true);
    expect(item.replaceUrl).toBe(true);
    expect(item.queryParamsHandling).toBe('merge');
    expect(item.disabled).toBe(true);
    expect(item.translationData).toEqual({ count: 3 });
    expect(item.endingIcon).toBe('arrow');
    expect(item.iconsColor).toBe('red');
    expect(item.options).toEqual({ notificationBadge: { label: 2, style: 'danger' } });
  });

  it('should set order to 0 when provided as 0', () => {
    const item = new MenuBase({ order: 0 });
    expect(item.order).toBe(0);
  });

  it('should set defaultOpen to false when provided as false', () => {
    const item = new MenuBase({ defaultOpen: false });
    expect(item.defaultOpen).toBe(false);
  });

  it('should default visible$ to of(true)', (done) => {
    const item = new MenuBase();
    item.visible$.subscribe((visible) => {
      expect(visible).toBe(true);
      done();
    });
  });

  describe('isMenuPanel', () => {
    it('should return false', () => {
      const item = new MenuBase();
      expect(item.isMenuPanel).toBe(false);
    });
  });
});
