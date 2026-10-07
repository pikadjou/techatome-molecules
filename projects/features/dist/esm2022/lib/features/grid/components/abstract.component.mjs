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
        return this._grid.displayType();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvYWJzdHJhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRzFFLE1BQU0sT0FBZ0IsdUJBQTJCLFNBQVEsZUFBZTtJQUcvRCxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTSxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ00sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQU9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUF4QlYsV0FBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVUsQ0FBQztRQXFCMUIsaUJBQVksR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUluRCxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxvQkFBb0IsRUFBRSxFQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDM0IsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM5QyxvQkFBb0IsRUFBRSxFQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDM0IsQ0FBQztJQUNKLENBQUM7K0dBdkNtQix1QkFBdUI7bUdBQXZCLHVCQUF1QixpTkFEdEIsRUFBRTs7NEZBQ0gsdUJBQXVCO2tCQUQ1QyxTQUFTO21CQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBpbmplY3QsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvbkdyaWQgfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRhR3JpZERhdGEgfSBmcm9tICcuLi9tb2RlbHMvZ3JpZC1kYXRhJztcbmltcG9ydCB7IFRhR3JpZEluc3RhbmNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2dyaWQtaW5zdGFuY2Uuc2VydmljZSc7XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogJycgfSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYUFic3RyYWN0R3JpZENvbXBvbmVudDxUPiBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyaWRJZCA9IGlucHV0LnJlcXVpcmVkPHN0cmluZz4oKTtcblxuICBwdWJsaWMgZ3JpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JpZDtcbiAgfVxuICBwdWJsaWMgaXNHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JpZC5pc0dyb3VwKCk7XG4gIH1cbiAgcHVibGljIGRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyaWQuZGF0YSgpO1xuICB9XG4gIHB1YmxpYyBkYXRhQnlHcm91cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JpZC5kYXRhQnlHcm91cCgpO1xuICB9XG4gIHB1YmxpYyBkaXNwbGF5VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JpZC5kaXNwbGF5VHlwZSgpO1xuICB9XG4gIHB1YmxpYyBpc1JlYWR5JCE6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHB1YmxpYyBpc0RhdGFSZWFkeSQhOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHByb3RlY3RlZCBfZ3JpZCE6IFRhR3JpZERhdGE8VD47XG4gIHByaXZhdGUgX2RhdGFTZXJ2aWNlID0gaW5qZWN0KFRhR3JpZEluc3RhbmNlU2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBUYVRyYW5zbGF0aW9uR3JpZC5nZXRJbnN0YW5jZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZ3JpZCA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldDxUPih0aGlzLmdyaWRJZCgpLCB0cnVlKTtcbiAgICB0aGlzLmlzUmVhZHkkID0gdGhpcy5fZ3JpZC5pc1JlYWR5JC5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgIGZpbHRlcihpc1JlYWR5ID0+IGlzUmVhZHkpXG4gICAgKTtcbiAgICB0aGlzLmlzRGF0YVJlYWR5JCA9IHRoaXMuX2dyaWQuaXNEYXRhUmVhZHkkLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKGlzUmVhZHkgPT4gaXNSZWFkeSlcbiAgICApO1xuICB9XG59XG4iXX0=