import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Subject } from 'rxjs';

import { FileEditComponent } from '@ta/files-basic';
import { FileStructure, TaBaseModal, newGuid } from '@ta/utils';

@Component({
  selector: '',
  styleUrls: ['./input-schema-modal.component.scss'],
  templateUrl: './input-schema-modal.component.html',
  standalone: true,
  imports: [FileEditComponent],
})
export class InputSchemaModal extends TaBaseModal {
  public askImage$ = new Subject<null>();
  public imagePath =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoAQMAAAB3bUanAAAABlBMVEUAAAD8/vwnjUF/AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAcVJREFUeJztzTEBAAAMAiD7l9YYOwYFSC/Fbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xb7g32cNHwzdl5x4gAAAABJRU5ErkJggg==';

  constructor(public dialogRef: MatDialogRef<InputSchemaModal, { file: FileStructure }>) {
    super();

    this.dialogRef.addPanelClass(['full-screen-modal', 'edit-mode']);
  }

  public close = () => {
    this.dialogRef.close();
  };
  public selected = () => {
    this.askImage$.next(null);
  };
  public savedImage(blob: Blob): void {
    const file = new File([blob], newGuid(), { type: blob.type });
    this.dialogRef.close({ file: { file, localUrl: this.imagePath } });
  }
}
