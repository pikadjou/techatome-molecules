import { InputDatePicker } from './datePicker';

describe('InputDatePicker', () => {
  it('should create with defaults', () => {
    const input = new InputDatePicker({ key: 'date', label: 'Date' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('date');
    expect(input.label).toBe('Date');
    expect(input.controlType).toBe('datePicker');
    expect(input.minDate).toBeNull();
    expect(input.maxDate).toBeNull();
    expect(input.rangeEnabled).toBe(false);
  });

  it('should accept a Date for minDate', () => {
    const min = new Date(2023, 0, 1);
    const input = new InputDatePicker({ key: 'date', minDate: min });
    expect(input.minDate).toEqual(min);
  });

  it('should accept a Date for maxDate', () => {
    const max = new Date(2025, 11, 31);
    const input = new InputDatePicker({ key: 'date', maxDate: max });
    expect(input.maxDate).toEqual(max);
  });

  it('should parse "today" for minDate', () => {
    const input = new InputDatePicker({ key: 'date', minDate: 'today' });
    expect(input.minDate).toBeTruthy();
    expect(input.minDate instanceof Date).toBe(true);
    // Should be today's date (approximate check)
    const now = new Date();
    expect(input.minDate!.getFullYear()).toBe(now.getFullYear());
    expect(input.minDate!.getMonth()).toBe(now.getMonth());
    expect(input.minDate!.getDate()).toBe(now.getDate());
  });

  it('should parse "today" for maxDate', () => {
    const input = new InputDatePicker({ key: 'date', maxDate: 'today' });
    expect(input.maxDate).toBeTruthy();
    expect(input.maxDate instanceof Date).toBe(true);
  });

  it('should accept rangeEnabled', () => {
    const input = new InputDatePicker({ key: 'date', rangeEnabled: true });
    expect(input.rangeEnabled).toBe(true);
  });

  it('should accept a value', () => {
    const date = new Date(2024, 5, 15);
    const input = new InputDatePicker({ key: 'date', value: date as any });
    expect(input.value).toEqual(date);
  });

  it('should accept a range value', () => {
    const start = new Date(2024, 0, 1);
    const end = new Date(2024, 11, 31);
    const input = new InputDatePicker({
      key: 'date',
      rangeEnabled: true,
      value: { start, end } as any,
    });
    expect(input.value).toEqual({ start, end });
  });

  describe('parseDate', () => {
    let input: InputDatePicker;

    beforeEach(() => {
      input = new InputDatePicker({ key: 'date' });
    });

    it('should return null for undefined', () => {
      expect(input.parseDate(undefined)).toBeNull();
    });

    it('should return the same Date instance', () => {
      const date = new Date(2024, 3, 15);
      expect(input.parseDate(date)).toBe(date);
    });

    it('should return today for "today"', () => {
      const result = input.parseDate('today');
      const now = new Date();
      expect(result).toBeTruthy();
      expect(result!.getDate()).toBe(now.getDate());
    });
  });

  it('should create formControl', () => {
    const input = new InputDatePicker({ key: 'date' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
