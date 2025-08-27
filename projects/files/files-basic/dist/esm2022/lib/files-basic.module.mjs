import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamCardModule, CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule, SafePipe } from '@ta/utils';
import { DocumentsListComponent } from './components/documents/list/list.component';
import { FileEditComponent } from './components/edit/files-edit.component';
import { FileCardComponent } from './components/list/card/file/file-card.component';
import { FileListComponent } from './components/list/files-list.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamFilesBasicModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FileListComponent, FileEditComponent, DocumentsListComponent } from '@ta/library-name';
 */
export class CamFilesBasicModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFilesBasicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamFilesBasicModule, imports: [CommonModule, CamDirectivePipeModule, CamUiModule, CamCardModule, CamContainerModule, CamIconsModule, TranslatePipe, SafePipe, FileListComponent, FileCardComponent, FileEditComponent, DocumentsListComponent], exports: [FileListComponent, FileEditComponent, DocumentsListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFilesBasicModule, imports: [CommonModule, CamDirectivePipeModule, CamUiModule, CamCardModule, CamContainerModule, CamIconsModule, FileListComponent, FileCardComponent, FileEditComponent, DocumentsListComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamFilesBasicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, CamDirectivePipeModule, CamUiModule, CamCardModule, CamContainerModule, CamIconsModule, TranslatePipe, SafePipe, FileListComponent, FileCardComponent, FileEditComponent, DocumentsListComponent],
                    exports: [FileListComponent, FileEditComponent, DocumentsListComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9maWxlcy1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFM0U7Ozs7Ozs7Ozs7R0FVRztBQVFILE1BQU0sT0FBTyxtQkFBbUI7K0dBQW5CLG1CQUFtQjtnSEFBbkIsbUJBQW1CLFlBSnBCLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixhQUM5TSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0I7Z0hBRzNELG1CQUFtQixZQUpwQixZQUFZLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQTJCLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQjs7NEZBSTdNLG1CQUFtQjtrQkFQL0IsUUFBUTttQkFBQztvQkFFUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3pOLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDO2lCQUV4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYW1JY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IENhbUNhcmRNb2R1bGUsIENhbUNvbnRhaW5lck1vZHVsZSwgQ2FtVWlNb2R1bGUgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSwgU2FmZVBpcGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBEb2N1bWVudHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RvY3VtZW50cy9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbGVFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2VkaXQvZmlsZXMtZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZUNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9jYXJkL2ZpbGUvZmlsZS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0L2ZpbGVzLWxpc3QuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBDYW1GaWxlc0Jhc2ljTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKiBcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQsIEZpbGVFZGl0Q29tcG9uZW50LCBEb2N1bWVudHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSwgQ2FtVWlNb2R1bGUsIENhbUNhcmRNb2R1bGUsIENhbUNvbnRhaW5lck1vZHVsZSwgQ2FtSWNvbnNNb2R1bGUsIFRyYW5zbGF0ZVBpcGUsIFNhZmVQaXBlLCBGaWxlTGlzdENvbXBvbmVudCwgRmlsZUNhcmRDb21wb25lbnQsIEZpbGVFZGl0Q29tcG9uZW50LCBEb2N1bWVudHNMaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0ZpbGVMaXN0Q29tcG9uZW50LCBGaWxlRWRpdENvbXBvbmVudCwgRG9jdW1lbnRzTGlzdENvbXBvbmVudF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ2FtRmlsZXNCYXNpY01vZHVsZSB7fVxuIl19