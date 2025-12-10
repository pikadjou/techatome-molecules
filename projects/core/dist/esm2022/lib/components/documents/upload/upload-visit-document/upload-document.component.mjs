import { NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormComponent } from "@ta/form-basic";
import { LayoutModalComponent } from "@ta/ui";
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
        this.error = { status: 0, message: "" };
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
            description: "",
            documentTypes$: this.fileTypes$,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadDocumentModal, deps: [{ token: i1.TaEnumerationService }, { token: i2.MatDialogRef }, { token: i3.UploadDocumentFormService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: UploadDocumentModal, isStandalone: true, selector: "ta-upload-document", ngImport: i0, template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n  <ta-form\n    class=\"form\"\n    [inputs]=\"this.form\"\n    [error]=\"this.error\"\n    [loader]=\"this.loader\"\n    (valid)=\"this.onSaveClick($any($event))\"\n  >\n  </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"], dependencies: [{ kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "component", type: FormComponent, selector: "ta-form", inputs: ["inputs", "askValidation$", "askOnDestroy", "loader", "error", "border", "canDisplayButton", "buttonTitle", "onLive"], outputs: ["valid", "isFormValid"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadDocumentModal, decorators: [{
            type: Component,
            args: [{ selector: "ta-upload-document", standalone: true, imports: [NgIf, LayoutModalComponent, FormComponent], template: "<ta-layout-modal>\n  @if (this.form.length > 0) {\n  <ta-form\n    class=\"form\"\n    [inputs]=\"this.form\"\n    [error]=\"this.error\"\n    [loader]=\"this.loader\"\n    (valid)=\"this.onSaveClick($any($event))\"\n  >\n  </ta-form>\n  }\n</ta-layout-modal>\n", styles: [".form{padding:10px}\n"] }]
        }], ctorParameters: () => [{ type: i1.TaEnumerationService }, { type: i2.MatDialogRef }, { type: i3.UploadDocumentFormService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWRvY3VtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9kb2N1bWVudHMvdXBsb2FkL3VwbG9hZC12aXNpdC1kb2N1bWVudC91cGxvYWQtZG9jdW1lbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2RvY3VtZW50cy91cGxvYWQvdXBsb2FkLXZpc2l0LWRvY3VtZW50L3VwbG9hZC1kb2N1bWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU1sRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQWM5QyxNQUFNLE9BQU8sbUJBQW1CO0lBTTlCLElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRCxZQUNVLGdCQUFzQyxFQUN2QyxTQUdOLEVBQ08sS0FBZ0M7UUFMaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFzQjtRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUdmO1FBQ08sVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFmbkMsU0FBSSxHQUFxQixFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFpQixFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRWpELFdBQU0sR0FBRyxLQUFLLENBQUM7UUFzQmYsZ0JBQVcsR0FBRyxDQUFDLE1BR3JCLEVBQVEsRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUNuQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQy9CLGNBQWMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUM1QyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUFqQkMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ2xDLFdBQVcsRUFBRSxFQUFFO1lBQ2YsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBeEJVLG1CQUFtQjttR0FBbkIsbUJBQW1CLDhFQ3hCaEMsdVFBWUEsK0VEVWtCLG9CQUFvQix3RkFBRSxhQUFhOzs0RkFFeEMsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLG9CQUFvQixjQUdsQixJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdJZiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7IFVwbG9hZERvY3VtZW50Rm9ybVNlcnZpY2UgfSBmcm9tIFwiQHRhL2ZpbGVzLWV4dGVuZGVkXCI7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9mb3JtLWJhc2ljXCI7XG5pbXBvcnQgeyBJSW5wdXRzRXJyb3IsIElucHV0QmFzZSB9IGZyb20gXCJAdGEvZm9ybS1tb2RlbFwiO1xuaW1wb3J0IHsgVGFFbnVtZXJhdGlvblNlcnZpY2UsIFRyYW5zbGF0ZWRFbnVtZXJhdGlvbiB9IGZyb20gXCJAdGEvc2VydmljZXNcIjtcbmltcG9ydCB7IExheW91dE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIkB0YS91aVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZERvY3VtZW50UmVzdWx0IHtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGRvY3VtZW50VHlwZUlkOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS11cGxvYWQtZG9jdW1lbnRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi91cGxvYWQtZG9jdW1lbnQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3VwbG9hZC1kb2N1bWVudC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nSWYsIExheW91dE1vZGFsQ29tcG9uZW50LCBGb3JtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkRG9jdW1lbnRNb2RhbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBmb3JtOiBJbnB1dEJhc2U8YW55PltdID0gW107XG4gIHB1YmxpYyBlcnJvcjogSUlucHV0c0Vycm9yID0geyBzdGF0dXM6IDAsIG1lc3NhZ2U6IFwiXCIgfTtcblxuICBwdWJsaWMgbG9hZGVyID0gZmFsc2U7XG5cbiAgZ2V0IGZpbGVUeXBlcyQoKTogT2JzZXJ2YWJsZTxUcmFuc2xhdGVkRW51bWVyYXRpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLl9lbnVtVHlwZVNlcnZpY2UuZmV0Y2hGaWxlVHlwZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VudW1UeXBlU2VydmljZTogVGFFbnVtZXJhdGlvblNlcnZpY2UsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFxuICAgICAgVXBsb2FkRG9jdW1lbnRNb2RhbCxcbiAgICAgIFVwbG9hZERvY3VtZW50UmVzdWx0IHwgbnVsbFxuICAgID4sXG4gICAgcHJpdmF0ZSBfZm9ybTogVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5fZm9ybS5nZXRHcm91cEZvcm0oe1xuICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICBkb2N1bWVudFR5cGVzJDogdGhpcy5maWxlVHlwZXMkLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uU2F2ZUNsaWNrID0gKHZhbHVlczoge1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XG4gIH0pOiB2b2lkID0+IHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7XG4gICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxuICAgICAgZG9jdW1lbnRUeXBlSWQ6IE51bWJlcih2YWx1ZXMuZG9jdW1lbnRUeXBlKSxcbiAgICB9KTtcbiAgfTtcbn1cbiIsIjx0YS1sYXlvdXQtbW9kYWw+XG4gIEBpZiAodGhpcy5mb3JtLmxlbmd0aCA+IDApIHtcbiAgPHRhLWZvcm1cbiAgICBjbGFzcz1cImZvcm1cIlxuICAgIFtpbnB1dHNdPVwidGhpcy5mb3JtXCJcbiAgICBbZXJyb3JdPVwidGhpcy5lcnJvclwiXG4gICAgW2xvYWRlcl09XCJ0aGlzLmxvYWRlclwiXG4gICAgKHZhbGlkKT1cInRoaXMub25TYXZlQ2xpY2soJGFueSgkZXZlbnQpKVwiXG4gID5cbiAgPC90YS1mb3JtPlxuICB9XG48L3RhLWxheW91dC1tb2RhbD5cbiJdfQ==