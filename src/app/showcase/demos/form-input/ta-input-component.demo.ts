import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from "@angular/core";

import { ComponentInputComponent } from "@ta/form-input";
import { InputComponent, TypeComponentInputToken } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-component-basic",
  imports: [ComponentInputComponent],
  template: `
    <ta-input-component [input]="this.model" [standalone]="true"></ta-input-component>
    <ng-template #picker let-selectedValue$="selectedValue$">
      <div class="flex-column g-space-sm">
        @for (option of this.options; track option) {
          <div class="pointer p-space-sm" (click)="selectedValue$.next(option)">{{ option }}</div>
        }
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputComponentBasicExample implements AfterViewInit {
  // `InputComponent` exige un `template` : la modale interne
  // (`ta-component-selector-modal`) le projette avec `selectedValue$` en contexte.
  // Le `ViewChild` n'existe qu'après la vue initiale, d'où l'affectation ici.
  @ViewChild("picker") private _picker!: TemplateRef<TypeComponentInputToken>;

  readonly options = ["Rouge", "Vert", "Bleu"];

  model = new InputComponent({ key: "color", label: "Couleur" });

  ngAfterViewInit(): void {
    this.model.template = this._picker;
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-component-disabled",
  imports: [ComponentInputComponent],
  template: `
    <ta-input-component [input]="this.model" [standalone]="true"></ta-input-component>
    <ng-template #picker let-selectedValue$="selectedValue$">
      <div class="flex-column g-space-sm">
        @for (option of this.options; track option) {
          <div class="pointer p-space-sm" (click)="selectedValue$.next(option)">{{ option }}</div>
        }
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputComponentDisabledExample implements AfterViewInit {
  @ViewChild("picker") private _picker!: TemplateRef<TypeComponentInputToken>;

  readonly options = ["Rouge", "Vert", "Bleu"];

  // `disabled` passé à la construction : le champ lit `[readonly]="this.input.disabled"`
  // directement sur l'input natif, en plus de désactiver son FormControl.
  model = new InputComponent({ key: "color-locked", label: "Couleur imposée", value: "Bleu", disabled: true });

  ngAfterViewInit(): void {
    this.model.template = this._picker;
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-input-component",
  group: "Avancé",
  summary:
    "Champ texte lié à un `FormControl`, complété par une modale de sélection (`ta-component-selector-modal`) qui projette un `TemplateRef` fourni par le modèle `InputComponent`.",
  examples: [
    {
      title: "Champ éditable avec sélection",
      description:
        "Le champ est lié à `formControl` : on peut y taper directement, ou cliquer l'icône pour ouvrir la modale, qui projette le `TemplateRef` du modèle. Choisir une valeur appelle `selectedValue$.next(...)`, ce qui met à jour `model.value` et ferme la modale.",
      component: TaInputComponentBasicExample,
    },
    { title: "Désactivé", component: TaInputComponentDisabledExample },
  ],
};
