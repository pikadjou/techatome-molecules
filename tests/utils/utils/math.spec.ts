import { createRange, parseNumber, roundToDecimal, percentage } from '@lib/utils/utils/math';

describe('math utils', () => {
  describe('createRange', () => {
    it('should create a range of numbers starting from 1', () => {
      expect(createRange(5)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should return an empty array for 0', () => {
      expect(createRange(0)).toEqual([]);
    });

    it('should return [1] for 1', () => {
      expect(createRange(1)).toEqual([1]);
    });
  });

  describe('roundToDecimal', () => {
    it('should round to 2 decimal places', () => {
      expect(roundToDecimal(3.14159, 2)).toBe(3.14);
    });

    it('should round to 0 decimal places', () => {
      expect(roundToDecimal(3.7, 0)).toBe(4);
    });

    it('should round to 1 decimal place', () => {
      expect(roundToDecimal(2.55, 1)).toBe(2.6);
    });

    it('should handle negative numbers', () => {
      expect(roundToDecimal(-3.456, 2)).toBe(-3.46);
    });

    it('should return the same number if already at precision', () => {
      expect(roundToDecimal(1.5, 1)).toBe(1.5);
    });
  });

  describe('percentage', () => {
    it('should calculate percentage correctly', () => {
      expect(percentage(50, 200)).toBe(25);
    });

    it('should return 100 when partial equals total', () => {
      expect(percentage(100, 100)).toBe(100);
    });

    it('should return 0 when partial is 0', () => {
      expect(percentage(0, 100)).toBe(0);
    });

    it('should handle decimal results', () => {
      expect(percentage(1, 3)).toBeCloseTo(33.33, 1);
    });
  });

  describe('parseNumber', () => {
    it('should read an integer written as a string', () => {
      expect(parseNumber('1000')).toBe(1000);
    });

    it('should keep zero, which is a value like any other', () => {
      expect(parseNumber('0')).toBe(0);
    });

    it('should read a decimal and a negative value', () => {
      expect(parseNumber('12.5')).toBe(12.5);
      expect(parseNumber('-3')).toBe(-3);
    });

    it('should return null rather than NaN for a non-numeric value', () => {
      expect(parseNumber('abc')).toBeNull();
    });

    it('should return null for an infinite value', () => {
      expect(parseNumber('Infinity')).toBeNull();
    });

    it('should return null for an absent or empty value', () => {
      expect(parseNumber(null)).toBeNull();
      expect(parseNumber(undefined)).toBeNull();
      expect(parseNumber('')).toBeNull();
    });
  });
});
