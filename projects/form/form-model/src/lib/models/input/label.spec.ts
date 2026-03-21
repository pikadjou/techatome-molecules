import { FormGroup } from '@angular/forms';

import { InputLabel } from './label';

describe('InputLabel', () => {
  it('should create with defaults', () => {
    const input = new InputLabel({ key: 'info', label: 'Information' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('info');
    expect(input.label).toBe('Information');
    expect(input.controlType).toBe('label');
    expect(input.icon).toBeUndefined();
    expect(input.level).toBeUndefined();
    expect(input.required).toBeUndefined();
  });

  it('should accept icon', () => {
    const input = new InputLabel({ key: 'info', icon: 'fa-info' });
    expect(input.icon).toBe('fa-info');
  });

  it('should accept level', () => {
    const input = new InputLabel({ key: 'info', level: 3 });
    expect(input.level).toBe(3);
  });

  it('should accept required', () => {
    const input = new InputLabel({ key: 'info', required: true });
    expect(input.required).toBe(true);
  });

  it('should not create formControl (overridden to no-op)', () => {
    const input = new InputLabel({ key: 'info', label: 'Label' });
    const group = new FormGroup({});
    input.createFormControl(group);
    // InputLabel overrides createFormControl to do nothing
    expect(input.formControl).toBeUndefined();
    expect(Object.keys(group.controls).length).toBe(0);
  });

  it('should have value null', () => {
    const input = new InputLabel({ key: 'info' });
    expect(input.value).toBeNull();
  });
});
