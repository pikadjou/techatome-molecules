# `TaPwaService`
**Quand l'utiliser** : Détecter et déclencher l'installation PWA (Progressive Web App) sur les navigateurs compatibles.
**Propriétés** :
- `isPWaCapability$: BehaviorSubject<boolean>` — `true` si le navigateur propose l'installation PWA

**Méthodes** :
- `isPWaCapability(): boolean` — vérification synchrone de la disponibilité PWA
- `launchInstall(): void` — déclenche la boîte de dialogue d'installation native

**Configuration** :
```typescript
// app.config.ts
import { providePwa } from '@ta/capacitor';

providers: [
  providePwa({ active: true })
]
```

**Notes** : `providedIn: 'root'`. Nécessite `providePwa()` avec `active: true`. Écoute l'événement `beforeinstallprompt`.
