import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FontIconComponent } from "./components/font-icon/font-icon.component";
import { LocalIconComponent } from "./components/local-icon/local-icon.component";
import { MaterialIconComponent } from "./components/material-icon/material-icon.component";
import { TaIconsService } from "./services/icons.service";

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaIconsModule } from '@ta/icons';
 *
 * // Import the standalone components directly:
 * import { FontIconComponent, LocalIconComponent, MaterialIconComponent } from '@ta/icons';
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocalIconComponent,
    MaterialIconComponent,
    FontIconComponent,
  ],
  exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent],
  providers: [TaIconsService],
})
export class TaIconsModule {}
