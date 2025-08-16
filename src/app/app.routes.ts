import { Routes } from '@angular/router';

import { TaRoutes } from '@ta/menu';
import { categoriesRoutes, ECategoriesRoute } from './features/categories/categories.routes';
import { documentsRoutes, EDocumentsRoute } from './features/documents/documents.routes';
import { HomePage } from './features/base/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: TaRoutes.getUrl([ECategoriesRoute.categories]),
    children: categoriesRoutes,
  },
  {
    path: TaRoutes.getUrl([EDocumentsRoute.documents]),
    children: documentsRoutes,
  },
];
