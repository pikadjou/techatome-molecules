import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaFilesBasicModule } from "@ta/files-basic";
import { TaFormModule } from "@ta/form-basic";
import { TaFormInputsModule } from "@ta/form-input";
import { TaIconsModule } from "@ta/icons";
import { TaMenuModule } from "@ta/menu";
import { TaEnumerationService } from "@ta/services";
import { TaCardModule, TaContainerModule, TaUiModule } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";
import { FilesDisplayComponent } from "./components/display/files-display.component";
import { UploadComponent } from "./components/upload/files-upload.component";
import { UploadDocumentFormService } from "./services/document/upload-document-form.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZXh0ZW5kZWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9maWxlcy1leHRlbmRlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQzs7QUFFN0Y7Ozs7Ozs7Ozs7R0FVRztBQW9CSCxNQUFNLE9BQU8scUJBQXFCOytHQUFyQixxQkFBcUI7Z0hBQXJCLHFCQUFxQixZQWhCOUIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixlQUFlLGFBRVAscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQjtnSEFHekQscUJBQXFCLGFBRnJCLENBQUMsb0JBQW9CLEVBQUUseUJBQXlCLENBQUMsWUFkMUQsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixZQUFZO1lBQ1osVUFBVTtZQUNWLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixlQUFlLEVBRWlDLGtCQUFrQjs7NEZBR3pELHFCQUFxQjtrQkFuQmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsWUFBWTt3QkFDWixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFDO29CQUNyRSxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx5QkFBeUIsQ0FBQztpQkFDN0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFRhRmlsZXNCYXNpY01vZHVsZSB9IGZyb20gXCJAdGEvZmlsZXMtYmFzaWNcIjtcbmltcG9ydCB7IFRhRm9ybU1vZHVsZSB9IGZyb20gXCJAdGEvZm9ybS1iYXNpY1wiO1xuaW1wb3J0IHsgVGFGb3JtSW5wdXRzTW9kdWxlIH0gZnJvbSBcIkB0YS9mb3JtLWlucHV0XCI7XG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVGFNZW51TW9kdWxlIH0gZnJvbSBcIkB0YS9tZW51XCI7XG5pbXBvcnQgeyBUYUVudW1lcmF0aW9uU2VydmljZSB9IGZyb20gXCJAdGEvc2VydmljZXNcIjtcbmltcG9ydCB7IFRhQ2FyZE1vZHVsZSwgVGFDb250YWluZXJNb2R1bGUsIFRhVWlNb2R1bGUgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQgeyBUYURpcmVjdGl2ZVBpcGVNb2R1bGUgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IEZpbGVzRGlzcGxheUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGlzcGxheS9maWxlcy1kaXNwbGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXBsb2FkQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy91cGxvYWQvZmlsZXMtdXBsb2FkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXBsb2FkRG9jdW1lbnRGb3JtU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2RvY3VtZW50L3VwbG9hZC1kb2N1bWVudC1mb3JtLnNlcnZpY2VcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhRmlsZXNFeHRlbmRlZE1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgRmlsZXNEaXNwbGF5Q29tcG9uZW50LCBVcGxvYWRDb21wb25lbnQsIFRhRmlsZXNCYXNpY01vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgVGFDb250YWluZXJNb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhRm9ybU1vZHVsZSxcbiAgICBUYVVpTW9kdWxlLFxuICAgIFRhQ2FyZE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVGFGb3JtSW5wdXRzTW9kdWxlLFxuICAgIFRhRmlsZXNCYXNpY01vZHVsZSxcbiAgICBUYUljb25zTW9kdWxlLFxuICAgIFRhTWVudU1vZHVsZSxcbiAgICBGaWxlc0Rpc3BsYXlDb21wb25lbnQsXG4gICAgVXBsb2FkQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbRmlsZXNEaXNwbGF5Q29tcG9uZW50LCBVcGxvYWRDb21wb25lbnQsIFRhRmlsZXNCYXNpY01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1RhRW51bWVyYXRpb25TZXJ2aWNlLCBVcGxvYWREb2N1bWVudEZvcm1TZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFGaWxlc0V4dGVuZGVkTW9kdWxlIHt9XG4iXX0=