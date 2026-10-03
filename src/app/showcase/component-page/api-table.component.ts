import { ChangeDetectionStrategy, Component, computed, input, signal } from "@angular/core";

import { TitleComponent } from "@ta/ui";

import type { TaApiEntry, TaApiMember } from "../generated/api-metadata";

/** Le générateur lit l'AST sans vérificateur de types : un accesseur sans
 * annotation de retour produit ce type, qui ne dit rien du composant lui-même. */
const UNANNOTATED_TYPE = "unknown";
const UNANNOTATED_TITLE = "Type non annoté dans la source";

@Component({
  standalone: true,
  selector: "app-api-table",
  imports: [TitleComponent],
  templateUrl: "./api-table.component.html",
  styleUrl: "./api-table.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiTableComponent {
  entry = input.required<TaApiEntry>();

  /** Membres déclarés par le composant lui-même. */
  own = computed(() => this.entry().members.filter((m) => !m.inheritedFrom));

  /** Membres venus des classes de base, repliés par défaut. */
  inherited = computed(() => this.entry().members.filter((m) => !!m.inheritedFrom));

  /** Signal plutôt que champ simple, pour rester cohérent avec le bloc d'exemple. */
  readonly showInherited = signal(false);

  /**
   * Vrai quand le composant ne déclare aucun membre public : un conteneur de
   * projection pure. Le tableau d'API n'aurait alors rien à montrer.
   */
  readonly hasNoMembers = computed(() => this.entry().members.length === 0);

  /**
   * Un type "unknown" est une limite du parseur (lecture de l'AST sans
   * vérificateur de types), pas un fait sur le composant. On l'affiche comme une
   * absence d'information plutôt que comme le mot brut, qu'un lecteur prendrait
   * pour le type réel.
   */
  typeLabel(type: string): string {
    return type === UNANNOTATED_TYPE ? "—" : type;
  }

  typeTitle(type: string): string | null {
    return type === UNANNOTATED_TYPE ? UNANNOTATED_TITLE : null;
  }

  inputsOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "input");
  }

  outputsOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "output");
  }

  methodsOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "method");
  }

  /**
   * Accesseurs et propriétés publiques. Les omettre amputerait 62 composants du
   * dépôt, dont `ta-input-textbox` qui en expose trois.
   */
  propertiesOf(members: TaApiMember[]): TaApiMember[] {
    return members.filter((m) => m.kind === "property");
  }

  toggleInherited(): void {
    this.showInherited.update((value) => !value);
  }
}
