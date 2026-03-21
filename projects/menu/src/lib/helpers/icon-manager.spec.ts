import { TaIconType } from '@ta/icons';

import { MenuBase } from '../models/menu/item/base';
import { MenuIcon } from '../models/menu/item/icon';
import { Menu } from '../models/menu/menu';
import { getFontIcon, getIcon, hasFontIcon, hasIconImage } from './icon-manager';

describe('icon-manager helpers', () => {
  describe('hasFontIcon', () => {
    it('should return true when icon is a string', () => {
      const item = new MenuIcon({ icon: 'home' });
      expect(hasFontIcon(item)).toBe(true);
    });

    it('should return false when icon is a TaIconType (number)', () => {
      const item = new MenuIcon({ icon: TaIconType.Dashboard });
      expect(hasFontIcon(item)).toBe(false);
    });

    it('should return false for MenuBase without icon property', () => {
      const item = new MenuBase({ key: 'test' });
      expect(hasFontIcon(item)).toBe(false);
    });

    it('should return false for Menu without icon property', () => {
      const menu = new Menu({ direction: 'horizontal' });
      expect(hasFontIcon(menu)).toBe(false);
    });

    it('should return false when icon is empty string', () => {
      const item = new MenuIcon({ icon: '' });
      expect(hasFontIcon(item)).toBe(true);
    });
  });

  describe('hasIconImage', () => {
    it('should return true when icon is a number (TaIconType)', () => {
      const item = new MenuIcon({ icon: TaIconType.Dashboard });
      expect(hasIconImage(item)).toBe(true);
    });

    it('should return false when icon is a string', () => {
      const item = new MenuIcon({ icon: 'home' });
      expect(hasIconImage(item)).toBe(false);
    });

    it('should return false for MenuBase without icon property', () => {
      const item = new MenuBase({ key: 'test' });
      expect(hasIconImage(item)).toBe(false);
    });
  });

  describe('getIcon', () => {
    it('should return the icon when it is a font icon string', () => {
      const item = new MenuIcon({ icon: 'home' });
      expect(getIcon(item)).toBe('home');
    });

    it('should return the icon when it is a TaIconType number', () => {
      const item = new MenuIcon({ icon: TaIconType.Dashboard });
      expect(getIcon(item)).toBe(TaIconType.Dashboard);
    });

    it('should return empty string for MenuBase without icon', () => {
      const item = new MenuBase({ key: 'test' });
      expect(getIcon(item)).toBe('');
    });
  });

  describe('getFontIcon', () => {
    it('should return the string icon', () => {
      const item = new MenuIcon({ icon: 'settings' });
      expect(getFontIcon(item)).toBe('settings');
    });

    it('should return empty string when icon is TaIconType number', () => {
      const item = new MenuIcon({ icon: TaIconType.Dashboard });
      expect(getFontIcon(item)).toBe('');
    });

    it('should return empty string for MenuBase without icon', () => {
      const item = new MenuBase({ key: 'test' });
      expect(getFontIcon(item)).toBe('');
    });

    it('should return empty string for Menu', () => {
      const menu = new Menu();
      expect(getFontIcon(menu)).toBe('');
    });
  });
});
