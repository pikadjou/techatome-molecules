import { Component } from '@angular/core';
import { LayoutFirstLevelComponent } from '../../../core/layout/layout-first-level/layout-first-level.component';
import { LayoutTitleComponent } from '../../../core/layout/layout-title/layout-title.component';
import { LayoutContentComponent } from '../../../core/layout/layout-content/layout-content.component';
import { MatIcon } from '@angular/material/icon';
import { ButtonComponent, TitleComponent, TextComponent, BannerComponent } from '@ta/ui';

@Component({
  standalone: true,
  selector: 'app-bar-chart',
  imports: [
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    LayoutContentComponent,
    MatIcon,
    ButtonComponent,
    TitleComponent,
    TextComponent,
    BannerComponent
  ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartPage {
  
  public goBack() {
    window.history.back();
  }
}