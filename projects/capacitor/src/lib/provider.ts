import { Provider, importProvidersFrom } from '@angular/core';

import { ApolloModule } from 'apollo-angular';

import { IPwaConfig, PWA_CONFIG_KEY } from './services/pwa.service';

export const providePwa = (data: IPwaConfig): Provider => [
  importProvidersFrom(ApolloModule),
  {
    provide: PWA_CONFIG_KEY,
    useValue: data,
  },
];
