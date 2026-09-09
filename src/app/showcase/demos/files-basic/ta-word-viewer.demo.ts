import { ChangeDetectionStrategy, Component } from "@angular/core";

import { PreviewDocumentDto, WordViewerComponent } from "@ta/files-basic";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-word-viewer-default",
  imports: [WordViewerComponent],
  template: `
    <div style="height: 420px">
      <ta-word-viewer style="display: block; height: 100%" [file]="this.file"></ta-word-viewer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaWordViewerDefaultExample {
  file: PreviewDocumentDto = {
    filename: "contrat-prestation-signe.docx",
    url: "/assets/showcase/files-basic/contrat-prestation-signe.docx",
    size: 128_744,
    uploadedDate: "2025-10-18T14:02:00",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-word-viewer",
  group: "Visionneuses",
  summary: "Aperçu d'un fichier Word dans un `ngx-doc-viewer` (`viewer=\"google\"`).",
  examples: [{ title: "Aperçu", layout: "stack", component: TaWordViewerDefaultExample }],
  notes:
    "`WordViewerComponent` délègue à `ngx-doc-viewer` avec `viewer=\"google\"` : ce mode charge le document dans Google Docs Viewer via une iframe, ce qui exige une `url` accessible publiquement sur Internet (vérifié dans `document-viewer.component.mjs` de `ngx-doc-viewer` : ce mode est marqué `externalViewer`). Cette démo monte le composant avec un chemin local du dépôt plutôt qu'une URL externe inventée qui ne répondrait pas ; le composant s'affiche sans erreur, mais l'iframe ne peut pas charger de contenu réel dans cet environnement. `ta-word-viewer` n'a pas de feuille de style propre (`word-viewer.component.scss` est vide) : son hôte reste `display: inline` par défaut et ignore toute hauteur posée sur un conteneur englobant. Cette démo force `display: block; height: 100%` directement sur la balise pour qu'elle occupe l'espace prévu.",
};
