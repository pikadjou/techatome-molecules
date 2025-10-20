import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { BottomSheetTemplateGenericComponent } from '@ta/menu';
import { ButtonComponent, LayoutFullPanelComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { FilterContainerComponent } from '../filter-container/filter-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
export class FilterDisplayerComponent extends TaBaseComponent {
    get isFilterOpen() {
        return this._isFilterOpen;
    }
    set isFilterOpen(value) {
        this._isFilterOpen = value;
        if (this.mobileDetection) {
            if (value) {
                this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
                    panelClass: 'no-padding',
                    data: {
                        template: this.filterTemplate,
                        context: null,
                    },
                });
            }
            else {
                this._bottomSheet.dismiss();
            }
        }
    }
    get mobileDetection() {
        return this.breakpoints.isMobile;
    }
    constructor(_bottomSheet) {
        super();
        this._bottomSheet = _bottomSheet;
        this.form = [];
        this.iconType = 'filter';
        this.container = 'button';
        this.filtersSelected = new EventEmitter();
        this._isFilterOpen = false;
    }
    selected(filters) {
        this.filtersSelected.emit(filters);
        this.close();
    }
    open() {
        this.isFilterOpen = true;
    }
    close() {
        this.isFilterOpen = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilterDisplayerComponent, isStandalone: true, selector: "ta-filter-displayer", inputs: { form: "form", iconType: "iconType", container: "container" }, outputs: { filtersSelected: "filtersSelected" }, viewQueries: [{ propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "@if (this.container === 'button') {\n  <ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </ta-button>\n} @else if (this.container === 'link') {\n  <div (click)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </div>\n}\n\n@if (!this.mobileDetection) {\n  @if (this.isFilterOpen) {\n    <ta-layout-full-panel (closeEvent)=\"this.close()\">\n      <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n    </ta-layout-full-panel>\n  }\n}\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }, { kind: "component", type: FilterContainerComponent, selector: "ta-filter-container", inputs: ["form"], outputs: ["filtersSelected"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-filter-displayer', standalone: true, imports: [NgIf, FontIconComponent, LayoutFullPanelComponent, FilterContainerComponent, ButtonComponent], template: "@if (this.container === 'button') {\n  <ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </ta-button>\n} @else if (this.container === 'link') {\n  <div (click)=\"this.open()\">\n    <ta-font-icon [name]=\"this.iconType\"></ta-font-icon>\n  </div>\n}\n\n@if (!this.mobileDetection) {\n  @if (this.isFilterOpen) {\n    <ta-layout-full-panel (closeEvent)=\"this.close()\">\n      <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n    </ta-layout-full-panel>\n  }\n}\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }], propDecorators: { form: [{
                type: Input
            }], iconType: [{
                type: Input
            }], container: [{
                type: Input
            }], filtersSelected: [{
                type: Output
            }], filterTemplate: [{
                type: ViewChild,
                args: ['filterTemplate', { read: TemplateRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRpc3BsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItZGlzcGxheWVyL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWRpc3BsYXllci9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBb0MsTUFBTSxVQUFVLENBQUM7QUFDakcsT0FBTyxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFTMUYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGVBQWU7SUFpQjNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQixtQ0FBbUMsRUFDbkM7b0JBQ0UsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLElBQUksRUFBRTt3QkFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWM7d0JBQzdCLE9BQU8sRUFBRSxJQUFJO3FCQUNkO2lCQUNGLENBQ0YsQ0FBQztZQUNKLENBQUM7aUJBQU0sQ0FBQztnQkFDTixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFRCxZQUFvQixZQUE0QjtRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQURVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQTNDaEQsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFHNUIsYUFBUSxHQUFXLFFBQVEsQ0FBQztRQUc1QixjQUFTLEdBQXNCLFFBQVEsQ0FBQztRQUd4QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLbEMsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUErQjlCLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBWTtRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzsrR0EzRFUsd0JBQXdCO21HQUF4Qix3QkFBd0IscVNBYUUsV0FBVyxvRENoQ2xELDh2QkF5QkEsMEREUmtCLGlCQUFpQixtRkFBRSx3QkFBd0Isc0hBQUUsd0JBQXdCLGdIQUFFLGVBQWU7OzRGQUUzRix3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UscUJBQXFCLGNBR25CLElBQUksV0FDUCxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsRUFBRSxlQUFlLENBQUM7bUZBSXZHLElBQUk7c0JBREgsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sU0FBUztzQkFEUixLQUFLO2dCQUlOLGVBQWU7c0JBRGQsTUFBTTtnQkFJUCxjQUFjO3NCQURiLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXQnO1xuXG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCwgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNQYXJhbXMgfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQsIExheW91dEZ1bGxQYW5lbENvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9maWx0ZXItY29udGFpbmVyL2ZpbHRlci1jb250YWluZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZmlsdGVyLWRpc3BsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLWRpc3BsYXllci5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgRm9udEljb25Db21wb25lbnQsIExheW91dEZ1bGxQYW5lbENvbXBvbmVudCwgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJEaXNwbGF5ZXJDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBmb3JtOiBJbnB1dEJhc2U8YW55PltdID0gW107XG5cbiAgQElucHV0KClcbiAgaWNvblR5cGU6IHN0cmluZyA9ICdmaWx0ZXInO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRhaW5lcjogJ2J1dHRvbicgfCAnbGluaycgPSAnYnV0dG9uJztcblxuICBAT3V0cHV0KClcbiAgZmlsdGVyc1NlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlsdGVyVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZpbHRlclRlbXBsYXRlITogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgcHJpdmF0ZSBfaXNGaWx0ZXJPcGVuID0gZmFsc2U7XG4gIGdldCBpc0ZpbHRlck9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRmlsdGVyT3BlbjtcbiAgfVxuICBzZXQgaXNGaWx0ZXJPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNGaWx0ZXJPcGVuID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5tb2JpbGVEZXRlY3Rpb24pIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9ib3R0b21TaGVldC5vcGVuPEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LCBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY1BhcmFtczxudWxsPj4oXG4gICAgICAgICAgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGFuZWxDbGFzczogJ25vLXBhZGRpbmcnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5maWx0ZXJUZW1wbGF0ZSxcbiAgICAgICAgICAgICAgY29udGV4dDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYm90dG9tU2hlZXQuZGlzbWlzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBtb2JpbGVEZXRlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHMuaXNNb2JpbGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkKGZpbHRlcnM6IGFueSkge1xuICAgIHRoaXMuZmlsdGVyc1NlbGVjdGVkLmVtaXQoZmlsdGVycyk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgdGhpcy5pc0ZpbHRlck9wZW4gPSB0cnVlO1xuICB9XG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLmlzRmlsdGVyT3BlbiA9IGZhbHNlO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuY29udGFpbmVyID09PSAnYnV0dG9uJykge1xuICA8dGEtYnV0dG9uIFtvcHRpb25zXT1cInsgY2lyY3VsYXI6IHRydWUgfVwiIChhY3Rpb24pPVwidGhpcy5vcGVuKClcIj5cbiAgICA8dGEtZm9udC1pY29uIFtuYW1lXT1cInRoaXMuaWNvblR5cGVcIj48L3RhLWZvbnQtaWNvbj5cbiAgPC90YS1idXR0b24+XG59IEBlbHNlIGlmICh0aGlzLmNvbnRhaW5lciA9PT0gJ2xpbmsnKSB7XG4gIDxkaXYgKGNsaWNrKT1cInRoaXMub3BlbigpXCI+XG4gICAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmljb25UeXBlXCI+PC90YS1mb250LWljb24+XG4gIDwvZGl2PlxufVxuXG5AaWYgKCF0aGlzLm1vYmlsZURldGVjdGlvbikge1xuICBAaWYgKHRoaXMuaXNGaWx0ZXJPcGVuKSB7XG4gICAgPHRhLWxheW91dC1mdWxsLXBhbmVsIChjbG9zZUV2ZW50KT1cInRoaXMuY2xvc2UoKVwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpbHRlclRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L3RhLWxheW91dC1mdWxsLXBhbmVsPlxuICB9XG59XG5cbjxuZy10ZW1wbGF0ZSAjZmlsdGVyVGVtcGxhdGU+XG4gIDx0YS1maWx0ZXItY29udGFpbmVyXG4gICAgY2xhc3M9XCJmbGV4LWZ1bGxcIlxuICAgIFtmb3JtXT1cInRoaXMuZm9ybVwiXG4gICAgKGZpbHRlcnNTZWxlY3RlZCk9XCJ0aGlzLnNlbGVjdGVkKCRldmVudClcIlxuICA+PC90YS1maWx0ZXItY29udGFpbmVyPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==