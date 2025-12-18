# @ta/services

**Purpose:** Business logic services for enumerations, menus, documents, and projects

## Exports

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| EnumerationService | Enumeration management | getEnumerations(), translateEnum() |
| MenuService | Menu data service | getMenu(), updateMenu() |
| DocumentsService | Document management | getDocuments(), uploadDocument(), deleteDocument() |
| ProjectsService | Project operations | getProjects(), createProject(), updateProject() |

### Models/DTOs
| Name | Purpose |
|------|---------|
| TranslatedEnumeration | Translated enum values |
| User | User data transfer object |
| Picture | Picture/image data |
| Document | Document metadata |
| FileType | File type information |
| UploadFilePayloadInput | File upload payload |
| Project | Project data transfer object |
| Status | Status information |

### Utilities
| Function | Purpose |
|----------|---------|
| translatedEnumerationHelpers | Enumeration translation utilities |

### Queries
| Name | Purpose |
|------|---------|
| ProjectQueries | GraphQL queries for projects |

## Usage Example
```typescript
import { DocumentsService, EnumerationService } from '@ta/services';

@Injectable()
export class MyService {
  constructor(
    private documentsService: DocumentsService,
    private enumerationService: EnumerationService
  ) {}

  loadData() {
    this.documentsService.getDocuments().subscribe(
      docs => console.log('Documents:', docs)
    );

    this.enumerationService.getEnumerations('status').subscribe(
      enums => console.log('Status enums:', enums)
    );
  }
}
```

## Dependencies
- @ta/server
- @angular/common
