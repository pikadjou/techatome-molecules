import { Component, Input } from '@angular/core';

import { NgxDocViewerModule } from 'ngx-doc-viewer';

import { LoaderComponent } from '@ta/ui';
import { TaAbstractComponent } from '@ta/utils';

import { PreviewDocumentDto } from '../../type';

@Component({
  selector: 'ta-word-viewer',
  templateUrl: './word-viewer.component.html',
  styleUrls: ['./word-viewer.component.scss'],
  standalone: true,
  imports: [NgxDocViewerModule, LoaderComponent],
})
export class WordViewerComponent extends TaAbstractComponent {
  @Input({ required: true }) file!: PreviewDocumentDto;

  constructor() {
    super();
    //this.requestState.asked();
  }
}
