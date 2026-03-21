import { InputEmail } from './email';

describe('InputEmail', () => {
  it('should create with defaults', () => {
    const input = new InputEmail({ key: 'email', label: 'Email' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('email');
    expect(input.label).toBe('Email');
    expect(input.type).toBe('email');
    expect(input.controlType).toBe('textbox');
  });

  it('should accept a value', () => {
    const input = new InputEmail({ key: 'email', value: 'test@example.com' });
    expect(input.value).toBe('test@example.com');
  });

  it('should include email validator', () => {
    const input = new InputEmail({ key: 'email' });
    expect(input.validators.length).toBeGreaterThanOrEqual(1);
  });

  it('should validate email format via formControl', () => {
    const input = new InputEmail({ key: 'email', value: 'invalid-email' });
    input.createFormControl();
    expect(input.formControl?.valid).toBe(false);

    input.formControl?.setValue('valid@email.com');
    expect(input.formControl?.valid).toBe(true);
  });

  it('should set type to email', () => {
    const input = new InputEmail({});
    expect(input.type).toBe('email');
  });
});
