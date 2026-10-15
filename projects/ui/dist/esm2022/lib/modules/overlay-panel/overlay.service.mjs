import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { inject, Injectable, InjectionToken, Injector, } from "@angular/core";
import { Subject } from "rxjs";
import { Logger, TaBaseService } from "@ta/server";
import * as i0 from "@angular/core";
export const MENU_TEMPLATE = new InjectionToken("MENU_TEMPLATE");
export const MENU_MAX_HEIGHT = new InjectionToken("MENU_MAX_HEIGHT");
export class TaOverlayService extends TaBaseService {
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
            Logger.LogWarning("TaOverlayService: triggerElement is required.");
            return;
        }
        if (!menuComponent) {
            Logger.LogWarning("TaOverlayService: menuComponent is required.");
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
/** @deprecated utiliser TaOverlayService */
export { TaOverlayService as OverlayService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixjQUFjLEVBQ2QsUUFBUSxHQUdULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBRW5ELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FDN0MsZUFBZSxDQUNoQixDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFTLGlCQUFpQixDQUFDLENBQUM7QUFrQjdFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxhQUFhO0lBb0NqRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBbENPLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2RCxhQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEIscUJBQWdCLEdBQXdCO1lBQ3ZEO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JB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QUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDOytHQTlHVSxnQkFBZ0I7bUhBQWhCLGdCQUFnQixjQUZmLE1BQU07OzRGQUVQLGdCQUFnQjtrQkFINUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7O0FBa0hELDRDQUE0QztBQUM1QyxPQUFPLEVBQUUsZ0JBQWdCLElBQUksY0FBYyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9wb3J0YWxcIjtcbmltcG9ydCB7XG4gIGluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdG9yLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IExvZ2dlciwgVGFCYXNlU2VydmljZSB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBNRU5VX1RFTVBMQVRFID0gbmV3IEluamVjdGlvblRva2VuPFRlbXBsYXRlUmVmPGFueT4+KFxuICBcIk1FTlVfVEVNUExBVEVcIlxuKTtcbmV4cG9ydCBjb25zdCBNRU5VX01BWF9IRUlHSFQgPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPihcIk1FTlVfTUFYX0hFSUdIVFwiKTtcblxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5TWVudUNvbmZpZzxUID0gYW55PiB7XG4gIG1lbnVDb21wb25lbnQ/OiBUeXBlPFQ+O1xuICB0cmlnZ2VyRWxlbWVudD86IEhUTUxFbGVtZW50O1xuICB0ZW1wbGF0ZT86IFRlbXBsYXRlUmVmPGFueT47XG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xuICBtYXRjaFRyaWdnZXJXaWR0aD86IGJvb2xlYW47XG4gIHBvc2l0aW9ucz86IENvbm5lY3RlZFBvc2l0aW9uW107XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIG1heEhlaWdodD86IG51bWJlcjtcbiAgbWFudWFsVHJpZ2dlcj86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFRhT3ZlcmxheVNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZj86IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgX29uQ2xvc2VDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX29uQ2xvc2VTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHVibGljIHJlYWRvbmx5IG9uQ2xvc2UkID0gdGhpcy5fb25DbG9zZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSBfb3ZlcmxheSA9IGluamVjdChPdmVybGF5KTtcbiAgcHJpdmF0ZSBfaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdFBvc2l0aW9uczogQ29ubmVjdGVkUG9zaXRpb25bXSA9IFtcbiAgICB7XG4gICAgICBvcmlnaW5YOiBcInN0YXJ0XCIsXG4gICAgICBvcmlnaW5ZOiBcImJvdHRvbVwiLFxuICAgICAgb3ZlcmxheVg6IFwic3RhcnRcIixcbiAgICAgIG92ZXJsYXlZOiBcInRvcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JpZ2luWDogXCJzdGFydFwiLFxuICAgICAgb3JpZ2luWTogXCJ0b3BcIixcbiAgICAgIG92ZXJsYXlYOiBcInN0YXJ0XCIsXG4gICAgICBvdmVybGF5WTogXCJib3R0b21cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblg6IFwiZW5kXCIsXG4gICAgICBvcmlnaW5ZOiBcImJvdHRvbVwiLFxuICAgICAgb3ZlcmxheVg6IFwiZW5kXCIsXG4gICAgICBvdmVybGF5WTogXCJ0b3BcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblg6IFwiZW5kXCIsXG4gICAgICBvcmlnaW5ZOiBcInRvcFwiLFxuICAgICAgb3ZlcmxheVg6IFwiZW5kXCIsXG4gICAgICBvdmVybGF5WTogXCJib3R0b21cIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb3Blbk1lbnU8VD4oY29uZmlnOiBPdmVybGF5TWVudUNvbmZpZzxUPikge1xuICAgIGNvbnN0IHtcbiAgICAgIG1lbnVDb21wb25lbnQsXG4gICAgICB0cmlnZ2VyRWxlbWVudCxcbiAgICAgIHRlbXBsYXRlLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG1hdGNoVHJpZ2dlcldpZHRoID0gdHJ1ZSxcbiAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZGVmYXVsdFBvc2l0aW9ucyxcbiAgICAgIG9mZnNldFggPSAyLFxuICAgICAgb2Zmc2V0WSA9IDIsXG4gICAgICBtYXhIZWlnaHQsXG4gICAgfSA9IGNvbmZpZztcblxuICAgIGlmICghdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIExvZ2dlci5Mb2dXYXJuaW5nKFwiVGFPdmVybGF5U2VydmljZTogdHJpZ2dlckVsZW1lbnQgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW1lbnVDb21wb25lbnQpIHtcbiAgICAgIExvZ2dlci5Mb2dXYXJuaW5nKFwiVGFPdmVybGF5U2VydmljZTogbWVudUNvbXBvbmVudCBpcyByZXF1aXJlZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb3ZlcmxheVJlZj8uZGlzcG9zZSgpO1xuICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IG9uQ2xvc2U7XG5cbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRyaWdnZXJFbGVtZW50KVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnModHJ1ZSlcbiAgICAgIC53aXRoUHVzaCh0cnVlKVxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WChvZmZzZXRYKVxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WShvZmZzZXRZKVxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcblxuICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiBcImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCIsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgICB3aWR0aDogbWF0Y2hUcmlnZ2VyV2lkdGggPyB0cmlnZ2VyRWxlbWVudC5jbGllbnRXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICB9KTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlTWVudSgpKVxuICAgICk7XG5cbiAgICBjb25zdCBwb3J0YWxJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPdmVybGF5UmVmLCB1c2VWYWx1ZTogdGhpcy5fb3ZlcmxheVJlZiB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1FTlVfVEVNUExBVEUsIHVzZVZhbHVlOiB0ZW1wbGF0ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6IE1FTlVfTUFYX0hFSUdIVCwgdXNlVmFsdWU6IG1heEhlaWdodCB9LFxuICAgICAgXSxcbiAgICAgIHBhcmVudDogdGhpcy5faW5qZWN0b3IsXG4gICAgfSk7XG5cbiAgICBjb25zdCBwb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKG1lbnVDb21wb25lbnQsIG51bGwsIHBvcnRhbEluamVjdG9yKTtcbiAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaChwb3J0YWwpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlTWVudSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2xvc2VTdWJqZWN0Lm5leHQoKTtcblxuICAgIGlmICh0aGlzLl9vbkNsb3NlQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjaygpO1xuICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQGRlcHJlY2F0ZWQgdXRpbGlzZXIgVGFPdmVybGF5U2VydmljZSAqL1xuZXhwb3J0IHsgVGFPdmVybGF5U2VydmljZSBhcyBPdmVybGF5U2VydmljZSB9O1xuIl19