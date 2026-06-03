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

  it('should store value as Partial<IAddressValue>', () => {
    const addressData: Partial<IAddressValue> = {
      city: 'Brussels',
      country: 'Belgium',
      number: '42',
      street: 'Main Street',
      zipCode: '1000',
    };
    const input = new InputAddress({ key: 'address', value: addressData });
    expect(input.value).toEqual(addressData);
  });

  it('should accept null value', () => {
    const input = new InputAddress({ key: 'address' });
    expect(input.value).toBeNull();
  });

  describe('EAddressValues enum', () => {
    it('should have all address field keys', () => {
      expect(EAddressValues.city).toBe('city');
      expect(EAddressValues.country).toBe('country');
      expect(EAddressValues.floor).toBe('floor');
      expect(EAddressValues.latitude).toBe('latitude');
      expect(EAddressValues.longitude).toBe('longitude');
      expect(EAddressValues.number).toBe('number');
      expect(EAddressValues.placeId).toBe('placeId');
      expect(EAddressValues.street).toBe('street');
      expect(EAddressValues.zipCode).toBe('zipCode');
    });
  });

  describe('formatAddressForm (static)', () => {
    it('should format form data to address structure', () => {
      const formData = {
        [EAddressValues.city]: 'Paris',
        [EAddressValues.country]: 'France',
        [EAddressValues.floor]: '2',
        [EAddressValues.number]: '10',
        [EAddressValues.placeId]: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
        [EAddressValues.street]: 'Main St',
        [EAddressValues.zipCode]: '75001',
      };

      const result = InputAddress.formatAddressForm(formData);
      expect(result).toEqual({
        city: 'Paris',
        country: 'France',
        floor: '2',
        number: '10',
        placeId: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
        street: 'Main St',
        zipCode: '75001',
      });
    });

    it('should return null for null input', () => {
      expect(InputAddress.formatAddressForm(null)).toBeNull();
    });
  });
});
