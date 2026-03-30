import { Component, inject, input } from '@angular/core';
import { SearchFieldComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';
import { TaGridSessionService } from '../../services/grid-session.services';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export class TaGridSearchComponent extends TaAbstractGridComponent {
    constructor() {
        super(...arguments);
        this.outOfBox = input(false);
        this.placeholder = input('grid.search.placeholder');
        this.searchInput = new InputTextBox();
        this._session = inject(TaGridSessionService);
    }
    valueChanged(value) {
        const filters = [
            {
                field: gridSearchFieldsName,
                type: 'like',
                value: value.trim(),
            },
        ];
        if (this.outOfBox()) {
            this._session.setFilter(this.gridId(), filters);
        }
        else {
            this.grid.filters?.apply(filters);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: TaGridSearchComponent, isStandalone: true, selector: "ta-grid-search", inputs: { outOfBox: { classPropertyName: "outOfBox", publicName: "outOfBox", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-search-field\n  [input]=\"this.searchInput\"\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder()\"\n  (valueCompleted)=\"this.valueChanged($event)\"\n></ta-search-field>\n", styles: [":host{display:block;width:100%}\n"], dependencies: [{ kind: "component", type: SearchFieldComponent, selector: "ta-search-field", inputs: ["isOpen", "placeholder", "space", "type"], outputs: ["valueCompleted"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-grid-search', standalone: true, imports: [SearchFieldComponent], template: "<ta-search-field\n  [input]=\"this.searchInput\"\n  [isOpen]=\"true\"\n  [placeholder]=\"this.placeholder()\"\n  (valueCompleted)=\"this.valueChanged($event)\"\n></ta-search-field>\n", styles: [":host{display:block;width:100%}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNoRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsdUJBQTRCO0lBUHZFOztRQVFFLGFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxLQUFLLENBQVMseUJBQXlCLENBQUMsQ0FBQztRQUVoRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBZ0JqRDtJQWRRLFlBQVksQ0FBQyxLQUFhO1FBQy9CLE1BQU0sT0FBTyxHQUFhO1lBQ3hCO2dCQUNFLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFO2FBQ3BCO1NBQ0YsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDOytHQXJCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQix3WENqQmxDLHdMQU1BLDJGRE9ZLG9CQUFvQjs7NEZBSW5CLHFCQUFxQjtrQkFQakMsU0FBUzsrQkFDRSxnQkFBZ0IsY0FDZCxJQUFJLFdBQ1AsQ0FBQyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBpbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWVsZENvbXBvbmVudCB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IElucHV0VGV4dEJveCB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcblxuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3R5cGVzJztcbmltcG9ydCB7IFRhR3JpZFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC1zZXNzaW9uLnNlcnZpY2VzJztcbmltcG9ydCB7IGdyaWRTZWFyY2hGaWVsZHNOYW1lIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ3JpZC12aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1ncmlkLXNlYXJjaCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTZWFyY2hGaWVsZENvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2VhcmNoLmNvbXBvbmVudC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFHcmlkU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdEdyaWRDb21wb25lbnQ8YW55PiB7XG4gIG91dE9mQm94ID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuICBwbGFjZWhvbGRlciA9IGlucHV0PHN0cmluZz4oJ2dyaWQuc2VhcmNoLnBsYWNlaG9sZGVyJyk7XG5cbiAgcHVibGljIHNlYXJjaElucHV0ID0gbmV3IElucHV0VGV4dEJveCgpO1xuXG4gIHByaXZhdGUgX3Nlc3Npb24gPSBpbmplY3QoVGFHcmlkU2Vzc2lvblNlcnZpY2UpO1xuXG4gIHB1YmxpYyB2YWx1ZUNoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGZpbHRlcnM6IEZpbHRlcltdID0gW1xuICAgICAge1xuICAgICAgICBmaWVsZDogZ3JpZFNlYXJjaEZpZWxkc05hbWUsXG4gICAgICAgIHR5cGU6ICdsaWtlJyxcbiAgICAgICAgdmFsdWU6IHZhbHVlLnRyaW0oKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBpZiAodGhpcy5vdXRPZkJveCgpKSB7XG4gICAgICB0aGlzLl9zZXNzaW9uLnNldEZpbHRlcih0aGlzLmdyaWRJZCgpLCBmaWx0ZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLmZpbHRlcnM/LmFwcGx5KGZpbHRlcnMpO1xuICAgIH1cbiAgfVxufVxuIiwiPHRhLXNlYXJjaC1maWVsZFxuICBbaW5wdXRdPVwidGhpcy5zZWFyY2hJbnB1dFwiXG4gIFtpc09wZW5dPVwidHJ1ZVwiXG4gIFtwbGFjZWhvbGRlcl09XCJ0aGlzLnBsYWNlaG9sZGVyKClcIlxuICAodmFsdWVDb21wbGV0ZWQpPVwidGhpcy52YWx1ZUNoYW5nZWQoJGV2ZW50KVwiXG4+PC90YS1zZWFyY2gtZmllbGQ+XG4iXX0=