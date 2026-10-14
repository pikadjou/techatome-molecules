import { Injectable, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { TaDeviceNetworkService } from "@ta/capacitor";
import { ENotificationCode, TaNotificationService } from "@ta/notification";

@Injectable({
  providedIn: "root",
})
export class TaNetworkService {
  private readonly _notificationService = inject(TaNotificationService);
  private readonly _deviceNetworkService = inject(TaDeviceNetworkService);

  constructor() {
    this._deviceNetworkService.isConnected$
      .pipe(takeUntilDestroyed())
      .subscribe((isConnected) => this._displayNotification(isConnected));
  }

  private _displayNotification(isConnected: boolean): void {
    this._notificationService.addNotification(
      isConnected ? "network.connected" : "network.disconnected",
      isConnected ? ENotificationCode.success : ENotificationCode.error
    );
  }
}
