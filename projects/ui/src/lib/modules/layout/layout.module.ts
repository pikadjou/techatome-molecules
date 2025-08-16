import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { CamUiModule } from '../../components/ui/ui.module';
import { LayoutContentComponent } from './layout-content/layout-content.component';
import { LayoutNotFoundComponent } from './layout-error/not-found/not-found.component';
import { LayoutFlexComponent } from './layout-flex/layout-flex.component';
import { LayoutFullPanelComponent } from './layout-full-panel/layout-full-panel.component';
import { LayoutHeaderDefaultComponent } from './layout-header/layout-header-default/layout-header-default.component';
import { LayoutHeaderLogoComponent } from './layout-header/layout-header-logo/layout-header-logo.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { TemplateModalContainer } from './layout-modal/layout-modal-container/layout-modal-container.component';
import { LayoutModalComponent } from './layout-modal/layout-modal.component';
import { LayoutNavComponent } from './layout-nav/layout-nav.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayoutPanelComponent } from './layout-panel/layout-panel.component';
import { LayoutSideContentComponent } from './layout-side/layout-side-content/layout-side-content.component';
import { LayoutSideCtaComponent } from './layout-side/layout-side-cta/layout-side-cta.component';
import { LayoutSideComponent } from './layout-side/layout-side.component';
import { LayoutTitleComponent } from './layout-title/layout-title.component';
import { CamTranslationLayout } from './translation.service';
import { LayoutWithBottomNavComponent } from './with-bottom-nav/layout-with-bottom-nav.component';
import { LayoutWithPanelComponent } from './with-panel/layout-with-panel.component';

@NgModule({
  declarations: [
    LayoutContentComponent,
    LayoutHeaderComponent,
    LayoutNavComponent,
    LayoutPanelComponent,
    LayoutWithBottomNavComponent,
    LayoutWithPanelComponent,
    LayoutPageComponent,
    LayoutTitleComponent,
    LayoutHeaderDefaultComponent,
    LayoutModalComponent,
    LayoutModalComponent,
    LayoutHeaderLogoComponent,
    LayoutFullPanelComponent,
    LayoutSideCtaComponent,
    LayoutSideComponent,
    LayoutSideContentComponent,
    TemplateModalContainer,
    LayoutNotFoundComponent,
    LayoutFlexComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    CamUiModule,
    CamIconsModule,
    MatMenuModule,
    CamDirectivePipeModule,
    MatDialogModule,
    TranslatePipe,
  ],
  exports: [
    LayoutFlexComponent,
    LayoutContentComponent,
    LayoutHeaderComponent,
    LayoutNavComponent,
    LayoutPanelComponent,
    LayoutWithBottomNavComponent,
    LayoutWithPanelComponent,
    LayoutPageComponent,
    LayoutTitleComponent,
    LayoutHeaderDefaultComponent,
    LayoutModalComponent,
    LayoutHeaderLogoComponent,
    LayoutNotFoundComponent,
    TemplateModalContainer,
    LayoutFullPanelComponent,
    LayoutSideCtaComponent,
    LayoutSideComponent,
    LayoutSideContentComponent,
  ],
})
export class CamLayoutModule {
  constructor() {
    CamTranslationLayout.getInstance();
  }
}
