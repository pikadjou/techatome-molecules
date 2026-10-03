import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { TextBoxComponent } from "@ta/form-input";
import { InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textbox-basic",
  imports: [TextBoxComponent],
  template: ` <ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextboxBasicExample {
  model = new InputTextBox({ key: "name", label: "Nom", value: "Dupont" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textbox-required",
  imports: [TextBoxComponent],
  template: ` <ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextboxRequiredExample {
  model = new InputTextBox({
    key: "email",
    label: "Courriel",
    validators: [Validators.required],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textbox-disabled",
  imports: [TextBoxComponent],
  template: ` <ta-input-textbox [input]="this.model" [standalone]="true"></ta-input-textbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextboxDisabledExample {
  // `InputBase` expose `disabled` dans ses options. Appeler `disable()` depuis le
  // constructeur n'aurait aucun effet visible : cette méthode agit sur le
  // `FormControl`, qui n'existe pas encore à ce moment-là.
  model = new InputTextBox({
    key: "readonly",
    label: "Non modifiable",
    value: "Valeur figée",
    disabled: true,
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-textbox",
  group: "Saisie",
  summary:
    "Champ texte du système de formulaires. Se pilote par un modèle `InputTextBox`, jamais par des inputs individuels.",
  examples: [
    { title: "Valeur simple", component: TaInputTextboxBasicExample },
    { title: "Requis", description: "Le validateur vient du modèle, pas du composant.", component: TaInputTextboxRequiredExample },
    { title: "Désactivé", component: TaInputTextboxDisabledExample },
  ],
  notes:
    "En usage réel, ces champs sont rendus par `<ta-form [inputs]=\"…\">` ; l'attribut `standalone` n'existe que pour les monter isolément.",
};
