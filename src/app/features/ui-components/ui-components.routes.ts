import { Routes } from '@angular/router';

import { TaRoutes } from '@ta/menu';

export enum EUIComponentsRoute {
  uiComponents = 'ui-components',
  showcase = 'showcase',
  buttons = 'buttons',
  badges = 'badges',
  banners = 'banners',
  cards = 'cards',
}

TaRoutes.addRoute({
  key: EUIComponentsRoute.uiComponents,
  url: 'ui-components',
  children: [
    {
      key: EUIComponentsRoute.showcase,
      url: 'showcase',
    },
    {
      key: EUIComponentsRoute.buttons,
      url: 'buttons',
    },
    {
      key: EUIComponentsRoute.badges,
      url: 'badges',
    },
    {
      key: EUIComponentsRoute.banners,
      url: 'banners',
    },
    {
      key: EUIComponentsRoute.cards,
      url: 'cards',
    },
  ],
});

export const uiComponentsRoutes: Routes = [
  {
    path: TaRoutes.getUrl([EUIComponentsRoute.uiComponents, EUIComponentsRoute.showcase]),
    loadComponent: () => import('./pages/showcase/showcase.component').then((c) => c.ShowcasePage),
  },
  {
    path: TaRoutes.getUrl([EUIComponentsRoute.uiComponents, EUIComponentsRoute.buttons]),
    loadComponent: () => import('./pages/buttons/buttons.component').then((c) => c.ButtonsPage),
  },
  {
    path: TaRoutes.getUrl([EUIComponentsRoute.uiComponents, EUIComponentsRoute.badges]),
    loadComponent: () => import('./pages/badges/badges.component').then((c) => c.BadgesPage),
  },
  {
    path: TaRoutes.getUrl([EUIComponentsRoute.uiComponents, EUIComponentsRoute.banners]),
    loadComponent: () => import('./pages/banners/banners.component').then((c) => c.BannersPage),
  },
  {
    path: TaRoutes.getUrl([EUIComponentsRoute.uiComponents, EUIComponentsRoute.cards]),
    loadComponent: () => import('./pages/cards/cards.component').then((c) => c.CardsPage),
  },
];