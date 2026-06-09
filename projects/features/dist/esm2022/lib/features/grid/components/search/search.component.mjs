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
        const trimmed = (value ?? '').trim();
        const filters = trimmed
            ? [{ field: gridSearchFieldsName, type: 'like', value: trimmed }]
            : [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvZmVhdHVyZXMvZ3JpZC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVNoRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsdUJBQTRCO0lBUHZFOztRQVFFLGFBQVEsR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxLQUFLLENBQVMseUJBQXlCLENBQUMsQ0FBQztRQUVoRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBY2pEO0lBWlEsWUFBWSxDQUFDLEtBQWE7UUFDL0IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQWEsT0FBTztZQUMvQixDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUNqRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRVAsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQztJQUNILENBQUM7K0dBbkJVLHFCQUFxQjttR0FBckIscUJBQXFCLHdYQ2pCbEMsd0xBTUEsMkZET1ksb0JBQW9COzs0RkFJbkIscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QsIGlucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlYXJjaEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnQHRhL2Zvcm0taW5wdXQnO1xuaW1wb3J0IHsgSW5wdXRUZXh0Qm94IH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHlwZXMnO1xuaW1wb3J0IHsgVGFHcmlkU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ncmlkLXNlc3Npb24uc2VydmljZXMnO1xuaW1wb3J0IHsgZ3JpZFNlYXJjaEZpZWxkc05hbWUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ncmlkLXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBUYUFic3RyYWN0R3JpZENvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWdyaWQtc2VhcmNoJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1NlYXJjaEZpZWxkQ29tcG9uZW50XSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBUYUdyaWRTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBUYUFic3RyYWN0R3JpZENvbXBvbmVudDxhbnk+IHtcbiAgb3V0T2ZCb3ggPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG4gIHBsYWNlaG9sZGVyID0gaW5wdXQ8c3RyaW5nPignZ3JpZC5zZWFyY2gucGxhY2Vob2xkZXInKTtcblxuICBwdWJsaWMgc2VhcmNoSW5wdXQgPSBuZXcgSW5wdXRUZXh0Qm94KCk7XG5cbiAgcHJpdmF0ZSBfc2Vzc2lvbiA9IGluamVjdChUYUdyaWRTZXNzaW9uU2VydmljZSk7XG5cbiAgcHVibGljIHZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdHJpbW1lZCA9ICh2YWx1ZSA/PyAnJykudHJpbSgpO1xuICAgIGNvbnN0IGZpbHRlcnM6IEZpbHRlcltdID0gdHJpbW1lZFxuICAgICAgPyBbeyBmaWVsZDogZ3JpZFNlYXJjaEZpZWxkc05hbWUsIHR5cGU6ICdsaWtlJywgdmFsdWU6IHRyaW1tZWQgfV1cbiAgICAgIDogW107XG5cbiAgICBpZiAodGhpcy5vdXRPZkJveCgpKSB7XG4gICAgICB0aGlzLl9zZXNzaW9uLnNldEZpbHRlcih0aGlzLmdyaWRJZCgpLCBmaWx0ZXJzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLmZpbHRlcnM/LmFwcGx5KGZpbHRlcnMpO1xuICAgIH1cbiAgfVxufVxuIiwiPHRhLXNlYXJjaC1maWVsZFxuICBbaW5wdXRdPVwidGhpcy5zZWFyY2hJbnB1dFwiXG4gIFtpc09wZW5dPVwidHJ1ZVwiXG4gIFtwbGFjZWhvbGRlcl09XCJ0aGlzLnBsYWNlaG9sZGVyKClcIlxuICAodmFsdWVDb21wbGV0ZWQpPVwidGhpcy52YWx1ZUNoYW5nZWQoJGV2ZW50KVwiXG4+PC90YS1zZWFyY2gtZmllbGQ+XG4iXX0=