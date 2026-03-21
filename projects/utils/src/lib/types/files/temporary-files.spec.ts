import { TemporaryFile, FileStructure } from './temporary-files';

describe('TemporaryFile', () => {
  let temporaryFile: TemporaryFile;

  beforeEach(() => {
    temporaryFile = new TemporaryFile();
  });

  it('should create an instance', () => {
    expect(temporaryFile).toBeTruthy();
  });

  it('should start with empty files array', () => {
    expect(temporaryFile.files.length).toBe(0);
  });

  describe('addFiles', () => {
    it('should add files to the list', () => {
      const files: FileStructure[] = [
        { file: new File(['content'], 'test.txt'), localUrl: 'blob:url1' },
      ];
      temporaryFile.addFiles(files);
      expect(temporaryFile.files.length).toBe(1);
    });

    it('should set isLoading to true for added files', () => {
      const files: FileStructure[] = [
        { file: new File(['content'], 'test.txt'), localUrl: 'blob:url1' },
      ];
      temporaryFile.addFiles(files);
      expect(temporaryFile.files[0].isLoading).toBe(true);
    });

    it('should set the url from localUrl', () => {
      const files: FileStructure[] = [
        { file: new File(['content'], 'test.txt'), localUrl: 'blob:url1' },
      ];
      temporaryFile.addFiles(files);
      expect(temporaryFile.files[0].url).toBe('blob:url1');
    });

    it('should accumulate files on multiple adds', () => {
      temporaryFile.addFiles([
        { file: new File(['a'], 'a.txt'), localUrl: 'blob:a' },
      ]);
      temporaryFile.addFiles([
        { file: new File(['b'], 'b.txt'), localUrl: 'blob:b' },
      ]);
      expect(temporaryFile.files.length).toBe(2);
    });

    it('should handle null localUrl', () => {
      const files: FileStructure[] = [{ file: null, localUrl: null }];
      temporaryFile.addFiles(files);
      expect(temporaryFile.files[0].url).toBe('');
    });
  });

  describe('removeFiles', () => {
    it('should remove files by localUrl', () => {
      temporaryFile.addFiles([
        { file: new File(['a'], 'a.txt'), localUrl: 'blob:a' },
        { file: new File(['b'], 'b.txt'), localUrl: 'blob:b' },
      ]);

      temporaryFile.removeFiles([{ file: null, localUrl: 'blob:a' }]);
      expect(temporaryFile.files.length).toBe(1);
      expect(temporaryFile.files[0].url).toBe('blob:b');
    });

    it('should do nothing if file not found', () => {
      temporaryFile.addFiles([
        { file: new File(['a'], 'a.txt'), localUrl: 'blob:a' },
      ]);

      temporaryFile.removeFiles([{ file: null, localUrl: 'blob:nonexistent' }]);
      expect(temporaryFile.files.length).toBe(1);
    });
  });

  describe('removeAll', () => {
    it('should remove all files', () => {
      temporaryFile.addFiles([
        { file: new File(['a'], 'a.txt'), localUrl: 'blob:a' },
        { file: new File(['b'], 'b.txt'), localUrl: 'blob:b' },
      ]);

      temporaryFile.removeAll();
      expect(temporaryFile.files.length).toBe(0);
    });
  });
});
