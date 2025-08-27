import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export const PWA_CONFIG_KEY = 'config_pwa';
export class CamPwaService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3B3YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFTM0MsTUFBTSxPQUFPLGFBQWE7SUFLeEIsWUFFVSxPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTnRCLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBUTVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUVNLGVBQWU7UUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBQ00sYUFBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDOytHQXhCVSxhQUFhLGtCQU1kLGNBQWM7bUhBTmIsYUFBYSxjQUZaLE1BQU07OzRGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFPSSxNQUFNOzJCQUFDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBQV0FfQ09ORklHX0tFWSA9ICdjb25maWdfcHdhJztcblxuZXhwb3J0IGludGVyZmFjZSBJUHdhQ29uZmlnIHtcbiAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtUHdhU2VydmljZSB7XG4gIHB1YmxpYyBpc1BXYUNhcGFiaWxpdHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBfcHJvbXB0RXZlbnQhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQV0FfQ09ORklHX0tFWSlcbiAgICBwcml2YXRlIF9jb25maWc6IElQd2FDb25maWdcbiAgKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnN0YWxscHJvbXB0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX3Byb21wdEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuaXNQV2FDYXBhYmlsaXR5JC5uZXh0KHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzUFdhQ2FwYWJpbGl0eSgpIHtcbiAgICByZXR1cm4gISF0aGlzLl9wcm9tcHRFdmVudDtcbiAgfVxuICBwdWJsaWMgbGF1bmNoSW5zdGFsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcHJvbXB0RXZlbnQpIHtcbiAgICAgIHRoaXMuX3Byb21wdEV2ZW50LnByb21wdCgpO1xuICAgIH1cbiAgfVxufVxuIl19