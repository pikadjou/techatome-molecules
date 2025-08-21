import { Routes } from '@angular/router';

export const UI_SHOWCASE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./ui-showcase.component').then(m => m.UiShowcaseComponent)
  },
  {
    path: 'buttons',
    loadComponent: () => import('./components/buttons-demo/buttons-demo.component').then(m => m.ButtonsDemoComponent)
  },
  {
    path: 'badges',
    loadComponent: () => import('./components/badges-demo/badges-demo.component').then(m => m.BadgesDemoComponent)
  },
  {
    path: 'banners',
    loadComponent: () => import('./components/banners-demo/banners-demo.component').then(m => m.BannersDemoComponent)
  },
  {
    path: 'cards',
    loadComponent: () => import('./components/cards-demo/cards-demo.component').then(m => m.CardsDemoComponent)
  }
];