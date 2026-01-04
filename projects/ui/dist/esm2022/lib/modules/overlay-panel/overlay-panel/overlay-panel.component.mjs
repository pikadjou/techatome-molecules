import { CommonModule } from "@angular/common";
import { Component, ContentChild, EventEmitter, input, Output, ViewChild, ViewEncapsulation, } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { TaDefaultPanelComponent } from "../default-panel/default-panel.component";
import * as i0 from "@angular/core";
import * as i1 from "../overlay.service";
import * as i2 from "@angular/common";
export class TaOverlayPanelComponent extends TaBaseComponent {
    constructor(overlayService) {
        super();
        this.overlayService = overlayService;
        this.panelConfig = input.required();
        this.position = input("default");
        this.closed = new EventEmitter();
        this._configWithDefaults = null;
    }
    ngAfterViewInit() {
        const config = this.panelConfig();
        if (!config) {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaOverlayPanelComponent, isStandalone: true, selector: "ta-overlay-panel", inputs: { panelConfig: { classPropertyName: "panelConfig", publicName: "panelConfig", isSignal: true, isRequired: true, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closed: "closed" }, queries: [{ propertyName: "triggerTpl", first: true, predicate: ["panelTrigger"], descendants: true }, { propertyName: "contentTpl", first: true, predicate: ["panelContent"], descendants: true }], viewQueries: [{ propertyName: "triggerHostRef", first: true, predicate: ["triggerHost"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-fill\" #triggerHost (click)=\"this.open()\">\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
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
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsL292ZXJsYXktcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFFWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFXbkYsTUFBTSxPQUFPLHVCQUNYLFNBQVEsZUFBZTtJQWlCdkIsWUFBb0IsY0FBOEI7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFEVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSbEQsZ0JBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFxQixDQUFDO1FBRWxELGFBQVEsR0FBRyxLQUFLLENBQXNCLFNBQVMsQ0FBQyxDQUFDO1FBRXZDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXBDLHdCQUFtQixHQUFzQyxJQUFJLENBQUM7SUFJdEUsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxTQUFTLEdBQUc7Z0JBQ2pCO29CQUNFLG1DQUFtQztvQkFDbkMsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsUUFBUTtpQkFDbkI7Z0JBQ0Q7b0JBQ0UsOENBQThDO29CQUM5QyxPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjthQUNGLENBQUM7UUFDSixDQUFDO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3pCLEdBQUcsTUFBTTtZQUNULGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxJQUFJLHVCQUF1QjtZQUM5RCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxhQUFhO1lBQ2xELFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDeEIsSUFDRSxDQUFDLE1BQU07WUFDUCxJQUFJLENBQUMsbUJBQW1CO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUMvQyxDQUFDO1lBQ0QsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUN6RCxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQyxDQUFDOytHQXRGVSx1QkFBdUI7bUdBQXZCLHVCQUF1QiwwdEJDM0JwQyxpSkFHQSx5RERtQlksWUFBWTs7NEZBS1gsdUJBQXVCO2tCQVJuQyxTQUFTOytCQUNFLGtCQUFrQixjQUNoQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsaUJBR1IsaUJBQWlCLENBQUMsSUFBSTttRkFNUCxVQUFVO3NCQUF2QyxZQUFZO3VCQUFDLGNBQWM7Z0JBQ0UsVUFBVTtzQkFBdkMsWUFBWTt1QkFBQyxjQUFjO2dCQUc1QixjQUFjO3NCQURiLFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFPaEMsTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgVGFEZWZhdWx0UGFuZWxDb21wb25lbnQgfSBmcm9tIFwiLi4vZGVmYXVsdC1wYW5lbC9kZWZhdWx0LXBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgT3ZlcmxheU1lbnVDb25maWcsIE92ZXJsYXlTZXJ2aWNlIH0gZnJvbSBcIi4uL292ZXJsYXkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtb3ZlcmxheS1wYW5lbFwiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6IFwiLi9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5zY3NzXCJdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUYU92ZXJsYXlQYW5lbENvbXBvbmVudFxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXRcbntcbiAgQENvbnRlbnRDaGlsZChcInBhbmVsVHJpZ2dlclwiKSB0cmlnZ2VyVHBsITogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChcInBhbmVsQ29udGVudFwiKSBjb250ZW50VHBsITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKFwidHJpZ2dlckhvc3RcIiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgdHJpZ2dlckhvc3RSZWYhOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBwYW5lbENvbmZpZyA9IGlucHV0LnJlcXVpcmVkPE92ZXJsYXlNZW51Q29uZmlnPigpO1xuXG4gIHBvc2l0aW9uID0gaW5wdXQ8XCJkZWZhdWx0XCIgfCBcInJpZ2h0XCI+KFwiZGVmYXVsdFwiKTtcblxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByaXZhdGUgX2NvbmZpZ1dpdGhEZWZhdWx0czogT3ZlcmxheU1lbnVDb25maWc8dW5rbm93bj4gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXlTZXJ2aWNlOiBPdmVybGF5U2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wYW5lbENvbmZpZygpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk1pc3NpbmcgcGFuZWxDb25maWdcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5jb250ZW50VHBsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk1pc3NpbmcgcGFuZWxDb250ZW50XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudHJpZ2dlclRwbCkge1xuICAgICAgY29uc29sZS5sb2coXCJNaXNzaW5nIHBhbmVsVHJpZ2dlclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbigpID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIGNvbmZpZy5wb3NpdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBQb3NpdGlvbiDDoCBkcm9pdGUgZHUgZMOpY2xlbmNoZXVyXG4gICAgICAgICAgb3JpZ2luWDogXCJlbmRcIixcbiAgICAgICAgICBvcmlnaW5ZOiBcImNlbnRlclwiLFxuICAgICAgICAgIG92ZXJsYXlYOiBcInN0YXJ0XCIsXG4gICAgICAgICAgb3ZlcmxheVk6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBQb3NpdGlvbiDDoCBnYXVjaGUgZHUgZMOpY2xlbmNoZXVyIChmYWxsYmFjaylcbiAgICAgICAgICBvcmlnaW5YOiBcInN0YXJ0XCIsXG4gICAgICAgICAgb3JpZ2luWTogXCJjZW50ZXJcIixcbiAgICAgICAgICBvdmVybGF5WDogXCJlbmRcIixcbiAgICAgICAgICBvdmVybGF5WTogXCJjZW50ZXJcIixcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnV2l0aERlZmF1bHRzID0ge1xuICAgICAgLi4uY29uZmlnLFxuICAgICAgbWVudUNvbXBvbmVudDogY29uZmlnLm1lbnVDb21wb25lbnQgPz8gVGFEZWZhdWx0UGFuZWxDb21wb25lbnQsXG4gICAgICB0cmlnZ2VyRWxlbWVudDogdGhpcy50cmlnZ2VySG9zdFJlZj8ubmF0aXZlRWxlbWVudCxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnRlbnRUcGwsXG4gICAgfTtcblxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5vdmVybGF5U2VydmljZS5vbkNsb3NlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgb3BlbihtYW51YWwgPSBmYWxzZSkge1xuICAgIGlmIChcbiAgICAgICFtYW51YWwgJiZcbiAgICAgIHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyAmJlxuICAgICAgdGhpcy5fY29uZmlnV2l0aERlZmF1bHRzLm1hbnVhbFRyaWdnZXIgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jb25maWdXaXRoRGVmYXVsdHM/LnRyaWdnZXJFbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk92ZXJsYXlQYW5lbDogbm8gdHJpZ2dlciBlbGVtZW50IHJlc29sdmVkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLm9wZW5NZW51KHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyk7XG4gIH1cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuY2xvc2VNZW51KCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4LWZpbGxcIiAjdHJpZ2dlckhvc3QgKGNsaWNrKT1cInRoaXMub3BlbigpXCI+XG4gIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0aGlzLnRyaWdnZXJUcGxcIj48L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19