import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { Subject } from 'rxjs';

import { InputComponent } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { LayoutModalComponent } from '@ta/ui';
import { TaBaseModal } from '@ta/utils';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-component',
  standalone: true,
  imports: [InputLayoutComponent, ReactiveFormsModule, FontIconComponent],
  templateUrl: './component.component.html',
  styleUrl: './component.component.scss',
})
export class ComponentInputComponent extends TaAbstractInputComponent<InputComponent> {
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
  imports: [NgTemplateOutlet, LayoutModalComponent],
  templateUrl: './modal.html',
})
export class TemplateModal extends TaBaseModal {
  readonly dialogRef = inject(MatDialogRef<TemplateModal>);
  readonly data: TemplateModalData = inject(MAT_DIALOG_DATA);

  readonly selectedValue$ = new Subject<string>();

  constructor() {
    super();

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
