import { of } from 'rxjs';

import { InputRadio } from './radio';

describe('InputRadio', () => {
  it('should create with defaults', () => {
    const input = new InputRadio({ key: 'gender', label: 'Gender' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('gender');
    expect(input.label).toBe('Gender');
    expect(input.controlType).toBe('radio');
    expect(input.type).toBe('radioGroup');
  });

  it('should accept options observable', (done) => {
    const options = of([
      { id: 'male', name: 'Male' },
      { id: 'female', name: 'Female' },
    ]);
    const input = new InputRadio({ key: 'gender', options });
    input.options.subscribe((opts) => {
      expect(opts.length).toBe(2);
      expect(opts[0].id).toBe('male');
      done();
    });
  });

  it('should default options to empty array observable', (done) => {
    const input = new InputRadio({ key: 'gender' });
    input.options.subscribe((opts) => {
      expect(opts).toEqual([]);
      done();
    });
  });

  it('should accept a value', () => {
    const input = new InputRadio<string>({ key: 'gender', value: 'male' });
    expect(input.value).toBe('male');
  });

  it('should set type to radioGroup', () => {
    const input = new InputRadio({});
    expect(input.type).toBe('radioGroup');
  });

  it('should create formControl', () => {
    const input = new InputRadio<string>({ key: 'gender', value: 'female' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe('female');
  });
});
