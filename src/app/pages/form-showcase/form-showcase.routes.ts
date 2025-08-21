import { Routes } from '@angular/router';

export const FORM_SHOWCASE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./form-showcase.component').then(m => m.FormShowcaseComponent)
  }
];