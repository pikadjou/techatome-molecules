import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-button-types",
  imports: [ButtonComponent],
  template: `
    <ta-button type="primary">Primary</ta-button>
    <ta-button type="secondary">Secondary</ta-button>
    <ta-button type="tertiary">Tertiary</ta-button>
    <ta-button type="danger">Danger</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonTypesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-sizes",
  imports: [ButtonComponent],
  template: `
    <ta-button size="small">Small</ta-button>
    <ta-button size="medium">Medium</ta-button>
    <ta-button size="large">Large</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-states",
  imports: [ButtonComponent],
  template: `
    <ta-button state="classic">Classic</ta-button>
    <ta-button state="disabled">Disabled</ta-button>
    <ta-button state="inactive">Inactive</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonStatesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-button-icon",
  imports: [ButtonComponent],
  template: `
    <ta-button icon="add">Ajouter</ta-button>
    <ta-button icon="edit" type="secondary">Modifier</ta-button>
    <ta-button icon="delete" type="danger">Supprimer</ta-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaButtonIconExample {}

export const DEMO: ComponentDemo = {
  id: "ta-button",
  group: "Boutons",
  summary: "Bouton d'action, décliné en quatre types, trois tailles et trois états.",
  examples: [
    { title: "Types", description: "Quatre intentions visuelles.", component: TaButtonTypesExample },
    { title: "Tailles", component: TaButtonSizesExample },
    {
      title: "États",
      // `handleClick()` n'émet `action` que si l'état vaut `classic` : les deux
      // états non-classiques bloquent donc le clic à l'identique, et ne se
      // distinguent que par leurs jetons de couleur.
      description: "Les deux états non-classiques bloquent le clic ; seule leur couleur diffère.",
      component: TaButtonStatesExample,
    },
    { title: "Avec icône", component: TaButtonIconExample },
  ],
};
