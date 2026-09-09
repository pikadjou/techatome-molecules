import { ChangeDetectionStrategy, Component } from "@angular/core";

import { InputImagesComponent } from "@ta/form-input";
import { InputImages } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-images-with-value",
  imports: [InputImagesComponent],
  template: ` <ta-input-images [input]="this.model" [standalone]="true"></ta-input-images> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputImagesWithValueExample {
  model = new InputImages({
    key: "gallery",
    label: "Photos du chantier",
    value: [
      { id: "1", url: "https://picsum.photos/seed/ta-input-images-1/300/200.jpg", description: "photo 1", size: 45000 },
      { id: "2", url: "https://picsum.photos/seed/ta-input-images-2/300/200.jpg", description: "photo 2", size: 51000 },
    ],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-images-empty",
  imports: [InputImagesComponent],
  template: ` <ta-input-images [input]="this.model" [standalone]="true"></ta-input-images> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputImagesEmptyExample {
  model = new InputImages({ key: "gallery-empty", label: "Photos du chantier" });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-images",
  group: "Média",
  summary:
    "Galerie éditable pilotée par un modèle `InputImages` : grille de vignettes avec suppression, et bouton d'ajout ouvrant un choix caméra/galerie.",
  examples: [
    {
      title: "Avec valeur",
      description: "Chaque vignette porte un bouton de suppression (`onFileDeleted()`) qui retire l'élément de `input.value`.",
      component: TaInputImagesWithValueExample,
    },
    { title: "Vide", component: TaInputImagesEmptyExample },
  ],
  notes:
    "L'ajout (`openGallery()`, `takePhoto()`) appelle `TaDocumentsService.addDocument$()`, qui envoie un vrai `FormData` vers `{ApiUrl}/Media/upload` — non exercé ici, la vitrine ne fournissant pas de backend. L'option caméra n'apparaît que si `canTakePhoto()` détecte une plateforme native ou une webcam (`navigator.mediaDevices`).",
};
