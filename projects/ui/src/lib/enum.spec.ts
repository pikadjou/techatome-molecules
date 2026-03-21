import { ENotificationCode, getTypeClass } from './enum';

describe('ENotificationCode', () => {
  it('should have correct enum values', () => {
    expect(ENotificationCode.none).toBe(0);
    expect(ENotificationCode.error).toBe(1);
    expect(ENotificationCode.warning).toBe(2);
    expect(ENotificationCode.information).toBe(3);
    expect(ENotificationCode.success).toBe(4);
  });
});

describe('getTypeClass', () => {
  it('should return danger for error code', () => {
    expect(getTypeClass(ENotificationCode.error)).toBe('danger');
  });

  it('should return warning for warning code', () => {
    expect(getTypeClass(ENotificationCode.warning)).toBe('warning');
  });

  it('should return info for information code', () => {
    expect(getTypeClass(ENotificationCode.information)).toBe('info');
  });

  it('should return success for success code', () => {
    expect(getTypeClass(ENotificationCode.success)).toBe('success');
  });

  it('should return empty string for none code', () => {
    expect(getTypeClass(ENotificationCode.none)).toBe('');
  });
});
