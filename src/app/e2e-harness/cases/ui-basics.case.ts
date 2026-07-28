import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  BannerComponent,
  BenefitItemComponent,
  LabelComponent,
  LinkComponent,
  LogoComponent,
  NewComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « basics » @ta/ui — composants de base sans dépendance.
 * Route: /e2e-harness/ui-basics
 */
@Component({
  standalone: true,
  selector: "app-case-ui-basics",
  imports: [
    BannerComponent,
    BenefitItemComponent,
    LabelComponent,
    LinkComponent,
    LogoComponent,
    NewComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-label taTestId="ta-label">Label</ta-label>
    <ta-link taTestId="ta-link">Lien</ta-link>
    <ta-banner taTestId="ta-banner" [message]="'Message de bannière'"></ta-banner>
    <ta-new taTestId="ta-new"></ta-new>
    <ta-logo taTestId="ta-logo"></ta-logo>
    <ta-benefit-item taTestId="ta-benefit-item">Avantage</ta-benefit-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBasicsCase {}
