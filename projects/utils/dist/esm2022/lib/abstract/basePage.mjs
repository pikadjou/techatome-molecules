import { Component } from '@angular/core';
import { convertToParamMap } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { getPropertyTypes } from '../utils/object';
import { TaAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
export class TaBasePage extends TaAbstractComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBasePage, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaBasePage, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBasePage, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Jhc2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHMUQsTUFBTSxPQUFnQixVQUFXLFNBQVEsbUJBQW1CO0lBQzFEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRVMsY0FBYyxDQUFtQixJQUFPO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFUyxlQUFlLENBQW1CLElBQU87UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGFBQWEsQ0FBSSxXQUErQixFQUFFLFdBQXVDO1FBQy9GLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDeEMsR0FBRyxDQUFjLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDckUsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlLENBQUMsV0FBb0MsRUFBRSxNQUFnQjtRQUM1RSxJQUFJLFdBQVcsR0FBUSxFQUFFLENBQUM7UUFFMUIsS0FBSyxJQUFJLEtBQUssSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUM5QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWhDLElBQUksS0FBSztnQkFBRSxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUYsQ0FBQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7K0dBL0JtQixVQUFVO21HQUFWLFVBQVUsMkVBRFQsRUFBRTs7NEZBQ0gsVUFBVTtrQkFEL0IsU0FBUzttQkFBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhcmFtTWFwLCBQYXJhbXMsIGNvbnZlcnRUb1BhcmFtTWFwIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBnZXRQcm9wZXJ0eVR5cGVzIH0gZnJvbSAnLi4vdXRpbHMvb2JqZWN0JztcbmltcG9ydCB7IFRhQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0Q29tcG9uZW50JztcblxuQENvbXBvbmVudCh7IHRlbXBsYXRlOiAnJyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQmFzZVBhZ2UgZXh0ZW5kcyBUYUFic3RyYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0UGF0aFBhcmFtczxUIGV4dGVuZHMgb2JqZWN0PihkYXRhOiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclBhcmFtcyh0aGlzLl9yb3V0ZS5wYXJhbXMsIGdldFByb3BlcnR5VHlwZXMoZGF0YSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRRdWVyeVBhcmFtczxUIGV4dGVuZHMgb2JqZWN0PihkYXRhOiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclBhcmFtcyh0aGlzLl9yb3V0ZS5xdWVyeVBhcmFtcywgZ2V0UHJvcGVydHlUeXBlcyhkYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJQYXJhbXM8VD4ocm91dGVQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPiwgcGFyYW1zQXNrZWQ6IHsgW0sgaW4ga2V5b2YgVF06IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIHJvdXRlUGFyYW1zLnBpcGUoXG4gICAgICBtYXAocGFyYW1zID0+IGNvbnZlcnRUb1BhcmFtTWFwKHBhcmFtcykpLFxuICAgICAgbWFwPFBhcmFtTWFwLCBUPihwYXJhbXMgPT4gdGhpcy5fZ2V0UGFyYW1zVHlwZWQocGFyYW1zQXNrZWQsIHBhcmFtcykpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQYXJhbXNUeXBlZChwYXJhbXNBc2tlZDogeyBbcDogc3RyaW5nXTogc3RyaW5nIH0sIHBhcmFtczogUGFyYW1NYXApIHtcbiAgICBsZXQgcGFyYW1PYmplY3Q6IGFueSA9IHt9O1xuXG4gICAgZm9yIChsZXQgcGFyYW0gaW4gcGFyYW1zQXNrZWQpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1zLmdldChwYXJhbSk7XG5cbiAgICAgIGlmICh2YWx1ZSkgcGFyYW1PYmplY3RbcGFyYW1dID0gcGFyYW1zQXNrZWRbcGFyYW1dID09PSAnbnVtYmVyJyA/IE51bWJlcih2YWx1ZSkgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1PYmplY3Q7XG4gIH1cbn1cbiJdfQ==