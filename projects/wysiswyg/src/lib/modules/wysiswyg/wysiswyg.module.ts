import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TaUiModule } from '@ta/ui';
import { SafePipe } from '@ta/utils';

import { BlockTextComponent } from './components/block-text/block-text.component';
import { EditorInputComponent } from './components/input/input.component';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaWysiswygModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { BlockTextComponent, EditorInputComponent } from '@ta/library-name';
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, TaUiModule, SafePipe, BlockTextComponent, EditorInputComponent],
  exports: [BlockTextComponent, EditorInputComponent],
})
export class TaWysiswygModule {}
