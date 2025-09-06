import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FileListComponent } from '@ta/files-basic';
import { InputSchema } from '@ta/form-model';
import { LocalIconComponent } from '@ta/icons';
import { ButtonComponent } from '@ta/ui';
import { FileData, FileStructure, getBase64FromFile } from '@ta/utils';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import { InputSchemaModal } from './modal/input-schema-modal.component';

@Component({
  selector: 'ta-input-schema',
  templateUrl: './input-schema.component.html',
  styleUrls: ['./input-schema.component.scss'],
  standalone: true,
  imports: [NgIf, LocalIconComponent, ButtonComponent, FileListComponent, InputLayoutComponent],
})
export class InputSchemaComponent extends TaAbstractInputComponent<InputSchema> {
  get pics(): FileData[] | null {
    if (!this.input.value) {
      return null;
    }

    return [
      {
        id: 0,
        type: 'Image',
        url: this.input.value,
      },
    ];
  }

  get isCircularButton(): boolean {
    if (!this.pics) return false;

    return this.pics.length > 0;
  }

  set selection(value: string) {
    this.input.formControl?.setValue(value);
  }

  constructor(public dialog: MatDialog) {
    super();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open<InputSchemaModal, { file: FileStructure }>(InputSchemaModal);

    this._registerSubscription(
      dialogRef.afterClosed().subscribe(async (data: { file: FileStructure }) => {
        if (!data || !data.file) {
          return;
        }
        if (this.input.update) {
          const pics = await this.input.update([data.file]);

          if (pics && pics.length > 0 && data.file.file) {
            this.selection = await getBase64FromFile(data.file.file);
          }
        }
      })
    );
  }
}
