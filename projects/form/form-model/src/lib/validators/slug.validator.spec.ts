import { FormControl } from '@angular/forms';

import { slugValidator } from './slug.validator';

describe('slugValidator', () => {
  let control: FormControl;
  const validator = slugValidator();

  beforeEach(() => {
    control = new FormControl('');
  });

  it('should return null for a valid slug', () => {
    control.setValue('my-slug');
    expect(validator(control)).toBeNull();
  });

  it('should return null for a simple lowercase word', () => {
    control.setValue('slug');
    expect(validator(control)).toBeNull();
  });

  it('should return null for slug with numbers', () => {
    control.setValue('my-slug-123');
    expect(validator(control)).toBeNull();
  });

  it('should return null for numbers only', () => {
    control.setValue('123');
    expect(validator(control)).toBeNull();
  });

  it('should return null for multi-hyphen segments', () => {
    control.setValue('a-b-c-d');
    expect(validator(control)).toBeNull();
  });

  it('should return error for uppercase letters', () => {
    control.setValue('MySlug');
    expect(validator(control)).toEqual({ invalidSlug: true });
  });

  it('should return error for spaces', () => {
    control.setValue('my slug');
    expect(validator(control)).toEqual({ invalidSlug: true });
  });

  it('should return error for special characters', () => {
    control.setValue('my_slug');
    expect(validator(control)).toEqual({ invalidSlug: true });
  });

  it('should return error for leading hyphen', () => {
    control.setValue('-my-slug');
    expect(validator(control)).toEqual({ invalidSlug: true });
  });

  it('should return error for trailing hyphen', () => {
    control.setValue('my-slug-');
    expect(validator(control)).toEqual({ invalidSlug: true });
  });

  it('should return error for consecutive hyphens', () => {
    control.setValue('my--slug');
    expect(validator(control)).toEqual({ invalidSlug: true });
  });

  it('should return error for empty string', () => {
    control.setValue('');
    expect(validator(control)).toEqual({ invalidSlug: true });
  });

  it('should return a ValidatorFn', () => {
    expect(typeof slugValidator()).toBe('function');
  });
});
