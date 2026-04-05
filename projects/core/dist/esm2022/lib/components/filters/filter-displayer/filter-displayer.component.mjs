import { Component, TemplateRef, ViewChild, inject, input, output, } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { FontIconComponent } from "@ta/icons";
import { BottomSheetTemplateGenericComponent, } from "@ta/menu";
import { ButtonComponent, LayoutFullPanelComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { FilterContainerComponent } from "../filter-container/filter-container.component";
import * as i0 from "@angular/core";
export class FilterDisplayerComponent extends TaBaseComponent {
    get isFilterOpen() {
        return this._isFilterOpen;
    }
    set isFilterOpen(value) {
        this._isFilterOpen = value;
        if (this.mobileDetection) {
            if (value) {
                this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
                    panelClass: "no-padding",
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
    constructor() {
        super();
        this.form = input([]);
        this.iconType = input("filter");
        this.container = input("button");
        this.filtersSelected = output();
        this._isFilterOpen = false;
        this._bottomSheet = inject(MatBottomSheet);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilterDisplayerComponent, isStandalone: true, selector: "ta-filter-displayer", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: false, transformFunction: null }, iconType: { classPropertyName: "iconType", publicName: "iconType", isSignal: true, isRequired: false, transformFunction: null }, container: { classPropertyName: "container", publicName: "container", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filtersSelected: "filtersSelected" }, viewQueries: [{ propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }, { kind: "component", type: FilterContainerComponent, selector: "ta-filter-container", inputs: ["form"], outputs: ["filtersSelected"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-filter-displayer", standalone: true, imports: [
                        FontIconComponent,
                        LayoutFullPanelComponent,
                        FilterContainerComponent,
                        ButtonComponent,
                    ], template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n" }]
        }], ctorParameters: () => [], propDecorators: { filterTemplate: [{
                type: ViewChild,
                args: ["filterTemplate", { read: TemplateRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRpc3BsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItZGlzcGxheWVyL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWRpc3BsYXllci9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFDTCxtQ0FBbUMsR0FFcEMsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQWMxRixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBZTtJQWEzRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUNELElBQUksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDVixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FHcEIsbUNBQW1DLEVBQUU7b0JBQ3JDLFVBQVUsRUFBRSxZQUFZO29CQUN4QixJQUFJLEVBQUU7d0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjO3dCQUM3QixPQUFPLEVBQUUsSUFBSTtxQkFDZDtpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDO2lCQUFNLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBSUQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQTNDVixTQUFJLEdBQUcsS0FBSyxDQUFtQixFQUFFLENBQUMsQ0FBQztRQUVuQyxhQUFRLEdBQUcsS0FBSyxDQUFTLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLGNBQVMsR0FBRyxLQUFLLENBQW9CLFFBQVEsQ0FBQyxDQUFDO1FBRS9DLG9CQUFlLEdBQUcsTUFBTSxFQUFPLENBQUM7UUFLeEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUE2QnRCLGlCQUFZLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBSTlDLENBQUM7SUFFTSxRQUFRLENBQUMsT0FBWTtRQUMxQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRU0sSUFBSTtRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQzsrR0F6RFUsd0JBQXdCO21HQUF4Qix3QkFBd0IsbW1CQVNFLFdBQVcsb0RDMUNsRCx1dUJBcUJBLDBERE1JLGlCQUFpQixtRkFDakIsd0JBQXdCLHNIQUN4Qix3QkFBd0IsZ0hBQ3hCLGVBQWU7OzRGQUdOLHdCQUF3QjtrQkFacEMsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQO3dCQUNQLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLGVBQWU7cUJBQ2hCO3dEQVlELGNBQWM7c0JBRGIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIGluamVjdCxcbiAgaW5wdXQsXG4gIG91dHB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldFwiO1xuXG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsXG4gIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljUGFyYW1zLFxufSBmcm9tIFwiQHRhL21lbnVcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCwgTGF5b3V0RnVsbFBhbmVsQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vZmlsdGVyLWNvbnRhaW5lci9maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZmlsdGVyLWRpc3BsYXllclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBMYXlvdXRGdWxsUGFuZWxDb21wb25lbnQsXG4gICAgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyRGlzcGxheWVyQ29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IHtcbiAgZm9ybSA9IGlucHV0PElucHV0QmFzZTxhbnk+W10+KFtdKTtcblxuICBpY29uVHlwZSA9IGlucHV0PHN0cmluZz4oXCJmaWx0ZXJcIik7XG5cbiAgY29udGFpbmVyID0gaW5wdXQ8XCJidXR0b25cIiB8IFwibGlua1wiPihcImJ1dHRvblwiKTtcblxuICBmaWx0ZXJzU2VsZWN0ZWQgPSBvdXRwdXQ8YW55PigpO1xuXG4gIEBWaWV3Q2hpbGQoXCJmaWx0ZXJUZW1wbGF0ZVwiLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZpbHRlclRlbXBsYXRlITogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgcHJpdmF0ZSBfaXNGaWx0ZXJPcGVuID0gZmFsc2U7XG4gIGdldCBpc0ZpbHRlck9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRmlsdGVyT3BlbjtcbiAgfVxuICBzZXQgaXNGaWx0ZXJPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNGaWx0ZXJPcGVuID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5tb2JpbGVEZXRlY3Rpb24pIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9ib3R0b21TaGVldC5vcGVuPFxuICAgICAgICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LFxuICAgICAgICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljUGFyYW1zPG51bGw+XG4gICAgICAgID4oQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsIHtcbiAgICAgICAgICBwYW5lbENsYXNzOiBcIm5vLXBhZGRpbmdcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5maWx0ZXJUZW1wbGF0ZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib3R0b21TaGVldC5kaXNtaXNzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1vYmlsZURldGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50cy5pc01vYmlsZTtcbiAgfVxuXG4gIHByaXZhdGUgX2JvdHRvbVNoZWV0ID0gaW5qZWN0KE1hdEJvdHRvbVNoZWV0KTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkKGZpbHRlcnM6IGFueSkge1xuICAgIHRoaXMuZmlsdGVyc1NlbGVjdGVkLmVtaXQoZmlsdGVycyk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgdGhpcy5pc0ZpbHRlck9wZW4gPSB0cnVlO1xuICB9XG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLmlzRmlsdGVyT3BlbiA9IGZhbHNlO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuY29udGFpbmVyKCkgPT09ICdidXR0b24nKSB7XG48dGEtYnV0dG9uIFtvcHRpb25zXT1cInsgY2lyY3VsYXI6IHRydWUgfVwiIChhY3Rpb24pPVwidGhpcy5vcGVuKClcIj5cbiAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmljb25UeXBlKClcIj48L3RhLWZvbnQtaWNvbj5cbjwvdGEtYnV0dG9uPlxufSBAZWxzZSBpZiAodGhpcy5jb250YWluZXIoKSA9PT0gJ2xpbmsnKSB7XG48ZGl2IChjbGljayk9XCJ0aGlzLm9wZW4oKVwiPlxuICA8dGEtZm9udC1pY29uIFtuYW1lXT1cInRoaXMuaWNvblR5cGUoKVwiPjwvdGEtZm9udC1pY29uPlxuPC9kaXY+XG59IEBpZiAoIXRoaXMubW9iaWxlRGV0ZWN0aW9uKSB7IEBpZiAodGhpcy5pc0ZpbHRlck9wZW4pIHtcbjx0YS1sYXlvdXQtZnVsbC1wYW5lbCAoY2xvc2VFdmVudCk9XCJ0aGlzLmNsb3NlKClcIj5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpbHRlclRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbjwvdGEtbGF5b3V0LWZ1bGwtcGFuZWw+XG59IH1cblxuPG5nLXRlbXBsYXRlICNmaWx0ZXJUZW1wbGF0ZT5cbiAgPHRhLWZpbHRlci1jb250YWluZXJcbiAgICBjbGFzcz1cImZsZXgtZnVsbFwiXG4gICAgW2Zvcm1dPVwidGhpcy5mb3JtKClcIlxuICAgIChmaWx0ZXJzU2VsZWN0ZWQpPVwidGhpcy5zZWxlY3RlZCgkZXZlbnQpXCJcbiAgPjwvdGEtZmlsdGVyLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=