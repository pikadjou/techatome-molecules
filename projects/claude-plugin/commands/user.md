---
description: Assistant contextuel @ta/user — catalogue compact + pointeurs vers references/user/<name>.md
argument-hint: [question ou tâche]
allowed-tools: [Read, Glob, Grep]
---

# @ta/user — Assistant contextuel

Tu es un expert de la librairie `@ta/user` dans ce monorepo Angular techatome.

Question ou tâche : $ARGUMENTS

---

## ⚠️ WORKFLOW OBLIGATOIRE

Avant de répondre à la question :

1. **Identifie** dans le catalogue ci-dessous l'élément concerné (composant, service, guard, DTO…).
2. **Lis la fiche de référence** via `Read` (chemin : `references/user/<name>.md`).
3. **Réponds à partir du contenu lu** — ne **devine pas** les inputs, méthodes ou l'API Auth0.

Si plusieurs éléments sont concernés, lis **toutes** les fiches pertinentes avant de répondre.

---

## Package

- **Package** : `@ta/user`
- **Import path** : `@ta/user`
- **Préfixe sélecteur** : `ta-`
- **Localisation** : `projects/user/`
- **Authentification** : Auth0

## Catalogue

Format : nom (`Class`) — description courte. Le fichier de référence est `references/user/<name>.md`.

### Composants

- `ta-switch-language` (`SwitchLanguageComponent`) — sélecteur de langue avec drapeaux (modes `inline` et `dropdown`).
- `ta-switch-language-cta` (`SwitchLanguageCtaComponent`) — wrapper rétrocompatible (délègue à `SwitchLanguageComponent` en mode `dropdown`).
- `ta-guard` (`GuardComponent`) — protège ou prévisualise du contenu selon les permissions (modes masqué et preview).
- `LoginCardComponent` — carte de connexion.
- `LoginComponent` — page de connexion.
- `SigninComponent` — page d'inscription.
- `MyAccountComponent` — page compte utilisateur.

### Guards

- `authGuard` — garde d'authentification (functional guard).
- Autres guards d'autorisation (voir fiche).

### Services

- `AuthService` — service d'authentification Auth0 (loginWithRedirect, logout, isAuthenticated$).
- `UserService` — service utilisateur courant (`currentUser$`).
- `UsersService` — service de gestion de la liste des utilisateurs.
- `PermissionsService` — service de gestion des permissions (`has(permission)`).
- `ContactService` — service de gestion des contacts utilisateurs.
- `FunctionsService` — service des fonctions/rôles.
- `AvailabilitiesService` — service des disponibilités.

### DTOs

- `CurrentUser` — utilisateur connecté complet.
- `User` — utilisateur générique de liste.
- `UserProfile` — profil utilisateur.
- `UserAddedPayload` / `UserModifiedPayload` / `ModifyUserPayloadInput` — payloads de mutation.
- `Function` / `Role` — fonction et rôle.
- `DayAvailability` — disponibilité journalière.
- `MissionType` — type de mission.

### Tokens et types

- `TA_LANGUAGES` — `InjectionToken<TaLanguageConfig[]>` — langues disponibles (défaut : fr + en).
- `TaLanguageConfig` — `{ id: string; name: string }`.
- `Permissions` — objet de toutes les permissions disponibles.

### Provider

- `provideAuth0()` — provider Auth0 pour `app.config.ts`.

## Conventions

- `UserModule` est deprecated — composants standalone et providers.
- Guards = functional guards (fonctions, pas classes).
- `CurrentUser` = utilisateur connecté (complet) ; `User` = utilisateur générique.
- Toutes les vérifications de permissions via `PermissionsService`.
- Clés d'objets triées alphabétiquement.
