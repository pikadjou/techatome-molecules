# `provideGTM()` — provider Google Tag Manager
**Quand l'utiliser** : Active Google Tag Manager dans l'application.
**Usage** :
```typescript
import { provideGTM } from '@ta/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideGTM({ gtmId: 'GTM-XXXXXXX', enabled: true }),
  ]
};
```
**Interface** :
```typescript
interface IGTMConfig {
  gtmId: string;
  enabled?: boolean;
}
```
**Exports** : Ré-exporte `TaGoogleTagManagerService` (alias de `GoogleTagManagerService`).
