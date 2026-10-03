import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { Feature, UploadComponent } from "@ta/files-extended";
import { FileStructure } from "@ta/utils";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-files-upload-action-button",
  imports: [UploadComponent],
  template: `
    <ta-files-upload [features]="this.features" (filesPicked)="this.onFilesPicked($event)"></ta-files-upload>
    <p>Fichiers reçus : {{ this.pickedCount() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesUploadActionButtonExample {
  // `showInActionButton` vaut `true` par défaut : les trois actions se regroupent
  // dans un seul `ta-action-button`.
  features: Feature[] = ["take-pic", "upload-pic", "upload-file"];

  pickedCount = signal(0);

  onFilesPicked(files: FileStructure[]) {
    this.pickedCount.update((count) => count + files.length);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-files-upload-separate-buttons",
  imports: [UploadComponent],
  template: `
    <ta-files-upload
      [features]="this.features"
      [showInActionButton]="false"
      [canSelectMultipleFiles]="true"
    ></ta-files-upload>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilesUploadSeparateButtonsExample {
  // `showInActionButton: false` rend un `ta-button` par action au lieu du menu
  // consolidé. `canSelectMultipleFiles` ne change que le sélecteur de fichiers
  // natif ouvert par « upload file » — aucun effet visuel sur ces boutons.
  features: Feature[] = ["upload-pic", "upload-file"];
}

export const DEMO: ComponentDemo = {
  id: "ta-files-upload",
  group: "Fichiers",
  summary: "Bouton(s) de téléversement : prise de photo, choix d'image ou de document, selon `features`.",
  examples: [
    { title: "Bouton d'action", component: TaFilesUploadActionButtonExample },
    {
      title: "Boutons séparés",
      description: "`showInActionButton` à `false` : une action, un bouton.",
      component: TaFilesUploadSeparateButtonsExample,
    },
  ],
};
