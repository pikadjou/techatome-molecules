import { CommonModule } from '@angular/common';
import { Component, output, input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import {
  ButtonComponent,
  MegaoctetComponent,
  TaModalComponent,
  TextComponent,
  TitleComponent,
} from '@ta/ui';
import { EFileExtension, TaBaseComponent, downloadFile, getFileExtension } from '@ta/utils';

import { TaTranslationFiles } from '../../translation.service';
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
    TaTranslationFiles.getInstance();
  }

  public download() {
    downloadFile(this.initial().url);
  }
}

export type PreviewModalDataModal = {
  initial: PreviewDocumentDto | null;
};

@Component({
  selector: 'ta-files-preview-modal',
  template: `
    <ta-modal
      [open]="this.open()"
      size="large"
      [contentFit]="true"
      [title]="'files.preview.title' | translate"
      (closeEvent)="this.closeEvent.emit()"
    >
      <div modal-content class="preview-modal-content">
        @if (this.initial(); as doc) {
          <ta-files-preview [initial]="doc"></ta-files-preview>
        }
      </div>
    </ta-modal>
  `,
  styles: [`
    .preview-modal-content {
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }
    ta-files-preview {
      flex: 1;
      min-height: 0;
    }
  `],
  standalone: true,
  imports: [FilesPreviewComponent, TaModalComponent, TranslateModule],
})
export class PreviewModal extends TaBaseComponent {
  open = input.required<boolean>();
  initial = input<PreviewDocumentDto | null>(null);

  closeEvent = output<void>();
}
