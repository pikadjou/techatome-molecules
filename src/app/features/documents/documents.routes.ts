import { Routes } from '@angular/router';

import { TaRoutes } from '@ta/menu';

export enum EDocumentsRoute {
  documents = 'documents',
  list = 'list',
  view = 'view',
  form = 'form',
}

TaRoutes.addRoute({
  key: EDocumentsRoute.documents,
  url: 'documents',
  children: [
    {
      key: EDocumentsRoute.view,
      url: 'view/:id',
    },
    {
      key: EDocumentsRoute.form,
      url: 'formulaire/:id',
    },
  ],
});

export const documentsRoutes: Routes = [
  {
    path: TaRoutes.getUrl([EDocumentsRoute.documents, EDocumentsRoute.view]),
    loadComponent: () => import('./pages/view/view.component').then((c) => c.ViewPage),
  },
  {
    path: TaRoutes.getUrl([EDocumentsRoute.documents, EDocumentsRoute.form]),
    loadComponent: () => import('./pages/form/form.component').then((c) => c.FormPage),
  },
];
