import { sort } from './sorts';

describe('sorts utils', () => {
  describe('sort', () => {
    it('should sort array ascending by property', () => {
      const arr = [
        { name: 'Charlie', age: 30 },
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 28 },
      ];
      const result = sort(arr, { active: 'name', direction: 'asc' });
      expect(result[0].name).toBe('Alice');
      expect(result[1].name).toBe('Bob');
      expect(result[2].name).toBe('Charlie');
    });

    it('should sort array ascending by numeric property', () => {
      const arr = [
        { name: 'A', value: 3 },
        { name: 'B', value: 1 },
        { name: 'C', value: 2 },
      ];
      const result = sort(arr, { active: 'value', direction: 'asc' });
      expect(result[0].value).toBe(1);
      expect(result[1].value).toBe(2);
      expect(result[2].value).toBe(3);
    });

    it('should return array unchanged when no options provided', () => {
      const arr = [{ id: 3 }, { id: 1 }, { id: 2 }];
      const result = sort(arr, null as any);
      expect(result).toEqual(arr);
    });
  });
});
