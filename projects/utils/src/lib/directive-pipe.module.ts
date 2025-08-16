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

@NgModule({
  declarations: [
    FileSizePipe,
    JoinPipe,
    LetDirective,
    PluralTranslatePipe,
    StopPropagationDirective,
    TypedTemplateDirective,
    OnRenderDirective,
  ],
  imports: [CommonModule, SafePipe],
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
