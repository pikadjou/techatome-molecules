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

    // Une recherche Google ou une saisie manuelle laisse volontiers une espace
    // en bordure : chaque consommateur la retirait de son cote.
    it('should trim string fields', () => {
      const result = InputAddress.formatAddressForm({
        [EAddressValues.city]: '  Brussels ',
        [EAddressValues.country]: ' Belgium',
        [EAddressValues.number]: ' 42 ',
        [EAddressValues.street]: '	Main Street  ',
        [EAddressValues.zipCode]: ' 1000 ',
      });

      expect(result).toEqual(
        jasmine.objectContaining({
          city: 'Brussels',
          country: 'Belgium',
          number: '42',
          street: 'Main Street',
          zipCode: '1000',
        })
      );
    });

    it('should leave non-string fields untouched', () => {
      const result = InputAddress.formatAddressForm({
        [EAddressValues.city]: null,
        [EAddressValues.placeId]: 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ',
      });

      expect(result?.city).toBeNull();
      expect(result?.placeId).toBe('ChIJD7fiBh9u5kcRYJSMaMOCCwQ');
    });
  });

  describe('isComplete (static)', () => {
    const full: Partial<IAddressValue> = {
      city: 'Brussels',
      country: 'Belgium',
      number: '42',
      street: 'Main Street',
      zipCode: '1000',
    };

    it('should accept an address carrying every postal part', () => {
      expect(InputAddress.isComplete(full)).toBeTrue();
    });

    // `floor` est facultatif : un immeuble n'en a pas toujours.
    it('should not require the floor', () => {
      expect(InputAddress.isComplete({ ...full, floor: undefined })).toBeTrue();
    });

    // Le cas qui justifie la fonction : `Validators.required` laisse passer une
    // recherche abandonnee en cours de route.
    it('should reject a partial address', () => {
      expect(InputAddress.isComplete({ ...full, number: null })).toBeFalse();
      expect(InputAddress.isComplete({ ...full, street: '' })).toBeFalse();
      expect(InputAddress.isComplete({ ...full, country: '   ' })).toBeFalse();
    });

    it('should reject nothing at all', () => {
      expect(InputAddress.isComplete(null)).toBeFalse();
      expect(InputAddress.isComplete(undefined)).toBeFalse();
    });
  });
});
