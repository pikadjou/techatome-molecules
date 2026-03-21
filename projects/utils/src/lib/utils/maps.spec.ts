import { openMap } from './maps';

describe('maps utils', () => {
  describe('openMap', () => {
    it('should call window.open with Google Maps URL', () => {
      spyOn(window, 'open');
      openMap('Paris France');
      expect(window.open).toHaveBeenCalledWith(
        'https://www.google.com/maps/search/?api=1&query=Paris France'
      );
    });
  });
});
