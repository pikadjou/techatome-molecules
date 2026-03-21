import { GET_CMS_CONTENT, GET_SALE_CONTENT } from './strapiQueries';

describe('Strapi Queries', () => {
  describe('GET_CMS_CONTENT', () => {
    it('should return a GraphQueryPayload', () => {
      const result = GET_CMS_CONTENT('faq', 'fr', '123');
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
      expect(result.variables).toBeDefined();
    });

    it('should include correct variables', () => {
      const result = GET_CMS_CONTENT('faq', 'en', '456');
      expect(result.variables.type).toBe('faq');
      expect(result.variables.locale).toBe('en');
      expect(result.variables.uid).toBe('456');
    });
  });

  describe('GET_SALE_CONTENT', () => {
    it('should return a GraphQueryPayload', () => {
      const result = GET_SALE_CONTENT('789', 'fr');
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
      expect(result.variables).toBeDefined();
    });

    it('should include correct variables', () => {
      const result = GET_SALE_CONTENT('789', 'nl');
      expect(result.variables.uid).toBe('789');
      expect(result.variables.locale).toBe('nl');
    });
  });
});
