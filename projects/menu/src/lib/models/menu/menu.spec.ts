import { MenuBase } from './item/base';
import { Menu } from './menu';

describe('Menu', () => {
  it('should create with default values', () => {
    const menu = new Menu();
    expect(menu.direction).toBe('responsive');
    expect(menu.elements).toEqual([]);
  });

  it('should create with horizontal direction', () => {
    const menu = new Menu({ direction: 'horizontal' });
    expect(menu.direction).toBe('horizontal');
  });

  it('should create with vertical direction', () => {
    const menu = new Menu({ direction: 'vertical' });
    expect(menu.direction).toBe('vertical');
  });

  it('should create with elements', () => {
    const elements = [
      new MenuBase({ key: 'item1', label: 'Item 1' }),
      new MenuBase({ key: 'item2', label: 'Item 2' }),
    ];
    const menu = new Menu({ elements });
    expect(menu.elements.length).toBe(2);
    expect(menu.elements[0].key).toBe('item1');
    expect(menu.elements[1].key).toBe('item2');
  });

  it('should support generic type parameter', () => {
    const menu = new Menu<MenuBase>({
      elements: [new MenuBase({ key: 'typed' })],
    });
    expect(menu.elements[0].key).toBe('typed');
  });
});
