import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { TaFilesExtendedModule } from '@ta/files-extended';
import { TaFormModule } from '@ta/form-basic';
import { TaFormInputsModule } from '@ta/form-input';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaCardModule, TaContainerModule, TaLayoutModule, TaListModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
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
import { TaTranslationCore } from './translation.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaCoreModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FiltersContainerComponent, DocumentsComponent, CallTemplateComponent } from '@ta/library-name';
 */
export class TaCoreModule {
    constructor() {
        TaTranslationCore.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaCoreModule, imports: [CommonModule,
            TaLayoutModule,
            TaUiModule,
            TaFormModule,
            TaIconsModule,
            TaDirectivePipeModule,
            TaCardModule,
            TaFilesExtendedModule,
            TaFormInputsModule,
            TaContainerModule,
            TaListModule,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCoreModule, imports: [CommonModule,
            TaLayoutModule,
            TaUiModule,
            TaFormModule,
            TaIconsModule,
            TaDirectivePipeModule,
            TaCardModule,
            TaFilesExtendedModule,
            TaFormInputsModule,
            TaContainerModule,
            TaListModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCoreModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaLayoutModule,
                        TaUiModule,
                        TaFormModule,
                        TaIconsModule,
                        TaDirectivePipeModule,
                        TaCardModule,
                        TaFilesExtendedModule,
                        TaFormInputsModule,
                        TaContainerModule,
                        TaListModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtFQUErRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDhGQUE4RixDQUFDO0FBQy9JLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUUxRDs7Ozs7Ozs7OztHQVVHO0FBeUNILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCO1FBQ0UsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzsrR0FIVSxZQUFZO2dIQUFaLFlBQVksWUFyQ3JCLFlBQVk7WUFDWixjQUFjO1lBQ2QsVUFBVTtZQUNWLFlBQVk7WUFDWixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFDZixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QixhQUd4Qix5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsK0JBQStCO1lBQy9CLHdCQUF3QjtZQUN4QixtQkFBbUI7WUFDbkIsd0JBQXdCO2dIQUdmLFlBQVksWUFyQ3JCLFlBQVk7WUFDWixjQUFjO1lBQ2QsVUFBVTtZQUNWLFlBQVk7WUFDWixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFFZixnQkFBZ0I7WUFDaEIseUJBQXlCO1lBQ3pCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQix3QkFBd0I7WUFDeEIsK0JBQStCO1lBQy9CLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCOzs0RkFhZixZQUFZO2tCQXhDeEIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxVQUFVO3dCQUNWLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQix3QkFBd0I7d0JBQ3hCLHdCQUF3Qjt3QkFDeEIsK0JBQStCO3dCQUMvQix3QkFBd0I7d0JBQ3hCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcblxuaW1wb3J0IHsgVGFGaWxlc0V4dGVuZGVkTW9kdWxlIH0gZnJvbSAnQHRhL2ZpbGVzLWV4dGVuZGVkJztcbmltcG9ydCB7IFRhRm9ybU1vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWJhc2ljJztcbmltcG9ydCB7IFRhRm9ybUlucHV0c01vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUYUNhcmRNb2R1bGUsIFRhQ29udGFpbmVyTW9kdWxlLCBUYUxheW91dE1vZHVsZSwgVGFMaXN0TW9kdWxlLCBUYVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IERvY3VtZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGxvYWREb2N1bWVudE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL2RvY3VtZW50cy91cGxvYWQvdXBsb2FkLXZpc2l0LWRvY3VtZW50L3VwbG9hZC1kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyc0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXJzL2NvbnRhaW5lci9maWx0ZXJzLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWNvbnRhaW5lci9maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJEaXNwbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItZGlzcGxheWVyL2ZpbHRlci1kaXNwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJzRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9maWx0ZXJzL2Zvcm0vZmlsdGVycy1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJzVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcnMvdGFnL2ZpbHRlcnMtdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hEaXNwbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGlzdG9yaWNhbC1yZXNlYXJjaC9zZWFyY2gtZGlzcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hIaXN0b3J5RGlzcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hpc3RvcmljYWwtcmVzZWFyY2gvc2VhcmNoLWhpc3RvcnktZGlzcGxheWVyL3NlYXJjaC1oaXN0b3J5LWRpc3BsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFRvQ2xpcGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQtdG8tY2xpcGJvYXJkL3RleHQtdG8tY2xpcGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uQ29yZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUNvcmVNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZpbHRlcnNDb250YWluZXJDb21wb25lbnQsIERvY3VtZW50c0NvbXBvbmVudCwgQ2FsbFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVGFMYXlvdXRNb2R1bGUsXG4gICAgVGFVaU1vZHVsZSxcbiAgICBUYUZvcm1Nb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgVGFDYXJkTW9kdWxlLFxuICAgIFRhRmlsZXNFeHRlbmRlZE1vZHVsZSxcbiAgICBUYUZvcm1JbnB1dHNNb2R1bGUsXG4gICAgVGFDb250YWluZXJNb2R1bGUsXG4gICAgVGFMaXN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgRmlsdGVyc0NvbXBvbmVudCxcbiAgICBGaWx0ZXJzQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIEZpbHRlcnNGb3JtQ29tcG9uZW50LFxuICAgIEZpbHRlcnNUYWdDb21wb25lbnQsXG4gICAgRG9jdW1lbnRzQ29tcG9uZW50LFxuICAgIFVwbG9hZERvY3VtZW50TW9kYWwsXG4gICAgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFNlYXJjaEhpc3RvcnlEaXNwbGF5ZXJDb21wb25lbnQsXG4gICAgU2VhcmNoRGlzcGxheWVyQ29tcG9uZW50LFxuICAgIEZpbHRlckRpc3BsYXllckNvbXBvbmVudCxcbiAgICBUZXh0VG9DbGlwYm9hcmRDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGaWx0ZXJzQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIERvY3VtZW50c0NvbXBvbmVudCxcbiAgICBGaWx0ZXJDb250YWluZXJDb21wb25lbnQsXG4gICAgU2VhcmNoRGlzcGxheWVyQ29tcG9uZW50LFxuICAgIFNlYXJjaEhpc3RvcnlEaXNwbGF5ZXJDb21wb25lbnQsXG4gICAgRmlsdGVyRGlzcGxheWVyQ29tcG9uZW50LFxuICAgIEZpbHRlcnNUYWdDb21wb25lbnQsXG4gICAgVGV4dFRvQ2xpcGJvYXJkQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUNvcmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBUYVRyYW5zbGF0aW9uQ29yZS5nZXRJbnN0YW5jZSgpO1xuICB9XG59XG4iXX0=