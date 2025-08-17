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
@NgModule({

  declarations: [],
  imports: [CommonModule, CamDirectivePipeModule, CamUiModule, CamCardModule, CamContainerModule, CamIconsModule, TranslatePipe, SafePipe, FileListComponent, FileCardComponent, FileEditComponent, DocumentsListComponent],
  exports: [FileListComponent, FileEditComponent, DocumentsListComponent],

})
export class CamFilesBasicModule {}
