import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { TaBaseService } from '@ta/server';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export const MENU_TEMPLATE = new InjectionToken('MENU_TEMPLATE');
export const MENU_MAX_HEIGHT = new InjectionToken('MENU_MAX_HEIGHT');
export class OverlayService extends TaBaseService {
    constructor(overlay, injector) {
        super();
        this.overlay = overlay;
        this.injector = injector;
        this._onCloseSubject = new Subject();
        this.onClose$ = this._onCloseSubject.asObservable();
        this.defaultPositions = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom',
            },
        ];
    }
    openMenu(config) {
        const { menuComponent, triggerElement, template, onClose, matchTriggerWidth = true, positions = this.defaultPositions, offsetX = 2, offsetY = 2, maxHeight, } = config;
        if (!triggerElement) {
            console.log('OverlayService: triggerElement is required.');
            return;
        }
        if (!menuComponent) {
            console.log('OverlayService: menuComponent is required.');
            return;
        }
        this._overlayRef?.dispose();
        this._onCloseCallback = onClose;
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(triggerElement)
            .withFlexibleDimensions(true)
            .withPush(true)
            .withDefaultOffsetX(offsetX)
            .withDefaultOffsetY(offsetY)
            .withPositions(positions);
        this._overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            width: matchTriggerWidth ? triggerElement.clientWidth : undefined,
        });
        this._registerSubscription(this._overlayRef.backdropClick().subscribe(() => this.closeMenu()));
        const portalInjector = Injector.create({
            providers: [
                { provide: OverlayRef, useValue: this._overlayRef },
                { provide: MENU_TEMPLATE, useValue: template },
                { provide: MENU_MAX_HEIGHT, useValue: maxHeight },
            ],
            parent: this.injector,
        });
        const portal = new ComponentPortal(menuComponent, null, portalInjector);
        this._overlayRef.attach(portal);
    }
    closeMenu() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = undefined;
        }
        this._onCloseSubject.next();
        if (this._onCloseCallback) {
            this._onCloseCallback();
            this._onCloseCallback = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OverlayService, deps: [{ token: i1.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OverlayService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Overlay }, { type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBOEIsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFFM0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFtQixlQUFlLENBQUMsQ0FBQztBQUNuRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVMsaUJBQWlCLENBQUMsQ0FBQztBQWlCN0UsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBaUMvQyxZQUNVLE9BQWdCLEVBQ2hCLFFBQWtCO1FBRTFCLEtBQUssRUFBRSxDQUFDO1FBSEEsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBaENYLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU5QyxxQkFBZ0IsR0FBd0I7WUFDdkQ7Z0JBQ0UsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDaEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLEtB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VyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQzsrR0E1R1UsY0FBYzttSEFBZCxjQUFjLGNBRmIsTUFBTTs7NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhQmFzZVNlcnZpY2UgfSBmcm9tICdAdGEvc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IE1FTlVfVEVNUExBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGVtcGxhdGVSZWY8YW55Pj4oJ01FTlVfVEVNUExBVEUnKTtcbmV4cG9ydCBjb25zdCBNRU5VX01BWF9IRUlHSFQgPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPignTUVOVV9NQVhfSEVJR0hUJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheU1lbnVDb25maWc8VCA9IGFueT4ge1xuICBtZW51Q29tcG9uZW50PzogVHlwZTxUPjtcbiAgdHJpZ2dlckVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgdGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgbWF0Y2hUcmlnZ2VyV2lkdGg/OiBib29sZWFuO1xuICBwb3NpdGlvbnM/OiBDb25uZWN0ZWRQb3NpdGlvbltdO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBtYXhIZWlnaHQ/OiBudW1iZXI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5U2VydmljZSBleHRlbmRzIFRhQmFzZVNlcnZpY2Uge1xuICBwcml2YXRlIF9vdmVybGF5UmVmPzogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBfb25DbG9zZUNhbGxiYWNrPzogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfb25DbG9zZVN1YmplY3QgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwdWJsaWMgcmVhZG9ubHkgb25DbG9zZSQgPSB0aGlzLl9vbkNsb3NlU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRQb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10gPSBbXG4gICAge1xuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblg6ICdlbmQnLFxuICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb3Blbk1lbnU8VD4oY29uZmlnOiBPdmVybGF5TWVudUNvbmZpZzxUPikge1xuICAgIGNvbnN0IHtcbiAgICAgIG1lbnVDb21wb25lbnQsXG4gICAgICB0cmlnZ2VyRWxlbWVudCxcbiAgICAgIHRlbXBsYXRlLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG1hdGNoVHJpZ2dlcldpZHRoID0gdHJ1ZSxcbiAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZGVmYXVsdFBvc2l0aW9ucyxcbiAgICAgIG9mZnNldFggPSAyLFxuICAgICAgb2Zmc2V0WSA9IDIsXG4gICAgICBtYXhIZWlnaHQsXG4gICAgfSA9IGNvbmZpZztcblxuICAgIGlmICghdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPdmVybGF5U2VydmljZTogdHJpZ2dlckVsZW1lbnQgaXMgcmVxdWlyZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbWVudUNvbXBvbmVudCkge1xuICAgICAgY29uc29sZS5sb2coJ092ZXJsYXlTZXJ2aWNlOiBtZW51Q29tcG9uZW50IGlzIHJlcXVpcmVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX292ZXJsYXlSZWY/LmRpc3Bvc2UoKTtcbiAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPSBvbkNsb3NlO1xuXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRyaWdnZXJFbGVtZW50KVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnModHJ1ZSlcbiAgICAgIC53aXRoUHVzaCh0cnVlKVxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WChvZmZzZXRYKVxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WShvZmZzZXRZKVxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcbiAgICAgIGJhY2tkcm9wQ2xhc3M6ICdjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCcsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICAgIHdpZHRoOiBtYXRjaFRyaWdnZXJXaWR0aCA/IHRyaWdnZXJFbGVtZW50LmNsaWVudFdpZHRoIDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlTWVudSgpKSk7XG5cbiAgICBjb25zdCBwb3J0YWxJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPdmVybGF5UmVmLCB1c2VWYWx1ZTogdGhpcy5fb3ZlcmxheVJlZiB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1FTlVfVEVNUExBVEUsIHVzZVZhbHVlOiB0ZW1wbGF0ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1FTlVfTUFYX0hFSUdIVCwgdXNlVmFsdWU6IG1heEhlaWdodCB9LFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvcixcbiAgICB9KTtcblxuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwobWVudUNvbXBvbmVudCwgbnVsbCwgcG9ydGFsSW5qZWN0b3IpO1xuICAgIHRoaXMuX292ZXJsYXlSZWYuYXR0YWNoKHBvcnRhbCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2VNZW51KCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5fb25DbG9zZVN1YmplY3QubmV4dCgpO1xuXG4gICAgaWYgKHRoaXMuX29uQ2xvc2VDYWxsYmFjaykge1xuICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=