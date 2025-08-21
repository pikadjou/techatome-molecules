import { Component } from '@angular/core';
import { 
  LayoutPageComponent, 
  LayoutHeaderComponent, 
  LayoutContentComponent,
  LayoutSideComponent,
  TitleComponent,
  TextComponent 
} from '@ta/ui';

@Component({
  selector: 'app-layout-showcase',
  standalone: true,
  imports: [LayoutPageComponent, LayoutHeaderComponent, LayoutContentComponent, LayoutSideComponent, TitleComponent, TextComponent],
  templateUrl: './layout-showcase.component.html',
  styleUrl: './layout-showcase.component.scss'
})
export class LayoutShowcaseComponent { }