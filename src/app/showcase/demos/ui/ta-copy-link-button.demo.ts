import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CopyLinkButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-copy-link-button-sizes",
  imports: [CopyLinkButtonComponent],
  template: `
    <ta-copy-link-button size="small" value="https://techatome.be">Copier</ta-copy-link-button>
    <ta-copy-link-button size="medium" value="https://techatome.be">Copier</ta-copy-link-button>
    <ta-copy-link-button size="large" value="https://techatome.be">Copier</ta-copy-link-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCopyLinkButtonSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-copy-link-button-states",
  imports: [CopyLinkButtonComponent],
  template: `
    <ta-copy-link-button state="classic" (action)="this.clicks = this.clicks + 1">Classic</ta-copy-link-button>
    <ta-copy-link-button state="disabled" (action)="this.clicks = this.clicks + 1">Disabled</ta-copy-link-button>
    <ta-copy-link-button state="inactive" (action)="this.clicks = this.clicks + 1">Inactive</ta-copy-link-button>
    <p>Copies déclenchées : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCopyLinkButtonStatesExample {
  // `handleClick()` retourne immédiatement si `state()` n'est pas `classic` :
  // ni copie ni émission de `action` pour `disabled` et `inactive`.
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-copy-link-button",
  group: "Boutons",
  summary: "Bouton qui copie une valeur dans le presse-papier au clic, en trois tailles et trois états.",
  examples: [
    { title: "Tailles", description: "Les trois valeurs de `size`, chacune copiant `value` au clic.", component: TaCopyLinkButtonSizesExample },
    {
      title: "États",
      description: "`disabled` et `inactive` bloquent la copie et l'émission de `action` à l'identique.",
      component: TaCopyLinkButtonStatesExample,
    },
  ],
  notes:
    "Sans `value` (par défaut `null`), le clic n'appelle pas `navigator.clipboard.writeText` mais émet quand même `action`.",
};
