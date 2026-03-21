import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should join array with default separator', () => {
    expect(pipe.transform(['a', 'b', 'c'])).toBe('a, b, c');
  });

  it('should join array with custom separator', () => {
    expect(pipe.transform(['a', 'b', 'c'], ' | ')).toBe('a | b | c');
  });

  it('should return single element as string', () => {
    expect(pipe.transform(['hello'])).toBe('hello');
  });

  it('should return empty string for empty array', () => {
    expect(pipe.transform([])).toBe('');
  });

  it('should join numbers as strings', () => {
    expect(pipe.transform([1, 2, 3])).toBe('1, 2, 3');
  });

  it('should handle dash separator', () => {
    expect(pipe.transform(['a', 'b'], '-')).toBe('a-b');
  });
});
