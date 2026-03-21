import { InputUpload, InputUploadValue } from './upload';

describe('InputUpload', () => {
  it('should create with required options', () => {
    const input = new InputUpload({ key: 'file', label: 'Upload' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('file');
    expect(input.label).toBe('Upload');
    expect(input.controlType).toBe('upload');
    expect(input.confirmButton).toBe(false);
  });

  it('should accept confirmButton option', () => {
    const input = new InputUpload({ key: 'file', confirmButton: true });
    expect(input.confirmButton).toBe(true);
  });

  it('should accept a value array', () => {
    const files: InputUploadValue[] = [
      { id: '1', url: 'http://example.com/file1.pdf', name: 'file1.pdf' },
    ];
    const input = new InputUpload({ key: 'file', value: files });
    expect(input.value).toEqual(files);
  });

  it('should default value to null', () => {
    const input = new InputUpload({ key: 'file' });
    expect(input.value).toBeNull();
  });

  it('should confirmValue by setting formControl value', () => {
    const input = new InputUpload({ key: 'file' });
    input.createFormControl();

    const newFiles: InputUploadValue[] = [
      { id: '2', url: 'http://example.com/file2.pdf' },
    ];
    input.confirmValue(newFiles);
    expect(input.formControl?.value).toEqual(newFiles);
  });

  it('should create formControl', () => {
    const input = new InputUpload({ key: 'file' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
