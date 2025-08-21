import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';

import { NotificationBoxComponent } from '@ta/notification';
import { TitleComponent } from '@ta/ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, NotificationBoxComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Techatome Molecules Sandbox';

  mainMenu = [
    {
      title: 'Dashboard',
      route: '/dashboard/overview',
      icon: { name: 'dashboard' }
    },
    {
      title: 'UI Components',
      route: '/ui-components/showcase',
      icon: { name: 'widgets' }
    },
    {
      title: 'Charts',
      route: '/charts/showcase',
      icon: { name: 'bar_chart' }
    }
  ];
}
