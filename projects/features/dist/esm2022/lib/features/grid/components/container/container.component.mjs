import { Component, ViewChild, inject, input } from '@angular/core';
import { TaGridSessionService } from '../../services/grid-session.services';
//import { TaGridViewService } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export class TaGridContainerComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.initialData = input();
        this.colsMetaData = input([]);
        this.preset = input();
        this._session = inject(TaGridSessionService);
    }
    //private _service = inject(TaGridViewService);
    ngAfterViewInit() {
        const raw = this._session.getFilter(this.gridId());
        this._grid.init({
            elementRef: this.tableElement,
            colsMetaData: this.colsMetaData(),
            initialFilter: raw ?? [],
            data: this.initialData(),
            preset: this.preset(),
            // services: {
            //   getData$: params => this._service.getData$<any>(this.model, params),
            // },
        });
    }
    ngOnDestroy() {
        this._grid.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridContainerComponent, isStandalone: true, selector: "ta-grid-container", inputs: { initialData: { classPropertyName: "initialData", publicName: "initialData", isSignal: true, isRequired: false, transformFunction: null }, colsMetaData: { classPropertyName: "colsMetaData", publicName: "colsMetaData", isSignal: true, isRequired: false, transformFunction: null }, preset: { classPropertyName: "preset", publicName: "preset", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "tableElement", first: true, predicate: ["table"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div style=\"display: none\">\r\n  <div #table></div>\r\n</div>\r\n\r\n<ng-content></ng-content>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-container', standalone: true, imports: [], template: "<div style=\"display: none\">\r\n  <div #table></div>\r\n</div>\r\n\r\n<ng-content></ng-content>\r\n" }]
        }], propDecorators: { tableElement: [{
                type: ViewChild,
                args: ['table', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBeUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsdUVBQXVFO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNoRSxNQUFNLE9BQU8sd0JBQ1gsU0FBUSx1QkFBMEI7SUFScEM7O1FBV0UsZ0JBQVcsR0FBRyxLQUFLLEVBQU8sQ0FBQztRQUUzQixpQkFBWSxHQUFHLEtBQUssQ0FBcUIsRUFBRSxDQUFDLENBQUM7UUFFN0MsV0FBTSxHQUFHLEtBQUssRUFBWSxDQUFDO1FBSW5CLGFBQVEsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQXFCakQ7SUFwQkMsK0NBQStDO0lBRS9DLGVBQWU7UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNkLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUM3QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQyxhQUFhLEVBQUUsR0FBRyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsY0FBYztZQUNkLHlFQUF5RTtZQUN6RSxLQUFLO1NBQ04sQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVRLFdBQVc7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDOytHQWhDVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qix1bkJDZHJDLHNHQUtBOzs0RkRTYSx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsbUJBQW1CLGNBQ2pCLElBQUksV0FDUCxFQUFFOzhCQWMyQixZQUFZO3NCQUFqRCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgVmlld0NoaWxkLCBpbmplY3QsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbE1ldGFEYXRhLCBQcmVzZXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHlwZXMnO1xuaW1wb3J0IHsgVGFHcmlkU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ncmlkLXNlc3Npb24uc2VydmljZXMnO1xuLy9pbXBvcnQgeyBUYUdyaWRWaWV3U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dyaWQtdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZ3JpZC1jb250YWluZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBUYUdyaWRDb250YWluZXJDb21wb25lbnQ8VCA9IHVua25vd24+XG4gIGV4dGVuZHMgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQ8VD5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgaW5pdGlhbERhdGEgPSBpbnB1dDxUW10+KCk7XG5cbiAgY29sc01ldGFEYXRhID0gaW5wdXQ8Q29sTWV0YURhdGE8YW55PltdPihbXSk7XG5cbiAgcHJlc2V0ID0gaW5wdXQ8UHJlc2V0W10+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJsZUVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX3Nlc3Npb24gPSBpbmplY3QoVGFHcmlkU2Vzc2lvblNlcnZpY2UpO1xuICAvL3ByaXZhdGUgX3NlcnZpY2UgPSBpbmplY3QoVGFHcmlkVmlld1NlcnZpY2UpO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCByYXcgPSB0aGlzLl9zZXNzaW9uLmdldEZpbHRlcih0aGlzLmdyaWRJZCgpKTtcblxuICAgIHRoaXMuX2dyaWQuaW5pdCh7XG4gICAgICBlbGVtZW50UmVmOiB0aGlzLnRhYmxlRWxlbWVudCxcbiAgICAgIGNvbHNNZXRhRGF0YTogdGhpcy5jb2xzTWV0YURhdGEoKSxcbiAgICAgIGluaXRpYWxGaWx0ZXI6IHJhdyA/PyBbXSxcbiAgICAgIGRhdGE6IHRoaXMuaW5pdGlhbERhdGEoKSxcbiAgICAgIHByZXNldDogdGhpcy5wcmVzZXQoKSxcbiAgICAgIC8vIHNlcnZpY2VzOiB7XG4gICAgICAvLyAgIGdldERhdGEkOiBwYXJhbXMgPT4gdGhpcy5fc2VydmljZS5nZXREYXRhJDxhbnk+KHRoaXMubW9kZWwsIHBhcmFtcyksXG4gICAgICAvLyB9LFxuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZ3JpZC5kZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgPGRpdiAjdGFibGU+PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=