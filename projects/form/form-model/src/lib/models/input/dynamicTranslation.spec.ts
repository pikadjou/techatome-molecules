import { InputDynamicTranslation } from './dynamicTranslation';

describe('InputDynamicTranslation', () => {
  it('should create with required options', () => {
    const input = new InputDynamicTranslation({
      key: 'dynTrans',
      label: 'Dynamic Translation',
    });
    expect(input).toBeTruthy();
    expect(input.key).toBe('dynTrans');
    expect(input.label).toBe('Dynamic Translation');
    expect(input.controlType).toBe('translation');
  });

  it('should set template to InputTextBox with the label', () => {
    const input = new InputDynamicTranslation({
      key: 'dynTrans',
      label: 'My Label',
    });
    expect(input.template.length).toBe(1);
    expect(input.template[0].type).toBe('InputTextBox');
    expect(input.template[0].options.key).toBe('InputTextBox');
    expect(input.template[0].options.label).toBe('My Label');
  });

  it('should transform value when provided', () => {
    const input = new InputDynamicTranslation({
      key: 'dynTrans',
      label: 'Label',
      value: { '1': 'English', '2': 'French' },
    });
    // Value should be transformed: { '1': { InputTextBox: 'English' }, '2': { InputTextBox: 'French' } }
    const val = input.value as any;
    expect(val['1']).toEqual({ InputTextBox: 'English' });
    expect(val['2']).toEqual({ InputTextBox: 'French' });
  });

  it('should handle null value', () => {
    const input = new InputDynamicTranslation({
      key: 'dynTrans',
      label: 'Label',
    });
    // When value is falsy, it stays as empty array []
    expect(input.value).toEqual([]);
  });

  describe('untransformValue (static)', () => {
    it('should untransform value back to simple key-value', () => {
      const transformed = {
        1: { InputTextBox: 'English' },
        2: { InputTextBox: 'French' },
      };
      const result = InputDynamicTranslation.untransformValue(transformed);
      expect(result[1]).toBe('English');
      expect(result[2]).toBe('French');
    });

    it('should handle empty object', () => {
      const result = InputDynamicTranslation.untransformValue({});
      expect(result).toEqual({});
    });
  });
});
