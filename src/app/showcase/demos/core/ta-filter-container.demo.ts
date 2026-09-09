import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { of } from "rxjs";

import { FilterContainerComponent } from "@ta/core";
import { InputBase, InputDropdown, InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-filter-container-form",
  imports: [FilterContainerComponent, JsonPipe],
  template: `
    <div style="max-width: 360px">
      <ta-filter-container [form]="this.form" (filtersSelected)="this.apply($event)"></ta-filter-container>
    </div>
    @if (this.result !== null) {
      <pre>{{ this.result | json }}</pre>
    } @else {
      <p>Aucun filtre validé pour l'instant.</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFilterContainerFormExample {
  readonly form: InputBase<any>[] = [
    new InputDropdown({
      key: "status",
      label: "Statut",
      options$: of([
        { id: "active", name: "Actif" },
        { id: "inactive", name: "Inactif" },
      ]),
    }),
    new InputTextBox({ key: "city", label: "Ville" }),
  ];

  result: unknown = null;

  apply(data: unknown): void {
    this.result = data;
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-filter-container",
  group: "Filtres",
  summary:
    "Panneau de filtres plein hauteur (`ta-layout-side`) rendant un `ta-form` depuis `form`, avec un lien « Effacer » et un bouton « Valider ».",
  examples: [
    {
      title: "Formulaire de filtres",
      layout: "stack",
      description:
        "« Valider » soumet le `ta-form` interne et émet `filtersSelected` avec sa valeur ; « Effacer » (icône + lien) émet `filtersSelected` avec `null` directement, sans passer par la validation du formulaire.",
      component: TaFilterContainerFormExample,
    },
  ],
  notes:
    "`askValidation$` et `askClear$`, deux `Subject<null>` publics, laissent un parent déclencher `validate()`/`clear()` depuis l'extérieur sans passer par les boutons du composant — non démontré ici, la vitrine n'ayant pas de parent à instrumenter pour ça.",
};
