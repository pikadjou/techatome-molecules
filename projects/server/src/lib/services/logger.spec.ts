import { Logger } from './logger';

describe('Logger', () => {
  beforeEach(() => {
    Logger.config = { DEBUG: true, DEBUG_LEVEL: Logger.DEBUG };
  });

  it('should have static log level constants', () => {
    expect(Logger.DEBUG).toBe(0);
    expect(Logger.INFO).toBe(1);
    expect(Logger.WARNING).toBe(2);
    expect(Logger.ERROR).toBe(3);
  });

  it('should have a default config with DEBUG enabled', () => {
    expect(Logger.config.DEBUG).toBeTrue();
    expect(Logger.config.DEBUG_LEVEL).toBe(Logger.DEBUG);
  });

  describe('LogDebug', () => {
    it('should call console.debug when DEBUG is enabled and level allows', () => {
      spyOn(console, 'debug');
      Logger.LogDebug('debug message', 'data');
      expect(console.debug).toHaveBeenCalledWith('debug message', 'data');
    });

    it('should use empty string when data is undefined', () => {
      spyOn(console, 'debug');
      Logger.LogDebug('debug message');
      expect(console.debug).toHaveBeenCalledWith('debug message', '');
    });

    it('should not log when DEBUG is disabled', () => {
      Logger.config.DEBUG = false;
      spyOn(console, 'debug');
      Logger.LogDebug('debug message');
      expect(console.debug).not.toHaveBeenCalled();
    });
  });

  describe('LogInfo', () => {
    it('should call console.info when DEBUG is enabled and level allows', () => {
      spyOn(console, 'info');
      Logger.LogInfo('info message', 'extra');
      expect(console.info).toHaveBeenCalledWith('info message', ['extra']);
    });

    it('should not log when DEBUG level is above INFO', () => {
      Logger.config.DEBUG_LEVEL = Logger.WARNING;
      spyOn(console, 'info');
      Logger.LogInfo('info message');
      expect(console.info).not.toHaveBeenCalled();
    });
  });

  describe('LogWarning', () => {
    it('should call console.warn with formatted message', () => {
      spyOn(console, 'warn');
      Logger.LogWarning('warning message', 'data');
      expect(console.warn).toHaveBeenCalledWith('/!\\ warning message /!\\', 'data');
    });

    it('should use empty string when data is undefined', () => {
      spyOn(console, 'warn');
      Logger.LogWarning('warning message');
      expect(console.warn).toHaveBeenCalledWith('/!\\ warning message /!\\', '');
    });
  });

  describe('LogError', () => {
    it('should call console.error with formatted message', () => {
      spyOn(console, 'error');
      Logger.LogError('error message', 'data');
      expect(console.error).toHaveBeenCalledWith('/!\\ error message /!\\', 'data');
    });

    it('should use empty string when data is undefined', () => {
      spyOn(console, 'error');
      Logger.LogError('error message');
      expect(console.error).toHaveBeenCalledWith('/!\\ error message /!\\', '');
    });

    it('should not log when DEBUG is disabled', () => {
      Logger.config.DEBUG = false;
      spyOn(console, 'error');
      Logger.LogError('error message');
      expect(console.error).not.toHaveBeenCalled();
    });
  });
});
