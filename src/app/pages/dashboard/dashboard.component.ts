import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { TitleComponent, TextComponent } from '@ta/ui';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink, TextComponent, TitleComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  sections = [
    {
      title: 'UI Components',
      description: 'Buttons, badges, banners et autres éléments d\'interface utilisateur',
      route: '/ui',
      icon: 'widgets',
      color: '#2196F3'
    },
    {
      title: 'Charts',
      description: 'Graphiques et visualisations de données',
      route: '/charts',
      icon: 'bar_chart',
      color: '#F44336'
    },
    {
      title: 'Icons',
      description: 'Icônes Material, Font et locales',
      route: '/icons',
      icon: 'emoji_symbols',
      color: '#607D8B'
    }
  ];
}