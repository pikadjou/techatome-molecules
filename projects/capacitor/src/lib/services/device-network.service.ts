import { Injectable } from '@angular/core';

import { Network } from '@capacitor/network';
import { Logger } from '@ta/server';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CamDeviceNetworkService {
  public isConnected$ = new BehaviorSubject<boolean>(false);

  private _delayToDisplayNewNotification: number = 10 * 1000; // in ms
  private _state: boolean = true;
  private _timeoutActive: NodeJS.Timeout | null = null;

  constructor() {}

  public async observeNetworkStateChanges() {
    // save the current
    this._state = await this._getCurrentNetworkState();

    Network.addListener('networkStatusChange', async (currentState: { connected: boolean }) => {
      if (this._state === currentState.connected) {
        return;
      }
      this._logNetworkStateChanged(currentState.connected);
      this._state = currentState.connected;

      if (this._timeoutActive) {
        clearTimeout(this._timeoutActive);
        this._timeoutActive = null;
        return;
      }
      this._timeoutActive = setTimeout(async () => {
        this.isConnected$.next(currentState.connected);
        this._logNetworkStateChanged(currentState.connected, true);
        this._timeoutActive = null;
      }, this._delayToDisplayNewNotification);
    });
  }

  private async _getCurrentNetworkState() {
    return (await Network.getStatus()).connected;
  }

  private _logNetworkStateChanged(isConnected: boolean, canDisplayNotification: boolean = false): void {
    if (isConnected)
      Logger.LogWarning(`[Network] connection restored ${canDisplayNotification ? '[notification] send' : ''}`);
    else Logger.LogWarning(`[Network] connection lost ${canDisplayNotification ? '[notification] send' : ''}`);
  }
}
