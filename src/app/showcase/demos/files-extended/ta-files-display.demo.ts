import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Observable, of } from "rxjs";

import { FilesDisplayComponent } from "@ta/files-extended";
import { TaIconType } from "@ta/icons";
import { Menu, MenuIcon } from "@ta/menu";
import { EFileExtension, FileData } from "@ta/utils";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-files-display-documents",
  imports: [FilesDisplayComponent],
  template: `
    <ta-files-display
      [files$]="this.files$"
      [menu]="this.menu"
      [tempFiles]="[]"
      [fileType]="'Document'"
      (fileSelected)="this.onFileSelected($event)"
      (moreInformationSelected)="this.onMoreInformation($event)"
    ></ta-files-display>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesDisplayDocumentsExample {
  menu = new Menu({
    elements: [
      new MenuIcon({ key: "documents", label: "Documents", order: 1, icon: TaIconType.Doc, link: "" }),
      new MenuIcon({ key: "images", label: "Images", order: 2, icon: TaIconType.Image, link: "" }),
    ],
  });

  // `fileType: 'Document'` fait rendre `getFeature()` la seule action
  // « upload-file » : un document ne peut être sélectionné qu'un par un.
  files$: Observable<FileData[]> = of([
    { id: 1, url: "#", type: "Document", fileExtension: EFileExtension.PDF, name: "rapport-annuel.pdf" },
    { id: 2, url: "#", type: "Document", fileExtension: EFileExtension.Word, name: "contrat-prestation.docx" },
    { id: 3, url: "#", type: "Document", fileExtension: EFileExtension.Excel, name: "tableau-de-bord.xlsx" },
  ]);

  onFileSelected(file: FileData & { index: number }) {
    console.log("Fichier sélectionné :", file);
  }

  onMoreInformation(file: FileData) {
    console.log("Plus d'informations sur :", file);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-display-images",
  imports: [FilesDisplayComponent],
  template: `
    <ta-files-display [files$]="this.files$" [menu]="this.menu" [tempFiles]="[]" [fileType]="'Image'">
    </ta-files-display>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesDisplayImagesExample {
  menu = new Menu({
    elements: [
      new MenuIcon({ key: "documents", label: "Documents", order: 1, icon: TaIconType.Doc, link: "" }),
      new MenuIcon({ key: "images", label: "Images", order: 2, icon: TaIconType.Image, link: "" }),
    ],
  });

  // `fileType: 'Image'` fait rendre `getFeature()` l'action « upload-pic », qui
  // autorise elle la sélection multiple (`canSelectMultipleFiles`).
  files$: Observable<FileData[]> = of([
    {
      id: 10,
      url: "https://picsum.photos/seed/files-display-1/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/files-display-1/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "paysage-montagne.jpg",
    },
    {
      id: 11,
      url: "https://picsum.photos/seed/files-display-2/800/600.jpg",
      thumbnailUrl: "https://picsum.photos/seed/files-display-2/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      name: "portrait-ville.jpg",
    },
  ]);
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-display-temp-files",
  imports: [FilesDisplayComponent],
  template: `
    <ta-files-display [files$]="this.files$" [menu]="this.menu" [tempFiles]="this.tempFiles" [fileType]="'Image'">
    </ta-files-display>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesDisplayTempFilesExample {
  menu = new Menu({
    elements: [new MenuIcon({ key: "images", label: "Images", order: 1, icon: TaIconType.Image, link: "" })],
  });

  files$: Observable<FileData[]> = of([]);

  // `tempFiles` non vide fait passer `canDisplayTempsFiles` à `true` : la liste
  // temporaire s'affiche au-dessus de la liste définitive, séparée par un `<hr>`.
  tempFiles: FileData[] = [
    {
      id: 20,
      url: "https://picsum.photos/seed/files-display-temp/400/300.jpg",
      thumbnailUrl: "https://picsum.photos/seed/files-display-temp/120/90.jpg",
      type: "Image",
      fileExtension: EFileExtension.Image,
      isLoading: true,
      name: "photo-en-cours-envoi.jpg",
    },
  ];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-display-no-add",
  imports: [FilesDisplayComponent],
  template: `
    <ta-files-display
      [files$]="this.files$"
      [menu]="this.menu"
      [tempFiles]="[]"
      [fileType]="'Document'"
      [canAddFile]="false"
    ></ta-files-display>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesDisplayNoAddExample {
  menu = new Menu({
    elements: [new MenuIcon({ key: "documents", label: "Documents", order: 1, icon: TaIconType.Doc, link: "" })],
  });

  // `canAddFile: false` masque le bouton flottant de téléversement.
  files$: Observable<FileData[]> = of([
    { id: 30, url: "#", type: "Document", fileExtension: EFileExtension.PDF, name: "conditions-generales.pdf" },
  ]);
}

export const DEMO: ComponentDemo = {
  id: "ta-files-display",
  group: "Fichiers",
  summary: "Liste de fichiers pilotée par un flux `files$`, avec navigation, fichiers temporaires et envoi.",
  examples: [
    // `TaFilesDisplayNoAddExample` est placé en premier : le bouton flottant
    // (`position: absolute` sans hauteur de référence, voir action-button.component.scss)
    // déborde sous l'exemple qui le précède quand plusieurs instances sont
    // empilées. Le placer en tête évite qu'un bouton d'un autre exemple ne
    // déborde visuellement sur celui qui démontre justement son absence.
    {
      title: "Sans bouton d'ajout",
      layout: "stack",
      description: "`canAddFile` à `false` masque le bouton flottant de téléversement.",
      component: TaFilesDisplayNoAddExample,
    },
    { title: "Documents", layout: "stack", component: TaFilesDisplayDocumentsExample },
    { title: "Images", layout: "stack", component: TaFilesDisplayImagesExample },
    {
      title: "Fichiers en cours d'envoi",
      layout: "stack",
      description: "`tempFiles` non vide affiche une liste temporaire au-dessus de la liste définitive.",
      component: TaFilesDisplayTempFilesExample,
    },
  ],
};
