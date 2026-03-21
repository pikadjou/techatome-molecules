import { graphQlUpdateFields } from './mutations';

describe('graphQlUpdateFields', () => {
  it('should return an object with updatedFields containing the keys of the input object', () => {
    const result = graphQlUpdateFields({ name: 'test', age: 25 });
    expect(result).toEqual({ updatedFields: ['name', 'age'] });
  });

  it('should return empty updatedFields for an empty object', () => {
    const result = graphQlUpdateFields({});
    expect(result).toEqual({ updatedFields: [] });
  });

  it('should handle objects with various value types', () => {
    const result = graphQlUpdateFields({
      str: 'value',
      num: 42,
      bool: true,
      arr: [1, 2],
      obj: { nested: true },
    });
    expect(result.updatedFields).toEqual(['str', 'num', 'bool', 'arr', 'obj']);
  });
});
