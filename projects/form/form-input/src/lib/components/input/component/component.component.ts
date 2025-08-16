import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { InputComponent } from '@ta/form-model';
import { CamIconsModule } from '@ta/icons';
import { CamLayoutModule, CamUiModule } from '@ta/ui';
import { CamBaseModal } from '@ta/utils';
import { Subject } from 'rxjs';

import { CamAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-component',
  standalone: true,
  imports: [InputLayoutComponent, ReactiveFormsModule, CamIconsModule],
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss',
})
export class ComponentInputComponent extends CamAbstractInputComponent<InputComponent> {
  readonly dialog = inject(MatDialog);

  public open() {
    this.dialog.open(TemplateModal, {
      data: {
        input: this.input,
      },
    });
  }
}

type TemplateModalData = {
  input: InputComponent;
};
@Component({
  selector: '',
  standalone: true,
  imports: [NgTemplateOutlet, CamLayoutModule, CamUiModule],
  templateUrl: './modal.html',
})
export class TemplateModal extends CamBaseModal {
  readonly dialogRef = inject(MatDialogRef<TemplateModal>);
  readonly data: TemplateModalData = inject(MAT_DIALOG_DATA);

  readonly selectedValue$ = new Subject<string>();

  constructor() {
    super();

    this.dialogRef.addPanelClass('classic-modal');

    this._registerSubscription(
      this.selectedValue$.subscribe({
        next: value => this.select(value),
      })
    );
  }

  public select(value: string) {
    this.data.input.selectedValue$.next(value);

    this.dialogRef.close();
  }
}
