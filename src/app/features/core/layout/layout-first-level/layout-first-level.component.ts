import { Component } from '@angular/core';
import {
  LayoutPageComponent,
  LayoutHeaderComponent,
  LayoutTitleComponent,
  LayoutContentComponent,
  TitleComponent,
  LayoutHeaderDefaultComponent,
} from '@ta/ui';

@Component({
  selector: 'app-layout-first-level',
  standalone: true,
  templateUrl: './layout-first-level.component.html',
  styleUrls: ['./layout-first-level.component.scss'],
  imports: [
    LayoutPageComponent,
    LayoutHeaderComponent,
    LayoutTitleComponent,
    LayoutContentComponent,
    TitleComponent,
    LayoutHeaderDefaultComponent,
  ],
})
export class LayoutFirstLevelComponent {}
