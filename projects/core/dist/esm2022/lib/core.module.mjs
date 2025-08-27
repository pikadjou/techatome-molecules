import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { CamFilesExtendedModule } from '@ta/files-extended';
import { CamFormModule } from '@ta/form-basic';
import { CamFormInputsModule } from '@ta/form-input';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamCardModule, CamContainerModule, CamLayoutModule, CamListModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';
import { DocumentsComponent } from './components/documents/documents.component';
import { UploadDocumentModal } from './components/documents/upload/upload-visit-document/upload-document.component';
import { FiltersContainerComponent } from './components/filters/container/filters-container.component';
import { FilterContainerComponent } from './components/filters/filter-container/filter-container.component';
import { FilterDisplayerComponent } from './components/filters/filter-displayer/filter-displayer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FiltersFormComponent } from './components/filters/form/filters-form.component';
import { FiltersTagComponent } from './components/filters/tag/filters-tag.component';
import { SearchDisplayerComponent } from './components/historical-research/search-displayer.component';
import { SearchHistoryDisplayerComponent } from './components/historical-research/search-history-displayer/search-history-displayer.component';
import { TextToClipboardComponent } from './components/text-to-clipboard/text-to-clipboard.component';
import { CamTranslationCore } from './translation.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamCoreModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FiltersContainerComponent, DocumentsComponent, CallTemplateComponent } from '@ta/library-name';
 */
