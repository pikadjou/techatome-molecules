import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SliderComponent } from "@ta/form-input";
import { InputSlider } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-slider-basic",
  imports: [SliderComponent],
  template: ` <ta-input-slider [input]="this.model" [standalone]="true"></ta-input-slider> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSliderBasicExample {
  model = new InputSlider({ key: "volume", label: "Volume", min: 0, max: 100, value: 50 });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-slider-range",
  imports: [SliderComponent],
  template: ` <ta-input-slider [input]="this.model" [standalone]="true"></ta-input-slider> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSliderRangeExample {
  model = new InputSlider({ key: "temperature", label: "Température (°C)", min: -10, max: 40, value: 21 });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-slider-disabled",
  imports: [SliderComponent],
  template: ` <ta-input-slider [input]="this.model" [standalone]="true"></ta-input-slider> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputSliderDisabledExample {
  model = new InputSlider({ key: "slider-disabled", label: "Verrouillé", min: 0, max: 100, value: 75, disabled: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-slider",
  group: "Sélection",
  summary: "Curseur natif (`input[type=range]`), bornes `min`/`max` fixées par le modèle.",
  examples: [
    { title: "Plage standard", component: TaInputSliderBasicExample },
    { title: "Plage personnalisée", component: TaInputSliderRangeExample },
    { title: "Désactivé", component: TaInputSliderDisabledExample },
  ],
};
