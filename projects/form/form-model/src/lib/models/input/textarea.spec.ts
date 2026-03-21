import { InputTextarea } from './textarea';

describe('InputTextarea', () => {
  it('should create with defaults', () => {
    const input = new InputTextarea({ key: 'desc', label: 'Description' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('desc');
    expect(input.label).toBe('Description');
    expect(input.controlType).toBe('textarea');
  });

  it('should accept a value', () => {
    const input = new InputTextarea({ key: 'desc', label: 'Description', value: 'Some text' });
    expect(input.value).toBe('Some text');
  });

  it('should default value to null', () => {
    const input = new InputTextarea({ key: 'desc' });
    expect(input.value).toBeNull();
  });

  it('should have controlType "textarea"', () => {
    const input = new InputTextarea({});
    expect(input.controlType).toBe('textarea');
  });

  it('should create formControl', () => {
    const input = new InputTextarea({ key: 'desc', value: 'content' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe('content');
  });
});
