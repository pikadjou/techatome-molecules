import { CommonModule } from "@angular/common";
import { Component, ContentChild, EventEmitter, inject, input, Output, ViewChild, ViewEncapsulation, } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { TaDefaultPanelComponent } from "../default-panel/default-panel.component";
import { OverlayService } from "../overlay.service";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TaOverlayPanelComponent extends TaBaseComponent {
    constructor() {
        super();
        this.panelConfig = input.required();
        this.position = input("default");
        this.closed = new EventEmitter();
        this._configWithDefaults = null;
        this._overlayService = inject(OverlayService);
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
            console.log("OverlayPanel: no trigger element resolved");
            return;
        }
        this._overlayService.openMenu(this._configWithDefaults);
    }
    close() {
        this._overlayService.closeMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaOverlayPanelComponent, isStandalone: true, selector: "ta-overlay-panel", inputs: { panelConfig: { classPropertyName: "panelConfig", publicName: "panelConfig", isSignal: true, isRequired: true, transformFunction: null }, position: { classPropertyName: "position", publicName: "position", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closed: "closed" }, queries: [{ propertyName: "triggerTpl", first: true, predicate: ["panelTrigger"], descendants: true }, { propertyName: "contentTpl", first: true, predicate: ["panelContent"], descendants: true }], viewQueries: [{ propertyName: "triggerHostRef", first: true, predicate: ["triggerHost"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-fill\" #triggerHost (click)=\"this.open()\">\n  <ng-container [ngTemplateOutlet]=\"this.triggerTpl\"></ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaOverlayPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-overlay-panel", standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-fill\" #triggerHost (click)=\"this.open()\">\n  <ng-container [ngTemplateOutlet]=\"this.triggerTpl\"></ng-container>\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { triggerTpl: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsL292ZXJsYXktcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFFWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBcUIsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQVV2RSxNQUFNLE9BQU8sdUJBQ1gsU0FBUSxlQUFlO0lBbUJ2QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBWFYsZ0JBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFxQixDQUFDO1FBRWxELGFBQVEsR0FBRyxLQUFLLENBQXNCLFNBQVMsQ0FBQyxDQUFDO1FBRXZDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXBDLHdCQUFtQixHQUFzQyxJQUFJLENBQUM7UUFFOUQsb0JBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFJakQsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxTQUFTLEdBQUc7Z0JBQ2pCO29CQUNFLG1DQUFtQztvQkFDbkMsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsUUFBUTtpQkFDbkI7Z0JBQ0Q7b0JBQ0UsOENBQThDO29CQUM5QyxPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjthQUNGLENBQUM7UUFDSixDQUFDO1FBRUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3pCLEdBQUcsTUFBTTtZQUNULGFBQWEsRUFBRSxNQUFNLENBQUMsYUFBYSxJQUFJLHVCQUF1QjtZQUM5RCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxhQUFhO1lBQ2xELFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUs7UUFDeEIsSUFDRSxDQUFDLE1BQU07WUFDUCxJQUFJLENBQUMsbUJBQW1CO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUMvQyxDQUFDO1lBQ0QsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUN6RCxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDOytHQXhGVSx1QkFBdUI7bUdBQXZCLHVCQUF1QiwwdEJDNUJwQyxrSkFHQSx5RERvQlksWUFBWTs7NEZBS1gsdUJBQXVCO2tCQVJuQyxTQUFTOytCQUNFLGtCQUFrQixjQUNoQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsaUJBR1IsaUJBQWlCLENBQUMsSUFBSTt3REFNUCxVQUFVO3NCQUF2QyxZQUFZO3VCQUFDLGNBQWM7Z0JBQ0UsVUFBVTtzQkFBdkMsWUFBWTt1QkFBQyxjQUFjO2dCQUc1QixjQUFjO3NCQURiLFNBQVM7dUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFPaEMsTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5qZWN0LFxuICBpbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBUYURlZmF1bHRQYW5lbENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0LXBhbmVsL2RlZmF1bHQtcGFuZWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPdmVybGF5TWVudUNvbmZpZywgT3ZlcmxheVNlcnZpY2UgfSBmcm9tIFwiLi4vb3ZlcmxheS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1vdmVybGF5LXBhbmVsXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogXCIuL292ZXJsYXktcGFuZWwuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL292ZXJsYXktcGFuZWwuY29tcG9uZW50LnNjc3NcIl0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRhT3ZlcmxheVBhbmVsQ29tcG9uZW50XG4gIGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdFxue1xuICBAQ29udGVudENoaWxkKFwicGFuZWxUcmlnZ2VyXCIpIHRyaWdnZXJUcGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKFwicGFuZWxDb250ZW50XCIpIGNvbnRlbnRUcGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBWaWV3Q2hpbGQoXCJ0cmlnZ2VySG9zdFwiLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICB0cmlnZ2VySG9zdFJlZiE6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIHBhbmVsQ29uZmlnID0gaW5wdXQucmVxdWlyZWQ8T3ZlcmxheU1lbnVDb25maWc+KCk7XG5cbiAgcG9zaXRpb24gPSBpbnB1dDxcImRlZmF1bHRcIiB8IFwicmlnaHRcIj4oXCJkZWZhdWx0XCIpO1xuXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfY29uZmlnV2l0aERlZmF1bHRzOiBPdmVybGF5TWVudUNvbmZpZzx1bmtub3duPiB8IG51bGwgPSBudWxsO1xuXG4gIHByaXZhdGUgX292ZXJsYXlTZXJ2aWNlID0gaW5qZWN0KE92ZXJsYXlTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucGFuZWxDb25maWcoKTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgY29uc29sZS5sb2coXCJNaXNzaW5nIHBhbmVsQ29uZmlnXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29udGVudFRwbCkge1xuICAgICAgY29uc29sZS5sb2coXCJNaXNzaW5nIHBhbmVsQ29udGVudFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnRyaWdnZXJUcGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTWlzc2luZyBwYW5lbFRyaWdnZXJcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9zaXRpb24oKSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICBjb25maWcucG9zaXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgLy8gUG9zaXRpb24gw6AgZHJvaXRlIGR1IGTDqWNsZW5jaGV1clxuICAgICAgICAgIG9yaWdpblg6IFwiZW5kXCIsXG4gICAgICAgICAgb3JpZ2luWTogXCJjZW50ZXJcIixcbiAgICAgICAgICBvdmVybGF5WDogXCJzdGFydFwiLFxuICAgICAgICAgIG92ZXJsYXlZOiBcImNlbnRlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gUG9zaXRpb24gw6AgZ2F1Y2hlIGR1IGTDqWNsZW5jaGV1ciAoZmFsbGJhY2spXG4gICAgICAgICAgb3JpZ2luWDogXCJzdGFydFwiLFxuICAgICAgICAgIG9yaWdpblk6IFwiY2VudGVyXCIsXG4gICAgICAgICAgb3ZlcmxheVg6IFwiZW5kXCIsXG4gICAgICAgICAgb3ZlcmxheVk6IFwiY2VudGVyXCIsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyA9IHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIG1lbnVDb21wb25lbnQ6IGNvbmZpZy5tZW51Q29tcG9uZW50ID8/IFRhRGVmYXVsdFBhbmVsQ29tcG9uZW50LFxuICAgICAgdHJpZ2dlckVsZW1lbnQ6IHRoaXMudHJpZ2dlckhvc3RSZWY/Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5jb250ZW50VHBsLFxuICAgIH07XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMuX292ZXJsYXlTZXJ2aWNlLm9uQ2xvc2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VkLmVtaXQoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKG1hbnVhbCA9IGZhbHNlKSB7XG4gICAgaWYgKFxuICAgICAgIW1hbnVhbCAmJlxuICAgICAgdGhpcy5fY29uZmlnV2l0aERlZmF1bHRzICYmXG4gICAgICB0aGlzLl9jb25maWdXaXRoRGVmYXVsdHMubWFudWFsVHJpZ2dlciA9PT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cz8udHJpZ2dlckVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiT3ZlcmxheVBhbmVsOiBubyB0cmlnZ2VyIGVsZW1lbnQgcmVzb2x2ZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX292ZXJsYXlTZXJ2aWNlLm9wZW5NZW51KHRoaXMuX2NvbmZpZ1dpdGhEZWZhdWx0cyk7XG4gIH1cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMuX292ZXJsYXlTZXJ2aWNlLmNsb3NlTWVudSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1maWxsXCIgI3RyaWdnZXJIb3N0IChjbGljayk9XCJ0aGlzLm9wZW4oKVwiPlxuICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRoaXMudHJpZ2dlclRwbFwiPjwvbmctY29udGFpbmVyPlxuPC9kaXY+XG4iXX0=