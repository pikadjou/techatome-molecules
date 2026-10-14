import { InjectionToken } from "@angular/core";

export interface TaGoogleMapsConfig {
  /** Clé d'API Google Maps, fournie par l'application hôte. */
  apiKey: string;
  /** Bibliothèques Google Maps à charger (places et geometry par défaut). */
  libraries?: string[];
}

export const TA_GOOGLE_MAPS_CONFIG = new InjectionToken<TaGoogleMapsConfig>("TA_GOOGLE_MAPS_CONFIG");
