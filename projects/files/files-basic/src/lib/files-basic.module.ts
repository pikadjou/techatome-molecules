import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamCardModule, CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule, SafePipe } from '@ta/utils';

import { DocumentsListComponent } from './components/documents/list/list.component';
import { FileEditComponent } from './components/edit/files-edit.component';
import { FileCardComponent } from './components/list/card/file/file-card.component';
import { FileListComponent } from './components/list/files-list.component';

@NgModule({
  declarations: [FileListComponent, FileCardComponent, FileEditComponent, DocumentsListComponent],
  imports: [
    CommonModule,
    CamDirectivePipeModule,
    CamUiModule,
    CamCardModule,
    CamContainerModule,
    CamIconsModule,
    CamUiModule,
    TranslatePipe,
    SafePipe,
  ],
  exports: [FileListComponent, FileEditComponent, DocumentsListComponent],
})
export class CamFilesBasicModule {}
