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
@NgModule({

  declarations: [],
  imports: [CamContainerModule, CamDirectivePipeModule, CamFormModule, CamUiModule, CamCardModule, CommonModule, CamFormInputsModule, CamFilesBasicModule, CamIconsModule, CamMenuModule, FilesDisplayComponent, UploadComponent],
  exports: [FilesDisplayComponent, UploadComponent, CamFilesBasicModule],
  providers: [CamEnumerationService, UploadDocumentFormService],

})
export class CamFilesExtendedModule {}
