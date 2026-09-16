import { Component, input } from "@angular/core";

/**
 * `row` : libellé à gauche, valeur à droite — pour une fiche contractuelle où
 * l'œil balaie les intitulés.
 * `stack` : libellé en capitales au-dessus de la valeur — pour une identité que
 * l'on lit valeur par valeur.
 * `fact` : icône, puis chiffre, puis libellé. La forme d'un relevé de
 * caractéristiques, où la valeur prime sur son intitulé.
 */
export type DataGridOrientation = "row" | "stack" | "fact";

/**
 * Grille de couples libellé / valeur séparés par une gouttière d'un pixel.
 * Le filet n'est pas une bordure : c'est le fond du conteneur qui affleure
 * entre des cellules opaques. Les items s'alignent sur l'orientation portée par
 * le conteneur, qu'ils lisent via `:host-context()`.
 */
@Component({
  selector: "ta-data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.scss"],
  standalone: true,
  host: {
    "[attr.data-columns]": "this.columns()",
    "[class.row]": "this.orientation() === 'row'",
    "[class.stack]": "this.orientation() === 'stack'",
    "[class.fact]": "this.orientation() === 'fact'",
  },
})
export class DataGridComponent {
  /** Nombre de colonnes au-delà du point de rupture mobile (1 à 4). */
  columns = input<1 | 2 | 3 | 4>(2);

  orientation = input<DataGridOrientation>("row");
}
