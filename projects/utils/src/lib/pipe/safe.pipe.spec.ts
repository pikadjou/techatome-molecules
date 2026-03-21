import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  let pipe: SafePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafePipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should bypass security for html type', () => {
    const result = pipe.transform('<b>bold</b>', 'html');
    expect(result).toBeTruthy();
  });

  it('should bypass security for style type', () => {
    const result = pipe.transform('color: red', 'style');
    expect(result).toBeTruthy();
  });

  it('should bypass security for script type', () => {
    const result = pipe.transform('alert("test")', 'script');
    expect(result).toBeTruthy();
  });

  it('should bypass security for url type', () => {
    const result = pipe.transform('https://example.com', 'url');
    expect(result).toBeTruthy();
  });

  it('should bypass security for resourceUrl type', () => {
    const result = pipe.transform('https://example.com/resource', 'resourceUrl');
    expect(result).toBeTruthy();
  });

  it('should throw error for invalid type', () => {
    expect(() => pipe.transform('value', 'invalid')).toThrowError(
      'Invalid safe type specified: invalid'
    );
  });
});
