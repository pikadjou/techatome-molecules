import { OperatingSystem } from '@capacitor/device';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CamDeviceInfoService {
    deviceClasses$: Observable<string[]>;
    os$: Observable<OperatingSystem>;
    private _getInfo$;
    constructor();
    isMobileOs$(): Observable<boolean>;
    isWeb$(): Observable<boolean>;
    isMobileOs(os: OperatingSystem): boolean;
    private _getMobileClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamDeviceInfoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamDeviceInfoService>;
}
