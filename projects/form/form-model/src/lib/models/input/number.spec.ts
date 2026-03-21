import { InputNumber } from './number';

describe('InputNumber', () => {
  it('should create with defaults', () => {
    const input = new InputNumber({ key: 'qty', label: 'Quantity' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('qty');
    expect(input.label).toBe('Quantity');
    expect(input.type).toBe('number');
    expect(input.controlType).toBe('textbox');
  });

  it('should accept a numeric value', () => {
    const input = new InputNumber({ key: 'qty', value: 42 });
    expect(input.value).toBe(42);
  });

  it('should convert value to Number on get', () => {
    const input = new InputNumber({ key: 'qty', value: 10 });
    expect(typeof input.value).toBe('number');
  });

  it('should convert value to Number on set', () => {
    const input = new InputNumber({ key: 'qty' });
    input.value = 25;
    expect(input.value).toBe(25);
    expect(typeof input.value).toBe('number');
  });

  it('should return 0 for null value (Number(null) = 0)', () => {
    const input = new InputNumber({ key: 'qty' });
    // InputNumber overrides get value to return Number(super.value)
    // Number(null) === 0
    expect(input.value).toBe(0);
  });

  it('should set type to number', () => {
    const input = new InputNumber({});
    expect(input.type).toBe('number');
  });

  it('should create formControl with numeric value', () => {
    const input = new InputNumber({ key: 'qty', value: 99 });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
