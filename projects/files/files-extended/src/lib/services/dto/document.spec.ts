import { Document } from './document';

describe('Document interface', () => {
  it('should create a valid Document object', () => {
    const doc: Document = {
      id: 1,
      url: 'https://example.com/file.pdf',
      isOwner: true,
      fileMetadata: {
        creationDate: '2024-01-15',
        owner: null,
        fileSize: 1024,
        fileType: { id: 1, translatedValue: 'PDF' },
        description: 'Test document',
        fileName: 'file.pdf',
      },
    };
    expect(doc.id).toBe(1);
    expect(doc.url).toBe('https://example.com/file.pdf');
    expect(doc.isOwner).toBe(true);
    expect(doc.fileMetadata.fileName).toBe('file.pdf');
  });

  it('should allow null owner in metadata', () => {
    const doc: Document = {
      id: 2,
      url: 'https://example.com/file2.pdf',
      isOwner: false,
      fileMetadata: {
        creationDate: '2024-02-20',
        owner: null,
        fileSize: 2048,
        fileType: { id: 2, translatedValue: 'Word' },
        description: 'Another document',
        fileName: 'file2.docx',
      },
    };
    expect(doc.fileMetadata.owner).toBeNull();
  });
});
