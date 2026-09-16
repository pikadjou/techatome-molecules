import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import {
  ButtonComponent,
  MegaoctetComponent,
  TextComponent,
  TitleComponent,
} from '@ta/ui';
import { EFileExtension, TaBaseComponent, downloadFile } from '@ta/utils';

import { TaTranslationFiles } from '../../translation.service';
import { PreviewDocumentDto, getDocumentExtension } from './type';
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

  readonly getDocumentExtension = getDocumentExtension;
  readonly EFileExtension = EFileExtension;

  constructor() {
    super();
    TaTranslationFiles.getInstance();
  }

  public download() {
    downloadFile(this.initial().url);
  }
}
