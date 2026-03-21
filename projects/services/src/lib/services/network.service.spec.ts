import { TestBed } from '@angular/core/testing';

import { BehaviorSubject } from 'rxjs';

import { TaNotificationService, ENotificationCode } from '@ta/notification';
import { TaDeviceNetworkService } from '@ta/capacitor';

import { NetworkService } from './network.service';

describe('NetworkService', () => {
  let service: NetworkService;
  let mockNotificationService: jasmine.SpyObj<TaNotificationService>;
  let mockDeviceNetworkService: { isConnected$: BehaviorSubject<boolean> };

  beforeEach(() => {
    mockNotificationService = jasmine.createSpyObj('TaNotificationService', ['addNotification']);
    mockDeviceNetworkService = {
      isConnected$: new BehaviorSubject<boolean>(true),
    };

    TestBed.configureTestingModule({
      providers: [
        NetworkService,
        { provide: TaNotificationService, useValue: mockNotificationService },
        { provide: TaDeviceNetworkService, useValue: mockDeviceNetworkService },
      ],
    });
    service = TestBed.inject(NetworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should display connected notification when network is connected', () => {
    expect(mockNotificationService.addNotification).toHaveBeenCalledWith(
      'network.connected',
      ENotificationCode.success
    );
  });

  it('should display disconnected notification when network is disconnected', () => {
    mockNotificationService.addNotification.calls.reset();
    mockDeviceNetworkService.isConnected$.next(false);

    expect(mockNotificationService.addNotification).toHaveBeenCalledWith(
      'network.disconnected',
      ENotificationCode.error
    );
  });

  it('should react to connectivity changes', () => {
    mockNotificationService.addNotification.calls.reset();

    mockDeviceNetworkService.isConnected$.next(false);
    expect(mockNotificationService.addNotification).toHaveBeenCalledWith(
      'network.disconnected',
      ENotificationCode.error
    );

    mockNotificationService.addNotification.calls.reset();
    mockDeviceNetworkService.isConnected$.next(true);
    expect(mockNotificationService.addNotification).toHaveBeenCalledWith(
      'network.connected',
      ENotificationCode.success
    );
  });
});
