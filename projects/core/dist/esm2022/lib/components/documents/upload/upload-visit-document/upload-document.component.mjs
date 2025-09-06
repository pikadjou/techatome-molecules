import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from '@ta/form-basic';
import { LayoutModalComponent } from '@ta/ui';
import * as i0 from "@angular/core";
import * as i1 from "@ta/services";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@ta/files-extended";
export class UploadDocumentModal {
    get fileTypes$() {
        return this._enumTypeService.fetchFileTypes();
    }
    constructor(_enumTypeService, dialogRef, _form) {
        this._enumTypeService = _enumTypeService;
        this.dialogRef = dialogRef;
        this._form = _form;
        this.form = [];
        this.error = { status: 0, message: '' };
        this.loader = false;
        this.onSaveClick = (values) => {
            this.dialogRef.close({
                description: values.description,
                documentTypeId: Number(values.documentType),
            });
        };
    }
    ngOnInit() {
        this.form = this._form.getGroupForm({
            description: '',
            documentTypes$: this.fileTypes$,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentModal, deps: [{ token: i1.TaEnumerationService }, { token: i2.MatDialogRef }, { token: i3.UploadDocumentFormService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UploadDocumentModal, isStandalone: true, selector: "ta-upload-document", ngImport: i0, template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n    <ta-form\n      class=\"form\"\n      [inputs]=\"this.form\"\n      [error]=\"this.error\"\n      [loader]=\"this.loader\"\n      (valid)=\"this.onSaveClick($any($event))\"\n    >\n    </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"], dependencies: [{ kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentModal, decorators: [{
            type: Component,
            args: [{ selector: 'ta-upload-document', standalone: true, imports: [NgIf, LayoutModalComponent, FormComponent], template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n    <ta-form\n      class=\"form\"\n      [inputs]=\"this.form\"\n      [error]=\"this.error\"\n      [loader]=\"this.loader\"\n      (valid)=\"this.onSaveClick($any($event))\"\n    >\n    </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1.TaEnumerationService }, { type: i2.MatDialogRef }, { type: i3.UploadDocumentFormService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvdXBsb2FkL3VwbG9hZC12aXNpdC1kb2N1bWVudC91cGxvYWQtZG9jdW1lbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2RvY3VtZW50cy91cGxvYWQvdXBsb2FkLXZpc2l0LWRvY3VtZW50L3VwbG9hZC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU1sRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQWM5QyxNQUFNLE9BQU8sbUJBQW1CO0lBTTlCLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxZQUNVLGdCQUFzQyxFQUN2QyxTQUF5RSxFQUN4RSxLQUFnQztRQUZoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXNCO1FBQ3ZDLGNBQVMsR0FBVCxTQUFTLENBQWdFO1FBQ3hFLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBWm5DLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBaUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUVqRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBbUJmLGdCQUFXLEdBQUcsQ0FBQyxNQUFxRCxFQUFRLEVBQUU7WUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztnQkFDL0IsY0FBYyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2FBQzVDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQWRDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNsQyxXQUFXLEVBQUUsRUFBRTtZQUNmLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQXJCVSxtQkFBbUI7bUdBQW5CLG1CQUFtQiw4RUN4QmhDLHVSQVlBLCtFRFVrQixvQkFBb0Isd0ZBQUUsYUFBYTs7NEZBRXhDLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxvQkFBb0IsY0FHbEIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZSB9IGZyb20gJ0B0YS9maWxlcy1leHRlbmRlZCc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHRhL2Zvcm0tYmFzaWMnO1xuaW1wb3J0IHsgSUlucHV0c0Vycm9yLCBJbnB1dEJhc2UgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBUYUVudW1lcmF0aW9uU2VydmljZSwgVHJhbnNsYXRlZEVudW1lcmF0aW9uIH0gZnJvbSAnQHRhL3NlcnZpY2VzJztcbmltcG9ydCB7IExheW91dE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnQHRhL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWREb2N1bWVudFJlc3VsdCB7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkb2N1bWVudFR5cGVJZDogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS11cGxvYWQtZG9jdW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBMYXlvdXRNb2RhbENvbXBvbmVudCwgRm9ybUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZERvY3VtZW50TW9kYWwgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgZm9ybTogSW5wdXRCYXNlPGFueT5bXSA9IFtdO1xuICBwdWJsaWMgZXJyb3I6IElJbnB1dHNFcnJvciA9IHsgc3RhdHVzOiAwLCBtZXNzYWdlOiAnJyB9O1xuXG4gIHB1YmxpYyBsb2FkZXIgPSBmYWxzZTtcblxuICBnZXQgZmlsZVR5cGVzJCgpOiBPYnNlcnZhYmxlPFRyYW5zbGF0ZWRFbnVtZXJhdGlvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2VudW1UeXBlU2VydmljZS5mZXRjaEZpbGVUeXBlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZW51bVR5cGVTZXJ2aWNlOiBUYUVudW1lcmF0aW9uU2VydmljZSxcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VXBsb2FkRG9jdW1lbnRNb2RhbCwgVXBsb2FkRG9jdW1lbnRSZXN1bHQgfCBudWxsPixcbiAgICBwcml2YXRlIF9mb3JtOiBVcGxvYWREb2N1bWVudEZvcm1TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLl9mb3JtLmdldEdyb3VwRm9ybSh7XG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICBkb2N1bWVudFR5cGVzJDogdGhpcy5maWxlVHlwZXMkLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2F2ZUNsaWNrID0gKHZhbHVlczogeyBkZXNjcmlwdGlvbjogc3RyaW5nOyBkb2N1bWVudFR5cGU6IHN0cmluZyB9KTogdm9pZCA9PiB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2Uoe1xuICAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcbiAgICAgIGRvY3VtZW50VHlwZUlkOiBOdW1iZXIodmFsdWVzLmRvY3VtZW50VHlwZSksXG4gICAgfSk7XG4gIH07XG59XG4iLCI8dGEtbGF5b3V0LW1vZGFsPlxuICBAaWYgKHRoaXMuZm9ybS5sZW5ndGggPiAwKSB7XG4gICAgPHRhLWZvcm1cbiAgICAgIGNsYXNzPVwiZm9ybVwiXG4gICAgICBbaW5wdXRzXT1cInRoaXMuZm9ybVwiXG4gICAgICBbZXJyb3JdPVwidGhpcy5lcnJvclwiXG4gICAgICBbbG9hZGVyXT1cInRoaXMubG9hZGVyXCJcbiAgICAgICh2YWxpZCk9XCJ0aGlzLm9uU2F2ZUNsaWNrKCRhbnkoJGV2ZW50KSlcIlxuICAgID5cbiAgICA8L3RhLWZvcm0+XG4gIH1cbjwvdGEtbGF5b3V0LW1vZGFsPlxuIl19