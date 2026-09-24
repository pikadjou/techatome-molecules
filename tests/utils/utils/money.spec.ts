import {
  centsToEuros,
  excludingVatCents,
  vatIncludedCents,
} from '@lib/utils/utils/money';

describe('money utils', () => {
  describe('centsToEuros', () => {
    it('should convert cents to the main unit', () => {
      expect(centsToEuros(1999)).toBe(19.99);
    });

    it('should treat an absent amount as zero', () => {
      expect(centsToEuros(null)).toBe(0);
      expect(centsToEuros(undefined)).toBe(0);
    });
  });

  describe('vatIncludedCents', () => {
    it('should extract the tax contained in a gross total', () => {
      expect(vatIncludedCents(1210, 21)).toBe(210);
    });

    it('should round to the nearest cent', () => {
      expect(vatIncludedCents(1000, 21)).toBe(174);
    });

    it('should return zero when the rate is zero', () => {
      expect(vatIncludedCents(1000, 0)).toBe(0);
    });
  });

  describe('excludingVatCents', () => {
    it('should return the net part of a gross total', () => {
      expect(excludingVatCents(1210, 21)).toBe(1000);
    });

    it('should always complement vatIncludedCents', () => {
      const total = 4567;
      expect(excludingVatCents(total, 6) + vatIncludedCents(total, 6)).toBe(
        total
      );
    });
  });
});
