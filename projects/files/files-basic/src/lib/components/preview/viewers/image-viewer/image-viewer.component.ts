import { Component, Input } from '@angular/core';

import { PreviewDocumentDto } from '../../type';

@Component({
  selector: 'ta-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  standalone: true,
})
export class ImageViewerComponent {
  @Input({ required: true }) file!: PreviewDocumentDto;
}
