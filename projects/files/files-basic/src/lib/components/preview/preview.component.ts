import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';

import {
  ButtonComponent,
  LayoutModalComponent,
  LoaderComponent,
  MegaoctetComponent,
  TextComponent,
  TitleComponent,
} from '@ta/ui';
import { EFileExtension, TaBaseComponent, TaBaseModal, downloadFile, getFileExtension } from '@ta/utils';

import { PreviewDocumentDto } from './type';
import { ExcelViewerComponent } from './viewers/excel-viewer/excel-viewer.component';
import { ImageViewerComponent } from './viewers/image-viewer/image-viewer.component';
import { PdfViewerComponent } from './viewers/pdf-viewer/pdf-viewer.component';
import { WordViewerComponent } from './viewers/word-viewer/word-viewer.component';

@Component({
  selector: 'ta-files-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ButtonComponent,
    MegaoctetComponent,
    ImageViewerComponent,
    PdfViewerComponent,
    ExcelViewerComponent,
    WordViewerComponent,
    TitleComponent,
    TextComponent,
  ],
})
export class FilesPreviewComponent extends TaBaseComponent {
  initial = input.required<PreviewDocumentDto>();

  readonly getFileExtension = getFileExtension;
  readonly EFileExtension = EFileExtension;
  constructor() {
    super();
  }

  public download() {
    downloadFile(this.initial().url);
  }
}

export type PreviewModalDataModal = {
  initial: PreviewDocumentDto | null;
};
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '',
  template:
    '<ta-layout-modal [style]="\'big\'" title="files.preview.title"><ta-loader [isLoading]="this.requestState.isLoading()"><ta-files-preview [initial]="this.initial()!"></ta-files-preview></ta-loader></ta-layout-modal>',
  standalone: true,
  imports: [LayoutModalComponent, FilesPreviewComponent, LoaderComponent],
})
export class PreviewModal extends TaBaseModal {
  public data = inject<PreviewModalDataModal>(MAT_DIALOG_DATA);

  readonly initial = signal<PreviewDocumentDto | null>(null);

  constructor() {
    super();
    //  TaTranslationFiles.getInstance();

    this.initial.set(this.data.initial);
  }
}
