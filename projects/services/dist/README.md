# @ta/services

Business logic services library providing domain-specific services for enumerations, menus, documents, projects, and common application data management.

## Installation

```bash
npm install @ta/services
# or
yarn add @ta/services
```

## Peer Dependencies

This package requires:
- `@angular/common`: ^18.2.13
- `@angular/core`: ^18.2.13

## Features

### Services

#### Core Business Services

- **TaEnumerationService** - Manage translated enumerations and lookup values
- **TaSharedMenuService** - Menu state management with localStorage persistence
- **TaDocumentsService** - Document CRUD operations and file management
- **TaProjectsService** - Project data operations with GraphQL support
- **TaNetworkService** - Network connectivity monitoring
- **TaConfigurationService** - Application configuration management

### DTOs (Data Transfer Objects)

#### Common DTOs
- **TranslatedEnumeration** - Translated enumeration values
- **User** - User entity data
- **Picture** - Image/picture metadata

#### Files DTOs
- **DocumentDto** - Document metadata and information
- **FileType** - File type classification
- **UploadFilePayloadInput** - File upload request payload

#### Projects DTOs
- **Project** - Project entity data
- **Status** - Project status information

### Helpers & Utilities

- **translatedEnumerationHelpers** - Utilities for working with translated enumerations
  - `sortByTranslatedValue()` - Sort enumeration by translated values

### GraphQL Queries

- **Project Queries** - Pre-built GraphQL queries for project operations

## Usage Examples

### Using Enumeration Service

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { TaEnumerationService, TranslatedEnumeration } from '@ta/services';

@Component({
  selector: 'app-status-selector',
  standalone: true,
  template: `
    <select [(ngModel)]="selectedStatus">
      <option *ngFor="let status of incidentTypes" [value]="status.id">
        {{ status.translatedValue }}
      </option>
    </select>
  `
})
export class StatusSelectorComponent implements OnInit {
  private enumerationService = inject(TaEnumerationService);
  incidentTypes: TranslatedEnumeration[] = [];
  selectedStatus: string = '';

  ngOnInit() {
    // Subscribe to incident types
    this.enumerationService.incidentTypes$.subscribe({
      next: (types) => {
        this.incidentTypes = types;
      }
    });

    // Load incident types
    this.enumerationService.getIncidentTypes();
  }

  // Get won't do reasons
  loadWontDoReasons() {
    this.enumerationService.wontDoReasons$.subscribe({
      next: (reasons) => {
        console.log('Won\'t do reasons:', reasons);
      }
    });
    this.enumerationService.getWontDoReasons();
  }

  // Get file types with key
  loadFileTypes() {
    this.enumerationService.getFileTypes$('document').subscribe({
      next: (types) => {
        console.log('Document file types:', types);
      }
    });
  }
}
```

### Using Documents Service

```typescript
import { Component, inject } from '@angular/core';
import { TaDocumentsService, DocumentDto, UploadFilePayloadInput } from '@ta/services';

@Component({
  selector: 'app-document-manager',
  standalone: true,
  template: `
    <input type="file" (change)="onFileSelected($event)" />
    <div *ngFor="let doc of documents">
      {{ doc.name }} - {{ doc.size }}
    </div>
  `
})
export class DocumentManagerComponent {
  private documentsService = inject(TaDocumentsService);
  documents: DocumentDto[] = [];

  ngOnInit() {
    this.loadDocuments();
  }

  loadDocuments() {
    const documentIds = ['doc-1', 'doc-2', 'doc-3'];

    // Get documents by IDs (observable)
    this.documentsService.getDocuments$(documentIds).subscribe({
      next: (docs) => {
        this.documents = docs;
      }
    });

    // Or get documents synchronously
    const docs = this.documentsService.getDocuments(documentIds);
    console.log('Documents:', docs);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.uploadDocument(file);
    }
  }

  uploadDocument(file: File) {
    const payload: UploadFilePayloadInput = {
      file,
      type: 'document',
      metadata: {
        description: 'Uploaded document'
      }
    };

    this.documentsService.uploadFile(payload).subscribe({
      next: (response) => {
        console.log('Document uploaded:', response);
        this.loadDocuments();
      },
      error: (error) => {
        console.error('Upload failed:', error);
      }
    });
  }
}
```

### Using Menu Service

```typescript
import { Component, inject } from '@angular/core';
import { TaSharedMenuService } from '@ta/services';

