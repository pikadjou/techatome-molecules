# @ta/core

Core library providing essential components and utilities for Techatome applications, including filtering systems, document management, maps integration, and Google Tag Manager support.

## Installation

```bash
npm install @ta/core
# or
yarn add @ta/core
```

## Peer Dependencies

This package requires:
- `@angular/common`: ^18.2.13
- `@angular/core`: ^18.2.13

## Features

### Components

#### Filters System
Advanced filtering components for data management:

- **FiltersContainerComponent** - Container for filter management
- **FilterContainerComponent** - Individual filter container
- **FilterDisplayerComponent** - Display applied filters
- **FiltersTagComponent** - Tag-based filter display

#### Document Management
- **DocumentsComponent** - Document listing and management
- **UploadDocumentModal** - Modal for document upload
- **TextToClipboardComponent** - Copy text to clipboard utility

#### Historical Research
- **SearchDisplayerComponent** - Display search results
- **SearchHistoryDisplayerComponent** - Show search history

#### Maps Integration
- **MapComponent** - Google Maps integration component

### Providers

#### Google Tag Manager
Integration with Google Tag Manager for analytics:

```typescript
import { provideGTM, TaGoogleTagManagerService } from '@ta/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideGTM({
      gtmId: 'GTM-XXXXXX',
      enabled: true
    })
  ]
};
```

#### Google Maps
Provider for Google Maps initialization:

```typescript
import { provideGoogleMaps } from '@ta/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideGoogleMaps()
  ]
};
```

### Module (Deprecated)

**Note**: The `TaCoreModule` is deprecated. Use standalone components instead.

```typescript
// Deprecated approach
import { TaCoreModule } from '@ta/core';

@NgModule({
  imports: [TaCoreModule]
})
export class AppModule {}

// Recommended approach
import {
  FiltersContainerComponent,
  DocumentsComponent,
  MapComponent
} from '@ta/core';

@Component({
  standalone: true,
  imports: [
    FiltersContainerComponent,
    DocumentsComponent,
    MapComponent
  ]
})
export class MyComponent {}
```

## Usage Examples

### Using Filters

```typescript
import { Component } from '@angular/core';
import { FiltersContainerComponent } from '@ta/core';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [FiltersContainerComponent],
  template: `
    <ta-filters-container
      [filters]="filters"
      (filtersChange)="onFiltersChange($event)">
    </ta-filters-container>
  `
})
export class MyListComponent {
  filters = [
    { key: 'status', label: 'Status', type: 'select', options: [...] },
    { key: 'date', label: 'Date', type: 'daterange' }
  ];

  onFiltersChange(filters: any) {
    console.log('Applied filters:', filters);
  }
}
```

### Using Document Management

```typescript
import { Component } from '@angular/core';
import { DocumentsComponent } from '@ta/core';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [DocumentsComponent],
  template: `
    <ta-documents
      [documents]="documents"
      (upload)="onUpload($event)"
      (delete)="onDelete($event)">
    </ta-documents>
  `
})
export class MyDocumentsComponent {
  documents = [];

  onUpload(file: File) {
    // Handle file upload
  }

  onDelete(documentId: string) {
    // Handle document deletion
  }
}
```

### Using Google Maps

```typescript
import { Component } from '@angular/core';
import { MapComponent } from '@ta/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [MapComponent],
  template: `
    <ta-map
      [center]="center"
      [zoom]="zoom"
      [markers]="markers">
    </ta-map>
  `
})
export class LocationComponent {
  center = { lat: 48.8566, lng: 2.3522 }; // Paris
  zoom = 12;
  markers = [
    { position: { lat: 48.8566, lng: 2.3522 }, title: 'Paris' }
  ];
}
```

### Using Google Tag Manager

```typescript
import { Component, inject } from '@angular/core';
import { TaGoogleTagManagerService } from '@ta/core';

@Component({
  selector: 'app-tracked-page',
  standalone: true,
  template: `<h1>Tracked Page</h1>`
})
export class TrackedPageComponent {
  private gtmService = inject(TaGoogleTagManagerService);

  trackEvent() {
    this.gtmService.pushTag({
      event: 'custom_event',
      category: 'User Interaction',
      action: 'Click',
      label: 'Button'
    });
  }
}
```

### Using Text to Clipboard

```typescript
import { Component } from '@angular/core';
import { TextToClipboardComponent } from '@ta/core';

@Component({
  selector: 'app-share',
  standalone: true,
  imports: [TextToClipboardComponent],
  template: `
    <ta-text-to-clipboard
      [text]="shareUrl"
      label="Copy link">
    </ta-text-to-clipboard>
  `
})
export class ShareComponent {
  shareUrl = 'https://example.com/share/123';
}
```

## Dependencies

This package includes:
- **AG Grid** (v31) - Advanced data grid
- **Google Maps** (@angular/google-maps) - Maps integration
- **Google Tag Manager** - Analytics tracking
- Multiple `@ta/*` packages for forms, UI, icons, and utilities

## Type Definitions

The package exports TypeScript types for:
- Filter types and configurations
- GTM configuration interface (`IGTMConfig`)
- Component inputs/outputs

## License

MIT
