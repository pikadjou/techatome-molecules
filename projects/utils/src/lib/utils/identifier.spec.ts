import { newGuid, newId, s4 } from './identifier';

describe('identifier utils', () => {
  describe('s4', () => {
    it('should return a string of 4 characters', () => {
      const result = s4();
      expect(result.length).toBe(4);
    });

    it('should return a hex string', () => {
      const result = s4();
      expect(/^[0-9a-f]{4}$/.test(result)).toBe(true);
    });
  });

  describe('newGuid', () => {
    it('should return a GUID-like string', () => {
      const result = newGuid();
      expect(result).toBeTruthy();
    });

    it('should match GUID format with dashes', () => {
      const result = newGuid();
      // Format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
      expect(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(result)).toBe(true);
    });

    it('should generate unique values', () => {
      const guid1 = newGuid();
      const guid2 = newGuid();
      expect(guid1).not.toEqual(guid2);
    });
  });

  describe('newId', () => {
    it('should return a positive number', () => {
      const result = newId();
      expect(result).toBeGreaterThan(0);
    });

    it('should return a number less than or equal to 1000001', () => {
      const result = newId();
      expect(result).toBeLessThanOrEqual(1000001);
    });

    it('should return an integer', () => {
      const result = newId();
      expect(Number.isInteger(result)).toBe(true);
    });
  });
});
