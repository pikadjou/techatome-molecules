import { APP_INITIALIZER, Provider } from '@angular/core';

import { GoogleMapsLoaderService } from './googleMapsLoader.service';

export function initializeGoogleMaps(loader: GoogleMapsLoaderService): () => Promise<void> {
  return () => loader.load();
}

export const provideGoogleMaps = (): Provider => [
  {
    provide: APP_INITIALIZER,
    useFactory: initializeGoogleMaps,
    deps: [GoogleMapsLoaderService],
    multi: true,
  },
];
