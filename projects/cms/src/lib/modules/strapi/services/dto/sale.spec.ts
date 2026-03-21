import { Sale, saleProps } from './sale';

describe('Sale DTO', () => {
  it('should have saleProps GraphSchema defined', () => {
    expect(saleProps).toBeTruthy();
  });

  it('should include Content property', () => {
    expect(saleProps.get('Content')).toBeDefined();
  });

  it('should include base strapi properties', () => {
    expect(saleProps.get('createdAt')).toBeDefined();
    expect(saleProps.get('updatedAt')).toBeDefined();
    expect(saleProps.get('publishedAt')).toBeDefined();
  });
});
