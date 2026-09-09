import { NgComponentOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, signal, Type } from "@angular/core";

import { TitleComponent } from "@ta/ui";
import { copyTextToClipboard } from "@ta/utils";

import { DemoSource } from "../generated/demo-sources";

@Component({
  standalone: true,
  selector: "app-example-block",
  imports: [NgComponentOutlet, TitleComponent],
  templateUrl: "./example-block.component.html",
  styleUrl: "./example-block.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleBlockComponent {
  heading = input.required<string>();
  description = input<string>("");
  example = input.required<Type<unknown>>();
  /** Template et corps de classe du composant d'exemple, produits par le générateur. */
  source = input<DemoSource>({ template: "", members: "" });
  /**
   * Disposition des variantes. `row` les pose côte à côte pour qu'on les compare ;
   * `stack` les empile en pleine largeur, ce que veulent les mises en page, les
   * formulaires et les tableaux.
   */
  layout = input<"row" | "stack">("row");

  readonly showSource = signal(false);

  /**
   * Un échec de copie doit se voir. Le presse-papiers est refusé en contexte non
   * sécurisé ou sans permission ; sans état distinct, l'utilisateur cliquerait
   * sans jamais savoir que rien ne s'est passé.
   */
  readonly copyState = signal<"idle" | "copied" | "failed">("idle");

  /** Minuterie du retour au repos, annulée à chaque nouvelle tentative. */
  private _resetTimer?: ReturnType<typeof setTimeout>;

  toggleSource(): void {
    this.showSource.update((value) => !value);
  }

  copySource(): void {
    // Le corps de la classe porte le modèle, les données ou le gestionnaire sans
    // lequel le template ne veut rien dire : le copier avec le template est ce qui
    // rend l'extrait réellement collable tel quel.
    const { members, template } = this.source();
    const text = members ? `${members}\n\n${template}` : template;

    // `copyTextToClipboard` est asynchrone et attend deux rappels : succès et
    // erreur, chacun recevant une clé de traduction dont on n'a pas l'usage ici.
    void copyTextToClipboard(
      text,
      () => this._flash("copied", 1500),
      () => this._flash("failed", 3000)
    );
  }

  /**
   * Affiche un état transitoire. La minuterie précédente est annulée : sans cela,
   * le retour au repos programmé par un succès tronquerait l'affichage d'un échec
   * survenu juste après, et le message le plus important serait le plus fugace.
   */
  private _flash(state: "copied" | "failed", delay: number): void {
    clearTimeout(this._resetTimer);
    this.copyState.set(state);
    this._resetTimer = setTimeout(() => this.copyState.set("idle"), delay);
  }
}
