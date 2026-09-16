import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

/** Couleur de la portion parcourue. */
export type ProgressBarTone =
  | "brand"
  | "accent"
  | "highlight"
  | "success"
  | "warning"
  | "alert";

@Component({
  selector: "ta-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
  standalone: true,
  imports: [NgClass],
})
export class ProgressBarComponent {
  current = input.required<number>();
  max = input.required<number>();

  /**
   * `sm` : filet de 2 px, à ras d'un titre.
   * `md` : jauge de 7 px arrondie, lisible seule dans une carte.
   */
  size = input<"sm" | "md" | "lg">("sm");

  tone = input<ProgressBarTone>("brand");

  public getClasses(): string[] {
    return [this.size(), this.tone()];
  }
}
