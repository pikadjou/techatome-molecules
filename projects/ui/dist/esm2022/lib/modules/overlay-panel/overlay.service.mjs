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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBOEIsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFeEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFFM0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFtQixlQUFlLENBQUMsQ0FBQztBQUNuRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVMsaUJBQWlCLENBQUMsQ0FBQztBQWtCN0UsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBaUMvQyxZQUNVLE9BQWdCLEVBQ2hCLFFBQWtCO1FBRTFCLEtBQUssRUFBRSxDQUFDO1FBSEEsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBaENYLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU5QyxxQkFBZ0IsR0FBd0I7WUFDdkQ7Z0JBQ0UsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDaEI7WUFDRDtnQkFDRSxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLEtB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VyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQzsrR0E1R1UsY0FBYzttSEFBZCxjQUFjLGNBRmIsTUFBTTs7NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhQmFzZVNlcnZpY2UgfSBmcm9tICdAdGEvc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IE1FTlVfVEVNUExBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGVtcGxhdGVSZWY8YW55Pj4oJ01FTlVfVEVNUExBVEUnKTtcbmV4cG9ydCBjb25zdCBNRU5VX01BWF9IRUlHSFQgPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPignTUVOVV9NQVhfSEVJR0hUJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheU1lbnVDb25maWc8VCA9IGFueT4ge1xuICBtZW51Q29tcG9uZW50PzogVHlwZTxUPjtcbiAgdHJpZ2dlckVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcbiAgdGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgbWF0Y2hUcmlnZ2VyV2lkdGg/OiBib29sZWFuO1xuICBwb3NpdGlvbnM/OiBDb25uZWN0ZWRQb3NpdGlvbltdO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBtYXhIZWlnaHQ/OiBudW1iZXI7XG4gIG1hbnVhbFRyaWdnZXI/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZj86IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgX29uQ2xvc2VDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX29uQ2xvc2VTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHVibGljIHJlYWRvbmx5IG9uQ2xvc2UkID0gdGhpcy5fb25DbG9zZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0UG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG9wZW5NZW51PFQ+KGNvbmZpZzogT3ZlcmxheU1lbnVDb25maWc8VD4pIHtcbiAgICBjb25zdCB7XG4gICAgICBtZW51Q29tcG9uZW50LFxuICAgICAgdHJpZ2dlckVsZW1lbnQsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICAgIG9uQ2xvc2UsXG4gICAgICBtYXRjaFRyaWdnZXJXaWR0aCA9IHRydWUsXG4gICAgICBwb3NpdGlvbnMgPSB0aGlzLmRlZmF1bHRQb3NpdGlvbnMsXG4gICAgICBvZmZzZXRYID0gMixcbiAgICAgIG9mZnNldFkgPSAyLFxuICAgICAgbWF4SGVpZ2h0LFxuICAgIH0gPSBjb25maWc7XG5cbiAgICBpZiAoIXRyaWdnZXJFbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnT3ZlcmxheVNlcnZpY2U6IHRyaWdnZXJFbGVtZW50IGlzIHJlcXVpcmVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW1lbnVDb21wb25lbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdPdmVybGF5U2VydmljZTogbWVudUNvbXBvbmVudCBpcyByZXF1aXJlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmPy5kaXNwb3NlKCk7XG4gICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gb25DbG9zZTtcblxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0cmlnZ2VyRWxlbWVudClcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKHRydWUpXG4gICAgICAud2l0aFB1c2godHJ1ZSlcbiAgICAgIC53aXRoRGVmYXVsdE9mZnNldFgob2Zmc2V0WClcbiAgICAgIC53aXRoRGVmYXVsdE9mZnNldFkob2Zmc2V0WSlcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiAnY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AnLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgICB3aWR0aDogbWF0Y2hUcmlnZ2VyV2lkdGggPyB0cmlnZ2VyRWxlbWVudC5jbGllbnRXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbih0aGlzLl9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZU1lbnUoKSkpO1xuXG4gICAgY29uc3QgcG9ydGFsSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogT3ZlcmxheVJlZiwgdXNlVmFsdWU6IHRoaXMuX292ZXJsYXlSZWYgfSxcbiAgICAgICAgeyBwcm92aWRlOiBNRU5VX1RFTVBMQVRFLCB1c2VWYWx1ZTogdGVtcGxhdGUgfSxcbiAgICAgICAgeyBwcm92aWRlOiBNRU5VX01BWF9IRUlHSFQsIHVzZVZhbHVlOiBtYXhIZWlnaHQgfSxcbiAgICAgIF0sXG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKG1lbnVDb21wb25lbnQsIG51bGwsIHBvcnRhbEluamVjdG9yKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChwb3J0YWwpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlTWVudSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2xvc2VTdWJqZWN0Lm5leHQoKTtcblxuICAgIGlmICh0aGlzLl9vbkNsb3NlQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19