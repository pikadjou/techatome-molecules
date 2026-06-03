# Guards d'authentification — `AuthGuard`, `FeatureGuard`, `RoleGuard`

## `AuthGuard`
**Quand l'utiliser** : Protéger les routes nécessitant une authentification.
```typescript
{ path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent }
```
Redirige vers la page de login si non authentifié.

## `FeatureGuard`
**Quand l'utiliser** : Protéger les routes par feature + level.
```typescript
{
  path: 'admin',
  canActivate: [FeatureGuard],
  data: { feature: 'admin-panel', level: 'authorize' } satisfies FeatureRouteData,
  component: AdminComponent
}
```
- `data.feature: string` — clé de feature
- `data.level: Level` — `'authenticated' | 'unauthenticated' | 'authorize' | 'administrator'`

## `RoleGuard`
**Quand l'utiliser** : Protéger les routes par rôle utilisateur.
```typescript
{
  path: 'super-admin',
  canActivate: [RoleGuard],
  data: { role: 'superadmin' } satisfies RoleRouteData,
  component: SuperAdminComponent
}
```

**Notes** : Tous utilisent `TaPermissionsService`. `FeatureGuard` et `RoleGuard` redirigent vers home; `AuthGuard` redirige vers login.
