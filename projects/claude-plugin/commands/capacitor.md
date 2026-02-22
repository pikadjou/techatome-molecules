---
description: Assistant contextuel @ta/capacitor — intégration mobile Capacitor, services natifs
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/capacitor — Assistant contextuel

Tu es un expert de la librairie `@ta/capacitor` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/capacitor`
**Import path** : `@ta/capacitor`
**Localisation** : `projects/capacitor/`
**Plateforme cible** : Mobile (iOS/Android) via Capacitor + PWA

## Exports clés

### Services (`lib/services/`)

- `DeviceInfoService` — informations sur l'appareil (OS, modèle, version)
- `DeviceNetworkService` — état du réseau (connecté, WiFi, 4G)
- `DevicePositionService` — géolocalisation GPS
- `PwaService` — gestion des fonctionnalités PWA

### Module

- `CapacitorModule` — module NgModule

## Patterns d'utilisation

### Informations sur l'appareil

```typescript
import { DeviceInfoService } from '@ta/capacitor';

@Injectable({ providedIn: 'root' })
export class MyService {
  private deviceInfo = inject(DeviceInfoService);

  async checkPlatform() {
    const info = await this.deviceInfo.getInfo();
    console.log(info.platform); // 'ios' | 'android' | 'web'
    console.log(info.model);
    console.log(info.osVersion);
  }

  isMobile() {
    return this.deviceInfo.isMobile();
  }
}
```

### État du réseau

```typescript
import { DeviceNetworkService } from '@ta/capacitor';

@Component({ standalone: true })
export class AppComponent implements OnInit {
  private network = inject(DeviceNetworkService);

  isOnline$ = this.network.isOnline$;
  connectionType$ = this.network.connectionType$;

  ngOnInit() {
    this.network.isOnline$.subscribe(online => {
      if (!online) {
        // afficher un message de déconnexion
      }
    });
  }
}
```

### Géolocalisation

```typescript
import { DevicePositionService } from '@ta/capacitor';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private position = inject(DevicePositionService);

  async getCurrentLocation() {
    const coords = await this.position.getCurrentPosition();
    return { lat: coords.latitude, lng: coords.longitude };
  }

  watchLocation() {
    return this.position.watchPosition();
  }
}
```

### PWA Service

```typescript
import { PwaService } from '@ta/capacitor';

@Component({ standalone: true })
export class AppComponent {
  private pwa = inject(PwaService);

  canInstall$ = this.pwa.canInstall$;

  installApp() {
    this.pwa.install();
  }

  checkForUpdates() {
    return this.pwa.checkForUpdates();
  }
}
```

## Conventions

- Toujours vérifier la plateforme (`DeviceInfoService`) avant d'utiliser des APIs natives
- Les services sont conçus pour fonctionner à la fois sur mobile (Capacitor) et web (PWA)
- Utiliser `isOnline$` observable pour réagir aux changements de réseau
- Les permissions (géolocalisation, appareil photo) doivent être demandées via Capacitor

## Revue de code

- Vérifier que les appels Capacitor sont encapsulés dans `try/catch` (APIs natives peuvent échouer)
- S'assurer que la vérification de plateforme précède les appels natifs
- Vérifier que `DeviceNetworkService` est utilisé pour détecter la connexion
- Ne pas accéder directement aux plugins Capacitor — passer par les services de `@ta/capacitor`

## Ajout d'un nouveau service dans @ta/capacitor

1. Créer dans `projects/capacitor/src/lib/services/`
2. Exporter depuis `projects/capacitor/src/lib/services/public-api.ts`
3. S'assurer que le service fonctionne sur web ET mobile
