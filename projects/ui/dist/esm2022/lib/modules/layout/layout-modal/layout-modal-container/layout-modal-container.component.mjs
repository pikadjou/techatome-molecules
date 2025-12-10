import { NgTemplateOutlet } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TaBaseModal } from "@ta/utils";
import { LayoutModalComponent } from "../layout-modal.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class TemplateModalContainer extends TaBaseModal {
    get style() {
        return this.data.style ?? "full";
    }
    constructor(data, dialogRef) {
        super();
        this.data = data;
        this.dialogRef = dialogRef;
        if (this.data.askClosing$) {
            this._registerSubscription(this.data.askClosing$.subscribe((_) => this.dialogRef.close()));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TemplateModalContainer, deps: [{ token: MAT_DIALOG_DATA }, { token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TemplateModalContainer, isStandalone: true, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '<ta-layout-modal [style]="this.style"><ng-template [ngTemplateOutlet]="this.data.template"></ng-template></ta-layout-modal>', isInline: true, dependencies: [{ kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TemplateModalContainer, decorators: [{
            type: Component,
            args: [{
                    selector: "",
                    template: '<ta-layout-modal [style]="this.style"><ng-template [ngTemplateOutlet]="this.data.template"></ng-template></ta-layout-modal>',
                    standalone: true,
                    imports: [LayoutModalComponent, NgTemplateOutlet],
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1.MatDialogRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LW1vZGFsLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGF5b3V0L2xheW91dC1tb2RhbC9sYXlvdXQtbW9kYWwtY29udGFpbmVyL2xheW91dC1tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQWdCLE1BQU0sMEJBQTBCLENBQUM7QUFJekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUV4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQWMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBYzdFLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxXQUFXO0lBQ3JELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFDRCxZQUNrQyxJQUFnQyxFQUN6RCxTQUE0QjtRQUVuQyxLQUFLLEVBQUUsQ0FBQztRQUh3QixTQUFJLEdBQUosSUFBSSxDQUE0QjtRQUN6RCxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUluQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FDL0QsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDOytHQWZVLHNCQUFzQixrQkFLdkIsZUFBZTttR0FMZCxzQkFBc0IsK0ZBSi9CLDZIQUE2SCw0REFFckgsb0JBQW9CLHdGQUFFLGdCQUFnQjs7NEZBRXJDLHNCQUFzQjtrQkFQbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtvQkFDWixRQUFRLEVBQ04sNkhBQTZIO29CQUMvSCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2xEOzswQkFNSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFRlbXBsYXRlUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ1wiO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVGFCYXNlTW9kYWwgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IExheW91dE1vZGFsQ29tcG9uZW50LCBNb2RhbFN0eWxlIH0gZnJvbSBcIi4uL2xheW91dC1tb2RhbC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyRGF0YSB7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBhc2tDbG9zaW5nJD86IE9ic2VydmFibGU8bnVsbD47XG4gIHN0eWxlPzogTW9kYWxTdHlsZTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJcIixcbiAgdGVtcGxhdGU6XG4gICAgJzx0YS1sYXlvdXQtbW9kYWwgW3N0eWxlXT1cInRoaXMuc3R5bGVcIj48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGhpcy5kYXRhLnRlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT48L3RhLWxheW91dC1tb2RhbD4nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTGF5b3V0TW9kYWxDb21wb25lbnQsIE5nVGVtcGxhdGVPdXRsZXRdLFxufSlcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZU1vZGFsQ29udGFpbmVyIGV4dGVuZHMgVGFCYXNlTW9kYWwge1xuICBnZXQgc3R5bGUoKTogTW9kYWxTdHlsZSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zdHlsZSA/PyBcImZ1bGxcIjtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IFRlbXBsYXRlTW9kYWxDb250YWluZXJEYXRhLFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+XG4gICkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhLmFza0Nsb3NpbmckKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgdGhpcy5kYXRhLmFza0Nsb3NpbmckLnN1YnNjcmliZSgoXykgPT4gdGhpcy5kaWFsb2dSZWYuY2xvc2UoKSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=