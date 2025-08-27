import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ta/utils";
import * as i3 from "@ta/ui";
import * as i4 from "@ta/icons";
import * as i5 from "@ta/translation";
import * as i6 from "./components/list/files-list.component";
import * as i7 from "./components/list/card/file/file-card.component";
import * as i8 from "./components/edit/files-edit.component";
import * as i9 from "./components/documents/list/list.component";
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
export declare class CamFilesBasicModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CamFilesBasicModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CamFilesBasicModule, never, [typeof i1.CommonModule, typeof i2.CamDirectivePipeModule, typeof i3.CamUiModule, typeof i3.CamCardModule, typeof i3.CamContainerModule, typeof i4.CamIconsModule, typeof i5.TranslatePipe, typeof i2.SafePipe, typeof i6.FileListComponent, typeof i7.FileCardComponent, typeof i8.FileEditComponent, typeof i9.DocumentsListComponent], [typeof i6.FileListComponent, typeof i8.FileEditComponent, typeof i9.DocumentsListComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CamFilesBasicModule>;
}
