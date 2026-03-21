import { of } from 'rxjs';

import { UploadDocumentData } from './upload-document-data';

describe('UploadDocumentData interface', () => {
  it('should create a valid UploadDocumentData object', () => {
    const data: UploadDocumentData = {
      description: 'Test description',
      documentTypes$: of([
        { id: 1, translatedValue: 'Invoice' },
        { id: 2, translatedValue: 'Contract' },
      ]),
    };
    expect(data.description).toBe('Test description');
    expect(data.documentTypes$).toBeDefined();
  });

  it('should allow optional description', () => {
    const data: UploadDocumentData = {
      documentTypes$: of([]),
    };
    expect(data.description).toBeUndefined();
  });
});
