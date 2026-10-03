import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, TaDefaultPanelComponent, TaOverlayPanelComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-default-panel-overlay",
  imports: [ButtonComponent, TaOverlayPanelComponent],
  template: `
    <ta-overlay-panel [panelConfig]="{ menuComponent: this.defaultPanel }">
      <ng-template #panelTrigger>
        <ta-button type="secondary" icon="expand_more" [stopPropagationActivation]="false">Ouvrir le panneau</ta-button>
      </ng-template>
      <ng-template #panelContent>
        <div class="p-space-md">Contenu projeté par #panelContent, affiché par ta-default-panel via l'injection MENU_TEMPLATE.</div>
      </ng-template>
    </ta-overlay-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDefaultPanelOverlayExample {
  // `TaDefaultPanelComponent` est déjà le `menuComponent` par défaut de
  // `ta-overlay-panel` (voir overlay-panel.component.ts) : le renseigner
  // explicitement ne change rien ici, mais rend visible quel composant
  // affiche réellement le panneau ouvert par le bouton ci-dessus.
  // `[stopPropagationActivation]="false"` sur ce bouton est nécessaire : sa
  // directive `appStopPropagation` (active par défaut) bloquerait sinon le
  // clic avant qu'il n'atteigne le conteneur du déclencheur de `ta-overlay-panel`
  // — vérifié à l'exécution, le panneau ne s'ouvrait pas sans ce réglage.
  readonly defaultPanel = TaDefaultPanelComponent;
}

export const DEMO: ComponentDemo = {
  id: "ta-default-panel",
  group: "Overlays",
  summary: "Panneau générique qui projette un `TemplateRef` reçu par injection ; c'est le contenu par défaut d'un `ta-overlay-panel`.",
  examples: [
    {
      title: "Via ta-overlay-panel",
      description:
        "Cliquer le bouton ouvre l'overlay CDK ; `OverlayService.openMenu()` instancie `ta-default-panel` en lui injectant `MENU_TEMPLATE` (le `#panelContent` ci-dessus) et `MENU_MAX_HEIGHT`, que le composant projette avec `ngTemplateOutlet`.",
      component: TaDefaultPanelOverlayExample,
    },
  ],
  notes:
    "`ta-default-panel` ne peut pas se démontrer monté seul, hors overlay : ses deux entrées réelles sont les jetons d'injection optionnels `MENU_TEMPLATE`/`MENU_MAX_HEIGHT`, fournis uniquement par `OverlayService.openMenu()` (donc par `ta-overlay-panel`). Sans eux, le message de repli censé s'afficher (« Ceci est le template par defaut... ») ne s'affiche jamais : il est écrit dans un `<ng-template>` sans directive structurelle ni `ngTemplateOutlet` qui l'active, donc jamais instancié (vérifié dans `default-panel.component.html`). L'entrée `template` déclarée par la classe n'est elle non plus jamais lue par le template du composant (vérifié) : lui donner une valeur ne changerait rien à ce qui s'affiche.",
};
