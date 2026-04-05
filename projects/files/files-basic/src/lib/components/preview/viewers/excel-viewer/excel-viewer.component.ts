import { Component, input } from '@angular/core';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { LoaderComponent } from '@ta/ui';
import { TaAbstractComponent } from '@ta/utils';

import { PreviewDocumentDto } from '../../type';

@Component({
  selector: 'ta-excel-viewer',
  templateUrl: './excel-viewer.component.html',
  styleUrls: ['./excel-viewer.component.scss'],
  standalone: true,
  imports: [NgxDocViewerModule, LoaderComponent],
})
export class ExcelViewerComponent extends TaAbstractComponent {
  file = input.required<PreviewDocumentDto>();

  constructor() {
    super();
    //this.requestState.asked();
  }
}
