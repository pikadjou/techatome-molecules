import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare const PWA_CONFIG_KEY = "config_pwa";
export interface IPwaConfig {
    active: boolean;
}
export declare class TaPwaService {
    private _config;
    isPWaCapability$: BehaviorSubject<boolean>;
    private _promptEvent;
    constructor(_config: IPwaConfig);
    isPWaCapability(): boolean;
    launchInstall(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaPwaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaPwaService>;
}
