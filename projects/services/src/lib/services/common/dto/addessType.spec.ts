import { AddressType } from './addessType';

describe('AddressType enum', () => {
  it('should have Unknown as 0', () => {
    expect(AddressType.Unknown).toBe(0);
  });

  it('should have Client as 1', () => {
    expect(AddressType.Client).toBe(1);
  });

  it('should have Intervention as 2', () => {
    expect(AddressType.Intervention).toBe(2);
  });

  it('should have Invoicing as 3', () => {
    expect(AddressType.Invoicing).toBe(3);
  });
});
