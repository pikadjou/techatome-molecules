import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TypedMessageComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-typed-message-types",
  imports: [TypedMessageComponent],
  template: `
    <ta-typed-message type="info" text="Les modifications sont enregistrées automatiquement."></ta-typed-message>
    <ta-typed-message type="success" text="Le paiement a été validé."></ta-typed-message>
    <ta-typed-message type="warning" text="Cette action est irréversible."></ta-typed-message>
    <ta-typed-message type="danger" text="La sauvegarde a échoué."></ta-typed-message>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTypedMessageTypesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-typed-message",
  group: "Affichage",
  summary: "Message d'alerte typé, avec icône assortie au niveau (`MessageLevel`).",
  examples: [
    {
      title: "Types",
      layout: "stack",
      description:
        "Les quatre valeurs de `type` (`MessageLevel`, @ta/utils), chacune avec son icône (`help_outline`/`check_circle_outline`/`warning_amber`/`error_outline`) et sa classe `alert-<type>`. `text` passe par `translate`.",
      component: TaTypedMessageTypesExample,
    },
  ],
};
