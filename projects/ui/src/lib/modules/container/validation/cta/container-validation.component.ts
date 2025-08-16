import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CamBaseComponent } from '@ta/utils';

import { openModal } from '../common-modal';

@Component({
  selector: 'ta-container-validation',
  templateUrl: './container-validation.component.html',
})
export class ContainerValidationComponent extends CamBaseComponent {
  @Input()
  disabled = false;

  @Output()
  validated = new EventEmitter();

  constructor(public dialog: MatDialog) {
    super();
  }

  openModal(): void {
    if (this.disabled) {
      return;
    }

    openModal(this.dialog).subscribe(result => {
      if (result) {
        this.validated.emit();
      }
    });
  }
}
