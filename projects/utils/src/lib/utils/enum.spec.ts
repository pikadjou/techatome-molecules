import { extractEnum } from './enum';

enum TestEnum {
  First = 0,
  Second = 1,
  Third = 2,
}

describe('enum utils', () => {
  describe('extractEnum', () => {
    it('should extract all enum values', () => {
      const result = extractEnum(TestEnum);
      expect(result.length).toBe(3);
      expect(result[0]).toEqual({ value: 0, name: 'First' });
      expect(result[1]).toEqual({ value: 1, name: 'Second' });
      expect(result[2]).toEqual({ value: 2, name: 'Third' });
    });

    it('should filter out zero-value when backendOne is true', () => {
      const result = extractEnum(TestEnum, true);
      expect(result.length).toBe(2);
      expect(result[0]).toEqual({ value: 1, name: 'Second' });
      expect(result[1]).toEqual({ value: 2, name: 'Third' });
    });

    it('should include zero-value when backendOne is false', () => {
      const result = extractEnum(TestEnum, false);
      expect(result.length).toBe(3);
    });
  });
});
