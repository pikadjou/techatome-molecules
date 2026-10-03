import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LayoutNotFoundComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-not-found-default",
  imports: [LayoutNotFoundComponent],
  template: ` <ta-layout-not-found></ta-layout-not-found> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutNotFoundDefaultExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-not-found",
  group: "Mise en page",
  summary: "Page d'erreur 404 statique, sans input : icône, titre et texte traduits (clés `ui.layout.notfound.*`), avec un bouton de retour à l'accueil.",
  examples: [
    {
      title: "Contenu par défaut",
      description:
        "Aucun input : le contenu est entièrement fixe. Vérifié dans not-found.component.ts (`goToHome()`) : le bouton « Retour à l'accueil » appelle `this._router.navigateByUrl('/')` — un vrai changement de route, donc cliquer ce bouton ci-dessous vous fera quitter la vitrine plutôt que de simplement illustrer l'action.",
      component: TaLayoutNotFoundDefaultExample,
    },
  ],
};
