import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  CardComponent,
  CardContentComponent,
  CardCtaComponent,
  CardHeaderComponent,
  CardImageComponent,
  CardSubtitleComponent,
  CardTagComponent,
  CardTitleComponent,
  DashboardCardComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « card » @ta/ui — carte composée + dashboard-card.
 * Route: /e2e-harness/ui-card
 */
@Component({
  standalone: true,
  selector: "app-case-ui-card",
  imports: [
    CardComponent,
    CardContentComponent,
    CardCtaComponent,
    CardHeaderComponent,
    CardImageComponent,
    CardSubtitleComponent,
    CardTagComponent,
    CardTitleComponent,
    DashboardCardComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-card taTestId="ta-card">
      <ta-card-image taTestId="ta-card-image"></ta-card-image>
      <ta-card-header taTestId="ta-card-header">
        <ta-card-title taTestId="ta-card-title">Titre de la carte</ta-card-title>
        <ta-card-subtitle taTestId="ta-card-subtitle">Sous-titre</ta-card-subtitle>
      </ta-card-header>
      <ta-card-content taTestId="ta-card-content">Contenu de la carte.</ta-card-content>
      <ta-card-cta taTestId="ta-card-cta">Action</ta-card-cta>
    </ta-card>
    <ta-card-tag taTestId="ta-card-tag">Tag</ta-card-tag>
    <ta-dashboard-card taTestId="ta-dashboard-card" [icon]="'user'">Dashboard</ta-dashboard-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardCase {}
