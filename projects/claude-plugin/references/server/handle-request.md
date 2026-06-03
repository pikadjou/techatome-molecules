# `HandleComplexRequest<T>` / `HandleSimpleRequest<T>` — gestion d'état local

**Quand l'utiliser** : Mettre en cache des données fetchées dans un service et y accéder de manière réactive.

**Import** : `import { HandleComplexRequest, HandleSimpleRequest } from '@ta/server'`

## `HandleSimpleRequest<T>`
Pour une entité unique ou une liste homogène :
```typescript
public users = new HandleSimpleRequest<User[]>();

// Fetch + mise en cache
fetchUsers$() {
  return this.users.fetch(
    this._graphService.fetchPagedQueryList<User>(GET_USERS(), 'users', 'userService')
      .pipe(map(data => data.items ?? []))
  );
}

// Accès sync
const list = this.users.get(); // User[] | null

// Accès réactif
this.users.get$().subscribe(users => ...);
```

## `HandleComplexRequest<T>`
Pour plusieurs entités indexées par ID :
```typescript
public project = new HandleComplexRequest<Project>();

// Fetch + mise en cache par ID
fetchProject$(id: string) {
  return this.project.fetch(id,
    this._graphService.fetchQuery<Project>(GET_PROJECT_BY_ID(id), 'projectById', 'projectService')
  );
}

// Accès sync
const project = this.project.get('projectId'); // Project | null

// Accès réactif par ID
this.project.get$('projectId').subscribe(project => ...);

// Mise à jour partielle
this.project.update('projectId', partialData); // merge par défaut
this.project.add('projectId', newProject);
```

**Notes** :
- `fetch()` retourne un `Observable` — s'abonner et enregistrer via `_registerSubscription()`
- Les données sont stockées dans un `BehaviorSubject` interne
- `HandleComplexRequest` est idéal pour les détails d'entités (une par ID)
