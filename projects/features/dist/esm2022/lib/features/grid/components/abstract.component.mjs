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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvYWJzdHJhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRzFFLE1BQU0sT0FBZ0IsdUJBQTJCLFNBQVEsZUFBZTtJQUcvRCxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTSxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ00sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFPRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBeEJWLFdBQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFVLENBQUM7UUFxQjFCLGlCQUFZLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFJbkQsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEMsb0JBQW9CLEVBQUUsRUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQzNCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDOUMsb0JBQW9CLEVBQUUsRUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQzNCLENBQUM7SUFDSixDQUFDOytHQXZDbUIsdUJBQXVCO21HQUF2Qix1QkFBdUIsaU5BRHRCLEVBQUU7OzRGQUNILHVCQUF1QjtrQkFENUMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgaW5qZWN0LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25HcmlkIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFRhR3JpZERhdGEgfSBmcm9tICcuLi9tb2RlbHMvZ3JpZC1kYXRhJztcclxuaW1wb3J0IHsgVGFHcmlkSW5zdGFuY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZ3JpZC1pbnN0YW5jZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogJycgfSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50PFQ+IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBncmlkSWQgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XHJcblxyXG4gIHB1YmxpYyBncmlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dyaWQ7XHJcbiAgfVxyXG4gIHB1YmxpYyBpc0dyb3VwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dyaWQuaXNHcm91cCgpO1xyXG4gIH1cclxuICBwdWJsaWMgZGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9ncmlkLmRhdGEoKTtcclxuICB9XHJcbiAgcHVibGljIGRhdGFCeUdyb3VwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dyaWQuZGF0YUJ5R3JvdXAoKTtcclxuICB9XHJcbiAgcHVibGljIGRpc3BsYXlUeXBlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dyaWQuZGlzcGxheVR5cGU7XHJcbiAgfVxyXG4gIHB1YmxpYyBpc1JlYWR5JCE6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgcHVibGljIGlzRGF0YVJlYWR5JCE6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIHByb3RlY3RlZCBfZ3JpZCE6IFRhR3JpZERhdGE8VD47XHJcbiAgcHJpdmF0ZSBfZGF0YVNlcnZpY2UgPSBpbmplY3QoVGFHcmlkSW5zdGFuY2VTZXJ2aWNlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgVGFUcmFuc2xhdGlvbkdyaWQuZ2V0SW5zdGFuY2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fZ3JpZCA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldDxUPih0aGlzLmdyaWRJZCgpLCB0cnVlKTtcclxuICAgIHRoaXMuaXNSZWFkeSQgPSB0aGlzLl9ncmlkLmlzUmVhZHkkLnBpcGUoXHJcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgIGZpbHRlcihpc1JlYWR5ID0+IGlzUmVhZHkpXHJcbiAgICApO1xyXG4gICAgdGhpcy5pc0RhdGFSZWFkeSQgPSB0aGlzLl9ncmlkLmlzRGF0YVJlYWR5JC5waXBlKFxyXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgICBmaWx0ZXIoaXNSZWFkeSA9PiBpc1JlYWR5KVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19