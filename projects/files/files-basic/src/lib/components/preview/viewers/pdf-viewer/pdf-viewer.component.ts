import { Component, input } from '@angular/core';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { LoaderComponent } from '@ta/ui';
import { TaAbstractComponent } from '@ta/utils';

import { PreviewDocumentDto } from '../../type';

@Component({
  selector: 'ta-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss'],
  standalone: true,
  imports: [NgxDocViewerModule, LoaderComponent],
})
export class PdfViewerComponent extends TaAbstractComponent {
  file = input.required<PreviewDocumentDto>();

  constructor() {
    super();
    // this.requestState.asked();
  }
}
