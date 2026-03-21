import { baseStrapiProps } from './base';

describe('baseStrapiProps', () => {
  it('should contain createdAt', () => {
    expect(baseStrapiProps).toContain('createdAt');
  });

  it('should contain updatedAt', () => {
    expect(baseStrapiProps).toContain('updatedAt');
  });

  it('should contain publishedAt', () => {
    expect(baseStrapiProps).toContain('publishedAt');
  });

  it('should have exactly 3 properties', () => {
    expect(baseStrapiProps.length).toBe(3);
  });
});
