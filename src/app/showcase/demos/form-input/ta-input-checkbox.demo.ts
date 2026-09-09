import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { CheckboxComponent } from "@ta/form-input";
import { InputCheckBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-checkbox-values",
  imports: [CheckboxComponent],
  template: `
    <ta-input-checkbox [input]="this.unchecked" [standalone]="true"></ta-input-checkbox>
    <ta-input-checkbox [input]="this.checked" [standalone]="true"></ta-input-checkbox>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputCheckboxValuesExample {
  unchecked = new InputCheckBox({ key: "unchecked", label: "Non coché" });
  checked = new InputCheckBox({ key: "checked", label: "Coché", value: true });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-checkbox-required",
  imports: [CheckboxComponent],
  template: ` <ta-input-checkbox [input]="this.model" [standalone]="true"></ta-input-checkbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputCheckboxRequiredExample {
  model = new InputCheckBox({
    key: "terms",
    label: "J'accepte les conditions",
    validators: [Validators.required],
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-checkbox-disabled",
  imports: [CheckboxComponent],
  template: ` <ta-input-checkbox [input]="this.model" [standalone]="true"></ta-input-checkbox> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputCheckboxDisabledExample {
  // `disabled` doit être passé à la construction : le template lit directement
  // `this.input.disabled` sur l'attribut natif `[disabled]`, pas l'état du
  // FormControl. Appeler `disable()` depuis un constructeur n'aurait aucun effet.
  model = new InputCheckBox({ key: "locked", label: "Non modifiable", value: true, disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-checkbox",
  group: "Sélection",
  summary: "Case à cocher du système de formulaires, pilotée par un modèle `InputCheckBox`.",
  examples: [
    { title: "Coché et non coché", component: TaInputCheckboxValuesExample },
    {
      title: "Requis",
      description:
        "Le validateur vient du modèle ; l'astérisque est affiché par le `ta-form-label` imbriqué, pas par la case elle-même.",
      component: TaInputCheckboxRequiredExample,
    },
    { title: "Désactivé", component: TaInputCheckboxDisabledExample },
  ],
};
