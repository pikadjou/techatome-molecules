import { Position } from '@capacitor/geolocation';
import * as i0 from "@angular/core";
export declare class CamDevicePositionService {
    private _currentPosition$;
    private _canAccessPosition$;
    get currentPosition(): Position | null;
    get canAccessPosition(): boolean;
    constructor();
    fetchCanAccessPosition(): void;
    fetchCurrentPosition(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamDevicePositionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamDevicePositionService>;
}
