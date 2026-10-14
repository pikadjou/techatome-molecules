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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaAbstractGridComponent, isStandalone: true, selector: "ng-component", inputs: { gridId: { classPropertyName: "gridId", publicName: "gridId", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractGridComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvYWJzdHJhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRzFFLE1BQU0sT0FBZ0IsdUJBQTJCLFNBQVEsZUFBZTtJQUcvRCxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTSxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ00sV0FBVztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQU9EO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUF4QlYsV0FBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVUsQ0FBQztRQXFCMUIsaUJBQVksR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUluRCxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0QyxvQkFBb0IsRUFBRSxFQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDM0IsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM5QyxvQkFBb0IsRUFBRSxFQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FDM0IsQ0FBQztJQUNKLENBQUM7K0dBdkNtQix1QkFBdUI7bUdBQXZCLHVCQUF1QixxT0FESixFQUFFOzs0RkFDckIsdUJBQXVCO2tCQUQ1QyxTQUFTO21CQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIGluamVjdCwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uR3JpZCB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFHcmlkRGF0YSB9IGZyb20gJy4uL21vZGVscy9ncmlkLWRhdGEnO1xuaW1wb3J0IHsgVGFHcmlkSW5zdGFuY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZ3JpZC1pbnN0YW5jZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7IHN0YW5kYWxvbmU6IHRydWUsIHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50PFQ+IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZ3JpZElkID0gaW5wdXQucmVxdWlyZWQ8c3RyaW5nPigpO1xuXG4gIHB1YmxpYyBncmlkKCkge1xuICAgIHJldHVybiB0aGlzLl9ncmlkO1xuICB9XG4gIHB1YmxpYyBpc0dyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9ncmlkLmlzR3JvdXAoKTtcbiAgfVxuICBwdWJsaWMgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ3JpZC5kYXRhKCk7XG4gIH1cbiAgcHVibGljIGRhdGFCeUdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9ncmlkLmRhdGFCeUdyb3VwKCk7XG4gIH1cbiAgcHVibGljIGRpc3BsYXlUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLl9ncmlkLmRpc3BsYXlUeXBlKCk7XG4gIH1cbiAgcHVibGljIGlzUmVhZHkkITogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHVibGljIGlzRGF0YVJlYWR5JCE6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcHJvdGVjdGVkIF9ncmlkITogVGFHcmlkRGF0YTxUPjtcbiAgcHJpdmF0ZSBfZGF0YVNlcnZpY2UgPSBpbmplY3QoVGFHcmlkSW5zdGFuY2VTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIFRhVHJhbnNsYXRpb25HcmlkLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9ncmlkID0gdGhpcy5fZGF0YVNlcnZpY2UuZ2V0PFQ+KHRoaXMuZ3JpZElkKCksIHRydWUpO1xuICAgIHRoaXMuaXNSZWFkeSQgPSB0aGlzLl9ncmlkLmlzUmVhZHkkLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgZmlsdGVyKGlzUmVhZHkgPT4gaXNSZWFkeSlcbiAgICApO1xuICAgIHRoaXMuaXNEYXRhUmVhZHkkID0gdGhpcy5fZ3JpZC5pc0RhdGFSZWFkeSQucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBmaWx0ZXIoaXNSZWFkeSA9PiBpc1JlYWR5KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==