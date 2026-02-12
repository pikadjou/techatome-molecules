# @ta/server - Complete Reference

## GraphQL System

### TaGraphService (main service)
```typescript
private _graphService = inject(TaGraphService);

// Fetch list
_graphService.fetchQueryList<T>(payload, nodeName, context): Observable<T[]>

// Fetch single
_graphService.fetchQuery<T>(payload, nodeName, context): Observable<T>

// Fetch paged
_graphService.fetchQueryPaged<T>(payload, nodeName, context): Observable<GraphReponsePaged<T>>

// Mutation
_graphService.mutate<T>(payload, mutationName, context, clearCacheKeys?): Observable<T>

// Cache
_graphService.clearCache(key: string): void

// Endpoint registration
_graphService.registerGraphEndpoint(endpoint: GraphEndpoint, options?: GraphOptions): void
```

### Query Helpers

```typescript
import { createQuery, createPagedQuery } from '@ta/server';

// Simple query
const payload = createQuery<User>('users', {
  props: 'id name email',
  where: { status: { eq: 'active' } },
  order: { name: 'ASC' },
});
// Returns: GraphPayload { name, query (gql), variables }

// Paged query
const pagedPayload = createPagedQuery<User>('users', {
  props: 'id name email',
  where: { status: { eq: 'active' } },
  order: { createdAt: 'DESC' },
  take: 20,
});
```

### Mutation Helpers

```typescript
import { gql } from '@apollo/client/core';
import { GraphMutationPayload } from '@ta/server';

const mutation: GraphMutationPayload = {
  mutation: gql`
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) { id name email }
    }
  `,
  variables: { input: { name: 'John', email: 'john@email.com' } },
};
```

### WhereType<T> (HotChocolate-style filtering)

```typescript
// Equality
{ status: { eq: 'active' } }

// Contains (string search)
{ name: { contains: 'john' } }

// Starts with
{ name: { startsWith: 'J' } }

// In list
{ id: { in: ['id1', 'id2', 'id3'] } }

// Not equal
{ status: { neq: 'deleted' } }

// Greater/Less than
{ age: { gte: 18 } }
{ price: { lt: 100 } }

// AND (object keys)
{ status: { eq: 'active' }, type: { eq: 'premium' } }

// OR (array)
{ or: [{ status: { eq: 'active' } }, { status: { eq: 'pending' } }] }

// Nested
{ user: { name: { contains: 'john' } } }

// Null check
{ deletedAt: { eq: null } }
```

### OrderType<T>

```typescript
{ createdAt: 'DESC' }
{ name: 'ASC' }
```

### GraphReponsePaged<T>

```typescript
interface GraphReponsePaged<T> {
  pageInfo?: { hasNextPage: boolean; hasPreviousPage: boolean };
  totalCount: number;
  items?: T[];
}
```

## REST API

### TaServerService
```typescript
private _serverService = inject(TaServerService);
_serverService.get<T>(path): Observable<Response<T>>
_serverService.post<T>(path, body): Observable<Response<T>>
_serverService.put<T>(path, body): Observable<Response<T>>
_serverService.delete<T>(path): Observable<Response<T>>
```

### BaseService (abstract)
```typescript
@Injectable({ providedIn: 'root' })
export class MyService extends BaseService {
  getItems(): Observable<Item[]> { return this.get('/items'); }
  createItem(data): Observable<Item> { return this.post('/items', data); }
}
```

## Strapi CMS

### TaStrapiService
```typescript
private _strapiService = inject(TaStrapiService);
_strapiService.find('articles', { populate: '*', sort: 'publishedAt:desc', pagination: { page: 1, pageSize: 10 } })
_strapiService.findOne('articles', id)
_strapiService.create('articles', data)
_strapiService.update('articles', id, data)
_strapiService.delete('articles', id)
```

## Error Handling

```typescript
private _errorService = inject(TaServerErrorService);
_errorService.addError(payload, error);
_errorService.handleError(error);
```

## Logging

```typescript
import { Logger } from '@ta/server';
Logger.LogInfo('[Context] message:', data);
Logger.LogError('[Context] error:', { payload, error });
```

## Providers

```typescript
// REST + GraphQL
provideServer({
  restConfig: { serverUrl: 'https://api.example.com', apiExt: '/api/v1' },
  graphQlConfig: { endpoint: 'https://api.example.com/graphql' }
})

// Strapi
provideStrapi({
  strapiConfig: { baseUrl: 'https://cms.example.com', apiToken: '...' }
})
```

## Models & Types

```typescript
import { GraphPayload, GraphQueryPayload, GraphMutationPayload, GraphQueryInput,
  GraphReponsePaged, WhereType, OrderType, PageInfo, GraphEndpoint, IGraphConfig } from '@ta/server';

interface GraphQueryInput<T> {
  props: string;
  where?: WhereType<T>;
  order?: OrderType<T>;
  take?: number;
  prefixType?: string;
}
```

## Complete Service Example

```typescript
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaGraphService, createQuery, createPagedQuery, GraphQueryInput, GraphReponsePaged } from '@ta/server';
import { gql } from '@apollo/client/core';

interface User { id: string; name: string; email: string; }
const USER_PROPS = 'id name email';
const CTX = 'user-context';

@Injectable({ providedIn: 'root' })
export class TaUserService {
  private _graph = inject(TaGraphService);

  getAll(input?: Partial<GraphQueryInput<User>>): Observable<User[]> {
    const p = createQuery<User>('users', { props: USER_PROPS, ...input });
    return this._graph.fetchQueryList<User>(p, p.name, CTX);
  }

  getPaged(input?: GraphQueryInput<User>): Observable<GraphReponsePaged<User>> {
    const p = createPagedQuery<User>('users', { props: USER_PROPS, ...input });
    return this._graph.fetchQueryPaged<User>(p, p.name, CTX);
  }

  getById(id: string): Observable<User> {
    const p = createQuery<User>('user', { props: USER_PROPS, where: { id: { eq: id } } });
    return this._graph.fetchQuery<User>(p, p.name, CTX);
  }

  create(input: Partial<User>): Observable<User> {
    return this._graph.mutate<User>({
      mutation: gql`mutation CreateUser($input: CreateUserInput!) { createUser(input: $input) { ${USER_PROPS} } }`,
      variables: { input }
    }, 'createUser', CTX, ['users']);
  }
}
```
