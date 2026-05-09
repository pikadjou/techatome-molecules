import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from "@angular/core";

import {
  DocumentsListComponent,
  FileListComponent,
  FilesPreviewComponent,
  PreviewDocumentDto,
  PreviewModal,
} from "@ta/files-basic";
import { UploadComponent } from "@ta/files-extended";
import { ButtonComponent, TextComponent, TitleComponent } from "@ta/ui";
import { EFileExtension, FileData } from "@ta/utils";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    ButtonComponent,
    DocumentsListComponent,
    FileListComponent,
    FilesPreviewComponent,
    PageLayoutComponent,
    PreviewModal,
    TextComponent,
    TitleComponent,
    UploadComponent,
  ],
  templateUrl: "./files.component.html",
  styleUrl: "./files.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesPage {
  private _cdr = inject(ChangeDetectorRef);

  canDeleteImageFiles = signal(false);
  canDeleteDocFiles = signal(false);

  imageFiles = signal<FileData[]>([
    {
      id: 1,
      url: "https://picsum.photos/seed/1/400/300.jpg",
      thumbnailUrl: "https://picsum.photos/seed/1/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "photo-vacances.jpg",
    },
    {
      id: 2,
      url: "https://picsum.photos/seed/2/400/300.jpg",
      thumbnailUrl: "https://picsum.photos/seed/2/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "portrait-equipe.jpg",
    },
    {
      id: 3,
      url: "https://picsum.photos/seed/3/400/300.jpg",
      thumbnailUrl: "https://picsum.photos/seed/3/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "loading-example.jpg",
      isLoading: true,
    },
  ]);

  documentFiles = signal<FileData[]>([
    {
      id: 4,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.PDF,
      name: "rapport-annuel-2024.pdf",
    },
    {
      id: 5,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Word,
      name: "contrat-prestation.docx",
    },
    {
      id: 6,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Excel,
      name: "tableau-de-bord.xlsx",
    },
  ]);

  emptyFiles = signal<FileData[]>([]);

  readonly previewImage: PreviewDocumentDto = {
    filename: "paysage-montagne.jpg",
    url: "https://picsum.photos/seed/10/800/600.jpg",
    size: 245760,
  };

  readonly previewPdf: PreviewDocumentDto = {
    filename: "wcag21-spec.pdf",
    url: "https://www.w3.org/WAI/WCAG21/wcag21.pdf",
    size: 1048576,
  };

  previewFiles = signal<FileData[]>([
    {
      id: 10,
      url: "https://picsum.photos/seed/10/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/10/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "paysage-montagne.jpg",
    },
    {
      id: 11,
      url: "https://picsum.photos/seed/11/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/11/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "portrait-ville.jpg",
    },
    {
      id: 12,
      url: "https://picsum.photos/seed/12/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/12/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "nature-foret.jpg",
    },
    {
      id: 13,
      url: "https://picsum.photos/seed/13/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/13/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "architecture.jpg",
    },
    {
      id: 14,
      url: "https://www.w3.org/WAI/WCAG21/wcag21.pdf",
      type: "Document",
      fileExtension: EFileExtension.PDF,
      name: "wcag21-spec.pdf",
    },
  ]);

  activePreview = signal<PreviewDocumentDto | null>(null);

  public toggleImageDelete(): void {
    this.canDeleteImageFiles.update((v) => !v);
  }

  public toggleDocDelete(): void {
    this.canDeleteDocFiles.update((v) => !v);
  }

  public onFileSelected(file: FileData & { index: number }): void {
    console.log("File selected:", file);
  }

  public onFileDeleted(file: FileData): void {
    console.log("File deleted:", file);
  }

  public openPreviewFromFile(file: FileData & { index: number }): void {
    this.activePreview.set({
      filename: file.name ?? `fichier-${file.id}`,
      url: file.url,
      size: 0,
    });
    this._cdr.markForCheck();
  }

  public openPreview(doc: PreviewDocumentDto): void {
    this.activePreview.set(doc);
    this._cdr.markForCheck();
  }

  public closePreview(): void {
    this.activePreview.set(null);
    this._cdr.markForCheck();
  }
}
