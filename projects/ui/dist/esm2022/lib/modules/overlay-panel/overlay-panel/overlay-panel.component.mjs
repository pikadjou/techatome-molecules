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
        this.closed = new EventEmitter();
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
        const configWithDefaults = {
            ...this.panelConfig,
            menuComponent: this.panelConfig.menuComponent ?? TaDefaultPanelComponent,
            triggerElement: this.triggerHostRef?.nativeElement,
            template: this.contentTpl,
        };
        if (!configWithDefaults.triggerElement) {
            console.log('OverlayPanel: no trigger element resolved');
            return;
        }
        this.triggerHostRef.nativeElement.addEventListener('click', () => {
            this.overlayService.openMenu(configWithDefaults);
        });
        this._registerSubscription(this.overlayService.onClose$.subscribe(() => {
            this.closed.emit();
        }));
    }
    close() {
        this.overlayService.closeMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaOverlayPanelComponent, deps: [{ token: i1.OverlayService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TaOverlayPanelComponent, isStandalone: true, selector: "ta-overlay-panel", inputs: { panelConfig: "panelConfig" }, outputs: { closed: "closed" }, queries: [{ propertyName: "triggerTpl", first: true, predicate: ["panelTrigger"], descendants: true }, { propertyName: "contentTpl", first: true, predicate: ["panelContent"], descendants: true }], viewQueries: [{ propertyName: "triggerHostRef", first: true, predicate: ["triggerHost"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div #triggerHost>\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaOverlayPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-overlay-panel', standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.None, template: "<div #triggerHost>\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n" }]
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
            }], closed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsL292ZXJsYXktcGFuZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL292ZXJsYXktcGFuZWwvb3ZlcmxheS1wYW5lbC9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFFWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7Ozs7QUFXbkYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGVBQWU7SUFVMUQsWUFBb0IsY0FBOEI7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFEVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFJNUMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDbkIsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFJLHVCQUF1QjtZQUN4RSxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxhQUFhO1lBQ2xELFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUN6RCxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbEMsQ0FBQzsrR0FyRFUsdUJBQXVCO21HQUF2Qix1QkFBdUIsNGVDM0JwQyxxR0FHQSx5RERtQlksWUFBWTs7NEZBS1gsdUJBQXVCO2tCQVJuQyxTQUFTOytCQUNFLGtCQUFrQixjQUNoQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsaUJBR1IsaUJBQWlCLENBQUMsSUFBSTttRkFHUCxVQUFVO3NCQUF2QyxZQUFZO3VCQUFDLGNBQWM7Z0JBQ0UsVUFBVTtzQkFBdkMsWUFBWTt1QkFBQyxjQUFjO2dCQUVnQixjQUFjO3NCQUF6RCxTQUFTO3VCQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBRWpDLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFEZWZhdWx0UGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9kZWZhdWx0LXBhbmVsL2RlZmF1bHQtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE92ZXJsYXlNZW51Q29uZmlnLCBPdmVybGF5U2VydmljZSB9IGZyb20gJy4uL292ZXJsYXkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLW92ZXJsYXktcGFuZWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL292ZXJsYXktcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vdmVybGF5LXBhbmVsLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRhT3ZlcmxheVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoJ3BhbmVsVHJpZ2dlcicpIHRyaWdnZXJUcGwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKCdwYW5lbENvbnRlbnQnKSBjb250ZW50VHBsITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKCd0cmlnZ2VySG9zdCcsIHsgc3RhdGljOiB0cnVlIH0pIHRyaWdnZXJIb3N0UmVmITogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgQElucHV0KCkgcGFuZWxDb25maWchOiBPdmVybGF5TWVudUNvbmZpZztcblxuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheVNlcnZpY2U6IE92ZXJsYXlTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGFuZWxDb25maWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNaXNzaW5nIHBhbmVsQ29uZmlnJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5jb250ZW50VHBsKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWlzc2luZyBwYW5lbENvbnRlbnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnRyaWdnZXJUcGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNaXNzaW5nIHBhbmVsVHJpZ2dlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZ1dpdGhEZWZhdWx0cyA9IHtcbiAgICAgIC4uLnRoaXMucGFuZWxDb25maWcsXG4gICAgICBtZW51Q29tcG9uZW50OiB0aGlzLnBhbmVsQ29uZmlnLm1lbnVDb21wb25lbnQgPz8gVGFEZWZhdWx0UGFuZWxDb21wb25lbnQsXG4gICAgICB0cmlnZ2VyRWxlbWVudDogdGhpcy50cmlnZ2VySG9zdFJlZj8ubmF0aXZlRWxlbWVudCxcbiAgICAgIHRlbXBsYXRlOiB0aGlzLmNvbnRlbnRUcGwsXG4gICAgfTtcblxuICAgIGlmICghY29uZmlnV2l0aERlZmF1bHRzLnRyaWdnZXJFbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnT3ZlcmxheVBhbmVsOiBubyB0cmlnZ2VyIGVsZW1lbnQgcmVzb2x2ZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXJIb3N0UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlLm9wZW5NZW51KGNvbmZpZ1dpdGhEZWZhdWx0cyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIHRoaXMub3ZlcmxheVNlcnZpY2Uub25DbG9zZSQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVNlcnZpY2UuY2xvc2VNZW51KCk7XG4gIH1cbn1cbiIsIjxkaXYgI3RyaWdnZXJIb3N0PlxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwidGhpcy50cmlnZ2VyVHBsXCI+PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==