import { APP_INITIALIZER, Provider } from "@angular/core";

import { Observable } from "rxjs";

import { TA_GOOGLE_MAPS_CONFIG, TaGoogleMapsConfig } from "./google-maps.config";
import { TaGoogleMapsLoaderService } from "./googleMapsLoader.service";

export function initializeGoogleMaps(loader: TaGoogleMapsLoaderService): () => Observable<void> {
  return () => loader.load$();
}

export const provideGoogleMaps = (config: TaGoogleMapsConfig): Provider => [
  { provide: TA_GOOGLE_MAPS_CONFIG, useValue: config },
  {
    provide: APP_INITIALIZER,
    useFactory: initializeGoogleMaps,
    deps: [TaGoogleMapsLoaderService],
    multi: true,
  },
];
