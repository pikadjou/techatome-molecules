import { Component } from '@angular/core';
import { MenuComponent, NavigationComponent, QuickActionsComponent, ContextMenuComponent } from '@ta/menu';
import { MenuItem } from '@ta/menu';
import { TitleComponent, TextComponent } from '@ta/ui';

@Component({
  selector: 'app-menu-showcase',
  standalone: true,
  imports: [ContextMenuComponent, MenuComponent, NavigationComponent, QuickActionsComponent, TextComponent, TitleComponent],
  templateUrl: './menu-showcase.component.html',
  styleUrl: './menu-showcase.component.scss'
})
export class MenuShowcaseComponent {
  sampleMenu: MenuItem[] = [
    {
      id: 'item1',
      title: 'Dashboard',
      icon: { name: 'dashboard' },
      route: '/dashboard'
    },
    {
      id: 'item2',
      title: 'Settings',
      icon: { name: 'settings' },
      children: [
        {
          id: 'sub1',
          title: 'Profile',
          icon: { name: 'person' },
          route: '/settings/profile'
        },
        {
          id: 'sub2',
          title: 'Preferences',
          icon: { name: 'tune' },
          route: '/settings/preferences'
        }
      ]
    },
    {
      id: 'item3',
      title: 'Help',
      icon: { name: 'help' },
      route: '/help'
    }
  ];

  quickActions: any[] = [
    { 
      icon: 'add',
      label: 'Add',
      action: () => console.log('Add clicked')
    },
    { 
      icon: 'edit',
      label: 'Edit',
      action: () => console.log('Edit clicked')
    },
    { 
      icon: 'delete',
      label: 'Delete',
      action: () => console.log('Delete clicked')
    }
  ];

  contextMenuItems: any[] = [
    { label: 'Copy', action: () => console.log('Copy') },
    { label: 'Paste', action: () => console.log('Paste') },
    { label: 'Delete', action: () => console.log('Delete') }
  ];
}