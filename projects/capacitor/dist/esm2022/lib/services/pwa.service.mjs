import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export const PWA_CONFIG_KEY = 'config_pwa';
export class TaPwaService {
    constructor(_config) {
        this._config = _config;
        this.isPWaCapability$ = new BehaviorSubject(false);
        if (this._config.active) {
            window.addEventListener('beforeinstallprompt', event => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, deps: [{ token: PWA_CONFIG_KEY }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PWA_CONFIG_KEY]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHdhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL3B3YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRXZDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUM7QUFTM0MsTUFBTSxPQUFPLFlBQVk7SUFLdkIsWUFFVSxPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTnRCLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBUTVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFFTSxlQUFlO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUNNLGFBQWE7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQzsrR0F4QlUsWUFBWSxrQkFNYixjQUFjO21IQU5iLFlBQVksY0FGWCxNQUFNOzs0RkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBT0ksTUFBTTsyQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY29uc3QgUFdBX0NPTkZJR19LRVkgPSAnY29uZmlnX3B3YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVB3YUNvbmZpZyB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhUHdhU2VydmljZSB7XG4gIHB1YmxpYyBpc1BXYUNhcGFiaWxpdHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBfcHJvbXB0RXZlbnQhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQV0FfQ09ORklHX0tFWSlcbiAgICBwcml2YXRlIF9jb25maWc6IElQd2FDb25maWdcbiAgKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hY3RpdmUpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVpbnN0YWxscHJvbXB0JywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLl9wcm9tcHRFdmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmlzUFdhQ2FwYWJpbGl0eSQubmV4dCh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc1BXYUNhcGFiaWxpdHkoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fcHJvbXB0RXZlbnQ7XG4gIH1cbiAgcHVibGljIGxhdW5jaEluc3RhbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Byb21wdEV2ZW50KSB7XG4gICAgICB0aGlzLl9wcm9tcHRFdmVudC5wcm9tcHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==