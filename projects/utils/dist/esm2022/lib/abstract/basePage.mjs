import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { getPropertyTypes } from '../utils/object';
import { CamAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
export class CamBasePage extends CamAbstractComponent {
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
        return routeParams.pipe(map((params) => convertToParamMap(params)), map((params) => this._getParamsTyped(paramsAsked, params)), distinctUntilChanged());
    }
    _getParamsTyped(paramsAsked, params) {
        let paramObject = {};
        for (let param in paramsAsked) {
            const value = params.get(param);
            if (value)
                paramObject[param] =
                    paramsAsked[param] === 'number' ? Number(value) : value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Jhc2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHM0QsTUFBTSxPQUFnQixXQUFZLFNBQVEsb0JBQW9CO0lBQzVEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRVMsY0FBYyxDQUFtQixJQUFPO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFUyxlQUFlLENBQW1CLElBQU87UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGFBQWEsQ0FDbkIsV0FBK0IsRUFDL0IsV0FBdUM7UUFFdkMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUNyQixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzFDLEdBQUcsQ0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDdkUsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlLENBQ3JCLFdBQW9DLEVBQ3BDLE1BQWdCO1FBRWhCLElBQUksV0FBVyxHQUFRLEVBQUUsQ0FBQztRQUUxQixLQUFLLElBQUksS0FBSyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzlCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEMsSUFBSSxLQUFLO2dCQUNQLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzlELENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOytHQXZDbUIsV0FBVzttR0FBWCxXQUFXLDJFQURWLEVBQUU7OzRGQUNILFdBQVc7a0JBRGhDLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXJhbU1hcCwgUGFyYW1zLCBjb252ZXJ0VG9QYXJhbU1hcCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZ2V0UHJvcGVydHlUeXBlcyB9IGZyb20gJy4uL3V0aWxzL29iamVjdCc7XG5pbXBvcnQgeyBDYW1BYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4vYWJzdHJhY3RDb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHsgdGVtcGxhdGU6ICcnIH0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FtQmFzZVBhZ2UgZXh0ZW5kcyBDYW1BYnN0cmFjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldFBhdGhQYXJhbXM8VCBleHRlbmRzIG9iamVjdD4oZGF0YTogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJQYXJhbXModGhpcy5fcm91dGUucGFyYW1zLCBnZXRQcm9wZXJ0eVR5cGVzKGRhdGEpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0UXVlcnlQYXJhbXM8VCBleHRlbmRzIG9iamVjdD4oZGF0YTogVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJQYXJhbXModGhpcy5fcm91dGUucXVlcnlQYXJhbXMsIGdldFByb3BlcnR5VHlwZXMoZGF0YSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyUGFyYW1zPFQ+KFxuICAgIHJvdXRlUGFyYW1zOiBPYnNlcnZhYmxlPFBhcmFtcz4sXG4gICAgcGFyYW1zQXNrZWQ6IHsgW0sgaW4ga2V5b2YgVF06IHN0cmluZyB9XG4gICkge1xuICAgIHJldHVybiByb3V0ZVBhcmFtcy5waXBlKFxuICAgICAgbWFwKChwYXJhbXMpID0+IGNvbnZlcnRUb1BhcmFtTWFwKHBhcmFtcykpLFxuICAgICAgbWFwPFBhcmFtTWFwLCBUPigocGFyYW1zKSA9PiB0aGlzLl9nZXRQYXJhbXNUeXBlZChwYXJhbXNBc2tlZCwgcGFyYW1zKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhcmFtc1R5cGVkKFxuICAgIHBhcmFtc0Fza2VkOiB7IFtwOiBzdHJpbmddOiBzdHJpbmcgfSxcbiAgICBwYXJhbXM6IFBhcmFtTWFwXG4gICkge1xuICAgIGxldCBwYXJhbU9iamVjdDogYW55ID0ge307XG5cbiAgICBmb3IgKGxldCBwYXJhbSBpbiBwYXJhbXNBc2tlZCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJhbXMuZ2V0KHBhcmFtKTtcblxuICAgICAgaWYgKHZhbHVlKVxuICAgICAgICBwYXJhbU9iamVjdFtwYXJhbV0gPVxuICAgICAgICAgIHBhcmFtc0Fza2VkW3BhcmFtXSA9PT0gJ251bWJlcicgPyBOdW1iZXIodmFsdWUpIDogdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtT2JqZWN0O1xuICB9XG59XG4iXX0=