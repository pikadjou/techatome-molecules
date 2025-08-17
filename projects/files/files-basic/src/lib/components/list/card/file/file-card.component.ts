import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CamIconType } from '@ta/icons';
import { EFileExtension, FileData } from '@ta/utils';

@Component({
selector: 'ta-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],,
  standalone: true,
  imports: [FontIconComponent, LocalIconComponent],
})
export class FileCardComponent {
  @Input() file!: FileData;

  @Output()
  fileSelected: EventEmitter<FileData> = new EventEmitter<FileData>();

  @Output()
  moreInformationSelected: EventEmitter<FileData> = new EventEmitter<FileData>();

  get localIcon() {
    switch (this.file.fileExtension) {
      case EFileExtension.PDF:
        return CamIconType.Pdf;
      case EFileExtension.Word:
        return CamIconType.Doc;
      case EFileExtension.Excel:
        return CamIconType.Excel;
      case EFileExtension.Image:
        return CamIconType.Image;
      default:
        return CamIconType.UnknownFile;
    }
  }

  get fileType(): string | null {
    return this.file.fileMetaData?.fileType?.translatedValue || null;
  }

  get userTrigram(): string | null {
    return this.file.fileMetaData?.owner?.naming?.trigram || null;
  }

  get fileSize(): number | null {
    return this.file.fileMetaData?.fileSize || null;
  }

  get fileName(): string | null {
    return this.file.fileMetaData?.fileName || null;
  }

  public onHeaderClicked() {
    this.moreInformationSelected.emit(this.file);
  }

  public onBodyClicked() {
    this.fileSelected.emit(this.file);
  }
}
