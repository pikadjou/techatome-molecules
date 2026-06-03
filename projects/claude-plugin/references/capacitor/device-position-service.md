# `TaDevicePositionService`
**Quand l'utiliser** : Obtenir la position GPS de l'appareil via Capacitor Geolocation.
**Propriétés** :
- `currentPosition: Position | null` — position GPS courante (synchrone)
- `canAccessPosition: boolean` — permission de géolocalisation accordée (synchrone)

**Méthodes** :
- `fetchCanAccessPosition(): void` — vérifie et met à jour la permission
- `fetchCurrentPosition(): void` — récupère la position courante

**Notes** : `providedIn: 'root'`. Utilise `@capacitor/geolocation`. Les résultats sont stockés en interne via BehaviorSubject. Appeler `fetchCanAccessPosition()` avant `fetchCurrentPosition()`.
