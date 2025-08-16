import { Injectable } from '@angular/core';

import { Geolocation, Position } from '@capacitor/geolocation';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CamDevicePositionService {
  private _currentPosition$ = new BehaviorSubject<Position | null>(null);
  private _canAccessPosition$ = new BehaviorSubject<boolean>(false);

  get currentPosition() {
    return this._currentPosition$.getValue();
  }

  get canAccessPosition() {
    return this._canAccessPosition$.getValue();
  }

  constructor() {}

  public fetchCanAccessPosition() {
    Geolocation.checkPermissions().then((permissionStatus) =>
      this._canAccessPosition$.next(permissionStatus.location !== 'denied')
    );
  }

  public fetchCurrentPosition() {
    Geolocation.getCurrentPosition().then((position) => {
      this._currentPosition$.next(position);
    });
  }
}
