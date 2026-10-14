# `provideGoogleMaps({ apiKey })` — provider Google Maps
**Quand l'utiliser** : Initialise le chargement de l'API Google Maps au démarrage de l'application.
**Usage** :
```typescript
// app.config.ts
import { provideGoogleMaps } from '@ta/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideGoogleMaps({ apiKey: environment.googleMapsApiKey }),
  ]
};
```
**Options** : `apiKey` (obligatoire), `libraries` (défaut `['places', 'geometry']`).
**Notes** : Enregistre la configuration sous le jeton `TA_GOOGLE_MAPS_CONFIG` et charge l'API via `APP_INITIALIZER` (`TaGoogleMapsLoaderService.load$()`). La clé n'est jamais embarquée dans la lib : `ta-google-maps` lit le même jeton pour l'API Routes.
