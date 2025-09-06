import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TextComponent, TitleComponent } from '@ta/ui';

import { LayoutContentComponent } from '../../../core/layout/layout-content/layout-content.component';
import { LayoutFirstLevelComponent } from '../../../core/layout/layout-first-level/layout-first-level.component';
import { LayoutTitleComponent } from '../../../core/layout/layout-title/layout-title.component';

@Component({
  standalone: true,
  selector: '',
  imports: [
    LayoutContentComponent,
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    NgFor,
    RouterLink,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
})
export class ShowcasePage {
  components = [
    {
      title: 'Buttons',
      description: 'Boutons standards, actions et duaux',
      route: '/ui-components/buttons',
      icon: 'smart_button',
      color: '#2196F3',
    },
    {
      title: 'Badges',
      description: 'Badges, notifications et indicateurs',
      route: '/ui-components/badges',
      icon: 'badge',
      color: '#4CAF50',
    },
    {
      title: 'Banners',
      description: 'Messages informatifs et bannières',
      route: '/ui-components/banners',
      icon: 'Tapaign',
      color: '#FF9800',
    },
    {
      title: 'Cards',
      description: 'Cartes et conteneurs de contenu',
      route: '/ui-components/cards',
      icon: 'credit_card',
      color: '#9C27B0',
    },
  ];
}
