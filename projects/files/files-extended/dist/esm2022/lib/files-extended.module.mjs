import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaFilesBasicModule } from '@ta/files-basic';
import { TaFormModule } from '@ta/form-basic';
import { TaFormInputsModule } from '@ta/form-input';
import { TaIconsModule } from '@ta/icons';
import { TaMenuModule } from '@ta/menu';
import { TaEnumerationService } from '@ta/services';
import { TaCardModule, TaContainerModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
import { FilesDisplayComponent } from './components/display/files-display.component';
import { UploadComponent } from './components/upload/files-upload.component';
import { UploadDocumentFormService } from './services/document/upload-document-form.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFilesExtendedModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FilesDisplayComponent, UploadComponent, TaFilesBasicModule } from '@ta/library-name';
 */
export class TaFilesExtendedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesExtendedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaFilesExtendedModule, imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaFormModule,
            TaUiModule,
            TaCardModule,
            CommonModule,
            TaFormInputsModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaMenuModule,
            FilesDisplayComponent,
            UploadComponent], exports: [FilesDisplayComponent, UploadComponent, TaFilesBasicModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesExtendedModule, providers: [TaEnumerationService, UploadDocumentFormService], imports: [TaContainerModule,
            TaDirectivePipeModule,
            TaFormModule,
            TaUiModule,
            TaCardModule,
            CommonModule,
            TaFormInputsModule,
            TaFilesBasicModule,
            TaIconsModule,
            TaMenuModule,
            FilesDisplayComponent,
            UploadComponent, TaFilesBasicModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesExtendedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        TaContainerModule,
                        TaDirectivePipeModule,
                        TaFormModule,
                        TaUiModule,
                        TaCardModule,
                        CommonModule,
                        TaFormInputsModule,
                        TaFilesBasicModule,
                        TaIconsModule,
                        TaMenuModule,
                        FilesDisplayComponent,
                        UploadComponent,
                    ],
                    exports: [FilesDisplayComponent, UploadComponent, TaFilesBasicModule],
                    providers: [TaEnumerationService, UploadDocumentFormService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZXh0ZW5kZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9maWxlcy1leHRlbmRlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUFFN0Y7Ozs7Ozs7Ozs7R0FVRztBQW9CSCxNQUFNLE9BQU8scUJBQXFCOytHQUFyQixxQkFBcUI7Z0hBQXJCLHFCQUFxQixZQWhCOUIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixlQUFlLGFBRVAscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQjtnSEFHekQscUJBQXFCLGFBRnJCLENBQUMsb0JBQW9CLEVBQUUseUJBQXlCLENBQUMsWUFkMUQsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixlQUFlLEVBRWlDLGtCQUFrQjs7NEZBR3pELHFCQUFxQjtrQkFuQmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDO29CQUNyRSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx5QkFBeUIsQ0FBQztpQkFDN0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFGaWxlc0Jhc2ljTW9kdWxlIH0gZnJvbSAnQHRhL2ZpbGVzLWJhc2ljJztcbmltcG9ydCB7IFRhRm9ybU1vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWJhc2ljJztcbmltcG9ydCB7IFRhRm9ybUlucHV0c01vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVGFNZW51TW9kdWxlIH0gZnJvbSAnQHRhL21lbnUnO1xuaW1wb3J0IHsgVGFFbnVtZXJhdGlvblNlcnZpY2UgfSBmcm9tICdAdGEvc2VydmljZXMnO1xuaW1wb3J0IHsgVGFDYXJkTW9kdWxlLCBUYUNvbnRhaW5lck1vZHVsZSwgVGFVaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBGaWxlc0Rpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlzcGxheS9maWxlcy1kaXNwbGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXBsb2FkL2ZpbGVzLXVwbG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZG9jdW1lbnQvdXBsb2FkLWRvY3VtZW50LWZvcm0uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUZpbGVzRXh0ZW5kZWRNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZpbGVzRGlzcGxheUNvbXBvbmVudCwgVXBsb2FkQ29tcG9uZW50LCBUYUZpbGVzQmFzaWNNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBUYUZvcm1Nb2R1bGUsXG4gICAgVGFVaU1vZHVsZSxcbiAgICBUYUNhcmRNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRhRm9ybUlucHV0c01vZHVsZSxcbiAgICBUYUZpbGVzQmFzaWNNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBUYU1lbnVNb2R1bGUsXG4gICAgRmlsZXNEaXNwbGF5Q29tcG9uZW50LFxuICAgIFVwbG9hZENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0ZpbGVzRGlzcGxheUNvbXBvbmVudCwgVXBsb2FkQ29tcG9uZW50LCBUYUZpbGVzQmFzaWNNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtUYUVudW1lcmF0aW9uU2VydmljZSwgVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhRmlsZXNFeHRlbmRlZE1vZHVsZSB7fVxuIl19