import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent, TitleComponent, TextComponent } from '@ta/ui';

@Component({
  selector: 'app-ui-showcase',
  standalone: true,
  imports: [RouterLink, CardComponent, TitleComponent, TextComponent],
  templateUrl: './ui-showcase.component.html',
  styleUrl: './ui-showcase.component.scss'
})
export class UiShowcaseComponent {
  components = [
    {
      title: 'Buttons',
      description: 'Boutons standards, actions et duaux',
      route: '/ui/buttons',
      icon: 'smart_button'
    },
    {
      title: 'Badges',
      description: 'Badges, notifications et indicateurs',
      route: '/ui/badges',
      icon: 'badge'
    },
    {
      title: 'Banners',
      description: 'Messages informatifs et bannières',
      route: '/ui/banners',
      icon: 'campaign'
    },
    {
      title: 'Cards',
      description: 'Cartes et conteneurs de contenu',
      route: '/ui/cards',
      icon: 'credit_card'
    }
  ];
}