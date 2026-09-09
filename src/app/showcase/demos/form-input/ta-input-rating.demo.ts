import { ChangeDetectionStrategy, Component } from "@angular/core";

import { RatingComponent } from "@ta/form-input";
import { InputRating } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-rating-basic",
  imports: [RatingComponent],
  template: ` <ta-input-rating [input]="this.model" [standalone]="true"></ta-input-rating> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputRatingBasicExample {
  model = new InputRating({ key: "satisfaction", label: "Satisfaction", value: 3 });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-rating-half",
  imports: [RatingComponent],
  template: ` <ta-input-rating [input]="this.model" [standalone]="true"></ta-input-rating> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputRatingHalfExample {
  model = new InputRating({ key: "score", label: "Score", value: 3.5, max: 5, allowHalf: true });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-rating-readonly",
  imports: [RatingComponent],
  template: ` <ta-input-rating [input]="this.model" [standalone]="true"></ta-input-rating> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputRatingReadonlyExample {
  // `readonly` (et non `disabled`) coupe le survol (`showHover`) et passe
  // `[readonly]` à `ta-rating` : les étoiles restent visibles, non cliquables.
  model = new InputRating({ key: "score-readonly", label: "Note reçue", value: 4, readonly: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-rating",
  group: "Sélection",
  summary: "Notation par étoiles (`ta-rating` de `@ta/ui`), avec maximum, taille et demi-étoiles configurables.",
  examples: [
    { title: "Valeur initiale", component: TaInputRatingBasicExample },
    { title: "Demi-étoiles", component: TaInputRatingHalfExample },
    { title: "Lecture seule", component: TaInputRatingReadonlyExample },
  ],
};
