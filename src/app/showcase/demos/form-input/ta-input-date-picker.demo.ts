import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DatePickerComponent } from "@ta/form-input";
import { InputDatePicker } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-date-picker-basic",
  imports: [DatePickerComponent],
  template: ` <ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDatePickerBasicExample {
  model = new InputDatePicker({ key: "date", label: "Date de rendez-vous" });

  constructor() {
    // `IInputDatePicker.value` est typé `string | { start; end }`, pas `Date`,
    // alors que la classe elle-même stocke un `Date` (`onDateSelect()` assigne
    // `this.input.value = event.value`, un `Date`) : impossible de passer une
    // valeur initiale `Date` dans les options du constructeur. L'assigner après
    // coup passe par le même setter et fonctionne, car `createFormControl()`
    // ne lit `this.value` qu'à `ngOnInit`, plus tard.
    this.model.value = new Date(2026, 5, 15);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-date-picker-bounds",
  imports: [DatePickerComponent],
  template: ` <ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDatePickerBoundsExample {
  model = new InputDatePicker({ key: "date-min", label: "Date au plus tôt aujourd'hui", minDate: "today" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-date-picker-range",
  imports: [DatePickerComponent],
  template: ` <ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDatePickerRangeExample {
  model = new InputDatePicker({ key: "date-range", label: "Période", rangeEnabled: true });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-date-picker-disabled",
  imports: [DatePickerComponent],
  template: ` <ta-input-date-picker [input]="this.model" [standalone]="true"></ta-input-date-picker> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDatePickerDisabledExample {
  // `disabled` doit être passé à la construction : le conteneur reçoit alors
  // `[class.disabled]`, qui applique `pointer-events: none` (date-picker.component.scss) —
  // le champ devient réellement inerte, pas seulement grisé.
  model = new InputDatePicker({ key: "date-locked", label: "Non modifiable", disabled: true });

  constructor() {
    // Voir `TaInputDatePickerBasicExample` : `value` n'accepte pas de `Date` dans
    // les options du constructeur, seulement après coup.
    this.model.value = new Date(2026, 0, 1);
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-input-date-picker",
  group: "Date et heure",
  summary: "Sélecteur de date basé sur Angular Material, piloté par un modèle `InputDatePicker`.",
  examples: [
    { title: "Valeur initiale", component: TaInputDatePickerBasicExample },
    {
      title: "Borné à partir d'aujourd'hui",
      description: "`minDate: \"today\"` est converti en `Date` du jour par `parseDate()` ; `maxDate` accepte la même valeur.",
      component: TaInputDatePickerBoundsExample,
    },
    {
      title: "Plage de dates",
      description: "`rangeEnabled: true` bascule le rendu vers `mat-date-range-input`, avec un `FormGroup` `{ start, end }` propre au composant.",
      component: TaInputDatePickerRangeExample,
    },
    { title: "Désactivé", component: TaInputDatePickerDisabledExample },
  ],
};
