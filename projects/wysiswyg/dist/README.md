# @ta/wysiswyg

**Purpose:** WYSIWYG editor using Editor.js for block-based editing

## Exports

### Components
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| BlockTextComponent | `ta-block-text` | Block text renderer | blockData |
| InputComponent | `ta-wysiwyg-input` | WYSIWYG input editor | data, onChange, config |

### Types
| Name | Purpose |
|------|---------|
| WysiswgBlockData | Block data type (re-exported from Editor.js) |

### Utilities
| Function | Purpose |
|----------|---------|
| wysiwygHelpers | WYSIWYG utility functions |

## Usage Example
```typescript
import { InputComponent, WysiswgBlockData } from '@ta/wysiswyg';

@Component({
  template: `
    <ta-wysiwyg-input
      [data]="editorData"
      (onChange)="handleChange($event)">
    </ta-wysiwyg-input>
  `
})
export class MyComponent {
  editorData: WysiswgBlockData = {
    blocks: [
      {
        type: 'paragraph',
        data: { text: 'Hello World' }
      }
    ]
  };

  handleChange(data: WysiswgBlockData) {
    console.log('Editor data changed:', data);
  }
}
```

## Dependencies
- @editorjs/editorjs
- @angular/common
