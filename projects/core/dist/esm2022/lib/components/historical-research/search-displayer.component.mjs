import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, } from "@angular/core";
import { FontIconComponent } from "@ta/icons";
import { BottomSheetTemplateGenericComponent, } from "@ta/menu";
import { ButtonComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { SearchHistoryDisplayerComponent } from "./search-history-displayer/search-history-displayer.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
export class SearchDisplayerComponent extends TaBaseComponent {
    get mobileDetection() {
        return this.breakpoints.isMobile;
    }
    constructor(_bottomSheet) {
        super();
        this._bottomSheet = _bottomSheet;
        this.container = "button";
        this.placeholder = "";
        this.valueCompleted = new EventEmitter();
    }
    openDialog() {
        if (!this.searchHistory?.type) {
            return;
        }
        this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
            data: {
                template: this.searchTemplate,
                context: {
                    options: { isDropDown: false },
                },
            },
        });
    }
    action(result) {
        this._bottomSheet.dismiss();
        if (result) {
            this.valueCompleted.emit(result);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchDisplayerComponent, deps: [{ token: i1.MatBottomSheet }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SearchDisplayerComponent, isStandalone: true, selector: "ta-search-displayer", inputs: { container: "container", placeholder: "placeholder", searchHistory: "searchHistory" }, outputs: { valueCompleted: "valueCompleted" }, viewQueries: [{ propertyName: "searchTemplate", first: true, predicate: ["searchTemplate"], descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "@if (this.mobileDetection) { @if (this.container === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</ta-button>\n} @else if (this.container === 'link') {\n<div (click)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</div>\n} } @if (!this.mobileDetection) {\n<ng-template\n  [ngTemplateOutlet]=\"searchTemplate\"\n  [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder\"\n    [searchHistory]=\"this.searchHistory\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: SearchHistoryDisplayerComponent, selector: "ta-search-history-displayer", inputs: ["searchHistory", "placeholder", "isDropDown"], outputs: ["valueCompleted"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-search-displayer", standalone: true, imports: [
                        NgIf,
                        FontIconComponent,
                        SearchHistoryDisplayerComponent,
                        ButtonComponent,
                    ], template: "@if (this.mobileDetection) { @if (this.container === 'button') {\n<ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</ta-button>\n} @else if (this.container === 'link') {\n<div (click)=\"this.openDialog()\">\n  <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n</div>\n} } @if (!this.mobileDetection) {\n<ng-template\n  [ngTemplateOutlet]=\"searchTemplate\"\n  [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder\"\n    [searchHistory]=\"this.searchHistory\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.MatBottomSheet }], propDecorators: { container: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], searchHistory: [{
                type: Input
            }], valueCompleted: [{
                type: Output
            }], searchTemplate: [{
                type: ViewChild,
                args: ["searchTemplate", { read: TemplateRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWRpc3BsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9yaWNhbC1yZXNlYXJjaC9zZWFyY2gtZGlzcGxheWVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9oaXN0b3JpY2FsLXJlc2VhcmNoL3NlYXJjaC1kaXNwbGF5ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUNMLG1DQUFtQyxHQUVwQyxNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0RBQStELENBQUM7OztBQWNoSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBZTtJQWtCM0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQW9CLFlBQTRCO1FBQzlDLEtBQUssRUFBRSxDQUFDO1FBRFUsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBcEJoRCxjQUFTLEdBQXNCLFFBQVEsQ0FBQztRQUd4QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQVF6QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFXcEMsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM5QixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUdwQixtQ0FBbUMsRUFBRTtZQUNyQyxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUM3QixPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtpQkFDL0I7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBVztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQzsrR0FoRFUsd0JBQXdCO21HQUF4Qix3QkFBd0IsMlRBZUUsV0FBVyxvRENoRGxELHcwQkF1QkEsMERES0ksaUJBQWlCLG1GQUNqQiwrQkFBK0IsNkpBQy9CLGVBQWU7OzRGQUdOLHdCQUF3QjtrQkFacEMsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQO3dCQUNQLElBQUk7d0JBQ0osaUJBQWlCO3dCQUNqQiwrQkFBK0I7d0JBQy9CLGVBQWU7cUJBQ2hCO21GQUlELFNBQVM7c0JBRFIsS0FBSztnQkFJTixXQUFXO3NCQURWLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixLQUFLO2dCQU1OLGNBQWM7c0JBRGIsTUFBTTtnQkFJUCxjQUFjO3NCQURiLFNBQVM7dUJBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYm90dG9tLXNoZWV0XCI7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHtcbiAgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsXG4gIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljUGFyYW1zLFxufSBmcm9tIFwiQHRhL21lbnVcIjtcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgU2VhcmNoSGlzdG9yeURpc3BsYXllckNvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC1oaXN0b3J5LWRpc3BsYXllci9zZWFyY2gtaGlzdG9yeS1kaXNwbGF5ZXIuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1zZWFyY2gtZGlzcGxheWVyXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoLWRpc3BsYXllci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc2VhcmNoLWRpc3BsYXllci5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgRm9udEljb25Db21wb25lbnQsXG4gICAgU2VhcmNoSGlzdG9yeURpc3BsYXllckNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaERpc3BsYXllckNvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNvbnRhaW5lcjogXCJidXR0b25cIiB8IFwibGlua1wiID0gXCJidXR0b25cIjtcblxuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gXCJcIjtcblxuICBASW5wdXQoKVxuICBzZWFyY2hIaXN0b3J5Pzoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgfTtcblxuICBAT3V0cHV0KClcbiAgdmFsdWVDb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChcInNlYXJjaFRlbXBsYXRlXCIsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VhcmNoVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBnZXQgbW9iaWxlRGV0ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRzLmlzTW9iaWxlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGlhbG9nKCkge1xuICAgIGlmICghdGhpcy5zZWFyY2hIaXN0b3J5Py50eXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW48XG4gICAgICBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCxcbiAgICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljUGFyYW1zXG4gICAgPihCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCwge1xuICAgICAgZGF0YToge1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5zZWFyY2hUZW1wbGF0ZSxcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIG9wdGlvbnM6IHsgaXNEcm9wRG93bjogZmFsc2UgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgdGhpcy5fYm90dG9tU2hlZXQuZGlzbWlzcygpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMudmFsdWVDb21wbGV0ZWQuZW1pdChyZXN1bHQpO1xuICAgIH1cbiAgfVxufVxuIiwiQGlmICh0aGlzLm1vYmlsZURldGVjdGlvbikgeyBAaWYgKHRoaXMuY29udGFpbmVyID09PSAnYnV0dG9uJykge1xuPHRhLWJ1dHRvbiBbb3B0aW9uc109XCJ7IGNpcmN1bGFyOiB0cnVlIH1cIiAoYWN0aW9uKT1cInRoaXMub3BlbkRpYWxvZygpXCI+XG4gIDx0YS1mb250LWljb24gW25hbWVdPVwiJ3NlYXJjaCdcIj48L3RhLWZvbnQtaWNvbj5cbjwvdGEtYnV0dG9uPlxufSBAZWxzZSBpZiAodGhpcy5jb250YWluZXIgPT09ICdsaW5rJykge1xuPGRpdiAoY2xpY2spPVwidGhpcy5vcGVuRGlhbG9nKClcIj5cbiAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCInc2VhcmNoJ1wiPjwvdGEtZm9udC1pY29uPlxuPC9kaXY+XG59IH0gQGlmICghdGhpcy5tb2JpbGVEZXRlY3Rpb24pIHtcbjxuZy10ZW1wbGF0ZVxuICBbbmdUZW1wbGF0ZU91dGxldF09XCJzZWFyY2hUZW1wbGF0ZVwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IG9wdGlvbnM6IHsgaXNEcm9wRG93bjogdHJ1ZSB9IH1cIlxuPjwvbmctdGVtcGxhdGU+XG59XG5cbjxuZy10ZW1wbGF0ZSAjc2VhcmNoVGVtcGxhdGUgbGV0LW9wdGlvbnM9XCJvcHRpb25zXCI+XG4gIDx0YS1zZWFyY2gtaGlzdG9yeS1kaXNwbGF5ZXJcbiAgICBbcGxhY2Vob2xkZXJdPVwidGhpcy5wbGFjZWhvbGRlclwiXG4gICAgW3NlYXJjaEhpc3RvcnldPVwidGhpcy5zZWFyY2hIaXN0b3J5XCJcbiAgICBbaXNEcm9wRG93bl09XCJvcHRpb25zLmlzRHJvcERvd25cIlxuICAgICh2YWx1ZUNvbXBsZXRlZCk9XCJ0aGlzLmFjdGlvbigkZXZlbnQpXCJcbiAgPjwvdGEtc2VhcmNoLWhpc3RvcnktZGlzcGxheWVyPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==