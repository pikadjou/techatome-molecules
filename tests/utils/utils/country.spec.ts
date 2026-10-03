import { getCountryName, resolveCountryCode } from '@lib/utils/utils/country';

describe('country utils', () => {
  describe('resolveCountryCode', () => {
    it('should keep an ISO alpha-2 code, whatever its case', () => {
      expect(resolveCountryCode('BE')).toBe('BE');
      expect(resolveCountryCode(' fr ')).toBe('FR');
    });

    // Le cas qui justifie la fonction : les anciennes adresses portent un nom complet.
    it('should resolve a country name in English, French, Dutch or German', () => {
      expect(resolveCountryCode('Belgium')).toBe('BE');
      expect(resolveCountryCode('Belgique')).toBe('BE');
      expect(resolveCountryCode('België')).toBe('BE');
      expect(resolveCountryCode('Belgien')).toBe('BE');
      expect(resolveCountryCode('france')).toBe('FR');
    });

    it('should ignore accents and case', () => {
      expect(resolveCountryCode('BELGIQUE')).toBe('BE');
      expect(resolveCountryCode('Belgie')).toBe('BE');
    });

    it('should give up on anything else', () => {
      expect(resolveCountryCode('Atlantide')).toBeNull();
      expect(resolveCountryCode('')).toBeNull();
      expect(resolveCountryCode(null)).toBeNull();
      expect(resolveCountryCode(undefined)).toBeNull();
    });

    it('should round-trip with getCountryName', () => {
      expect(resolveCountryCode(getCountryName('NL', 'fr'))).toBe('NL');
    });
  });
});
