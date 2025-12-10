import { OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, InjectionToken, Injector, } from "@angular/core";
import { Subject } from "rxjs";
import { TaBaseService } from "@ta/server";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export const MENU_TEMPLATE = new InjectionToken("MENU_TEMPLATE");
export const MENU_MAX_HEIGHT = new InjectionToken("MENU_MAX_HEIGHT");
export class OverlayService extends TaBaseService {
    constructor(overlay, injector) {
        super();
        this.overlay = overlay;
        this.injector = injector;
        this._onCloseSubject = new Subject();
        this.onClose$ = this._onCloseSubject.asObservable();
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
            backdropClass: "cdk-overlay-transparent-backdrop",
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OverlayService, deps: [{ token: i1.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OverlayService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: i1.Overlay }, { type: i0.Injector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBOEIsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFDTCxVQUFVLEVBQ1YsY0FBYyxFQUNkLFFBQVEsR0FHVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUUzQyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQzdDLGVBQWUsQ0FDaEIsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBUyxpQkFBaUIsQ0FBQyxDQUFDO0FBa0I3RSxNQUFNLE9BQU8sY0FBZSxTQUFRLGFBQWE7SUFpQy9DLFlBQW9CLE9BQWdCLEVBQVUsUUFBa0I7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFEVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTlCL0Msb0JBQWUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3ZDLGFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTlDLHFCQUFnQixHQUF3QjtZQUN2RDtnQkFDRSxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsS0FB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VyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQzsrR0EzR1UsY0FBYzttSEFBZCxjQUFjLGNBRmIsTUFBTTs7NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0ZWRQb3NpdGlvbiwgT3ZlcmxheSwgT3ZlcmxheVJlZiB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9wb3J0YWxcIjtcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUYUJhc2VTZXJ2aWNlIH0gZnJvbSBcIkB0YS9zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IE1FTlVfVEVNUExBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48VGVtcGxhdGVSZWY8YW55Pj4oXG4gIFwiTUVOVV9URU1QTEFURVwiXG4pO1xuZXhwb3J0IGNvbnN0IE1FTlVfTUFYX0hFSUdIVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxudW1iZXI+KFwiTUVOVV9NQVhfSEVJR0hUXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlNZW51Q29uZmlnPFQgPSBhbnk+IHtcbiAgbWVudUNvbXBvbmVudD86IFR5cGU8VD47XG4gIHRyaWdnZXJFbGVtZW50PzogSFRNTEVsZW1lbnQ7XG4gIHRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcbiAgb25DbG9zZT86ICgpID0+IHZvaWQ7XG4gIG1hdGNoVHJpZ2dlcldpZHRoPzogYm9vbGVhbjtcbiAgcG9zaXRpb25zPzogQ29ubmVjdGVkUG9zaXRpb25bXTtcbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgb2Zmc2V0WT86IG51bWJlcjtcbiAgbWF4SGVpZ2h0PzogbnVtYmVyO1xuICBtYW51YWxUcmlnZ2VyPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheVNlcnZpY2UgZXh0ZW5kcyBUYUJhc2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZj86IE92ZXJsYXlSZWY7XG4gIHByaXZhdGUgX29uQ2xvc2VDYWxsYmFjaz86ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX29uQ2xvc2VTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHVibGljIHJlYWRvbmx5IG9uQ2xvc2UkID0gdGhpcy5fb25DbG9zZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0UG9zaXRpb25zOiBDb25uZWN0ZWRQb3NpdGlvbltdID0gW1xuICAgIHtcbiAgICAgIG9yaWdpblg6IFwic3RhcnRcIixcbiAgICAgIG9yaWdpblk6IFwiYm90dG9tXCIsXG4gICAgICBvdmVybGF5WDogXCJzdGFydFwiLFxuICAgICAgb3ZlcmxheVk6IFwidG9wXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBvcmlnaW5YOiBcInN0YXJ0XCIsXG4gICAgICBvcmlnaW5ZOiBcInRvcFwiLFxuICAgICAgb3ZlcmxheVg6IFwic3RhcnRcIixcbiAgICAgIG92ZXJsYXlZOiBcImJvdHRvbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JpZ2luWDogXCJlbmRcIixcbiAgICAgIG9yaWdpblk6IFwiYm90dG9tXCIsXG4gICAgICBvdmVybGF5WDogXCJlbmRcIixcbiAgICAgIG92ZXJsYXlZOiBcInRvcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgb3JpZ2luWDogXCJlbmRcIixcbiAgICAgIG9yaWdpblk6IFwidG9wXCIsXG4gICAgICBvdmVybGF5WDogXCJlbmRcIixcbiAgICAgIG92ZXJsYXlZOiBcImJvdHRvbVwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgb3Blbk1lbnU8VD4oY29uZmlnOiBPdmVybGF5TWVudUNvbmZpZzxUPikge1xuICAgIGNvbnN0IHtcbiAgICAgIG1lbnVDb21wb25lbnQsXG4gICAgICB0cmlnZ2VyRWxlbWVudCxcbiAgICAgIHRlbXBsYXRlLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG1hdGNoVHJpZ2dlcldpZHRoID0gdHJ1ZSxcbiAgICAgIHBvc2l0aW9ucyA9IHRoaXMuZGVmYXVsdFBvc2l0aW9ucyxcbiAgICAgIG9mZnNldFggPSAyLFxuICAgICAgb2Zmc2V0WSA9IDIsXG4gICAgICBtYXhIZWlnaHQsXG4gICAgfSA9IGNvbmZpZztcblxuICAgIGlmICghdHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcmxheVNlcnZpY2U6IHRyaWdnZXJFbGVtZW50IGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFtZW51Q29tcG9uZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXlTZXJ2aWNlOiBtZW51Q29tcG9uZW50IGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmPy5kaXNwb3NlKCk7XG4gICAgdGhpcy5fb25DbG9zZUNhbGxiYWNrID0gb25DbG9zZTtcblxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0cmlnZ2VyRWxlbWVudClcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKHRydWUpXG4gICAgICAud2l0aFB1c2godHJ1ZSlcbiAgICAgIC53aXRoRGVmYXVsdE9mZnNldFgob2Zmc2V0WClcbiAgICAgIC53aXRoRGVmYXVsdE9mZnNldFkob2Zmc2V0WSlcbiAgICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucyk7XG5cbiAgICB0aGlzLl9vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiBcImNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCIsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICAgIHdpZHRoOiBtYXRjaFRyaWdnZXJXaWR0aCA/IHRyaWdnZXJFbGVtZW50LmNsaWVudFdpZHRoIDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VNZW51KCkpXG4gICAgKTtcblxuICAgIGNvbnN0IHBvcnRhbEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE92ZXJsYXlSZWYsIHVzZVZhbHVlOiB0aGlzLl9vdmVybGF5UmVmIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTUVOVV9URU1QTEFURSwgdXNlVmFsdWU6IHRlbXBsYXRlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTUVOVV9NQVhfSEVJR0hULCB1c2VWYWx1ZTogbWF4SGVpZ2h0IH0sXG4gICAgICBdLFxuICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChtZW51Q29tcG9uZW50LCBudWxsLCBwb3J0YWxJbmplY3Rvcik7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2gocG9ydGFsKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZU1lbnUoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkNsb3NlU3ViamVjdC5uZXh0KCk7XG5cbiAgICBpZiAodGhpcy5fb25DbG9zZUNhbGxiYWNrKSB7XG4gICAgICB0aGlzLl9vbkNsb3NlQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX29uQ2xvc2VDYWxsYmFjayA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==