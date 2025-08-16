import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamFormInputsModule } from '@camelot/form-input';
import { CamContainerModule, CamUiModule } from '@camelot/ui';
import { CamDirectivePipeModule } from '@camelot/utils';

import { CmsComponent } from './components/cms/cms.component';
import { SaleComponent } from './components/sale/sale.component';
import { LinkComponent } from './components/types/link/link.component';
import { RichTextComponent } from './components/types/rich-text/rich-text.component';
import { TextComponent } from './components/types/text/text.component';
import { CamTranslationStrapi } from './translation.service';

@NgModule({
  declarations: [CmsComponent, RichTextComponent, LinkComponent, TextComponent, SaleComponent],
  imports: [CommonModule, CamUiModule, CamDirectivePipeModule, CamContainerModule, CamFormInputsModule],
  exports: [CmsComponent, SaleComponent],
})
export class CamStrapiModule {
  constructor() {
    CamTranslationStrapi.getInstance();
  }
}
