# @ta/files-basic

A comprehensive Angular library for file and document management, providing components for displaying, editing, and managing files and images.

## Installation

```bash
npm install @ta/files-basic
# or
yarn add @ta/files-basic
```

## Dependencies

This package requires the following peer dependencies:

- `@angular/common` ^18.2.13
- `@angular/core` ^18.2.13

And includes these Techatome dependencies:

- `@ta/form-model`
- `@ta/icons`
- `@ta/notification`
- `@ta/server`
- `@ta/styles`
- `@ta/ui`
- `@ta/utils`

## Usage

### Module Import (Deprecated)

```typescript
import { TaFilesBasicModule } from '@ta/files-basic';

@NgModule({
  imports: [TaFilesBasicModule]
})
export class AppModule { }
```

**Note:** The module-based approach is deprecated. Use standalone components instead (see below).

### Standalone Components (Recommended)

```typescript
import {
  FileListComponent,
  FileEditComponent,
  DocumentsListComponent
} from '@ta/files-basic';

@Component({
  standalone: true,
  imports: [FileListComponent, FileEditComponent, DocumentsListComponent]
})
export class MyComponent { }
```

## Components

### FileListComponent

Displays a list of files with support for selection, deletion, and additional information display.

**Selector:** `ta-files-list`

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `files` | `FileData[]` | `[]` | Array of files to display |
| `canDeleteFile` | `boolean` | `false` | Enable file deletion functionality |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `fileSelected` | `EventEmitter<FileData & { index: number }>` | Emitted when a file is selected |
| `moreInformationSelected` | `EventEmitter<FileData>` | Emitted when more information is requested |
| `fileDeleted` | `EventEmitter<FileData>` | Emitted when a file is deleted |

#### Example

```typescript
import { Component } from '@angular/core';
import { FileListComponent } from '@ta/files-basic';
import { FileData } from '@ta/utils';

@Component({
  selector: 'app-my-files',
  standalone: true,
  imports: [FileListComponent],
  template: `
    <ta-files-list
      [files]="myFiles"
      [canDeleteFile]="true"
      (fileSelected)="onFileSelected($event)"
      (fileDeleted)="onFileDeleted($event)"
      (moreInformationSelected)="onMoreInfo($event)">
    </ta-files-list>
  `
})
export class MyFilesComponent {
  myFiles: FileData[] = [
    {
      id: '1',
      name: 'document.pdf',
      url: 'https://example.com/document.pdf',
      type: 'Document',
      size: 1024000
    }
  ];

  onFileSelected(file: FileData & { index: number }) {
    console.log('Selected file:', file);
  }

  onFileDeleted(file: FileData) {
    this.myFiles = this.myFiles.filter(f => f.id !== file.id);
  }

  onMoreInfo(file: FileData) {
    console.log('More info for:', file);
  }
}
```

### FileEditComponent

Advanced image editor component built on tui-image-editor, supporting drawing, shapes, text, and image manipulation.

**Selector:** `ta-files-edit`

#### Inputs

| Property | Type | Description |
|----------|------|-------------|
| `imagePath` | `string` | Path or URL to the image to edit |
| `saveImage$` | `Observable<null>` | Observable that triggers image save when emitted |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `savedImage` | `EventEmitter<Blob>` | Emitted with the edited image as a Blob |

#### Features

- Free-hand drawing
- Shape tools (rectangle, circle, triangle, line)
- Text annotation
- Color picker with predefined colors
- Adjustable brush size
- Undo/Redo functionality
- Object selection and deletion
- Keyboard shortcuts (Enter to stop drawing)

#### Example

```typescript
import { Component } from '@angular/core';
import { FileEditComponent } from '@ta/files-basic';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-image-editor',
  standalone: true,
  imports: [FileEditComponent],
  template: `
    <ta-files-edit
      [imagePath]="imageUrl"
      [saveImage$]="saveImage$"
      (savedImage)="onImageSaved($event)">
    </ta-files-edit>
    <button (click)="save()">Save Image</button>
  `
})
export class ImageEditorComponent {
  imageUrl = 'https://example.com/image.jpg';
  saveImage$ = new Subject<null>();

  save() {
    this.saveImage$.next(null);
  }

  onImageSaved(blob: Blob) {
    // Upload or process the edited image
    console.log('Image saved:', blob);
  }
}
```

