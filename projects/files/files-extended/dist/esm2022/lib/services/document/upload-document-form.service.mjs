import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { InputDropdown, InputPanel, InputTextarea } from '@ta/form-model';
import * as i0 from "@angular/core";
export class UploadDocumentFormService {
    constructor() { }
    getGroupForm(data) {
        return [
            new InputPanel({
                key: 'panel',
                label: 'documents.upload.dialog.title',
                containerClass: ['highlight-title', 'no-title-space', 'p-20'],
                children: [
                    new InputDropdown({
                        key: 'documentType',
                        label: 'documents.upload.dialog.document-type',
                        options$: data.documentTypes$.pipe(map((fileTypes) => {
                            return fileTypes.map(fileType => {
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
                        key: 'description',
                        label: 'documents.upload.dialog.description',
                        value: data.description,
                    }),
                ],
            }),
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentFormService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UploadDocumentFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWRvY3VtZW50LWZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LWZvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFBYSxhQUFhLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQVFyRixNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLGdCQUFlLENBQUM7SUFFVCxZQUFZLENBQUMsSUFBd0I7UUFDMUMsT0FBTztZQUNMLElBQUksVUFBVSxDQUFDO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLGNBQWMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztnQkFDN0QsUUFBUSxFQUFFO29CQUNSLElBQUksYUFBYSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsY0FBYzt3QkFDbkIsS0FBSyxFQUFFLHVDQUF1Qzt3QkFDOUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNoQyxHQUFHLENBQUMsQ0FBQyxTQUFrQyxFQUFFLEVBQUU7NEJBQ3pDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQ0FDOUIsT0FBTztvQ0FDTCxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7b0NBQzFCLElBQUksRUFBRSxRQUFRLENBQUMsZUFBZTtpQ0FDL0IsQ0FBQzs0QkFDSixDQUFDLENBQUMsQ0FBQzt3QkFDTCxDQUFDLENBQUMsQ0FDSDt3QkFDRCxRQUFRLEVBQUUsS0FBSzt3QkFDZixRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztxQkFDbkIsQ0FBQztvQkFDRixJQUFJLGFBQWEsQ0FBQzt3QkFDaEIsR0FBRyxFQUFFLGFBQWE7d0JBQ2xCLEtBQUssRUFBRSxxQ0FBcUM7d0JBQzVDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztxQkFDeEIsQ0FBQztpQkFDSDthQUNGLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQzsrR0FsQ1UseUJBQXlCO21IQUF6Qix5QkFBeUIsY0FGeEIsTUFBTTs7NEZBRVAseUJBQXlCO2tCQUhyQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBJbnB1dEJhc2UsIElucHV0RHJvcGRvd24sIElucHV0UGFuZWwsIElucHV0VGV4dGFyZWEgfSBmcm9tICdAdGEvZm9ybS1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVkRW51bWVyYXRpb24gfSBmcm9tICdAdGEvc2VydmljZXMnO1xuXG5pbXBvcnQgeyBVcGxvYWREb2N1bWVudERhdGEgfSBmcm9tICcuL3VwbG9hZC1kb2N1bWVudC1kYXRhJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVwbG9hZERvY3VtZW50Rm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGdldEdyb3VwRm9ybShkYXRhOiBVcGxvYWREb2N1bWVudERhdGEpOiBJbnB1dEJhc2U8YW55PltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgbmV3IElucHV0UGFuZWwoe1xuICAgICAgICBrZXk6ICdwYW5lbCcsXG4gICAgICAgIGxhYmVsOiAnZG9jdW1lbnRzLnVwbG9hZC5kaWFsb2cudGl0bGUnLFxuICAgICAgICBjb250YWluZXJDbGFzczogWydoaWdobGlnaHQtdGl0bGUnLCAnbm8tdGl0bGUtc3BhY2UnLCAncC0yMCddLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIG5ldyBJbnB1dERyb3Bkb3duKHtcbiAgICAgICAgICAgIGtleTogJ2RvY3VtZW50VHlwZScsXG4gICAgICAgICAgICBsYWJlbDogJ2RvY3VtZW50cy51cGxvYWQuZGlhbG9nLmRvY3VtZW50LXR5cGUnLFxuICAgICAgICAgICAgb3B0aW9ucyQ6IGRhdGEuZG9jdW1lbnRUeXBlcyQucGlwZShcbiAgICAgICAgICAgICAgbWFwKChmaWxlVHlwZXM6IFRyYW5zbGF0ZWRFbnVtZXJhdGlvbltdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVUeXBlcy5tYXAoZmlsZVR5cGUgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZpbGVUeXBlLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGVUeXBlLnRyYW5zbGF0ZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZSQ6IG9mKHRydWUpLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBJbnB1dFRleHRhcmVhKHtcbiAgICAgICAgICAgIGtleTogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIGxhYmVsOiAnZG9jdW1lbnRzLnVwbG9hZC5kaWFsb2cuZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdO1xuICB9XG59XG4iXX0=