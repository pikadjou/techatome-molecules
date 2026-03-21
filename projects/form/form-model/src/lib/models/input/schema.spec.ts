import { InputSchema } from './schema';

describe('InputSchema', () => {
  it('should create with defaults', () => {
    const input = new InputSchema({ key: 'schema', label: 'Schema' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('schema');
    expect(input.label).toBe('Schema');
    expect(input.controlType).toBe('schema');
    expect(input.update).toBeNull();
  });

  it('should accept update function', () => {
    const updateFn = async (data: any) => [];
    const input = new InputSchema({ key: 'schema', update: updateFn });
    expect(input.update).toBe(updateFn);
  });

  it('should accept a string value', () => {
    const input = new InputSchema({ key: 'schema', value: 'schema-data' });
    expect(input.value).toBe('schema-data');
  });

  it('should default value to null', () => {
    const input = new InputSchema({ key: 'schema' });
    expect(input.value).toBeNull();
  });

  it('should create formControl', () => {
    const input = new InputSchema({ key: 'schema', value: 'test' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe('test');
  });
});
