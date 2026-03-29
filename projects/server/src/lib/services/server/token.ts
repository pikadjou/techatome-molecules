import { InjectionToken } from "@angular/core";

import { TenantConfig } from "./interface";

export const TENANT_CONFIG_TOKEN = new InjectionToken<TenantConfig>(
  "TenantConfig"
);

export type NotificationHandler = (message: string, code: number) => void;

export const NOTIFICATION_HANDLER_TOKEN =
  new InjectionToken<NotificationHandler>("NotificationHandler");
