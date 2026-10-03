import { of } from 'rxjs';

import { AddressLocality } from '@ta/utils';

import { InputLocality } from '@lib/form-model/models/input/locality';

describe('InputLocality', () => {
  const ixelles: AddressLocality = {
    city: 'Ixelles',
    country: 'BE',
    latitude: null,
    longitude: null,
    zipCode: '1050',
  };

  it('should create with defaults', () => {
    const input = new InputLocality({ key: 'zone', label: 'Zone' });
    expect(input.controlType).toBe('locality');
    expect(input.type).toBe('locality');
    expect(input.multiple).toBeFalse();
    expect(input.country$).toBeNull();
    expect(input.value).toBeNull();
  });

  it('should keep the options given', () => {
    const country$ = of('FR');
    const input = new InputLocality<AddressLocality[]>({
      country$,
      key: 'zones',
      multiple: true,
      value: [ixelles],
    });
    expect(input.multiple).toBeTrue();
    expect(input.country$).toBe(country$);
    expect(input.value).toEqual([ixelles]);
  });

  // L'identifiant doit rester stable entre la liste, la valeur préremplie et la sélection.
  it('should identify a locality by zip code and city', () => {
    expect(InputLocality.localityId(ixelles)).toBe('1050__Ixelles');
    expect(InputLocality.localityId({ city: 'Ixelles', zipCode: '1050' })).toBe('1050__Ixelles');
  });
});
