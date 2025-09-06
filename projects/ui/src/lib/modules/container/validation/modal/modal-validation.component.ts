import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from '../../../../components/ui/button/button.component';
import { LayoutModalComponent } from '../../../layout/layout-modal/layout-modal.component';
import { TaTranslationContainer } from '../../translation.service';
import { ModalParameter } from '../common-modal';

@Component({
  selector: '',
  templateUrl: './modal-validation.component.html',
  styleUrls: ['./modal-validation.component.scss'],
  standalone: true,
  imports: [TranslateModule, ButtonComponent, LayoutModalComponent],
})
export class ValidationModal {
  public get title(): string {
    return this.data?.title ?? 'validation.modal.title';
  }

  public get subtitle(): string {
    return this.data?.subtitle ?? 'validation.modal.content';
  }

  constructor(
    public dialogRef: MatDialogRef<ValidationModal>,
    @Inject(MAT_DIALOG_DATA) public data?: ModalParameter
  ) {
    TaTranslationContainer.getInstance();
  }

  public onNoClick(): void {
    this.dialogRef.close(false);
  }
  public onYesClick(): void {
    this.dialogRef.close(true);
  }
}
