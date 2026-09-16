import { NgClass, NgStyle } from "@angular/common";
import { Component, input } from "@angular/core";

/**
 * `brand` : pastille de marque, texte clair.
 * `highlight` : couleur secondaire de marque — c'est la seule qui tienne posée
 * sur une surface de marque pleine.
 * `surface` : pastille neutre, pour une liste posée sur une carte claire.
 * `invert` : pastille translucide, pour un fond sombre — la marque pleine y
 * ferait une tache, un simple voile suffit à détacher les initiales.
 */
export type TrigramTone = "brand" | "highlight" | "surface" | "invert";

@Component({
  selector: "ta-trigram",
  templateUrl: "./trigram.component.html",
  styleUrls: ["./trigram.component.scss"],
  standalone: true,
  imports: [NgClass, NgStyle],
})
export class TrigramComponent {
  /**
   * Text to display in trigram
   */
  value = input.required<string | null>();

  /**
   * Size of trigram
   */
  size = input<number>(35);

  /** `squircle` : carré arrondi, pour un avatar aligné sur des cartes. */
  shape = input<"circle" | "squircle">("circle");

  tone = input<TrigramTone>("brand");

  constructor() {}

  public getClasses(): string[] {
    return [this.tone(), this.shape()];
  }

  public getFontSize() {
    return Math.round(this.size() / 3);
  }
}
