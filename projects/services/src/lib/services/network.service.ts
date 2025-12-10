import { Injectable } from "@angular/core";

import { TaDeviceNetworkService } from "@ta/capacitor";
import { ENotificationCode, TaNotificationService } from "@ta/notification";

@Injectable({
  providedIn: "root",
})
export class NetworkService {
  constructor(
    private _notificationService: TaNotificationService,
    private _deviceNetworkService: TaDeviceNetworkService
  ) {
    this._deviceNetworkService.isConnected$.subscribe((isConnected) =>
      this._displayNotification(isConnected)
    );
  }

  private _displayNotification(isConnected: boolean): void {
    this._notificationService.addNotification(
      isConnected ? "network.connected" : "network.disconnected",
      isConnected ? ENotificationCode.success : ENotificationCode.error
    );
  }
}
