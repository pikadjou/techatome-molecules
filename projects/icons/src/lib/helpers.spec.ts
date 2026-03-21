import { TaIconType } from './services/icons.service';
import { getFontIcon, isFontIcon, isLocalIcon } from './helpers';

describe('Icon Helpers', () => {
  describe('isFontIcon', () => {
    it('should return true for a string icon name', () => {
      expect(isFontIcon('home')).toBe(true);
    });

    it('should return true for an empty string', () => {
      expect(isFontIcon('')).toBe(true);
    });

    it('should return true for any arbitrary string', () => {
      expect(isFontIcon('some-icon-name')).toBe(true);
      expect(isFontIcon('settings')).toBe(true);
      expect(isFontIcon('arrow_back')).toBe(true);
    });

    it('should return false for a numeric TaIconType enum member', () => {
      // Numeric enum members have typeof "number" at runtime
      expect(isFontIcon(TaIconType.Add as unknown as string)).toBe(false);
      expect(isFontIcon(TaIconType.Search as unknown as string)).toBe(false);
      expect(isFontIcon(TaIconType.Unknown as unknown as string)).toBe(false);
    });
  });

  describe('getFontIcon', () => {
    it('should return the icon string when it is a font icon', () => {
      expect(getFontIcon('home')).toBe('home');
    });

    it('should return empty string for a non-string icon', () => {
      expect(getFontIcon(TaIconType.Add as unknown as string)).toBe('');
    });

    it('should return the original string for any string input', () => {
      expect(getFontIcon('settings')).toBe('settings');
      expect(getFontIcon('arrow_forward')).toBe('arrow_forward');
    });

    it('should return empty string for an empty string input', () => {
      // An empty string is still typeof "string", so isFontIcon returns true
      // and toString() returns ''
      expect(getFontIcon('')).toBe('');
    });
  });

  describe('isLocalIcon', () => {
    it('should return true for a valid TaIconType value', () => {
      expect(isLocalIcon(TaIconType.Add as unknown as string)).toBe(true);
    });

    it('should return false for a random string not in TaIconType', () => {
      expect(isLocalIcon('random-nonexistent-icon')).toBe(false);
    });

    it('should return true for TaIconType.Search', () => {
      expect(isLocalIcon(TaIconType.Search as unknown as string)).toBe(true);
    });

    it('should return true for TaIconType.Unknown', () => {
      expect(isLocalIcon(TaIconType.Unknown as unknown as string)).toBe(true);
    });

    it('should return true for various TaIconType members', () => {
      expect(isLocalIcon(TaIconType.Delete as unknown as string)).toBe(true);
      expect(isLocalIcon(TaIconType.Edit as unknown as string)).toBe(true);
      expect(isLocalIcon(TaIconType.Email as unknown as string)).toBe(true);
    });

    it('should return false for string names that are not enum values', () => {
      expect(isLocalIcon('not-an-icon')).toBe(false);
      expect(isLocalIcon('material-icon')).toBe(false);
    });
  });
});
