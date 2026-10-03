import { ChangeDetectionStrategy, Component, signal, TemplateRef, ViewChild } from "@angular/core";

import { ButtonComponent, LayoutModalComponent, ModalStyle, TemplateModalContainer, TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-template-modal-container-working",
  imports: [TemplateModalContainer, LayoutModalComponent, ButtonComponent, TextComponent],
  template: `
    <div class="flex-row g-space-sm">
      <ta-button type="secondary" size="small" (action)="this.open('classic')">classic (medium)</ta-button>
      <ta-button type="secondary" size="small" (action)="this.open('big')">big (large)</ta-button>
      <ta-button type="secondary" size="small" (action)="this.open('small')">small (small)</ta-button>
      <ta-button type="secondary" size="small" (action)="this.open('full')">full (fullscreen)</ta-button>
    </div>

    <ta-template-modal-container [open]="this.isOpen()" [template]="this.modalTpl" [style]="this.activeStyle()" (closeEvent)="this.isOpen.set(false)"> </ta-template-modal-container>

    <ng-template #modalTpl>
      <ta-layout-modal title="Éditer une adresse" (closeEvent)="this.isOpen.set(false)">
        <div class="flex-column g-space-sm">
          <ta-text size="sm">Style ouvert : {{ this.activeStyle() }}</ta-text>
          <ta-text>Rue, code postal, ville…</ta-text>
        </div>
      </ta-layout-modal>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTemplateModalContainerWorkingExample {
  @ViewChild("modalTpl", { static: true }) modalTpl!: TemplateRef<unknown>;

  readonly isOpen = signal(false);
  readonly activeStyle = signal<ModalStyle>("classic");

  open(style: ModalStyle): void {
    this.activeStyle.set(style);
    this.isOpen.set(true);
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-template-modal-container",
  group: "Mise en page",
  summary: "Modale pilotée par `TemplateRef`, ouverte/fermée via l'input `open` : enveloppe une `ta-modal` interne dont la taille est dérivée de `style`.",
  examples: [
    {
      title: "Ouverture par style",
      layout: "stack",
      description:
        "`style` (défaut `'full'`) fixe la taille de la `ta-modal` interne via `modalSize()` (vérifié dans layout-modal-container.component.ts) : `'full'` → `fullscreen`, `'big'` → `large`, `'small'` → `small`, `'classic'` (et toute autre valeur) → `medium`. `template` est projeté dans le slot `[modal-content]` de la `ta-modal` interne, qui affiche systématiquement son propre en-tête (titre vide + croix de fermeture) — le `ta-layout-modal` du template ci-dessus ajoute donc un **second** en-tête (titre réel + seconde croix) par-dessus le premier, comme dans le pattern canonique documenté pour ce composant. Fermer via l'une ou l'autre croix, ou via `askClosing$` côté appelant (non démontré ici), émet `closeEvent`.",
      component: TaTemplateModalContainerWorkingExample,
    },
  ],
};
