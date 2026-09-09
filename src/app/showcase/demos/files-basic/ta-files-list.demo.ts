import { ChangeDetectionStrategy, Component } from "@angular/core";

import { FileListComponent } from "@ta/files-basic";
import { EFileExtension, FileData } from "@ta/utils";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-files-list-documents",
  imports: [FileListComponent],
  template: `
    <ta-files-list
      [files]="this.files"
      (fileSelected)="this.onFileSelected($event)"
      (moreInformationSelected)="this.onMoreInformation($event)"
    ></ta-files-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesListDocumentsExample {
  files: FileData[] = [
    {
      id: 101,
      url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
      type: "Document",
      fileExtension: EFileExtension.PDF,
      name: "rapport-financier-2025.pdf",
      fileMetaData: {
        fileName: "rapport-financier-2025.pdf",
        fileType: { translatedValue: "Facture" },
        fileSize: 842_311,
        owner: { naming: { trigram: "GLB" } },
      },
    },
    {
      id: 102,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Word,
      name: "contrat-prestation-signe.docx",
      fileMetaData: {
        fileName: "contrat-prestation-signe.docx",
        fileType: { translatedValue: "Contrat" },
        fileSize: 128_744,
        owner: { naming: { trigram: "MDL" } },
      },
    },
    {
      id: 103,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Excel,
      name: "tableau-couts-projet.xlsx",
      fileMetaData: {
        fileName: "tableau-couts-projet.xlsx",
        fileType: { translatedValue: "Tableau de bord" },
        fileSize: 96_207,
        owner: { naming: { trigram: "JCL" } },
      },
    },
    {
      id: 104,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Unknown,
      name: "plans-archives-2024.zip",
      fileMetaData: {
        fileName: "plans-archives-2024.zip",
        fileType: { translatedValue: "Archive" },
        fileSize: 12_480_500,
        owner: { naming: { trigram: "SDW" } },
      },
    },
  ];

  onFileSelected(file: FileData & { index: number }) {
    console.log("Fichier sélectionné :", file);
  }

  onMoreInformation(file: FileData) {
    console.log("Plus d'informations sur :", file);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-list-images",
  imports: [FileListComponent],
  template: `
    <ta-files-list [files]="this.files"></ta-files-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesListImagesExample {
  // Le premier fichier du tableau décide du mode d'affichage
  // (`canDisplayFileType` ne regarde que `files()[0]`) : comme il est de type
  // `Image` ici, la grille « image » s'affiche, et elle rend aussi les fichiers
  // `Document` qu'elle croise (voir la note de la démo).
  files: FileData[] = [
    {
      id: 201,
      url: "/assets/partners/logo/logo.png",
      thumbnailUrl: "/assets/partners/logo/logo.png",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "photo-chantier-facade.jpg",
    },
    {
      id: 202,
      url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
      type: "Document",
      fileExtension: EFileExtension.PDF,
      name: "rapport-financier-2025.pdf",
      fileMetaData: {
        fileName: "rapport-financier-2025.pdf",
        fileType: { translatedValue: "Facture" },
        fileSize: 842_311,
        owner: { naming: { trigram: "GLB" } },
      },
    },
  ];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-list-deletable",
  imports: [FileListComponent],
  template: `
    <ta-files-list [files]="this.files" [canDeleteFile]="true" (fileDeleted)="this.onFileDeleted($event)"></ta-files-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesListDeletableExample {
  files: FileData[] = [
    {
      id: 301,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Word,
      name: "contrat-prestation-signe.docx",
      fileMetaData: {
        fileName: "contrat-prestation-signe.docx",
        fileType: { translatedValue: "Contrat" },
        fileSize: 128_744,
        owner: { naming: { trigram: "MDL" } },
      },
    },
    {
      id: 302,
      url: "#",
      type: "Document",
      fileExtension: EFileExtension.Excel,
      name: "tableau-couts-projet.xlsx",
      fileMetaData: {
        fileName: "tableau-couts-projet.xlsx",
        fileType: { translatedValue: "Tableau de bord" },
        fileSize: 96_207,
        owner: { naming: { trigram: "JCL" } },
      },
    },
  ];

  onFileDeleted(file: FileData) {
    console.log("Fichier à retirer :", file);
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-files-list",
  group: "Fichiers",
  summary: "Grille de fichiers (`ta-file-card` pour les documents, vignette pour les images), sélection et suppression.",
  examples: [
    { title: "Documents", layout: "stack", component: TaFilesListDocumentsExample },
    {
      title: "Images et documents mêlés",
      layout: "stack",
      description:
        "`canDisplayFileType()` (dans `files-list.component.ts`) ne teste que `files()[0].type` : ici le premier fichier est une image, la grille « image » s'affiche donc, et elle rend aussi le document qui la suit (vérifié dans `files-list.component.html`). Si un document avait été placé en premier, ce serait l'inverse : la grille « document » se serait affichée et les images du tableau auraient été ignorées, pas rendues du tout.",
      component: TaFilesListImagesExample,
    },
    {
      title: "Suppression",
      layout: "stack",
      description: "`canDeleteFile` affiche une icône de suppression par carte ; la cliquer émet `fileDeleted`.",
      component: TaFilesListDeletableExample,
    },
  ],
};