@Component({
  selector: 'app-navigation',
  standalone: true,
  template: `
    <nav [class.minimized]="isMinimized">
      <button (click)="toggleMenu()">
        {{ isMinimized ? 'Expand' : 'Minimize' }}
      </button>
      <ul *ngIf="!isMinimized">
        <li>Home</li>
        <li>Projects</li>
        <li>Documents</li>
      </ul>
    </nav>
  `
})
export class NavigationComponent {
  private menuService = inject(TaSharedMenuService);
  isMinimized = false;

  ngOnInit() {
    // Subscribe to menu state
    this.menuService.isMinimized$.subscribe({
      next: (minimized) => {
        this.isMinimized = minimized;
      }
    });
  }

  toggleMenu() {
    const newState = !this.isMinimized;
    this.menuService.isMinimized$.next(newState);
    // State is automatically persisted to localStorage
  }
}
```

### Using Projects Service

```typescript
import { Component, inject } from '@angular/core';
import { TaProjectsService, Project } from '@ta/services';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <div *ngFor="let project of projects">
      {{ project.name }} - {{ project.status }}
    </div>
  `
})
export class ProjectsComponent {
  private projectsService = inject(TaProjectsService);
  projects: Project[] = [];

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    // Using GraphQL queries
    this.projectsService.getProjects().subscribe({
      next: (response) => {
        this.projects = response.data.projects;
      },
      error: (error) => {
        console.error('Failed to load projects:', error);
      }
    });
  }

  createProject(projectData: Partial<Project>) {
    this.projectsService.createProject(projectData).subscribe({
      next: (response) => {
        console.log('Project created:', response.data);
        this.loadProjects();
      }
    });
  }

  updateProjectStatus(projectId: string, status: string) {
    this.projectsService.updateProject(projectId, { status }).subscribe({
      next: (response) => {
        console.log('Project updated:', response.data);
        this.loadProjects();
      }
    });
  }
}
```

### Using Network Service

```typescript
import { Component, inject } from '@angular/core';
import { TaNetworkService } from '@ta/services';

@Component({
  selector: 'app-offline-indicator',
  standalone: true,
  template: `
    <div *ngIf="!isOnline" class="offline-banner">
      You are currently offline
    </div>
  `
})
export class OfflineIndicatorComponent {
  private networkService = inject(TaNetworkService);
  isOnline = true;

  ngOnInit() {
    this.networkService.isOnline$.subscribe({
      next: (online) => {
        this.isOnline = online;
        if (online) {
          console.log('Connection restored');
        } else {
          console.log('Connection lost');
        }
      }
    });
  }
}
```

### Using Translated Enumeration Helpers

```typescript
import { Component } from '@angular/core';
import { sortByTranslatedValue, TranslatedEnumeration } from '@ta/services';

@Component({
  selector: 'app-sorted-list',
  standalone: true,
  template: `
    <div *ngFor="let item of sortedItems">
      {{ item.translatedValue }}
    </div>
  `
})
export class SortedListComponent {
  items: TranslatedEnumeration[] = [
    { id: '1', value: 'STATUS_PENDING', translatedValue: 'En attente' },
    { id: '2', value: 'STATUS_ACTIVE', translatedValue: 'Actif' },
    { id: '3', value: 'STATUS_COMPLETED', translatedValue: 'Terminé' }
  ];

  sortedItems: TranslatedEnumeration[] = [];

  ngOnInit() {
    // Sort items by translated value
    this.sortedItems = sortByTranslatedValue(this.items);
    // Results: Actif, En attente, Terminé
  }
}
```

## Dependencies

This package includes:
- **@ta/server** - Server communication services
- **@ta/utils** - Shared utilities

## Architecture

All services extend `TaBaseService` from `@ta/server`, providing:
- Consistent error handling
- Automatic request/response mapping
- GraphQL endpoint registration
- Observable-based data streams

## Type Definitions

The package exports TypeScript interfaces for:
- All DTO models (User, Document, Project, etc.)
- Service method signatures
- GraphQL query/mutation types
- Enumeration types

## License

MIT
