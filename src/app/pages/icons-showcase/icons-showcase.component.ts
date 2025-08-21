import { Component } from '@angular/core';
import { MaterialIconComponent, FontIconComponent, LocalIconComponent } from '@ta/icons';
import { TitleComponent, TextComponent } from '@ta/ui';

@Component({
  selector: 'app-icons-showcase',
  standalone: true,
  imports: [FontIconComponent, LocalIconComponent, MaterialIconComponent, TextComponent, TitleComponent],
  templateUrl: './icons-showcase.component.html',
  styleUrl: './icons-showcase.component.scss'
})
export class IconsShowcaseComponent {
  materialIcons = [
    'home', 'search', 'settings', 'favorite', 'star', 'person',
    'delete', 'edit', 'add', 'check', 'close', 'arrow_forward',
    'dashboard', 'menu', 'notifications', 'help', 'info', 'warning'
  ];

  iconSizes = ['small', 'medium', 'large'];
}