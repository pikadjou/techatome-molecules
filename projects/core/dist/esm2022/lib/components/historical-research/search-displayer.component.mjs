import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { BottomSheetTemplateGenericComponent } from '@ta/menu';
import { ButtonComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';
import { SearchHistoryDisplayerComponent } from './search-history-displayer/search-history-displayer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/bottom-sheet";
export class SearchDisplayerComponent extends TaBaseComponent {
    get mobileDetection() {
        return this.breakpoints.isMobile;
    }
    constructor(_bottomSheet) {
        super();
        this._bottomSheet = _bottomSheet;
        this.container = 'button';
        this.placeholder = '';
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: SearchDisplayerComponent, isStandalone: true, selector: "ta-search-displayer", inputs: { container: "container", placeholder: "placeholder", searchHistory: "searchHistory" }, outputs: { valueCompleted: "valueCompleted" }, viewQueries: [{ propertyName: "searchTemplate", first: true, predicate: ["searchTemplate"], descendants: true, read: TemplateRef }], usesInheritance: true, ngImport: i0, template: "@if (this.mobileDetection) {\n  @if (this.container === 'button') {\n    <ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </ta-button>\n  } @else if (this.container === 'link') {\n    <div (click)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </div>\n  }\n}\n\n@if (!this.mobileDetection) {\n  <ng-template\n    [ngTemplateOutlet]=\"searchTemplate\"\n    [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n  ></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder\"\n    [searchHistory]=\"this.searchHistory\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: SearchHistoryDisplayerComponent, selector: "ta-search-history-displayer", inputs: ["searchHistory", "placeholder", "isDropDown"], outputs: ["valueCompleted"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SearchDisplayerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-search-displayer', standalone: true, imports: [NgIf, FontIconComponent, SearchHistoryDisplayerComponent, ButtonComponent], template: "@if (this.mobileDetection) {\n  @if (this.container === 'button') {\n    <ta-button [options]=\"{ circular: true }\" (action)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </ta-button>\n  } @else if (this.container === 'link') {\n    <div (click)=\"this.openDialog()\">\n      <ta-font-icon [name]=\"'search'\"></ta-font-icon>\n    </div>\n  }\n}\n\n@if (!this.mobileDetection) {\n  <ng-template\n    [ngTemplateOutlet]=\"searchTemplate\"\n    [ngTemplateOutletContext]=\"{ options: { isDropDown: true } }\"\n  ></ng-template>\n}\n\n<ng-template #searchTemplate let-options=\"options\">\n  <ta-search-history-displayer\n    [placeholder]=\"this.placeholder\"\n    [searchHistory]=\"this.searchHistory\"\n    [isDropDown]=\"options.isDropDown\"\n    (valueCompleted)=\"this.action($event)\"\n  ></ta-search-history-displayer>\n</ng-template>\n" }]
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
                args: ['searchTemplate', { read: TemplateRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWRpc3BsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9yaWNhbC1yZXNlYXJjaC9zZWFyY2gtZGlzcGxheWVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9oaXN0b3JpY2FsLXJlc2VhcmNoL3NlYXJjaC1kaXNwbGF5ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1DQUFtQyxFQUFvQyxNQUFNLFVBQVUsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFNUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0RBQStELENBQUM7OztBQVNoSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBZTtJQWtCM0QsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQW9CLFlBQTRCO1FBQzlDLEtBQUssRUFBRSxDQUFDO1FBRFUsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBcEJoRCxjQUFTLEdBQXNCLFFBQVEsQ0FBQztRQUd4QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQVF6QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFXcEMsQ0FBQztJQUVNLFVBQVU7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM5QixPQUFPO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQixtQ0FBbUMsRUFDbkM7WUFDRSxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUM3QixPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtpQkFDL0I7YUFDRjtTQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBVztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksTUFBTSxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBQ0gsQ0FBQzsrR0FoRFUsd0JBQXdCO21HQUF4Qix3QkFBd0IsMlRBZUUsV0FBVyxvRENqQ2xELG0zQkEyQkEsMEREWGtCLGlCQUFpQixtRkFBRSwrQkFBK0IsNkpBQUUsZUFBZTs7NEZBRXhFLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLCtCQUErQixFQUFFLGVBQWUsQ0FBQzttRkFJcEYsU0FBUztzQkFEUixLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUs7Z0JBTU4sY0FBYztzQkFEYixNQUFNO2dCQUlQLGNBQWM7c0JBRGIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JvdHRvbS1zaGVldCc7XG5cbmltcG9ydCB7IEZvbnRJY29uQ29tcG9uZW50IH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LCBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY1BhcmFtcyB9IGZyb20gJ0B0YS9tZW51JztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBTZWFyY2hIaXN0b3J5RGlzcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtaGlzdG9yeS1kaXNwbGF5ZXIvc2VhcmNoLWhpc3RvcnktZGlzcGxheWVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhLXNlYXJjaC1kaXNwbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWRpc3BsYXllci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1kaXNwbGF5ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIEZvbnRJY29uQ29tcG9uZW50LCBTZWFyY2hIaXN0b3J5RGlzcGxheWVyQ29tcG9uZW50LCBCdXR0b25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hEaXNwbGF5ZXJDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBjb250YWluZXI6ICdidXR0b24nIHwgJ2xpbmsnID0gJ2J1dHRvbic7XG5cbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNlYXJjaEhpc3Rvcnk/OiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xuXG4gIEBPdXRwdXQoKVxuICB2YWx1ZUNvbXBsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdzZWFyY2hUZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VhcmNoVGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBnZXQgbW9iaWxlRGV0ZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRzLmlzTW9iaWxlO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRGlhbG9nKCkge1xuICAgIGlmICghdGhpcy5zZWFyY2hIaXN0b3J5Py50eXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JvdHRvbVNoZWV0Lm9wZW48Qm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljUGFyYW1zPihcbiAgICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LFxuICAgICAge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGVtcGxhdGU6IHRoaXMuc2VhcmNoVGVtcGxhdGUsXG4gICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgb3B0aW9uczogeyBpc0Ryb3BEb3duOiBmYWxzZSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBhY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICB0aGlzLl9ib3R0b21TaGVldC5kaXNtaXNzKCk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy52YWx1ZUNvbXBsZXRlZC5lbWl0KHJlc3VsdCk7XG4gICAgfVxuICB9XG59XG4iLCJAaWYgKHRoaXMubW9iaWxlRGV0ZWN0aW9uKSB7XG4gIEBpZiAodGhpcy5jb250YWluZXIgPT09ICdidXR0b24nKSB7XG4gICAgPHRhLWJ1dHRvbiBbb3B0aW9uc109XCJ7IGNpcmN1bGFyOiB0cnVlIH1cIiAoYWN0aW9uKT1cInRoaXMub3BlbkRpYWxvZygpXCI+XG4gICAgICA8dGEtZm9udC1pY29uIFtuYW1lXT1cIidzZWFyY2gnXCI+PC90YS1mb250LWljb24+XG4gICAgPC90YS1idXR0b24+XG4gIH0gQGVsc2UgaWYgKHRoaXMuY29udGFpbmVyID09PSAnbGluaycpIHtcbiAgICA8ZGl2IChjbGljayk9XCJ0aGlzLm9wZW5EaWFsb2coKVwiPlxuICAgICAgPHRhLWZvbnQtaWNvbiBbbmFtZV09XCInc2VhcmNoJ1wiPjwvdGEtZm9udC1pY29uPlxuICAgIDwvZGl2PlxuICB9XG59XG5cbkBpZiAoIXRoaXMubW9iaWxlRGV0ZWN0aW9uKSB7XG4gIDxuZy10ZW1wbGF0ZVxuICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlYXJjaFRlbXBsYXRlXCJcbiAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBvcHRpb25zOiB7IGlzRHJvcERvd246IHRydWUgfSB9XCJcbiAgPjwvbmctdGVtcGxhdGU+XG59XG5cbjxuZy10ZW1wbGF0ZSAjc2VhcmNoVGVtcGxhdGUgbGV0LW9wdGlvbnM9XCJvcHRpb25zXCI+XG4gIDx0YS1zZWFyY2gtaGlzdG9yeS1kaXNwbGF5ZXJcbiAgICBbcGxhY2Vob2xkZXJdPVwidGhpcy5wbGFjZWhvbGRlclwiXG4gICAgW3NlYXJjaEhpc3RvcnldPVwidGhpcy5zZWFyY2hIaXN0b3J5XCJcbiAgICBbaXNEcm9wRG93bl09XCJvcHRpb25zLmlzRHJvcERvd25cIlxuICAgICh2YWx1ZUNvbXBsZXRlZCk9XCJ0aGlzLmFjdGlvbigkZXZlbnQpXCJcbiAgPjwvdGEtc2VhcmNoLWhpc3RvcnktZGlzcGxheWVyPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==