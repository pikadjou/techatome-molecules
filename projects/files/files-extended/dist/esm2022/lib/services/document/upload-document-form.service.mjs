import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import { InputDropdown, InputPanel, InputTextarea, } from "@ta/form-model";
import * as i0 from "@angular/core";
export class TaUploadDocumentFormService {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUploadDocumentFormService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUploadDocumentFormService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaUploadDocumentFormService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });
/** @deprecated utiliser TaUploadDocumentFormService */
export { TaUploadDocumentFormService as UploadDocumentFormService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWRvY3VtZW50LWZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LWZvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFCLE9BQU8sRUFFTCxhQUFhLEVBQ2IsVUFBVSxFQUNWLGFBQWEsR0FDZCxNQUFNLGdCQUFnQixDQUFDOztBQVF4QixNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLGdCQUFlLENBQUM7SUFFVCxZQUFZLENBQUMsSUFBd0I7UUFDMUMsT0FBTztZQUNMLElBQUksVUFBVSxDQUFDO2dCQUNiLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSwrQkFBK0I7Z0JBQ3RDLGNBQWMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sQ0FBQztnQkFDN0QsUUFBUSxFQUFFO29CQUNSLElBQUksYUFBYSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsY0FBYzt3QkFDbkIsS0FBSyxFQUFFLHVDQUF1Qzt3QkFDOUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNoQyxHQUFHLENBQUMsQ0FBQyxTQUFrQyxFQUFFLEVBQUU7NEJBQ3pDLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dDQUNoQyxPQUFPO29DQUNMLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtvQ0FDMUIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxlQUFlO2lDQUMvQixDQUFDOzRCQUNKLENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUNIO3dCQUNELFFBQVEsRUFBRSxLQUFLO3dCQUNmLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO3FCQUNuQixDQUFDO29CQUNGLElBQUksYUFBYSxDQUFDO3dCQUNoQixHQUFHLEVBQUUsYUFBYTt3QkFDbEIsS0FBSyxFQUFFLHFDQUFxQzt3QkFDNUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUN4QixDQUFDO2lCQUNIO2FBQ0YsQ0FBQztTQUNILENBQUM7SUFDSixDQUFDOytHQWxDVSwyQkFBMkI7bUhBQTNCLDJCQUEyQixjQUYxQixNQUFNOzs0RkFFUCwyQkFBMkI7a0JBSHZDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COztBQXNDRCx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLDJCQUEyQixJQUFJLHlCQUF5QixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmltcG9ydCB7IG9mIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHtcbiAgSW5wdXRCYXNlLFxuICBJbnB1dERyb3Bkb3duLFxuICBJbnB1dFBhbmVsLFxuICBJbnB1dFRleHRhcmVhLFxufSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZWRFbnVtZXJhdGlvbiB9IGZyb20gXCJAdGEvc2VydmljZXNcIjtcblxuaW1wb3J0IHsgVXBsb2FkRG9jdW1lbnREYXRhIH0gZnJvbSBcIi4vdXBsb2FkLWRvY3VtZW50LWRhdGFcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgVGFVcGxvYWREb2N1bWVudEZvcm1TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBnZXRHcm91cEZvcm0oZGF0YTogVXBsb2FkRG9jdW1lbnREYXRhKTogSW5wdXRCYXNlPGFueT5bXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBJbnB1dFBhbmVsKHtcbiAgICAgICAga2V5OiBcInBhbmVsXCIsXG4gICAgICAgIGxhYmVsOiBcImRvY3VtZW50cy51cGxvYWQuZGlhbG9nLnRpdGxlXCIsXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiBbXCJoaWdobGlnaHQtdGl0bGVcIiwgXCJuby10aXRsZS1zcGFjZVwiLCBcInAtMjBcIl0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgbmV3IElucHV0RHJvcGRvd24oe1xuICAgICAgICAgICAga2V5OiBcImRvY3VtZW50VHlwZVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiZG9jdW1lbnRzLnVwbG9hZC5kaWFsb2cuZG9jdW1lbnQtdHlwZVwiLFxuICAgICAgICAgICAgb3B0aW9ucyQ6IGRhdGEuZG9jdW1lbnRUeXBlcyQucGlwZShcbiAgICAgICAgICAgICAgbWFwKChmaWxlVHlwZXM6IFRyYW5zbGF0ZWRFbnVtZXJhdGlvbltdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVUeXBlcy5tYXAoKGZpbGVUeXBlKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVR5cGUuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZVR5cGUudHJhbnNsYXRlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlJDogb2YodHJ1ZSksXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbmV3IElucHV0VGV4dGFyZWEoe1xuICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJkb2N1bWVudHMudXBsb2FkLmRpYWxvZy5kZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgdmFsdWU6IGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdO1xuICB9XG59XG5cbi8qKiBAZGVwcmVjYXRlZCB1dGlsaXNlciBUYVVwbG9hZERvY3VtZW50Rm9ybVNlcnZpY2UgKi9cbmV4cG9ydCB7IFRhVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZSBhcyBVcGxvYWREb2N1bWVudEZvcm1TZXJ2aWNlIH07XG4iXX0=