import { compare, compareHour } from './compare';

describe('compare utils', () => {
  describe('compare', () => {
    it('should return negative when a < b ascending', () => {
      expect(compare(1, 2, true)).toBeLessThan(0);
    });

    it('should return positive when a > b ascending', () => {
      expect(compare(2, 1, true)).toBeGreaterThan(0);
    });

    it('should return positive when a < b descending', () => {
      expect(compare(1, 2, false)).toBeGreaterThan(0);
    });

    it('should return negative when a > b descending', () => {
      expect(compare(2, 1, false)).toBeLessThan(0);
    });

    it('should handle null/undefined a as greater (sorted last) ascending', () => {
      expect(compare(null, 2, true)).toBeGreaterThan(0);
    });

    it('should handle null/undefined b as lesser (sorted last) ascending', () => {
      expect(compare(2, null, true)).toBeLessThan(0);
    });

    it('should compare strings ascending', () => {
      expect(compare('apple', 'banana', true)).toBeLessThan(0);
    });

    it('should compare strings descending', () => {
      expect(compare('apple', 'banana', false)).toBeGreaterThan(0);
    });
  });

  describe('compareHour', () => {
    it('should return 0 when hours, minutes and seconds are equal', () => {
      const a = new Date(2024, 0, 1, 10, 30, 45);
      const b = new Date(2024, 0, 1, 10, 30, 45);
      expect(compareHour(a, b, true)).toBe(0);
    });

    it('should compare by hours ascending', () => {
      const a = new Date(2024, 0, 1, 8, 0, 0);
      const b = new Date(2024, 0, 1, 10, 0, 0);
      expect(compareHour(a, b, true)).toBeLessThan(0);
    });

    it('should compare by hours descending', () => {
      const a = new Date(2024, 0, 1, 8, 0, 0);
      const b = new Date(2024, 0, 1, 10, 0, 0);
      expect(compareHour(a, b, false)).toBeGreaterThan(0);
    });

    it('should compare by minutes when hours are equal', () => {
      const a = new Date(2024, 0, 1, 10, 15, 0);
      const b = new Date(2024, 0, 1, 10, 30, 0);
      expect(compareHour(a, b, true)).toBeLessThan(0);
    });

    it('should compare by seconds when hours and minutes are equal', () => {
      const a = new Date(2024, 0, 1, 10, 30, 10);
      const b = new Date(2024, 0, 1, 10, 30, 45);
      expect(compareHour(a, b, true)).toBeLessThan(0);
    });
  });
});
