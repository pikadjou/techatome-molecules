import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ButtonComponent,
  CardComponent,
  CardContentComponent,
  LayoutHeaderComponent,
  LayoutHeaderDefaultComponent,
  LayoutNavComponent,
  LayoutPageComponent,
  LayoutTitleComponent,
  TextComponent,
  TitleComponent,
} from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-page-anatomy",
  imports: [
    LayoutPageComponent,
    LayoutHeaderComponent,
    LayoutHeaderDefaultComponent,
    LayoutTitleComponent,
    LayoutNavComponent,
    ButtonComponent,
    CardComponent,
    CardContentComponent,
    TitleComponent,
    TextComponent,
  ],
  template: `
    <ta-layout-page>
      <ta-layout-header>
        <ta-layout-header-default title="Espace client" [showBack]="false"></ta-layout-header-default>
      </ta-layout-header>

      <ta-layout-title>
        <ta-title [level]="2">Tableau de bord</ta-title>
      </ta-layout-title>

      <ta-layout-nav>
        <div class="flex-row g-space-md p-space-sm">
          <ta-button type="tertiary" size="small">Aperçu</ta-button>
          <ta-button type="tertiary" size="small">Factures</ta-button>
          <ta-button type="tertiary" size="small">Documents</ta-button>
        </div>
      </ta-layout-nav>

      <ta-card>
        <ta-card-content>
          <ta-text>Contenu principal — projeté sans sélecteur, il tombe dans la zone .layout-page-content (max-width via .max-container).</ta-text>
        </ta-card-content>
      </ta-card>
    </ta-layout-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutPageAnatomyExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-page",
  group: "Mise en page",
  summary: "Squelette de page complète : distribue son contenu projeté en quatre zones fixes — en-tête, titre, contenu principal et navigation.",
  examples: [
    {
      title: "Composition complète",
      layout: "stack",
      description:
        "`ta-layout-page` route son contenu projeté par sélecteur (vérifié dans layout-page.component.html) : `ta-layout-header` et `ta-layout-title` vont chacun dans leur zone nommée, tout le reste (ici la carte de contenu) tombe dans la zone par défaut `.layout-page-content`. `ta-layout-nav` a un traitement particulier : le composant récupère l'élément `ta-layout-nav` projeté puis le réinjecte à l'intérieur de son **propre** `ta-layout-nav` interne — la barre d'onglets se retrouve donc doublement enveloppée par la classe `.header` de `LayoutNavComponent`, sans effet visuel puisque ce composant n'a aucun style propre.",
      component: TaLayoutPageAnatomyExample,
    },
  ],
};
