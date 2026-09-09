import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { SwitchComponent } from "@ta/form-input";
import { InputSwitch } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-switch-textbox",
  imports: [SwitchComponent],
  template: ` <ta-input-switch [input]="this.model" [standalone]="true"></ta-input-switch> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSwitchTextboxExample {
  // `match` détermine, une fois pour toutes ici, quel champ interne rendre
  // (`matchtype()`) : `textbox`, `checkbox`, `number`, `datePicker` ou `dropdown`.
  model = new InputSwitch({ key: "field-textbox", label: "Champ dynamique", match: of({ type: "textbox" as const, prop: {} }) });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-switch-checkbox",
  imports: [SwitchComponent],
  template: ` <ta-input-switch [input]="this.model" [standalone]="true"></ta-input-switch> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSwitchCheckboxExample {
  model = new InputSwitch({ key: "field-checkbox", label: "Champ dynamique", match: of({ type: "checkbox" as const, prop: {} }) });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-switch-dropdown",
  imports: [SwitchComponent],
  template: ` <ta-input-switch [input]="this.model" [standalone]="true"></ta-input-switch> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSwitchDropdownExample {
  // Pour la variante `dropdown`, `prop` est fusionné (`Object.assign`) directement
  // sur le modèle : `options$` doit donc y figurer, comme sur un `InputDropdown`.
  model = new InputSwitch({
    key: "field-dropdown",
    label: "Champ dynamique",
    match: of({
      type: "dropdown" as const,
      prop: {
        options$: of([
          { id: "be", name: "Belgique" },
          { id: "fr", name: "France" },
          { id: "lu", name: "Luxembourg" },
        ]),
      },
    }),
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-switch",
  group: "Avancé",
  summary: "Champ dont le type de rendu (texte, case à cocher, liste déroulante…) est décidé à l'exécution par un `Observable`.",
  examples: [
    { title: "Rendu en champ texte", component: TaInputSwitchTextboxExample },
    { title: "Rendu en case à cocher", component: TaInputSwitchCheckboxExample },
    {
      title: "Rendu en liste déroulante",
      description: "`prop` est fusionné sur le modèle (`Object.assign`), pas transmis à un sous-modèle : c'est pourquoi `options$` figure directement dedans.",
      component: TaInputSwitchDropdownExample,
    },
  ],
  notes:
    "Sans observable `match` fourni au modèle, `matchtype()` reste vide et le composant affiche « Aucune valeur sélectionnée » (`@default` du `@switch`) — comportement vérifié dans `switch.component.html`, pas démontré ci-dessus pour ne pas dupliquer un état sans intérêt.",
};
