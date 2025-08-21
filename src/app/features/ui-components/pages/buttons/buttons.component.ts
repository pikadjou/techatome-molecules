import { Component } from '@angular/core';
import { LayoutFirstLevelComponent } from '../../../core/layout/layout-first-level/layout-first-level.component';
import { LayoutTitleComponent } from '../../../core/layout/layout-title/layout-title.component';
import { LayoutContentComponent } from '../../../core/layout/layout-content/layout-content.component';
import { ButtonComponent } from '../../components/buttons-demo/buttons-demo.component';
import { MatIcon } from '@angular/material/icon';
import { TitleComponent } from '@ta/ui';

@Component({
  standalone: true,
  selector: '',
  imports: [
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    LayoutContentComponent,
    ButtonComponent,
    MatIcon,
    TitleComponent,
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsPage {
  
  public goBack() {
    window.history.back();
  }
}