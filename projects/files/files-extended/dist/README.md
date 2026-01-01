# @ta/files-extended

An advanced Angular library extending `@ta/files-basic` with mobile-ready file upload capabilities using Capacitor, including camera integration and file picker support.

## Installation

```bash
npm install @ta/files-extended
# or
yarn add @ta/files-extended
```

## Dependencies

This package requires the following peer dependencies:

- `@angular/common` ^18.2.13
- `@angular/core` ^18.2.13

And includes these dependencies:

- `@ta/files-basic` - Base file management components
- `@ta/form-basic` - Form components
- `@ta/icons` - Icon library
- `@ta/menu` - Menu components
- `@capacitor/camera` - Native camera access
- `@capawesome/capacitor-file-picker` - Native file picker

## Usage

### Module Import (Deprecated)

```typescript
import { TaFilesExtendedModule } from '@ta/files-extended';

@NgModule({
  imports: [TaFilesExtendedModule]
})
export class AppModule { }
```

**Note:** The module-based approach is deprecated. Use standalone components instead (see below).

### Standalone Components (Recommended)

```typescript
import {
  FilesDisplayComponent,
  UploadComponent
} from '@ta/files-extended';

@Component({
  standalone: true,
  imports: [FilesDisplayComponent, UploadComponent]
})
export class MyComponent { }
```

## Components

### FilesDisplayComponent

A comprehensive component that combines file listing, uploading, and navigation in a single interface.

**Selector:** `ta-files-display`

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `files$` | `Observable<FileData[]>` | - | Observable stream of files to display |
| `menu` | `Menu` | - | Navigation menu configuration |
| `canAddFile` | `boolean` | `true` | Enable/disable file upload functionality |
| `tempFiles` | `FileData[]` | - | Temporary files being uploaded |
| `fileType` | `FileType` | - | Type of files ('Document' or 'Image') |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `fileSelected` | `EventEmitter<FileData & { index: number }>` | Emitted when a file is selected |
| `moreInformationSelected` | `EventEmitter<FileData>` | Emitted when more information is requested |
| `fileUploading` | `EventEmitter<FileStructure[]>` | Emitted when files are being uploaded |

#### Features

- Automatic feature detection based on file type
- Integration with file list from `@ta/files-basic`
- Built-in upload functionality
- Navigation menu support
- Loading and error state management

#### Example

```typescript
import { Component } from '@angular/core';
import { FilesDisplayComponent } from '@ta/files-extended';
import { FileData, FileType } from '@ta/utils';
import { Menu } from '@ta/menu';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-file-gallery',
  standalone: true,
  imports: [FilesDisplayComponent],
  template: `
    <ta-files-display
      [files$]="files$"
      [menu]="navigationMenu"
      [fileType]="'Image'"
      [canAddFile]="true"
      [tempFiles]="uploadingFiles"
      (fileSelected)="onFileSelected($event)"
      (fileUploading)="onFilesUploading($event)">
    </ta-files-display>
  `
})
export class FileGalleryComponent {
  files$: Observable<FileData[]> = of([
    {
      id: '1',
      name: 'photo1.jpg',
      url: 'https://example.com/photo1.jpg',
      type: 'Image',
      size: 2048000
    }
  ]);

  navigationMenu: Menu = {
    items: [
      { label: 'Gallery', route: '/gallery' },
      { label: 'Documents', route: '/documents' }
    ]
  };

  uploadingFiles: FileData[] = [];

  onFileSelected(file: FileData & { index: number }) {
    console.log('Selected file:', file);
  }

  onFilesUploading(files: FileStructure[]) {
    console.log('Uploading files:', files);
    // Handle file upload logic
  }
}
```

### UploadComponent

A versatile upload component supporting multiple input methods including camera capture, image picker, and file picker.

**Selector:** `ta-files-upload`

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `features` | `Feature[]` | `[]` | Enabled upload features |
| `canSelectMultipleFiles` | `boolean` | `false` | Allow multiple file selection |
| `showInActionButton` | `boolean` | `true` | Display as action button |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `filesPicked` | `EventEmitter<FileStructure[]>` | Emitted when files are selected |

#### Feature Types

```typescript
type Feature = 'take-pic' | 'upload-pic' | 'upload-file';
```

- `take-pic` - Enable camera capture (mobile devices)
- `upload-pic` - Enable image gallery picker
- `upload-file` - Enable document file picker

#### Supported File Types

When using `upload-file`, the following file types are supported:

- PDF (`.pdf`)
- Word Documents (`.doc`, `.docx`)
- Excel Spreadsheets (`.xls`, `.xlsx`)
- Text Files (`.txt`)

#### Example

```typescript
import { Component } from '@angular/core';
import { UploadComponent } from '@ta/files-extended';
import { FileStructure } from '@ta/utils';

@Component({
  selector: 'app-upload-demo',
  standalone: true,
  imports: [UploadComponent],
  template: `
    <ta-files-upload
      [features]="uploadFeatures"
      [canSelectMultipleFiles]="true"
      [showInActionButton]="true"
      (filesPicked)="onFilesPicked($event)">
    </ta-files-upload>
  `
})
export class UploadDemoComponent {
  uploadFeatures: Feature[] = ['take-pic', 'upload-pic', 'upload-file'];

  onFilesPicked(files: FileStructure[]) {
    console.log('Files picked:', files);
    // Process the selected files
    files.forEach(fileStructure => {
      this.uploadFile(fileStructure.file, fileStructure.localUrl);
    });
  }

  uploadFile(file: File, localUrl: string | null) {
    // Implement your upload logic here
    const formData = new FormData();
    formData.append('file', file);
    // Upload to server...
  }
}
```

#### Camera Integration Example

