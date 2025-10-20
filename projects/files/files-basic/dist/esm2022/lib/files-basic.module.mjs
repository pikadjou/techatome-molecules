import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaCardModule, TaContainerModule, TaUiModule } from '@ta/ui';
import { SafePipe, TaDirectivePipeModule } from '@ta/utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtYmFzaWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9maWxlcy1iYXNpYy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFM0U7Ozs7Ozs7Ozs7R0FVRztBQW1CSCxNQUFNLE9BQU8sa0JBQWtCOytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixZQWYzQixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixhQUFhO1lBQ2IsUUFBUTtZQUNSLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHNCQUFzQixhQUVkLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQjtnSEFFM0Qsa0JBQWtCLFlBZjNCLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsVUFBVTtZQUNWLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsYUFBYTtZQUdiLGlCQUFpQjtZQUNqQixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHNCQUFzQjs7NEZBSWIsa0JBQWtCO2tCQWxCOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsUUFBUTt3QkFDUixpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIsaUJBQWlCO3dCQUNqQixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixDQUFDO2lCQUN4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVGFDYXJkTW9kdWxlLCBUYUNvbnRhaW5lck1vZHVsZSwgVGFVaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBTYWZlUGlwZSwgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgRG9jdW1lbnRzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kb2N1bWVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWxlRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0L2ZpbGVzLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbGVDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3QvY2FyZC9maWxlL2ZpbGUtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9maWxlcy1saXN0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUZpbGVzQmFzaWNNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IEZpbGVMaXN0Q29tcG9uZW50LCBGaWxlRWRpdENvbXBvbmVudCwgRG9jdW1lbnRzTGlzdENvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBUYVVpTW9kdWxlLFxuICAgIFRhQ2FyZE1vZHVsZSxcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUYUljb25zTW9kdWxlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgU2FmZVBpcGUsXG4gICAgRmlsZUxpc3RDb21wb25lbnQsXG4gICAgRmlsZUNhcmRDb21wb25lbnQsXG4gICAgRmlsZUVkaXRDb21wb25lbnQsXG4gICAgRG9jdW1lbnRzTGlzdENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0ZpbGVMaXN0Q29tcG9uZW50LCBGaWxlRWRpdENvbXBvbmVudCwgRG9jdW1lbnRzTGlzdENvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhRmlsZXNCYXNpY01vZHVsZSB7fVxuIl19