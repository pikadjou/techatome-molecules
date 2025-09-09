import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InputLogo } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { FileData, pickImages } from '@ta/utils';

import { TaAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';
import { InputLogoModal } from './modal/input-logo-modal.component';

@Component({
  selector: 'ta-input-logo',
  templateUrl: './input-logo.component.html',
  styleUrls: ['./input-logo.component.scss'],
  standalone: true,
  imports: [FontIconComponent, FormLabelComponent, ButtonComponent, TranslatePipe],
})
export class InputLogoComponent extends TaAbstractInputComponent<InputLogo> implements OnInit {
  get selection(): string | null {
    return this.input.value;
  }

  get fileDataSelection(): FileData | null {
    if (!this.selection) return null;

    return {
      id: 0,
      type: 'Image',
      url: this.selection,
    };
  }

  get hasLogo(): boolean {
    return !!this.selection;
  }

  set selection(value: string | null) {
    this.input.formControl?.setValue(value);
  }

  constructor(public dialog: MatDialog) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.input.removeFile$) {
      this._registerSubscription(
        this.input.removeFile$.subscribe(fileData => {
          if (this.selection === fileData.url) {
            this.selection = null;
          }
        })
      );
    }
  }

  public async openDialog() {
    if (!this.input.availableFile$) {
      const images = await pickImages();
      if (images.length > 0) {
        this.selection = images[0].localUrl!;
      }
      return;
    }

    const dialogRef = this.dialog.open(InputLogoModal, {
      data: { input: this.input, selection: this.selection },
    });

    this._registerSubscription(
      dialogRef.afterClosed().subscribe(selection => {
        if (selection !== undefined) {
          this.selection = selection;
        }
      })
    );
  }

  public onFileDeleted(fileData: FileData) {
    if (this.selection === fileData.url) {
      this.selection = null;
    }
  }

  public removeLogo() {
    this.selection = null;
  }
}

export interface LogoDialogData {
  input: InputLogo;
  selection: string | null;
}
