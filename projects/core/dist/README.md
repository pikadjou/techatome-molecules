# @ta/core

**Purpose:** Core functionality including filters, documents, maps, and GTM integration

## Exports

### Components - Filters
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| FiltersContainerComponent | `ta-filters-container` | Main filters container | filters, onChange |
| FilterContainerComponent | `ta-filter-container` | Individual filter wrapper | filter, value |
| FilterDisplayerComponent | `ta-filter-displayer` | Filter visualization | activeFilters |
| FiltersTagComponent | `ta-filters-tag` | Filter tags display | tags, onRemove |
| SearchDisplayerComponent | `ta-search-displayer` | Search interface | searchTerm, onSearch |
| SearchHistoryDisplayerComponent | `ta-search-history-displayer` | Search history display | history |

### Components - Documents
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| DocumentsComponent | `ta-documents` | Document list and management | documents, editable |
| UploadDocumentComponent | `ta-upload-document` | Document upload interface | onUpload, accept |

### Components - Other
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| TextToClipboardComponent | `ta-text-to-clipboard` | Copy to clipboard functionality | text |
| MapComponent | `ta-map` | Google Maps integration | markers, center, zoom |
| StrapiComponent | `ta-strapi` | Strapi content display | content |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| providerGTM | Google Tag Manager provider | initialize(), trackEvent() |

## Usage Example
```typescript
import { FiltersContainerComponent } from '@ta/core';

@Component({
  template: `
    <ta-filters-container
      [filters]="filters"
      (onChange)="onFilterChange($event)">
    </ta-filters-container>
  `
})
export class MyComponent {
  filters = [
    { key: 'status', label: 'Status', options: [...] }
  ];

  onFilterChange(filters: any) {
    console.log('Filters changed:', filters);
  }
}
```

## Dependencies
- @ta/ui
- @ta/form
- @angular/common
- @googlemaps/js-api-loader
- ag-grid-angular
