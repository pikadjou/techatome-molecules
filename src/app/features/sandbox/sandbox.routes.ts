import { Routes } from '@angular/router';

export const SANDBOX_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/sandbox-home/sandbox-home.component').then(m => m.SandboxHomeComponent),
  },
  {
    path: 'ui-components',
    loadComponent: () => import('./pages/ui-components/ui-components.component').then(m => m.UiComponentsComponent),
  },
  {
    path: 'form-components',
    loadComponent: () => import('./pages/form-components/form-components.component').then(m => m.FormComponentsComponent),
  },
  {
    path: 'layout-components',
    loadComponent: () => import('./pages/layout-components/layout-components.component').then(m => m.LayoutComponentsComponent),
  },
  {
    path: 'notification-components',
    loadComponent: () => import('./pages/notification-components/notification-components.component').then(m => m.NotificationComponentsComponent),
  },
  {
    path: 'icon-components',
    loadComponent: () => import('./pages/icon-components/icon-components.component').then(m => m.IconComponentsComponent),
  },
  {
    path: 'wysiwyg-components',
    loadComponent: () => import('./pages/wysiwyg-components/wysiwyg-components.component').then(m => m.WysiwygComponentsComponent),
  },
];