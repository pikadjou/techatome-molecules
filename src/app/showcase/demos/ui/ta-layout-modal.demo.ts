import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { LayoutModalComponent, TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-modal-close",
  imports: [LayoutModalComponent, TextComponent],
  template: `
    <ta-layout-modal title="Profil" [showClose]="true">
      <ta-text size="sm">showClose = true</ta-text>
    </ta-layout-modal>
    <ta-layout-modal title="Résumé" [showClose]="false">
      <ta-text size="sm">showClose = false</ta-text>
    </ta-layout-modal>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutModalCloseExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-modal-working",
  imports: [LayoutModalComponent, TextComponent],
  template: `
    <ta-layout-modal title="Éditer le contact" (closeEvent)="this.message.set('Fermeture demandée.')">
      <div class="flex-column g-space-sm">
        <ta-text>Nom : Camille Petit</ta-text>
        <ta-text>Rôle : Gestionnaire de compte</ta-text>
        <ta-text size="sm">Cette zone de contenu est un ta-layout-content avec autoHeight=true (imposé en interne) : elle défile si elle dépasse son conteneur, sans forcer de hauteur minimale.</ta-text>
      </div>
    </ta-layout-modal>

    @if (this.message(); as text) {
      <ta-text size="sm">{{ text }}</ta-text>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutModalWorkingExample {
  readonly message = signal<string | null>(null);
}

export const DEMO: ComponentDemo = {
  id: "ta-layout-modal",
  group: "Mise en page",
  summary: "Structure de contenu de modale — en-tête avec titre et fermeture optionnelle, zone de contenu défilante — sans overlay ni fond propres.",
  examples: [
    {
      title: "Bouton de fermeture",
      description:
        "`showClose` (défaut `true`) affiche ou masque le bouton de fermeture de l'en-tête. `style` (`'classic' | 'full' | 'big' | 'small'`) fait partie de l'API du composant mais n'est référencé nulle part dans son propre template (vérifié dans layout-modal.component.html) : il n'a **aucun effet visuel** sur `ta-layout-modal` — il ne sert que de donnée transmise à `ta-template-modal-container`, qui lit son propre input `style` pour choisir la taille de la `ta-modal` qui l'entoure.",
      component: TaLayoutModalCloseExample,
    },
    {
      title: "Contenu et fermeture",
      layout: "stack",
      description:
        "`ta-layout-modal` ne s'ouvre ni ne se ferme lui-même : rendu ici directement dans la page (comme dans src/app/e2e-harness/cases/ui-overlays.case.ts), il ne porte ni fond ni positionnement fixe — dans une modale réelle, il est le contenu placé à l'intérieur d'une `ta-modal` ou d'un `ta-template-modal-container` qui gère, elle, l'overlay et le `[open]`. Cliquer la croix émet `closeEvent`, capté ici par un simple message.",
      component: TaLayoutModalWorkingExample,
    },
  ],
};
