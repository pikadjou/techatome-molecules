import { TestBed } from '@angular/core/testing';

import { ReadOnlyContextService } from './read-only-context.service';

describe('ReadOnlyContextService', () => {
  let service: ReadOnlyContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadOnlyContextService],
    });
    service = TestBed.inject(ReadOnlyContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to not read-only', (done) => {
    service.isReadOnly$.subscribe((value) => {
      expect(value).toBe(false);
      done();
    });
  });

  it('should emit true when set to read-only', (done) => {
    service.setReadonly(true);
    service.isReadOnly$.subscribe((value) => {
      expect(value).toBe(true);
      done();
    });
  });

  it('should emit false when set back to writable', (done) => {
    service.setReadonly(true);
    service.setReadonly(false);
    service.isReadOnly$.subscribe((value) => {
      expect(value).toBe(false);
      done();
    });
  });
});
