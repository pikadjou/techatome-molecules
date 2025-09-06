import { NgTemplateOutlet } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaBaseModal } from '@ta/utils';
import { LayoutModalComponent } from '../layout-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class TemplateModalContainer extends TaBaseModal {
    get style() {
        return this.data.style ?? 'full';
    }
    constructor(data, dialogRef) {
        super();
        this.data = data;
        this.dialogRef = dialogRef;
        if (this.data.askClosing$) {
            this._registerSubscription(this.data.askClosing$.subscribe(_ => this.dialogRef.close()));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TemplateModalContainer, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TemplateModalContainer, isStandalone: true, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '<ta-layout-modal [style]="this.style"><ng-template [ngTemplateOutlet]="this.data.template"></ng-template></ta-layout-modal>', isInline: true, dependencies: [{ kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TemplateModalContainer, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: '<ta-layout-modal [style]="this.style"><ng-template [ngTemplateOutlet]="this.data.template"></ng-template></ta-layout-modal>',
                    standalone: true,
                    imports: [LayoutModalComponent, NgTemplateOutlet],
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.MatDialogRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwtY29udGFpbmVyL2xheW91dC1tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFJekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQWMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBYzdFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxXQUFXO0lBQ3JELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFDRCxZQUNrQyxJQUFnQyxFQUN6RCxTQUE0QjtRQUVuQyxLQUFLLEVBQUUsQ0FBQztRQUh3QixTQUFJLEdBQUosSUFBSSxDQUE0QjtRQUN6RCxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUluQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNGLENBQUM7SUFDSCxDQUFDOytHQWJVLHNCQUFzQixrQkFLdkIsZUFBZTttR0FMZCxzQkFBc0IsK0ZBSi9CLDZIQUE2SCw0REFFckgsb0JBQW9CLHdGQUFFLGdCQUFnQjs7NEZBRXJDLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQ04sNkhBQTZIO29CQUMvSCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2xEOzswQkFNSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhQmFzZU1vZGFsIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgTGF5b3V0TW9kYWxDb21wb25lbnQsIE1vZGFsU3R5bGUgfSBmcm9tICcuLi9sYXlvdXQtbW9kYWwuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyRGF0YSB7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBhc2tDbG9zaW5nJD86IE9ic2VydmFibGU8bnVsbD47XG4gIHN0eWxlPzogTW9kYWxTdHlsZTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJycsXG4gIHRlbXBsYXRlOlxuICAgICc8dGEtbGF5b3V0LW1vZGFsIFtzdHlsZV09XCJ0aGlzLnN0eWxlXCI+PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRoaXMuZGF0YS50ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+PC90YS1sYXlvdXQtbW9kYWw+JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0xheW91dE1vZGFsQ29tcG9uZW50LCBOZ1RlbXBsYXRlT3V0bGV0XSxcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVNb2RhbENvbnRhaW5lciBleHRlbmRzIFRhQmFzZU1vZGFsIHtcbiAgZ2V0IHN0eWxlKCk6IE1vZGFsU3R5bGUge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc3R5bGUgPz8gJ2Z1bGwnO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogVGVtcGxhdGVNb2RhbENvbnRhaW5lckRhdGEsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPGFueT5cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmICh0aGlzLmRhdGEuYXNrQ2xvc2luZyQpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKHRoaXMuZGF0YS5hc2tDbG9zaW5nJC5zdWJzY3JpYmUoXyA9PiB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpKSk7XG4gICAgfVxuICB9XG59XG4iXX0=