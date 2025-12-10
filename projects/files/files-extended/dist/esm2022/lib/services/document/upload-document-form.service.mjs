import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import { InputDropdown, InputPanel, InputTextarea, } from "@ta/form-model";
import * as i0 from "@angular/core";
export class UploadDocumentFormService {
    constructor() { }
    getGroupForm(data) {
        return [
            new InputPanel({
                key: "panel",
                label: "documents.upload.dialog.title",
                containerClass: ["highlight-title", "no-title-space", "p-20"],
                children: [
                    new InputDropdown({
                        key: "documentType",
                        label: "documents.upload.dialog.document-type",
                        options$: data.documentTypes$.pipe(map((fileTypes) => {
                            return fileTypes.map((fileType) => {
                                return {
                                    id: fileType.id.toString(),
                                    name: fileType.translatedValue,
                                };
                            });
                        })),
                        multiple: false,
                        visible$: of(true),
                    }),
                    new InputTextarea({
                        key: "description",
                        label: "documents.upload.dialog.description",
                        value: data.description,
                    }),
                ],
            }),
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadDocumentFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadDocumentFormService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: UploadDocumentFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWRvY3VtZW50LWZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LWZvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFFTCxhQUFhLEVBQ2IsVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDOztBQVF4QixNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLGdCQUFlLENBQUM7SUFFVCxZQUFZLENBQUMsSUFBd0I7UUFDMUMsT0FBTztZQUNMLElBQUksVUFBVSxDQUFDO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLGNBQWMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztnQkFDN0QsUUFBUSxFQUFFO29CQUNSLElBQUksYUFBYSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsY0FBYzt3QkFDbkIsS0FBSyxFQUFFLHVDQUF1Qzt3QkFDOUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNoQyxHQUFHLENBQUMsQ0FBQyxTQUFrQyxFQUFFLEVBQUU7NEJBQ3pDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dDQUNoQyxPQUFPO29DQUNMLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtvQ0FDMUIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxlQUFlO2lDQUMvQixDQUFDOzRCQUNKLENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUNIO3dCQUNELFFBQVEsRUFBRSxLQUFLO3dCQUNmLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO3FCQUNuQixDQUFDO29CQUNGLElBQUksYUFBYSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsYUFBYTt3QkFDbEIsS0FBSyxFQUFFLHFDQUFxQzt3QkFDNUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUN4QixDQUFDO2lCQUNIO2FBQ0YsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDOytHQWxDVSx5QkFBeUI7bUhBQXpCLHlCQUF5QixjQUZ4QixNQUFNOzs0RkFFUCx5QkFBeUI7a0JBSHJDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBvZiB9IGZyb20gXCJyeGpzXCI7XG5cbmltcG9ydCB7XG4gIElucHV0QmFzZSxcbiAgSW5wdXREcm9wZG93bixcbiAgSW5wdXRQYW5lbCxcbiAgSW5wdXRUZXh0YXJlYSxcbn0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVkRW51bWVyYXRpb24gfSBmcm9tIFwiQHRhL3NlcnZpY2VzXCI7XG5cbmltcG9ydCB7IFVwbG9hZERvY3VtZW50RGF0YSB9IGZyb20gXCIuL3VwbG9hZC1kb2N1bWVudC1kYXRhXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZERvY3VtZW50Rm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGdldEdyb3VwRm9ybShkYXRhOiBVcGxvYWREb2N1bWVudERhdGEpOiBJbnB1dEJhc2U8YW55PltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IElucHV0UGFuZWwoe1xuICAgICAgICBrZXk6IFwicGFuZWxcIixcbiAgICAgICAgbGFiZWw6IFwiZG9jdW1lbnRzLnVwbG9hZC5kaWFsb2cudGl0bGVcIixcbiAgICAgICAgY29udGFpbmVyQ2xhc3M6IFtcImhpZ2hsaWdodC10aXRsZVwiLCBcIm5vLXRpdGxlLXNwYWNlXCIsIFwicC0yMFwiXSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICBuZXcgSW5wdXREcm9wZG93bih7XG4gICAgICAgICAgICBrZXk6IFwiZG9jdW1lbnRUeXBlXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJkb2N1bWVudHMudXBsb2FkLmRpYWxvZy5kb2N1bWVudC10eXBlXCIsXG4gICAgICAgICAgICBvcHRpb25zJDogZGF0YS5kb2N1bWVudFR5cGVzJC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKGZpbGVUeXBlczogVHJhbnNsYXRlZEVudW1lcmF0aW9uW10pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZVR5cGVzLm1hcCgoZmlsZVR5cGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBmaWxlVHlwZS5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlVHlwZS50cmFuc2xhdGVkVmFsdWUsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGUkOiBvZih0cnVlKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgSW5wdXRUZXh0YXJlYSh7XG4gICAgICAgICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIGxhYmVsOiBcImRvY3VtZW50cy51cGxvYWQuZGlhbG9nLmRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICB2YWx1ZTogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cbn1cbiJdfQ==