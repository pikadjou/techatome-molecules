import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from "@angular/core";
import { Validators } from "@angular/forms";

import { of } from "rxjs";

import { ENotificationCode } from "@ta/notification";
import { FormComponent } from "@ta/form-basic";
import { IInputsError, InputBase, InputCheckBox, InputDropdown, InputEmail, InputPanel, InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-form-basic",
  imports: [FormComponent, JsonPipe],
  template: `
    <ta-form [inputs]="this.inputs" (valid)="this.result.set($event)" (isFormValid)="this.formValid.set($event)"></ta-form>
    <p>Formulaire valide : {{ this.formValid() }}</p>
    @if (this.result(); as result) {
      <pre>{{ result | json }}</pre>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFormBasicExample {
  result = signal<unknown>(null);
  formValid = signal(false);

  inputs: InputBase<any>[] = [
    new InputPanel({
      key: "identity",
      label: "Identité",
      containerClass: ["highlight-title"],
      contentClass: "flex-column g-space-md",
      children: [
        new InputTextBox({ key: "firstName", label: "Prénom", validators: [Validators.required] }),
        new InputEmail({ key: "email", label: "Courriel", validators: [Validators.required] }),
        new InputDropdown({
          key: "role",
          label: "Rôle",
          options$: of([
            { id: "admin", name: "Administrateur" },
            { id: "editor", name: "Éditeur" },
          ]),
        }),
        new InputCheckBox({ key: "newsletter", label: "Recevoir la newsletter" }),
      ],
    }),
  ];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-form-loading",
  imports: [FormComponent],
  template: `<ta-form [inputs]="this.inputs" [loader]="true"></ta-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFormLoadingExample {
  inputs: InputBase<any>[] = [new InputTextBox({ key: "value", label: "Valeur" })];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-form-error",
  imports: [FormComponent],
  template: `<ta-form [inputs]="this.inputs" [error]="this.error"></ta-form>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFormErrorExample {
  inputs: InputBase<any>[] = [new InputTextBox({ key: "value", label: "Valeur" })];

  error: IInputsError = { status: ENotificationCode.error, message: "La sauvegarde a échoué côté serveur." };

  // `ta-form` relaie `error` à un `ta-notification-inline` interne, qui remplace
  // le bouton de soumission par le message tant que `error.status` reste non nul.
  // Ce composant bascule sa visibilité via un `effect()` qui écrit une propriété
  // simple plutôt qu'un signal : sur une page `OnPush` figée, rien ne redéclenche
  // la détection de changements après ce premier `effect` (voir la démo
  // `ta-notification-inline` pour le détail). Le second passage forcé ci-dessous
  // est le seul moyen honnête d'afficher le message tout de suite.
  private _cdr = inject(ChangeDetectorRef);

  constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-form-live",
  imports: [FormComponent, JsonPipe],
  template: `
    <ta-form [inputs]="this.inputs" [canDisplayButton]="false" [onLive]="true" (valid)="this.result.set($event)"></ta-form>
    @if (this.result(); as result) {
      <pre>{{ result | json }}</pre>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFormLiveExample {
  result = signal<unknown>(null);

  inputs: InputBase<any>[] = [new InputTextBox({ key: "search", label: "Rechercher" })];
}

export const DEMO: ComponentDemo = {
  id: "ta-form",
  group: "Formulaire",
  summary: "Formulaire complet rendu depuis un modèle `InputBase[]`, avec validation, soumission et états de chargement/erreur.",
  examples: [
    {
      title: "Formulaire complet",
      layout: "stack",
      description:
        "`valid` n'émet que si le formulaire est valide (`isValid()` combine `form.valid` et l'absence de chargement) ; `isFormValid` reflète l'état de validité à chaque changement, indépendamment de la soumission.",
      component: TaFormBasicExample,
    },
    {
      title: "Chargement",
      layout: "stack",
      description: "`loader=true` recouvre le bouton d'un `ta-loader` et force `isValid()` à `false` tant qu'il reste actif : impossible de soumettre pendant le chargement.",
      component: TaFormLoadingExample,
    },
    {
      title: "Erreur",
      layout: "stack",
      description: "`error` route vers un `ta-notification-inline` interne qui remplace le bouton de soumission par le message.",
      component: TaFormErrorExample,
    },
    {
      title: "Soumission automatique, sans bouton",
      layout: "stack",
      description: "`onLive=true` soumet automatiquement à chaque changement de valeur (déduplication par comparaison profonde) ; `canDisplayButton=false` masque le bouton devenu inutile.",
      component: TaFormLiveExample,
    },
  ],
  notes:
    "Trois entrées ne sont pas démontrées ci-dessus. `askOnDestroy` déclenche une soumission automatique à la destruction du composant (`ngOnDestroy`), pour sauvegarder un formulaire quitté sans clic explicite — non démontrable sur une page statique. `askValidation$` (`Observable<null>`) permet à un parent de déclencher `onSubmit()` depuis l'extérieur, sans bouton propre au formulaire. `border`, elle, est déclarée (`border = input<boolean>(true)`) mais n'est lue nulle part dans le template ni la logique du composant : elle n'a aujourd'hui aucun effet observable — vérifié dans `form.component.html` et `form.component.ts`.",
};
