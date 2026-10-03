import { ChangeDetectionStrategy, Component } from "@angular/core";

import { PdfViewerComponent, PreviewDocumentDto } from "@ta/files-basic";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-pdf-viewer-default",
  imports: [PdfViewerComponent],
  template: `
    <div style="height: 420px">
      <ta-pdf-viewer style="display: block; height: 100%" [file]="this.file"></ta-pdf-viewer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaPdfViewerDefaultExample {
  file: PreviewDocumentDto = {
    filename: "rapport-financier-2025.pdf",
    url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
    size: 842_311,
    uploadedDate: "2025-11-03T09:15:00",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-pdf-viewer",
  group: "Visionneuses",
  summary: "Aperçu d'un fichier PDF dans un `ngx-doc-viewer` (`viewer=\"pdf\"`).",
  examples: [{ title: "Aperçu", layout: "stack", component: TaPdfViewerDefaultExample }],
  notes:
    "`viewer=\"pdf\"` rend un `<object type=\"application/pdf\" [data]=\"url\">` (vérifié dans `document-viewer.component.mjs` de `ngx-doc-viewer`) : contrairement aux modes `google` et `office` utilisés par `ta-word-viewer` et `ta-excel-viewer`, c'est le lecteur PDF natif du navigateur qui affiche le fichier, sans dépendre d'un service tiers accessible sur Internet. `url` pointe donc ici vers un vrai PDF du dépôt (`src/assets/showcase/files-basic/rapport-financier-2025.pdf`) et l'aperçu est réel. `ta-pdf-viewer` n'a pas de feuille de style propre (`pdf-viewer.component.scss` est vide) : son hôte reste `display: inline` par défaut et ignore toute hauteur posée sur un conteneur englobant. Cette démo force `display: block; height: 100%` directement sur la balise pour qu'elle occupe l'espace prévu.",
};
