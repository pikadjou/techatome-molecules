import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { InputChoicesComponent } from "@ta/form-input";
import { InputChoices } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-choices-basic",
  imports: [InputChoicesComponent],
  template: ` <ta-input-choices [input]="this.model" [standalone]="true"></ta-input-choices> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputChoicesBasicExample {
  model = new InputChoices({
    key: "role",
    label: "Rôle",
    value: ["admin"],
    options$: of([
      { id: "admin", name: "Administrateur", data: null },
      { id: "editor", name: "Éditeur", data: null },
      { id: "viewer", name: "Lecteur", data: null },
    ]),
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-choices-multiple",
  imports: [InputChoicesComponent],
  template: ` <ta-input-choices [input]="this.model" [standalone]="true"></ta-input-choices> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputChoicesMultipleExample {
  model = new InputChoices({
    key: "tags",
    label: "Étiquettes",
    multiple: true,
    withSearch: true,
    value: ["urgent", "suivi"],
    options$: of([
      { id: "urgent", name: "Urgent", data: null },
      { id: "suivi", name: "À suivre", data: null },
      { id: "archive", name: "Archivé", data: null },
    ]),
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-choices-disabled",
  imports: [InputChoicesComponent],
  template: ` <ta-input-choices [input]="this.model" [standalone]="true"></ta-input-choices> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputChoicesDisabledExample {
  model = new InputChoices({
    key: "role-locked",
    label: "Rôle imposé",
    value: ["admin"],
    disabled: true,
    options$: of([{ id: "admin", name: "Administrateur", data: null }]),
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-choices",
  group: "Sélection",
  summary:
    "Sélecteur à panneau latéral avec recherche et sélection simple ou multiple, piloté par un modèle `InputChoices`.",
  examples: [
    { title: "Sélection simple", component: TaInputChoicesBasicExample },
    {
      title: "Sélection multiple avec recherche",
      description:
        "`multiple: true` autorise plusieurs valeurs, affichées en tags dans le champ fermé ; `withSearch: true` ajoute un champ de recherche dans le panneau ouvert.",
      component: TaInputChoicesMultipleExample,
    },
    { title: "Désactivé", component: TaInputChoicesDisabledExample },
  ],
  notes:
    "Le panneau (liste d'options, recherche, boutons « Effacer »/« Valider ») ne s'affiche qu'à l'ouverture de l'overlay ; l'état fermé montré ici reprend les valeurs sélectionnées sous forme de tags.",
};
