import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, EmptyComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-empty-default",
  imports: [ButtonComponent, EmptyComponent],
  template: `
    <ta-empty text="Aucun résultat" subtitle="Essayez d'élargir vos critères de recherche.">
      <ta-button emptyAction type="secondary" icon="refresh">Réinitialiser les filtres</ta-button>
    </ta-empty>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaEmptyDefaultExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-empty-light",
  imports: [EmptyComponent],
  template: `<ta-empty [isLight]="true" text="Aucun document"></ta-empty>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaEmptyLightExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-empty-content",
  imports: [EmptyComponent],
  template: `
    <ta-empty [isEmpty]="false" text="Aucun résultat">
      <ul>
        <li>Devis n°2024-018</li>
        <li>Devis n°2024-021</li>
      </ul>
    </ta-empty>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaEmptyContentExample {}

export const DEMO: ComponentDemo = {
  id: "ta-empty",
  group: "Conteneurs",
  summary: "État vide standard (icône, titre, sous-titre, action) ou passe-plat vers le contenu projeté quand `isEmpty` est faux.",
  examples: [
    {
      title: "Complet, avec action",
      layout: "stack",
      description: "Le contenu projeté avec le sélecteur `[emptyAction]` s'affiche sous le sous-titre, uniquement quand l'état est vide.",
      component: TaEmptyDefaultExample,
    },
    {
      title: "Version légère",
      layout: "stack",
      description: "`isLight=\"true\"` masque l'icône et le sous-titre : seul le titre reste, dans un style plus discret.",
      component: TaEmptyLightExample,
    },
    {
      title: "Avec contenu (non vide)",
      layout: "stack",
      description: "`isEmpty=\"false\"` bascule vers `<ng-content>` : `ta-empty` devient un simple passe-plat, tout le reste de ses entrées est ignoré.",
      component: TaEmptyContentExample,
    },
  ],
};
