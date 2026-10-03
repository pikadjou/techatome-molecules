import { ChangeDetectionStrategy, Component } from "@angular/core";

import { FileImageComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-file-image-extensions",
  imports: [FileImageComponent],
  template: `
    <ta-file-image fileName="contrat-prestation.docx"></ta-file-image>
    <ta-file-image fileName="rapport-financier.pdf"></ta-file-image>
    <ta-file-image fileName="tableau-couts.xlsx"></ta-file-image>
    <ta-file-image fileName="photo-chantier.jpg"></ta-file-image>
    <ta-file-image fileName="dossier-sans-extension"></ta-file-image>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFileImageExtensionsExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-file-image-sizes",
  imports: [FileImageComponent],
  template: `
    <ta-file-image fileName="rapport.pdf" size="sm"></ta-file-image>
    <ta-file-image fileName="rapport.pdf" size="md"></ta-file-image>
    <ta-file-image fileName="rapport.pdf" size="lg"></ta-file-image>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFileImageSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-file-image",
  group: "Affichage",
  summary: "Pictogramme de fichier déduit de l'extension du nom passé en entrée.",
  examples: [
    {
      title: "Extensions reconnues",
      description:
        "`extIcon` (via `extractExtension`, @ta/utils) reconnaît `docx`, `pdf`, `xlsx` ; toute autre extension — ou un nom sans point, comme le dernier ici — retombe sur l'icône générique `FileEmpty`.",
      component: TaFileImageExtensionsExample,
    },
    { title: "Tailles", component: TaFileImageSizesExample },
  ],
};
