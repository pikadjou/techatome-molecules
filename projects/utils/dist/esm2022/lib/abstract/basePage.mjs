import { Component } from "@angular/core";
import { convertToParamMap } from "@angular/router";
import { distinctUntilChanged, map } from "rxjs/operators";
import { getPropertyTypes } from "../utils/object";
import { TaAbstractComponent } from "./abstractComponent";
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
        return routeParams.pipe(map((params) => convertToParamMap(params)), map((params) => this._getParamsTyped(paramsAsked, params)), distinctUntilChanged());
    }
    _getParamsTyped(paramsAsked, params) {
        let paramObject = {};
        for (let param in paramsAsked) {
            const value = params.get(param);
            if (value)
                paramObject[param] =
                    paramsAsked[param] === "number" ? Number(value) : value;
        }
        return paramObject;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBasePage, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaBasePage, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBasePage, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2Fic3RyYWN0L2Jhc2VQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFvQixpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHMUQsTUFBTSxPQUFnQixVQUFXLFNBQVEsbUJBQW1CO0lBQzFEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRVMsY0FBYyxDQUFtQixJQUFPO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFUyxlQUFlLENBQW1CLElBQU87UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLGFBQWEsQ0FDbkIsV0FBK0IsRUFDL0IsV0FBdUM7UUFFdkMsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUNyQixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzFDLEdBQUcsQ0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDdkUsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlLENBQ3JCLFdBQW9DLEVBQ3BDLE1BQWdCO1FBRWhCLElBQUksV0FBVyxHQUFRLEVBQUUsQ0FBQztRQUUxQixLQUFLLElBQUksS0FBSyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQzlCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEMsSUFBSSxLQUFLO2dCQUNQLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzlELENBQUM7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOytHQXZDbUIsVUFBVTttR0FBVixVQUFVLDJFQURULEVBQUU7OzRGQUNILFVBQVU7a0JBRC9CLFNBQVM7bUJBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhcmFtTWFwLCBQYXJhbXMsIGNvbnZlcnRUb1BhcmFtTWFwIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBnZXRQcm9wZXJ0eVR5cGVzIH0gZnJvbSBcIi4uL3V0aWxzL29iamVjdFwiO1xuaW1wb3J0IHsgVGFBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gXCIuL2Fic3RyYWN0Q29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoeyB0ZW1wbGF0ZTogXCJcIiB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhQmFzZVBhZ2UgZXh0ZW5kcyBUYUFic3RyYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0UGF0aFBhcmFtczxUIGV4dGVuZHMgb2JqZWN0PihkYXRhOiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclBhcmFtcyh0aGlzLl9yb3V0ZS5wYXJhbXMsIGdldFByb3BlcnR5VHlwZXMoZGF0YSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9nZXRRdWVyeVBhcmFtczxUIGV4dGVuZHMgb2JqZWN0PihkYXRhOiBUKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlclBhcmFtcyh0aGlzLl9yb3V0ZS5xdWVyeVBhcmFtcywgZ2V0UHJvcGVydHlUeXBlcyhkYXRhKSk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJQYXJhbXM8VD4oXG4gICAgcm91dGVQYXJhbXM6IE9ic2VydmFibGU8UGFyYW1zPixcbiAgICBwYXJhbXNBc2tlZDogeyBbSyBpbiBrZXlvZiBUXTogc3RyaW5nIH1cbiAgKSB7XG4gICAgcmV0dXJuIHJvdXRlUGFyYW1zLnBpcGUoXG4gICAgICBtYXAoKHBhcmFtcykgPT4gY29udmVydFRvUGFyYW1NYXAocGFyYW1zKSksXG4gICAgICBtYXA8UGFyYW1NYXAsIFQ+KChwYXJhbXMpID0+IHRoaXMuX2dldFBhcmFtc1R5cGVkKHBhcmFtc0Fza2VkLCBwYXJhbXMpKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyYW1zVHlwZWQoXG4gICAgcGFyYW1zQXNrZWQ6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9LFxuICAgIHBhcmFtczogUGFyYW1NYXBcbiAgKSB7XG4gICAgbGV0IHBhcmFtT2JqZWN0OiBhbnkgPSB7fTtcblxuICAgIGZvciAobGV0IHBhcmFtIGluIHBhcmFtc0Fza2VkKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcmFtcy5nZXQocGFyYW0pO1xuXG4gICAgICBpZiAodmFsdWUpXG4gICAgICAgIHBhcmFtT2JqZWN0W3BhcmFtXSA9XG4gICAgICAgICAgcGFyYW1zQXNrZWRbcGFyYW1dID09PSBcIm51bWJlclwiID8gTnVtYmVyKHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbU9iamVjdDtcbiAgfVxufVxuIl19