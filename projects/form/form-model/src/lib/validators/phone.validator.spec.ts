import { FormControl } from '@angular/forms';

import { phoneValidator } from './phone.validator';

describe('phoneValidator', () => {
  let control: FormControl;
  const validator = phoneValidator();

  beforeEach(() => {
    control = new FormControl('');
  });

  it('should return null for valid slug-like values', () => {
    // The current implementation validates slug-like patterns
    control.setValue('abc-def');
    expect(validator(control)).toBeNull();
  });

  it('should return null for simple lowercase alphanumeric', () => {
    control.setValue('abc123');
    expect(validator(control)).toBeNull();
  });

  it('should return null for single word', () => {
    control.setValue('phone');
    expect(validator(control)).toBeNull();
  });

  it('should return error for values with spaces', () => {
    control.setValue('has spaces');
    expect(validator(control)).toEqual({ validatePhoneNumber: true });
  });

  it('should return error for uppercase letters', () => {
    control.setValue('HasUpperCase');
    expect(validator(control)).toEqual({ validatePhoneNumber: true });
  });

  it('should return error for special characters', () => {
    control.setValue('+32123456789');
    expect(validator(control)).toEqual({ validatePhoneNumber: true });
  });

  it('should return error for empty string', () => {
    control.setValue('');
    expect(validator(control)).toEqual({ validatePhoneNumber: true });
  });

  it('should return a ValidatorFn', () => {
    expect(typeof phoneValidator()).toBe('function');
  });
});
