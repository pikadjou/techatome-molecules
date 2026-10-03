import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { inject, Injectable, InjectionToken, Injector, } from "@angular/core";
import { Subject } from "rxjs";
import { TaBaseService } from "@ta/server";
import * as i0 from "@angular/core";
export const MENU_TEMPLATE = new InjectionToken("MENU_TEMPLATE");
export const MENU_MAX_HEIGHT = new InjectionToken("MENU_MAX_HEIGHT");
export class OverlayService extends TaBaseService {
    constructor() {
        super();
        this._onCloseSubject = new Subject();
        this.onClose$ = this._onCloseSubject.asObservable();
        this._overlay = inject(Overlay);
        this._injector = inject(Injector);
        this.defaultPositions = [
            {
                originX: "start",
                originY: "bottom",
                overlayX: "start",
                overlayY: "top",
            },
            {
                originX: "start",
                originY: "top",
                overlayX: "start",
                overlayY: "bottom",
            },
            {
                originX: "end",
                originY: "bottom",
                overlayX: "end",
                overlayY: "top",
            },
            {
                originX: "end",
                originY: "top",
                overlayX: "end",
                overlayY: "bottom",
            },
        ];
    }
    openMenu(config) {
        const { menuComponent, triggerElement, template, onClose, matchTriggerWidth = true, positions = this.defaultPositions, offsetX = 2, offsetY = 2, maxHeight, } = config;
        if (!triggerElement) {
            console.log("OverlayService: triggerElement is required.");
            return;
        }
        if (!menuComponent) {
            console.log("OverlayService: menuComponent is required.");
            return;
        }
        this._overlayRef?.dispose();
        this._onCloseCallback = onClose;
        const positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(triggerElement)
            .withFlexibleDimensions(true)
            .withPush(true)
            .withDefaultOffsetX(offsetX)
            .withDefaultOffsetY(offsetY)
            .withPositions(positions);
        this._overlayRef = this._overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: "cdk-overlay-transparent-backdrop",
            scrollStrategy: this._overlay.scrollStrategies.close(),
            width: matchTriggerWidth ? triggerElement.clientWidth : undefined,
        });
        this._registerSubscription(this._overlayRef.backdropClick().subscribe(() => this.closeMenu()));
        const portalInjector = Injector.create({
            providers: [
                { provide: OverlayRef, useValue: this._overlayRef },
                { provide: MENU_TEMPLATE, useValue: template },
                { provide: MENU_MAX_HEIGHT, useValue: maxHeight },
            ],
            parent: this._injector,
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OverlayService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OverlayService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixjQUFjLEVBQ2QsUUFBUSxHQUdULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFFM0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUM3QyxlQUFlLENBQ2hCLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVMsaUJBQWlCLENBQUMsQ0FBQztBQWtCN0UsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBb0MvQztRQUNFLEtBQUssRUFBRSxDQUFDO1FBbENPLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2RCxhQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEIscUJBQWdCLEdBQXdCO1lBQ3ZEO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFF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RSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDOytHQTlHVSxjQUFjO21IQUFkLGNBQWMsY0FGYixNQUFNOzs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uLCBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5XCI7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL3BvcnRhbFwiO1xuaW1wb3J0IHtcbiAgaW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5qZWN0b3IsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVGFCYXNlU2VydmljZSB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBNRU5VX1RFTVBMQVRFID0gbmV3IEluamVjdGlvblRva2VuPFRlbXBsYXRlUmVmPGFueT4+KFxuICBcIk1FTlVfVEVNUExBVEVcIlxuKTtcbmV4cG9ydCBjb25zdCBNRU5VX01BWF9IRUlHSFQgPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPihcIk1FTlVfTUFYX0hFSUdIVFwiKTtcblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5TWVudUNvbmZpZzxUID0gYW55PiB7XG4gIG1lbnVDb21wb25lbnQ/OiBUeXBlPFQ+O1xuICB0cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICB0ZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT47XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xuICBtYXRjaFRyaWdnZXJXaWR0aD86IGJvb2xlYW47XG4gIHBvc2l0aW9ucz86IENvbm5lY3RlZFBvc2l0aW9uW107XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIG1heEhlaWdodD86IG51bWJlcjtcbiAgbWFudWFsVHJpZ2dlcj86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XG4gIHByaXZhdGUgX292ZXJsYXlSZWY/OiBPdmVybGF5UmVmO1xuICBwcml2YXRlIF9vbkNsb3NlQ2FsbGJhY2s/OiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIHJlYWRvbmx5IF9vbkNsb3NlU3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHB1YmxpYyByZWFkb25seSBvbkNsb3NlJCA9IHRoaXMuX29uQ2xvc2VTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHByaXZhdGUgX292ZXJsYXkgPSBpbmplY3QoT3ZlcmxheSk7XG4gIHByaXZhdGUgX2luamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRQb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10gPSBbXG4gICAge1xuICAgICAgb3JpZ2luWDogXCJzdGFydFwiLFxuICAgICAgb3JpZ2luWTogXCJib3R0b21cIixcbiAgICAgIG92ZXJsYXlYOiBcInN0YXJ0XCIsXG4gICAgICBvdmVybGF5WTogXCJ0b3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblg6IFwic3RhcnRcIixcbiAgICAgIG9yaWdpblk6IFwidG9wXCIsXG4gICAgICBvdmVybGF5WDogXCJzdGFydFwiLFxuICAgICAgb3ZlcmxheVk6IFwiYm90dG9tXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YOiBcImVuZFwiLFxuICAgICAgb3JpZ2luWTogXCJib3R0b21cIixcbiAgICAgIG92ZXJsYXlYOiBcImVuZFwiLFxuICAgICAgb3ZlcmxheVk6IFwidG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YOiBcImVuZFwiLFxuICAgICAgb3JpZ2luWTogXCJ0b3BcIixcbiAgICAgIG92ZXJsYXlYOiBcImVuZFwiLFxuICAgICAgb3ZlcmxheVk6IFwiYm90dG9tXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG9wZW5NZW51PFQ+KGNvbmZpZzogT3ZlcmxheU1lbnVDb25maWc8VD4pIHtcbiAgICBjb25zdCB7XG4gICAgICBtZW51Q29tcG9uZW50LFxuICAgICAgdHJpZ2dlckVsZW1lbnQsXG4gICAgICB0ZW1wbGF0ZSxcbiAgICAgIG9uQ2xvc2UsXG4gICAgICBtYXRjaFRyaWdnZXJXaWR0aCA9IHRydWUsXG4gICAgICBwb3NpdGlvbnMgPSB0aGlzLmRlZmF1bHRQb3NpdGlvbnMsXG4gICAgICBvZmZzZXRYID0gMixcbiAgICAgIG9mZnNldFkgPSAyLFxuICAgICAgbWF4SGVpZ2h0LFxuICAgIH0gPSBjb25maWc7XG5cbiAgICBpZiAoIXRyaWdnZXJFbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXlTZXJ2aWNlOiB0cmlnZ2VyRWxlbWVudCBpcyByZXF1aXJlZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbWVudUNvbXBvbmVudCkge1xuICAgICAgY29uc29sZS5sb2coXCJPdmVybGF5U2VydmljZTogbWVudUNvbXBvbmVudCBpcyByZXF1aXJlZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IG9uQ2xvc2U7XG5cbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRyaWdnZXJFbGVtZW50KVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnModHJ1ZSlcbiAgICAgIC53aXRoUHVzaCh0cnVlKVxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WChvZmZzZXRYKVxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WShvZmZzZXRZKVxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiBcImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCIsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgICB3aWR0aDogbWF0Y2hUcmlnZ2VyV2lkdGggPyB0cmlnZ2VyRWxlbWVudC5jbGllbnRXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlTWVudSgpKVxuICAgICk7XG5cbiAgICBjb25zdCBwb3J0YWxJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPdmVybGF5UmVmLCB1c2VWYWx1ZTogdGhpcy5fb3ZlcmxheVJlZiB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1FTlVfVEVNUExBVEUsIHVzZVZhbHVlOiB0ZW1wbGF0ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1FTlVfTUFYX0hFSUdIVCwgdXNlVmFsdWU6IG1heEhlaWdodCB9LFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3IsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKG1lbnVDb21wb25lbnQsIG51bGwsIHBvcnRhbEluamVjdG9yKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChwb3J0YWwpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlTWVudSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2xvc2VTdWJqZWN0Lm5leHQoKTtcblxuICAgIGlmICh0aGlzLl9vbkNsb3NlQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuIl19