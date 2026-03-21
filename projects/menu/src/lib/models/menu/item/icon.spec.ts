import { TaIconType } from '@ta/icons';

import { MenuIcon } from './icon';

describe('MenuIcon', () => {
  it('should create with default icon', () => {
    const item = new MenuIcon({});
    expect(item.icon).toBe('');
    expect(item.key).toBe('');
    expect(item.label).toBe('');
  });

  it('should create with string icon', () => {
    const item = new MenuIcon({ icon: 'home', key: 'home', label: 'Home' });
    expect(item.icon).toBe('home');
    expect(item.key).toBe('home');
    expect(item.label).toBe('Home');
  });

  it('should create with TaIconType icon', () => {
    const item = new MenuIcon({ icon: TaIconType.Dashboard, key: 'dash' });
    expect(item.icon).toBe(TaIconType.Dashboard);
  });

  it('should inherit MenuBase properties', () => {
    const item = new MenuIcon({
      icon: 'settings',
      key: 'settings',
      label: 'Settings',
      order: 3,
      link: '/settings',
      disabled: true,
    });
    expect(item.order).toBe(3);
    expect(item.link).toBe('/settings');
    expect(item.disabled).toBe(true);
  });

  it('should have isMenuPanel return false', () => {
    const item = new MenuIcon({ icon: 'test' });
    expect(item.isMenuPanel).toBe(false);
  });
});
