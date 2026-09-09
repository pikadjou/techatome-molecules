import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ImageViewerComponent, PreviewDocumentDto } from "@ta/files-basic";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-image-viewer-default",
  imports: [ImageViewerComponent],
  template: `
    <div style="height: 420px">
      <ta-image-viewer [file]="this.file"></ta-image-viewer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaImageViewerDefaultExample {
  file: PreviewDocumentDto = {
    filename: "logo.png",
    url: "/assets/partners/logo/logo.png",
    size: 24_600,
    uploadedDate: "2025-09-30T08:47:00",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-image-viewer",
  group: "Visionneuses",
  summary: "Aperçu d'une image : `<img [src]=\"file().url\">` dans un conteneur centré.",
  examples: [{ title: "Aperçu", layout: "stack", component: TaImageViewerDefaultExample }],
};
