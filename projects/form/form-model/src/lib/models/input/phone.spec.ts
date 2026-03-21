import { InputPhone } from './phone';

describe('InputPhone', () => {
  it('should create with defaults', () => {
    const input = new InputPhone({ key: 'phone', label: 'Phone' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('phone');
    expect(input.label).toBe('Phone');
    expect(input.controlType).toBe('phone');
    expect(input.type).toBe('tel');
    expect(input.preferredCountries).toEqual(['be', 'fr']);
  });

  it('should include phoneValidator in validators', () => {
    const input = new InputPhone({ key: 'phone' });
    expect(input.validators.length).toBeGreaterThanOrEqual(1);
  });

  it('should accept a value', () => {
    const input = new InputPhone({ key: 'phone', value: '+32123456789' });
    expect(input.value).toBe('+32123456789');
  });

  it('should set type to tel', () => {
    const input = new InputPhone({});
    expect(input.type).toBe('tel');
  });

  it('should create formControl', () => {
    const input = new InputPhone({ key: 'phone' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
