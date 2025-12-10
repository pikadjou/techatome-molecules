import { Component, Input } from "@angular/core";

import { LocalIconComponent } from "@ta/icons";
import { TaIconType } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import { extractExtension } from "@ta/utils";

@Component({
  selector: "ta-file-image",
  templateUrl: "./file-image.component.html",
  styleUrls: ["./file-image.component.scss"],
  standalone: true,
  imports: [LocalIconComponent],
})
export class FileImageComponent {
  @Input()
  fileName!: string;

  @Input()
  size: TaSizes = "sm";

  get extIcon(): TaIconType {
    const ext = extractExtension(this.fileName);

    switch (ext) {
      case "docx":
        return TaIconType.Doc;
      case "pdf":
        return TaIconType.Pdf;
      case "xlsx":
        return TaIconType.Xls;
      default:
        return TaIconType.FileEmpty;
    }
  }
}
