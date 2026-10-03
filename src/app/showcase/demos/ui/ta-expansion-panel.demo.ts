import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectionStrategy } from "@angular/core";

import { ExpansionPanelInput, TaExpansionPanelComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-expansion-panel-sections",
  imports: [TaExpansionPanelComponent],
  template: `
    <ta-expansion-panel [templates]="this.panels"></ta-expansion-panel>

    <ng-template #titleInfo>Informations générales</ng-template>
    <ng-template #contentInfo>
      <p>Premier panneau, replié par défaut comme tous les panneaux de mat-accordion.</p>
    </ng-template>

    <ng-template #titleBilling>Facturation</ng-template>
    <ng-template #contentBilling>
      <p>Second panneau, indépendant du premier — chacun s'ouvre et se ferme séparément.</p>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaExpansionPanelSectionsExample implements OnInit {
  // `templates` attend des `TemplateRef`, capturables seulement via `@ViewChild` —
  // ici `{ static: true }` car ces `ng-template` de premier niveau ne dépendent
  // d'aucune directive structurelle, donc résolus avant `ngOnInit`.
  @ViewChild("titleInfo", { static: true }) private _titleInfo!: TemplateRef<unknown>;
  @ViewChild("contentInfo", { static: true }) private _contentInfo!: TemplateRef<unknown>;
  @ViewChild("titleBilling", { static: true }) private _titleBilling!: TemplateRef<unknown>;
  @ViewChild("contentBilling", { static: true }) private _contentBilling!: TemplateRef<unknown>;

  panels: ExpansionPanelInput[] = [];

  ngOnInit(): void {
    this.panels = [
      { title: this._titleInfo, content: this._contentInfo },
      { title: this._titleBilling, content: this._contentBilling },
    ];
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-expansion-panel",
  group: "Conteneurs",
  summary: "Accordéon Material : une entrée `templates`, un couple `{ title, content }` de `TemplateRef` par panneau.",
  examples: [
    {
      title: "Sections",
      layout: "stack",
      description:
        "Deux panneaux Material qui se déplient et se replient indépendamment, mais restent vides : voir « Bug de bibliothèque vérifié » ci-dessous.",
      component: TaExpansionPanelSectionsExample,
    },
  ],
  notes:
    "Bug de bibliothèque vérifié à l'exécution : `TaExpansionPanelComponent` n'importe que `MatExpansionModule` (`imports: [MatExpansionModule]` dans `expansion-panel.component.ts`), pas `NgTemplateOutlet` — pourtant utilisé deux fois dans son propre gabarit (`[ngTemplateOutlet]=\"template.title\"` / `.content`). La console affiche `NG0303 : Can't bind to 'ngTemplateOutlet' since it isn't a known property of 'ng-template'` dès le premier rendu. Conséquence : quels que soient les `TemplateRef` passés dans `templates` (vérifiés valides ici, capturés via `@ViewChild`, transmis intacts jusqu'au composant — voir le code de l'exemple), ni le titre ni le contenu d'un panneau ne s'affichent jamais ; seuls le squelette Material (bandeau, chevron) et l'ouverture/fermeture au clic restent fonctionnels, gardés dans cette démo pour le montrer honnêtement plutôt que de fabriquer un rendu qui n'existe pas. Sans `templates` (`[]` par défaut), `mat-accordion` reste en plus entièrement vide : aucun `<ng-content>` de repli n'existe (vérifié) pour un contenu projeté directement dans `<ta-expansion-panel>...</ta-expansion-panel>`. Défaut de la bibliothèque, hors périmètre de cette vitrine.",
};
