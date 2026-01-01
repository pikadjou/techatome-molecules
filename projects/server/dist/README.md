# @ta/server

HTTP server communication library providing REST API, GraphQL, and Strapi integration with built-in error handling, caching, and request management.

## Installation

```bash
npm install @ta/server
# or
yarn add @ta/server
```

## Peer Dependencies

This package requires:
- `@angular/common`: ^18.2.13
- `@angular/core`: ^18.2.13

## Features

### Services

#### Core Services

- **TaServerService** - REST API client with request/response handling
- **TaServerErrorService** - Centralized error handling and logging
- **BaseService** - Abstract base class for service implementation
- **Logger** - Application-wide logging utility

#### GraphQL Integration

- **TaGraphService** - Apollo-based GraphQL client
- **GraphQueryPayload** - GraphQL query payload models
- **GraphMutationPayload** - GraphQL mutation payload models
- **GraphSchema** - GraphQL schema type definitions
- **GraphEndpoint** - GraphQL endpoint configuration

#### Strapi Integration

- **TaStrapiService** - Strapi CMS API client
- **BaseStrapiService** - Base class for Strapi services
- **StrapiBaseDTO** - Strapi data transfer objects

#### HTTP Interceptors

- **CacheInterceptor** - HTTP response caching
- **TenantInterceptor** - Multi-tenant request handling

### Providers

#### REST Server Provider

Configure REST API endpoints:

```typescript
import { provideServer } from '@ta/server';

export const appConfig: ApplicationConfig = {
  providers: [
    provideServer({
      restConfig: {
        serverUrl: 'https://api.example.com',
        apiExt: '/api/v1',
        pendindRequestId: 5
      },
      graphQlConfig: {
        endpoint: 'https://api.example.com/graphql',
        useWebSocket: false
      }
    })
  ]
};
```

#### Strapi Provider

Configure Strapi CMS integration:

```typescript
import { provideStrapi } from '@ta/server';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStrapi({
      strapiConfig: {
        baseUrl: 'https://cms.example.com',
        apiToken: 'your-api-token'
      }
    })
  ]
};
```

### Models & DTOs

#### Request/Response Models
- **Request** - HTTP request interface
- **IResponse, IBaseResponse, IBackResponse** - Response interfaces
- **StatusResponse** - Response status enums
- **Correlation** - Request correlation tracking

#### Data Transfer Objects
- **KeyValue** - Generic key-value pair
- **Token** - Authentication token model

### Helpers

- **handleRequest()** - Request preprocessing utilities
- **RequestMap** - API endpoint mapping
- **Queries helpers** - GraphQL query builders
- **Mutations helpers** - GraphQL mutation builders

## Usage Examples

### REST API Calls

```typescript
import { Component, inject } from '@angular/core';
import { TaServerService } from '@ta/server';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  template: `<div>Users: {{ users.length }}</div>`
})
export class UsersComponent {
  private serverService = inject(TaServerService);
  users: User[] = [];

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.serverService.get<User[]>('/users').subscribe({
      next: (response) => {
        this.users = response.data;
      },
      error: (error) => {
        console.error('Failed to load users', error);
      }
    });
  }

  createUser(userData: Partial<User>) {
    this.serverService.post<User>('/users', userData).subscribe({
      next: (response) => {
        console.log('User created:', response.data);
        this.loadUsers();
      }
    });
  }
}
```

### GraphQL Queries

```typescript
import { Component, inject } from '@angular/core';
import { TaGraphService, GraphQueryPayload } from '@ta/server';
import { gql } from '@apollo/client/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `<div *ngFor="let product of products">{{ product.name }}</div>`
})
export class ProductsComponent {
  private graphService = inject(TaGraphService);
  products: any[] = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    const query = gql`
      query GetProducts {
        products {
          id
          name
          price
          description
        }
      }
    `;

    const payload: GraphQueryPayload = {
      query,
      variables: {}
    };

    this.graphService.query(payload).subscribe({
      next: (result) => {
        this.products = result.data.products;
      },
      error: (error) => {
        console.error('GraphQL error:', error);
      }
    });
  }
}
```

### GraphQL Mutations

```typescript
import { Component, inject } from '@angular/core';
import { TaGraphService, GraphMutationPayload } from '@ta/server';
import { gql } from '@apollo/client/core';

@Component({
  selector: 'app-create-product',
  standalone: true,
  template: `<button (click)="createProduct()">Create Product</button>`
})
export class CreateProductComponent {
  private graphService = inject(TaGraphService);

  createProduct() {
    const mutation = gql`
      mutation CreateProduct($input: ProductInput!) {
        createProduct(input: $input) {
          id
          name
          price
        }
      }
    `;

    const payload: GraphMutationPayload = {
      mutation,
      variables: {
        input: {
          name: 'New Product',
          price: 29.99,
          description: 'Product description'
        }
      }
    };

    this.graphService.mutate(payload).subscribe({
      next: (result) => {
        console.log('Product created:', result.data.createProduct);
      },
      error: (error) => {
        console.error('Mutation error:', error);
      }
    });
  }
}
```

### Strapi CMS Integration

```typescript
import { Component, inject } from '@angular/core';
import { TaStrapiService } from '@ta/server';

@Component({
  selector: 'app-articles',
  standalone: true,
  template: `<div *ngFor="let article of articles">{{ article.title }}</div>`
})
export class ArticlesComponent {
  private strapiService = inject(TaStrapiService);
  articles: any[] = [];

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.strapiService.find('articles', {
      populate: '*',
      sort: 'publishedAt:desc',
      pagination: {
        page: 1,
        pageSize: 10
      }
    }).subscribe({
      next: (response) => {
        this.articles = response.data;
      },
      error: (error) => {
        console.error('Strapi error:', error);
      }
    });
  }

  createArticle(articleData: any) {
    this.strapiService.create('articles', articleData).subscribe({
      next: (response) => {
        console.log('Article created:', response.data);
        this.loadArticles();
      }
    });
  }
}
```

### Error Handling

```typescript
import { Component, inject } from '@angular/core';
import { TaServerService, TaServerErrorService } from '@ta/server';

@Component({
  selector: 'app-data',
  standalone: true,
  template: `<div>{{ errorMessage }}</div>`
})
export class DataComponent {
  private serverService = inject(TaServerService);
  private errorService = inject(TaServerErrorService);
  errorMessage = '';

  loadData() {
    this.serverService.get('/api/data').subscribe({
      error: (error) => {
        // Centralized error handling
        this.errorService.handleError(error);
        this.errorMessage = error.message;
      }
    });
  }
}
```

### Using Base Service

```typescript
import { Injectable } from '@angular/core';
import { BaseService } from '@ta/server';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {
  getProducts(): Observable<Product[]> {
    return this.get<Product[]>('/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.get<Product>(`/products/${id}`);
  }

  updateProduct(id: number, data: Partial<Product>): Observable<Product> {
    return this.put<Product>(`/products/${id}`, data);
  }

  deleteProduct(id: number): Observable<void> {
    return this.delete<void>(`/products/${id}`);
  }
}
```

## Dependencies

This package includes:
- **Apollo Client** (v3.11.0) - GraphQL client
- **Apollo Angular** (v5.0.2) - Angular integration for Apollo
- **GraphQL** (v16.10.0) - GraphQL query language
- **@ta/utils** - Shared utilities

## Type Definitions

The package exports TypeScript interfaces for:
- REST configuration (`IRestConfig`)
- GraphQL configuration (`IGraphConfig`)
- Strapi configuration (`IStrapiConfig`)
- Request/Response models
- GraphQL payload types
- Strapi DTOs

## License

MIT
