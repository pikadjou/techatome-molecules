import { TestBed } from '@angular/core/testing';

import { TaDeviceNetworkService } from './device-network.service';

describe('TaDeviceNetworkService', () => {
  let service: TaDeviceNetworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaDeviceNetworkService],
    });
    service = TestBed.inject(TaDeviceNetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have isConnected$ BehaviorSubject initialized to false', () => {
    expect(service.isConnected$).toBeDefined();
    expect(service.isConnected$.getValue()).toBe(false);
  });

  it('should have observeNetworkStateChanges method', () => {
    expect(service.observeNetworkStateChanges).toBeDefined();
    expect(typeof service.observeNetworkStateChanges).toBe('function');
  });
});
