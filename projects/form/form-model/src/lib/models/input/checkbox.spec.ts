import { InputCheckBox } from './checkbox';

describe('InputCheckBox', () => {
  it('should create with defaults', () => {
    const input = new InputCheckBox({ key: 'accept', label: 'Accept' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('accept');
    expect(input.label).toBe('Accept');
    expect(input.controlType).toBe('checkbox');
    expect(input.value).toBe(false);
  });

  it('should default value to false when no value provided', () => {
    const input = new InputCheckBox({ key: 'check' });
    expect(input.value).toBe(false);
  });

  it('should accept a true value', () => {
    const input = new InputCheckBox({ key: 'check', value: true });
    expect(input.value).toBe(true);
  });

  it('should switch to toggle controlType when toggle is true', () => {
    const input = new InputCheckBox({ key: 'check', toggle: true });
    expect(input.controlType).toBe('toggle');
  });

  it('should keep checkbox controlType when toggle is false', () => {
    const input = new InputCheckBox({ key: 'check', toggle: false });
    expect(input.controlType).toBe('checkbox');
  });

  it('should keep checkbox controlType when toggle is not provided', () => {
    const input = new InputCheckBox({ key: 'check' });
    expect(input.controlType).toBe('checkbox');
  });

  it('should create formControl', () => {
    const input = new InputCheckBox({ key: 'check', value: true });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe(true);
  });
});
