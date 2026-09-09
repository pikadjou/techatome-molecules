import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LinkComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-link-states",
  imports: [LinkComponent],
  template: `
    <ta-link state="classic" (action)="this.clicks = this.clicks + 1">Classic</ta-link>
    <ta-link state="disabled" (action)="this.clicks = this.clicks + 1">Disabled</ta-link>
    <ta-link state="inactive" (action)="this.clicks = this.clicks + 1">Inactive</ta-link>
    <p>Clics émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLinkStatesExample {
  // `handleClick()` n'émet `action` que si `state()` vaut `classic` : les deux
  // états non-classiques bloquent l'émission à l'identique.
  clicks = 0;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-link-style",
  imports: [LinkComponent],
  template: `
    <ta-link [underline]="true" [bold]="false">Souligné</ta-link>
    <ta-link [underline]="false" [bold]="false">Sans soulignement</ta-link>
    <ta-link [underline]="true" [bold]="true">Souligné et gras</ta-link>
    <ta-link [underline]="false" [bold]="true">Gras seul</ta-link>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLinkStyleExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-link-icon-sizes",
  imports: [LinkComponent],
  template: `
    <ta-link size="xs" icon="search">xs</ta-link>
    <ta-link size="md" icon="search">md</ta-link>
    <ta-link size="xl" icon="search">xl</ta-link>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLinkIconSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-link",
  group: "Bases",
  summary: "Lien de contenu projeté, avec icône optionnelle, soulignement et graisse indépendants, trois états et sept tailles.",
  examples: [
    {
      title: "États",
      description: "`disabled` et `inactive` bloquent l'émission de `action` à l'identique ; seule leur couleur diffère.",
      component: TaLinkStatesExample,
    },
    { title: "Soulignement et gras", description: "`underline` (vrai par défaut) et `bold` se combinent librement.", component: TaLinkStyleExample },
    { title: "Icône et tailles", component: TaLinkIconSizesExample },
  ],
};
