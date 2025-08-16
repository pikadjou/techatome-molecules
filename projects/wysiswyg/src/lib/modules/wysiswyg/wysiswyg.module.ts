import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamNotificationModule } from '@camelot/notification';
import { CamUiModule } from '@camelot/ui';
import { SafePipe } from '@camelot/utils';

import { BlockTextComponent } from './components/block-text/block-text.component';
import { EditorInputComponent } from './components/input/input.component';

@NgModule({
  declarations: [BlockTextComponent, EditorInputComponent],
  imports: [CommonModule, CamUiModule, CamNotificationModule, SafePipe],
  exports: [BlockTextComponent, EditorInputComponent],
})
export class CamWysiswygModule {}
