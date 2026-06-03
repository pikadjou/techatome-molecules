# `TaDeviceNetworkService`
**Quand l'utiliser** : Surveiller l'état de la connexion réseau (online/offline) avec debounce de 10s.
**Propriétés** :
- `isConnected$: BehaviorSubject<boolean>` — état de connexion courant

**Méthodes** :
- `observeNetworkStateChanges(): Promise<void>` — démarre l'écoute des changements réseau (appeler au démarrage)

**Notes** : `providedIn: 'root'`. Utilise `@capacitor/network`. Délai de 10 secondes avant notification pour éviter les faux positifs. Logge les changements via `Logger`.
