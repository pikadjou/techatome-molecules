import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { ColorType, TaSizes } from "@ta/styles";

/**
 * Étiquette : un mot posé sur un fond teinté — un état, une catégorie, un
 * attribut. Le contenu est projeté, la couleur vient de `type`.
 */
@Component({
  selector: "ta-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  standalone: true,
  imports: [FontIconComponent, NgClass],
})
export class LabelComponent {
  size = input<TaSizes>("md");

  type = input<ColorType>("default");

  /** Pictogramme posé devant le texte. */
  icon = input<string | undefined>(undefined);

  /**
   * `theme` suit le rayon fixé par le thème pour les étiquettes ; `pill` force
   * la capsule, pour une étiquette qui longe un avatar ou une photo, où un
   * angle laisserait un vide.
   */
  shape = input<"theme" | "pill">("theme");

  public getClass(): string {
    return `label-${this.type()} ${this.size()} ${this.shape()}`;
  }
}