```typescript
import { Component } from '@angular/core';
import { UploadComponent } from '@ta/files-extended';

@Component({
  selector: 'app-camera-upload',
  standalone: true,
  imports: [UploadComponent],
  template: `
    <ta-files-upload
      [features]="['take-pic']"
      (filesPicked)="onPhotoCaptured($event)">
    </ta-files-upload>
  `
})
export class CameraUploadComponent {
  onPhotoCaptured(files: FileStructure[]) {
    const photo = files[0];
    console.log('Photo captured:', photo.file);
    console.log('Local preview URL:', photo.localUrl);
  }
}
```

## Services

### UploadDocumentFormService

Service for generating form controls for document upload dialogs.

#### Methods

- `getGroupForm(data: UploadDocumentData): InputBase<any>[]` - Generates form structure for document upload

#### Example

```typescript
import { Component, inject } from '@angular/core';
import { UploadDocumentFormService, UploadDocumentData } from '@ta/files-extended';
import { of } from 'rxjs';

@Component({
  selector: 'app-document-upload-form',
  template: `
    <ta-form [inputs]="formInputs"></ta-form>
  `
})
export class DocumentUploadFormComponent {
  private formService = inject(UploadDocumentFormService);

  uploadData: UploadDocumentData = {
    description: 'Initial description',
    documentTypes$: of([
      { id: 1, translatedValue: 'Invoice' },
      { id: 2, translatedValue: 'Contract' }
    ])
  };

  formInputs = this.formService.getGroupForm(this.uploadData);
}
```

## Types and Interfaces

### Document

```typescript
interface Document {
  id: number;
  url: string;
  isOwner: boolean;
  fileMetadata: FileMetadata;
}
```

### FileMetadata

```typescript
interface FileMetadata {
  creationDate: string;
  owner: User | null;
  fileSize: number;
  fileType: TranslatedEnumeration;
  description: string;
  fileName: string;
}
```

### UploadDocumentData

```typescript
interface UploadDocumentData {
  description?: string;
  documentTypes$: Observable<TranslatedEnumeration[]>;
}
```

### FileStructure

```typescript
interface FileStructure {
  file: File;
  localUrl: string | null;
}
```

## Advanced Usage

### Complete File Management System

```typescript
import { Component } from '@angular/core';
import { FilesDisplayComponent, UploadComponent } from '@ta/files-extended';
import { FileData, FileStructure } from '@ta/utils';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [FilesDisplayComponent],
  template: `
    <ta-files-display
      [files$]="files$"
      [menu]="menu"
      [fileType]="currentFileType"
      [tempFiles]="uploadingFiles"
      (fileUploading)="handleUpload($event)"
      (fileSelected)="openFile($event)">
    </ta-files-display>
  `
})
export class FileManagerComponent {
  private filesSubject = new BehaviorSubject<FileData[]>([]);
  files$ = this.filesSubject.asObservable();

  uploadingFiles: FileData[] = [];
  currentFileType = 'Document';

  menu = {
    items: [
      { label: 'All Files', action: () => this.filterFiles('all') },
      { label: 'Documents', action: () => this.filterFiles('Document') },
      { label: 'Images', action: () => this.filterFiles('Image') }
    ]
  };

  async handleUpload(files: FileStructure[]) {
    for (const fileStructure of files) {
      const tempFile: FileData = {
        id: `temp-${Date.now()}`,
        name: fileStructure.file.name,
        url: fileStructure.localUrl || '',
        type: this.currentFileType,
        size: fileStructure.file.size,
        isLoading: true
      };

      this.uploadingFiles.push(tempFile);

      try {
        // Upload file to server
        const uploadedFile = await this.uploadToServer(fileStructure.file);

        // Add to files list
        const currentFiles = this.filesSubject.value;
        this.filesSubject.next([...currentFiles, uploadedFile]);
      } catch (error) {
        console.error('Upload failed:', error);
      } finally {
        this.uploadingFiles = this.uploadingFiles.filter(f => f.id !== tempFile.id);
      }
    }
  }

  openFile(file: FileData & { index: number }) {
    window.open(file.url, '_blank');
  }

  filterFiles(type: string) {
    // Implement filtering logic
  }

  private async uploadToServer(file: File): Promise<FileData> {
    // Implement server upload logic
    return {
      id: 'uploaded-id',
      name: file.name,
      url: 'https://server.com/file',
      type: this.currentFileType,
      size: file.size
    };
  }
}
```

### Mobile-Specific Implementation

```typescript
import { Component } from '@angular/core';
import { UploadComponent } from '@ta/files-extended';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-mobile-upload',
  standalone: true,
  imports: [UploadComponent],
  template: `
    <ta-files-upload
      [features]="availableFeatures"
      [canSelectMultipleFiles]="platform.is('ios') || platform.is('android')"
      (filesPicked)="handleFiles($event)">
    </ta-files-upload>
  `
})
export class MobileUploadComponent {
  constructor(public platform: Platform) {}

  get availableFeatures() {
    // On mobile, enable camera. On web, only upload
    return this.platform.is('capacitor')
      ? ['take-pic', 'upload-pic', 'upload-file']
      : ['upload-pic', 'upload-file'];
  }

  handleFiles(files: FileStructure[]) {
    // Process files
  }
}
```

## Capacitor Configuration

For mobile functionality, ensure your Capacitor configuration includes the necessary permissions:

### iOS (Info.plist)

```xml
<key>NSCameraUsageDescription</key>
<string>We need access to your camera to take photos</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>We need access to your photo library to select images</string>
```

### Android (AndroidManifest.xml)

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- iOS devices (via Capacitor)
- Android devices (via Capacitor)

## License

MIT

## Contributing

Please refer to the main repository's contribution guidelines.
