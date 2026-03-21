import { PreviewDocumentDto } from './type';

describe('PreviewDocumentDto type', () => {
  it('should create a minimal PreviewDocumentDto with url', () => {
    const doc: PreviewDocumentDto = {
      url: 'https://example.com/file.pdf',
    };
    expect(doc.url).toBe('https://example.com/file.pdf');
  });

  it('should create a full PreviewDocumentDto', () => {
    const doc: PreviewDocumentDto = {
      filename: 'report.pdf',
      url: 'https://example.com/report.pdf',
      uploadedDate: '2024-01-15',
      size: 1024000,
    };
    expect(doc.filename).toBe('report.pdf');
    expect(doc.url).toBe('https://example.com/report.pdf');
    expect(doc.uploadedDate).toBe('2024-01-15');
    expect(doc.size).toBe(1024000);
  });

  it('should allow optional fields to be undefined', () => {
    const doc: PreviewDocumentDto = {
      url: 'https://example.com/file.pdf',
    };
    expect(doc.filename).toBeUndefined();
    expect(doc.uploadedDate).toBeUndefined();
    expect(doc.size).toBeUndefined();
  });
});
