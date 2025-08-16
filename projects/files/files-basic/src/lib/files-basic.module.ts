import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamCardModule, CamContainerModule, CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule, SafePipe } from '@camelot/utils';

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
