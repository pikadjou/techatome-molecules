import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ItsmeButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-itsme-button-modes",
  imports: [ItsmeButtonComponent],
  template: `
    <ta-itsme-button mode="full">Se connecter avec itsme</ta-itsme-button>
    <ta-itsme-button mode="logo"></ta-itsme-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaItsmeButtonModesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-itsme-button-sizes",
  imports: [ItsmeButtonComponent],
  template: `
    <ta-itsme-button size="small" mode="logo"></ta-itsme-button>
    <ta-itsme-button size="medium" mode="logo"></ta-itsme-button>
    <ta-itsme-button size="large" mode="logo"></ta-itsme-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaItsmeButtonSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-itsme-button-states",
  imports: [ItsmeButtonComponent],
  template: `
    <ta-itsme-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-itsme-button>
    <ta-itsme-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-itsme-button>
    <ta-itsme-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-itsme-button>
    <p>Clics émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaItsmeButtonStatesExample {
  // `disabled` et `inactive` bloquent l'émission de `action` à l'identique
  // dans `handleClick()` ; seule leur couleur diffère.
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-itsme-button",
  group: "Boutons",
  summary: "Bouton de connexion itsme, avec ou sans libellé, en trois tailles et trois états.",
  examples: [
    {
      title: "Modes",
      description: "`mode=\"full\"` projette le contenu à côté du logo ; `mode=\"logo\"` n'affiche que le logo.",
      component: TaItsmeButtonModesExample,
    },
    { title: "Tailles", component: TaItsmeButtonSizesExample },
    {
      title: "États",
      description: "`disabled` et `inactive` bloquent l'émission de `action` à l'identique ; seule leur couleur diffère.",
      component: TaItsmeButtonStatesExample,
    },
  ],
};
