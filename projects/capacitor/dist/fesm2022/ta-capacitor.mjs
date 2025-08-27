import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Device } from '@capacitor/device';
import { BehaviorSubject } from 'rxjs';
import { Network } from '@capacitor/network';
import { Logger } from '@ta/server';
import { Geolocation } from '@capacitor/geolocation';

class CamDeviceInfoService {
    constructor() {
        this._getInfo$ = new BehaviorSubject(null);
        Device.getInfo().then((deviceInformation) => this._getInfo$.next(deviceInformation));
        this.os$ = this._getInfo$.pipe(filter((deviceInfo) => !!deviceInfo), map((deviceInfo) => deviceInfo?.operatingSystem ?? 'unknown'));
        this.deviceClasses$ = this.os$.pipe(map((os) => {
            return [os, this._getMobileClass(os)];
        }));
    }
    isMobileOs$() {
        return this.os$.pipe(map((value) => this.isMobileOs(value)));
    }
    isWeb$() {
        return this.os$.pipe(map((value) => !this.isMobileOs(value)));
    }
    isMobileOs(os) {
        return os === 'android' || os === 'ios';
    }
    _getMobileClass(os) {
        return this.isMobileOs(os) ? 'mobile-device' : 'desktop-device';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceInfoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceInfoService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceInfoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class CamDeviceNetworkService {
    constructor() {
        this.isConnected$ = new BehaviorSubject(false);
        this._delayToDisplayNewNotification = 10 * 1000; // in ms
        this._state = true;
        this._timeoutActive = null;
    }
    async observeNetworkStateChanges() {
        // save the current
        this._state = await this._getCurrentNetworkState();
        Network.addListener('networkStatusChange', async (currentState) => {
            if (this._state === currentState.connected) {
                return;
            }
            this._logNetworkStateChanged(currentState.connected);
            this._state = currentState.connected;
            if (this._timeoutActive) {
                clearTimeout(this._timeoutActive);
                this._timeoutActive = null;
                return;
            }
            this._timeoutActive = setTimeout(async () => {
                this.isConnected$.next(currentState.connected);
                this._logNetworkStateChanged(currentState.connected, true);
                this._timeoutActive = null;
            }, this._delayToDisplayNewNotification);
        });
    }
    async _getCurrentNetworkState() {
        return (await Network.getStatus()).connected;
    }
    _logNetworkStateChanged(isConnected, canDisplayNotification = false) {
        if (isConnected)
            Logger.LogWarning(`[Network] connection restored ${canDisplayNotification ? '[notification] send' : ''}`);
        else
            Logger.LogWarning(`[Network] connection lost ${canDisplayNotification ? '[notification] send' : ''}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceNetworkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceNetworkService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDeviceNetworkService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class CamDevicePositionService {
    get currentPosition() {
        return this._currentPosition$.getValue();
    }
    get canAccessPosition() {
        return this._canAccessPosition$.getValue();
    }
    constructor() {
        this._currentPosition$ = new BehaviorSubject(null);
        this._canAccessPosition$ = new BehaviorSubject(false);
    }
    fetchCanAccessPosition() {
        Geolocation.checkPermissions().then((permissionStatus) => this._canAccessPosition$.next(permissionStatus.location !== 'denied'));
    }
    fetchCurrentPosition() {
        Geolocation.getCurrentPosition().then((position) => {
            this._currentPosition$.next(position);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDevicePositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDevicePositionService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDevicePositionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const PWA_CONFIG_KEY = 'config_pwa';
class CamPwaService {
    constructor(_config) {
        this._config = _config;
        this.isPWaCapability$ = new BehaviorSubject(false);
        if (this._config.active) {
            window.addEventListener('beforeinstallprompt', (event) => {
                this._promptEvent = event;
                this.isPWaCapability$.next(true);
            });
        }
    }
    isPWaCapability() {
        return !!this._promptEvent;
    }
    launchInstall() {
        if (this._promptEvent) {
            this._promptEvent.prompt();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamPwaService, deps: [{ token: PWA_CONFIG_KEY }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamPwaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamPwaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PWA_CONFIG_KEY]
                }] }] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 */
class CamCapacitorModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCapacitorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamCapacitorModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCapacitorModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCapacitorModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                }]
        }] });

/*
 * Public API Surface of capacitor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CamCapacitorModule, CamDeviceInfoService, CamDeviceNetworkService, CamDevicePositionService, CamPwaService, PWA_CONFIG_KEY };
//# sourceMappingURL=ta-capacitor.mjs.map
