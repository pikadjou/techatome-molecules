import { ChangeDetectionStrategy, Component } from "@angular/core";

import { MessengerButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-messenger-button-modes",
  imports: [MessengerButtonComponent],
  template: `
    <ta-messenger-button mode="full">Envoyer via Messenger</ta-messenger-button>
    <ta-messenger-button mode="logo"></ta-messenger-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMessengerButtonModesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-messenger-button-sizes",
  imports: [MessengerButtonComponent],
  template: `
    <ta-messenger-button size="small" mode="logo"></ta-messenger-button>
    <ta-messenger-button size="medium" mode="logo"></ta-messenger-button>
    <ta-messenger-button size="large" mode="logo"></ta-messenger-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMessengerButtonSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-messenger-button-states",
  imports: [MessengerButtonComponent],
  template: `
    <ta-messenger-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-messenger-button>
    <ta-messenger-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-messenger-button>
    <ta-messenger-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-messenger-button>
    <p>Clics émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaMessengerButtonStatesExample {
  // `disabled` et `inactive` bloquent l'émission de `action` à l'identique
  // dans `handleClick()` ; seule leur couleur diffère.
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-messenger-button",
  group: "Boutons",
  summary: "Bouton de partage Messenger, avec ou sans libellé, en trois tailles et trois états.",
  examples: [
    {
      title: "Modes",
      description: "`mode=\"full\"` projette le contenu à côté du logo ; `mode=\"logo\"` n'affiche que le logo.",
      component: TaMessengerButtonModesExample,
    },
    { title: "Tailles", component: TaMessengerButtonSizesExample },
    {
      title: "États",
      description: "`disabled` et `inactive` bloquent l'émission de `action` à l'identique ; seule leur couleur diffère.",
      component: TaMessengerButtonStatesExample,
    },
  ],
  notes:
    "Quand `url` est renseignée et `state` vaut `classic`, `handleClick()` ouvre en plus une fenêtre Messenger (`window.open`) vers ce lien avant d'émettre `action` ; sans `url`, seule l'émission a lieu. Non démontré ici pour ne pas ouvrir de fenêtre depuis la vitrine.",
};
