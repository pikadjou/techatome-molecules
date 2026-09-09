import { ChangeDetectionStrategy, Component } from "@angular/core";

import { VeriffButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-veriff-button-modes",
  imports: [VeriffButtonComponent],
  template: `
    <ta-veriff-button mode="full">Vérifier mon identité</ta-veriff-button>
    <ta-veriff-button mode="logo"></ta-veriff-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaVeriffButtonModesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-veriff-button-sizes",
  imports: [VeriffButtonComponent],
  template: `
    <ta-veriff-button size="small" mode="logo"></ta-veriff-button>
    <ta-veriff-button size="medium" mode="logo"></ta-veriff-button>
    <ta-veriff-button size="large" mode="logo"></ta-veriff-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaVeriffButtonSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-veriff-button-states",
  imports: [VeriffButtonComponent],
  template: `
    <ta-veriff-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-veriff-button>
    <ta-veriff-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-veriff-button>
    <ta-veriff-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-veriff-button>
    <p>Clics émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaVeriffButtonStatesExample {
  // `handleClick()` n'émet `action` que si `state()` vaut `classic`
  // (vérifié dans veriff-button.component.ts) ; les deux autres états sont sans effet.
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-veriff-button",
  group: "Boutons",
  summary: "Bouton de vérification d'identité Veriff, avec ou sans libellé, en trois tailles et trois états.",
  examples: [
    {
      title: "Modes",
      description: "`mode=\"full\"` projette le contenu à côté du logo ; `mode=\"logo\"` n'affiche que le logo.",
      component: TaVeriffButtonModesExample,
    },
    { title: "Tailles", component: TaVeriffButtonSizesExample },
    { title: "États", description: "`disabled` et `inactive` bloquent l'émission de `action` ; seule leur couleur diffère.", component: TaVeriffButtonStatesExample },
  ],
};
