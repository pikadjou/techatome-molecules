import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { ButtonComponent, LayoutContentComponent, LayoutPanelComponent, LayoutWithPanelComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-with-panel-working",
  imports: [LayoutWithPanelComponent, LayoutContentComponent, LayoutPanelComponent, ButtonComponent, TitleComponent, TextComponent],
  template: `
    <ta-button type="secondary" (action)="this.isOpen.set(!this.isOpen())">
      {{ this.isOpen() ? "Fermer le panneau" : "Ouvrir le panneau" }}
    </ta-button>

    <div style="height: 280px;">
      <ta-layout-with-panel [open]="this.isOpen()">
        <ta-layout-content>
          <div class="p-space-md flex-column g-space-sm">
            <ta-title [level]="4">Zone principale</ta-title>
            <ta-text size="sm">Le tiroir s'ouvre depuis la droite, par-dessus ce contenu.</ta-text>
          </div>
        </ta-layout-content>
        <ta-layout-panel>
          <div class="p-space-md flex-column g-space-sm">
            <ta-title [level]="4">Filtres</ta-title>
            <ta-text size="sm">Contenu du tiroir (mat-drawer, position « end »).</ta-text>
          </div>
        </ta-layout-panel>
      </ta-layout-with-panel>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutWithPanelWorkingExample {
  readonly isOpen = signal(false);
}

export const DEMO: ComponentDemo = {
  id: "ta-layout-with-panel",
  group: "Mise en page",
  summary: "Zone principale avec un tiroir latéral (Angular Material `mat-drawer`) piloté par l'input `open`, sur deux zones nommées : `ta-layout-content` et `ta-layout-panel`.",
  examples: [
    {
      title: "Ouverture et fermeture du tiroir",
      layout: "stack",
      description:
        "`open` (requis) pilote directement `MatDrawer.open()`/`.close()` via `manageDrawer()`, appelée depuis `ngOnChanges` et `ngAfterViewInit` (vérifié dans layout-with-panel.component.ts). Vérifié à l'exécution et dans layout-with-panel.component.scss : `.drawer` porte `width: 100%` (pas une largeur de colonne étroite) et le fond du `mat-drawer-container` est transparent — une fois ouvert, le tiroir recouvre donc toute la largeur du conteneur, et son contenu se superpose visuellement à celui de `ta-layout-content` resté visible en transparence derrière, plutôt que de glisser à côté de lui.",
      component: TaLayoutWithPanelWorkingExample,
    },
  ],
};
