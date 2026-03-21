import { getModifiedValues } from './modified-values';

describe('modified-values utils', () => {
  describe('getModifiedValues', () => {
    it('should return only modified keys', () => {
      const current = { name: 'Alice', age: 30, city: 'Paris' };
      const initial = { name: 'Alice', age: 25, city: 'Paris' };
      const result = getModifiedValues(current, initial);
      expect(result).toEqual({ age: 30 });
    });

    it('should return empty object when nothing changed', () => {
      const current = { name: 'Alice', age: 25 };
      const initial = { name: 'Alice', age: 25 };
      const result = getModifiedValues(current, initial);
      expect(result).toEqual({});
    });

    it('should return all keys when everything changed', () => {
      const current = { name: 'Bob', age: 30 };
      const initial = { name: 'Alice', age: 25 };
      const result = getModifiedValues(current, initial);
      expect(result).toEqual({ name: 'Bob', age: 30 });
    });

    it('should handle keys missing in initial', () => {
      const current = { name: 'Alice', age: 25 };
      const initial = {};
      const result = getModifiedValues(current, initial);
      expect(result).toEqual({ name: 'Alice', age: 25 });
    });
  });
});
