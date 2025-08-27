import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponent } from '@ta/form-basic';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export class FiltersFormComponent extends TaBaseComponent {
    constructor() {
        super();
        this.form = [];
        this.filtersSelected = new EventEmitter();
    }
    apply(data) {
        this.filtersSelected.emit(data);
    }
    clear() {
        this.filtersSelected.emit(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FiltersFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: FiltersFormComponent, isStandalone: true, selector: "ta-filters-form", inputs: { form: "form", askValidation$: "askValidation$" }, outputs: { filtersSelected: "filtersSelected" }, usesInheritance: true, ngImport: i0, template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">{{ 'core.filter.clear' | translate }}</ta-button>\n  </div>\n  @if (this.form) {\n    <ta-form\n      [inputs]=\"this.form\"\n      [canDisplayButton]=\"false\"\n      [askValidation$]=\"this.askValidation$\"\n      (valid)=\"this.apply($event)\"\n    >\n    </ta-form>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FiltersFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filters-form', standalone: true, imports: [NgIf, ButtonComponent, FormComponent, TranslatePipe], template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">{{ 'core.filter.clear' | translate }}</ta-button>\n  </div>\n  @if (this.form) {\n    <ta-form\n      [inputs]=\"this.form\"\n      [canDisplayButton]=\"false\"\n      [askValidation$]=\"this.askValidation$\"\n      (valid)=\"this.apply($event)\"\n    >\n    </ta-form>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { form: [{
                type: Input
            }], askValidation$: [{
                type: Input
            }], filtersSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXJzL2Zvcm0vZmlsdGVycy1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXJzL2Zvcm0vZmlsdGVycy1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVM1QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQVV2RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBVFYsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFNNUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSTFDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBUztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBcEJVLG9CQUFvQjttR0FBcEIsb0JBQW9CLCtNQ2xCakMsc1dBY0EsMERERWtCLGVBQWUsOEpBQUUsYUFBYSxrTkFBRSxhQUFhOzs0RkFFbEQsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLGlCQUFpQixjQUdmLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQzt3REFJOUQsSUFBSTtzQkFESCxLQUFLO2dCQUlOLGNBQWM7c0JBRGIsS0FBSztnQkFJTixlQUFlO3NCQURkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJ0B0YS9mb3JtLWJhc2ljJztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLWZpbHRlcnMtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXJzLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXJzLWZvcm0uY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIEJ1dHRvbkNvbXBvbmVudCwgRm9ybUNvbXBvbmVudCwgVHJhbnNsYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlcnNGb3JtQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgZm9ybTogSW5wdXRCYXNlPGFueT5bXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGFza1ZhbGlkYXRpb24kITogT2JzZXJ2YWJsZTxudWxsPjtcblxuICBAT3V0cHV0KClcbiAgZmlsdGVyc1NlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZpbHRlcnNTZWxlY3RlZC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuZmlsdGVyc1NlbGVjdGVkLmVtaXQobnVsbCk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxkaXYgY2xhc3M9XCJ0YS1yXCI+XG4gICAgPHRhLWJ1dHRvbiAoYWN0aW9uKT1cInRoaXMuY2xlYXIoKVwiPnt7ICdjb3JlLmZpbHRlci5jbGVhcicgfCB0cmFuc2xhdGUgfX08L3RhLWJ1dHRvbj5cbiAgPC9kaXY+XG4gIEBpZiAodGhpcy5mb3JtKSB7XG4gICAgPHRhLWZvcm1cbiAgICAgIFtpbnB1dHNdPVwidGhpcy5mb3JtXCJcbiAgICAgIFtjYW5EaXNwbGF5QnV0dG9uXT1cImZhbHNlXCJcbiAgICAgIFthc2tWYWxpZGF0aW9uJF09XCJ0aGlzLmFza1ZhbGlkYXRpb24kXCJcbiAgICAgICh2YWxpZCk9XCJ0aGlzLmFwcGx5KCRldmVudClcIlxuICAgID5cbiAgICA8L3RhLWZvcm0+XG4gIH1cbjwvZGl2PlxuIl19