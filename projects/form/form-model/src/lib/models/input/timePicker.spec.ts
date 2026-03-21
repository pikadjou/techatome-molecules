import { InputTimePicker } from './timePicker';

describe('InputTimePicker', () => {
  it('should create with defaults', () => {
    const input = new InputTimePicker({ key: 'time', label: 'Time' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('time');
    expect(input.label).toBe('Time');
    expect(input.type).toBe('time');
    expect(input.controlType).toBe('timePicker');
  });

  it('should accept a value', () => {
    const input = new InputTimePicker({ key: 'time', value: '14:30' });
    expect(input.value).toBe('14:30');
  });

  it('should default value to null', () => {
    const input = new InputTimePicker({ key: 'time' });
    expect(input.value).toBeNull();
  });

  it('should extend InputTextBox', () => {
    const input = new InputTimePicker({ key: 'time' });
    expect(input.icon).toBeNull();
  });

  it('should create formControl', () => {
    const input = new InputTimePicker({ key: 'time', value: '09:00' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe('09:00');
  });
});
