import { TestBed } from '@angular/core/testing';

import { TaReadOnlyContextService } from '@lib/utils/service/read-only-context.service';

describe('TaReadOnlyContextService', () => {
  let service: TaReadOnlyContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaReadOnlyContextService],
    });
    service = TestBed.inject(TaReadOnlyContextService);
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
