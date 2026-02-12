# Create a GraphQL Query or Mutation using @ta/server

You are creating GraphQL operations using the @ta/server library patterns.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Operation type**: `query` or `mutation`
- **Entity name**: the entity/model (e.g., `user`, `order`, `product`)
- **Library**: where to create the service (default: in the relevant feature library)

Example: `query user core` or `mutation createOrder server`

## Architecture Context

The GraphQL system in @ta uses:
- **@ta/server** → `TaGraphService` (core GraphQL client)
- **@ta/server** → `createQuery()`, `createPagedQuery()`, `createMutation()` (helpers)
- **@ta/server** → `GraphPayload`, `GraphQueryPayload`, `GraphMutationPayload`, `GraphQueryInput<T>` (types)
- **Apollo Angular** for the underlying GraphQL client
- **gql** template tag from `@apollo/client/core`

## Steps

### 1. Create or update the entity model

File: `projects/<library>/src/lib/models/<entity>.ts`

```typescript
export interface <Entity> {
  id: string;
  // Add fields matching your GraphQL schema
  name: string;
  createdAt: Date;
  // ... other fields
}

// Define the GraphQL props string for reuse
export const <ENTITY>_PROPS = `
  id
  name
  createdAt
`;
```

### 2. Create the service with GraphQL operations

File: `projects/<library>/src/lib/services/<entity>.service.ts`

#### For Queries:

```typescript
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import {
  TaGraphService,
  createQuery,
  createPagedQuery,
  GraphQueryInput,
  GraphReponsePaged,
} from '@ta/server';

import { <Entity>, <ENTITY>_PROPS } from '../models/<entity>';

const GRAPH_CONTEXT = '<entity-context>';

@Injectable({
  providedIn: 'root',
})
export class Ta<Entity>Service {
  private _graphService = inject(TaGraphService);

  /**
   * Fetch list of <entity>
   */
  public getAll(input?: Partial<GraphQueryInput<<Entity>>>): Observable<<Entity>[]> {
    const payload = createQuery<<Entity>>('<entityPlural>', {
      props: <ENTITY>_PROPS,
      ...input,
    });
    return this._graphService.fetchQueryList<<Entity>>(payload, payload.name, GRAPH_CONTEXT);
  }

  /**
   * Fetch paged list of <entity>
   */
  public getPaged(input?: GraphQueryInput<<Entity>>): Observable<GraphReponsePaged<<Entity>>> {
    const payload = createPagedQuery<<Entity>>('<entityPlural>', {
      props: <ENTITY>_PROPS,
      ...input,
    });
    return this._graphService.fetchQueryPaged<<Entity>>(payload, payload.name, GRAPH_CONTEXT);
  }

  /**
   * Fetch single <entity> by ID
   */
  public getById(id: string): Observable<<Entity>> {
    const payload = createQuery<<Entity>>('<entitySingular>', {
      props: <ENTITY>_PROPS,
      where: { id: { eq: id } },
    });
    return this._graphService.fetchQuery<<Entity>>(payload, payload.name, GRAPH_CONTEXT);
  }
}
```

#### For Mutations:

```typescript
import { gql } from '@apollo/client/core';

import { TaGraphService, GraphMutationPayload } from '@ta/server';

// In the same service class:

  /**
   * Create a new <entity>
   */
  public create(input: Create<Entity>Input): Observable<<Entity>> {
    const mutation: GraphMutationPayload = {
      mutation: gql`
        mutation Create<Entity>($input: Create<Entity>Input!) {
          create<Entity>(input: $input) {
            ${<ENTITY>_PROPS}
          }
        }
      `,
      variables: { input },
    };
    return this._graphService.mutate<<Entity>>(
      mutation,
      'create<Entity>',
      GRAPH_CONTEXT,
      ['<entityPlural>'] // cache keys to clear
    );
  }

  /**
   * Update an existing <entity>
   */
  public update(id: string, input: Update<Entity>Input): Observable<<Entity>> {
    const mutation: GraphMutationPayload = {
      mutation: gql`
        mutation Update<Entity>($id: UUID!, $input: Update<Entity>Input!) {
          update<Entity>(id: $id, input: $input) {
            ${<ENTITY>_PROPS}
          }
        }
      `,
      variables: { id, input },
    };
    return this._graphService.mutate<<Entity>>(
      mutation,
      'update<Entity>',
      GRAPH_CONTEXT,
      ['<entityPlural>', '<entitySingular>']
    );
  }

  /**
   * Delete <entity>
   */
  public delete(id: string): Observable<boolean> {
    const mutation: GraphMutationPayload = {
      mutation: gql`
        mutation Delete<Entity>($id: UUID!) {
          delete<Entity>(id: $id)
        }
      `,
      variables: { id },
    };
    return this._graphService.mutate<boolean>(
      mutation,
      'delete<Entity>',
      GRAPH_CONTEXT,
      ['<entityPlural>']
    );
  }
```

### 3. Register the GraphQL endpoint (if new context)

If this is a new GraphQL context, register the endpoint in the app initialization:

```typescript
import { TaGraphService, GraphEndpoint } from '@ta/server';

const endpoint: GraphEndpoint = {
  endpoint: '/<api-path>/graphql',
  clientName: '<entity-context>',
};

// In app initialization:
graphService.registerGraphEndpoint(endpoint);
```

### 4. Using filters (WhereType)

The `WhereType<T>` supports HotChocolate-style filtering:

```typescript
// Equality
where: { status: { eq: 'active' } }

// Contains
where: { name: { contains: searchTerm } }

// In list
where: { id: { in: ['id1', 'id2'] } }

// AND conditions (object keys)
where: { status: { eq: 'active' }, type: { eq: 'premium' } }

// OR conditions (array)
where: { or: [{ status: { eq: 'active' } }, { status: { eq: 'pending' } }] }
```

### 5. Using ordering (OrderType)

```typescript
order: { createdAt: 'DESC' }
order: { name: 'ASC' }
```

### 6. Update exports

Export model and service from the library's `public-api.ts`.
