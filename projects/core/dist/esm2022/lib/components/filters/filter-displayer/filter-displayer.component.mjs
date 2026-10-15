import { Component, inject, input, output, viewChild, } from "@angular/core";
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
                        template: this.filterTemplate(),
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
        this.filterTemplate = viewChild.required("filterTemplate");
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilterDisplayerComponent, isStandalone: true, selector: "ta-filter-displayer", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: false, transformFunction: null }, iconType: { classPropertyName: "iconType", publicName: "iconType", isSignal: true, isRequired: false, transformFunction: null }, container: { classPropertyName: "container", publicName: "container", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filtersSelected: "filtersSelected" }, viewQueries: [{ propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }, { kind: "component", type: FilterContainerComponent, selector: "ta-filter-container", inputs: ["form"], outputs: ["filtersSelected"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-filter-displayer", standalone: true, imports: [
                        FontIconComponent,
                        LayoutFullPanelComponent,
                        FilterContainerComponent,
                        ButtonComponent,
                    ], template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRpc3BsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItZGlzcGxheWVyL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWRpc3BsYXllci9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUNMLG1DQUFtQyxHQUVwQyxNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBYzFGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFlO0lBWTNELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUdwQixtQ0FBbUMsRUFBRTtvQkFDckMsVUFBVSxFQUFFLFlBQVk7b0JBQ3hCLElBQUksRUFBRTt3QkFDSixRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRTt3QkFDL0IsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUlEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUExQ1YsU0FBSSxHQUFHLEtBQUssQ0FBbUIsRUFBRSxDQUFDLENBQUM7UUFFbkMsYUFBUSxHQUFHLEtBQUssQ0FBUyxRQUFRLENBQUMsQ0FBQztRQUVuQyxjQUFTLEdBQUcsS0FBSyxDQUFvQixRQUFRLENBQUMsQ0FBQztRQUUvQyxvQkFBZSxHQUFHLE1BQU0sRUFBTyxDQUFDO1FBRWhDLG1CQUFjLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBb0IsZ0JBQWdCLENBQUMsQ0FBQztRQUVqRSxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQTZCdEIsaUJBQVksR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFJOUMsQ0FBQztJQUVNLFFBQVEsQ0FBQyxPQUFZO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNNLEtBQUs7UUFDVixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOytHQXhEVSx3QkFBd0I7bUdBQXhCLHdCQUF3QiwrcEJDakNyQyx1dUJBcUJBLDBERE1JLGlCQUFpQixtRkFDakIsd0JBQXdCLHNIQUN4Qix3QkFBd0IsZ0hBQ3hCLGVBQWU7OzRGQUdOLHdCQUF3QjtrQkFacEMsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQO3dCQUNQLGlCQUFpQjt3QkFDakIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLGVBQWU7cUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgaW5qZWN0LFxuICBpbnB1dCxcbiAgb3V0cHV0LFxuICB2aWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9ib3R0b20tc2hlZXRcIjtcblxuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7XG4gIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LFxuICBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY1BhcmFtcyxcbn0gZnJvbSBcIkB0YS9tZW51XCI7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQsIExheW91dEZ1bGxQYW5lbENvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4uL2ZpbHRlci1jb250YWluZXIvZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWZpbHRlci1kaXNwbGF5ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsOiBcIi4vZmlsdGVyLWRpc3BsYXllci5jb21wb25lbnQuc2Nzc1wiLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgTGF5b3V0RnVsbFBhbmVsQ29tcG9uZW50LFxuICAgIEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckRpc3BsYXllckNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIGZvcm0gPSBpbnB1dDxJbnB1dEJhc2U8YW55PltdPihbXSk7XG5cbiAgaWNvblR5cGUgPSBpbnB1dDxzdHJpbmc+KFwiZmlsdGVyXCIpO1xuXG4gIGNvbnRhaW5lciA9IGlucHV0PFwiYnV0dG9uXCIgfCBcImxpbmtcIj4oXCJidXR0b25cIik7XG5cbiAgZmlsdGVyc1NlbGVjdGVkID0gb3V0cHV0PGFueT4oKTtcblxuICBmaWx0ZXJUZW1wbGF0ZSA9IHZpZXdDaGlsZC5yZXF1aXJlZDxUZW1wbGF0ZVJlZjx2b2lkPj4oXCJmaWx0ZXJUZW1wbGF0ZVwiKTtcblxuICBwcml2YXRlIF9pc0ZpbHRlck9wZW4gPSBmYWxzZTtcbiAgZ2V0IGlzRmlsdGVyT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNGaWx0ZXJPcGVuO1xuICB9XG4gIHNldCBpc0ZpbHRlck9wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0ZpbHRlck9wZW4gPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLm1vYmlsZURldGVjdGlvbikge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW48XG4gICAgICAgICAgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsXG4gICAgICAgICAgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNQYXJhbXM8bnVsbD5cbiAgICAgICAgPihCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCwge1xuICAgICAgICAgIHBhbmVsQ2xhc3M6IFwibm8tcGFkZGluZ1wiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLmZpbHRlclRlbXBsYXRlKCksXG4gICAgICAgICAgICBjb250ZXh0OiBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYm90dG9tU2hlZXQuZGlzbWlzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBtb2JpbGVEZXRlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHMuaXNNb2JpbGU7XG4gIH1cblxuICBwcml2YXRlIF9ib3R0b21TaGVldCA9IGluamVjdChNYXRCb3R0b21TaGVldCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZChmaWx0ZXJzOiBhbnkpIHtcbiAgICB0aGlzLmZpbHRlcnNTZWxlY3RlZC5lbWl0KGZpbHRlcnMpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKCkge1xuICAgIHRoaXMuaXNGaWx0ZXJPcGVuID0gdHJ1ZTtcbiAgfVxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgdGhpcy5pc0ZpbHRlck9wZW4gPSBmYWxzZTtcbiAgfVxufVxuIiwiQGlmICh0aGlzLmNvbnRhaW5lcigpID09PSAnYnV0dG9uJykge1xuPHRhLWJ1dHRvbiBbb3B0aW9uc109XCJ7IGNpcmN1bGFyOiB0cnVlIH1cIiAoYWN0aW9uKT1cInRoaXMub3BlbigpXCI+XG4gIDx0YS1mb250LWljb24gW25hbWVdPVwidGhpcy5pY29uVHlwZSgpXCI+PC90YS1mb250LWljb24+XG48L3RhLWJ1dHRvbj5cbn0gQGVsc2UgaWYgKHRoaXMuY29udGFpbmVyKCkgPT09ICdsaW5rJykge1xuPGRpdiAoY2xpY2spPVwidGhpcy5vcGVuKClcIj5cbiAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmljb25UeXBlKClcIj48L3RhLWZvbnQtaWNvbj5cbjwvZGl2PlxufSBAaWYgKCF0aGlzLm1vYmlsZURldGVjdGlvbikgeyBAaWYgKHRoaXMuaXNGaWx0ZXJPcGVuKSB7XG48dGEtbGF5b3V0LWZ1bGwtcGFuZWwgKGNsb3NlRXZlbnQpPVwidGhpcy5jbG9zZSgpXCI+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJmaWx0ZXJUZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG48L3RhLWxheW91dC1mdWxsLXBhbmVsPlxufSB9XG5cbjxuZy10ZW1wbGF0ZSAjZmlsdGVyVGVtcGxhdGU+XG4gIDx0YS1maWx0ZXItY29udGFpbmVyXG4gICAgY2xhc3M9XCJmbGV4LWZ1bGxcIlxuICAgIFtmb3JtXT1cInRoaXMuZm9ybSgpXCJcbiAgICAoZmlsdGVyc1NlbGVjdGVkKT1cInRoaXMuc2VsZWN0ZWQoJGV2ZW50KVwiXG4gID48L3RhLWZpbHRlci1jb250YWluZXI+XG48L25nLXRlbXBsYXRlPlxuIl19