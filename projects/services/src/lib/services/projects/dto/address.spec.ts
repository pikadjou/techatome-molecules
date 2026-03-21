import { addressProps } from './address';

describe('Address GraphSchema', () => {
  it('should have addressProps with all expected fields', () => {
    expect(addressProps.get('id')).toBe('id');
    expect(addressProps.get('country')).toBe('country');
    expect(addressProps.get('city')).toBe('city');
    expect(addressProps.get('postCode')).toBe('postCode');
    expect(addressProps.get('street')).toBe('street');
  });
});
