import { ChangeDetectionStrategy, Component } from "@angular/core";

import { InputLogoComponent } from "@ta/form-input";
import { InputLogo } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-logo-with-value",
  imports: [InputLogoComponent],
  template: ` <ta-input-logo [input]="this.model" [standalone]="true"></ta-input-logo> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputLogoWithValueExample {
  model = new InputLogo({
    key: "logo",
    label: "Logo de l'entreprise",
    value: { id: "1", url: "https://picsum.photos/seed/ta-input-logo/200/200.jpg", description: "logo", size: 8000 },
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-logo-empty",
  imports: [InputLogoComponent],
  template: ` <ta-input-logo [input]="this.model" [standalone]="true"></ta-input-logo> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputLogoEmptyExample {
  model = new InputLogo({ key: "logo-empty", label: "Logo de l'entreprise" });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-logo",
  group: "Média",
  summary:
    "Aperçu éditable d'un logo unique, piloté par un modèle `InputLogo` : image ou emplacement vide, avec un choix caméra/galerie et un bouton de suppression.",
  examples: [
    {
      title: "Avec valeur",
      description: "Le bouton « Supprimer » (`removeLogo()`) met `input.value` à `null` ; il n'apparaît que lorsqu'une valeur est présente.",
      component: TaInputLogoWithValueExample,
    },
    { title: "Sans valeur", component: TaInputLogoEmptyExample },
  ],
  notes:
    "L'ajout (`openCamera()`, `openGallery()`) appelle `TaDocumentsService.addDocument$()`, qui envoie un vrai `FormData` vers `{ApiUrl}/Media/upload` — non exercé ici, la vitrine ne fournissant pas de backend.",
};
