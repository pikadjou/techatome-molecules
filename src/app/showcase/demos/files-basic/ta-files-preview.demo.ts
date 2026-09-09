import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { FilesPreviewComponent, PreviewDocumentDto } from "@ta/files-basic";

import { ComponentDemo } from "../../demo.types";

// `preview.component.html` affiche `uploadedDate | date: 'shortDate'`. Sans
// `registerLocaleData`, absent de `app.config.ts`/`main.ts` alors que
// `LOCALE_ID` vaut `fr`, `DatePipe` lève `NG0701` et la page ne rend rien.
registerLocaleData(localeFr);

@Component({
  standalone: true,
  selector: "app-ex-ta-files-preview-pdf",
  imports: [FilesPreviewComponent],
  template: `
    <div style="height: 460px">
      <ta-files-preview style="height: 100%" [initial]="this.initial"></ta-files-preview>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesPreviewPdfExample {
  // `getFileExtension()` (@ta/utils) déduit le visualiseur du dernier segment
  // de `url` après un `.` : l'extension doit donc être réelle dans l'URL.
  initial: PreviewDocumentDto = {
    filename: "rapport-financier-2025.pdf",
    url: "/assets/showcase/files-basic/rapport-financier-2025.pdf",
    size: 842_311,
    uploadedDate: "2025-11-03T09:15:00",
  };
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-preview-image",
  imports: [FilesPreviewComponent],
  template: `
    <div style="height: 460px">
      <ta-files-preview style="height: 100%" [initial]="this.initial"></ta-files-preview>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesPreviewImageExample {
  initial: PreviewDocumentDto = {
    filename: "logo.png",
    url: "/assets/partners/logo/logo.png",
    size: 24_600,
    uploadedDate: "2025-09-30T08:47:00",
  };
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-preview-unsupported",
  imports: [FilesPreviewComponent],
  template: `
    <div style="height: 460px">
      <ta-files-preview style="height: 100%" [initial]="this.initial"></ta-files-preview>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesPreviewUnsupportedExample {
  // `.zip` n'est reconnu par aucun des quatre cas du `@switch` : le composant
  // retombe sur le message `files.slide.no-viewer` traduit.
  initial: PreviewDocumentDto = {
    filename: "plans-archives-2024.zip",
    url: "/assets/showcase/files-basic/plans-archives-2024.zip",
    size: 12_480_500,
    uploadedDate: "2025-06-12T16:00:00",
  };
}

export const DEMO: ComponentDemo = {
  id: "ta-files-preview",
  group: "Visionneuses",
  summary: "Aperçu d'un document : titre, date, poids, visualiseur adapté à l'extension, et téléchargement.",
  examples: [
    { title: "PDF", layout: "stack", component: TaFilesPreviewPdfExample },
    { title: "Image", layout: "stack", component: TaFilesPreviewImageExample },
    {
      title: "Extension non prise en charge",
      layout: "stack",
      description:
        "`getFileExtension()` ne reconnaît que pdf/docx/xls(x)/jpg/jpeg/png (voir `projects/utils/src/lib/utils/string.ts`) : toute autre extension affiche `files.slide.no-viewer` à la place d'un visualiseur.",
      component: TaFilesPreviewUnsupportedExample,
    },
  ],
  notes:
    "Le visualiseur choisi dépend uniquement de l'extension à la fin de `initial.url` (`getFileExtension`, @ta/utils), pas d'un champ de type explicite : une URL `data:` ne s'y prête pas (elle n'a pas de nom de fichier), c'est pourquoi ces exemples pointent vers des chemins locaux du dépôt plutôt que des URL externes ou des données `data:`. Le bouton de téléchargement (`download()`) télécharge réellement le fichier pointé par `initial.url`. Ce fichier appelle `registerLocaleData(localeFr)` en tête de module : sans lui, la date affichée en en-tête (`uploadedDate | date: 'shortDate'`) fait lever `NG0701` à `DatePipe` et la page ne rend rien — l'application elle-même en a toujours besoin, hors du périmètre de cette vitrine. Le titre du document (`filename`) ne s'affiche jamais : `preview.component.html` pose `<ta-title [level]=\"'3'\">`, une chaîne, alors que `TitleComponent.level` attend un nombre (`1|2|3|4|5|6`) et sélectionne le gabarit avec `@switch (this.level()) { @case (3) {...} }` — `'3' === 3` est faux, donc aucun `@case` ne correspond et `ta-title` ne rend rien du tout (vérifié à l'exécution : le nœud existe dans le DOM mais reste vide). C'est un défaut de `ta-files-preview` lui-même, hors du périmètre de cette vitrine. `ta-files-preview` a son propre `:host { display: block; position: relative }` mais aucune hauteur : ces exemples posent `style=\"height: 100%\"` directement sur la balise, dans un conteneur de hauteur fixe, sans quoi `.preview-layout` (`position: absolute; inset: 0`) se réduit à zéro et son contenu, `overflow: hidden` par `.preview-body`, disparaît.",
};
