import { FileSizePipe } from './file-size.pipe';

describe('FileSizePipe', () => {
  let pipe: FileSizePipe;

  beforeEach(() => {
    pipe = new FileSizePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string for null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should format bytes', () => {
    expect(pipe.transform(500)).toBe('500 B');
  });

  it('should format kilobytes', () => {
    const result = pipe.transform(1024);
    expect(result).toContain('KB');
  });

  it('should format megabytes', () => {
    const result = pipe.transform(1048576);
    expect(result).toContain('MB');
  });

  it('should format gigabytes', () => {
    const result = pipe.transform(1073741824);
    expect(result).toContain('GB');
  });

  it('should use long form when specified', () => {
    const result = pipe.transform(500, true);
    expect(result).toContain('Bytes');
  });

  it('should use long form for kilobytes', () => {
    const result = pipe.transform(1024, true);
    expect(result).toContain('Kilobytes');
  });

  it('should round to 2 decimal places', () => {
    const result = pipe.transform(1536);
    expect(result).toBe('1.5 KB');
  });
});