export class CamCoreModule {
    constructor() {
        CamTranslationCore.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamCoreModule, imports: [CommonModule,
            CamLayoutModule,
            CamUiModule,
            CamFormModule,
            CamIconsModule,
            CamDirectivePipeModule,
            CamCardModule,
            CamFilesExtendedModule,
            CamFormInputsModule,
            CamContainerModule,
            CamListModule,
            MatMenuModule,
            MatDialogModule,
            TranslatePipe,
            FiltersComponent,
            FiltersContainerComponent,
            FiltersFormComponent,
            FiltersTagComponent,
            DocumentsComponent,
            UploadDocumentModal,
            FilterContainerComponent,
            SearchHistoryDisplayerComponent,
            SearchDisplayerComponent,
            FilterDisplayerComponent,
            TextToClipboardComponent], exports: [FiltersContainerComponent,
            DocumentsComponent,
            FilterContainerComponent,
            SearchDisplayerComponent,
            SearchHistoryDisplayerComponent,
            FilterDisplayerComponent,
            FiltersTagComponent,
            TextToClipboardComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCoreModule, imports: [CommonModule,
            CamLayoutModule,
            CamUiModule,
            CamFormModule,
            CamIconsModule,
            CamDirectivePipeModule,
            CamCardModule,
            CamFilesExtendedModule,
            CamFormInputsModule,
            CamContainerModule,
            CamListModule,
            MatMenuModule,
            MatDialogModule,
            FiltersComponent,
            FiltersContainerComponent,
            FiltersFormComponent,
            FiltersTagComponent,
            DocumentsComponent,
            UploadDocumentModal,
            FilterContainerComponent,
            SearchHistoryDisplayerComponent,
            SearchDisplayerComponent,
            FilterDisplayerComponent,
            TextToClipboardComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        CamLayoutModule,
                        CamUiModule,
                        CamFormModule,
                        CamIconsModule,
                        CamDirectivePipeModule,
                        CamCardModule,
                        CamFilesExtendedModule,
                        CamFormInputsModule,
                        CamContainerModule,
                        CamListModule,
                        MatMenuModule,
                        MatDialogModule,
                        TranslatePipe,
                        FiltersComponent,
                        FiltersContainerComponent,
                        FiltersFormComponent,
                        FiltersTagComponent,
                        DocumentsComponent,
                        UploadDocumentModal,
                        FilterContainerComponent,
                        SearchHistoryDisplayerComponent,
                        SearchDisplayerComponent,
                        FilterDisplayerComponent,
                        TextToClipboardComponent,
                    ],
                    exports: [
                        FiltersContainerComponent,
                        DocumentsComponent,
                        FilterContainerComponent,
                        SearchDisplayerComponent,
                        SearchHistoryDisplayerComponent,
                        FilterDisplayerComponent,
                        FiltersTagComponent,
                        TextToClipboardComponent,
                    ],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDeEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhGQUE4RixDQUFDO0FBQy9JLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUzRDs7Ozs7Ozs7OztHQVVHO0FBeUNILE1BQU0sT0FBTyxhQUFhO0lBQ3hCO1FBQ0Usa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQzsrR0FIVSxhQUFhO2dIQUFiLGFBQWEsWUFyQ3RCLFlBQVk7WUFDWixlQUFlO1lBQ2YsV0FBVztZQUNYLGFBQWE7WUFDYixjQUFjO1lBQ2Qsc0JBQXNCO1lBQ3RCLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QixhQUd4Qix5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsK0JBQStCO1lBQy9CLHdCQUF3QjtZQUN4QixtQkFBbUI7WUFDbkIsd0JBQXdCO2dIQUdmLGFBQWEsWUFyQ3RCLFlBQVk7WUFDWixlQUFlO1lBQ2YsV0FBVztZQUNYLGFBQWE7WUFDYixjQUFjO1lBQ2Qsc0JBQXNCO1lBQ3RCLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGVBQWU7WUFFZixnQkFBZ0I7WUFDaEIseUJBQXlCO1lBQ3pCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsK0JBQStCO1lBQy9CLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCOzs0RkFhZixhQUFhO2tCQXhDekIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxzQkFBc0I7d0JBQ3RCLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsK0JBQStCO3dCQUMvQix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcblxuaW1wb3J0IHsgQ2FtRmlsZXNFeHRlbmRlZE1vZHVsZSB9IGZyb20gJ0B0YS9maWxlcy1leHRlbmRlZCc7XG5pbXBvcnQgeyBDYW1Gb3JtTW9kdWxlIH0gZnJvbSAnQHRhL2Zvcm0tYmFzaWMnO1xuaW1wb3J0IHsgQ2FtRm9ybUlucHV0c01vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IENhbUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgQ2FtQ2FyZE1vZHVsZSwgQ2FtQ29udGFpbmVyTW9kdWxlLCBDYW1MYXlvdXRNb2R1bGUsIENhbUxpc3RNb2R1bGUsIENhbVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IENhbURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBEb2N1bWVudHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZG9jdW1lbnRzL2RvY3VtZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBsb2FkRG9jdW1lbnRNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9kb2N1bWVudHMvdXBsb2FkL3VwbG9hZC12aXNpdC1kb2N1bWVudC91cGxvYWQtZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlcnNDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVycy9jb250YWluZXIvZmlsdGVycy1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlci1jb250YWluZXIvZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyRGlzcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWRpc3BsYXllci9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyc0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVycy9mb3JtL2ZpbHRlcnMtZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyc1RhZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXJzL3RhZy9maWx0ZXJzLXRhZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoRGlzcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hpc3RvcmljYWwtcmVzZWFyY2gvc2VhcmNoLWRpc3BsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoSGlzdG9yeURpc3BsYXllckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oaXN0b3JpY2FsLXJlc2VhcmNoL3NlYXJjaC1oaXN0b3J5LWRpc3BsYXllci9zZWFyY2gtaGlzdG9yeS1kaXNwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRUb0NsaXBib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LXRvLWNsaXBib2FyZC90ZXh0LXRvLWNsaXBib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FtVHJhbnNsYXRpb25Db3JlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IENhbUNvcmVNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZpbHRlcnNDb250YWluZXJDb21wb25lbnQsIERvY3VtZW50c0NvbXBvbmVudCwgQ2FsbFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FtTGF5b3V0TW9kdWxlLFxuICAgIENhbVVpTW9kdWxlLFxuICAgIENhbUZvcm1Nb2R1bGUsXG4gICAgQ2FtSWNvbnNNb2R1bGUsXG4gICAgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBDYW1DYXJkTW9kdWxlLFxuICAgIENhbUZpbGVzRXh0ZW5kZWRNb2R1bGUsXG4gICAgQ2FtRm9ybUlucHV0c01vZHVsZSxcbiAgICBDYW1Db250YWluZXJNb2R1bGUsXG4gICAgQ2FtTGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIEZpbHRlcnNDb21wb25lbnQsXG4gICAgRmlsdGVyc0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBGaWx0ZXJzRm9ybUNvbXBvbmVudCxcbiAgICBGaWx0ZXJzVGFnQ29tcG9uZW50LFxuICAgIERvY3VtZW50c0NvbXBvbmVudCxcbiAgICBVcGxvYWREb2N1bWVudE1vZGFsLFxuICAgIEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBTZWFyY2hIaXN0b3J5RGlzcGxheWVyQ29tcG9uZW50LFxuICAgIFNlYXJjaERpc3BsYXllckNvbXBvbmVudCxcbiAgICBGaWx0ZXJEaXNwbGF5ZXJDb21wb25lbnQsXG4gICAgVGV4dFRvQ2xpcGJvYXJkQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmlsdGVyc0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBEb2N1bWVudHNDb21wb25lbnQsXG4gICAgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFNlYXJjaERpc3BsYXllckNvbXBvbmVudCxcbiAgICBTZWFyY2hIaXN0b3J5RGlzcGxheWVyQ29tcG9uZW50LFxuICAgIEZpbHRlckRpc3BsYXllckNvbXBvbmVudCxcbiAgICBGaWx0ZXJzVGFnQ29tcG9uZW50LFxuICAgIFRleHRUb0NsaXBib2FyZENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FtQ29yZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uQ29yZS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=