import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { TaFilesExtendedModule } from "@ta/files-extended";
import { TaFormModule } from "@ta/form-basic";
import { TaFormInputsModule } from "@ta/form-input";
import { TaIconsModule } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaCardModule, TaContainerModule, TaLayoutModule, TaListModule, TaUiModule, } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";
import { DocumentsComponent } from "./components/documents/documents.component";
import { UploadDocumentModal } from "./components/documents/upload/upload-visit-document/upload-document.component";
import { FiltersContainerComponent } from "./components/filters/container/filters-container.component";
import { FilterContainerComponent } from "./components/filters/filter-container/filter-container.component";
import { FilterDisplayerComponent } from "./components/filters/filter-displayer/filter-displayer.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { FiltersFormComponent } from "./components/filters/form/filters-form.component";
import { FiltersTagComponent } from "./components/filters/tag/filters-tag.component";
import { SearchDisplayerComponent } from "./components/historical-research/search-displayer.component";
import { SearchHistoryDisplayerComponent } from "./components/historical-research/search-history-displayer/search-history-displayer.component";
import { TextToClipboardComponent } from "./components/text-to-clipboard/text-to-clipboard.component";
import { TaTranslationCore } from "./translation.service";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, imports: [CommonModule,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, imports: [CommonModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaCoreModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGNBQWMsRUFDZCxZQUFZLEVBQ1osVUFBVSxHQUNYLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUNwSCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw4RkFBOEYsQ0FBQztBQUMvSSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQ7Ozs7Ozs7Ozs7R0FVRztBQXlDSCxNQUFNLE9BQU8sWUFBWTtJQUN2QjtRQUNFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7K0dBSFUsWUFBWTtnSEFBWixZQUFZLFlBckNyQixZQUFZO1lBQ1osY0FBYztZQUNkLFVBQVU7WUFDVixZQUFZO1lBQ1osYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBQ2YsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQix5QkFBeUI7WUFDekIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLHdCQUF3QjtZQUN4QiwrQkFBK0I7WUFDL0Isd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0IsYUFHeEIseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIsbUJBQW1CO1lBQ25CLHdCQUF3QjtnSEFHZixZQUFZLFlBckNyQixZQUFZO1lBQ1osY0FBYztZQUNkLFVBQVU7WUFDVixZQUFZO1lBQ1osYUFBYTtZQUNiLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlO1lBRWYsZ0JBQWdCO1lBQ2hCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsd0JBQXdCO1lBQ3hCLCtCQUErQjtZQUMvQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3Qjs7NEZBYWYsWUFBWTtrQkF4Q3hCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QiwrQkFBK0I7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7cUJBQ3pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIsd0JBQXdCO3dCQUN4Qix3QkFBd0I7d0JBQ3hCLCtCQUErQjt3QkFDL0Isd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLHdCQUF3QjtxQkFDekI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL21lbnVcIjtcblxuaW1wb3J0IHsgVGFGaWxlc0V4dGVuZGVkTW9kdWxlIH0gZnJvbSBcIkB0YS9maWxlcy1leHRlbmRlZFwiO1xuaW1wb3J0IHsgVGFGb3JtTW9kdWxlIH0gZnJvbSBcIkB0YS9mb3JtLWJhc2ljXCI7XG5pbXBvcnQgeyBUYUZvcm1JbnB1dHNNb2R1bGUgfSBmcm9tIFwiQHRhL2Zvcm0taW5wdXRcIjtcbmltcG9ydCB7IFRhSWNvbnNNb2R1bGUgfSBmcm9tIFwiQHRhL2ljb25zXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSBcIkB0YS90cmFuc2xhdGlvblwiO1xuaW1wb3J0IHtcbiAgVGFDYXJkTW9kdWxlLFxuICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgVGFMYXlvdXRNb2R1bGUsXG4gIFRhTGlzdE1vZHVsZSxcbiAgVGFVaU1vZHVsZSxcbn0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBEb2N1bWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RvY3VtZW50cy9kb2N1bWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVcGxvYWREb2N1bWVudE1vZGFsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9kb2N1bWVudHMvdXBsb2FkL3VwbG9hZC12aXNpdC1kb2N1bWVudC91cGxvYWQtZG9jdW1lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWx0ZXJzQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWx0ZXJzL2NvbnRhaW5lci9maWx0ZXJzLWNvbnRhaW5lci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItY29udGFpbmVyL2ZpbHRlci1jb250YWluZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWx0ZXJEaXNwbGF5ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWRpc3BsYXllci9maWx0ZXItZGlzcGxheWVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmlsdGVyc0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmlsdGVyc0Zvcm1Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbHRlcnMvZm9ybS9maWx0ZXJzLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWx0ZXJzVGFnQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWx0ZXJzL3RhZy9maWx0ZXJzLXRhZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNlYXJjaERpc3BsYXllckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGlzdG9yaWNhbC1yZXNlYXJjaC9zZWFyY2gtZGlzcGxheWVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VhcmNoSGlzdG9yeURpc3BsYXllckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaGlzdG9yaWNhbC1yZXNlYXJjaC9zZWFyY2gtaGlzdG9yeS1kaXNwbGF5ZXIvc2VhcmNoLWhpc3RvcnktZGlzcGxheWVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGV4dFRvQ2xpcGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0LXRvLWNsaXBib2FyZC90ZXh0LXRvLWNsaXBib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25Db3JlIH0gZnJvbSBcIi4vdHJhbnNsYXRpb24uc2VydmljZVwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFDb3JlTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBGaWx0ZXJzQ29udGFpbmVyQ29tcG9uZW50LCBEb2N1bWVudHNDb21wb25lbnQsIENhbGxUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRhTGF5b3V0TW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFGb3JtTW9kdWxlLFxuICAgIFRhSWNvbnNNb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhQ2FyZE1vZHVsZSxcbiAgICBUYUZpbGVzRXh0ZW5kZWRNb2R1bGUsXG4gICAgVGFGb3JtSW5wdXRzTW9kdWxlLFxuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRhTGlzdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIEZpbHRlcnNDb21wb25lbnQsXG4gICAgRmlsdGVyc0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBGaWx0ZXJzRm9ybUNvbXBvbmVudCxcbiAgICBGaWx0ZXJzVGFnQ29tcG9uZW50LFxuICAgIERvY3VtZW50c0NvbXBvbmVudCxcbiAgICBVcGxvYWREb2N1bWVudE1vZGFsLFxuICAgIEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBTZWFyY2hIaXN0b3J5RGlzcGxheWVyQ29tcG9uZW50LFxuICAgIFNlYXJjaERpc3BsYXllckNvbXBvbmVudCxcbiAgICBGaWx0ZXJEaXNwbGF5ZXJDb21wb25lbnQsXG4gICAgVGV4dFRvQ2xpcGJvYXJkQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRmlsdGVyc0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBEb2N1bWVudHNDb21wb25lbnQsXG4gICAgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFNlYXJjaERpc3BsYXllckNvbXBvbmVudCxcbiAgICBTZWFyY2hIaXN0b3J5RGlzcGxheWVyQ29tcG9uZW50LFxuICAgIEZpbHRlckRpc3BsYXllckNvbXBvbmVudCxcbiAgICBGaWx0ZXJzVGFnQ29tcG9uZW50LFxuICAgIFRleHRUb0NsaXBib2FyZENvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFDb3JlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGFUcmFuc2xhdGlvbkNvcmUuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIl19