import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/progress-spinner";
import * as i4 from "@ta/utils";
import * as i5 from "../../components/ui/ui.module";
import * as i6 from "@ta/icons";
import * as i7 from "@ta/translation";
import * as i8 from "../layout/layout.module";
import * as i9 from "./validation/cta/container-validation.component";
import * as i10 from "./validation/modal/modal-validation.component";
import * as i11 from "./empty/empty.component";
import * as i12 from "./error/error.component";
import * as i13 from "./loader/loader.component";
import * as i14 from "./placeholder/placeholder.component";
import * as i15 from "./swiper-light/swiper-light.component";
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
export declare class TaContainerModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TaContainerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TaContainerModule, never, [typeof i1.CommonModule, typeof i2.MatIconModule, typeof i3.MatProgressSpinnerModule, typeof i4.TaDirectivePipeModule, typeof i5.TaUiModule, typeof i6.TaIconsModule, typeof i7.TranslatePipe, typeof i8.TaLayoutModule, typeof i9.ContainerValidationComponent, typeof i10.ValidationModal, typeof i11.EmptyComponent, typeof i12.ErrorComponent, typeof i13.LoaderComponent, typeof i14.PlaceholderComponent, typeof i15.SwiperLightComponent], [typeof i9.ContainerValidationComponent, typeof i11.EmptyComponent, typeof i12.ErrorComponent, typeof i13.LoaderComponent, typeof i15.SwiperLightComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TaContainerModule>;
}
