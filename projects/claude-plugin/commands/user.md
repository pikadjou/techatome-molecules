---
description: Assistant contextuel @ta/user — Auth0, AuthGuard, FeatureGuard, taPermissionsService, taUsersService
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/user — Assistant contextuel

Tu es un expert de la librairie `@ta/user` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

## Informations sur la librairie

**Package** : `@ta/user`
**Import path** : `@ta/user`
**Préfixe sélecteur** : `ta-`
**Localisation** : `projects/user/`
**Authentification** : Auth0

## Exports clés

### Guards

- Guards d'authentification/autorisation (depuis `lib/modules/user/guards/`)

### Services

- `UserService` — service utilisateur courant
- `ContactService` — service de gestion des contacts utilisateurs
- `UsersService` — service de gestion de la liste des utilisateurs
- `FunctionsService` — service des fonctions/rôles
- `AvailabilitiesService` — service des disponibilités
- `AuthService` — service d'authentification Auth0
- `PermissionsService` — service de gestion des permissions
- `UserFormFunctionsService` — service formulaire des fonctions
- `UserFormAvailabilitiesService` — service formulaire des disponibilités
- `UserFormService` — service de formulaire utilisateur
- `Permissions` — objet de permissions disponibles

### DTOs

- `UserProfile` — profil utilisateur
- `CurrentUser` — utilisateur connecté courant
- `User` — modèle utilisateur
- `UserAddedPayload` — payload d'ajout d'utilisateur
- `UserModifiedPayload` — payload de modification
- `ModifyUserPayloadInput` — input de modification
- `Function` — fonction/rôle utilisateur
- `Role` — rôle
- `DayAvailability` — disponibilité journalière
- `MissionType` — type de mission

### Composants (`lib/modules/user/components/`)

- `LoginCardComponent` — carte de connexion
- `LoginComponent` — page de connexion
- `SigninComponent` — page d'inscription
- `MyAccountComponent` — page compte utilisateur
- `SwitchLanguageCtaComponent` — CTA changement de langue
- `GuardComponent` (`ta-guard`) — protège ou prévisualise du contenu selon les permissions

### Auth0

- `provideAuth0()` — provider Auth0

### Module

- `UserModule` — module NgModule (deprecated)

## Patterns d'utilisation

### Configurer Auth0

```typescript
import { provideAuth0 } from '@ta/user';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      clientId: environment.auth0ClientId,
      domain: environment.auth0Domain,
    }),
  ],
};
```

### Utiliser AuthService

```typescript
import { AuthService } from '@ta/user';

@Component({ standalone: true })
export class AppComponent {
  private auth = inject(AuthService);

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }

  isAuthenticated$ = this.auth.isAuthenticated$;
}
```

### Utiliser UserService

```typescript
import { CurrentUser, UserService } from '@ta/user';

@Component({ standalone: true })
export class ProfileComponent {
  private userService = inject(UserService);

  currentUser$ = this.userService.currentUser$;
}
```

### Vérifier les permissions

```typescript
import { Permissions, PermissionsService } from '@ta/user';

@Component({ standalone: true })
export class MyComponent {
  private permissions = inject(PermissionsService);

  canEdit$ = this.permissions.has(Permissions.EDIT_PROJECT);
}
```

### Protéger une route avec un guard

```typescript
import { authGuard } from '@ta/user';

// Importer le guard approprié

const routes = [
  {
    canActivate: [authGuard],
    component: ProtectedComponent,
    path: 'protected',
  },
];
```

### Utiliser GuardComponent (`ta-guard`)

Protège l'affichage d'un bloc de contenu selon les permissions. Deux modes :

**Mode masqué (défaut)** — le contenu est caché et un message d'erreur s'affiche si l'accès est refusé :

```html
<ta-guard feature="premium-section" level="authenticated">
  <app-premium-content />
</ta-guard>
```

**Mode preview** — le contenu est affiché avec une opacité réduite et un overlay avec boutons "Se connecter" / "S'inscrire" s'affiche par-dessus, pour inciter l'utilisateur à s'authentifier :

```html
<ta-guard feature="premium-section" level="authenticated" [preview]="true">
  <app-teaser-content />
</ta-guard>
```

#### Inputs de `GuardComponent`

| Input | Type | Défaut | Description |
|---|---|---|---|
| `feature` | `string` | — | Clé de feature à vérifier via `PermissionsService` |
| `level` | `Level` | `'authorize'` | Niveau requis (`'authenticated'`, `'authorize'`, etc.) |
| `role` | `string` | — | Rôle requis (alternatif à `feature`/`level`) |
| `canDisplayErrorMessage` | `boolean` | `true` | Affiche le message d'erreur en mode masqué |
| `preview` | `boolean` | `false` | Active le mode preview avec overlay CTA |

En mode `preview`, quand l'accès est refusé :
- Le contenu projeté est rendu à **12% d'opacité** (`pointer-events: none`)
- Un gradient couvre la partie basse du contenu
- Un overlay positionné en bas affiche un titre, un sous-titre et deux boutons qui redirigent vers `/login` et `/signin`

### Accéder aux disponibilités

```typescript
import { AvailabilitiesService, DayAvailability } from '@ta/user';

@Injectable({ providedIn: 'root' })
export class MyService {
  private avail = inject(AvailabilitiesService);

  getUserAvailabilities(userId: number) {
    return this.avail.getByUser(userId);
  }
}
```

## Conventions

- `UserModule` est deprecated — utiliser les composants standalone et providers
- Les guards utilisent la nouvelle syntaxe functional guards (fonctions, pas classes)
- `CurrentUser` est le type de l'utilisateur connecté (complet)
- `User` est un utilisateur générique de la liste
- Toutes les vérifications de permissions passent par `PermissionsService`

## Revue de code

- Vérifier que les routes protégées utilisent les guards appropriés
- S'assurer que `provideAuth0()` est configuré dans `app.config.ts`
- Vérifier que `PermissionsService` est utilisé (pas d'accès direct aux rôles)
- S'assurer que les DTOs (`CurrentUser`, `User`, etc.) sont importés depuis `@ta/user`
- Vérifier les clés d'objet triées alphabétiquement dans les configurations

## Ajout d'un nouveau composant dans @ta/user

1. Créer dans `projects/user/src/lib/modules/user/components/`
2. Exporter depuis `projects/user/src/lib/modules/user/components/public-api.ts`
3. S'assurer que `standalone: true`
