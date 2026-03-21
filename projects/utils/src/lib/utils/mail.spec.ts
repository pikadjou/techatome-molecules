import { isValidEmail } from './mail';

describe('mail utils', () => {
  describe('isValidEmail', () => {
    it('should return true for valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    it('should return true for email with subdomain', () => {
      expect(isValidEmail('user@mail.example.com')).toBe(true);
    });

    it('should return true for email with plus sign', () => {
      expect(isValidEmail('user+tag@example.com')).toBe(true);
    });

    it('should return true for email with dots in local part', () => {
      expect(isValidEmail('first.last@example.com')).toBe(true);
    });

    it('should return false for email without @', () => {
      expect(isValidEmail('testexample.com')).toBe(false);
    });

    it('should return false for email without domain', () => {
      expect(isValidEmail('test@')).toBe(false);
    });

    it('should return false for email without TLD', () => {
      expect(isValidEmail('test@example')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isValidEmail('')).toBe(false);
    });

    it('should return false for just spaces', () => {
      expect(isValidEmail('   ')).toBe(false);
    });
  });
});
