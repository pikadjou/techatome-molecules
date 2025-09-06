import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import { ENotificationCode } from '../enum';
import * as i0 from "@angular/core";
export declare const LAZY_SERVICE_TOKEN: InjectionToken<TaNotificationService>;
export declare class TaNotificationService {
    id: number;
    newNotification$: Subject<{
        message: string;
        code: ENotificationCode;
    }>;
    constructor();
    addNotification(message: string, code: ENotificationCode): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaNotificationService>;
}
