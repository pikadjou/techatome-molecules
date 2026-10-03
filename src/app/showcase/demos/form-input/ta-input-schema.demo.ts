import { ChangeDetectionStrategy, Component } from "@angular/core";

import { InputSchemaComponent } from "@ta/form-input";
import { InputSchema } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-schema-empty",
  imports: [InputSchemaComponent],
  template: ` <ta-input-schema [input]="this.model" [standalone]="true"></ta-input-schema> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSchemaEmptyExample {
  model = new InputSchema({ key: "logo", label: "Logo" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-schema-value",
  imports: [InputSchemaComponent],
  template: ` <ta-input-schema [input]="this.model" [standalone]="true"></ta-input-schema> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSchemaValueExample {
  // Une valeur non vide bascule le bouton en variante circulaire (`isCircularButton`)
  // et affiche l'image via `ta-files-list`.
  model = new InputSchema({
    key: "logo-existing",
    label: "Logo existant",
    value:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-schema",
  group: "Média",
  summary: "Sélecteur d'une image unique (logo, schéma), ouvrant un éditeur en plein écran (`ta-input-schema-modal`).",
  examples: [
    { title: "Vide", component: TaInputSchemaEmptyExample },
    { title: "Avec une valeur existante", component: TaInputSchemaValueExample },
  ],
  notes:
    "Le bouton ouvre une modale plein écran qui recadre l'image sélectionnée (`ta-files-edit`) puis appelle l'option `update` du modèle (`(data: FileStructure[]) => Promise<Picture[]>`) pour la persister via un service externe. Aucune de ces deux démos ne la fournit : la vitrine ne branche aucun backend, donc la modale s'ouvre mais une sélection n'aboutirait à rien de visible.",
};
