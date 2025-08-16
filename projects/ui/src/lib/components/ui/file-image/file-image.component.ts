import { Component, Input } from '@angular/core';

import { CamIconType } from '@camelot/icons';
import { CamSizes } from '@camelot/styles';
import { extractExtension } from '@camelot/utils';

@Component({
  selector: 'cam-file-image',
  templateUrl: './file-image.component.html',
  styleUrls: ['./file-image.component.scss'],
})
export class FileImageComponent {
  @Input()
  fileName!: string;

  @Input()
  size: CamSizes = 'sm';

  get extIcon(): CamIconType {
    const ext = extractExtension(this.fileName);

    switch (ext) {
      case 'docx':
        return CamIconType.Doc;
      case 'pdf':
        return CamIconType.Pdf;
      case 'xlsx':
        return CamIconType.Xls;
      default:
        return CamIconType.FileEmpty;
    }
  }
}
