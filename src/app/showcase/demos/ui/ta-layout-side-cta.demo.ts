import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, LayoutSideCtaComponent, TextComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-side-cta-flags",
  imports: [LayoutSideCtaComponent, ButtonComponent, TextComponent],
  template: `
    <div class="flex-column g-space-xs">
      <ta-text size="sm">background = true (défaut), rounded = false (défaut)</ta-text>
      <ta-layout-side-cta>
        <ta-button type="primary">Enregistrer</ta-button>
      </ta-layout-side-cta>
    </div>

    <div class="flex-column g-space-xs">
      <ta-text size="sm">background = false</ta-text>
      <ta-layout-side-cta [background]="false">
        <ta-button type="primary">Enregistrer</ta-button>
      </ta-layout-side-cta>
    </div>

    <div class="flex-column g-space-xs">
      <ta-text size="sm">rounded = true</ta-text>
      <ta-layout-side-cta [rounded]="true">
        <ta-button type="primary">Enregistrer</ta-button>
      </ta-layout-side-cta>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutSideCtaFlagsExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-side-cta",
  group: "Mise en page",
  summary: "Pied d'action pour une colonne latérale : fond optionnel et coins inférieurs arrondis optionnels autour du contenu projeté.",
  examples: [
    {
      title: "background et rounded",
      description:
        "Vérifié dans layout-side-cta.component.scss : `background` (défaut `true`) applique `common.get-var(surface, brand, tertiary)` en fond ; `rounded` (défaut `false`) arrondit les deux coins inférieurs (`0 0 radius radius`), utile pour refermer visuellement un bloc situé au-dessus, comme dans `ta-layout-side`.",
      component: TaLayoutSideCtaFlagsExample,
    },
  ],
};
