import { InputSlider } from './slider';

describe('InputSlider', () => {
  it('should create with defaults', () => {
    const input = new InputSlider({ key: 'volume', label: 'Volume' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('volume');
    expect(input.label).toBe('Volume');
    expect(input.controlType).toBe('slider');
    expect(input.min).toBe(0);
    expect(input.max).toBe(100);
  });

  it('should accept custom min and max', () => {
    const input = new InputSlider({ key: 'temp', min: -10, max: 50 });
    expect(input.min).toBe(-10);
    expect(input.max).toBe(50);
  });

  it('should accept a value', () => {
    const input = new InputSlider({ key: 'volume', value: 75 });
    expect(input.value).toBe(75);
  });

  it('should default value to null', () => {
    const input = new InputSlider({ key: 'volume' });
    expect(input.value).toBeNull();
  });

  it('should create formControl', () => {
    const input = new InputSlider({ key: 'volume', value: 50 });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe(50);
  });
});
