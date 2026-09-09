import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { ButtonComponent, LayoutFullPanelComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-full-panel-working",
  imports: [LayoutFullPanelComponent, TitleComponent, TextComponent, ButtonComponent],
  template: `
    <ta-button type="secondary" (action)="this.isOpen.set(true)">Ouvrir le panneau</ta-button>

    @if (this.isOpen()) {
      <ta-layout-full-panel width="420px" title="Commande #4821" (closeEvent)="this.isOpen.set(false)">
        <div panel-content class="flex-column g-space-sm">
          <ta-text>Client : Amélie Laurent</ta-text>
          <ta-text>Montant : 129,90 €</ta-text>
          <ta-text>Statut : en préparation</ta-text>
        </div>
        <div panel-footer class="flex-row g-space-sm">
          <ta-button type="secondary" (action)="this.isOpen.set(false)">Annuler</ta-button>
          <ta-button type="primary" (action)="this.confirm()">Confirmer</ta-button>
        </div>
      </ta-layout-full-panel>
    }

    @if (this.lastAction(); as action) {
      <ta-text size="sm">{{ action }}</ta-text>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutFullPanelWorkingExample {
  readonly isOpen = signal(false);
  readonly lastAction = signal<string | null>(null);

  confirm(): void {
    this.lastAction.set("Commande confirmée.");
    this.isOpen.set(false);
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-layout-full-panel",
  group: "Mise en page",
  summary: "Panneau plein hauteur en overlay fixe depuis la droite, avec fond semi-transparent, en-tête titré et pieds de panneau projetés.",
  examples: [
    {
      title: "Ouverture, fermeture, contenu et pied projetés",
      layout: "stack",
      description:
        "`ta-layout-full-panel` n'a pas d'état ouvert/fermé propre : dès qu'il est monté, il s'affiche en `position: fixed` par-dessus toute la page (fond à 50% d'opacité inclus) — c'est donc l'appelant qui le monte/démonte avec un `@if`, comme ci-dessus. Cliquer le fond semi-transparent ou l'icône de fermeture appellent tous deux `askClose()` (vérifié dans layout-full-panel.component.ts), qui émet `closeEvent` sans rien fermer lui-même ; le bouton « Annuler » du pied projeté est câblé indépendamment par cette démo, pas par le composant. `width` (défaut `400px`) fixe la largeur du panneau ; `title` passe par le pipe `translate` (aucune clé ne correspond ici, ngx-translate affiche donc la chaîne telle quelle).",
      component: TaLayoutFullPanelWorkingExample,
    },
  ],
};
