import { ENotificationCode } from './enum';

describe('ENotificationCode', () => {
  it('should have a none value', () => {
    expect(ENotificationCode.none).toBeDefined();
    expect(ENotificationCode.none).toBe(0);
  });

  it('should have an error value', () => {
    expect(ENotificationCode.error).toBeDefined();
    expect(ENotificationCode.error).toBe(1);
  });

  it('should have a warning value', () => {
    expect(ENotificationCode.warning).toBeDefined();
    expect(ENotificationCode.warning).toBe(2);
  });

  it('should have an information value', () => {
    expect(ENotificationCode.information).toBeDefined();
    expect(ENotificationCode.information).toBe(3);
  });

  it('should have a success value', () => {
    expect(ENotificationCode.success).toBeDefined();
    expect(ENotificationCode.success).toBe(4);
  });

  it('should contain exactly 5 members', () => {
    const members = Object.keys(ENotificationCode).filter(
      (key) => isNaN(Number(key))
    );
    expect(members.length).toBe(5);
  });
});
