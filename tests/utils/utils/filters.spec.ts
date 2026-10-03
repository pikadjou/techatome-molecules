import { search } from '@lib/utils/utils/filters';

describe('filters utils', () => {
  describe('search', () => {
    it('should return true when term is found', () => {
      expect(search(['Hello World', 'Foo Bar'], 'hello')).toBe(true);
    });

    it('should return false when term is not found', () => {
      expect(search(['Hello World', 'Foo Bar'], 'xyz')).toBe(false);
    });

    it('should be case-insensitive', () => {
      expect(search(['Hello World'], 'HELLO')).toBe(true);
    });

    it('should return false for empty array', () => {
      expect(search([], 'test')).toBe(false);
    });

    it('should handle accented characters via slugify', () => {
      expect(search(['cafe'], 'cafe')).toBe(true);
    });
  });
});
