import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { EditFieldComponent } from "@ta/form-basic";
import { InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-edit-field-basic",
  imports: [EditFieldComponent],
  template: `
    <ta-edit-field [getInput]="this.getInput" (newValue)="this.onNewValue($event)">
      {{ this.name() }}
    </ta-edit-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaEditFieldBasicExample {
  name = signal("Jean Dupont");

  // `getInput` doit renvoyer une fonction, pas un modèle : `EditFieldComponent`
  // l'appelle à chaque entrée en mode édition pour obtenir un `InputBase` neuf,
  // préchargé avec la valeur courante.
  getInput = () => new InputTextBox({ key: "name", value: this.name() });

  onNewValue(value: unknown) {
    this.name.set(value as string);
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-edit-field-states",
  imports: [EditFieldComponent],
  template: `
    <ta-edit-field [getInput]="this.getInput" [disabled]="true">Valeur non modifiable</ta-edit-field>
    <ta-edit-field [getInput]="this.getInput" [withBorder]="false">Sans bordure</ta-edit-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaEditFieldStatesExample {
  getInput = () => new InputTextBox({ key: "value" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-edit-field-loading",
  imports: [EditFieldComponent],
  template: `<ta-edit-field [getInput]="this.getInput" [isLoading]="true">En cours de sauvegarde…</ta-edit-field>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaEditFieldLoadingExample {
  getInput = () => new InputTextBox({ key: "value" });
}

export const DEMO: ComponentDemo = {
  id: "ta-edit-field",
  group: "Formulaire",
  summary: "Champ affiché en lecture, qui bascule vers un `ta-inputs` d'édition au clic puis se referme au clic extérieur.",
  examples: [
    {
      title: "Édition au clic",
      description:
        "Un clic sur le contenu projeté ouvre l'édition ; un clic à l'extérieur du composant appelle `validation()`, qui émet `newValue` avec la valeur courante puis referme l'édition.",
      component: TaEditFieldBasicExample,
    },
    {
      title: "Désactivé et sans bordure",
      description: "`disabled` empêche le clic de basculer en édition (le gestionnaire vérifie `!this.disabled()` avant `toggleEditMode()`) ; `withBorder=false` retire seulement le cadre visuel.",
      component: TaEditFieldStatesExample,
    },
    {
      title: "Chargement",
      description: "`isLoading` recouvre le contenu d'un `ta-loader` ; tant qu'il reste à `true`, aucun retour à `false` ne vient réinitialiser le modèle ni refermer l'édition (voir `ngOnChanges`).",
      component: TaEditFieldLoadingExample,
    },
  ],
  notes:
    "L'entrée `changeEditMode$` (`Observable<boolean>`) permet à un parent de piloter le mode édition depuis l'extérieur — l'ouvrir ou le fermer sans dépendre du clic sur le champ ou en dehors. Elle n'est pas démontrée ici, faute d'un déclencheur externe qui aurait sa place dans cette page.",
};
