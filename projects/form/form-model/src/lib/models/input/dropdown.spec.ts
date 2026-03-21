import { of } from 'rxjs';

import { InputDropdown } from './dropdown';

describe('InputDropdown', () => {
  it('should create with defaults', () => {
    const input = new InputDropdown({ key: 'role', label: 'Role' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('role');
    expect(input.label).toBe('Role');
    expect(input.controlType).toBe('dropdown');
    expect(input.multiple).toBe(false);
    expect(input.showNothingOption).toBe(false);
    expect(input.withSearch).toBe(false);
    expect(input.width).toBe('100%');
  });

  it('should accept options$ observable', (done) => {
    const options$ = of([
      { id: '1', name: 'Admin' },
      { id: '2', name: 'User' },
    ]);
    const input = new InputDropdown({ key: 'role', options$ });
    input.options$.subscribe((opts) => {
      expect(opts.length).toBe(2);
      expect(opts[0].id).toBe('1');
      expect(opts[0].name).toBe('Admin');
      done();
    });
  });

  it('should default options$ to empty array observable', (done) => {
    const input = new InputDropdown({ key: 'role' });
    input.options$.subscribe((opts) => {
      expect(opts).toEqual([]);
      done();
    });
  });

  it('should accept multiple option', () => {
    const input = new InputDropdown({ key: 'role', multiple: true });
    expect(input.multiple).toBe(true);
  });

  it('should not show nothing option when multiple is true', () => {
    const input = new InputDropdown({ key: 'role', multiple: true, showNothingOption: true });
    expect(input.showNothingOption).toBe(false);
  });

  it('should show nothing option when multiple is false', () => {
    const input = new InputDropdown({ key: 'role', multiple: false, showNothingOption: true });
    expect(input.showNothingOption).toBe(true);
  });

  it('should accept withSearch option', () => {
    const input = new InputDropdown({ key: 'role', withSearch: true });
    expect(input.withSearch).toBe(true);
  });

  it('should accept custom width', () => {
    const input = new InputDropdown({ key: 'role', width: '50%' });
    expect(input.width).toBe('50%');
  });

  it('should accept a value', () => {
    const input = new InputDropdown<string>({ key: 'role', value: 'admin' });
    expect(input.value).toBe('admin');
  });

  it('should create formControl', () => {
    const input = new InputDropdown({ key: 'role', value: 'user' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe('user');
  });
});
