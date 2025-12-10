import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { TaIconsModule } from "@ta/icons";

import { TaUiModule } from "../../components/ui/ui.module";
import { CardImageComponent } from "./card-image/card-image.component";
import { CardComponent } from "./card.component";
import { CardContentComponent } from "./content/card-content.component";
import { CardCtaComponent } from "./cta/card-cta.component";
import { DashboardCardComponent } from "./dashboard/dashboard.component";
import { CardHeaderComponent } from "./header/card-header.component";
import { CardSubtitleComponent } from "./subtitle/card-subtitle.component";
import { CardTagComponent } from "./tag/card-tag.component";
import { CardTitleComponent } from "./title/card-title.component";

const exports = [
  CardComponent,
  CardHeaderComponent,
  CardTitleComponent,
  CardSubtitleComponent,
  CardCtaComponent,
  CardTagComponent,
  CardContentComponent,
  DashboardCardComponent,
  CardImageComponent,
];

const declarations: any[] = [];

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 */
@NgModule({
  declarations: declarations,
  imports: [CommonModule, TaUiModule, TaIconsModule, ...exports],
  exports: exports,
})
export class TaCardModule {}
