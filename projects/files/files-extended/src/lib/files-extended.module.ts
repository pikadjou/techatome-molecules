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
