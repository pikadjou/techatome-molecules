import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { getPropertyTypes } from '../utils/object';
import { TaAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
export class CamBasePage extends TaAbstractComponent {
    constructor() {
        super();
    }
    _getPathParams(data) {
        return this._filterParams(this._route.params, getPropertyTypes(data));
    }
    _getQueryParams(data) {
        return this._filterParams(this._route.queryParams, getPropertyTypes(data));
    }
    _filterParams(routeParams, paramsAsked) {
        return routeParams.pipe(map(params => convertToParamMap(params)), map(params => this._getParamsTyped(paramsAsked, params)), distinctUntilChanged());
    }
    _getParamsTyped(paramsAsked, params) {
        let paramObject = {};
        for (let param in paramsAsked) {
            const value = params.get(param);
            if (value)
                paramObject[param] = paramsAsked[param] === 'number' ? Number(value) : value;
        }
        return paramObject;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBasePage, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamBasePage, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamBasePage, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Jhc2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHMUQsTUFBTSxPQUFnQixXQUFZLFNBQVEsbUJBQW1CO0lBQzNEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRVMsY0FBYyxDQUFtQixJQUFPO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFUyxlQUFlLENBQW1CLElBQU87UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGFBQWEsQ0FBSSxXQUErQixFQUFFLFdBQXVDO1FBQy9GLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDeEMsR0FBRyxDQUFjLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDckUsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlLENBQUMsV0FBb0MsRUFBRSxNQUFnQjtRQUM1RSxJQUFJLFdBQVcsR0FBUSxFQUFFLENBQUM7UUFFMUIsS0FBSyxJQUFJLEtBQUssSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUM5QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWhDLElBQUksS0FBSztnQkFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUYsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7K0dBL0JtQixXQUFXO21HQUFYLFdBQVcsMkVBRFYsRUFBRTs7NEZBQ0gsV0FBVztrQkFEaEMsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtTWFwLCBQYXJhbXMsIGNvbnZlcnRUb1BhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBnZXRQcm9wZXJ0eVR5cGVzIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0JztcbmltcG9ydCB7IFRhQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0Q29tcG9uZW50JztcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbUJhc2VQYWdlIGV4dGVuZHMgVGFBYnN0cmFjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFBhdGhQYXJhbXM8VCBleHRlbmRzIG9iamVjdD4oZGF0YTogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJQYXJhbXModGhpcy5fcm91dGUucGFyYW1zLCBnZXRQcm9wZXJ0eVR5cGVzKGRhdGEpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0UXVlcnlQYXJhbXM8VCBleHRlbmRzIG9iamVjdD4oZGF0YTogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJQYXJhbXModGhpcy5fcm91dGUucXVlcnlQYXJhbXMsIGdldFByb3BlcnR5VHlwZXMoZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyUGFyYW1zPFQ+KHJvdXRlUGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz4sIHBhcmFtc0Fza2VkOiB7IFtLIGluIGtleW9mIFRdOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiByb3V0ZVBhcmFtcy5waXBlKFxuICAgICAgbWFwKHBhcmFtcyA9PiBjb252ZXJ0VG9QYXJhbU1hcChwYXJhbXMpKSxcbiAgICAgIG1hcDxQYXJhbU1hcCwgVD4ocGFyYW1zID0+IHRoaXMuX2dldFBhcmFtc1R5cGVkKHBhcmFtc0Fza2VkLCBwYXJhbXMpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyYW1zVHlwZWQocGFyYW1zQXNrZWQ6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9LCBwYXJhbXM6IFBhcmFtTWFwKSB7XG4gICAgbGV0IHBhcmFtT2JqZWN0OiBhbnkgPSB7fTtcblxuICAgIGZvciAobGV0IHBhcmFtIGluIHBhcmFtc0Fza2VkKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtcy5nZXQocGFyYW0pO1xuXG4gICAgICBpZiAodmFsdWUpIHBhcmFtT2JqZWN0W3BhcmFtXSA9IHBhcmFtc0Fza2VkW3BhcmFtXSA9PT0gJ251bWJlcicgPyBOdW1iZXIodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtT2JqZWN0O1xuICB9XG59XG4iXX0=