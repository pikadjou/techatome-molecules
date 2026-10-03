import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { TextareaComponent } from "@ta/form-input";
import { InputTextarea } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textarea-basic",
  imports: [TextareaComponent],
  template: ` <ta-input-textarea [input]="this.model" [standalone]="true"></ta-input-textarea> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextareaBasicExample {
  model = new InputTextarea({ key: "description", label: "Description", value: "Un texte sur plusieurs lignes, qui s'auto-agrandit (cdkTextareaAutosize)." });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textarea-required",
  imports: [TextareaComponent],
  template: ` <ta-input-textarea [input]="this.model" [standalone]="true"></ta-input-textarea> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextareaRequiredExample {
  model = new InputTextarea({ key: "comment", label: "Commentaire", validators: [Validators.required] });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-textarea-disabled",
  imports: [TextareaComponent],
  template: ` <ta-input-textarea [input]="this.model" [standalone]="true"></ta-input-textarea> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTextareaDisabledExample {
  model = new InputTextarea({ key: "readonly-notes", label: "Notes verrouillées", value: "Valeur figée.", disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-textarea",
  group: "Saisie",
  summary: "Zone de texte multi-lignes, avec redimensionnement automatique (`cdkTextareaAutosize`).",
  examples: [
    { title: "Valeur simple", component: TaInputTextareaBasicExample },
    { title: "Requis", component: TaInputTextareaRequiredExample },
    { title: "Désactivé", component: TaInputTextareaDisabledExample },
  ],
};
