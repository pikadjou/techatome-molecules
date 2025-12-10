import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaIconsModule } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaCardModule, TaContainerModule, TaUiModule } from "@ta/ui";
import { SafePipe, TaDirectivePipeModule } from "@ta/utils";
import { DocumentsListComponent } from "./components/documents/list/list.component";
import { FileEditComponent } from "./components/edit/files-edit.component";
import { FileCardComponent } from "./components/list/card/file/file-card.component";
import { FileListComponent } from "./components/list/files-list.component";
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFilesBasicModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FileListComponent, FileEditComponent, DocumentsListComponent } from '@ta/library-name';
 */
export class TaFilesBasicModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, imports: [CommonModule,
            TaDirectivePipeModule,
            TaUiModule,
            TaCardModule,
            TaContainerModule,
            TaIconsModule,
            TranslatePipe,
            SafePipe,
            FileListComponent,
            FileCardComponent,
            FileEditComponent,
            DocumentsListComponent], exports: [FileListComponent, FileEditComponent, DocumentsListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, imports: [CommonModule,
            TaDirectivePipeModule,
            TaUiModule,
            TaCardModule,
            TaContainerModule,
            TaIconsModule,
            FileListComponent,
            FileCardComponent,
            FileEditComponent,
            DocumentsListComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaDirectivePipeModule,
                        TaUiModule,
                        TaCardModule,
                        TaContainerModule,
                        TaIconsModule,
                        TranslatePipe,
                        SafePipe,
                        FileListComponent,
                        FileCardComponent,
                        FileEditComponent,
                        DocumentsListComponent,
                    ],
                    exports: [FileListComponent, FileEditComponent, DocumentsListComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9maWxlcy1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFM0U7Ozs7Ozs7Ozs7R0FVRztBQW1CSCxNQUFNLE9BQU8sa0JBQWtCOytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixZQWYzQixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixhQUFhO1lBQ2IsUUFBUTtZQUNSLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHNCQUFzQixhQUVkLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQjtnSEFFM0Qsa0JBQWtCLFlBZjNCLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsVUFBVTtZQUNWLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsYUFBYTtZQUdiLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHNCQUFzQjs7NEZBSWIsa0JBQWtCO2tCQWxCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsUUFBUTt3QkFDUixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDO2lCQUN4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVGFJY29uc01vZHVsZSB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tIFwiQHRhL3RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgeyBUYUNhcmRNb2R1bGUsIFRhQ29udGFpbmVyTW9kdWxlLCBUYVVpTW9kdWxlIH0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgU2FmZVBpcGUsIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgRG9jdW1lbnRzTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZG9jdW1lbnRzL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZpbGVFZGl0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0L2ZpbGVzLWVkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGaWxlQ2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdC9jYXJkL2ZpbGUvZmlsZS1jYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QvZmlsZXMtbGlzdC5jb21wb25lbnRcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhRmlsZXNCYXNpY01vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQsIEZpbGVFZGl0Q29tcG9uZW50LCBEb2N1bWVudHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFDYXJkTW9kdWxlLFxuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRhSWNvbnNNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBTYWZlUGlwZSxcbiAgICBGaWxlTGlzdENvbXBvbmVudCxcbiAgICBGaWxlQ2FyZENvbXBvbmVudCxcbiAgICBGaWxlRWRpdENvbXBvbmVudCxcbiAgICBEb2N1bWVudHNMaXN0Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbRmlsZUxpc3RDb21wb25lbnQsIEZpbGVFZGl0Q29tcG9uZW50LCBEb2N1bWVudHNMaXN0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGFGaWxlc0Jhc2ljTW9kdWxlIHt9XG4iXX0=