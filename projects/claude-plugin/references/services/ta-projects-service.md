# `TaProjectsService` — gestion des projets

**Quand l'utiliser** : Fetch et cacher les projets de l'application.

**Import** : `import { TaProjectsService } from '@ta/services'`

**API** :
```typescript
class TaProjectsService extends TaBaseService {
  public projects: HandleSimpleRequest<Project[]>;
  public project: HandleComplexRequest<Project>;
  public projectByContact: HandleComplexRequest<Project[]>;

  fetchProjects$(): Observable<Project[] | null | undefined>
  fetchProject$(id: string): Observable<Project>
  fetchProjectsByContact$(contactId: string): Observable<Project[]>
  getProjectsLightInfo$(ids: string[]): Observable<Project[]>
}
```

**`Project`** :
```typescript
interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  projectAddress: Address;
  tenantInformation: Tenant;
  projectPictureUrl: string;
}

enum ProjectStatus {
  Unknown = 0, InProgress = 1, Pending = 2, Done = 3, Cancelled = 4
}
```

**Usage** :
```typescript
private _projects = inject(TaProjectsService);

ngOnInit() {
  this.requestState.asked();
  this._registerSubscription(
    this._projects.fetchProjects$().subscribe({
      complete: () => this.requestState.completed(),
      error: err => this.requestState.onError(err.status, err.message)
    })
  );
}

// Accès réactif
get projects$() {
  return this._projects.projects.get$();
}

// Accès par ID
fetchProject(id: string) {
  this._registerSubscription(this._projects.fetchProject$(id).subscribe());
}
get project$() {
  return this._projects.project.get$(this.projectId);
}
```

**Notes** :
- `graphEndpoint.clientName = 'projectService'`, `endpoint = 'project'`
- `projectProps` : `GraphSchema<Project>(['id', 'name', 'status', 'projectAddress', 'tenantInformation', 'projectPictureUrl'])`
