import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ExcelViewerComponent,
  FileListComponent,
  FilesPreviewComponent,
  ImageViewerComponent,
  PdfViewerComponent,
  PreviewModal,
  WordViewerComponent,
} from "@ta/files-basic";
import { FileData, TaTestIdDirective } from "@ta/utils";

const IMG =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
const PREVIEW = { filename: "fichier.bin", url: IMG, size: 42 };

/**
 * Galerie « files » @ta/files-basic — composants montés à partir de données
 * (aucun backend). Les viewers pdf/word/excel rendent depuis un `PreviewDocumentDto`
 * (URL data:) ; `ta-documents-list` (service documents) et `ta-files-edit`
 * (tui-image-editor) sont couverts/écartés ailleurs.
 * Route: /e2e-harness/files
 */
@Component({
  standalone: true,
  selector: "app-case-files",
  imports: [
    ExcelViewerComponent,
    FileListComponent,
    FilesPreviewComponent,
    ImageViewerComponent,
    PdfViewerComponent,
    PreviewModal,
    WordViewerComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-image-viewer taTestId="ta-image-viewer" [file]="preview"></ta-image-viewer>
    <ta-pdf-viewer taTestId="ta-pdf-viewer" [file]="preview"></ta-pdf-viewer>
    <ta-word-viewer taTestId="ta-word-viewer" [file]="preview"></ta-word-viewer>
    <ta-excel-viewer taTestId="ta-excel-viewer" [file]="preview"></ta-excel-viewer>
    <ta-files-list taTestId="ta-files-list" [files]="files"></ta-files-list>
    <ta-files-preview taTestId="ta-files-preview" [initial]="preview"></ta-files-preview>
    <ta-files-preview-modal taTestId="ta-files-preview-modal" [open]="false" [initial]="preview"></ta-files-preview-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesCase {
  readonly preview = PREVIEW;
  readonly files: FileData[] = [{ id: 1, url: IMG, type: "Image", name: "image.png" }];
}
