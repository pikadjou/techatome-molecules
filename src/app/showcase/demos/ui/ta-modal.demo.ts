import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, ModalSize, TaModalComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-modal-sizes",
  imports: [ButtonComponent, TaModalComponent],
  template: `
    <div class="flex-row g-space-sm">
      @for (option of this.sizes; track option) {
        <ta-button size="small" type="secondary" (action)="this.open(option)">{{ option }}</ta-button>
      }
    </div>

    <ta-modal [open]="this.isOpen" [size]="this.size" title="Modale" (closeEvent)="this.isOpen = false">
      <div modal-content>Taille actuelle : <strong>{{ this.size }}</strong>.</div>
      <div modal-footer>
        <ta-button type="primary" (action)="this.isOpen = false">Fermer</ta-button>
      </div>
    </ta-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaModalSizesExample {
  readonly sizes: ModalSize[] = ["small", "medium", "large", "fullscreen"];

  isOpen = false;
  size: ModalSize = "small";

  open(size: ModalSize): void {
    this.size = size;
    this.isOpen = true;
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-modal-backdrop",
  imports: [ButtonComponent, TaModalComponent],
  template: `
    <ta-button type="secondary" (action)="this.isOpen = true">Ouvrir (fond non cliquable)</ta-button>

    <ta-modal [open]="this.isOpen" [closeOnBackdrop]="false" title="Fermeture bloquée" (closeEvent)="this.isOpen = false">
      <div modal-content>Cliquer le fond assombri ne ferme pas cette modale : seuls la croix et le bouton ci-dessous le font.</div>
      <div modal-footer>
        <ta-button type="primary" (action)="this.isOpen = false">Fermer</ta-button>
      </div>
    </ta-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaModalBackdropExample {
  // `onBackdropClick()` n'appelle `close()` que si `closeOnBackdrop()` est vrai
  // (vérifié dans modal.component.ts) : ici, faux, le clic sur le fond est sans effet.
  isOpen = false;
}

export const DEMO: ComponentDemo = {
  id: "ta-modal",
  group: "Overlays",
  summary: "Modale contrôlée par `[open]`, avec en-tête/titre, zone de contenu et pied projetés (`modal-content`, `modal-footer`).",
  examples: [
    {
      title: "Tailles",
      description: "Chaque bouton rouvre la même modale avec un `size` différent (`small`/`medium`/`large`/`fullscreen`) ; `closeEvent` la referme.",
      component: TaModalSizesExample,
    },
    {
      title: "Fermeture sur le fond désactivée",
      description: "`closeOnBackdrop=\"false\"` empêche `onBackdropClick()` de fermer la modale au clic sur le fond assombri.",
      component: TaModalBackdropExample,
    },
  ],
  notes:
    "La modale ouverte est en position `fixed`, centrée à l'écran par-dessus tout son fond assombri (`.ta-modal-backdrop`/`.ta-modal-container` dans `modal.component.scss`) : elle recouvre la page entière, pas seulement la carte de l'exemple qui l'a ouverte. `contentFit` (non démontré ici) retire le padding de la zone de contenu et la fait remplir toute la hauteur disponible — utile pour un contenu qui gère lui-même son défilement (tableau, formulaire long) plutôt que pour un texte simple.",
};
