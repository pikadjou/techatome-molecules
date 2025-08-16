import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { CamBaseComponent } from '@ta/utils';

export type ModalStyle = 'full' | 'big' | 'classic' | 'small';
@Component({
  selector: 'ta-layout-modal',
  templateUrl: './layout-modal.component.html',
  styleUrls: ['./layout-modal.component.scss'],
})
export class LayoutModalComponent extends CamBaseComponent implements OnInit {
  @Input()
  style: ModalStyle = 'classic';

  @Input()
  title: string = '';

  constructor(public dialogRef: MatDialogRef<any>) {
    super();
  }

  ngOnInit() {
    this.dialogRef.addPanelClass(this.style + '-modal');
  }

  public close() {
    this.dialogRef.close();
  }
}
