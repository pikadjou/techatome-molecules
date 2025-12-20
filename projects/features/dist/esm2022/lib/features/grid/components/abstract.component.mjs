import { Component, inject, input } from '@angular/core';
import { distinctUntilChanged, filter } from 'rxjs';
import { TaBaseComponent } from '@ta/utils';
import { TaGridInstanceService } from '../services/grid-instance.service';
import * as i0 from "@angular/core";
export class TaAbstractGridComponent extends TaBaseComponent {
    get grid() {
        return this._grid;
    }
    get isGroup() {
        return this._grid.isGroup;
    }
    get data() {
        return this._grid.data;
    }
    get dataByGroup() {
        return this._grid.dataByGroup;
    }
    get displayType() {
        return this._grid.displayType;
    }
    constructor() {
        super();
        this.gridId = input.required();
        this._dataService = inject(TaGridInstanceService);
    }
    ngOnInit() {
        this._grid = this._dataService.get(this.gridId(), true);
        this.isReady$ = this._grid.isReady$.pipe(distinctUntilChanged(), filter(isReady => isReady));
        this.isDataReady$ = this._grid.isDataReady$.pipe(distinctUntilChanged(), filter(isReady => isReady));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaAbstractGridComponent, selector: "ng-component", inputs: { gridId: { classPropertyName: "gridId", publicName: "gridId", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractGridComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvYWJzdHJhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHNUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRzFFLE1BQU0sT0FBZ0IsdUJBQTJCLFNBQVEsZUFBZTtJQUd0RSxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQU9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUF4QlYsV0FBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVUsQ0FBQztRQXFCMUIsaUJBQVksR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUlyRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxvQkFBb0IsRUFBRSxFQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDM0IsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM5QyxvQkFBb0IsRUFBRSxFQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDM0IsQ0FBQztJQUNKLENBQUM7K0dBdENtQix1QkFBdUI7bUdBQXZCLHVCQUF1QixpTkFEdEIsRUFBRTs7NEZBQ0gsdUJBQXVCO2tCQUQ1QyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBpbmplY3QsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgVGFHcmlkRGF0YSB9IGZyb20gJy4uL21vZGVscy9ncmlkLWRhdGEnO1xyXG5pbXBvcnQgeyBUYUdyaWRJbnN0YW5jZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ncmlkLWluc3RhbmNlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQ8VD4gZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGdyaWRJZCA9IGlucHV0LnJlcXVpcmVkPHN0cmluZz4oKTtcclxuXHJcbiAgZ2V0IGdyaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ3JpZDtcclxuICB9XHJcbiAgZ2V0IGlzR3JvdXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ3JpZC5pc0dyb3VwO1xyXG4gIH1cclxuICBnZXQgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ncmlkLmRhdGE7XHJcbiAgfVxyXG4gIGdldCBkYXRhQnlHcm91cCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ncmlkLmRhdGFCeUdyb3VwO1xyXG4gIH1cclxuICBnZXQgZGlzcGxheVR5cGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZ3JpZC5kaXNwbGF5VHlwZTtcclxuICB9XHJcbiAgcHVibGljIGlzUmVhZHkkITogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBwdWJsaWMgaXNEYXRhUmVhZHkkITogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgcHJvdGVjdGVkIF9ncmlkITogVGFHcmlkRGF0YTxUPjtcclxuICBwcml2YXRlIF9kYXRhU2VydmljZSA9IGluamVjdChUYUdyaWRJbnN0YW5jZVNlcnZpY2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX2dyaWQgPSB0aGlzLl9kYXRhU2VydmljZS5nZXQodGhpcy5ncmlkSWQoKSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmlzUmVhZHkkID0gdGhpcy5fZ3JpZC5pc1JlYWR5JC5waXBlKFxyXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICBmaWx0ZXIoaXNSZWFkeSA9PiBpc1JlYWR5KVxyXG4gICAgKTtcclxuICAgIHRoaXMuaXNEYXRhUmVhZHkkID0gdGhpcy5fZ3JpZC5pc0RhdGFSZWFkeSQucGlwZShcclxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgZmlsdGVyKGlzUmVhZHkgPT4gaXNSZWFkeSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==