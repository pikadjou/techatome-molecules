import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import { TaDefaultPanelComponent } from '../default-panel/default-panel.component';
import * as i0 from "@angular/core";
import * as i1 from "../overlay.service";
import * as i2 from "@angular/common";
export class TaOverlayPanelComponent extends TaBaseComponent {
    constructor(overlayService) {
        super();
        this.overlayService = overlayService;
        this.position = 'default';
        this.closed = new EventEmitter();
        this._configWithDefaults = null;
    }
    ngAfterViewInit() {
        if (!this.panelConfig) {
            console.log('Missing panelConfig');
            return;
        }
        if (!this.contentTpl) {
            console.log('Missing panelContent');
            return;
        }
        if (!this.triggerTpl) {
            console.log('Missing panelTrigger');
            return;
        }
        if (this.position === 'right') {
            this.panelConfig.positions = [
                {
                    // Position à droite du déclencheur
                    originX: 'end',
                    originY: 'center',
                    overlayX: 'start',
                    overlayY: 'center',
                },
                {
                    // Position à gauche du déclencheur (fallback)
                    originX: 'start',
                    originY: 'center',
                    overlayX: 'end',
                    overlayY: 'center',
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
        if (!manual && this._configWithDefaults && this._configWithDefaults.manualTrigger === true) {
            return;
        }
        if (!this._configWithDefaults?.triggerElement) {
            console.log('OverlayPanel: no trigger element resolved');
            return;
        }
        this.overlayService.openMenu(this._configWithDefaults);
    }
    close() {
        this.overlayService.closeMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaOverlayPanelComponent, deps: [{ token: i1.OverlayService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TaOverlayPanelComponent, isStandalone: true, selector: "ta-overlay-panel", inputs: { panelConfig: "panelConfig", position: "position" }, outputs: { closed: "closed" }, queries: [{ propertyName: "triggerTpl", first: true, predicate: ["panelTrigger"], descendants: true }, { propertyName: "contentTpl", first: true, predicate: ["panelContent"], descendants: true }], viewQueries: [{ propertyName: "triggerHostRef", first: true, predicate: ["triggerHost"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-fill\" #triggerHost (click)=\"this.open()\">\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaOverlayPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-overlay-panel', standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-fill\" #triggerHost (click)=\"this.open()\">\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.OverlayService }], propDecorators: { triggerTpl: [{
                type: ContentChild,
                args: ['panelTrigger']
            }], contentTpl: [{
                type: ContentChild,
                args: ['panelContent']
            }], triggerHostRef: [{
                type: ViewChild,
                args: ['triggerHost', { static: true }]
            }], panelConfig: [{
                type: Input
            }], position: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsL292ZXJsYXktcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFFWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFXbkYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQWU7SUFjMUQsWUFBb0IsY0FBOEI7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFEVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOekMsYUFBUSxHQUF3QixTQUFTLENBQUM7UUFFekMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFcEMsd0JBQW1CLEdBQXNDLElBQUksQ0FBQztJQUl0RSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25DLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRztnQkFDM0I7b0JBQ0UsbUNBQW1DO29CQUNuQyxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjtnQkFDRDtvQkFDRSw4Q0FBOEM7b0JBQzlDLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsUUFBUTtvQkFDakIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFLFFBQVE7aUJBQ25CO2FBQ0YsQ0FBQztRQUNKLENBQUM7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEdBQUc7WUFDekIsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNuQixhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUksdUJBQXVCO1lBQ3hFLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLGFBQWE7WUFDbEQsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzFCLENBQUM7UUFFRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSztRQUN4QixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzNGLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7WUFDekQsT0FBTztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ00sS0FBSztRQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEMsQ0FBQzsrR0E3RVUsdUJBQXVCO21HQUF2Qix1QkFBdUIsa2dCQzNCcEMsaUpBR0EseUREbUJZLFlBQVk7OzRGQUtYLHVCQUF1QjtrQkFSbkMsU0FBUzsrQkFDRSxrQkFBa0IsY0FDaEIsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDLGlCQUdSLGlCQUFpQixDQUFDLElBQUk7bUZBR1AsVUFBVTtzQkFBdkMsWUFBWTt1QkFBQyxjQUFjO2dCQUNFLFVBQVU7c0JBQXZDLFlBQVk7dUJBQUMsY0FBYztnQkFFZ0IsY0FBYztzQkFBekQsU0FBUzt1QkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUVqQyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFEZWZhdWx0UGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9kZWZhdWx0LXBhbmVsL2RlZmF1bHQtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE92ZXJsYXlNZW51Q29uZmlnLCBPdmVybGF5U2VydmljZSB9IGZyb20gJy4uL292ZXJsYXkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLW92ZXJsYXktcGFuZWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJsYXktcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRhT3ZlcmxheVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoJ3BhbmVsVHJpZ2dlcicpIHRyaWdnZXJUcGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKCdwYW5lbENvbnRlbnQnKSBjb250ZW50VHBsITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKCd0cmlnZ2VySG9zdCcsIHsgc3RhdGljOiB0cnVlIH0pIHRyaWdnZXJIb3N0UmVmITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgQElucHV0KCkgcGFuZWxDb25maWchOiBPdmVybGF5TWVudUNvbmZpZztcblxuICBASW5wdXQoKSBwb3NpdGlvbjogJ2RlZmF1bHQnIHwgJ3JpZ2h0JyA9ICdkZWZhdWx0JztcblxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByaXZhdGUgX2NvbmZpZ1dpdGhEZWZhdWx0czogT3ZlcmxheU1lbnVDb25maWc8dW5rbm93bj4gfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXlTZXJ2aWNlOiBPdmVybGF5U2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBhbmVsQ29uZmlnKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWlzc2luZyBwYW5lbENvbmZpZycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuY29udGVudFRwbCkge1xuICAgICAgY29uc29sZS5sb2coJ01pc3NpbmcgcGFuZWxDb250ZW50Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy50cmlnZ2VyVHBsKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWlzc2luZyBwYW5lbFRyaWdnZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgdGhpcy5wYW5lbENvbmZpZy5wb3NpdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBQb3NpdGlvbiDDoCBkcm9pdGUgZHUgZMOpY2xlbmNoZXVyXG4gICAgICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICAgICAgb3JpZ2luWTogJ2NlbnRlcicsXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gUG9zaXRpb24gw6AgZ2F1Y2hlIGR1IGTDqWNsZW5jaGV1ciAoZmFsbGJhY2spXG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAnY2VudGVyJyxcbiAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICB0aGlzLl9jb25maWdXaXRoRGVmYXVsdHMgPSB7XG4gICAgICAuLi50aGlzLnBhbmVsQ29uZmlnLFxuICAgICAgbWVudUNvbXBvbmVudDogdGhpcy5wYW5lbENvbmZpZy5tZW51Q29tcG9uZW50ID8/IFRhRGVmYXVsdFBhbmVsQ29tcG9uZW50LFxuICAgICAgdHJpZ2dlckVsZW1lbnQ6IHRoaXMudHJpZ2dlckhvc3RSZWY/Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5jb250ZW50VHBsLFxuICAgIH07XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2Uub25DbG9zZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIG9wZW4obWFudWFsID0gZmFsc2UpIHtcbiAgICBpZiAoIW1hbnVhbCAmJiB0aGlzLl9jb25maWdXaXRoRGVmYXVsdHMgJiYgdGhpcy5fY29uZmlnV2l0aERlZmF1bHRzLm1hbnVhbFRyaWdnZXIgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jb25maWdXaXRoRGVmYXVsdHM/LnRyaWdnZXJFbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnT3ZlcmxheVBhbmVsOiBubyB0cmlnZ2VyIGVsZW1lbnQgcmVzb2x2ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vdmVybGF5U2VydmljZS5vcGVuTWVudSh0aGlzLl9jb25maWdXaXRoRGVmYXVsdHMpO1xuICB9XG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLmNsb3NlTWVudSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1maWxsXCIgI3RyaWdnZXJIb3N0IChjbGljayk9XCJ0aGlzLm9wZW4oKVwiPlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGhpcy50cmlnZ2VyVHBsXCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==