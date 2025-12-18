# @ta/utils

**Purpose:** Utility functions, pipes, directives, and base classes for common operations

## Exports

### Directives
| Name | Selector | Purpose |
|------|----------|---------|
| StopPropagationDirective | `[taStopPropagation]` | Stop event propagation |
| TypeTemplateDirective | `[taTypeTemplate]` | Template type helper |
| LetDirective | `[taLet]` | Template variable binding |
| OnRenderDirective | `[taOnRender]` | Render lifecycle hook |

### Pipes
| Name | Usage | Purpose |
|------|-------|---------|
| FileSizePipe | `{{ bytes \| fileSize }}` | File size formatting (B, KB, MB, GB) |
| JoinPipe | `{{ array \| join:', ' }}` | Array join with separator |
| PluralPipe | `{{ count \| plural:'item':'items' }}` | Pluralization |
| SafePipe | `{{ html \| safe:'html' }}` | Safe HTML/URL sanitization |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| ReadOnlyContextService | Read-only mode context | setReadOnly(), isReadOnly() |

### Abstract Classes
| Name | Purpose |
|------|---------|
| AbstractComponent | Base component class |
| BaseComponent | Component with common functionality |
| BasePage | Base page component |
| BaseModal | Base modal component |

### Utilities - Array
| Function | Purpose |
|----------|---------|
| arrayUtils | Array manipulation utilities |

### Utilities - Color
| Function | Purpose |
|----------|---------|
| colorUtils | Color conversion and manipulation |

### Utilities - Comparison
| Function | Purpose |
|----------|---------|
| comparisonUtils | Object and value comparison |

### Utilities - Date
| Function | Purpose |
|----------|---------|
| dateUtils | Date formatting and manipulation |

### Utilities - Enum
| Function | Purpose |
|----------|---------|
| enumUtils | Enum utilities |

### Utilities - File
| Function | Purpose |
|----------|---------|
| fileUtils | File operations and validation |

### Utilities - Filter
| Function | Purpose |
|----------|---------|
| filterUtils | Data filtering utilities |

### Utilities - Identifier
| Function | Purpose |
|----------|---------|
| identifierUtils | ID generation and validation |

### Utilities - Email
| Function | Purpose |
|----------|---------|
| emailUtils | Email validation and formatting |

### Utilities - Maps
| Function | Purpose |
|----------|---------|
| mapsUtils | Map data structure utilities |

### Utilities - Math
| Function | Purpose |
|----------|---------|
| mathUtils | Mathematical operations |

### Utilities - Object
| Function | Purpose |
|----------|---------|
| objectUtils | Object manipulation |

### Utilities - Person
| Function | Purpose |
|----------|---------|
| personUtils | Person data utilities |

### Utilities - Phone
| Function | Purpose |
|----------|---------|
| phoneUtils | Phone number validation and formatting |

### Utilities - Sort
| Function | Purpose |
|----------|---------|
| sortUtils | Sorting utilities |

### Utilities - String
| Function | Purpose |
|----------|---------|
| stringUtils | String manipulation |

### Utilities - Clipboard
| Function | Purpose |
|----------|---------|
| clipboardUtils | Clipboard operations |

### Utilities - Window
| Function | Purpose |
|----------|---------|
| windowUtils | Window and browser utilities |

### Utilities - Modified Values
| Function | Purpose |
|----------|---------|
| modifiedValuesUtils | Track modified values |

### Helpers
| Function | Purpose |
|----------|---------|
| handler | Subscriber handler utilities |
| horizontalScroll | Horizontal scroll helper |
| state | Request state management |

### Types
| Name | Purpose |
|------|---------|
| FileData | File data structure |
| FileExtension | File extension types |
| TemporaryFiles | Temporary file handling |
| Civility | Civility types |
| Culture | Culture types |
| GenericType | Generic type utilities |

### Constants
| Name | Purpose |
|------|---------|
| Environment | Environment configuration constants |

## Usage Example
```typescript
import { FileSizePipe, SafePipe, BaseComponent } from '@ta/utils';

// Using pipes
@Component({
  template: `
    <p>{{ fileSize | fileSize }}</p>
    <div [innerHTML]="html | safe:'html'"></div>
    <p>{{ items | join:', ' }}</p>
  `
})
export class MyComponent {
  fileSize = 1024000;
  html = '<strong>Safe HTML</strong>';
  items = ['apple', 'banana', 'cherry'];
}

// Using base component
export class MyPageComponent extends BaseComponent {
  // Inherits common functionality
}

// Using utilities
import { dateUtils, stringUtils } from '@ta/utils';

const formatted = dateUtils.format(new Date(), 'YYYY-MM-DD');
const slug = stringUtils.slugify('My Title');
```

## Dependencies
- @angular/common
- @angular/core
- rxjs
