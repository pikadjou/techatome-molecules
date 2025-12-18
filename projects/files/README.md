# @ta/files

**Purpose:** File management with basic and extended capabilities for upload and display

## Exports

### Components - Basic
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| FilesListComponent | `ta-files-list` | File list display | files, selectable |
| FilesEditComponent | `ta-files-edit` | File editing interface | file, onSave |
| DocumentsListComponent | `ta-documents-list` | Documents list view | documents |

### Components - Extended
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| FilesDisplayComponent | `ta-files-display` | Advanced file display | files, viewMode |
| FilesUploadComponent | `ta-files-upload` | File upload with drag-and-drop | accept, multiple, onUpload |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| UploadDocumentFormService | Upload form management | createForm(), validate(), submit() |

### Models/DTOs
| Name | Purpose |
|------|---------|
| FileMetadata | File metadata structure |
| DocumentDTO | Document data transfer object |

## Usage Example
```typescript
import { FilesUploadComponent } from '@ta/files';

@Component({
  template: `
    <ta-files-upload
      [accept]="'.pdf,.doc,.docx'"
      [multiple]="true"
      (onUpload)="handleUpload($event)">
    </ta-files-upload>
  `
})
export class MyComponent {
  handleUpload(files: File[]) {
    console.log('Files uploaded:', files);
  }
}
```

## Dependencies
- @ta/ui
- @ta/form
- @angular/common
