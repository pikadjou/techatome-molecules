import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamFormInputsModule } from '@ta/form-input';
import { CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';

import { CmsComponent } from './components/cms/cms.component';
import { SaleComponent } from './components/sale/sale.component';
import { LinkComponent } from './components/types/link/link.component';
import { RichTextComponent } from './components/types/rich-text/rich-text.component';
import { TextComponent } from './components/types/text/text.component';
import { CamTranslationStrapi } from './translation.service';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 * 
 * @example
 * // Instead of importing the module:
 * // import { CamStrapiModule } from '@ta/library-name';
 * 
 * // Import the standalone components directly:
 * import { CmsComponent, SaleComponent } from '@ta/library-name';
 */
@NgModule({

  declarations: [],
  imports: [CommonModule, CamUiModule, CamDirectivePipeModule, CamContainerModule, CamFormInputsModule, CmsComponent, RichTextComponent, LinkComponent, TextComponent, SaleComponent],
  exports: [CmsComponent, SaleComponent],

})
export class CamStrapiModule {
  constructor() {
    CamTranslationStrapi.getInstance();
  }
}
