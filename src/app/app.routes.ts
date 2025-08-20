import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'ui',
    loadChildren: () => import('./pages/ui-showcase/ui-showcase.routes').then(m => m.UI_SHOWCASE_ROUTES)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu-showcase/menu-showcase.routes').then(m => m.MENU_SHOWCASE_ROUTES)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/form-showcase/form-showcase.routes').then(m => m.FORM_SHOWCASE_ROUTES)
  },
  {
    path: 'layout',
    loadChildren: () => import('./pages/layout-showcase/layout-showcase.routes').then(m => m.LAYOUT_SHOWCASE_ROUTES)
  },
  {
    path: 'charts',
    loadComponent: () => import('./pages/charts-showcase/charts-showcase.component').then(m => m.ChartsShowcaseComponent)
  },
  {
    path: 'icons',
    loadComponent: () => import('./pages/icons-showcase/icons-showcase.component').then(m => m.IconsShowcaseComponent)
  },
  {
    path: 'files',
    loadChildren: () => import('./pages/files-showcase/files-showcase.routes').then(m => m.FILES_SHOWCASE_ROUTES)
  },
  {
    path: 'core',
    loadChildren: () => import('./pages/core-showcase/core-showcase.routes').then(m => m.CORE_SHOWCASE_ROUTES)
  },
  {
    path: 'notification',
    loadComponent: () => import('./pages/notification-showcase/notification-showcase.component').then(m => m.NotificationShowcaseComponent)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
