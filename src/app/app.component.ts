import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NotificationBoxComponent } from '@ta/notification';
import { LayoutPageComponent } from '@ta/ui';
import { NavigationComponent, MainMenuComponent } from '@ta/menu';
import { MenuItem } from '@ta/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationBoxComponent, LayoutPageComponent, NavigationComponent, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Techatome Molecules Sandbox';

  mainMenu: MenuItem[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      route: '/dashboard',
      icon: { name: 'dashboard' }
    },
    {
      id: 'ui',
      title: 'UI Components',
      route: '/ui',
      icon: { name: 'widgets' }
    },
    {
      id: 'menu',
      title: 'Menu Components',
      route: '/menu',
      icon: { name: 'menu' }
    },
    {
      id: 'forms',
      title: 'Form Components',
      route: '/forms',
      icon: { name: 'edit' }
    },
    {
      id: 'layout',
      title: 'Layout Components',
      route: '/layout',
      icon: { name: 'view_quilt' }
    },
    {
      id: 'charts',
      title: 'Charts',
      route: '/charts',
      icon: { name: 'bar_chart' }
    },
    {
      id: 'icons',
      title: 'Icons',
      route: '/icons',
      icon: { name: 'emoji_symbols' }
    },
    {
      id: 'files',
      title: 'File Management',
      route: '/files',
      icon: { name: 'folder' }
    },
    {
      id: 'core',
      title: 'Core Components',
      route: '/core',
      icon: { name: 'settings' }
    },
    {
      id: 'notification',
      title: 'Notifications',
      route: '/notification',
      icon: { name: 'notifications' }
    }
  ];
}
