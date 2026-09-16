import { Component } from '@angular/core';

import { Subject } from 'rxjs';

import { FileEditComponent } from '@ta/files-basic';
import { TaModalComponent } from '@ta/ui';
import { FileStructure, TaBaseModal, newGuid } from '@ta/utils';

@Component({
  selector: 'ta-input-schema-modal',
  styleUrls: ['./input-schema-modal.component.scss'],
  templateUrl: './input-schema-modal.component.html',
  standalone: true,
  imports: [FileEditComponent, TaModalComponent],
})
/** Éditeur de schéma plein écran ; rend le fichier dessiné. */
export class InputSchemaModal extends TaBaseModal<null, { file: FileStructure }> {
  public askImage$ = new Subject<null>();
  public imagePath =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoAQMAAAB3bUanAAAABlBMVEUAAAD8/vwnjUF/AAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAcVJREFUeJztzTEBAAAMAiD7l9YYOwYFSC/Fbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xa73W632+12u91ut9vtdrvdbrfb7Xb7g32cNHwzdl5x4gAAAABJRU5ErkJggg==';

  constructor() {
    super();
  }

  public close = () => {
    this.dismiss();
  };

  public selected = () => {
    this.askImage$.next(null);
  };

  public savedImage(blob: Blob): void {
    const file = new File([blob], newGuid(), { type: blob.type });
    this.confirm({ file: { file, localUrl: this.imagePath } });
  }
}
