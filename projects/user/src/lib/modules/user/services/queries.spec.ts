import { userInfo } from './queries';

describe('User Queries', () => {
  describe('userInfo', () => {
    it('should return a GraphQueryPayload', () => {
      const result = userInfo({ props: 'id firstname lastname' });
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
      expect(result.variables).toBeDefined();
    });

    it('should have empty variables', () => {
      const result = userInfo({ props: 'id' });
      expect(result.variables).toEqual({});
    });
  });
});
