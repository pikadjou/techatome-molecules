import { GraphSchema } from './graphSchema';

interface TestModel {
  id: string;
  name: string;
  email: string;
}

describe('GraphSchema', () => {
  let schema: GraphSchema<TestModel>;

  beforeEach(() => {
    schema = new GraphSchema<TestModel>(['id', 'name', 'email']);
  });

  describe('get', () => {
    it('should return the field name if it exists in the schema', () => {
      expect(schema.get('id')).toBe('id');
      expect(schema.get('name')).toBe('name');
      expect(schema.get('email')).toBe('email');
    });

    it('should return undefined if the field does not exist in the schema', () => {
      expect(schema.get('nonexistent' as keyof TestModel)).toBeUndefined();
    });
  });
});
