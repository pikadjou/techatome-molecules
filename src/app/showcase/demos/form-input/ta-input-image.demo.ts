import { ChangeDetectionStrategy, Component } from "@angular/core";

import { InputImageComponent } from "@ta/form-input";
import { InputImages } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-image-with-value",
  imports: [InputImageComponent],
  template: ` <ta-input-image [input]="this.model" [standalone]="true"></ta-input-image> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputImageWithValueExample {
  model = new InputImages({
    key: "avatar",
    label: "Avatar",
    value: [
      {
        id: "1",
        url: "https://picsum.photos/seed/ta-input-image/200/200.jpg",
        description: "avatar",
        size: 12000,
      },
    ],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-image-empty",
  imports: [InputImageComponent],
  template: ` <ta-input-image [input]="this.model" [standalone]="true"></ta-input-image> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputImageEmptyExample {
  model = new InputImages({ key: "avatar-empty", label: "Avatar" });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-image",
  group: "Média",
  summary:
    "Aperçu en lecture seule d'une image, piloté par un modèle `InputImages` (même modèle que `ta-input-images`) : il n'affiche que la première valeur, sans aucune interaction.",
  examples: [
    {
      title: "Avec valeur",
      description: "N'affiche que le premier élément de `input.value`, via `ta-user-logo`, sans bouton d'ajout ni de suppression.",
      component: TaInputImageWithValueExample,
    },
    {
      title: "Sans valeur",
      description: "`userInfo` est `undefined` tant que `input.value` est vide : le composant ne rend rien du tout.",
      component: TaInputImageEmptyExample,
    },
  ],
  notes:
    "Malgré son nom au singulier, `InputImageComponent` (`ta-input-image`) est typé `TaAbstractInputComponent<InputImages>`, le même modèle « pluriel » que `ta-input-images` — il n'existe pas de modèle `InputImage` dédié dans @ta/form-model.",
};
