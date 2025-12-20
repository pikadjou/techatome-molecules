import { Component, Input, ViewChild, inject, input } from '@angular/core';
import { TaGridSessionService } from '../../services/grid-session.services';
//import { TaGridViewService } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export class TaGridContainerComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.initialData = input();
        this.colsMetaData = [];
        this._session = inject(TaGridSessionService);
    }
    //private _service = inject(TaGridViewService);
    ngAfterViewInit() {
        const raw = this._session.getFilter(this.gridId());
        this._grid.init({
            elementRef: this.tableElement,
            colsMetaData: this.colsMetaData,
            initialFilter: raw ?? [],
            data: this.initialData(),
            preset: this.preset,
            // services: {
            //   getData$: params => this._service.getData$<any>(this.model, params),
            // },
        });
    }
    ngOnDestroy() {
        this._grid.destroy();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridContainerComponent, isStandalone: true, selector: "ta-grid-container", inputs: { initialData: { classPropertyName: "initialData", publicName: "initialData", isSignal: true, isRequired: false, transformFunction: null }, colsMetaData: { classPropertyName: "colsMetaData", publicName: "colsMetaData", isSignal: false, isRequired: false, transformFunction: null }, preset: { classPropertyName: "preset", publicName: "preset", isSignal: false, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "tableElement", first: true, predicate: ["table"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div style=\"display: none\">\r\n  <div #table></div>\r\n</div>\r\n\r\n<ng-content></ng-content>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-container', standalone: true, imports: [], template: "<div style=\"display: none\">\r\n  <div #table></div>\r\n</div>\r\n\r\n<ng-content></ng-content>\r\n" }]
        }], propDecorators: { colsMetaData: [{
                type: Input
            }], preset: [{
                type: Input
            }], tableElement: [{
                type: ViewChild,
                args: ['table', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsdUVBQXVFO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNoRSxNQUFNLE9BQU8sd0JBQ1gsU0FBUSx1QkFBMEI7SUFScEM7O1FBV0UsZ0JBQVcsR0FBRyxLQUFLLEVBQU8sQ0FBQztRQUczQixpQkFBWSxHQUF1QixFQUFFLENBQUM7UUFPOUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBcUJqRDtJQXBCQywrQ0FBK0M7SUFFL0MsZUFBZTtRQUNiLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2QsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixhQUFhLEVBQUUsR0FBRyxJQUFJLEVBQUU7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWM7WUFDZCx5RUFBeUU7WUFDekUsS0FBSztTQUNOLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUSxXQUFXO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQzsrR0FsQ1Usd0JBQXdCO21HQUF4Qix3QkFBd0IseW5CQ2RyQyxzR0FLQTs7NEZEU2Esd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLG1CQUFtQixjQUNqQixJQUFJLFdBQ1AsRUFBRTs4QkFXWCxZQUFZO3NCQURYLEtBQUs7Z0JBSU4sTUFBTTtzQkFETCxLQUFLO2dCQUdnQyxZQUFZO3NCQUFqRCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgaW5qZWN0LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sTWV0YURhdGEsIFByZXNldCB9IGZyb20gJy4uLy4uL21vZGVscy90eXBlcyc7XHJcbmltcG9ydCB7IFRhR3JpZFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC1zZXNzaW9uLnNlcnZpY2VzJztcclxuLy9pbXBvcnQgeyBUYUdyaWRWaWV3U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dyaWQtdmlldy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1ncmlkLWNvbnRhaW5lcicsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhR3JpZENvbnRhaW5lckNvbXBvbmVudDxUID0gdW5rbm93bj5cclxuICBleHRlbmRzIFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50PFQ+XHJcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcclxue1xyXG4gIGluaXRpYWxEYXRhID0gaW5wdXQ8VFtdPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbHNNZXRhRGF0YTogQ29sTWV0YURhdGE8YW55PltdID0gW107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJlc2V0PzogUHJlc2V0W107XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywgeyBzdGF0aWM6IHRydWUgfSkgdGFibGVFbGVtZW50ITogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBfc2Vzc2lvbiA9IGluamVjdChUYUdyaWRTZXNzaW9uU2VydmljZSk7XHJcbiAgLy9wcml2YXRlIF9zZXJ2aWNlID0gaW5qZWN0KFRhR3JpZFZpZXdTZXJ2aWNlKTtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgY29uc3QgcmF3ID0gdGhpcy5fc2Vzc2lvbi5nZXRGaWx0ZXIodGhpcy5ncmlkSWQoKSk7XHJcblxyXG4gICAgdGhpcy5fZ3JpZC5pbml0KHtcclxuICAgICAgZWxlbWVudFJlZjogdGhpcy50YWJsZUVsZW1lbnQsXHJcbiAgICAgIGNvbHNNZXRhRGF0YTogdGhpcy5jb2xzTWV0YURhdGEsXHJcbiAgICAgIGluaXRpYWxGaWx0ZXI6IHJhdyA/PyBbXSxcclxuICAgICAgZGF0YTogdGhpcy5pbml0aWFsRGF0YSgpLFxyXG4gICAgICBwcmVzZXQ6IHRoaXMucHJlc2V0LFxyXG4gICAgICAvLyBzZXJ2aWNlczoge1xyXG4gICAgICAvLyAgIGdldERhdGEkOiBwYXJhbXMgPT4gdGhpcy5fc2VydmljZS5nZXREYXRhJDxhbnk+KHRoaXMubW9kZWwsIHBhcmFtcyksXHJcbiAgICAgIC8vIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5fZ3JpZC5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+XHJcbiAgPGRpdiAjdGFibGU+PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4iXX0=