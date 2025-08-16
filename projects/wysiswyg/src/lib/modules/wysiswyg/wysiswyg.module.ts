import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CamNotificationModule } from '@ta/notification';
import { CamUiModule } from '@ta/ui';
import { SafePipe } from '@ta/utils';

import { BlockTextComponent } from './components/block-text/block-text.component';
import { EditorInputComponent } from './components/input/input.component';

@NgModule({
  declarations: [BlockTextComponent, EditorInputComponent],
  imports: [CommonModule, CamUiModule, CamNotificationModule, SafePipe],
  exports: [BlockTextComponent, EditorInputComponent],
})
export class CamWysiswygModule {}
