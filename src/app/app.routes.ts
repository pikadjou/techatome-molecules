import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/overview',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./features/dashboard/pages/overview/overview.component').then(c => c.OverviewPage),
      }
    ]
  },
  {
    path: 'ui-components',
    children: [
      {
        path: 'showcase',
        loadComponent: () => import('./features/ui-components/pages/showcase/showcase.component').then(c => c.ShowcasePage),
      },
      {
        path: 'buttons',
        loadComponent: () => import('./features/ui-components/pages/buttons/buttons.component').then(c => c.ButtonsPage),
      },
      {
        path: 'badges',
        loadComponent: () => import('./features/ui-components/pages/badges/badges.component').then(c => c.BadgesPage),
      },
      {
        path: 'banners',
        loadComponent: () => import('./features/ui-components/pages/banners/banners.component').then(c => c.BannersPage),
      },
      {
        path: 'cards',
        loadComponent: () => import('./features/ui-components/pages/cards/cards.component').then(c => c.CardsPage),
      }
    ]
  },
  {
    path: 'charts',
    children: [
      {
        path: 'showcase',
        loadComponent: () => import('./features/charts/pages/showcase/showcase.component').then(c => c.ChartsShowcasePage),
      },
      {
        path: 'bar-chart',
        loadComponent: () => import('./features/charts/pages/bar-chart/bar-chart.component').then(c => c.BarChartPage),
      },
      {
        path: 'line-chart',
        loadComponent: () => import('./features/charts/pages/line-chart/line-chart.component').then(c => c.LineChartPage),
      },
      {
        path: 'pie-chart',
        loadComponent: () => import('./features/charts/pages/pie-chart/pie-chart.component').then(c => c.PieChartPage),
      },
      {
        path: 'doughnut-chart',
        loadComponent: () => import('./features/charts/pages/doughnut-chart/doughnut-chart.component').then(c => c.DoughnutChartPage),
      }
    ]
  },
  // Legacy redirects for compatibility
  {
    path: 'ui',
    redirectTo: '/ui-components/showcase',
  },
  {
    path: '**',
    redirectTo: '/dashboard/overview',
  },
];
