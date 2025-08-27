import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamFilesBasicModule } from '@ta/files-basic';
import { CamFormModule } from '@ta/form-basic';
import { CamFormInputsModule } from '@ta/form-input';
import { CamIconsModule } from '@ta/icons';
import { CamMenuModule } from '@ta/menu';
import { CamEnumerationService } from '@ta/services';
import { CamCardModule, CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';
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
 * // import { CamFilesExtendedModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FilesDisplayComponent, UploadComponent, CamFilesBasicModule } from '@ta/library-name';
 */
export class CamFilesExtendedModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFilesExtendedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamFilesExtendedModule, imports: [CamContainerModule, CamDirectivePipeModule, CamFormModule, CamUiModule, CamCardModule, CommonModule, CamFormInputsModule, CamFilesBasicModule, CamIconsModule, CamMenuModule, FilesDisplayComponent, UploadComponent], exports: [FilesDisplayComponent, UploadComponent, CamFilesBasicModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFilesExtendedModule, providers: [CamEnumerationService, UploadDocumentFormService], imports: [CamContainerModule, CamDirectivePipeModule, CamFormModule, CamUiModule, CamCardModule, CommonModule, CamFormInputsModule, CamFilesBasicModule, CamIconsModule, CamMenuModule, FilesDisplayComponent, UploadComponent, CamFilesBasicModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFilesExtendedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CamContainerModule, CamDirectivePipeModule, CamFormModule, CamUiModule, CamCardModule, CommonModule, CamFormInputsModule, CamFilesBasicModule, CamIconsModule, CamMenuModule, FilesDisplayComponent, UploadComponent],
                    exports: [FilesDisplayComponent, UploadComponent, CamFilesBasicModule],
                    providers: [CamEnumerationService, UploadDocumentFormService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZXh0ZW5kZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9maWxlcy1leHRlbmRlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUFFN0Y7Ozs7Ozs7Ozs7R0FVRztBQVNILE1BQU0sT0FBTyxzQkFBc0I7K0dBQXRCLHNCQUFzQjtnSEFBdEIsc0JBQXNCLFlBTHZCLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixFQUFFLGVBQWUsYUFDcE4scUJBQXFCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQjtnSEFJMUQsc0JBQXNCLGFBSHRCLENBQUMscUJBQXFCLEVBQUUseUJBQXlCLENBQUMsWUFGbkQsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUM1SyxtQkFBbUI7OzRGQUkxRCxzQkFBc0I7a0JBUmxDLFFBQVE7bUJBQUM7b0JBRVIsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixFQUFFLGVBQWUsQ0FBQztvQkFDL04sT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO29CQUN0RSxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSx5QkFBeUIsQ0FBQztpQkFFOUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FtRmlsZXNCYXNpY01vZHVsZSB9IGZyb20gJ0B0YS9maWxlcy1iYXNpYyc7XG5pbXBvcnQgeyBDYW1Gb3JtTW9kdWxlIH0gZnJvbSAnQHRhL2Zvcm0tYmFzaWMnO1xuaW1wb3J0IHsgQ2FtRm9ybUlucHV0c01vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IENhbUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IENhbU1lbnVNb2R1bGUgfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBDYW1FbnVtZXJhdGlvblNlcnZpY2UgfSBmcm9tICdAdGEvc2VydmljZXMnO1xuaW1wb3J0IHsgQ2FtQ2FyZE1vZHVsZSwgQ2FtQ29udGFpbmVyTW9kdWxlLCBDYW1VaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBDYW1EaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgRmlsZXNEaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rpc3BsYXkvZmlsZXMtZGlzcGxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VwbG9hZC9maWxlcy11cGxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFVwbG9hZERvY3VtZW50Rm9ybVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RvY3VtZW50L3VwbG9hZC1kb2N1bWVudC1mb3JtLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IENhbUZpbGVzRXh0ZW5kZWRNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqIFxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBGaWxlc0Rpc3BsYXlDb21wb25lbnQsIFVwbG9hZENvbXBvbmVudCwgQ2FtRmlsZXNCYXNpY01vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtDYW1Db250YWluZXJNb2R1bGUsIENhbURpcmVjdGl2ZVBpcGVNb2R1bGUsIENhbUZvcm1Nb2R1bGUsIENhbVVpTW9kdWxlLCBDYW1DYXJkTW9kdWxlLCBDb21tb25Nb2R1bGUsIENhbUZvcm1JbnB1dHNNb2R1bGUsIENhbUZpbGVzQmFzaWNNb2R1bGUsIENhbUljb25zTW9kdWxlLCBDYW1NZW51TW9kdWxlLCBGaWxlc0Rpc3BsYXlDb21wb25lbnQsIFVwbG9hZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtGaWxlc0Rpc3BsYXlDb21wb25lbnQsIFVwbG9hZENvbXBvbmVudCwgQ2FtRmlsZXNCYXNpY01vZHVsZV0sXG4gIHByb3ZpZGVyczogW0NhbUVudW1lcmF0aW9uU2VydmljZSwgVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZV0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2FtRmlsZXNFeHRlbmRlZE1vZHVsZSB7fVxuIl19