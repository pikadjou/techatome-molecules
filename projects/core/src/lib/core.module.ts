import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { TaFilesExtendedModule } from '@ta/files-extended';
import { TaFormModule } from '@ta/form-basic';
import { TaFormInputsModule } from '@ta/form-input';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaCardModule, TaContainerModule, TaLayoutModule, TaListModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';

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
import { TaTranslationCore } from './translation.service';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaCoreModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FiltersContainerComponent, DocumentsComponent, CallTemplateComponent } from '@ta/library-name';
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaLayoutModule,
    TaUiModule,
    TaFormModule,
    TaIconsModule,
    TaDirectivePipeModule,
    TaCardModule,
    TaFilesExtendedModule,
    TaFormInputsModule,
    TaContainerModule,
    TaListModule,
    MatMenuModule,
    MatDialogModule,
    TranslatePipe,
    FiltersComponent,
    FiltersContainerComponent,
    FiltersFormComponent,
    FiltersTagComponent,
    DocumentsComponent,
    UploadDocumentModal,
    FilterContainerComponent,
    SearchHistoryDisplayerComponent,
    SearchDisplayerComponent,
    FilterDisplayerComponent,
    TextToClipboardComponent,
  ],
  exports: [
    FiltersContainerComponent,
    DocumentsComponent,
    FilterContainerComponent,
    SearchDisplayerComponent,
    SearchHistoryDisplayerComponent,
    FilterDisplayerComponent,
    FiltersTagComponent,
    TextToClipboardComponent,
  ],
})
export class TaCoreModule {
  constructor() {
    TaTranslationCore.getInstance();
  }
}
