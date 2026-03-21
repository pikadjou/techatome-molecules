import { TestBed } from '@angular/core/testing';

import { TaSharedMenuService } from './menu.service';

describe('TaSharedMenuService', () => {
  let service: TaSharedMenuService;

  beforeEach(() => {
    localStorage.removeItem('isMinimizedMenu');
    TestBed.configureTestingModule({
      providers: [TaSharedMenuService],
    });
    service = TestBed.inject(TaSharedMenuService);
  });

  afterEach(() => {
    localStorage.removeItem('isMinimizedMenu');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize isMinimized$ from localStorage', () => {
    expect(service.isMinimized$.getValue()).toBeFalse();
  });

  it('should read true from localStorage when stored as "1"', () => {
    localStorage.setItem('isMinimizedMenu', '1');

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [TaSharedMenuService],
    });
    const freshService = TestBed.inject(TaSharedMenuService);
    expect(freshService.isMinimized$.getValue()).toBeTrue();
  });

  it('should persist isMinimized state to localStorage', () => {
    service.isMinimized$.next(true);
    expect(localStorage.getItem('isMinimizedMenu')).toBe('1');

    service.isMinimized$.next(false);
    expect(localStorage.getItem('isMinimizedMenu')).toBe('0');
  });

  it('should emit changes to subscribers', (done) => {
    const values: boolean[] = [];
    service.isMinimized$.subscribe((value) => {
      values.push(value);
      if (values.length === 3) {
        expect(values).toEqual([false, true, false]);
        done();
      }
    });

    service.isMinimized$.next(true);
    service.isMinimized$.next(false);
  });
});
