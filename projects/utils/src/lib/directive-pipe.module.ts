import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LetDirective } from './directive/let.directive';
import { OnRenderDirective } from './directive/on-render.directive';
import { StopPropagationDirective } from './directive/stop-propagation.directive';
import { TypedTemplateDirective } from './directive/type-template-directive';
import { FileSizePipe } from './pipe/file-size.pipe';
import { JoinPipe } from './pipe/join.pipe';
import { PluralTranslatePipe } from './pipe/plural.pipe';
import { SafePipe } from './pipe/safe.pipe';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 * 
 * @example
 * // Instead of importing the module:
 * // import { CamDirectivePipeModule } from '@ta/library-name';
 * 
 * // Import the standalone components directly:
 * import { FileSizePipe, JoinPipe, LetDirective } from '@ta/library-name';
 */
@NgModule({
  declarations: [
    FileSizePipe,
    JoinPipe,
    LetDirective,
    TypedTemplateDirective,
    OnRenderDirective,
  ],
  imports: [CommonModule, SafePipe, PluralTranslatePipe, StopPropagationDirective],
  exports: [
    FileSizePipe,
    JoinPipe,
    LetDirective,
    PluralTranslatePipe,
    StopPropagationDirective,
    TypedTemplateDirective,
    OnRenderDirective,
  ],
})
export class CamDirectivePipeModule {
  constructor() {}
}
