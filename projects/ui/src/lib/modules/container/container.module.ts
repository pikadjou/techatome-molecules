import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { TaIconsModule } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaDirectivePipeModule } from "@ta/utils";

import { TaUiModule } from "../../components/ui/ui.module";
import { TaLayoutModule } from "../layout/layout.module";
import { EmptyComponent } from "./empty/empty.component";
import { ErrorComponent } from "./error/error.component";
import { LoaderComponent } from "./loader/loader.component";
import { PlaceholderComponent } from "./placeholder/placeholder.component";
import { SwiperLightComponent } from "./swiper-light/swiper-light.component";
import { ContainerValidationComponent } from "./validation/cta/container-validation.component";
import { ValidationModal } from "./validation/modal/modal-validation.component";

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaContainerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ContainerValidationComponent, EmptyComponent, ErrorComponent } from '@ta/library-name';
 */
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    TaDirectivePipeModule,
    TaUiModule,
    TaIconsModule,
    TranslatePipe,
    TaLayoutModule,
    ContainerValidationComponent,
    ValidationModal,
    EmptyComponent,
    ErrorComponent,
    LoaderComponent,
    PlaceholderComponent,
    SwiperLightComponent,
  ],
  declarations: [],
  exports: [
    ContainerValidationComponent,
    EmptyComponent,
    ErrorComponent,
    LoaderComponent,
    SwiperLightComponent,
  ],
})
export class TaContainerModule {}
