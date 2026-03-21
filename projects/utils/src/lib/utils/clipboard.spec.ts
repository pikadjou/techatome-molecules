import { copyTextToClipboard } from './clipboard';

describe('clipboard utils', () => {
  describe('copyTextToClipboard', () => {
    it('should call success callback on successful copy', async () => {
      spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
      const success = jasmine.createSpy('success');
      const error = jasmine.createSpy('error');

      await copyTextToClipboard('test text', success, error);

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test text');
      expect(success).toHaveBeenCalledWith('ui.clipboard.success');
      expect(error).not.toHaveBeenCalled();
    });

    it('should call error callback on failed copy', async () => {
      spyOn(navigator.clipboard, 'writeText').and.returnValue(
        Promise.reject(new Error('Failed'))
      );
      const success = jasmine.createSpy('success');
      const error = jasmine.createSpy('error');

      await copyTextToClipboard('test text', success, error);

      expect(error).toHaveBeenCalledWith('ui.clipboard.error');
      expect(success).not.toHaveBeenCalled();
    });
  });
});
