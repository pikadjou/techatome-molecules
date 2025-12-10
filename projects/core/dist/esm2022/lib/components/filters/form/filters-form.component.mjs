import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormComponent } from "@ta/form-basic";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersFormComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FiltersFormComponent, isStandalone: true, selector: "ta-filters-form", inputs: { form: "form", askValidation$: "askValidation$" }, outputs: { filtersSelected: "filtersSelected" }, usesInheritance: true, ngImport: i0, template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">{{\n      \"core.filter.clear\" | translate\n    }}</ta-button>\n  </div>\n  @if (this.form) {\n  <ta-form\n    [inputs]=\"this.form\"\n    [canDisplayButton]=\"false\"\n    [askValidation$]=\"this.askValidation$\"\n    (valid)=\"this.apply($event)\"\n  >\n  </ta-form>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FiltersFormComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-filters-form", standalone: true, imports: [NgIf, ButtonComponent, FormComponent, TranslatePipe], template: "<div>\n  <div class=\"ta-r\">\n    <ta-button (action)=\"this.clear()\">{{\n      \"core.filter.clear\" | translate\n    }}</ta-button>\n  </div>\n  @if (this.form) {\n  <ta-form\n    [inputs]=\"this.form\"\n    [canDisplayButton]=\"false\"\n    [askValidation$]=\"this.askValidation$\"\n    (valid)=\"this.apply($event)\"\n  >\n  </ta-form>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { form: [{
                type: Input
            }], askValidation$: [{
                type: Input
            }], filtersSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXJzL2Zvcm0vZmlsdGVycy1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9maWx0ZXJzL2Zvcm0vZmlsdGVycy1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQVM1QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQVV2RDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBVFYsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFNNUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSTFDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBUztRQUNwQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7K0dBcEJVLG9CQUFvQjttR0FBcEIsb0JBQW9CLCtNQ2xCakMsc1dBZ0JBLDBEREFrQixlQUFlLDhKQUFFLGFBQWEsa05BQUUsYUFBYTs7NEZBRWxELG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7d0RBSTlELElBQUk7c0JBREgsS0FBSztnQkFJTixjQUFjO3NCQURiLEtBQUs7Z0JBSU4sZUFBZTtzQkFEZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tIFwiQHRhL2Zvcm0tYmFzaWNcIjtcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWZpbHRlcnMtZm9ybVwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2ZpbHRlcnMtZm9ybS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZmlsdGVycy1mb3JtLmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgQnV0dG9uQ29tcG9uZW50LCBGb3JtQ29tcG9uZW50LCBUcmFuc2xhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyc0Zvcm1Db21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBmb3JtOiBJbnB1dEJhc2U8YW55PltdID0gW107XG5cbiAgQElucHV0KClcbiAgYXNrVmFsaWRhdGlvbiQhOiBPYnNlcnZhYmxlPG51bGw+O1xuXG4gIEBPdXRwdXQoKVxuICBmaWx0ZXJzU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGFwcGx5KGRhdGE6IGFueSkge1xuICAgIHRoaXMuZmlsdGVyc1NlbGVjdGVkLmVtaXQoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy5maWx0ZXJzU2VsZWN0ZWQuZW1pdChudWxsKTtcbiAgfVxufVxuIiwiPGRpdj5cbiAgPGRpdiBjbGFzcz1cInRhLXJcIj5cbiAgICA8dGEtYnV0dG9uIChhY3Rpb24pPVwidGhpcy5jbGVhcigpXCI+e3tcbiAgICAgIFwiY29yZS5maWx0ZXIuY2xlYXJcIiB8IHRyYW5zbGF0ZVxuICAgIH19PC90YS1idXR0b24+XG4gIDwvZGl2PlxuICBAaWYgKHRoaXMuZm9ybSkge1xuICA8dGEtZm9ybVxuICAgIFtpbnB1dHNdPVwidGhpcy5mb3JtXCJcbiAgICBbY2FuRGlzcGxheUJ1dHRvbl09XCJmYWxzZVwiXG4gICAgW2Fza1ZhbGlkYXRpb24kXT1cInRoaXMuYXNrVmFsaWRhdGlvbiRcIlxuICAgICh2YWxpZCk9XCJ0aGlzLmFwcGx5KCRldmVudClcIlxuICA+XG4gIDwvdGEtZm9ybT5cbiAgfVxuPC9kaXY+XG4iXX0=