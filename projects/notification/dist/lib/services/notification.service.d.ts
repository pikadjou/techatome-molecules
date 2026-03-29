import { InjectionToken } from "@angular/core";
import { Subject } from "rxjs";
import { ENotificationCode } from "../enum";
import * as i0 from "@angular/core";
export type NotificationItem = {
    id: string;
    message: string;
    code: ENotificationCode;
    persistent: boolean;
};
export declare const LAZY_SERVICE_TOKEN: InjectionToken<TaNotificationService>;
export declare class TaNotificationService {
    id: number;
    newNotification$: Subject<NotificationItem>;
    removeNotification$: Subject<string>;
    constructor();
    addNotification(message: string, code: ENotificationCode, persistent?: boolean): void;
    removeNotification(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaNotificationService>;
}
