import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { SearchFieldComponent } from "@ta/form-input";
import { InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-search-field-collapsed",
  imports: [SearchFieldComponent],
  template: ` <ta-search-field [input]="this.model" [placeholder]="'Rechercher…'"></ta-search-field> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSearchFieldCollapsedExample {
  model = new InputTextBox({ key: "search-collapsed", label: "Recherche" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-search-field-open",
  imports: [SearchFieldComponent],
  template: `
    <ta-search-field [input]="this.model" [isOpen]="true" (valueCompleted)="this.onCompleted($event)"></ta-search-field>
    @if (this.completed(); as value) {
      <p>Dernière valeur validée : {{ value || "(vide)" }}</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSearchFieldOpenExample {
  model = new InputTextBox({ key: "search-open", label: "Recherche", value: "Bruxelles" });
  completed = signal<string | null>(null);

  // `iconClicked()` émet toujours `valueCompleted`, y compris une valeur vide :
  // c'est le signal explicite d'un effacement, pas seulement d'une saisie.
  onCompleted(value: string) {
    this.completed.set(value);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-search-field-disabled",
  imports: [SearchFieldComponent],
  template: ` <ta-search-field [input]="this.model"></ta-search-field> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaSearchFieldDisabledExample {
  model = new InputTextBox({ key: "search-disabled", label: "Recherche verrouillée", value: "Bruxelles", disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-search-field",
  group: "Saisie",
  summary: "Champ de recherche qui se déploie depuis une icône ; se pilote par un `InputTextBox` (ou `InputNumber`).",
  examples: [
    { title: "Replié par défaut", component: TaSearchFieldCollapsedExample },
    {
      title: "Ouvert avec valeur",
      description: "`isOpen` le garde déployé même une fois vidé ; l'icône (ou Entrée) émet `valueCompleted` avec la valeur courante.",
      component: TaSearchFieldOpenExample,
    },
    {
      title: "Désactivé",
      description: "`disabled` pose l'attribut `readonly` sur le champ (`[readonly]=\"this.input.disabled\"`), pas `disabled` : le texte reste visuellement actif mais non modifiable — vérifié dans le template.",
      component: TaSearchFieldDisabledExample,
    },
  ],
  notes:
    "Deux des quatre entrées, `space` et `type` (`TaSizes`), sont déclarées mais ne sont référencées nulle part dans le template ou les styles du composant — vérifié dans la source : les passer n'a aucun effet observable, elles ne sont donc démontrées dans aucun exemple ci-dessus. Contrairement aux autres champs du paquet, `ngOnInit()` de `ta-search-field` appelle `input.createFormControl()` sans condition : l'attribut `standalone` n'y change rien, il n'est donc pas posé sur l'exemple « Désactivé ».",
};
