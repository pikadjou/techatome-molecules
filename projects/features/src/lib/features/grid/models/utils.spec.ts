import { groupBy } from './utils';

interface TestItem {
  id: number;
  category: string;
  name: string;
}

describe('groupBy', () => {
  const testData: TestItem[] = [
    { id: 1, category: 'A', name: 'Item 1' },
    { id: 2, category: 'B', name: 'Item 2' },
    { id: 3, category: 'A', name: 'Item 3' },
    { id: 4, category: 'C', name: 'Item 4' },
    { id: 5, category: 'B', name: 'Item 5' },
  ];

  it('should return a single group with all data when key is null', () => {
    const result = groupBy<TestItem>(null, testData);

    expect(result.length).toBe(1);
    expect(result[0].key).toBe('');
    expect(result[0].data).toEqual(testData);
  });

  it('should group data by the specified key', () => {
    const result = groupBy<TestItem>('category', testData);

    expect(result.length).toBe(3);
  });

  it('should correctly assign items to their groups', () => {
    const result = groupBy<TestItem>('category', testData);
    const groupA = result.find(g => g.key === 'A');
    const groupB = result.find(g => g.key === 'B');
    const groupC = result.find(g => g.key === 'C');

    expect(groupA).toBeTruthy();
    expect(groupA!.data.length).toBe(2);
    expect(groupB).toBeTruthy();
    expect(groupB!.data.length).toBe(2);
    expect(groupC).toBeTruthy();
    expect(groupC!.data.length).toBe(1);
  });

  it('should handle empty data array', () => {
    const result = groupBy<TestItem>('category', []);

    expect(result.length).toBe(0);
  });

  it('should handle empty data array with null key', () => {
    const result = groupBy<TestItem>(null, []);

    expect(result.length).toBe(1);
    expect(result[0].key).toBe('');
    expect(result[0].data).toEqual([]);
  });

  it('should convert group keys to strings', () => {
    const numericData = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 10 },
    ];

    const result = groupBy<{ id: number; value: number }>('value', numericData);

    result.forEach(group => {
      expect(typeof group.key).toBe('string');
    });
  });

  it('should return unique groups', () => {
    const result = groupBy<TestItem>('category', testData);
    const keys = result.map(g => g.key);
    const uniqueKeys = [...new Set(keys)];

    expect(keys.length).toBe(uniqueKeys.length);
  });
});
