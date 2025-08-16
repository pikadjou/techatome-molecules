import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontIconComponent } from './components/font-icon/font-icon.component';
import { LocalIconComponent } from './components/local-icon/local-icon.component';
import { MaterialIconComponent } from './components/material-icon/material-icon.component';
import { CamIconsService } from './services/icons.service';

@NgModule({
  declarations: [LocalIconComponent, MaterialIconComponent, FontIconComponent],
  imports: [CommonModule],
  exports: [LocalIconComponent, MaterialIconComponent, FontIconComponent],
  providers: [CamIconsService],
})
export class CamIconsModule {}
