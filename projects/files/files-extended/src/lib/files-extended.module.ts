import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamFilesBasicModule } from '@camelot/files-basic';
import { CamFormModule } from '@camelot/form-basic';
import { CamFormInputsModule } from '@camelot/form-input';
import { CamIconsModule } from '@camelot/icons';
import { CamMenuModule } from '@camelot/menu';
import { CamEnumerationService } from '@camelot/services';
import { CamCardModule, CamContainerModule, CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { FilesDisplayComponent } from './components/display/files-display.component';
import { UploadComponent } from './components/upload/files-upload.component';
import { UploadDocumentFormService } from './services/document/upload-document-form.service';

@NgModule({
  declarations: [FilesDisplayComponent, UploadComponent],
  imports: [
    CamContainerModule,
    CamDirectivePipeModule,
    CamFormModule,
    CamUiModule,
    CamCardModule,
    CommonModule,
    CamFormInputsModule,
    CamFilesBasicModule,
    CamIconsModule,
    CamMenuModule,
  ],
  exports: [FilesDisplayComponent, UploadComponent, CamFilesBasicModule],
  providers: [CamEnumerationService, UploadDocumentFormService],
})
export class CamFilesExtendedModule {}
