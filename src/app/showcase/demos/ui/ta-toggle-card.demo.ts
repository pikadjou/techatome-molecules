import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ToggleCardComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-toggle-card-selection",
  imports: [ToggleCardComponent],
  template: `
    <div class="flex-row g-space-md">
      @for (option of this.options; track option.id) {
        <ta-toggle-card
          [title]="option.title"
          [description]="option.description"
          [icon]="option.icon"
          [isActive]="this.selected === option.id"
          (toggle)="this.selected = option.id"
        ></ta-toggle-card>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaToggleCardSelectionExample {
  readonly options = [
    { id: "email", title: "E-mail", description: "Recevoir les notifications par e-mail", icon: "mail" },
    { id: "sms", title: "SMS", description: "Recevoir les notifications par SMS", icon: "sms" },
  ];

  // `isActive` est une simple entrée : le composant émet `toggle` au clic
  // (sauf si `disabled`) mais ne gère lui-même aucun état — c'est cette
  // propriété, mise à jour par `(toggle)`, qui pilote l'affichage coché.
  selected = "email";
}

@Component({
  standalone: true,
  selector: "app-ex-ta-toggle-card-disabled",
  imports: [ToggleCardComponent],
  template: `<ta-toggle-card title="Option indisponible" description="Ne réagit pas au clic" [disabled]="true" (toggle)="this.toggles = this.toggles + 1"></ta-toggle-card>
    <p>Bascules émises : {{ this.toggles }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaToggleCardDisabledExample {
  // `onToggle()` retourne immédiatement quand `disabled()` est vrai : `toggle` n'est jamais émis.
  toggles = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-toggle-card",
  group: "Cartes",
  summary: "Carte cliquable à cocher/décocher (titre, description, icône), pilotée depuis l'extérieur par `isActive`.",
  examples: [
    {
      title: "Sélection",
      description: "Cliquer une carte émet `toggle` avec `!isActive()` ; c'est `(toggle)` qui met à jour `selected` ci-dessous, pas le composant lui-même.",
      component: TaToggleCardSelectionExample,
    },
    { title: "Désactivée", description: "`disabled` bloque l'émission de `toggle`, sans changer l'apparence de la carte.", component: TaToggleCardDisabledExample },
  ],
  notes: "`icon` attend une classe d'icône appliquée via `[class]=\"'icon-' + icon()\"` (police d'icônes maison, pas `TaIconType`) : sans cette classe définie, aucune icône n'apparaît malgré l'entrée renseignée.",
};
