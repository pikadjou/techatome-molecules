import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ColorPickerComponent } from "@ta/form-input";
import { InputTextBox } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-color-picker-basic",
  imports: [ColorPickerComponent],
  template: `
    <ta-input-color-picker [input]="this.model" [standalone]="true"></ta-input-color-picker>
    <p>Valeur du modèle : {{ this.model.value }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputColorPickerBasicExample {
  model = new InputTextBox({ key: "color", label: "Couleur", value: "#2f6fd1" });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-color-picker",
  group: "Saisie",
  summary: "Sélecteur de couleur du système de formulaires, piloté par un modèle `InputTextBox`.",
  examples: [
    {
      title: "Valeur",
      description:
        "Le template de ce composant (`color-picker.component.html`) ne contient qu'un `<div>` vide : le binding vers le sélecteur visuel (`colorPicker`/`colorPickerChange`) y est commenté. Rien ne s'affiche donc à l'emplacement du composant ; le paragraphe sous l'exemple lit directement `model.value` pour rendre la démonstration lisible.",
      component: TaInputColorPickerBasicExample,
    },
  ],
  notes:
    "`ColorPickerComponent` étend `TaAbstractInputComponent<InputTextBox>` et expose `onChangeValue()`, mais son template ne rend aucune interface visuelle dans l'état actuel de la source — constaté à la lecture, pas un défaut de cette démo.",
};
