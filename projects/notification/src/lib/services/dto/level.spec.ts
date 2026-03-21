import { ENotificationLevel } from './level';

describe('ENotificationLevel', () => {
  it('should have an Unknown value', () => {
    expect(ENotificationLevel.Unknown).toBeDefined();
    expect(ENotificationLevel.Unknown).toBe(0);
  });

  it('should have an Information value', () => {
    expect(ENotificationLevel.Information).toBeDefined();
    expect(ENotificationLevel.Information).toBe(1);
  });

  it('should have a Warning value', () => {
    expect(ENotificationLevel.Warning).toBeDefined();
    expect(ENotificationLevel.Warning).toBe(2);
  });

  it('should contain exactly 3 members', () => {
    const members = Object.keys(ENotificationLevel).filter(
      (key) => isNaN(Number(key))
    );
    expect(members.length).toBe(3);
  });
});
