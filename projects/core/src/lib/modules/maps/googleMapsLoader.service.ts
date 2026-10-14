import { Injectable, inject } from "@angular/core";

import { Observable } from "rxjs";

import { TA_GOOGLE_MAPS_CONFIG } from "./google-maps.config";

type GoogleMapsWindow = Window & { google?: { maps?: unknown }; initMapLoader?: () => void };

@Injectable({ providedIn: "root" })
export class TaGoogleMapsLoaderService {
  private readonly _config = inject(TA_GOOGLE_MAPS_CONFIG);

  get apiKey(): string {
    return this._config.apiKey;
  }

  public load$(): Observable<void> {
    return new Observable<void>((subscriber) => {
      const win = window as GoogleMapsWindow;
      if (win.google?.maps) {
        subscriber.next();
        subscriber.complete();
        return;
      }

      const libraries = (this._config.libraries ?? ["places", "geometry"]).join(",");
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this._config.apiKey}&libraries=${libraries}&v=weekly&callback=initMapLoader`;
      script.async = true;
      script.defer = true;
      script.onerror = () => subscriber.error(new Error("Google Maps API failed to load."));
      script.setAttribute("data-google-maps-api", "true");

      win.initMapLoader = () => {
        subscriber.next();
        subscriber.complete();
      };

      document.head.appendChild(script);
    });
  }
}
