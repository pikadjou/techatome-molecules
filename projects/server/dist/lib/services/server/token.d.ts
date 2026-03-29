import { InjectionToken } from "@angular/core";
import { TenantConfig } from "./interface";
export declare const TENANT_CONFIG_TOKEN: InjectionToken<TenantConfig>;
export type NotificationHandler = (message: string, code: number) => void;
export declare const NOTIFICATION_HANDLER_TOKEN: InjectionToken<NotificationHandler>;
