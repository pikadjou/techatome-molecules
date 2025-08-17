import { Component } from '@angular/core';
import { LayoutWithBottomNavComponent } from '../with-bottom-nav/layout-with-bottom-nav.component';
import { LayoutNavComponent } from '../layout-nav/layout-nav.component';

@Component({
selector: 'ta-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
  standalone: true,
  imports: [LayoutWithBottomNavComponent, LayoutNavComponent],
})
export class LayoutPageComponent {}
