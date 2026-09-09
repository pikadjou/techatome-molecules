import { ChangeDetectionStrategy, Component } from "@angular/core";

import { UploadComponent } from "@ta/form-input";
import { InputUpload } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-upload-basic",
  imports: [UploadComponent],
  template: ` <ta-input-upload [input]="this.model" [standalone]="true"></ta-input-upload> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputUploadBasicExample {
  // Sans `confirmButton`, chaque fichier déposé est validé (`this.input.confirmValue(...)`)
  // dès la fin de son téléversement, sans étape de confirmation manuelle.
  model = new InputUpload({ key: "documents", label: "Documents" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-upload-confirm",
  imports: [UploadComponent],
  template: ` <ta-input-upload [input]="this.model" [standalone]="true"></ta-input-upload> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputUploadConfirmExample {
  model = new InputUpload({ key: "documents-confirm", label: "Documents (validation manuelle)", confirmButton: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-upload",
  group: "Média",
  summary: "Zone de dépôt de fichiers, avec barre de progression simulée et téléversement réel via `TaDocumentsService`.",
  examples: [
    { title: "Zone de dépôt", layout: "stack", component: TaInputUploadBasicExample },
    {
      title: "Avec confirmation manuelle",
      layout: "stack",
      description: "`confirmButton: true` fait apparaître un bouton « Valider », désactivé tant qu'un fichier de la liste n'a pas atteint 100 %.",
      component: TaInputUploadConfirmExample,
    },
  ],
  notes:
    "La sortie `uploadStatusChanged` (`boolean`), émise à chaque ajout ou suppression pour signaler si tous les fichiers en cours sont complets, n'est démontrée dans aucun exemple ci-dessus. Le glisser-déposer et le bouton « Ajouter » appellent réellement `TaDocumentsService` : sans backend, un dépôt de fichier dans cette vitrine échouera au lieu de progresser — le rendu initial, lui, ne dépend d'aucun service.",
};
