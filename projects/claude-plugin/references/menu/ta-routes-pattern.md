# `TaRoutes` / `TaRoutesCore` — gestion des routes

**CRITIQUE** : Ne jamais hardcoder de strings de route. Toujours utiliser `TaRoutes.getUrl()` ou `TaRoutes.getAbsoluteUrl()`.

**Import** : `import { TaRoutes, TaRoutesCore, TaMainRoute, IRoute } from '@ta/menu'`

## `TaMainRoute` — routes prédéfinies
```typescript
enum TaMainRoute {
  HOME        = 'HOME',        // ''
  USERLOGIN   = 'USERLOGIN',   // 'login'
  SINGIN      = 'SINGIN',      // 'signin'
  USERLOGOUT  = 'USERLOGOUT',  // 'logout'
  NOTIFICATIONS = 'NOTIFICATIONS', // 'notifications'
  REDIRECT    = 'REDIRECT',    // 'redirect'
}
```

## API de `TaRoutesCore`

```typescript
// Ajouter des routes personnalisées
TaRoutes.addRoute({ key: 'USERS', url: 'users' });
TaRoutes.addRoutes([
  { key: 'USERS', url: 'users', children: [
    { key: 'USER_DETAIL', url: ':id' },
    { key: 'USER_EDIT',   url: ':id/edit' },
  ]},
  { key: 'PROJECTS', url: 'projects' },
]);

// Obtenir une URL relative
TaRoutes.getUrl(['USERS']);             // 'users'
TaRoutes.getUrl(['USERS', 'USER_DETAIL'], { id: '123' }); // ':id' → '123'

// Obtenir une URL absolue (avec /)
TaRoutes.getAbsoluteUrl(['USERS']);             // '/users'
TaRoutes.getAbsoluteUrl(['HOME']);              // '/'
TaRoutes.getAbsoluteUrl(['USERS', 'USER_DETAIL'], { id: '42' }); // '/users/42'

// Raccourcis prédéfinis
TaRoutes.getHome();    // '/'
TaRoutes.getLogin();   // '/login'
TaRoutes.getLogout();  // '/logout'

// Permissions
TaRoutes.getPermission(['ADMIN_SECTION']);  // boolean
```

## Pattern d'utilisation dans une app

```typescript
// routes.ts (fichier dédié)
export enum AppRoute {
  USERS    = 'USERS',
  USER_EDIT = 'USER_EDIT',
  PROJECTS = 'PROJECTS',
}

// Enregistrement (dans app.component.ts ou un initializer)
TaRoutes.addRoutes([
  { key: AppRoute.USERS, url: 'users', children: [
    { key: AppRoute.USER_EDIT, url: ':id/edit' }
  ]},
  { key: AppRoute.PROJECTS, url: 'projects' },
]);

// Usage dans le menu
new MenuIcon({
  key: 'users',
  label: 'menu.users',
  icon: 'people',
  link: TaRoutes.getAbsoluteUrl([AppRoute.USERS])
})

// Usage dans la navigation Angular
this._router.navigate([TaRoutes.getAbsoluteUrl([AppRoute.USER_EDIT], { id: userId })]);
```

## `IRoute` — structure d'une route
```typescript
interface IRoute {
  key: string;
  url: string;
  canActivate?: boolean;
  children?: IRoute[];
}
```

**Notes** :
- `TaRoutes` est un singleton global exporté (instance de `TaRoutesCore`)
- Les routes sont hiérarchiques — l'URL absolue est la concaténation des segments parents
- `getUrl()` retourne l'URL **relative** (dernier segment), `getAbsoluteUrl()` retourne le chemin **complet**
- Les paramètres `:id` dans les URLs sont remplacés via l'objet `params`
