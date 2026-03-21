import { MenuAction } from './action';

describe('MenuAction', () => {
  it('should create with an action function', () => {
    const actionFn = () => 'executed';
    const item = new MenuAction({ action: actionFn, key: 'act1' });
    expect(item.action).toBe(actionFn);
    expect(item.key).toBe('act1');
  });

  it('should default action to null when not provided', () => {
    const item = new MenuAction({ action: undefined as any });
    expect(item.action).toBeNull();
  });

  it('should inherit MenuBase properties', () => {
    const item = new MenuAction({
      action: () => {},
      key: 'test',
      label: 'Test Action',
      order: 2,
      link: '/action',
      disabled: false,
    });
    expect(item.label).toBe('Test Action');
    expect(item.order).toBe(2);
    expect(item.link).toBe('/action');
    expect(item.disabled).toBe(false);
  });

  it('should have isMenuPanel return false', () => {
    const item = new MenuAction({ action: () => {} });
    expect(item.isMenuPanel).toBe(false);
  });
});
