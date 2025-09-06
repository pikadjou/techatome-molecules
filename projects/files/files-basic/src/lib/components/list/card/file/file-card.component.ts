import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { TaIconType } from '@ta/icons';
import {
  BadgeComponent,
  CardComponent,
  CardContentComponent,
  CardCtaComponent,
  CardHeaderComponent,
  CardTagComponent,
  CardTitleComponent,
  TitleComponent,
  TrigramComponent,
} from '@ta/ui';
import { EFileExtension, FileData } from '@ta/utils';

@Component({
  selector: 'ta-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss'],
  standalone: true,
  imports: [
    BadgeComponent,
    CardComponent,
    CardContentComponent,
    CardCtaComponent,
    CardHeaderComponent,
    CardTagComponent,
    CardTitleComponent,
    FontIconComponent,
    LocalIconComponent,
    TitleComponent,
    TrigramComponent,
  ],
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
        return TaIconType.Pdf;
      case EFileExtension.Word:
        return TaIconType.Doc;
      case EFileExtension.Excel:
        return TaIconType.Excel;
      case EFileExtension.Image:
        return TaIconType.Image;
      default:
        return TaIconType.UnknownFile;
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
