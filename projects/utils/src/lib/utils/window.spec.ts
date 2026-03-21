import { openExternalUrl } from './window';

describe('window utils', () => {
  describe('openExternalUrl', () => {
    it('should call window.open with the provided URL', () => {
      spyOn(window, 'open');
      openExternalUrl('https://example.com');
      expect(window.open).toHaveBeenCalledWith('https://example.com');
    });
  });
});
