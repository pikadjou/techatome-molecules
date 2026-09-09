import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { PreviewDocumentDto, PreviewModal } from "@ta/files-basic";
import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

// `PreviewModal` embarque `ta-files-preview`, qui affiche `uploadedDate | date:
// 'shortDate'`. Sans `registerLocaleData`, absent de `app.config.ts`/`main.ts`
// alors que `LOCALE_ID` vaut `fr`, `DatePipe` lève `NG0701` et la page ne rend rien.
registerLocaleData(localeFr);

@Component({
  standalone: true,
  selector: "app-ex-ta-files-preview-modal-toggle",
  imports: [ButtonComponent, PreviewModal],
  template: `
    <ta-button (action)="this.open.set(true)">Ouvrir l'aperçu</ta-button>
    <ta-files-preview-modal
      [open]="this.open()"
      [initial]="this.initial"
      (closeEvent)="this.open.set(false)"
    ></ta-files-preview-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesPreviewModalToggleExample {
  open = signal(false);

  initial: PreviewDocumentDto = {
    filename: "rapport-financier-2025.pdf",
    url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
    size: 842_311,
    uploadedDate: "2025-11-03T09:15:00",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-files-preview-modal",
  group: "Visionneuses",
  summary: "`ta-files-preview` posé dans un `ta-modal` (taille `large`, contenu ajusté).",
  examples: [
    {
      title: "Ouverture / fermeture",
      layout: "stack",
      description: "`open` est piloté par le parent ; fermer la modale (croix ou fond) émet `closeEvent`.",
      component: TaFilesPreviewModalToggleExample,
    },
  ],
  notes:
    "`PreviewModal` n'a pas de titre fixe : il traduit `files.preview.title`. Comme pour `ta-files-preview`, `initial.url` doit se terminer par une extension reconnue par `getFileExtension()` pour qu'un visualiseur s'affiche. Le nom du fichier (`filename`) ne s'affiche jamais à l'intérieur, pour la même raison que sur la page `ta-files-preview` : `<ta-title [level]=\"'3'\">` reçoit une chaîne alors que `TitleComponent.level` attend un nombre, et le `@switch` interne ne sélectionne donc aucun gabarit (voir les notes de `ta-files-preview.demo.ts`) — un défaut de la bibliothèque, hors du périmètre de cette vitrine. La mise en page interne de `PreviewModal` (`.preview-modal-content ta-files-preview { flex: 1; min-height: 0 }`, dans `preview.component.ts`) donne en revanche une vraie hauteur à `ta-files-preview` sans qu'il faille rien ajouter ici. Ce fichier appelle aussi `registerLocaleData(localeFr)` en tête de module, pour la même raison que `ta-files-preview.demo.ts` (voir ses notes) : l'application elle-même en a toujours besoin, hors du périmètre de cette vitrine.",
};
