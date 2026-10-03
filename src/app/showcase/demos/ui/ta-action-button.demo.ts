import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ActionButtonComponent, ActionButtonData } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-action-button-single",
  imports: [ActionButtonComponent],
  template: `
    <ta-action-button [actions]="this.actions"></ta-action-button>
    <p>{{ this.lastAction }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaActionButtonSingleExample {
  lastAction = "Aucune action déclenchée.";

  // Avec une seule action, `openBullet()` appelle directement son `callback` :
  // pas de menu à ouvrir, le clic sur la puce agit immédiatement.
  readonly actions: ActionButtonData[] = [
    { icon: "edit", label: "Modifier", callback: () => (this.lastAction = "« Modifier » déclenché.") },
  ];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-action-button-multiple",
  imports: [ActionButtonComponent],
  template: `
    <ta-action-button [actions]="this.actions"></ta-action-button>
    <p>{{ this.lastAction }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaActionButtonMultipleExample {
  lastAction = "Aucune action déclenchée.";

  // Avec plusieurs actions, le premier clic sur la puce bascule `isOpen` et
  // déploie la liste ; il faut un second clic, sur une icône du menu, pour
  // déclencher son `callback`.
  readonly actions: ActionButtonData[] = [
    { icon: "edit", label: "Modifier", callback: () => (this.lastAction = "« Modifier » déclenché.") },
    { icon: "delete", label: "Supprimer", callback: () => (this.lastAction = "« Supprimer » déclenché.") },
    { icon: "settings", label: "Paramètres", callback: () => (this.lastAction = "« Paramètres » déclenché.") },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-action-button",
  group: "Boutons",
  summary: "Bouton flottant à puce, qui déclenche une action seule directement ou déploie un menu au-delà d'une.",
  examples: [
    {
      title: "Action unique",
      description: "Une seule action dans `actions` : le clic sur la puce appelle directement son `callback`, sans menu intermédiaire.",
      component: TaActionButtonSingleExample,
    },
    {
      title: "Actions multiples",
      description: "Plusieurs actions : le premier clic déploie le menu (`isOpen`), le second, sur une icône, déclenche son `callback`.",
      component: TaActionButtonMultipleExample,
    },
  ],
  notes:
    "`actions` accepte des icônes `TaIconType` (locales, via `ta-local-icon`) ou des chaînes de noms d'icônes Material (via `ta-font-icon`) — `isFontIcon()`/`isLocalIcon()` les distinguent par le type de la valeur, pas par son contenu.",
};
