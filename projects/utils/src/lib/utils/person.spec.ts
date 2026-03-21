import { fullName } from './person';

describe('person utils', () => {
  describe('fullName', () => {
    it('should return full name', () => {
      expect(fullName({ firstname: 'John', lastname: 'Doe' })).toBe('John Doe');
    });

    it('should handle null firstname', () => {
      expect(fullName({ firstname: null, lastname: 'Doe' })).toBe('null Doe');
    });

    it('should handle undefined naming', () => {
      expect(fullName(undefined)).toBe('undefined undefined');
    });
  });
});