### DocumentsListComponent

Displays a list of documents with metadata, supporting actions like selection, deletion, and download.

**Selector:** `ta-documents-list`

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `documentsIds` | `string[]` | - | Array of document IDs to fetch and display |
| `emptyMessage` | `string` | `''` | Message to display when no documents are available |
| `actions` | `'delete' \| 'select' \| ''` | `''` | Type of actions to enable |
| `defaultSelected` | `string[]` | `[]` | IDs of documents that should be selected by default |
| `readonly` | `boolean` | `false` | Whether the list is in readonly mode |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `remove` | `EventEmitter<string>` | Emitted when a document is deleted |
| `checkedFilesChanged` | `EventEmitter<InputUploadValue[]>` | Emitted when file selection changes |

#### Example

```typescript
import { Component } from '@angular/core';
import { DocumentsListComponent } from '@ta/files-basic';
import { InputUploadValue } from '@ta/form-model';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [DocumentsListComponent],
  template: `
    <ta-documents-list
      [documentsIds]="documentIds"
      [actions]="'select'"
      [emptyMessage]="'No documents available'"
      (remove)="onDocumentRemoved($event)"
      (checkedFilesChanged)="onSelectionChanged($event)">
    </ta-documents-list>
  `
})
export class DocumentsComponent {
  documentIds = ['doc1', 'doc2', 'doc3'];

  onDocumentRemoved(documentId: string) {
    this.documentIds = this.documentIds.filter(id => id !== documentId);
  }

  onSelectionChanged(selectedFiles: InputUploadValue[]) {
    console.log('Selected files:', selectedFiles);
  }
}
```

## Services

### AppPicturesService

Service for fetching and managing pictures/images.

#### Methods

- `fetchDashboardProjects$(id: string): Observable<Picture[]>` - Fetches pictures for a specific project

#### Example

```typescript
import { Component, inject } from '@angular/core';
import { AppPicturesService } from '@ta/files-basic';

@Component({
  selector: 'app-gallery',
  template: `
    <div *ngFor="let picture of pictures$ | async">
      <img [src]="picture.url" />
    </div>
  `
})
export class GalleryComponent {
  private picturesService = inject(AppPicturesService);
  pictures$ = this.picturesService.fetchDashboardProjects$('project-123');
}
```

## Types

### Picture

```typescript
interface Picture {
  url: string;
}
```

## Styling

The components come with pre-built styles. Make sure to import the necessary styles in your application:

```scss
@import '@ta/files-basic/styles';
```

Or import the Techatome styles library:

```scss
@import '@ta/styles';
```

## Advanced Usage

### Combining Components

```typescript
import { Component } from '@angular/core';
import { FileListComponent, FileEditComponent } from '@ta/files-basic';
import { FileData } from '@ta/utils';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [FileListComponent, FileEditComponent],
  template: `
    <ta-files-list
      *ngIf="!editingFile"
      [files]="files"
      (fileSelected)="editFile($event)">
    </ta-files-list>

    <ta-files-edit
      *ngIf="editingFile"
      [imagePath]="editingFile.url"
      [saveImage$]="saveImage$"
      (savedImage)="onImageEdited($event)">
    </ta-files-edit>
  `
})
export class FileManagerComponent {
  files: FileData[] = [];
  editingFile: FileData | null = null;
  saveImage$ = new Subject<null>();

  editFile(file: FileData & { index: number }) {
    this.editingFile = file;
  }

  onImageEdited(blob: Blob) {
    // Handle the edited image
    this.editingFile = null;
  }
}
```

## Browser Support

This library supports all modern browsers that are compatible with Angular 18+.

## License

MIT

## Contributing

Please refer to the main repository's contribution guidelines.
