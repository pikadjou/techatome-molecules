import { Component, Input, inject } from '@angular/core';
import { TextBoxComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';
import { TaGridSessionService } from '../../services/grid-session.services';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export class TaGridSearchComponent extends TaAbstractGridComponent {
    constructor() {
        super();
        this.outOfBox = false;
        this.input = new InputTextBox();
        this._session = inject(TaGridSessionService);
        this.input.createFormControl();
    }
    valueChanged(value) {
        const filters = [
            {
                field: gridSearchFieldsName,
                type: 'like',
                value: value.trim(),
            },
        ];
        if (this.outOfBox) {
            this._session.setFilter(this.gridId(), filters);
        }
        else {
            this.grid.filters?.apply(filters);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaGridSearchComponent, isStandalone: true, selector: "ta-grid-search", inputs: { outOfBox: "outOfBox" }, usesInheritance: true, ngImport: i0, template: "<ta-input-textbox [input]=\"this.input\" (valueChanged)=\"this.valueChanged($event)\"></ta-input-textbox>\r\n", styles: [""], dependencies: [{ kind: "component", type: TextBoxComponent, selector: "ta-input-textbox", inputs: ["space"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-search', standalone: true, imports: [TextBoxComponent], template: "<ta-input-textbox [input]=\"this.input\" (valueChanged)=\"this.valueChanged($event)\"></ta-input-textbox>\r\n" }]
        }], ctorParameters: () => [], propDecorators: { outOfBox: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNoRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsdUJBQTRCO0lBUXJFO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFQVixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRVYsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBSTlDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ00sWUFBWSxDQUFDLEtBQWE7UUFDL0IsTUFBTSxPQUFPLEdBQWE7WUFDeEI7Z0JBQ0UsS0FBSyxFQUFFLG9CQUFvQjtnQkFDM0IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUU7YUFDcEI7U0FDRixDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDOytHQXpCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQixtSUNqQmxDLCtHQUNBLDBERFlZLGdCQUFnQjs7NEZBSWYscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUCxDQUFDLGdCQUFnQixDQUFDO3dEQU0zQixRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFRleHRCb3hDb21wb25lbnQgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XHJcbmltcG9ydCB7IElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcclxuXHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uLy4uL21vZGVscy90eXBlcyc7XHJcbmltcG9ydCB7IFRhR3JpZFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC1zZXNzaW9uLnNlcnZpY2VzJztcclxuaW1wb3J0IHsgZ3JpZFNlYXJjaEZpZWxkc05hbWUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ncmlkLXZpZXcuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhQWJzdHJhY3RHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtZ3JpZC1zZWFyY2gnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW1RleHRCb3hDb21wb25lbnRdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFHcmlkU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQ8YW55PiB7XHJcbiAgQElucHV0KClcclxuICBvdXRPZkJveCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgaW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KCk7XHJcblxyXG4gIHByaXZhdGUgX3Nlc3Npb24gPSBpbmplY3QoVGFHcmlkU2Vzc2lvblNlcnZpY2UpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmlucHV0LmNyZWF0ZUZvcm1Db250cm9sKCk7XHJcbiAgfVxyXG4gIHB1YmxpYyB2YWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgZmlsdGVyczogRmlsdGVyW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBmaWVsZDogZ3JpZFNlYXJjaEZpZWxkc05hbWUsXHJcbiAgICAgICAgdHlwZTogJ2xpa2UnLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZS50cmltKCksXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgaWYgKHRoaXMub3V0T2ZCb3gpIHtcclxuICAgICAgdGhpcy5fc2Vzc2lvbi5zZXRGaWx0ZXIodGhpcy5ncmlkSWQoKSwgZmlsdGVycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdyaWQuZmlsdGVycz8uYXBwbHkoZmlsdGVycyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjx0YS1pbnB1dC10ZXh0Ym94IFtpbnB1dF09XCJ0aGlzLmlucHV0XCIgKHZhbHVlQ2hhbmdlZCk9XCJ0aGlzLnZhbHVlQ2hhbmdlZCgkZXZlbnQpXCI+PC90YS1pbnB1dC10ZXh0Ym94PlxyXG4iXX0=