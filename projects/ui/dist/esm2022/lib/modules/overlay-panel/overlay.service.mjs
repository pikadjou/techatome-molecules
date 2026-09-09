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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixjQUFjLEVBQ2QsUUFBUSxHQUdULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFFM0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUM3QyxlQUFlLENBQ2hCLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxjQUFjLENBQVMsaUJBQWlCLENBQUMsQ0FBQztBQWtCN0UsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBb0MvQztRQUNFLEtBQUssRUFBRSxDQUFDO1FBbENPLG9CQUFlLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2QyxhQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV2RCxhQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEIscUJBQWdCLEdBQXdCO1lBQ3ZEO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFF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RSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDOytHQTlHVSxjQUFjO21IQUFkLGNBQWMsY0FGYixNQUFNOzs0RkFFUCxjQUFjO2tCQUgxQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RlZFBvc2l0aW9uLCBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9vdmVybGF5XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gXCJAYW5ndWxhci9jZGsvcG9ydGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgSW5qZWN0b3IsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVHlwZSxcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5pbXBvcnQgeyBUYUJhc2VTZXJ2aWNlIH0gZnJvbSBcIkB0YS9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNRU5VX1RFTVBMQVRFID0gbmV3IEluamVjdGlvblRva2VuPFRlbXBsYXRlUmVmPGFueT4+KFxyXG4gIFwiTUVOVV9URU1QTEFURVwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBNRU5VX01BWF9IRUlHSFQgPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPihcIk1FTlVfTUFYX0hFSUdIVFwiKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheU1lbnVDb25maWc8VCA9IGFueT4ge1xyXG4gIG1lbnVDb21wb25lbnQ/OiBUeXBlPFQ+O1xyXG4gIHRyaWdnZXJFbGVtZW50PzogSFRNTEVsZW1lbnQ7XHJcbiAgdGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIG9uQ2xvc2U/OiAoKSA9PiB2b2lkO1xyXG4gIG1hdGNoVHJpZ2dlcldpZHRoPzogYm9vbGVhbjtcclxuICBwb3NpdGlvbnM/OiBDb25uZWN0ZWRQb3NpdGlvbltdO1xyXG4gIG9mZnNldFg/OiBudW1iZXI7XHJcbiAgb2Zmc2V0WT86IG51bWJlcjtcclxuICBtYXhIZWlnaHQ/OiBudW1iZXI7XHJcbiAgbWFudWFsVHJpZ2dlcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiBcInJvb3RcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZj86IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSBfb25DbG9zZUNhbGxiYWNrPzogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9vbkNsb3NlU3ViamVjdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHVibGljIHJlYWRvbmx5IG9uQ2xvc2UkID0gdGhpcy5fb25DbG9zZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHByaXZhdGUgX292ZXJsYXkgPSBpbmplY3QoT3ZlcmxheSk7XHJcbiAgcHJpdmF0ZSBfaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRQb3NpdGlvbnM6IENvbm5lY3RlZFBvc2l0aW9uW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIG9yaWdpblg6IFwic3RhcnRcIixcclxuICAgICAgb3JpZ2luWTogXCJib3R0b21cIixcclxuICAgICAgb3ZlcmxheVg6IFwic3RhcnRcIixcclxuICAgICAgb3ZlcmxheVk6IFwidG9wXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBvcmlnaW5YOiBcInN0YXJ0XCIsXHJcbiAgICAgIG9yaWdpblk6IFwidG9wXCIsXHJcbiAgICAgIG92ZXJsYXlYOiBcInN0YXJ0XCIsXHJcbiAgICAgIG92ZXJsYXlZOiBcImJvdHRvbVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogXCJlbmRcIixcclxuICAgICAgb3JpZ2luWTogXCJib3R0b21cIixcclxuICAgICAgb3ZlcmxheVg6IFwiZW5kXCIsXHJcbiAgICAgIG92ZXJsYXlZOiBcInRvcFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogXCJlbmRcIixcclxuICAgICAgb3JpZ2luWTogXCJ0b3BcIixcclxuICAgICAgb3ZlcmxheVg6IFwiZW5kXCIsXHJcbiAgICAgIG92ZXJsYXlZOiBcImJvdHRvbVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3Blbk1lbnU8VD4oY29uZmlnOiBPdmVybGF5TWVudUNvbmZpZzxUPikge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtZW51Q29tcG9uZW50LFxyXG4gICAgICB0cmlnZ2VyRWxlbWVudCxcclxuICAgICAgdGVtcGxhdGUsXHJcbiAgICAgIG9uQ2xvc2UsXHJcbiAgICAgIG1hdGNoVHJpZ2dlcldpZHRoID0gdHJ1ZSxcclxuICAgICAgcG9zaXRpb25zID0gdGhpcy5kZWZhdWx0UG9zaXRpb25zLFxyXG4gICAgICBvZmZzZXRYID0gMixcclxuICAgICAgb2Zmc2V0WSA9IDIsXHJcbiAgICAgIG1heEhlaWdodCxcclxuICAgIH0gPSBjb25maWc7XHJcblxyXG4gICAgaWYgKCF0cmlnZ2VyRWxlbWVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXlTZXJ2aWNlOiB0cmlnZ2VyRWxlbWVudCBpcyByZXF1aXJlZC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghbWVudUNvbXBvbmVudCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXlTZXJ2aWNlOiBtZW51Q29tcG9uZW50IGlzIHJlcXVpcmVkLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX292ZXJsYXlSZWY/LmRpc3Bvc2UoKTtcclxuICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IG9uQ2xvc2U7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXlcclxuICAgICAgLnBvc2l0aW9uKClcclxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odHJpZ2dlckVsZW1lbnQpXHJcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKHRydWUpXHJcbiAgICAgIC53aXRoUHVzaCh0cnVlKVxyXG4gICAgICAud2l0aERlZmF1bHRPZmZzZXRYKG9mZnNldFgpXHJcbiAgICAgIC53aXRoRGVmYXVsdE9mZnNldFkob2Zmc2V0WSlcclxuICAgICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxyXG4gICAgICBoYXNCYWNrZHJvcDogdHJ1ZSxcclxuICAgICAgYmFja2Ryb3BDbGFzczogXCJjZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcFwiLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXHJcbiAgICAgIHdpZHRoOiBtYXRjaFRyaWdnZXJXaWR0aCA/IHRyaWdnZXJFbGVtZW50LmNsaWVudFdpZHRoIDogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcclxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VNZW51KCkpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHBvcnRhbEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgeyBwcm92aWRlOiBPdmVybGF5UmVmLCB1c2VWYWx1ZTogdGhpcy5fb3ZlcmxheVJlZiB9LFxyXG4gICAgICAgIHsgcHJvdmlkZTogTUVOVV9URU1QTEFURSwgdXNlVmFsdWU6IHRlbXBsYXRlIH0sXHJcbiAgICAgICAgeyBwcm92aWRlOiBNRU5VX01BWF9IRUlHSFQsIHVzZVZhbHVlOiBtYXhIZWlnaHQgfSxcclxuICAgICAgXSxcclxuICAgICAgcGFyZW50OiB0aGlzLl9pbmplY3RvcixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwobWVudUNvbXBvbmVudCwgbnVsbCwgcG9ydGFsSW5qZWN0b3IpO1xyXG4gICAgdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2gocG9ydGFsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbG9zZU1lbnUoKSB7XHJcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9vbkNsb3NlU3ViamVjdC5uZXh0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX29uQ2xvc2VDYWxsYmFjaykge1xyXG4gICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2soKTtcclxuICAgICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=