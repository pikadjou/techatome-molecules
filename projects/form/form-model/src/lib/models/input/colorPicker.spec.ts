import { InputColorPicker } from './colorPicker';

describe('InputColorPicker', () => {
  it('should create with defaults', () => {
    const input = new InputColorPicker({ key: 'color', label: 'Color' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('color');
    expect(input.label).toBe('Color');
    expect(input.controlType).toBe('colorPicker');
  });

  it('should accept a color value', () => {
    const input = new InputColorPicker({ key: 'color', value: '#ff0000' });
    expect(input.value).toBe('#ff0000');
  });

  it('should default value to null', () => {
    const input = new InputColorPicker({ key: 'color' });
    expect(input.value).toBeNull();
  });

  it('should extend InputTextBox', () => {
    const input = new InputColorPicker({ key: 'color' });
    // InputTextBox properties should be available
    expect(input.icon).toBeNull();
  });

  it('should create formControl', () => {
    const input = new InputColorPicker({ key: 'color', value: '#00ff00' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe('#00ff00');
  });
});
