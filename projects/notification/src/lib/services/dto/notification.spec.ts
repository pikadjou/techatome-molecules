import { notificationProps } from './notification';

describe('notificationProps (GraphSchema)', () => {
  it('should be defined', () => {
    expect(notificationProps).toBeTruthy();
  });

  it('should return id field', () => {
    expect(notificationProps.get('id')).toBe('id');
  });

  it('should return date field', () => {
    expect(notificationProps.get('date')).toBe('date');
  });

  it('should return level field', () => {
    expect(notificationProps.get('level')).toBe('level');
  });

  it('should return isNew field', () => {
    expect(notificationProps.get('isNew')).toBe('isNew');
  });

  it('should return userId field', () => {
    expect(notificationProps.get('userId')).toBe('userId');
  });

  it('should return tenantId field', () => {
    expect(notificationProps.get('tenantId')).toBe('tenantId');
  });

  it('should return tenantName field', () => {
    expect(notificationProps.get('tenantName')).toBe('tenantName');
  });

  it('should return type field', () => {
    expect(notificationProps.get('type')).toBe('type');
  });

  it('should return context field', () => {
    expect(notificationProps.get('context')).toBe('context');
  });

  it('should return redirectContext field', () => {
    expect(notificationProps.get('redirectContext')).toBe('redirectContext');
  });

  it('should return undefined for unknown fields', () => {
    expect(notificationProps.get('nonExistent' as any)).toBeUndefined();
  });
});
