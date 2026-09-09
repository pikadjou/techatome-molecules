import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { of } from "rxjs";

import { DropdownComponent } from "@ta/form-input";
import { InputDropdown } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-dropdown-basic",
  imports: [DropdownComponent],
  template: ` <ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDropdownBasicExample {
  model = new InputDropdown({
    key: "status",
    label: "Statut",
    value: "active",
    options$: of([
      { id: "active", name: "Actif" },
      { id: "pending", name: "En attente" },
      { id: "closed", name: "Clôturé" },
    ]),
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-dropdown-multiple",
  imports: [DropdownComponent],
  template: ` <ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDropdownMultipleExample {
  model = new InputDropdown({
    key: "categories",
    label: "Catégories",
    multiple: true,
    value: ["wood", "metal"],
    options$: of([
      { id: "wood", name: "Bois" },
      { id: "metal", name: "Métal" },
      { id: "stone", name: "Pierre" },
    ]),
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-dropdown-required",
  imports: [DropdownComponent],
  template: ` <ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDropdownRequiredExample {
  model = new InputDropdown({
    key: "priority",
    label: "Priorité",
    validators: [Validators.required],
    options$: of([
      { id: "low", name: "Basse" },
      { id: "high", name: "Haute" },
    ]),
  });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-dropdown-disabled",
  imports: [DropdownComponent],
  template: ` <ta-input-dropdown [input]="this.model" [standalone]="true"></ta-input-dropdown> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputDropdownDisabledExample {
  // `disabled` à la construction : le bouton déclencheur reçoit alors
  // `[class.disabled]`, qui applique `pointer-events: none` (dropdown.component.scss).
  model = new InputDropdown({
    key: "status-locked",
    label: "Statut imposé",
    value: "active",
    disabled: true,
    options$: of([{ id: "active", name: "Actif" }]),
  });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-dropdown",
  group: "Sélection",
  summary:
    "Menu déroulant du système de formulaires, à sélection simple ou multiple, piloté par un modèle `InputDropdown`.",
  examples: [
    { title: "Sélection simple", component: TaInputDropdownBasicExample },
    {
      title: "Sélection multiple",
      description: "`multiple: true` affiche chaque valeur choisie comme un `ta-label` dans le déclencheur.",
      component: TaInputDropdownMultipleExample,
    },
    { title: "Requis", component: TaInputDropdownRequiredExample },
    { title: "Désactivé", component: TaInputDropdownDisabledExample },
  ],
  notes:
    "L'input `space` de `DropdownComponent` existe (`space = input<boolean>(true)`) mais n'est référencé nulle part dans son template ni sa feuille de style : il n'a aujourd'hui aucun effet visuel observable.",
};
