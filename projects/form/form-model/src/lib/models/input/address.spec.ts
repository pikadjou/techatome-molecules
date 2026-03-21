import { FormGroup } from '@angular/forms';

import { EAddressValues, IAddressValue, InputAddress } from './address';

describe('InputAddress', () => {
  it('should create with defaults', () => {
    const input = new InputAddress({ key: 'address', label: 'Address' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('address');
    expect(input.label).toBe('Address');
    expect(input.controlType).toBe('address');
    expect(input.type).toBe('address');
  });

  it('should have sub-inputs for address fields', () => {
    const input = new InputAddress({ key: 'address' });
    expect(input.street).toBeTruthy();
    expect(input.number).toBeTruthy();
    expect(input.floor).toBeTruthy();
    expect(input.city).toBeTruthy();
    expect(input.country).toBeTruthy();
    expect(input.zipCode).toBeTruthy();
  });

  it('should have correct keys on sub-inputs', () => {
    const input = new InputAddress({ key: 'address' });
    expect(input.street.key).toBe(EAddressValues.street);
    expect(input.number.key).toBe(EAddressValues.number);
    expect(input.floor.key).toBe(EAddressValues.floor);
    expect(input.city.key).toBe(EAddressValues.city);
    expect(input.country.key).toBe(EAddressValues.country);
    expect(input.zipCode.key).toBe(EAddressValues.zipCode);
  });

  it('should set sub-input values when value is set', () => {
    const addressData: Partial<IAddressValue> = {
      street: 'Main Street',
      number: '42',
      floor: '3',
      city: 'Brussels',
      zipCode: '1000',
      country: 'Belgium',
    };
    const input = new InputAddress({ key: 'address', value: addressData });
    expect(input.street.value).toBe('Main Street');
    expect(input.number.value).toBe('42');
    expect(input.floor.value).toBe('3');
    expect(input.city.value).toBe('Brussels');
    expect(input.zipCode.value).toBe('1000');
    expect(input.country.value).toBe('Belgium');
  });

  it('should handle null sub-values gracefully', () => {
    const input = new InputAddress({ key: 'address', value: { street: 'Test' } });
    expect(input.street.value).toBe('Test');
    expect(input.number.value).toBeNull();
    expect(input.city.value).toBeNull();
  });

  describe('updateValue', () => {
    it('should compose value from sub-inputs', () => {
      const input = new InputAddress({ key: 'address' });
      input.street.value = 'Rue de la Loi';
      input.number.value = '16';
      input.city.value = 'Brussels';
      input.zipCode.value = '1000';
      input.country.value = 'Belgium';
      input.floor.value = null;

      input.updateValue();

      expect(input.value).toEqual({
        street: 'Rue de la Loi',
        number: '16',
        floor: null,
        city: 'Brussels',
        zipCode: '1000',
        country: 'Belgium',
        longitude: null,
        latitude: null,
      });
    });
  });

  describe('formatAddressForm (static)', () => {
    it('should format form data to address structure', () => {
      const formData = {
        [EAddressValues.street]: 'Main St',
        [EAddressValues.number]: '10',
        [EAddressValues.floor]: '2',
        [EAddressValues.city]: 'Paris',
        [EAddressValues.zipCode]: '75001',
        [EAddressValues.country]: 'France',
      };

      const result = InputAddress.formatAddressForm(formData);
      expect(result).toEqual({
        street: 'Main St',
        number: '10',
        floor: '2',
        city: 'Paris',
        zipCode: '75001',
        country: 'France',
      });
    });
  });

  describe('EAddressValues enum', () => {
    it('should have all address field keys', () => {
      expect(EAddressValues.street).toBe('street');
      expect(EAddressValues.number).toBe('number');
      expect(EAddressValues.floor).toBe('floor');
      expect(EAddressValues.city).toBe('city');
      expect(EAddressValues.zipCode).toBe('zipCode');
      expect(EAddressValues.country).toBe('country');
      expect(EAddressValues.longitude).toBe('longitude');
      expect(EAddressValues.latitude).toBe('latitude');
    });
  });
});
