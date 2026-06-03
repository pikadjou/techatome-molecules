# `provideGoogleMaps()` — provider Google Maps
**Quand l'utiliser** : Initialise le chargement de l'API Google Maps au démarrage de l'application.
**Usage** :
```typescript
// app.config.ts
import { provideGoogleMaps } from '@ta/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideGoogleMaps(),
  ]
};
```
**Notes** : Utilise `APP_INITIALIZER` pour charger l'API via `GoogleMapsLoaderService`. La clé API doit être configurée dans `GoogleMapsLoaderService`.
