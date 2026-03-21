import { isLight } from './color';

describe('color utils', () => {
  describe('isLight', () => {
    it('should return true for white', () => {
      expect(isLight('#FFFFFF')).toBe(true);
    });

    it('should return false for black', () => {
      expect(isLight('#000000')).toBe(false);
    });

    it('should return true for a light color', () => {
      expect(isLight('#F0E68C')).toBe(true);
    });

    it('should return false for a dark color', () => {
      expect(isLight('#2F4F4F')).toBe(false);
    });

    it('should handle color without # prefix', () => {
      expect(isLight('FFFFFF')).toBe(true);
    });

    it('should return true for light yellow', () => {
      expect(isLight('#FFFF00')).toBe(true);
    });

    it('should return false for dark blue', () => {
      expect(isLight('#00008B')).toBe(false);
    });
  });
});
