import { newGuid, newId, s4, sameGuid } from './identifier';

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

  describe('sameGuid', () => {
    // Le cas qui justifie la fonction : l'API rend l'id sans tirets, l'erreur avec.
    it('should ignore dashes and case', () => {
      expect(
        sameGuid('3f2b9c1d4e5a6b7c8d9e0f1a2b3c4d5e', '3F2B9C1D-4E5A-6B7C-8D9E-0F1A2B3C4D5E')
      ).toBeTrue();
    });

    it('should tell different guids apart', () => {
      expect(
        sameGuid('3f2b9c1d4e5a6b7c8d9e0f1a2b3c4d5e', '9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d')
      ).toBeFalse();
    });

    it('should never match an absent value', () => {
      expect(sameGuid(null, null)).toBeFalse();
      expect(sameGuid(undefined, undefined)).toBeFalse();
      expect(sameGuid('', '')).toBeFalse();
      expect(sameGuid('abc', undefined)).toBeFalse();
    });
  });
});
