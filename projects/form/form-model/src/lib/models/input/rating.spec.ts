import { InputRating } from './rating';

describe('InputRating', () => {
  it('should create with defaults', () => {
    const input = new InputRating({ key: 'score', label: 'Score' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('score');
    expect(input.label).toBe('Score');
    expect(input.controlType).toBe('rating');
    expect(input.max).toBe(5);
    expect(input.size).toBe(24);
    expect(input.allowHalf).toBe(false);
    expect(input.readonly).toBe(false);
  });

  it('should accept custom max', () => {
    const input = new InputRating({ key: 'score', max: 10 });
    expect(input.max).toBe(10);
  });

  it('should accept custom size', () => {
    const input = new InputRating({ key: 'score', size: 32 });
    expect(input.size).toBe(32);
  });

  it('should accept allowHalf', () => {
    const input = new InputRating({ key: 'score', allowHalf: true });
    expect(input.allowHalf).toBe(true);
  });

  it('should accept readonly', () => {
    const input = new InputRating({ key: 'score', readonly: true });
    expect(input.readonly).toBe(true);
  });

  it('should accept a value', () => {
    const input = new InputRating({ key: 'score', value: 4 });
    expect(input.value).toBe(4);
  });

  it('should default value to null', () => {
    const input = new InputRating({ key: 'score' });
    expect(input.value).toBeNull();
  });

  it('should create formControl', () => {
    const input = new InputRating({ key: 'score', value: 3 });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe(3);
  });
});
