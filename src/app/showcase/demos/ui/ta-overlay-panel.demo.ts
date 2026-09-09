import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, TaOverlayPanelComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-overlay-panel-menu",
  imports: [ButtonComponent, TaOverlayPanelComponent],
  template: `
    <ta-overlay-panel [panelConfig]="{}" (closed)="this.closes = this.closes + 1">
      <ng-template #panelTrigger>
        <ta-button type="secondary" icon="more_vert" [stopPropagationActivation]="false">Options</ta-button>
      </ng-template>
      <ng-template #panelContent>
        <div class="flex-column g-space-xs p-space-sm">
          <div>Modifier</div>
          <div>Dupliquer</div>
          <div>Supprimer</div>
        </div>
      </ng-template>
    </ta-overlay-panel>
    <p>Fermetures détectées : {{ this.closes }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaOverlayPanelMenuExample {
  // Le clic est capté par `(click)` sur le conteneur du déclencheur, qui appelle
  // `open()` — pas par le bouton projeté lui-même. `ta-button` porte sa propre
  // directive `appStopPropagation`, active par défaut : sans
  // `[stopPropagationActivation]="false"` ci-dessus, elle empêche le clic
  // d'atteindre ce conteneur et le panneau ne s'ouvre jamais (vérifié à
  // l'exécution). `closed` s'émet à la fermeture, qu'elle vienne d'un clic sur
  // le fond ou d'un appel à `close()`.
  closes = 0;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-overlay-panel-position",
  imports: [ButtonComponent, TaOverlayPanelComponent],
  template: `
    <ta-overlay-panel [panelConfig]="{}" position="right">
      <ng-template #panelTrigger>
        <ta-button type="secondary" icon="chevron_right" [stopPropagationActivation]="false">Panneau à droite</ta-button>
      </ng-template>
      <ng-template #panelContent>
        <div class="p-space-sm">Positionné à droite du déclencheur (repli à gauche si la place manque).</div>
      </ng-template>
    </ta-overlay-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaOverlayPanelPositionExample {}

export const DEMO: ComponentDemo = {
  id: "ta-overlay-panel",
  group: "Overlays",
  summary: "Panneau flottant (CDK Overlay) ancré à un déclencheur projeté, avec un contenu projeté séparé.",
  examples: [
    {
      title: "Menu au clic",
      description:
        "`#panelTrigger` fournit l'élément cliquable, `#panelContent` le contenu du panneau ouvert — deux `ng-template` obligatoires, lus par `@ContentChild` (`ngAfterViewInit` journalise et abandonne l'ouverture s'ils manquent).",
      component: TaOverlayPanelMenuExample,
    },
    {
      title: "Position à droite",
      description: "`position=\"right\"` remplace les quatre positions par défaut par deux : à droite du déclencheur, avec repli à gauche.",
      component: TaOverlayPanelPositionExample,
    },
  ],
  notes:
    "Sans `menuComponent` dans `panelConfig`, le panneau ouvert est un `ta-default-panel` (voir sa propre page) qui projette `#panelContent` par injection. `open()` ignore le clic si `panelConfig.manualTrigger` est vrai (déclenchement uniquement programmatique, non démontré ici) ou si le déclencheur n'est pas encore résolu. Piège vérifié à l'exécution : si `#panelTrigger` projette un `ta-button` (ou tout autre composant `@ta/ui` portant `appStopPropagation`), son `stopPropagationActivation` par défaut (`true`) bloque le clic avant qu'il n'atteigne le conteneur du déclencheur — sans le désactiver comme ci-dessus, le panneau ne s'ouvre jamais.",
};
