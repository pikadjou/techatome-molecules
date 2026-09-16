import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import { TaBaseComponent } from "@ta/utils";

import { TaTranslationUI } from "../../../translation.service";

/**
 * `filled` : encart plein, l'état vide occupe la place d'une carte.
 * `dashed` : contour pointillé sur fond de carte — la place est réservée, elle
 * attend d'être remplie.
 */
export type EmptyVariant = "filled" | "dashed";

@Component({
  selector: "ta-empty",
  templateUrl: "./empty.component.html",
  styleUrls: ["./empty.component.scss"],
  standalone: true,
  imports: [TranslateModule, FontIconComponent],
})
export class EmptyComponent extends TaBaseComponent {
  isEmpty = input<boolean>(true);
  variant = input<EmptyVariant>("filled");
  isLight = input<boolean>(false);
  showMessage = input<boolean>(true);

  text = input<string>("ui.container.empty.title");
  subtitle = input<string>("");

  emptyIcon = input<string>("sentiment_dissatisfied");
  iconSize = input<TaSizes | "xl">("xl");

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }
}
