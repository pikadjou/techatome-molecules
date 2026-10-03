import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ShareButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-share-button-sizes",
  imports: [ShareButtonComponent],
  template: `
    <ta-share-button size="small" shareTitle="Techatome" url="https://techatome.be">Petit</ta-share-button>
    <ta-share-button size="medium" shareTitle="Techatome" url="https://techatome.be">Moyen</ta-share-button>
    <ta-share-button size="large" shareTitle="Techatome" url="https://techatome.be">Grand</ta-share-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaShareButtonSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-share-button-states",
  imports: [ShareButtonComponent],
  template: `
    <ta-share-button state="classic" (action)="this.clicks = this.clicks + 1">Classic</ta-share-button>
    <ta-share-button state="disabled" (action)="this.clicks = this.clicks + 1">Disabled</ta-share-button>
    <ta-share-button state="inactive" (action)="this.clicks = this.clicks + 1">Inactive</ta-share-button>
    <p>Partages émis : {{ this.clicks }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaShareButtonStatesExample {
  // `handleClick()` retourne immédiatement si `state()` n'est pas `classic` :
  // ni tentative de partage ni émission de `action` pour `disabled`/`inactive`.
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-share-button",
  group: "Boutons",
  summary: "Bouton de partage natif (`navigator.share`), en trois tailles et trois états.",
  examples: [
    { title: "Tailles", description: "`size` mappe vers l'icône `sm`/`md`/`lg` via `getIconSize()`.", component: TaShareButtonSizesExample },
    {
      title: "États",
      description: "`disabled` et `inactive` bloquent le partage et l'émission de `action` à l'identique ; seule leur couleur diffère.",
      component: TaShareButtonStatesExample,
    },
  ],
  notes:
    "`handleClick()` n'appelle `navigator.share()` que si l'API existe dans le navigateur et qu'au moins `message` ou `url` est renseigné ; sinon (ou si l'utilisateur annule le partage), `action` s'émet quand même. `navigator.share` est absent de la plupart des navigateurs de bureau : sur cette vitrine, le clic a de bonnes chances de n'ouvrir aucune boîte de dialogue tout en émettant `action`.",
};
