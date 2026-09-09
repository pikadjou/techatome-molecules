import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { RadioComponent } from "@ta/form-input";
import { InputRadio } from "@ta/form-model";
import { TaIconType } from "@ta/icons";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-radio-basic",
  imports: [RadioComponent],
  template: ` <ta-input-radio [input]="this.model" [standalone]="true"></ta-input-radio> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputRadioBasicExample {
  model = new InputRadio<string>({
    key: "plan",
    label: "Formule",
    options: of([
      { id: "basic", name: "Basique" },
      { id: "pro", name: "Pro" },
      { id: "enterprise", name: "Entreprise" },
    ]),
    value: "pro",
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-radio-icons",
  imports: [RadioComponent],
  template: ` <ta-input-radio [input]="this.model" [standalone]="true"></ta-input-radio> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputRadioIconsExample {
  // Sans `name`, une option passe en mode « icône seule » (`hasLabel()` renvoie
  // `false`) : l'icône est alors affichée plus grande.
  model = new InputRadio<string>({
    key: "contact",
    label: "Moyen de contact",
    options: of([
      { id: "phone", icon: TaIconType.Phone },
      { id: "email", icon: TaIconType.Email },
      { id: "chat", icon: TaIconType.Comment },
    ]),
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-radio-disabled",
  imports: [RadioComponent],
  template: ` <ta-input-radio [input]="this.model" [standalone]="true"></ta-input-radio> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputRadioDisabledExample {
  model = new InputRadio<string>({
    key: "plan-disabled",
    label: "Formule verrouillée",
    options: of([
      { id: "basic", name: "Basique" },
      { id: "pro", name: "Pro" },
    ]),
    value: "pro",
    disabled: true,
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-radio",
  group: "Sélection",
  summary: "Groupe de boutons radio, options passées par un `Observable`, avec variante à icônes.",
  examples: [
    { title: "Options simples", component: TaInputRadioBasicExample },
    { title: "Icônes seules", component: TaInputRadioIconsExample },
    {
      title: "Désactivé",
      description: "`onOptionClicked()` court-circuite explicitement quand `input.disabled` est vrai : cliquer ne change rien.",
      component: TaInputRadioDisabledExample,
    },
  ],
};
