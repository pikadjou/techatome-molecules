import { InjectionToken } from '@angular/core';

import { TenantConfig } from './interface';

export const TENANT_CONFIG_TOKEN = new InjectionToken<TenantConfig>('TenantConfig');
