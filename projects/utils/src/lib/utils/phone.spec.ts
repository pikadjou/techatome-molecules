import { call } from './phone';

describe('phone utils', () => {
  describe('call', () => {
    it('should call window.open with tel: protocol', () => {
      spyOn(window, 'open');
      call('+33123456789');
      expect(window.open).toHaveBeenCalledWith('tel:+33123456789');
    });
  });
});
