import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { TimePickerComponent } from "@ta/form-input";
import { InputTimePicker } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-time-picker-basic",
  imports: [TimePickerComponent],
  template: ` <ta-input-time-picker [input]="this.model" [standalone]="true"></ta-input-time-picker> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTimePickerBasicExample {
  model = new InputTimePicker({ key: "time", label: "Heure de rendez-vous", value: "09:30" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-time-picker-required",
  imports: [TimePickerComponent],
  template: ` <ta-input-time-picker [input]="this.model" [standalone]="true"></ta-input-time-picker> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTimePickerRequiredExample {
  model = new InputTimePicker({ key: "time-required", label: "Heure de fin", validators: [Validators.required] });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-time-picker-disabled",
  imports: [TimePickerComponent],
  template: ` <ta-input-time-picker [input]="this.model" [standalone]="true"></ta-input-time-picker> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputTimePickerDisabledExample {
  model = new InputTimePicker({ key: "time-disabled", label: "Heure verrouillée", value: "14:00", disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-time-picker",
  group: "Date et heure",
  summary: "Sélecteur d'heure (`ngx-material-timepicker`) ; le champ natif est toujours en lecture seule, la saisie passe par le cadran.",
  examples: [
    { title: "Valeur simple", component: TaInputTimePickerBasicExample },
    { title: "Requis", component: TaInputTimePickerRequiredExample },
    { title: "Désactivé", component: TaInputTimePickerDisabledExample },
  ],
  notes: "`InputTimePicker` étend `InputTextBox` (`type: 'time'`) : il partage donc toutes ses options (`validators`, `disabled`…), pas seulement celles listées ici.",
};
