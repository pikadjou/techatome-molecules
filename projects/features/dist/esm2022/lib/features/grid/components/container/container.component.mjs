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
        /** Source de données maison, quand la grille ne lit pas un modèle du serveur. */
        this.dataService = input();
        /** `cursor` pour une source qui ne sait pas compter : le « voir plus » remplace les numéros de page. */
        this.pagination = input('page');
        this.pageSize = input();
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
            pagination: this.pagination(),
            pageSize: this.pageSize(),
            services: this.dataService() ??
                (this.model() ? { getData$: params => this._service.getData$(this.model(), params) } : undefined),
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._grid.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridContainerComponent, isStandalone: true, selector: "ta-grid-container", inputs: { initialData: { classPropertyName: "initialData", publicName: "initialData", isSignal: true, isRequired: false, transformFunction: null }, model: { classPropertyName: "model", publicName: "model", isSignal: true, isRequired: false, transformFunction: null }, colsMetaData: { classPropertyName: "colsMetaData", publicName: "colsMetaData", isSignal: true, isRequired: false, transformFunction: null }, preset: { classPropertyName: "preset", publicName: "preset", isSignal: true, isRequired: false, transformFunction: null }, dataService: { classPropertyName: "dataService", publicName: "dataService", isSignal: true, isRequired: false, transformFunction: null }, pagination: { classPropertyName: "pagination", publicName: "pagination", isSignal: true, isRequired: false, transformFunction: null }, pageSize: { classPropertyName: "pageSize", publicName: "pageSize", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-container', standalone: true, imports: [], template: "<ng-content></ng-content>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBU2hFLE1BQU0sT0FBTyx3QkFBc0MsU0FBUSx1QkFBMEI7SUFQckY7O1FBUUUsZ0JBQVcsR0FBRyxLQUFLLEVBQU8sQ0FBQztRQUUzQixVQUFLLEdBQUcsS0FBSyxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBRTFCLGlCQUFZLEdBQUcsS0FBSyxDQUFtQixFQUFFLENBQUMsQ0FBQztRQUUzQyxXQUFNLEdBQUcsS0FBSyxFQUFZLENBQUM7UUFFM0IsaUZBQWlGO1FBQ2pGLGdCQUFXLEdBQUcsS0FBSyxFQUFtQixDQUFDO1FBRXZDLHdHQUF3RztRQUN4RyxlQUFVLEdBQUcsS0FBSyxDQUFpQixNQUFNLENBQUMsQ0FBQztRQUUzQyxhQUFRLEdBQUcsS0FBSyxFQUFVLENBQUM7UUFFbkIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLGFBQVEsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQXVCOUM7SUFyQlUsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pDLGFBQWEsRUFBRSxHQUFHLElBQUksRUFBRTtZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN6QixRQUFRLEVBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUN2RyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVEsV0FBVztRQUNsQixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDOytHQXhDVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qiw0Z0NDZnJDLCtCQUNBOzs0RkRjYSx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsbUJBQW1CLGNBQ2pCLElBQUksV0FDUCxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvZ3JpZC1kYXRhJztcclxuaW1wb3J0IHsgQ29sTWV0YURhdGEsIFBhZ2luYXRpb25Nb2RlLCBQcmVzZXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHlwZXMnO1xyXG5pbXBvcnQgeyBUYUdyaWRTZXNzaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dyaWQtc2Vzc2lvbi5zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IFRhR3JpZFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC12aWV3LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYUFic3RyYWN0R3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhLWdyaWQtY29udGFpbmVyJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFHcmlkQ29udGFpbmVyQ29tcG9uZW50PFQgPSB1bmtub3duPiBleHRlbmRzIFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50PFQ+IHtcclxuICBpbml0aWFsRGF0YSA9IGlucHV0PFRbXT4oKTtcclxuXHJcbiAgbW9kZWwgPSBpbnB1dDxzdHJpbmc+KCcnKTtcclxuXHJcbiAgY29sc01ldGFEYXRhID0gaW5wdXQ8Q29sTWV0YURhdGE8VD5bXT4oW10pO1xyXG5cclxuICBwcmVzZXQgPSBpbnB1dDxQcmVzZXRbXT4oKTtcclxuXHJcbiAgLyoqIFNvdXJjZSBkZSBkb25uw6llcyBtYWlzb24sIHF1YW5kIGxhIGdyaWxsZSBuZSBsaXQgcGFzIHVuIG1vZMOobGUgZHUgc2VydmV1ci4gKi9cclxuICBkYXRhU2VydmljZSA9IGlucHV0PElEYXRhU2VydmljZTxUPj4oKTtcclxuXHJcbiAgLyoqIGBjdXJzb3JgIHBvdXIgdW5lIHNvdXJjZSBxdWkgbmUgc2FpdCBwYXMgY29tcHRlciA6IGxlIMKrIHZvaXIgcGx1cyDCuyByZW1wbGFjZSBsZXMgbnVtw6lyb3MgZGUgcGFnZS4gKi9cclxuICBwYWdpbmF0aW9uID0gaW5wdXQ8UGFnaW5hdGlvbk1vZGU+KCdwYWdlJyk7XHJcblxyXG4gIHBhZ2VTaXplID0gaW5wdXQ8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIF9zZXNzaW9uID0gaW5qZWN0KFRhR3JpZFNlc3Npb25TZXJ2aWNlKTtcclxuICBwcml2YXRlIF9zZXJ2aWNlID0gaW5qZWN0KFRhR3JpZFZpZXdTZXJ2aWNlKTtcclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgY29uc3QgcmF3ID0gdGhpcy5fc2Vzc2lvbi5nZXRGaWx0ZXIodGhpcy5ncmlkSWQoKSk7XHJcblxyXG4gICAgdGhpcy5fZ3JpZC5pbml0KHtcclxuICAgICAgY29sc01ldGFEYXRhOiB0aGlzLmNvbHNNZXRhRGF0YSgpLFxyXG4gICAgICBpbml0aWFsRmlsdGVyOiByYXcgPz8gW10sXHJcbiAgICAgIGRhdGE6IHRoaXMuaW5pdGlhbERhdGEoKSxcclxuICAgICAgcHJlc2V0OiB0aGlzLnByZXNldCgpLFxyXG4gICAgICBwYWdpbmF0aW9uOiB0aGlzLnBhZ2luYXRpb24oKSxcclxuICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUoKSxcclxuICAgICAgc2VydmljZXM6XHJcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSgpID8/XHJcbiAgICAgICAgKHRoaXMubW9kZWwoKSA/IHsgZ2V0RGF0YSQ6IHBhcmFtcyA9PiB0aGlzLl9zZXJ2aWNlLmdldERhdGEkPFQ+KHRoaXMubW9kZWwoKSwgcGFyYW1zKSB9IDogdW5kZWZpbmVkKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gICAgdGhpcy5fZ3JpZC5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19