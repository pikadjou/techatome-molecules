import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgTemplateOutlet } from '@angular/common';
import { CamBaseModal } from '@ta/utils';
import { LayoutModalComponent } from '../layout-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class TemplateModalContainer extends CamBaseModal {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwtY29udGFpbmVyL2xheW91dC1tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUd6QyxPQUFPLEVBQWMsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBYzdFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxZQUFZO0lBQ3RELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFDRCxZQUNrQyxJQUFnQyxFQUN6RCxTQUE0QjtRQUVuQyxLQUFLLEVBQUUsQ0FBQztRQUh3QixTQUFJLEdBQUosSUFBSSxDQUE0QjtRQUN6RCxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUduQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNGLENBQUM7SUFDSCxDQUFDOytHQVpVLHNCQUFzQixrQkFLdkIsZUFBZTttR0FMZCxzQkFBc0IsK0ZBSi9CLDZIQUE2SCw0REFFckgsb0JBQW9CLHdGQUFFLGdCQUFnQjs7NEZBRXJDLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDWCxRQUFRLEVBQUUsRUFBRTtvQkFDVixRQUFRLEVBQ04sNkhBQTZIO29CQUMvSCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2xEOzswQkFNSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDYW1CYXNlTW9kYWwgfSBmcm9tICdAdGEvdXRpbHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBNb2RhbFN0eWxlLCBMYXlvdXRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2xheW91dC1tb2RhbC5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlTW9kYWxDb250YWluZXJEYXRhIHtcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIGFza0Nsb3NpbmckPzogT2JzZXJ2YWJsZTxudWxsPjtcbiAgc3R5bGU/OiBNb2RhbFN0eWxlO1xufVxuQENvbXBvbmVudCh7XG5zZWxlY3RvcjogJycsXG4gIHRlbXBsYXRlOlxuICAgICc8dGEtbGF5b3V0LW1vZGFsIFtzdHlsZV09XCJ0aGlzLnN0eWxlXCI+PG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRoaXMuZGF0YS50ZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+PC90YS1sYXlvdXQtbW9kYWw+JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0xheW91dE1vZGFsQ29tcG9uZW50LCBOZ1RlbXBsYXRlT3V0bGV0XSxcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVNb2RhbENvbnRhaW5lciBleHRlbmRzIENhbUJhc2VNb2RhbCB7XG4gIGdldCBzdHlsZSgpOiBNb2RhbFN0eWxlIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnN0eWxlID8/ICdmdWxsJztcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFRlbXBsYXRlTW9kYWxDb250YWluZXJEYXRhLFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+XG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHRoaXMuZGF0YS5hc2tDbG9zaW5nJCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24odGhpcy5kYXRhLmFza0Nsb3NpbmckLnN1YnNjcmliZShfID0+IHRoaXMuZGlhbG9nUmVmLmNsb3NlKCkpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==