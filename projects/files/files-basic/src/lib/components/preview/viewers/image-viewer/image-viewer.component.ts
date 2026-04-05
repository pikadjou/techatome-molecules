import { Component, input } from '@angular/core';

import { PreviewDocumentDto } from '../../type';

@Component({
  selector: 'ta-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
  standalone: true,
})
export class ImageViewerComponent {
  file = input.required<PreviewDocumentDto>();
}
