# @ta/server

**Purpose:** HTTP server communication, API management, GraphQL and Strapi integration

## Exports

### Services - Core
| Name | Purpose | Key Methods |
|------|---------|-------------|
| ServerService | HTTP client wrapper | get(), post(), put(), delete(), patch() |
| ErrorService | Error handling and logging | handleError(), logError() |
| BaseService | Base service class | request(), handleResponse() |
| LoggerService | Application logging | log(), warn(), error(), debug() |

### Services - Integration
| Name | Purpose | Key Methods |
|------|---------|-------------|
| GraphService | GraphQL client | query(), mutate(), subscribe() |
| StrapiService | Strapi API client | find(), findOne(), create(), update(), delete() |
| BaseStrapiService | Base Strapi service | getCollection(), getEntity() |

### Services - Interceptors
| Name | Purpose | Key Methods |
|------|---------|-------------|
| CacheInterceptor | HTTP caching | intercept(), invalidate() |

### Models/DTOs
| Name | Purpose |
|------|---------|
| KeyValue | Key-value pair DTO |
| RequestInterface | HTTP request interface |
| ResponseInterface | HTTP response interface |
| GraphQLPayload | GraphQL query/mutation payload |
| GraphQLSchema | GraphQL schema model |
| GraphQLEndpoint | GraphQL endpoint configuration |
| StrapiBaseDTO | Base Strapi DTO |
| TokenModel | Token management model |

### Utilities
| Function | Purpose |
|----------|---------|
| handleRequest() | Request handling utilities |
| buildGraphQLQuery() | GraphQL query builder |
| buildGraphQLMutation() | GraphQL mutation builder |

## Usage Example
```typescript
import { ServerService, GraphService } from '@ta/server';

@Injectable()
export class DataService {
  constructor(
    private server: ServerService,
    private graph: GraphService
  ) {}

  getData() {
    return this.server.get('/api/data');
  }

  queryGraphQL() {
    return this.graph.query({
      query: `{ users { id name email } }`
    });
  }
}
```

## Dependencies
- @angular/common/http
- @apollo/client
- rxjs
