import { TestBed } from '@angular/core/testing';

import { TaDevicePositionService } from './device-position.service';

describe('TaDevicePositionService', () => {
  let service: TaDevicePositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaDevicePositionService],
    });
    service = TestBed.inject(TaDevicePositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have currentPosition initially null', () => {
    expect(service.currentPosition).toBeNull();
  });

  it('should have canAccessPosition initially false', () => {
    expect(service.canAccessPosition).toBe(false);
  });

  it('should have fetchCanAccessPosition method', () => {
    expect(service.fetchCanAccessPosition).toBeDefined();
    expect(typeof service.fetchCanAccessPosition).toBe('function');
  });

  it('should have fetchCurrentPosition method', () => {
    expect(service.fetchCurrentPosition).toBeDefined();
    expect(typeof service.fetchCurrentPosition).toBe('function');
  });
});
