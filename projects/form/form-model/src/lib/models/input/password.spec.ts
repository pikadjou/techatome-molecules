import { InputPassword } from './password';

describe('InputPassword', () => {
  it('should create with defaults', () => {
    const input = new InputPassword({ key: 'pwd', label: 'Password' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('pwd');
    expect(input.label).toBe('Password');
    expect(input.type).toBe('password');
    expect(input.controlType).toBe('textbox');
  });

  it('should include required validator', () => {
    const input = new InputPassword({ key: 'pwd' });
    expect(input.validators.length).toBeGreaterThanOrEqual(1);
  });

  it('should fail validation when empty (required)', () => {
    const input = new InputPassword({ key: 'pwd' });
    input.createFormControl();
    expect(input.formControl?.valid).toBe(false);
  });

  it('should pass validation when value is provided', () => {
    const input = new InputPassword({ key: 'pwd', value: 'secret123' });
    input.createFormControl();
    expect(input.formControl?.valid).toBe(true);
  });

  it('should accept a value', () => {
    const input = new InputPassword({ key: 'pwd', value: 'mypassword' });
    expect(input.value).toBe('mypassword');
  });

  it('should set type to password', () => {
    const input = new InputPassword({});
    expect(input.type).toBe('password');
  });
});
