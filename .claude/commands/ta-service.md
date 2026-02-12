# Create a new @ta/ Service

You are creating a new Angular service in the Techatome Molecules monorepo.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Library name**: which @ta/ library (e.g., `server`, `core`, `services`, `user`)
- **Service name**: the service name in kebab-case (e.g., `authentication`, `file-upload`)
- **Type** (optional): `graphql` (for GraphQL-based), `http` (for REST), `state` (for state management)

If unclear, ask: `<library> <service-name> [graphql|http|state]`
Example: `server authentication graphql`

## Steps

### 1. Determine file path

Based on the library, compute path:
- For `form-*`: `projects/form/<lib>/src/lib/services/`
- For `files-*`: `projects/files/<lib>/src/lib/services/`
- For others: `projects/<lib>/src/lib/services/`

### 2. Read existing patterns

Read an existing service in the same library to match conventions. Key references:
- GraphQL: `projects/server/src/lib/services/graphql/graph.service.ts`
- Error handling: `projects/server/src/lib/services/error.service.ts`
- State: `projects/services/src/lib/` (any service there)

### 3. Create the Service file

#### Standard Service

```typescript
import { Injectable, inject } from '@angular/core';

import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Ta<ServiceName>Service {
  // Use inject() for DI, not constructor params
  // private _someService = inject(SomeService);

  constructor() {}
}
```

#### GraphQL Service (using @ta/server)

```typescript
import { Injectable, inject } from '@angular/core';

import { Observable, map } from 'rxjs';

import { TaGraphService, createQuery, createPagedQuery, createMutation, GraphQueryInput } from '@ta/server';

import { <ModelType> } from '../models/<model>';

const GRAPH_CONTEXT = '<context-name>';

@Injectable({
  providedIn: 'root',
})
export class Ta<ServiceName>Service {
  private _graphService = inject(TaGraphService);

  // Query list
  public getAll(input?: GraphQueryInput<<ModelType>>): Observable<<ModelType>[]> {
    const payload = createQuery<<ModelType>>('<queryName>', input);
    return this._graphService.fetchQueryList<<ModelType>>(payload, payload.name, GRAPH_CONTEXT);
  }

  // Single query
  public getById(id: string, props: string): Observable<<ModelType>> {
    const payload = createQuery<<ModelType>>('<queryName>', { props, where: { id: { eq: id } } });
    return this._graphService.fetchQuery<<ModelType>>(payload, payload.name, GRAPH_CONTEXT);
  }

  // Mutation
  public create(input: <CreateInput>): Observable<<ModelType>> {
    const payload = createMutation('<mutationName>', { input });
    return this._graphService.mutate<<ModelType>>(payload, '<mutationName>', GRAPH_CONTEXT);
  }
}
```

#### State Management Service

```typescript
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Ta<ServiceName>Service {
  private _state$ = new BehaviorSubject<<StateType> | null>(null);

  get state$(): Observable<<StateType> | null> {
    return this._state$.asObservable();
  }

  get currentState(): <StateType> | null {
    return this._state$.getValue();
  }

  public setState(state: <StateType>): void {
    this._state$.next(state);
  }

  public clearState(): void {
    this._state$.next(null);
  }
}
```

**CONVENTIONS:**
- ALWAYS `@Injectable({ providedIn: 'root' })` for singleton services
- ALWAYS use `inject()` function instead of constructor injection for dependencies
- ALWAYS prefix service class name with `Ta` (e.g., `TaAuthService`)
- Use `BehaviorSubject` for state management
- Use `catchError` + `throwError` for error handling
- Use `Logger.LogInfo()` / `Logger.LogError()` from `@ta/server` for logging
- Return `Observable<T>` from async methods, never Promises
- Use `take(1)` for one-shot queries
- Chain operators: `pipe(tap(), map(), catchError())`

### 4. Update exports

Add to the library's `public-api.ts`:
```typescript
export * from './services/<service-name>.service';
```

### 5. Create associated model/interface if needed

If the service needs models, create them following @ta conventions in a `models/` folder next to the service.
