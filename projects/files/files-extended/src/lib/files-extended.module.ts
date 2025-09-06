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
@NgModule({
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
})
export class TaFilesExtendedModule {}
