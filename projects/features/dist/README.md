# @ta/features

Advanced grid feature library for Angular applications with pagination, filtering, search, and sorting capabilities.

## Overview

`@ta/features` provides a powerful and flexible grid system built on top of Tabulator Tables. It includes components for displaying data in both grid and card views, with built-in support for pagination, filtering, search, and advanced column management.

## Installation

```bash
npm install @ta/features
# or
yarn add @ta/features
```

### Peer Dependencies

This package requires:
- `@angular/common` ^19.2.0
- `@angular/core` ^19.2.0
- `tabulator-tables` ^6.3.1

## Components

### TaGridComponent

The main grid component for displaying data in a table format with Tabulator integration.

**Selector:** `ta-grid`

**Inputs:**
- `cardTemplate: TemplateRef<{ items: T[] }>` - Template for card view mode

**Outputs:**
- `rowClicked: EventEmitter<T>` - Emits when a row is clicked

**Example:**
```typescript
import { Component } from '@angular/core';
import { TaGridComponent } from '@ta/features';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TaGridComponent],
  template: `
    <ta-grid
      [cardTemplate]="cardTemplate"
      (rowClicked)="onRowClick($event)">
    </ta-grid>

    <ng-template #cardTemplate let-items="items">
      <div *ngFor="let item of items">
        {{ item.name }}
      </div>
    </ng-template>
  `
})
export class ExampleComponent {
  onRowClick(row: any) {
    console.log('Row clicked:', row);
  }
}
```

### TaGridContainerComponent

Container component that wraps the grid with data management and session persistence.

**Selector:** `ta-grid-container`

**Inputs:**
- `initialData: T[]` - Initial data to display in the grid
- `colsMetaData: ColMetaData<T>[]` - Column metadata configuration
- `preset?: Preset[]` - Predefined filter presets

**Example:**
```typescript
import { Component } from '@angular/core';
import { TaGridContainerComponent, ColMetaData, ParameterType } from '@ta/features';

interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TaGridContainerComponent],
  template: `
    <ta-grid-container
      [initialData]="users"
      [colsMetaData]="columns"
      [preset]="presets">
    </ta-grid-container>
  `
})
export class UsersComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', active: false }
  ];

  columns: ColMetaData<User>[] = [
    { name: 'id', type: ParameterType.Number },
    { name: 'name', type: ParameterType.String, isSearchField: true },
    { name: 'email', type: ParameterType.String, isSearchField: true },
    { name: 'active', type: ParameterType.Boolean }
  ];

  presets = [
    { name: 'Active Users', filters: [{ field: 'active', type: '=', value: true }] }
  ];
}
```

### Other Components

- **TaGridFormComponent** (`ta-grid-form`) - Form component for grid filtering with dynamic field generation
- **TaGridSearchComponent** (`ta-grid-search`) - Search component with autocomplete functionality
- **TaGridTagsComponent** (`ta-grid-tags`) - Display active filters as removable tags
- **TaGridControlComponent** (`ta-grid-control`) - Control component for view switching
- **PaginationComponent** (`ta-pagination`) - Pagination controls

## Type System

### ParameterType

```typescript
enum ParameterType {
  Unknown,
  String,
  Number,
  Boolean,
  DateTime,
  Enum,
  Relation,
}
```

### ColMetaData

```typescript
interface ColMetaData<T = unknown> {
  name: keyof T;
  type: ParameterType;
  isSearchField?: boolean;
  notDisplayable?: boolean;
  showOnSearch?: boolean;
  multivalues?: boolean;
  enumValues?: string[];
  dataSearch$?: (search?: string) => Observable<InputChoicesOption[]>;
  manyToOneOptions?: {
    field: string;
    model: string;
    data$: (id: number[]) => Observable<string[]>;
  };
}
```

## Advanced Features

### Column Filters

- **String columns**: Text search, exact match, contains, starts with, ends with
- **Number columns**: Equals, greater than, less than, between
- **Boolean columns**: True/false toggle
- **DateTime columns**: Date range, before/after
- **Enum columns**: Dropdown selection
- **Relation columns**: Remote data search with autocomplete

### Session Persistence

Grid state (filters, sorting, pagination) is automatically persisted and restored.

### Presets

```typescript
const presets: Preset[] = [
  {
    name: 'Recent Active',
    filters: [
      { field: 'active', type: '=', value: true },
      { field: 'createdAt', type: '>', value: '2024-01-01' }
    ]
  }
];
```

## Dependencies

- `@ta/ui` - UI components
- `@ta/form-basic` - Basic form components
- `@ta/form-model` - Form models
- `@ta/form-input` - Input components
- `@ta/translation` - Translation support
- `@ta/utils` - Utility functions
- `@ta/server` - Server communication

## License

MIT
