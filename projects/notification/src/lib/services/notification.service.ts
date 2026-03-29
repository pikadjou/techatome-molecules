import { Injectable, InjectionToken } from "@angular/core";

import { Subject } from "rxjs";

import { newGuid } from "@ta/utils";

import { ENotificationCode } from "../enum";

export type NotificationItem = {
  id: string;
  message: string;
  code: ENotificationCode;
  persistent: boolean;
};

export const LAZY_SERVICE_TOKEN = new InjectionToken<TaNotificationService>(
  "TaNotificationService"
);

@Injectable({
  providedIn: "root",
})
export class TaNotificationService {
  public id = Math.random();

  public newNotification$ = new Subject<NotificationItem>();

  public removeNotification$ = new Subject<string>();

  constructor() {}

  public addNotification(
    message: string,
    code: ENotificationCode,
    persistent?: boolean
  ) {
    const isPersistent =
      persistent !== undefined ? persistent : code === ENotificationCode.error;

    this.newNotification$.next({
      id: newGuid(),
      message,
      code,
      persistent: isPersistent,
    });
  }

  public removeNotification(id: string) {
    this.removeNotification$.next(id);
  }
}
