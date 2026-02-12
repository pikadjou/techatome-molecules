# Create a new @ta/ Model or Interface

You are creating a model, interface, enum, or type in the Techatome Molecules monorepo.

## Input: $ARGUMENTS

Parse the arguments to determine:
- **Library name**: which @ta/ library (e.g., `server`, `core`, `form-model`)
- **Model name**: in PascalCase or kebab-case (e.g., `UserProfile`, `order-item`)
- **Type** (optional): `interface`, `class`, `enum`, `type` (default: `interface`)

Example: `core UserProfile interface` or `server OrderItem class`

## Steps

### 1. Determine file path

Based on library:
- `projects/<lib>/src/lib/models/<model-name>.ts`
- For form models: `projects/form/form-model/src/lib/models/<model-name>.ts`

### 2. Read existing models in the library

Look for existing models to match the conventions used in that library.

### 3. Create the model

#### Interface pattern

```typescript
export interface <ModelName> {
  id: string;
  // Add properties
}
```

#### Class with options pattern (like InputBase)

```typescript
export interface I<ModelName> {
  // Constructor options
  name?: string;
  value?: any;
}

export class <ModelName> {
  name: string;
  value: any;

  constructor(options: I<ModelName> = {}) {
    this.name = options.name || '';
    this.value = options.value || null;
  }
}
```

#### Enum pattern

```typescript
export enum E<ModelName> {
  Value1 = 'value1',
  Value2 = 'value2',
}
```

#### Type alias pattern

```typescript
export type <ModelName> = {
  [key: string]: string | number;
};
```

#### GraphQL response type pattern (for @ta/server)

```typescript
import { GraphReponsePaged, OrderType, WhereType } from '@ta/server';

export interface <Entity> {
  id: string;
  name: string;
  // Match your GraphQL schema
}

export type <Entity>Paged = GraphReponsePaged<<Entity>>;
export type <Entity>Where = WhereType<<Entity>>;
export type <Entity>Order = OrderType<<Entity>>;

// Props string for GraphQL queries
export const <ENTITY>_PROPS = `
  id
  name
`;
```

### 4. Naming conventions

- **Interfaces**: PascalCase, prefix with `I` only for constructor options (`IInputBase`)
- **Classes**: PascalCase (e.g., `InputBase`, `RequestState`)
- **Enums**: PascalCase with `E` prefix (e.g., `ENotificationCode`, `ERequestStatus`)
- **Types**: PascalCase (e.g., `GraphReponsePaged`, `WhereType`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `USER_PROPS`)
- **File names**: kebab-case matching the primary export

### 5. Update exports

Add to the library's models `public-api.ts` or directly to the library's `public-api.ts`:

```typescript
export * from './models/<model-file>';
```

### 6. Conventions

- Always export all public types, interfaces, enums
- Use `string` for IDs (UUID format)
- Use `Date` for timestamps
- Prefer interfaces over classes unless behavior is needed
- Use generics for reusable types
- Co-locate related types in the same file
