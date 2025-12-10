import { CommonModule } from "@angular/common";
import { Component, ContentChild, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { TaDefaultPanelComponent } from "../default-panel/default-panel.component";
import * as i0 from "@angular/core";
import * as i1 from "../overlay.service";
import * as i2 from "@angular/common";
export class TaOverlayPanelComponent extends TaBaseComponent {
    constructor(overlayService) {
        super();
        this.overlayService = overlayService;
        this.position = "default";
        this.closed = new EventEmitter();
        this._configWithDefaults = null;
    }
    ngAfterViewInit() {
        if (!this.panelConfig) {
            console.log("Missing panelConfig");
            return;
        }
        if (!this.contentTpl) {
            console.log("Missing panelContent");
            return;
        }
        if (!this.triggerTpl) {
            console.log("Missing panelTrigger");
            return;
        }
        if (this.position === "right") {
            this.panelConfig.positions = [
                {
                    // Position à droite du déclencheur
                    originX: "end",
                    originY: "center",
                    overlayX: "start",
                    overlayY: "center",
                },
                {
                    // Position à gauche du déclencheur (fallback)
                    originX: "start",
                    originY: "center",
                    overlayX: "end",
                    overlayY: "center",
                },
            ];
        }
        this._configWithDefaults = {
            ...this.panelConfig,
            menuComponent: this.panelConfig.menuComponent ?? TaDefaultPanelComponent,
            triggerElement: this.triggerHostRef?.nativeElement,
            template: this.contentTpl,
        };
        this._registerSubscription(this.overlayService.onClose$.subscribe(() => {
            this.closed.emit();
        }));
    }
    open(manual = false) {
        if (!manual &&
            this._configWithDefaults &&
            this._configWithDefaults.manualTrigger === true) {
            return;
        }
        if (!this._configWithDefaults?.triggerElement) {
            console.log("OverlayPanel: no trigger element resolved");
            return;
        }
        this.overlayService.openMenu(this._configWithDefaults);
    }
    close() {
        this.overlayService.closeMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayPanelComponent, deps: [{ token: i1.OverlayService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaOverlayPanelComponent, isStandalone: true, selector: "ta-overlay-panel", inputs: { panelConfig: "panelConfig", position: "position" }, outputs: { closed: "closed" }, queries: [{ propertyName: "triggerTpl", first: true, predicate: ["panelTrigger"], descendants: true }, { propertyName: "contentTpl", first: true, predicate: ["panelContent"], descendants: true }], viewQueries: [{ propertyName: "triggerHostRef", first: true, predicate: ["triggerHost"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-fill\" #triggerHost (click)=\"this.open()\">\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-overlay-panel", standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-fill\" #triggerHost (click)=\"this.open()\">\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.OverlayService }], propDecorators: { triggerTpl: [{
                type: ContentChild,
                args: ["panelTrigger"]
            }], contentTpl: [{
                type: ContentChild,
                args: ["panelContent"]
            }], triggerHostRef: [{
                type: ViewChild,
                args: ["triggerHost", { static: true }]
            }], panelConfig: [{
                type: Input
            }], position: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsL292ZXJsYXktcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFFWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFXbkYsTUFBTSxPQUFPLHVCQUNYLFNBQVEsZUFBZTtJQWlCdkIsWUFBb0IsY0FBOEI7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFEVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOekMsYUFBUSxHQUF3QixTQUFTLENBQUM7UUFFekMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFcEMsd0JBQW1CLEdBQXNDLElBQUksQ0FBQztJQUl0RSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRztnQkFDM0I7b0JBQ0UsbUNBQW1DO29CQUNuQyxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjtnQkFDRDtvQkFDRSw4Q0FBOEM7b0JBQzlDLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0YsQ0FBQztRQUNKLENBQUM7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEdBQUc7WUFDekIsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNuQixhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUksdUJBQXVCO1lBQ3hFLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGFBQWE7WUFDbEQsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzFCLENBQUM7UUFFRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUN4QixJQUNFLENBQUMsTUFBTTtZQUNQLElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQy9DLENBQUM7WUFDRCxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLENBQUM7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1lBQ3pELE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNNLEtBQUs7UUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2xDLENBQUM7K0dBckZVLHVCQUF1QjttR0FBdkIsdUJBQXVCLGtnQkMzQnBDLGlKQUdBLHlERG1CWSxZQUFZOzs0RkFLWCx1QkFBdUI7a0JBUm5DLFNBQVM7K0JBQ0Usa0JBQWtCLGNBQ2hCLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxpQkFHUixpQkFBaUIsQ0FBQyxJQUFJO21GQU1QLFVBQVU7c0JBQXZDLFlBQVk7dUJBQUMsY0FBYztnQkFDRSxVQUFVO3NCQUF2QyxZQUFZO3VCQUFDLGNBQWM7Z0JBRzVCLGNBQWM7c0JBRGIsU0FBUzt1QkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUdqQyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFEZWZhdWx0UGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi4vZGVmYXVsdC1wYW5lbC9kZWZhdWx0LXBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3ZlcmxheU1lbnVDb25maWcsIE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSBcIi4uL292ZXJsYXkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtb3ZlcmxheS1wYW5lbFwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6IFwiLi9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5zY3NzXCJdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUYU92ZXJsYXlQYW5lbENvbXBvbmVudFxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXRcbntcbiAgQENvbnRlbnRDaGlsZChcInBhbmVsVHJpZ2dlclwiKSB0cmlnZ2VyVHBsITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChcInBhbmVsQ29udGVudFwiKSBjb250ZW50VHBsITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKFwidHJpZ2dlckhvc3RcIiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgdHJpZ2dlckhvc3RSZWYhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBASW5wdXQoKSBwYW5lbENvbmZpZyE6IE92ZXJsYXlNZW51Q29uZmlnO1xuXG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBcImRlZmF1bHRcIiB8IFwicmlnaHRcIiA9IFwiZGVmYXVsdFwiO1xuXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfY29uZmlnV2l0aERlZmF1bHRzOiBPdmVybGF5TWVudUNvbmZpZzx1bmtub3duPiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheVNlcnZpY2U6IE92ZXJsYXlTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGFuZWxDb25maWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTWlzc2luZyBwYW5lbENvbmZpZ1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNvbnRlbnRUcGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTWlzc2luZyBwYW5lbENvbnRlbnRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy50cmlnZ2VyVHBsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk1pc3NpbmcgcGFuZWxUcmlnZ2VyXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHRoaXMucGFuZWxDb25maWcucG9zaXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgLy8gUG9zaXRpb24gw6AgZHJvaXRlIGR1IGTDqWNsZW5jaGV1clxuICAgICAgICAgIG9yaWdpblg6IFwiZW5kXCIsXG4gICAgICAgICAgb3JpZ2luWTogXCJjZW50ZXJcIixcbiAgICAgICAgICBvdmVybGF5WDogXCJzdGFydFwiLFxuICAgICAgICAgIG92ZXJsYXlZOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gUG9zaXRpb24gw6AgZ2F1Y2hlIGR1IGTDqWNsZW5jaGV1ciAoZmFsbGJhY2spXG4gICAgICAgICAgb3JpZ2luWDogXCJzdGFydFwiLFxuICAgICAgICAgIG9yaWdpblk6IFwiY2VudGVyXCIsXG4gICAgICAgICAgb3ZlcmxheVg6IFwiZW5kXCIsXG4gICAgICAgICAgb3ZlcmxheVk6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyA9IHtcbiAgICAgIC4uLnRoaXMucGFuZWxDb25maWcsXG4gICAgICBtZW51Q29tcG9uZW50OiB0aGlzLnBhbmVsQ29uZmlnLm1lbnVDb21wb25lbnQgPz8gVGFEZWZhdWx0UGFuZWxDb21wb25lbnQsXG4gICAgICB0cmlnZ2VyRWxlbWVudDogdGhpcy50cmlnZ2VySG9zdFJlZj8ubmF0aXZlRWxlbWVudCxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnRlbnRUcGwsXG4gICAgfTtcblxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5vdmVybGF5U2VydmljZS5vbkNsb3NlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb3BlbihtYW51YWwgPSBmYWxzZSkge1xuICAgIGlmIChcbiAgICAgICFtYW51YWwgJiZcbiAgICAgIHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyAmJlxuICAgICAgdGhpcy5fY29uZmlnV2l0aERlZmF1bHRzLm1hbnVhbFRyaWdnZXIgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jb25maWdXaXRoRGVmYXVsdHM/LnRyaWdnZXJFbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXlQYW5lbDogbm8gdHJpZ2dlciBlbGVtZW50IHJlc29sdmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLm9wZW5NZW51KHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyk7XG4gIH1cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuY2xvc2VNZW51KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4LWZpbGxcIiAjdHJpZ2dlckhvc3QgKGNsaWNrKT1cInRoaXMub3BlbigpXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0aGlzLnRyaWdnZXJUcGxcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19