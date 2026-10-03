import { ChangeDetectionStrategy, Component } from "@angular/core";

import { WhatsappButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-whatsapp-button-modes",
  imports: [WhatsappButtonComponent],
  template: `
    <ta-whatsapp-button mode="full">Nous contacter</ta-whatsapp-button>
    <ta-whatsapp-button mode="logo"></ta-whatsapp-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaWhatsappButtonModesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-whatsapp-button-states",
  imports: [WhatsappButtonComponent],
  template: `
    <ta-whatsapp-button state="classic" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-whatsapp-button>
    <ta-whatsapp-button state="disabled" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-whatsapp-button>
    <ta-whatsapp-button state="inactive" mode="logo" (action)="this.clicks = this.clicks + 1"></ta-whatsapp-button>
    <p>Clics émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaWhatsappButtonStatesExample {
  clicks = 0;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-whatsapp-button-message",
  imports: [WhatsappButtonComponent],
  template: `<ta-whatsapp-button mode="full" message="Bonjour, j'ai une question sur vos services.">Discuter sur WhatsApp</ta-whatsapp-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaWhatsappButtonMessageExample {}

export const DEMO: ComponentDemo = {
  id: "ta-whatsapp-button",
  group: "Boutons",
  summary: "Bouton d'ouverture d'une conversation WhatsApp, avec ou sans libellé, en trois tailles et trois états.",
  examples: [
    {
      title: "Modes",
      description: "`mode=\"full\"` projette le contenu à côté du logo ; `mode=\"logo\"` n'affiche que le logo.",
      component: TaWhatsappButtonModesExample,
    },
    { title: "États", description: "`disabled` et `inactive` bloquent le clic et l'émission de `action` à l'identique.", component: TaWhatsappButtonStatesExample },
    {
      title: "Avec message pré-rempli",
      description: "Avec `state=\"classic\"` (défaut) et `message` renseigné, `handleClick()` ouvre `https://api.whatsapp.com/send?text=…` dans un nouvel onglet avant d'émettre `action`.",
      component: TaWhatsappButtonMessageExample,
    },
  ],
  notes: "Sans `message` (par défaut `null`), le clic n'ouvre aucune fenêtre mais émet quand même `action` — comme `ta-copy-link-button` sans `value`.",
};
