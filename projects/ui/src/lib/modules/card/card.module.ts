import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamIconsModule } from '@ta/icons';

import { CamUiModule } from '../../components/ui/ui.module';
import { CardImageComponent } from './card-image/card-image.component';
import { CardComponent } from './card.component';
import { CardContentComponent } from './content/card-content.component';
import { CardCtaComponent } from './cta/card-cta.component';
import { DashboardCardComponent } from './dashboard/dashboard.component';
import { CardHeaderComponent } from './header/card-header.component';
import { CardSubtitleComponent } from './subtitle/card-subtitle.component';
import { CardTagComponent } from './tag/card-tag.component';
import { CardTitleComponent } from './title/card-title.component';

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

@NgModule({
  declarations: declarations.concat(exports),
  imports: [CommonModule, CamUiModule, CamIconsModule],
  exports: exports,
})
export class CamCardModule {}
