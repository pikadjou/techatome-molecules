import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TaFormInputsModule } from '@ta/form-input';
import { TaContainerModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';

import { CmsComponent } from './components/cms/cms.component';
import { SaleComponent } from './components/sale/sale.component';
import { LinkComponent } from './components/types/link/link.component';
import { RichTextComponent } from './components/types/rich-text/rich-text.component';
import { TextComponent } from './components/types/text/text.component';
import { TaTranslationStrapi } from './translation.service';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaStrapiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { CmsComponent, SaleComponent } from '@ta/library-name';
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaUiModule,
    TaDirectivePipeModule,
    TaContainerModule,
    TaFormInputsModule,
    CmsComponent,
    RichTextComponent,
    LinkComponent,
    TextComponent,
    SaleComponent,
  ],
  exports: [CmsComponent, SaleComponent],
})
export class TaStrapiModule {
  constructor() {
    TaTranslationStrapi.getInstance();
  }
}
