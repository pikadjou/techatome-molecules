import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output, TemplateRef, ViewChild, input, } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { BottomSheetTemplateGenericComponent, } from "@ta/menu";
import { ButtonComponent, LayoutFullPanelComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { FilterContainerComponent } from "../filter-container/filter-container.component";
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
    constructor(_bottomSheet) {
        super();
        this._bottomSheet = _bottomSheet;
        this.form = input([]);
        this.iconType = input("filter");
        this.container = input("button");
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilterDisplayerComponent, isStandalone: true, selector: "ta-filter-displayer", inputs: { form: { classPropertyName: "form", publicName: "form", isSignal: true, isRequired: false, transformFunction: null }, iconType: { classPropertyName: "iconType", publicName: "iconType", isSignal: true, isRequired: false, transformFunction: null }, container: { classPropertyName: "container", publicName: "container", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { filtersSelected: "filtersSelected" }, viewQueries: [{ propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }, { kind: "component", type: FilterContainerComponent, selector: "ta-filter-container", inputs: ["form"], outputs: ["filtersSelected"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilterDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-filter-displayer", standalone: true, imports: [
                        NgIf,
                        FontIconComponent,
                        LayoutFullPanelComponent,
                        FilterContainerComponent,
                        ButtonComponent,
                    ], template: "@if (this.container() === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</ta-button>\n} @else if (this.container() === 'link') {\n<div (click)=\"this.open()\">\n  <ta-font-icon [name]=\"this.iconType()\"></ta-font-icon>\n</div>\n} @if (!this.mobileDetection) { @if (this.isFilterOpen) {\n<ta-layout-full-panel (closeEvent)=\"this.close()\">\n  <ng-template [ngTemplateOutlet]=\"filterTemplate\"></ng-template>\n</ta-layout-full-panel>\n} }\n\n<ng-template #filterTemplate>\n  <ta-filter-container\n    class=\"flex-full\"\n    [form]=\"this.form()\"\n    (filtersSelected)=\"this.selected($event)\"\n  ></ta-filter-container>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }], propDecorators: { filtersSelected: [{
                type: Output
            }], filterTemplate: [{
                type: ViewChild,
                args: ["filterTemplate", { read: TemplateRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRpc3BsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItZGlzcGxheWVyL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWRpc3BsYXllci9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzlDLE9BQU8sRUFDTCxtQ0FBbUMsR0FFcEMsTUFBTSxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTVDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOzs7QUFlMUYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGVBQWU7SUFjM0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDRCxJQUFJLFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBR3BCLG1DQUFtQyxFQUFFO29CQUNyQyxVQUFVLEVBQUUsWUFBWTtvQkFDeEIsSUFBSSxFQUFFO3dCQUNKLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYzt3QkFDN0IsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQW9CLFlBQTRCO1FBQzlDLEtBQUssRUFBRSxDQUFDO1FBRFUsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBekNoRCxTQUFJLEdBQUcsS0FBSyxDQUFtQixFQUFFLENBQUMsQ0FBQztRQUVuQyxhQUFRLEdBQUcsS0FBSyxDQUFTLFFBQVEsQ0FBQyxDQUFDO1FBRW5DLGNBQVMsR0FBRyxLQUFLLENBQW9CLFFBQVEsQ0FBQyxDQUFDO1FBRy9DLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUtsQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztJQStCOUIsQ0FBQztJQUVNLFFBQVEsQ0FBQyxPQUFZO1FBQzFCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNNLEtBQUs7UUFDVixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOytHQXhEVSx3QkFBd0I7bUdBQXhCLHdCQUF3QixtbUJBVUUsV0FBVyxvREM3Q2xELHV1QkFxQkEsMEREUUksaUJBQWlCLG1GQUNqQix3QkFBd0Isc0hBQ3hCLHdCQUF3QixnSEFDeEIsZUFBZTs7NEZBR04sd0JBQXdCO2tCQWJwQyxTQUFTOytCQUNFLHFCQUFxQixjQUduQixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixpQkFBaUI7d0JBQ2pCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixlQUFlO3FCQUNoQjttRkFVRCxlQUFlO3NCQURkLE1BQU07Z0JBSVAsY0FBYztzQkFEYixTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBpbnB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldFwiO1xuXG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsXG4gIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljUGFyYW1zLFxufSBmcm9tIFwiQHRhL21lbnVcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCwgTGF5b3V0RnVsbFBhbmVsQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tIFwiLi4vZmlsdGVyLWNvbnRhaW5lci9maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZmlsdGVyLWRpc3BsYXllclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIExheW91dEZ1bGxQYW5lbENvbXBvbmVudCxcbiAgICBGaWx0ZXJDb250YWluZXJDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJEaXNwbGF5ZXJDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQge1xuICBmb3JtID0gaW5wdXQ8SW5wdXRCYXNlPGFueT5bXT4oW10pO1xuXG4gIGljb25UeXBlID0gaW5wdXQ8c3RyaW5nPihcImZpbHRlclwiKTtcblxuICBjb250YWluZXIgPSBpbnB1dDxcImJ1dHRvblwiIHwgXCJsaW5rXCI+KFwiYnV0dG9uXCIpO1xuXG4gIEBPdXRwdXQoKVxuICBmaWx0ZXJzU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKFwiZmlsdGVyVGVtcGxhdGVcIiwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmaWx0ZXJUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIHByaXZhdGUgX2lzRmlsdGVyT3BlbiA9IGZhbHNlO1xuICBnZXQgaXNGaWx0ZXJPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0ZpbHRlck9wZW47XG4gIH1cbiAgc2V0IGlzRmlsdGVyT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRmlsdGVyT3BlbiA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMubW9iaWxlRGV0ZWN0aW9uKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYm90dG9tU2hlZXQub3BlbjxcbiAgICAgICAgICBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCxcbiAgICAgICAgICBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY1BhcmFtczxudWxsPlxuICAgICAgICA+KEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LCB7XG4gICAgICAgICAgcGFuZWxDbGFzczogXCJuby1wYWRkaW5nXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMuZmlsdGVyVGVtcGxhdGUsXG4gICAgICAgICAgICBjb250ZXh0OiBudWxsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYm90dG9tU2hlZXQuZGlzbWlzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCBtb2JpbGVEZXRlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludHMuaXNNb2JpbGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkKGZpbHRlcnM6IGFueSkge1xuICAgIHRoaXMuZmlsdGVyc1NlbGVjdGVkLmVtaXQoZmlsdGVycyk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgdGhpcy5pc0ZpbHRlck9wZW4gPSB0cnVlO1xuICB9XG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICB0aGlzLmlzRmlsdGVyT3BlbiA9IGZhbHNlO1xuICB9XG59XG4iLCJAaWYgKHRoaXMuY29udGFpbmVyKCkgPT09ICdidXR0b24nKSB7XG48dGEtYnV0dG9uIFtvcHRpb25zXT1cInsgY2lyY3VsYXI6IHRydWUgfVwiIChhY3Rpb24pPVwidGhpcy5vcGVuKClcIj5cbiAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCJ0aGlzLmljb25UeXBlKClcIj48L3RhLWZvbnQtaWNvbj5cbjwvdGEtYnV0dG9uPlxufSBAZWxzZSBpZiAodGhpcy5jb250YWluZXIoKSA9PT0gJ2xpbmsnKSB7XG48ZGl2IChjbGljayk9XCJ0aGlzLm9wZW4oKVwiPlxuICA8dGEtZm9udC1pY29uIFtuYW1lXT1cInRoaXMuaWNvblR5cGUoKVwiPjwvdGEtZm9udC1pY29uPlxuPC9kaXY+XG59IEBpZiAoIXRoaXMubW9iaWxlRGV0ZWN0aW9uKSB7IEBpZiAodGhpcy5pc0ZpbHRlck9wZW4pIHtcbjx0YS1sYXlvdXQtZnVsbC1wYW5lbCAoY2xvc2VFdmVudCk9XCJ0aGlzLmNsb3NlKClcIj5cbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpbHRlclRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbjwvdGEtbGF5b3V0LWZ1bGwtcGFuZWw+XG59IH1cblxuPG5nLXRlbXBsYXRlICNmaWx0ZXJUZW1wbGF0ZT5cbiAgPHRhLWZpbHRlci1jb250YWluZXJcbiAgICBjbGFzcz1cImZsZXgtZnVsbFwiXG4gICAgW2Zvcm1dPVwidGhpcy5mb3JtKClcIlxuICAgIChmaWx0ZXJzU2VsZWN0ZWQpPVwidGhpcy5zZWxlY3RlZCgkZXZlbnQpXCJcbiAgPjwvdGEtZmlsdGVyLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=