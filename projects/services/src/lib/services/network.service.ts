import { Injectable } from '@angular/core';

import { CamDeviceNetworkService } from '@camelot/capacitor';
import {
  CamNotificationService,
  ENotificationCode,
} from '@camelot/notification';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(
    private _notificationService: CamNotificationService,
    private _deviceNetworkService: CamDeviceNetworkService
  ) {
    this._deviceNetworkService.isConnected$.subscribe((isConnected) =>
      this._displayNotification(isConnected)
    );
  }

  private _displayNotification(isConnected: boolean): void {
    this._notificationService.addNotification(
      isConnected ? 'network.connected' : 'network.disconnected',
      isConnected ? ENotificationCode.success : ENotificationCode.error
    );
  }
}
