import { Component, inject, input } from '@angular/core';
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
    ngOnInit() {
        super.ngOnInit();
        const raw = this._session.getFilter(this.gridId());
        this._grid.init({
            colsMetaData: this.colsMetaData(),
            initialFilter: raw ?? [],
            data: this.initialData(),
            preset: this.preset(),
            services: this.model()
                ? { getData$: params => this._service.getData$(this.model(), params) }
                : undefined,
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._grid.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridContainerComponent, isStandalone: true, selector: "ta-grid-container", inputs: { initialData: { classPropertyName: "initialData", publicName: "initialData", isSignal: true, isRequired: false, transformFunction: null }, model: { classPropertyName: "model", publicName: "model", isSignal: true, isRequired: false, transformFunction: null }, colsMetaData: { classPropertyName: "colsMetaData", publicName: "colsMetaData", isSignal: true, isRequired: false, transformFunction: null }, preset: { classPropertyName: "preset", publicName: "preset", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-container', standalone: true, imports: [], template: "<ng-content></ng-content>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBU2hFLE1BQU0sT0FBTyx3QkFBc0MsU0FBUSx1QkFBMEI7SUFQckY7O1FBUUUsZ0JBQVcsR0FBRyxLQUFLLEVBQU8sQ0FBQztRQUUzQixVQUFLLEdBQUcsS0FBSyxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTFCLGlCQUFZLEdBQUcsS0FBSyxDQUFtQixFQUFFLENBQUMsQ0FBQztRQUUzQyxXQUFNLEdBQUcsS0FBSyxFQUFZLENBQUM7UUFFbkIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQXFCOUM7SUFuQlUsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pDLGFBQWEsRUFBRSxHQUFHLElBQUksRUFBRTtZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUN6RSxDQUFDLENBQUMsU0FBUztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUSxXQUFXO1FBQ2xCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7K0dBOUJVLHdCQUF3QjttR0FBeEIsd0JBQXdCLDBuQkNkckMsK0JBQ0E7OzRGRGFhLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxtQkFBbUIsY0FDakIsSUFBSSxXQUNQLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbE1ldGFEYXRhLCBQcmVzZXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBUYUdyaWRTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dyaWQtc2Vzc2lvbi5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFRhR3JpZFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC12aWV3LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYUFic3RyYWN0R3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLWdyaWQtY29udGFpbmVyJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFHcmlkQ29udGFpbmVyQ29tcG9uZW50PFQgPSB1bmtub3duPiBleHRlbmRzIFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50PFQ+IHtcclxuICBpbml0aWFsRGF0YSA9IGlucHV0PFRbXT4oKTtcclxuXHJcbiAgbW9kZWwgPSBpbnB1dDxzdHJpbmc+KCcnKTtcclxuXHJcbiAgY29sc01ldGFEYXRhID0gaW5wdXQ8Q29sTWV0YURhdGE8VD5bXT4oW10pO1xyXG5cclxuICBwcmVzZXQgPSBpbnB1dDxQcmVzZXRbXT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2Vzc2lvbiA9IGluamVjdChUYUdyaWRTZXNzaW9uU2VydmljZSk7XHJcbiAgcHJpdmF0ZSBfc2VydmljZSA9IGluamVjdChUYUdyaWRWaWV3U2VydmljZSk7XHJcblxyXG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgIGNvbnN0IHJhdyA9IHRoaXMuX3Nlc3Npb24uZ2V0RmlsdGVyKHRoaXMuZ3JpZElkKCkpO1xyXG5cclxuICAgIHRoaXMuX2dyaWQuaW5pdCh7XHJcbiAgICAgIGNvbHNNZXRhRGF0YTogdGhpcy5jb2xzTWV0YURhdGEoKSxcclxuICAgICAgaW5pdGlhbEZpbHRlcjogcmF3ID8/IFtdLFxyXG4gICAgICBkYXRhOiB0aGlzLmluaXRpYWxEYXRhKCksXHJcbiAgICAgIHByZXNldDogdGhpcy5wcmVzZXQoKSxcclxuICAgICAgc2VydmljZXM6IHRoaXMubW9kZWwoKVxyXG4gICAgICAgID8geyBnZXREYXRhJDogcGFyYW1zID0+IHRoaXMuX3NlcnZpY2UuZ2V0RGF0YSQ8VD4odGhpcy5tb2RlbCgpLCBwYXJhbXMpIH1cclxuICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gICAgdGhpcy5fZ3JpZC5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19