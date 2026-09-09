import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { ButtonComponent, LayoutNavComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-nav-tabs",
  imports: [LayoutNavComponent, ButtonComponent],
  template: `
    <ta-layout-nav>
      <div class="flex-row g-space-md p-space-sm">
        <ta-button [type]="this.active() === 'apercu' ? 'primary' : 'tertiary'" size="small" (action)="this.active.set('apercu')">Aperçu</ta-button>
        <ta-button [type]="this.active() === 'factures' ? 'primary' : 'tertiary'" size="small" (action)="this.active.set('factures')">Factures</ta-button>
        <ta-button [type]="this.active() === 'documents' ? 'primary' : 'tertiary'" size="small" (action)="this.active.set('documents')">Documents</ta-button>
      </div>
    </ta-layout-nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutNavTabsExample {
  readonly active = signal<"apercu" | "factures" | "documents">("apercu");
}

export const DEMO: ComponentDemo = {
  id: "ta-layout-nav",
  group: "Mise en page",
  summary: "Emplacement de barre de navigation sans mise en forme propre : `<ng-content></ng-content>` seul (vérifié dans layout-nav.component.html et son SCSS vide).",
  examples: [
    {
      title: "Barre d'onglets",
      description:
        "`ta-layout-nav` ne fait que projeter son contenu tel quel ; l'apparence d'onglets ci-dessus vient entièrement des `ta-button` projetés, dont cette démo bascule le `type` (`primary` actif / `tertiary` inactif) au clic. `ta-layout-page` récupère automatiquement un `ta-layout-nav` enfant (sélecteur nommé) et le réinjecte dans son propre `ta-layout-nav` interne — voir la démo de `ta-layout-page`.",
      component: TaLayoutNavTabsExample,
    },
  ],
};
