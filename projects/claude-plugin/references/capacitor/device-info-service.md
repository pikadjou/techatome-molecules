# `TaDeviceInfoService`
**Quand l'utiliser** : Détecter le système d'exploitation et le type d'appareil (mobile vs desktop) via Capacitor.
**Propriétés** :
- `os$: Observable<OperatingSystem>` — OS de l'appareil (`'android' | 'ios' | 'windows' | 'mac' | 'unknown'`)
- `deviceClasses$: Observable<string[]>` — classes CSS de l'appareil (ex: `['ios', 'mobile-device']`)

**Méthodes** :
- `isMobileOs$(): Observable<boolean>` — `true` si android ou ios
- `isWeb$(): Observable<boolean>` — `true` si non mobile
- `isMobileOs(os: OperatingSystem): boolean` — vérification synchrone

**Notes** : `providedIn: 'root'`. Utilise `@capacitor/device`. Appliquer `deviceClasses$` sur `<body>` pour un ciblage CSS adaptatif.
