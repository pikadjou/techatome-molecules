import {
  toLocalDateString,
  toLocalDate,
  toUtcDate,
  diffInHourAndMinutes,
  isStrictISODateString,
} from './date';

describe('date utils', () => {
  describe('toLocalDate', () => {
    it('should return a Date object', () => {
      const result = toLocalDate('2024-01-15T12:00:00Z');
      expect(result instanceof Date).toBe(true);
    });
  });

  describe('toLocalDateString', () => {
    it('should return a string', () => {
      const result = toLocalDateString('2024-01-15T12:00:00Z');
      expect(typeof result).toBe('string');
    });
  });

  describe('toUtcDate', () => {
    it('should return a Date object', () => {
      const localDate = new Date(2024, 0, 15, 12, 0, 0);
      const result = toUtcDate(localDate);
      expect(result instanceof Date).toBe(true);
    });
  });

  describe('diffInHourAndMinutes', () => {
    it('should calculate difference of 1 hour', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T11:00:00Z'
      );
      expect(result.h).toBe('01');
      expect(result.m).toBe('00');
    });

    it('should calculate difference of 2 hours and 30 minutes', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T12:30:00Z'
      );
      expect(result.h).toBe('02');
      expect(result.m).toBe('30');
    });

    it('should calculate zero difference', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T10:00:00Z'
      );
      expect(result.h).toBe('00');
      expect(result.m).toBe('00');
    });

    it('should pad single-digit values with zero', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T10:05:00Z'
      );
      expect(result.h).toBe('00');
      expect(result.m).toBe('05');
    });
  });

  describe('isStrictISODateString', () => {
    it('should return true for valid ISO date-time string', () => {
      expect(isStrictISODateString('2024-01-15T12:00:00.000Z')).toBe(true);
    });

    it('should return false for invalid date string', () => {
      expect(isStrictISODateString('not-a-date')).toBe(false);
    });

    it('should return false for partial date formats', () => {
      expect(isStrictISODateString('2024-01')).toBe(false);
    });

    it('should return false for plain number strings', () => {
      expect(isStrictISODateString('12345')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isStrictISODateString('')).toBe(false);
    });
  });
});
