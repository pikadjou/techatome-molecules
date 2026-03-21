import { PluralTranslatePipe } from './plural.pipe';

describe('PluralTranslatePipe', () => {
  let pipe: PluralTranslatePipe;

  beforeEach(() => {
    pipe = new PluralTranslatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return singular key for 0', () => {
    expect(pipe.transform('items', 0)).toBe('items.one');
  });

  it('should return singular key for 1', () => {
    expect(pipe.transform('items', 1)).toBe('items.one');
  });

  it('should return plural key for 2', () => {
    expect(pipe.transform('items', 2)).toBe('items.plural');
  });

  it('should return plural key for large numbers', () => {
    expect(pipe.transform('items', 100)).toBe('items.plural');
  });

  it('should handle nested translation keys', () => {
    expect(pipe.transform('module.section.items', 5)).toBe('module.section.items.plural');
  });
});
