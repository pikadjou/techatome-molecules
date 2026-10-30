import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

import { InputNumber } from '@lib/form-model/models/input/number';

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

  describe('saisie dans le champ', () => {
    const monter = (value?: number) => {
      const input = new InputNumber({ key: 'qty', value });
      const group = new FormGroup<Record<string, AbstractControl>>({});
      input.createFormControl(group);
      return { input, control: group.get('qty') as FormControl };
    };

    it('ne réécrit pas le champ pendant la frappe', () => {
      const { control } = monter();
      const writes: unknown[] = [];
      control.registerOnChange((value: unknown) => writes.push(value));
      // Ce que transmet le DefaultValueAccessor à chaque frappe.
      control.setValue('1.5' as any, { emitModelToViewChange: false });
      expect(writes).toEqual([]);
    });

    it('convertit la saisie en nombre dans le contrôle et le modèle', () => {
      const { input, control } = monter();
      control.setValue('1.5' as any, { emitModelToViewChange: false });
      expect(control.value).toBe(1.5);
      expect(input.value).toBe(1.5);
    });

    it('un champ vidé vaut null dans le contrôle', () => {
      const { control } = monter(3);
      control.setValue('' as any, { emitModelToViewChange: false });
      expect(control.value).toBeNull();
    });
  });
});
