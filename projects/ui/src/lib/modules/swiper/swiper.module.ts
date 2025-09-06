import { NgModule } from '@angular/core';

import { SwiperComponent } from './swiper.component';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaSwiperModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { SwiperComponent } from '@ta/library-name';
 */
@NgModule({
  declarations: [],
  imports: [SwiperComponent],
  exports: [SwiperComponent],
  providers: [],
})
export class TaSwiperModule {}
