import { Component, inject, input } from '@angular/core';
import { distinctUntilChanged, filter } from 'rxjs';
import { TaBaseComponent } from '@ta/utils';
import { TaTranslationGrid } from '../../../translation.service';
import { TaGridInstanceService } from '../services/grid-instance.service';
import * as i0 from "@angular/core";
export class TaAbstractGridComponent extends TaBaseComponent {
    grid() {
        return this._grid;
    }
    isGroup() {
        return this._grid.isGroup();
    }
    data() {
        return this._grid.data();
    }
    dataByGroup() {
        return this._grid.dataByGroup();
    }
    displayType() {
        return this._grid.displayType;
    }
    constructor() {
        super();
        this.gridId = input.required();
        this._dataService = inject(TaGridInstanceService);
        TaTranslationGrid.getInstance();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvYWJzdHJhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRzFFLE1BQU0sT0FBZ0IsdUJBQTJCLFNBQVEsZUFBZTtJQUcvRCxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTSxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ00sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFPRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBeEJWLFdBQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFVLENBQUM7UUFxQjFCLGlCQUFZLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFJbkQsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEMsb0JBQW9CLEVBQUUsRUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQzNCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDOUMsb0JBQW9CLEVBQUUsRUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQzNCLENBQUM7SUFDSixDQUFDOytHQXZDbUIsdUJBQXVCO21HQUF2Qix1QkFBdUIsaU5BRHRCLEVBQUU7OzRGQUNILHVCQUF1QjtrQkFENUMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgaW5qZWN0LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFRhVHJhbnNsYXRpb25HcmlkIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUYUdyaWREYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2dyaWQtZGF0YSc7XG5pbXBvcnQgeyBUYUdyaWRJbnN0YW5jZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ncmlkLWluc3RhbmNlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQ8VD4gZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBncmlkSWQgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XG5cbiAgcHVibGljIGdyaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyaWQ7XG4gIH1cbiAgcHVibGljIGlzR3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyaWQuaXNHcm91cCgpO1xuICB9XG4gIHB1YmxpYyBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9ncmlkLmRhdGEoKTtcbiAgfVxuICBwdWJsaWMgZGF0YUJ5R3JvdXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyaWQuZGF0YUJ5R3JvdXAoKTtcbiAgfVxuICBwdWJsaWMgZGlzcGxheVR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyaWQuZGlzcGxheVR5cGU7XG4gIH1cbiAgcHVibGljIGlzUmVhZHkkITogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHVibGljIGlzRGF0YVJlYWR5JCE6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJvdGVjdGVkIF9ncmlkITogVGFHcmlkRGF0YTxUPjtcbiAgcHJpdmF0ZSBfZGF0YVNlcnZpY2UgPSBpbmplY3QoVGFHcmlkSW5zdGFuY2VTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFRhVHJhbnNsYXRpb25HcmlkLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9ncmlkID0gdGhpcy5fZGF0YVNlcnZpY2UuZ2V0PFQ+KHRoaXMuZ3JpZElkKCksIHRydWUpO1xuICAgIHRoaXMuaXNSZWFkeSQgPSB0aGlzLl9ncmlkLmlzUmVhZHkkLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKGlzUmVhZHkgPT4gaXNSZWFkeSlcbiAgICApO1xuICAgIHRoaXMuaXNEYXRhUmVhZHkkID0gdGhpcy5fZ3JpZC5pc0RhdGFSZWFkeSQucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIoaXNSZWFkeSA9PiBpc1JlYWR5KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==