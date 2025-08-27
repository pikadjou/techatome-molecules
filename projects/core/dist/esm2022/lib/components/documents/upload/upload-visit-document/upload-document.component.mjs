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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentModal, deps: [{ token: i1.CamEnumerationService }, { token: i2.MatDialogRef }, { token: i3.UploadDocumentFormService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UploadDocumentModal, isStandalone: true, selector: "ta-upload-document", ngImport: i0, template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n    <ta-form\n      class=\"form\"\n      [inputs]=\"this.form\"\n      [error]=\"this.error\"\n      [loader]=\"this.loader\"\n      (valid)=\"this.onSaveClick($any($event))\"\n    >\n    </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"], dependencies: [{ kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentModal, decorators: [{
            type: Component,
            args: [{ selector: 'ta-upload-document', standalone: true, imports: [NgIf, LayoutModalComponent, FormComponent], template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n    <ta-form\n      class=\"form\"\n      [inputs]=\"this.form\"\n      [error]=\"this.error\"\n      [loader]=\"this.loader\"\n      (valid)=\"this.onSaveClick($any($event))\"\n    >\n    </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1.CamEnumerationService }, { type: i2.MatDialogRef }, { type: i3.UploadDocumentFormService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvdXBsb2FkL3VwbG9hZC12aXNpdC1kb2N1bWVudC91cGxvYWQtZG9jdW1lbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2RvY3VtZW50cy91cGxvYWQvdXBsb2FkLXZpc2l0LWRvY3VtZW50L3VwbG9hZC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU1sRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQWM5QyxNQUFNLE9BQU8sbUJBQW1CO0lBTTlCLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxZQUNVLGdCQUF1QyxFQUN4QyxTQUF5RSxFQUN4RSxLQUFnQztRQUZoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXVCO1FBQ3hDLGNBQVMsR0FBVCxTQUFTLENBQWdFO1FBQ3hFLFVBQUssR0FBTCxLQUFLLENBQTJCO1FBWm5DLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBaUIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUVqRCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBbUJmLGdCQUFXLEdBQUcsQ0FBQyxNQUFxRCxFQUFRLEVBQUU7WUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ25CLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztnQkFDL0IsY0FBYyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO2FBQzVDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQWRDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNsQyxXQUFXLEVBQUUsRUFBRTtZQUNmLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDOytHQXJCVSxtQkFBbUI7bUdBQW5CLG1CQUFtQiw4RUN4QmhDLHVSQVlBLCtFRFVrQixvQkFBb0Isd0ZBQUUsYUFBYTs7NEZBRXhDLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSxvQkFBb0IsY0FHbEIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZSB9IGZyb20gJ0B0YS9maWxlcy1leHRlbmRlZCc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnQHRhL2Zvcm0tYmFzaWMnO1xuaW1wb3J0IHsgSUlucHV0c0Vycm9yLCBJbnB1dEJhc2UgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBDYW1FbnVtZXJhdGlvblNlcnZpY2UsIFRyYW5zbGF0ZWRFbnVtZXJhdGlvbiB9IGZyb20gJ0B0YS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBMYXlvdXRNb2RhbENvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkRG9jdW1lbnRSZXN1bHQge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZG9jdW1lbnRUeXBlSWQ6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtdXBsb2FkLWRvY3VtZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VwbG9hZC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VwbG9hZC1kb2N1bWVudC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTGF5b3V0TW9kYWxDb21wb25lbnQsIEZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWREb2N1bWVudE1vZGFsIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGZvcm06IElucHV0QmFzZTxhbnk+W10gPSBbXTtcbiAgcHVibGljIGVycm9yOiBJSW5wdXRzRXJyb3IgPSB7IHN0YXR1czogMCwgbWVzc2FnZTogJycgfTtcblxuICBwdWJsaWMgbG9hZGVyID0gZmFsc2U7XG5cbiAgZ2V0IGZpbGVUeXBlcyQoKTogT2JzZXJ2YWJsZTxUcmFuc2xhdGVkRW51bWVyYXRpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLl9lbnVtVHlwZVNlcnZpY2UuZmV0Y2hGaWxlVHlwZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VudW1UeXBlU2VydmljZTogQ2FtRW51bWVyYXRpb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxVcGxvYWREb2N1bWVudE1vZGFsLCBVcGxvYWREb2N1bWVudFJlc3VsdCB8IG51bGw+LFxuICAgIHByaXZhdGUgX2Zvcm06IFVwbG9hZERvY3VtZW50Rm9ybVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuX2Zvcm0uZ2V0R3JvdXBGb3JtKHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIGRvY3VtZW50VHlwZXMkOiB0aGlzLmZpbGVUeXBlcyQsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TYXZlQ2xpY2sgPSAodmFsdWVzOiB7IGRlc2NyaXB0aW9uOiBzdHJpbmc7IGRvY3VtZW50VHlwZTogc3RyaW5nIH0pOiB2b2lkID0+IHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7XG4gICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxuICAgICAgZG9jdW1lbnRUeXBlSWQ6IE51bWJlcih2YWx1ZXMuZG9jdW1lbnRUeXBlKSxcbiAgICB9KTtcbiAgfTtcbn1cbiIsIjx0YS1sYXlvdXQtbW9kYWw+XG4gIEBpZiAodGhpcy5mb3JtLmxlbmd0aCA+IDApIHtcbiAgICA8dGEtZm9ybVxuICAgICAgY2xhc3M9XCJmb3JtXCJcbiAgICAgIFtpbnB1dHNdPVwidGhpcy5mb3JtXCJcbiAgICAgIFtlcnJvcl09XCJ0aGlzLmVycm9yXCJcbiAgICAgIFtsb2FkZXJdPVwidGhpcy5sb2FkZXJcIlxuICAgICAgKHZhbGlkKT1cInRoaXMub25TYXZlQ2xpY2soJGFueSgkZXZlbnQpKVwiXG4gICAgPlxuICAgIDwvdGEtZm9ybT5cbiAgfVxuPC90YS1sYXlvdXQtbW9kYWw+XG4iXX0=