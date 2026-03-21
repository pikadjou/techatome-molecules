import {
  isObject,
  isNotEmptyObject,
  merge,
  getPropertyTypes,
  ObjectKeys,
  ObjectKeysReOrder,
  removeObjectKeys,
  compareObjectsByKeys,
} from './object';

describe('object utils', () => {
  describe('isObject', () => {
    it('should return true for a plain object', () => {
      expect(isObject({ a: 1 })).toBe(true);
    });

    it('should return true for an empty object', () => {
      expect(isObject({})).toBe(true);
    });

    it('should return false for null', () => {
      expect(isObject(null)).toBe(false);
    });

    it('should return false for an array', () => {
      expect(isObject([1, 2])).toBe(false);
    });

    it('should return false for a string', () => {
      expect(isObject('hello')).toBe(false);
    });

    it('should return false for a number', () => {
      expect(isObject(42)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isObject(undefined)).toBe(false);
    });
  });

  describe('isNotEmptyObject', () => {
    it('should return true for a non-empty object', () => {
      expect(isNotEmptyObject({ a: 1 })).toBe(true);
    });

    it('should return false for an empty object', () => {
      expect(isNotEmptyObject({})).toBe(false);
    });
  });

  describe('merge', () => {
    it('should merge two objects with override', () => {
      const result = merge(true)({ a: 1, b: 2 }, { b: 3, c: 4 });
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    it('should merge two objects without override', () => {
      const result = merge(false)({ a: 1, b: 2 }, { b: 3, c: 4 });
      expect(result).toEqual({ a: 1, b: 2, c: 4 });
    });

    it('should deep merge nested objects', () => {
      const result = merge(true)(
        { nested: { a: 1, b: 2 } },
        { nested: { b: 3, c: 4 } }
      );
      expect(result).toEqual({ nested: { a: 1, b: 3, c: 4 } });
    });

    it('should concatenate arrays', () => {
      const result = merge(true)({ arr: [1, 2] }, { arr: [3, 4] });
      expect(result).toEqual({ arr: [1, 2, 3, 4] });
    });

    it('should handle empty merge object', () => {
      const result = merge(true)({ a: 1 }, {});
      expect(result).toEqual({ a: 1 });
    });
  });

  describe('getPropertyTypes', () => {
    it('should return types of properties', () => {
      const obj = { name: 'test', age: 25, active: true };
      const result = getPropertyTypes(obj);
      expect(result).toEqual({ name: 'string', age: 'number', active: 'boolean' });
    });

    it('should return empty object for empty input', () => {
      expect(getPropertyTypes({})).toEqual({});
    });
  });

  describe('ObjectKeys', () => {
    it('should return keys of an object', () => {
      const result = ObjectKeys({ a: 1, b: 2, c: 3 });
      expect(result).toEqual(['a', 'b', 'c']);
    });

    it('should return empty array for non-object', () => {
      expect(ObjectKeys(null)).toEqual([]);
    });
  });

  describe('ObjectKeysReOrder', () => {
    it('should reorder object keys', () => {
      const obj = { a: 1, b: 2, c: 3 } as const;
      const result = ObjectKeysReOrder(obj, ['c', 'a', 'b']);
      expect(Object.keys(result)).toEqual(['c', 'a', 'b']);
    });

    it('should only include keys that exist in the base object', () => {
      const obj = { a: 1, b: 2 };
      const result = ObjectKeysReOrder(obj, ['a', 'b', 'c' as any]);
      expect(Object.keys(result)).toEqual(['a', 'b']);
    });
  });

  describe('removeObjectKeys', () => {
    it('should remove specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = removeObjectKeys(obj, ['b']);
      expect(result).toEqual({ a: 1, c: 3 });
    });

    it('should return same object if no keys to remove', () => {
      const obj = { a: 1, b: 2 };
      const result = removeObjectKeys(obj, []);
      expect(result).toEqual({ a: 1, b: 2 });
    });

    it('should return empty object if all keys removed', () => {
      const obj = { a: 1, b: 2 };
      const result = removeObjectKeys(obj, ['a', 'b']);
      expect(result).toEqual({});
    });
  });

  describe('compareObjectsByKeys', () => {
    it('should return true when specified keys match', () => {
      const obj1 = { a: 1, b: 2, c: 3 };
      const obj2 = { a: 1, b: 2, c: 99 };
      expect(compareObjectsByKeys(obj1, obj2, ['a', 'b'])).toBe(true);
    });

    it('should return false when a specified key differs', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { a: 1, b: 3 };
      expect(compareObjectsByKeys(obj1, obj2, ['a', 'b'])).toBe(false);
    });

    it('should return true for empty keys array', () => {
      const obj1 = { a: 1 };
      const obj2 = { a: 2 };
      expect(compareObjectsByKeys(obj1, obj2, [])).toBe(true);
    });
  });
});
