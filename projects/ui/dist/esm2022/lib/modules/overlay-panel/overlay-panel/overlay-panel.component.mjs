import { CommonModule } from "@angular/common";
import { Component, inject, input, ViewEncapsulation, output, contentChild, viewChild, } from "@angular/core";
import { Logger } from "@ta/server";
import { TaBaseComponent } from "@ta/utils";
import { TaDefaultPanelComponent } from "../default-panel/default-panel.component";
import { TaOverlayService } from "../overlay.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TaOverlayPanelComponent extends TaBaseComponent {
    constructor() {
        super();
        this.triggerTpl = contentChild("panelTrigger");
        this.contentTpl = contentChild("panelContent");
        this.triggerHostRef = viewChild.required("triggerHost");
        this.panelConfig = input.required();
        this.position = input("default");
        this.closed = output();
        this._configWithDefaults = null;
        this._overlayService = inject(TaOverlayService);
    }
    ngAfterViewInit() {
        const config = this.panelConfig();
        if (!config) {
            Logger.LogWarning("Missing panelConfig");
            return;
        }
        if (!this.contentTpl()) {
            Logger.LogWarning("Missing panelContent");
            return;
        }
        if (!this.triggerTpl()) {
            Logger.LogWarning("Missing panelTrigger");
            return;
        }
        if (this.position() === "right") {
            config.positions = [
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
            ...config,
            menuComponent: config.menuComponent ?? TaDefaultPanelComponent,
            triggerElement: this.triggerHostRef().nativeElement,
            template: this.contentTpl(),
        };
        this._registerSubscription(this._overlayService.onClose$.subscribe(() => {
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
            Logger.LogWarning("OverlayPanel: no trigger element resolved");
            return;
        }
        this._overlayService.openMenu(this._configWithDefaults);
    }
    close() {
        this._overlayService.closeMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "18.2.14", type: TaOverlayPanelComponent, isStandalone: true, selector: "ta-overlay-panel", inputs: { panelConfig: { classPropertyName: "panelConfig", publicName: "panelConfig", isSignal: true, isRequired: true, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closed: "closed" }, queries: [{ propertyName: "triggerTpl", first: true, predicate: ["panelTrigger"], descendants: true, isSignal: true }, { propertyName: "contentTpl", first: true, predicate: ["panelContent"], descendants: true, isSignal: true }], viewQueries: [{ propertyName: "triggerHostRef", first: true, predicate: ["triggerHost"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "<div #triggerHost (click)=\"this.open()\">\n  <ng-container [ngTemplateOutlet]=\"this.triggerTpl()\"></ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-overlay-panel", standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.None, template: "<div #triggerHost (click)=\"this.open()\">\n  <ng-container [ngTemplateOutlet]=\"this.triggerTpl()\"></ng-container>\n</div>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsL292ZXJsYXktcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsU0FBUyxFQUVULE1BQU0sRUFDTixLQUFLLEVBRUwsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQXFCLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQVV6RSxNQUFNLE9BQU8sdUJBQ1gsU0FBUSxlQUFlO0lBa0J2QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBaEJWLGVBQVUsR0FBRyxZQUFZLENBQXVCLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLGVBQVUsR0FBRyxZQUFZLENBQXVCLGNBQWMsQ0FBQyxDQUFDO1FBRWhFLG1CQUFjLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBMEIsYUFBYSxDQUFDLENBQUM7UUFFNUUsZ0JBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFxQixDQUFDO1FBRWxELGFBQVEsR0FBRyxLQUFLLENBQXNCLFNBQVMsQ0FBQyxDQUFDO1FBRWpELFdBQU0sR0FBRyxNQUFNLEVBQVEsQ0FBQztRQUVoQix3QkFBbUIsR0FBc0MsSUFBSSxDQUFDO1FBRTlELG9CQUFlLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFJbkQsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osTUFBTSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pDLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMxQyxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDMUMsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsU0FBUyxHQUFHO2dCQUNqQjtvQkFDRSxtQ0FBbUM7b0JBQ25DLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxRQUFRO29CQUNqQixRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2dCQUNEO29CQUNFLDhDQUE4QztvQkFDOUMsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixRQUFRLEVBQUUsS0FBSztvQkFDZixRQUFRLEVBQUUsUUFBUTtpQkFDbkI7YUFDRixDQUFDO1FBQ0osQ0FBQztRQUVELElBQUksQ0FBQyxtQkFBbUIsR0FBRztZQUN6QixHQUFHLE1BQU07WUFDVCxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWEsSUFBSSx1QkFBdUI7WUFDOUQsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxhQUFhO1lBQ25ELFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1NBQzVCLENBQUM7UUFFRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUN4QixJQUNFLENBQUMsTUFBTTtZQUNQLElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQy9DLENBQUM7WUFDRCxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLENBQUM7WUFDOUMsTUFBTSxDQUFDLFVBQVUsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1lBQy9ELE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNNLEtBQUs7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25DLENBQUM7K0dBdkZVLHVCQUF1QjttR0FBdkIsdUJBQXVCLDR2QkM1QnBDLGdJQUdBLHlERG9CWSxZQUFZOzs0RkFLWCx1QkFBdUI7a0JBUm5DLFNBQVM7K0JBQ0Usa0JBQWtCLGNBQ2hCLElBQUksV0FDUCxDQUFDLFlBQVksQ0FBQyxpQkFHUixpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBpbmplY3QsXG4gIGlucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIG91dHB1dCxcbiAgY29udGVudENoaWxkLFxuICB2aWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJAdGEvc2VydmVyXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFRhRGVmYXVsdFBhbmVsQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RlZmF1bHQtcGFuZWwvZGVmYXVsdC1wYW5lbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE92ZXJsYXlNZW51Q29uZmlnLCBUYU92ZXJsYXlTZXJ2aWNlIH0gZnJvbSBcIi4uL292ZXJsYXkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtb3ZlcmxheS1wYW5lbFwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6IFwiLi9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsOiBcIi4vb3ZlcmxheS1wYW5lbC5jb21wb25lbnQuc2Nzc1wiLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUYU92ZXJsYXlQYW5lbENvbXBvbmVudFxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXRcbntcbiAgdHJpZ2dlclRwbCA9IGNvbnRlbnRDaGlsZDxUZW1wbGF0ZVJlZjx1bmtub3duPj4oXCJwYW5lbFRyaWdnZXJcIik7XG4gIGNvbnRlbnRUcGwgPSBjb250ZW50Q2hpbGQ8VGVtcGxhdGVSZWY8dW5rbm93bj4+KFwicGFuZWxDb250ZW50XCIpO1xuXG4gIHRyaWdnZXJIb3N0UmVmID0gdmlld0NoaWxkLnJlcXVpcmVkPEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+PihcInRyaWdnZXJIb3N0XCIpO1xuXG4gIHBhbmVsQ29uZmlnID0gaW5wdXQucmVxdWlyZWQ8T3ZlcmxheU1lbnVDb25maWc+KCk7XG5cbiAgcG9zaXRpb24gPSBpbnB1dDxcImRlZmF1bHRcIiB8IFwicmlnaHRcIj4oXCJkZWZhdWx0XCIpO1xuXG4gIGNsb3NlZCA9IG91dHB1dDx2b2lkPigpO1xuXG4gIHByaXZhdGUgX2NvbmZpZ1dpdGhEZWZhdWx0czogT3ZlcmxheU1lbnVDb25maWc8dW5rbm93bj4gfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIF9vdmVybGF5U2VydmljZSA9IGluamVjdChUYU92ZXJsYXlTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucGFuZWxDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgTG9nZ2VyLkxvZ1dhcm5pbmcoXCJNaXNzaW5nIHBhbmVsQ29uZmlnXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29udGVudFRwbCgpKSB7XG4gICAgICBMb2dnZXIuTG9nV2FybmluZyhcIk1pc3NpbmcgcGFuZWxDb250ZW50XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudHJpZ2dlclRwbCgpKSB7XG4gICAgICBMb2dnZXIuTG9nV2FybmluZyhcIk1pc3NpbmcgcGFuZWxUcmlnZ2VyXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvc2l0aW9uKCkgPT09IFwicmlnaHRcIikge1xuICAgICAgY29uZmlnLnBvc2l0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFBvc2l0aW9uIMOgIGRyb2l0ZSBkdSBkw6ljbGVuY2hldXJcbiAgICAgICAgICBvcmlnaW5YOiBcImVuZFwiLFxuICAgICAgICAgIG9yaWdpblk6IFwiY2VudGVyXCIsXG4gICAgICAgICAgb3ZlcmxheVg6IFwic3RhcnRcIixcbiAgICAgICAgICBvdmVybGF5WTogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIFBvc2l0aW9uIMOgIGdhdWNoZSBkdSBkw6ljbGVuY2hldXIgKGZhbGxiYWNrKVxuICAgICAgICAgIG9yaWdpblg6IFwic3RhcnRcIixcbiAgICAgICAgICBvcmlnaW5ZOiBcImNlbnRlclwiLFxuICAgICAgICAgIG92ZXJsYXlYOiBcImVuZFwiLFxuICAgICAgICAgIG92ZXJsYXlZOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWdXaXRoRGVmYXVsdHMgPSB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICBtZW51Q29tcG9uZW50OiBjb25maWcubWVudUNvbXBvbmVudCA/PyBUYURlZmF1bHRQYW5lbENvbXBvbmVudCxcbiAgICAgIHRyaWdnZXJFbGVtZW50OiB0aGlzLnRyaWdnZXJIb3N0UmVmKCkubmF0aXZlRWxlbWVudCxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnRlbnRUcGwoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vbkNsb3NlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb3BlbihtYW51YWwgPSBmYWxzZSkge1xuICAgIGlmIChcbiAgICAgICFtYW51YWwgJiZcbiAgICAgIHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyAmJlxuICAgICAgdGhpcy5fY29uZmlnV2l0aERlZmF1bHRzLm1hbnVhbFRyaWdnZXIgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jb25maWdXaXRoRGVmYXVsdHM/LnRyaWdnZXJFbGVtZW50KSB7XG4gICAgICBMb2dnZXIuTG9nV2FybmluZyhcIk92ZXJsYXlQYW5lbDogbm8gdHJpZ2dlciBlbGVtZW50IHJlc29sdmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vdmVybGF5U2VydmljZS5vcGVuTWVudSh0aGlzLl9jb25maWdXaXRoRGVmYXVsdHMpO1xuICB9XG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLl9vdmVybGF5U2VydmljZS5jbG9zZU1lbnUoKTtcbiAgfVxufVxuIiwiPGRpdiAjdHJpZ2dlckhvc3QgKGNsaWNrKT1cInRoaXMub3BlbigpXCI+XG4gIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGhpcy50cmlnZ2VyVHBsKClcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19