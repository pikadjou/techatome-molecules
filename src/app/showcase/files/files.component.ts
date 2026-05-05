import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { DocumentsListComponent, FileListComponent } from "@ta/files-basic";
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
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
    UploadComponent,
  ],
  templateUrl: "./files.component.html",
  styleUrl: "./files.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesPage {
  canDeleteImageFiles = signal(false);
  canDeleteDocFiles = signal(false);

  imageFiles = signal<FileData[]>([
    {
      id: 1,
      url: "https://picsum.photos/400/300?random=1",
      thumbnailUrl: "https://picsum.photos/120/90?random=1",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "photo-vacances.jpg",
    },
    {
      id: 2,
      url: "https://picsum.photos/400/300?random=2",
      thumbnailUrl: "https://picsum.photos/120/90?random=2",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "portrait-equipe.jpg",
    },
    {
      id: 3,
      url: "https://picsum.photos/400/300?random=3",
      thumbnailUrl: "https://picsum.photos/120/90?random=3",
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
}
