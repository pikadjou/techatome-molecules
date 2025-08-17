import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { CamFilesExtendedModule } from '@ta/files-extended';
import { CamFormModule } from '@ta/form-basic';
import { CamFormInputsModule } from '@ta/form-input';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamCardModule, CamContainerModule, CamLayoutModule, CamListModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { CallTemplateComponent } from './components/communication-handler/call-template/call-template.component';
import { MailTemplateComponent } from './components/communication-handler/mail-template/mail-template.component';
import { ReturnTemplateComponent } from './components/communication-handler/return-template/return-template.component';
import { SnoozeTemplateComponent } from './components/communication-handler/snooze-template/snooze-template.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { UploadDocumentModal } from './components/documents/upload/upload-visit-document/upload-document.component';
import { FiltersContainerComponent } from './components/filters/container/filters-container.component';
import { FilterContainerComponent } from './components/filters/filter-container/filter-container.component';
import { FilterDisplayerComponent } from './components/filters/filter-displayer/filter-displayer.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FiltersFormComponent } from './components/filters/form/filters-form.component';
import { FiltersTagComponent } from './components/filters/tag/filters-tag.component';
import { SearchDisplayerComponent } from './components/historical-research/search-displayer.component';
import { SearchHistoryDisplayerComponent } from './components/historical-research/search-history-displayer/search-history-displayer.component';
import { TextToClipboardComponent } from './components/text-to-clipboard/text-to-clipboard.component';
import { CamTranslationCore } from './translation.service';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 * 
 * @example
 * // Instead of importing the module:
 * // import { CamCoreModule } from '@ta/library-name';
 * 
 * // Import the standalone components directly:
 * import { FiltersContainerComponent, DocumentsComponent, CallTemplateComponent } from '@ta/library-name';
 */
@NgModule({

  declarations: [],
  imports: [CommonModule, CamLayoutModule, CamUiModule, CamFormModule, CamIconsModule, CamDirectivePipeModule, CamCardModule, CamFilesExtendedModule, CamFormInputsModule, CamContainerModule, CamListModule, MatMenuModule, MatDialogModule, TranslatePipe, FiltersComponent, FiltersContainerComponent, FiltersFormComponent, FiltersTagComponent, DocumentsComponent, UploadDocumentModal, CallTemplateComponent, MailTemplateComponent, SnoozeTemplateComponent, FilterContainerComponent, SearchHistoryDisplayerComponent, SearchDisplayerComponent, ReturnTemplateComponent, FilterDisplayerComponent, TextToClipboardComponent],
  exports: [
    FiltersContainerComponent,
    DocumentsComponent,
    CallTemplateComponent,
    MailTemplateComponent,
    SnoozeTemplateComponent,
    FilterContainerComponent,
    SearchDisplayerComponent,
    SearchHistoryDisplayerComponent,
    ReturnTemplateComponent,
    FilterDisplayerComponent,
    FiltersTagComponent,
    TextToClipboardComponent,
  ],

})
export class CamCoreModule {
  constructor() {
    CamTranslationCore.getInstance();
  }
}
