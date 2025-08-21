import { Routes } from '@angular/router';

import { TaRoutes } from '@ta/menu';

export type FormKey = 'new';

export enum ECategoriesRoute {
  categories = 'categories',
  list = 'list',
  form = 'form',
}

TaRoutes.addRoute({
  key: ECategoriesRoute.categories,
  url: 'categories',
  children: [
    {
      key: ECategoriesRoute.list,
      url: 'list/:id',
    },
    {
      key: ECategoriesRoute.form,
      url: 'formulaire/:id',
    },
  ],
});

export const categoriesRoutes: Routes = [
  {
    path: TaRoutes.getUrl([ECategoriesRoute.categories, ECategoriesRoute.list]),
    loadComponent: () => import('./pages/list/list.component').then((c) => c.ListPage),
  },
  {
    path: TaRoutes.getUrl([ECategoriesRoute.categories, ECategoriesRoute.form]),
    loadComponent: () => import('./pages/form/form.component').then((c) => c.FormPage),
  },
];
