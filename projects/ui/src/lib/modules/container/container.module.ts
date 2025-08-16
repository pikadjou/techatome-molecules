import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CamIconsModule } from '@camelot/icons';
import { TranslatePipe } from '@camelot/translation';
import { CamDirectivePipeModule } from '@camelot/utils';

import { CamUiModule } from '../../components/ui/ui.module';
import { CamLayoutModule } from '../layout/layout.module';
import { EmptyComponent } from './empty/empty.component';
import { ErrorComponent } from './error/error.component';
import { LoaderComponent } from './loader/loader.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SwiperLightComponent } from './swiper-light/swiper-light.component';
import { CamTranslationContainer } from './translation.service';
import { ContainerValidationComponent } from './validation/cta/container-validation.component';
import { ValidationModal } from './validation/modal/modal-validation.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CamDirectivePipeModule,
    CamUiModule,
    CamIconsModule,
    TranslatePipe,
    CamDirectivePipeModule,
    CamLayoutModule,
  ],
  declarations: [
    ContainerValidationComponent,
    ValidationModal,
    EmptyComponent,
    ErrorComponent,
    LoaderComponent,
    PlaceholderComponent,
    SwiperLightComponent,
  ],
  exports: [ContainerValidationComponent, EmptyComponent, ErrorComponent, LoaderComponent, SwiperLightComponent],
})
export class CamContainerModule {
  constructor() {
    CamTranslationContainer.getInstance();
  }
}
