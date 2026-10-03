import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Subject, of } from "rxjs";

import { InputsComponent } from "@ta/form-basic";
import { InputCheckBox, InputDropdown, InputTextBox } from "@ta/form-model";
import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-inputs-types",
  imports: [InputsComponent],
  template: `
    <ta-inputs [input]="this.textModel" [standalone]="true"></ta-inputs>
    <ta-inputs [input]="this.dropdownModel" [standalone]="true"></ta-inputs>
    <ta-inputs [input]="this.checkboxModel" [standalone]="true"></ta-inputs>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputsTypesExample {
  // `ta-inputs` lit `input.controlType` pour choisir, parmi les composants
  // @ta/form-input, celui qui doit rendre le modèle reçu : c'est le
  // dispatcher central du système de formulaires, jamais un champ en soi.
  textModel = new InputTextBox({ key: "name", label: "Nom", value: "Dupont" });

  dropdownModel = new InputDropdown({
    key: "country",
    label: "Pays",
    options$: of([
      { id: "fr", name: "France" },
      { id: "be", name: "Belgique" },
    ]),
  });

  checkboxModel = new InputCheckBox({ key: "active", label: "Actif", value: true });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-inputs-focus",
  imports: [InputsComponent, ButtonComponent],
  template: `
    <div class="flex-column g-space-sm">
      <ta-button size="small" (action)="this.focus$.next()">Donner le focus</ta-button>
      <ta-inputs [input]="this.model" [standalone]="true" [onFocus]="this.focus$"></ta-inputs>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputsFocusExample {
  model = new InputTextBox({ key: "search", label: "Recherche" });

  // Chaque émission de `onFocus` déclenche `nativeElement.focus()` sur le champ
  // rendu, après un court délai — un abonnement porté par `TaAbstractInputComponent`,
  // la classe commune à tous les types d'entrée (`abstract.component.ts`).
  focus$ = new Subject<void>();
}

export const DEMO: ComponentDemo = {
  id: "ta-inputs",
  group: "Formulaire",
  summary: "Dispatcher qui rend le composant @ta/form-input adapté à un modèle `InputBase`, seul ou dans un `ta-form`.",
  examples: [
    {
      title: "Types rendus",
      description: "`controlType` détermine seul le composant instancié ; le même `<ta-inputs>` rend un champ texte, un menu déroulant ou une case à cocher selon le modèle reçu.",
      component: TaInputsTypesExample,
    },
    {
      title: "Focus programmé",
      description: "Chaque émission de `onFocus` focalise le champ rendu.",
      component: TaInputsFocusExample,
    },
  ],
  notes:
    "`standalone=true` fait créer son propre `FormControl` à chaque champ, hors de tout `FormGroup` parent — c'est ce que fait `<ta-form>` en interne, mais avec un groupe partagé entre tous ses champs. L'entrée `space` (`space = input<boolean>(true)`) est relayée jusqu'aux composants texte et menu déroulant, mais n'y est lue nulle part : elle n'a aujourd'hui aucun effet observable — vérifié dans `text-box.component.ts` et `dropdown.component.ts`, qui la déclarent sans jamais la référencer dans leur template.",
};
