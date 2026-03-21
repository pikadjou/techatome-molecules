import { FileMetadata } from './file-metadata';

describe('FileMetadata interface', () => {
  it('should create a valid FileMetadata object', () => {
    const metadata: FileMetadata = {
      creationDate: '2024-01-15T10:30:00Z',
      owner: null,
      fileSize: 512000,
      fileType: { id: 1, translatedValue: 'PDF Document' },
      description: 'Monthly report',
      fileName: 'report-2024-01.pdf',
    };
    expect(metadata.creationDate).toBe('2024-01-15T10:30:00Z');
    expect(metadata.owner).toBeNull();
    expect(metadata.fileSize).toBe(512000);
    expect(metadata.fileType.translatedValue).toBe('PDF Document');
    expect(metadata.description).toBe('Monthly report');
    expect(metadata.fileName).toBe('report-2024-01.pdf');
  });

  it('should accept owner with user data', () => {
    const metadata: FileMetadata = {
      creationDate: '2024-02-20',
      owner: {
        id: 'user-1',
        firstName: 'John',
        lastName: 'Doe',
      } as any,
      fileSize: 1024,
      fileType: { id: 2, translatedValue: 'Excel' },
      description: 'Spreadsheet',
      fileName: 'data.xlsx',
    };
    expect(metadata.owner).toBeTruthy();
    expect(metadata.owner!.firstName).toBe('John');
  });
});
