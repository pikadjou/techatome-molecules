import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ExcelViewerComponent, PreviewDocumentDto } from "@ta/files-basic";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-excel-viewer-default",
  imports: [ExcelViewerComponent],
  template: `
    <div style="height: 420px">
      <ta-excel-viewer style="display: block; height: 100%" [file]="this.file"></ta-excel-viewer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaExcelViewerDefaultExample {
  file: PreviewDocumentDto = {
    filename: "tableau-couts-projet.xlsx",
    url: "/assets/showcase/files-basic/tableau-couts-projet.xlsx",
    size: 96_207,
    uploadedDate: "2025-08-21T11:30:00",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-excel-viewer",
  group: "Visionneuses",
  summary: "Aperçu d'un fichier Excel dans un `ngx-doc-viewer` (`viewer=\"office\"`).",
  examples: [{ title: "Aperçu", layout: "stack", component: TaExcelViewerDefaultExample }],
  notes:
    "`ExcelViewerComponent` délègue à `ngx-doc-viewer` avec `viewer=\"office\"` : ce mode charge le document dans la visionneuse Office en ligne de Microsoft via une iframe, ce qui exige une `url` accessible publiquement sur Internet (vérifié dans `document-viewer.component.mjs` de `ngx-doc-viewer` : ce mode est marqué `externalViewer`). Cette démo monte le composant avec un chemin local du dépôt plutôt qu'une URL externe inventée qui ne répondrait pas ; le composant s'affiche sans erreur, mais l'iframe ne peut pas charger de contenu réel dans cet environnement. `ta-excel-viewer` n'a pas de feuille de style propre (`excel-viewer.component.scss` est vide) : son hôte reste `display: inline` par défaut et ignore toute hauteur posée sur un conteneur englobant. Cette démo force `display: block; height: 100%` directement sur la balise pour qu'elle occupe l'espace prévu.",
};
