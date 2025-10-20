import { Routes } from '@angular/router';

import { TenantApplicationComponent } from './components/tenant-application/tenant-application.component';

export const tenantApplicationRoutes: Routes = [
  {
    path: 'tenant-application/:estateId/:tenantId',
    component: TenantApplicationComponent,
  },
];
