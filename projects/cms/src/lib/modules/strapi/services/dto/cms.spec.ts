import { Cms, cmsProps } from './cms';

describe('Cms DTO', () => {
  it('should have cmsProps GraphSchema defined', () => {
    expect(cmsProps).toBeTruthy();
  });

  it('should include Title property', () => {
    expect(cmsProps.get('Title')).toBeDefined();
  });

  it('should include Description property', () => {
    expect(cmsProps.get('Description')).toBeDefined();
  });

  it('should include Type property', () => {
    expect(cmsProps.get('Type')).toBeDefined();
  });

  it('should include base strapi properties', () => {
    expect(cmsProps.get('createdAt')).toBeDefined();
    expect(cmsProps.get('updatedAt')).toBeDefined();
    expect(cmsProps.get('publishedAt')).toBeDefined();
  });
});
