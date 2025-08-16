import { Injectable, InjectionToken } from '@angular/core';

import { Subject } from 'rxjs';

import { ENotificationCode } from '../enum';

export const LAZY_SERVICE_TOKEN = new InjectionToken<CamNotificationService>(
  'CamNotificationService'
);

@Injectable({
  providedIn: 'root',
})
export class CamNotificationService {
  public id = Math.random();

  public newNotification$ = new Subject<{
    message: string;
    code: ENotificationCode;
  }>();

  constructor() {}

  public addNotification(message: string, code: ENotificationCode) {
    this.newNotification$.next({ message, code });
  }
}
