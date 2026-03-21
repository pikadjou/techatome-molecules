import { GET_TRANSLATIONS } from './queries';

describe('Translation Queries', () => {
  describe('GET_TRANSLATIONS', () => {
    it('should return a GraphQueryPayload', () => {
      const result = GET_TRANSLATIONS('en', 'common');
      expect(result).toBeTruthy();
      expect(result.query).toBeTruthy();
      expect(result.variables).toBeTruthy();
    });

    it('should set locale variable', () => {
      const result = GET_TRANSLATIONS('fr', 'menu');
      expect(result.variables.locale).toBe('fr');
    });

    it('should set filters for feature key', () => {
      const result = GET_TRANSLATIONS('en', 'notifications');
      expect(result.variables.filters).toEqual({
        feature: { key: { eq: 'notifications' } },
      });
    });

    it('should handle different language and feature combinations', () => {
      const result = GET_TRANSLATIONS('nl', 'forms');
      expect(result.variables.locale).toBe('nl');
      expect(result.variables.filters.feature.key.eq).toBe('forms');
    });
  });
});
