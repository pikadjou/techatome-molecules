import { Injectable } from '@angular/core';

import { filter, map } from 'rxjs/operators';

import { Device, DeviceInfo, OperatingSystem } from '@capacitor/device';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CamDeviceInfoService {
  public deviceClasses$: Observable<string[]>;
  public os$: Observable<OperatingSystem>;

  private _getInfo$ = new BehaviorSubject<DeviceInfo | null>(null);

  constructor() {
    Device.getInfo().then((deviceInformation) =>
      this._getInfo$.next(deviceInformation)
    );

    this.os$ = this._getInfo$.pipe(
      filter((deviceInfo) => !!deviceInfo),
      map((deviceInfo) => deviceInfo?.operatingSystem ?? 'unknown')
    );

    this.deviceClasses$ = this.os$.pipe(
      map((os) => {
        return [os, this._getMobileClass(os)];
      })
    );
  }

  public isMobileOs$() {
    return this.os$.pipe(map((value) => this.isMobileOs(value)));
  }
  public isWeb$() {
    return this.os$.pipe(map((value) => !this.isMobileOs(value)));
  }

  public isMobileOs(os: OperatingSystem) {
    return os === 'android' || os === 'ios';
  }

  private _getMobileClass(os: OperatingSystem) {
    return this.isMobileOs(os) ? 'mobile-device' : 'desktop-device';
  }
}
