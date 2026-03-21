import { TestBed } from '@angular/core/testing';

import { TaDeviceInfoService } from './device-info.service';

describe('TaDeviceInfoService', () => {
  let service: TaDeviceInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaDeviceInfoService],
    });
    service = TestBed.inject(TaDeviceInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have deviceClasses$ observable', () => {
    expect(service.deviceClasses$).toBeDefined();
  });

  it('should have os$ observable', () => {
    expect(service.os$).toBeDefined();
  });

  it('should identify android as mobile OS', () => {
    expect(service.isMobileOs('android')).toBe(true);
  });

  it('should identify ios as mobile OS', () => {
    expect(service.isMobileOs('ios')).toBe(true);
  });

  it('should not identify windows as mobile OS', () => {
    expect(service.isMobileOs('windows')).toBe(false);
  });

  it('should not identify mac as mobile OS', () => {
    expect(service.isMobileOs('mac')).toBe(false);
  });

  it('should not identify unknown as mobile OS', () => {
    expect(service.isMobileOs('unknown')).toBe(false);
  });

  it('should return isMobileOs$ observable', () => {
    expect(service.isMobileOs$()).toBeDefined();
  });

  it('should return isWeb$ observable', () => {
    expect(service.isWeb$()).toBeDefined();
  });
});
