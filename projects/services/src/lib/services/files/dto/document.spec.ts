import { documentProps, DocumentDto } from './document';

describe('DocumentDto GraphSchema', () => {
  it('should have documentProps with all expected fields', () => {
    expect(documentProps.get('id')).toBe('id');
    expect(documentProps.get('url')).toBe('url');
    expect(documentProps.get('description')).toBe('description');
    expect(documentProps.get('createdDate')).toBe('createdDate');
    expect(documentProps.get('size')).toBe('size');
  });
});
