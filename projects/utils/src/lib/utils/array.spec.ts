import {
  isArray,
  getUniqueValues,
  getUniqueArray,
  isNonNullable,
  filterNonNullableItems,
  toArray,
  keepUniqueObjectByProperty,
  removeElementsWithSameProperty,
  removeElement,
} from './array';

describe('array utils', () => {
  describe('isArray', () => {
    it('should return true for an array', () => {
      expect(isArray([1, 2, 3])).toBe(true);
    });

    it('should return true for an empty array', () => {
      expect(isArray([])).toBe(true);
    });

    it('should return false for a string', () => {
      expect(isArray('hello')).toBe(false);
    });

    it('should return false for a number', () => {
      expect(isArray(42)).toBe(false);
    });

    it('should return false for null', () => {
      expect(isArray(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isArray(undefined)).toBe(false);
    });

    it('should return false for an object', () => {
      expect(isArray({ a: 1 })).toBe(false);
    });
  });

  describe('getUniqueValues', () => {
    it('should return unique objects by a property', () => {
      const items = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice duplicate' },
      ];
      const result = getUniqueValues(items, (x) => x.id);
      expect(result.length).toBe(2);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
    });

    it('should keep the last occurrence when duplicates exist', () => {
      const items = [
        { id: 1, name: 'first' },
        { id: 1, name: 'second' },
      ];
      const result = getUniqueValues(items, (x) => x.id);
      expect(result.length).toBe(1);
      expect(result[0].name).toBe('second');
    });

    it('should return empty array for empty input', () => {
      const result = getUniqueValues([], (x: any) => x.id);
      expect(result).toEqual([]);
    });
  });

  describe('getUniqueArray', () => {
    it('should return unique primitive values', () => {
      expect(getUniqueArray([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it('should return unique strings', () => {
      expect(getUniqueArray(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    it('should filter out null and undefined', () => {
      expect(getUniqueArray([1, null, 2, undefined, 3])).toEqual([1, 2, 3]);
    });

    it('should return empty array for empty input', () => {
      expect(getUniqueArray([])).toEqual([]);
    });
  });

  describe('isNonNullable', () => {
    it('should return true for a number', () => {
      expect(isNonNullable(0)).toBe(true);
    });

    it('should return true for an empty string', () => {
      expect(isNonNullable('')).toBe(true);
    });

    it('should return true for false', () => {
      expect(isNonNullable(false)).toBe(true);
    });

    it('should return false for null', () => {
      expect(isNonNullable(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isNonNullable(undefined)).toBe(false);
    });
  });

  describe('filterNonNullableItems', () => {
    it('should remove null and undefined from array', () => {
      expect(filterNonNullableItems([1, null, 2, undefined, 3])).toEqual([1, 2, 3]);
    });

    it('should keep falsy values that are not null/undefined', () => {
      expect(filterNonNullableItems([0, '', false, null])).toEqual([0, '', false]);
    });

    it('should return empty array for all-null input', () => {
      expect(filterNonNullableItems([null, undefined])).toEqual([]);
    });
  });

  describe('toArray', () => {
    it('should wrap a single value in an array', () => {
      expect(toArray(5)).toEqual([5]);
    });

    it('should return the same array if input is already an array', () => {
      const arr = [1, 2, 3];
      expect(toArray(arr)).toBe(arr);
    });

    it('should wrap a string in an array', () => {
      expect(toArray('hello')).toEqual(['hello']);
    });
  });

  describe('keepUniqueObjectByProperty', () => {
    it('should keep only unique objects by property', () => {
      const items = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 1, name: 'C' },
      ];
      const result = keepUniqueObjectByProperty(items, (item) => item.id);
      expect(result.length).toBe(2);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
    });

    it('should return empty array for empty input', () => {
      expect(keepUniqueObjectByProperty([], (item: any) => item.id)).toEqual([]);
    });
  });

  describe('removeElementsWithSameProperty', () => {
    it('should remove elements from arrayA that have matching property in arrayB', () => {
      const arrayA = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
      ];
      const arrayB = [{ id: 2, name: 'X' }];
      const result = removeElementsWithSameProperty(arrayA, arrayB, (item) => item.id);
      expect(result.length).toBe(2);
      expect(result.find((item) => item.id === 2)).toBeUndefined();
    });

    it('should return original array if no matches', () => {
      const arrayA = [{ id: 1 }];
      const arrayB = [{ id: 2 }];
      const result = removeElementsWithSameProperty(arrayA, arrayB, (item) => item.id);
      expect(result.length).toBe(1);
    });
  });

  describe('removeElement', () => {
    it('should remove an element from the array', () => {
      const arr = [1, 2, 3];
      const result = removeElement(arr, 2);
      expect(result).toEqual([1, 3]);
    });

    it('should return the array unchanged if element not found', () => {
      const arr = [1, 2, 3];
      const result = removeElement(arr, 4);
      expect(result).toEqual([1, 2, 3]);
    });
  });
});
