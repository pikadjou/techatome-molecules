# @ta/cms

**Purpose:** Strapi CMS integration components and services

## Exports

### Components
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| CmsComponent | `ta-cms` | Main CMS content renderer | content, type |
| SaleComponent | `ta-sale` | Sales content display | sale |
| LinkComponent | `ta-link` | Link type renderer | link, label |
| RichTextComponent | `ta-rich-text` | Rich text content renderer | content |
| TextComponent | `ta-text` | Text content renderer | text |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| CmsService | CMS data fetching and management | getContent(), fetchPage(), fetchComponent() |

## Usage Example
```typescript
import { CmsComponent, CmsService } from '@ta/cms';

@Component({
  template: `<ta-cms [content]="cmsContent"></ta-cms>`
})
export class MyComponent {
  cmsContent: any;

  constructor(private cmsService: CmsService) {}

  ngOnInit() {
    this.cmsService.getContent('homepage').subscribe(
      content => this.cmsContent = content
    );
  }
}
```

## Dependencies
- @ta/server
- @angular/common
