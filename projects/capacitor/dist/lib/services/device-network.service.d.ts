import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CamDeviceNetworkService {
    isConnected$: BehaviorSubject<boolean>;
    private _delayToDisplayNewNotification;
    private _state;
    private _timeoutActive;
    constructor();
    observeNetworkStateChanges(): Promise<void>;
    private _getCurrentNetworkState;
    private _logNetworkStateChanged;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamDeviceNetworkService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamDeviceNetworkService>;
}
