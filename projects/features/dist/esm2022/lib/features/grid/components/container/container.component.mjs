import { Component, ViewChild, inject, input } from '@angular/core';
import { TaGridSessionService } from '../../services/grid-session.services';
import { TaGridViewService } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export class TaGridContainerComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.initialData = input();
        this.model = input('');
        this.colsMetaData = input([]);
        this.preset = input();
        this._session = inject(TaGridSessionService);
        this._service = inject(TaGridViewService);
    }
    ngAfterViewInit() {
        const raw = this._session.getFilter(this.gridId());
        this._grid.init({
            elementRef: this.tableElement,
            colsMetaData: this.colsMetaData(),
            initialFilter: raw ?? [],
            data: this.initialData(),
            preset: this.preset(),
            services: {
                getData$: params => this._service.getData$(this.model(), params),
            },
        });
    }
    ngOnDestroy() {
        this._grid.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridContainerComponent, isStandalone: true, selector: "ta-grid-container", inputs: { initialData: { classPropertyName: "initialData", publicName: "initialData", isSignal: true, isRequired: false, transformFunction: null }, model: { classPropertyName: "model", publicName: "model", isSignal: true, isRequired: false, transformFunction: null }, colsMetaData: { classPropertyName: "colsMetaData", publicName: "colsMetaData", isSignal: true, isRequired: false, transformFunction: null }, preset: { classPropertyName: "preset", publicName: "preset", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "tableElement", first: true, predicate: ["table"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div style=\"display: none\">\r\n  <div #table></div>\r\n</div>\r\n\r\n<ng-content></ng-content>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-container', standalone: true, imports: [], template: "<div style=\"display: none\">\r\n  <div #table></div>\r\n</div>\r\n\r\n<ng-content></ng-content>\r\n" }]
        }], propDecorators: { tableElement: [{
                type: ViewChild,
                args: ['table', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBeUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBU2hFLE1BQU0sT0FBTyx3QkFDWCxTQUFRLHVCQUEwQjtJQVJwQzs7UUFXRSxnQkFBVyxHQUFHLEtBQUssRUFBTyxDQUFDO1FBRTNCLFVBQUssR0FBRyxLQUFLLENBQVMsRUFBRSxDQUFDLENBQUM7UUFFMUIsaUJBQVksR0FBRyxLQUFLLENBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLFdBQU0sR0FBRyxLQUFLLEVBQVksQ0FBQztRQUluQixhQUFRLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBb0I5QztJQWxCQyxlQUFlO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakMsYUFBYSxFQUFFLEdBQUcsSUFBSSxFQUFFO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLFFBQVEsRUFBRTtnQkFDUixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDO2FBQ3BFO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVRLFdBQVc7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDOytHQWxDVSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwrdUJDZHJDLHNHQUtBOzs0RkRTYSx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsbUJBQW1CLGNBQ2pCLElBQUksV0FDUCxFQUFFOzhCQWdCMkIsWUFBWTtzQkFBakQsU0FBUzt1QkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgaW5qZWN0LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xNZXRhRGF0YSwgUHJlc2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3R5cGVzJztcbmltcG9ydCB7IFRhR3JpZFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC1zZXNzaW9uLnNlcnZpY2VzJztcbmltcG9ydCB7IFRhR3JpZFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1ncmlkLWNvbnRhaW5lcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIFRhR3JpZENvbnRhaW5lckNvbXBvbmVudDxUID0gdW5rbm93bj5cbiAgZXh0ZW5kcyBUYUFic3RyYWN0R3JpZENvbXBvbmVudDxUPlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveVxue1xuICBpbml0aWFsRGF0YSA9IGlucHV0PFRbXT4oKTtcblxuICBtb2RlbCA9IGlucHV0PHN0cmluZz4oJycpO1xuXG4gIGNvbHNNZXRhRGF0YSA9IGlucHV0PENvbE1ldGFEYXRhPGFueT5bXT4oW10pO1xuXG4gIHByZXNldCA9IGlucHV0PFByZXNldFtdPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywgeyBzdGF0aWM6IHRydWUgfSkgdGFibGVFbGVtZW50ITogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIF9zZXNzaW9uID0gaW5qZWN0KFRhR3JpZFNlc3Npb25TZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfc2VydmljZSA9IGluamVjdChUYUdyaWRWaWV3U2VydmljZSk7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuX3Nlc3Npb24uZ2V0RmlsdGVyKHRoaXMuZ3JpZElkKCkpO1xuXG4gICAgdGhpcy5fZ3JpZC5pbml0KHtcbiAgICAgIGVsZW1lbnRSZWY6IHRoaXMudGFibGVFbGVtZW50LFxuICAgICAgY29sc01ldGFEYXRhOiB0aGlzLmNvbHNNZXRhRGF0YSgpLFxuICAgICAgaW5pdGlhbEZpbHRlcjogcmF3ID8/IFtdLFxuICAgICAgZGF0YTogdGhpcy5pbml0aWFsRGF0YSgpLFxuICAgICAgcHJlc2V0OiB0aGlzLnByZXNldCgpLFxuICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgZ2V0RGF0YSQ6IHBhcmFtcyA9PiB0aGlzLl9zZXJ2aWNlLmdldERhdGEkPFQ+KHRoaXMubW9kZWwoKSwgcGFyYW1zKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9ncmlkLmRlc3Ryb3koKTtcbiAgfVxufVxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cclxuICA8ZGl2ICN0YWJsZT48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==